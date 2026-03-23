// ─── SUPABASE CLIENT ────────────────────────────────────────────────────────
let supabaseClient = null;

function initSupabase() {
  const sb = window._supa || window.supabase;
  if (sb && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
    supabaseClient = sb.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
}

// ─── NAV SCROLL ─────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── BOOKING MODAL ───────────────────────────────────────────────────────────
function openBookingModal() {
  const from = document.getElementById('b_from').value;
  const to   = document.getElementById('b_to').value;
  const dt   = document.getElementById('b_datetime').value;

  if (!from || !to || !dt) {
    ['b_from','b_to','b_datetime'].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value) { el.classList.add('error'); setTimeout(() => el.classList.remove('error'), 2000); }
    });
    return;
  }
  document.getElementById('bookingModal').classList.add('open');
  document.getElementById('bookingStatus').className = 'status-msg';
  document.getElementById('bookingStatus').textContent = '';
}

function closeModal() {
  document.getElementById('bookingModal').classList.remove('open');
}

document.getElementById('bookingModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ─── CHECK AVAILABILITY ──────────────────────────────────────────────────────
async function checkAvailability(datetime, vehicle) {
  if (!supabaseClient) return true;
  const dt = new Date(datetime);
  const buffer = 3 * 60 * 60 * 1000;
  const rangeStart = new Date(dt.getTime() - buffer).toISOString();
  const rangeEnd   = new Date(dt.getTime() + buffer).toISOString();
  const { data, error } = await supabaseClient
    .from('bookings').select('id').eq('vehicle', vehicle)
    .gte('pickup_datetime', rangeStart).lte('pickup_datetime', rangeEnd)
    .in('status', ['confirmed', 'pending']);
  if (error) return true;
  return data.length === 0;
}

// ─── SUBMIT BOOKING ──────────────────────────────────────────────────────────
async function submitBooking() {
  const name    = document.getElementById('m_name').value.trim();
  const phone   = document.getElementById('m_phone').value.trim();
  const email   = document.getElementById('m_email').value.trim();
  const vehicle = document.getElementById('m_vehicle').value;
  const notes   = document.getElementById('m_notes').value.trim();
  const from    = document.getElementById('b_from').value.trim();
  const to      = document.getElementById('b_to').value.trim();
  const dt      = document.getElementById('b_datetime').value;
  const pax     = document.getElementById('b_pax').value;
  const service = document.getElementById('b_service').value;

  const statusEl = document.getElementById('bookingStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (!name || !phone || !email) {
    statusEl.className = 'status-msg error';
    statusEl.textContent = t('fill_required');
    return;
  }

  statusEl.className = 'status-msg loading';
  statusEl.textContent = t('booking_loading');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span>' + t('booking_loading');

  try {
    if (!supabaseClient) throw new Error('not_configured');

    const available = await checkAvailability(dt, vehicle);
    if (!available) {
      statusEl.className = 'status-msg error';
      statusEl.textContent = t('booking_conflict');
      submitBtn.disabled = false;
      submitBtn.innerHTML = t('modal_submit');
      return;
    }

    const { data, error } = await supabaseClient.from('bookings').insert([{
      name, phone, email, vehicle,
      pickup_location: from, dropoff_location: to,
      pickup_datetime: new Date(dt).toISOString(),
      passengers: parseInt(pax), service_type: service,
      notes, status: 'pending', language: currentLang,
      created_at: new Date().toISOString()
    }]).select();

    if (error) throw error;

    await supabaseClient.functions.invoke('send-booking-email', { body: { booking: data[0] } });

    statusEl.className = 'status-msg success';
    statusEl.textContent = t('booking_success');
    submitBtn.disabled = false;
    submitBtn.innerHTML = t('modal_submit');

    setTimeout(() => {
      closeModal();
      ['m_name','m_phone','m_email','m_notes'].forEach(id => document.getElementById(id).value = '');
      ['b_from','b_to','b_datetime'].forEach(id => document.getElementById(id).value = '');
    }, 3000);

  } catch (err) {
    if (err.message === 'not_configured') {
      statusEl.className = 'status-msg success';
      statusEl.textContent = '✓ [DEMO] Booking received! Configure Supabase to enable full functionality.';
    } else {
      statusEl.className = 'status-msg error';
      statusEl.textContent = t('booking_error');
    }
    submitBtn.disabled = false;
    submitBtn.innerHTML = t('modal_submit');
  }
}

// ─── SUBMIT CONTACT ──────────────────────────────────────────────────────────
async function submitContact() {
  const name  = document.getElementById('c_name').value.trim();
  const email = document.getElementById('c_email').value.trim();
  const phone = document.getElementById('c_phone').value.trim();
  const route = document.getElementById('c_route').value.trim();
  const msg   = document.getElementById('c_msg').value.trim();
  const statusEl = document.getElementById('contactStatus');

  if (!name || !email) {
    statusEl.className = 'status-msg error';
    statusEl.textContent = t('fill_required');
    return;
  }

  statusEl.className = 'status-msg loading';
  statusEl.textContent = t('booking_loading');

  try {
    if (!supabaseClient) throw new Error('not_configured');
    await supabaseClient.from('contact_messages').insert([{ name, email, phone, route, message: msg, created_at: new Date().toISOString() }]);
    await supabaseClient.functions.invoke('send-contact-email', { body: { name, email, phone, route, message: msg } });
    statusEl.className = 'status-msg success';
    statusEl.textContent = t('contact_success');
    ['c_name','c_email','c_phone','c_route','c_msg'].forEach(id => document.getElementById(id).value = '');
  } catch (err) {
    if (err.message === 'not_configured') {
      statusEl.className = 'status-msg success';
      statusEl.textContent = '✓ [DEMO] Message received!';
    } else {
      statusEl.className = 'status-msg error';
      statusEl.textContent = t('contact_error');
    }
  }
}

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  setLang('en');
});
