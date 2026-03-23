// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  en: {
    nav_services: 'Services', nav_fleet: 'Fleet', nav_destinations: 'Destinations', nav_book: 'Book Now',
    hero_eyebrow: 'Switzerland & France — Premium Chauffeur',
    hero_title: 'Arrive in <em>absolute</em><br>elegance',
    hero_sub: 'Private VIP transfers crafted for discerning travellers. Door-to-door luxury, flawlessly orchestrated.',
    hero_btn1: 'Book a Transfer', hero_btn2: 'Explore Services',
    book_title: 'Reserve Your Journey', book_service: 'Service Type', book_pickup: 'Pick-up Location',
    book_dest: 'Destination', book_date: 'Date & Time', book_pax: 'Passengers', book_cta: 'Get Quote',
    svc_airport: 'Airport Transfer', svc_p2p: 'Point to Point', svc_hourly: 'Hourly Hire',
    svc_corp: 'Corporate', svc_ski: 'Ski Resorts',
    modal_title: 'Complete Your Booking', modal_sub: "Fill in your details and we'll confirm shortly.",
    modal_submit: 'Confirm Booking',
    srv_label: 'What We Offer', srv_title: 'Tailored<br><em>luxury</em> for<br>every journey',
    srv_desc: 'From private airport pickups to full-day charters, our professional chauffeurs ensure every detail of your transfer is seamless, discreet, and impeccably delivered across Switzerland and France.',
    s1_title: 'Airport Transfers', s1_desc: 'Flight tracking, meet & greet, and seamless pickups from Geneva, Zurich, Lyon, and all major regional airports.',
    s2_title: 'Ski Resort Transfers', s2_desc: 'Arrive at Verbier, Zermatt, Courchevel, or Megève in style. We handle your luggage and ski equipment.',
    s3_title: 'Corporate Travel', s3_desc: 'Punctual, professional, and discreet. Dedicated chauffeurs for executives and business delegations.',
    s4_title: 'Event & Gala', s4_desc: 'Weddings, galas, private parties — arrive with presence. Our fleet is available for bespoke event transportation.',
    s5_title: 'Day Tours', s5_desc: 'Private guided tours across the Swiss Alps, Lac Léman, or the French Riviera with a personal chauffeur-guide.',
    s6_title: 'Hourly Hire', s6_desc: 'At your disposal, hour by hour. Meetings, shopping, medical appointments — your chauffeur waits for you.',
    fleet_label: 'Our Fleet', fleet_title: 'The finest<br>vehicles for<br><em>elite</em> travel',
    f1_desc: 'Executive Sedan · Up to 3 passengers', f2_desc: 'Premium Van · Up to 7 passengers', f3_desc: 'Luxury Minibus · Up to 14 passengers',
    why_label: 'Why Choose Us', why_title: 'The <em>standard</em><br>of excellence',
    w1_title: '24 / 7 Availability', w1_desc: 'Day or night, our team and chauffeurs are available round-the-clock to accommodate any schedule.',
    w2_title: 'Flight Tracking', w2_desc: 'We monitor your flight in real time. Delays or early arrivals — your driver is always there on time.',
    w3_title: 'Fixed Pricing', w3_desc: 'No surprises. Transparent, all-inclusive rates with no hidden fees or metered surcharges.',
    w4_title: 'Discretion Guaranteed', w4_desc: 'Your privacy is our priority. Our chauffeurs operate with the utmost professionalism and confidentiality.',
    dest_label: 'Where We Operate', dest_title: 'Your <em>gateway</em><br>to the Alps',
    testi_label: 'Client Voices', testi_title: 'Trusted by<br><em>discerning</em> travellers',
    t1: '"Impeccable service from start to finish. Our chauffeur was already waiting as we cleared customs."',
    t2: '"We booked transfers for our entire ski group across three days. Everything was punctual and spotless."',
    t3: '"For corporate travel, reliability is everything. VIP Transfers has never let us down — not once."',
    contact_label: 'Get In Touch', contact_title: 'Let us plan<br>your <em>perfect</em><br>journey',
    c_phone: 'Phone', c_hours: 'Hours', c_hours_val: '24 hours · 7 days a week',
    cf_label: 'Send a Message', cf_title: 'Quick Enquiry', cf_btn: 'Send Enquiry',
    footer_desc: 'Premium private chauffeur service across Switzerland and France. Elegance, punctuality, and absolute discretion — every journey, every time.',
    footer_company: 'Company', footer_about: 'About Us', footer_fleet: 'Our Fleet',
    booking_conflict: '⚠️ This time slot is already booked. Please choose a different date or time.',
    booking_success: '✓ Booking confirmed! We will contact you shortly.',
    booking_error: 'Something went wrong. Please try again or call us directly.',
    booking_loading: 'Processing your booking…',
    contact_success: '✓ Message sent! We will reply within 24 hours.',
    contact_error: 'Could not send message. Please email us directly.',
    fill_required: 'Please fill in all required fields.',
  },

  de: {
    nav_services: 'Leistungen', nav_fleet: 'Fahrzeuge', nav_destinations: 'Ziele', nav_book: 'Jetzt Buchen',
    hero_eyebrow: 'Schweiz & Frankreich — Premium Chauffeur',
    hero_title: 'Ankommen in <em>absoluter</em><br>Eleganz',
    hero_sub: 'Private VIP-Transfers für anspruchsvolle Reisende. Tür-zu-Tür-Luxus, makellos organisiert.',
    hero_btn1: 'Transfer Buchen', hero_btn2: 'Leistungen Entdecken',
    book_title: 'Ihre Reise Reservieren', book_service: 'Serviceart', book_pickup: 'Abholort',
    book_dest: 'Zielort', book_date: 'Datum & Uhrzeit', book_pax: 'Passagiere', book_cta: 'Angebot Erhalten',
    svc_airport: 'Flughafentransfer', svc_p2p: 'Punkt zu Punkt', svc_hourly: 'Stundenmietung',
    svc_corp: 'Firmenreisen', svc_ski: 'Skigebiete',
    modal_title: 'Buchung Abschließen', modal_sub: 'Füllen Sie Ihre Daten aus und wir bestätigen bald.',
    modal_submit: 'Buchung Bestätigen',
    srv_label: 'Unser Angebot', srv_title: 'Maßgeschneiderter<br><em>Luxus</em> für<br>jede Reise',
    srv_desc: 'Von privaten Flughafenabholungen bis zu ganztägigen Fahrten — unsere professionellen Chauffeure sorgen für einen reibungslosen Transfer in der Schweiz und Frankreich.',
    s1_title: 'Flughafentransfer', s1_desc: 'Flugverfolgung, Meet & Greet und nahtlose Abholungen von Genf, Zürich, Lyon und allen wichtigen Regionalflughäfen.',
    s2_title: 'Skigebiet-Transfers', s2_desc: 'Kommen Sie in Verbier, Zermatt, Courchevel oder Megève stilvoll an. Wir kümmern uns um Ihr Gepäck und Skiausrüstung.',
    s3_title: 'Geschäftsreisen', s3_desc: 'Pünktlich, professionell und diskret. Dedizierte Chauffeure für Führungskräfte und Geschäftsdelegationen.',
    s4_title: 'Events & Galas', s4_desc: 'Hochzeiten, Galas, Privatpartys — kommen Sie mit Stil. Unsere Flotte steht für maßgeschneiderte Veranstaltungstransporte bereit.',
    s5_title: 'Tagestouren', s5_desc: 'Private Führungen durch die Schweizer Alpen, den Genfersee oder die Côte d\'Azur mit persönlichem Chauffeur.',
    s6_title: 'Stundenmietung', s6_desc: 'Zu Ihrer Verfügung, Stunde für Stunde. Meetings, Shopping, Arzttermine — Ihr Chauffeur wartet auf Sie.',
    fleet_label: 'Unsere Flotte', fleet_title: 'Die feinsten<br>Fahrzeuge für<br><em>Elite</em>-Reisen',
    f1_desc: 'Exekutiv-Limousine · Bis zu 3 Passagiere', f2_desc: 'Premium-Van · Bis zu 7 Passagiere', f3_desc: 'Luxus-Minibus · Bis zu 14 Passagiere',
    why_label: 'Warum Wir', why_title: 'Der <em>Standard</em><br>der Exzellenz',
    w1_title: '24/7 Verfügbarkeit', w1_desc: 'Tag und Nacht sind unser Team und unsere Chauffeure rund um die Uhr für jeden Zeitplan verfügbar.',
    w2_title: 'Flugverfolgung', w2_desc: 'Wir überwachen Ihren Flug in Echtzeit. Verspätungen oder Frühankünfte — Ihr Fahrer ist immer pünktlich.',
    w3_title: 'Festpreise', w3_desc: 'Keine Überraschungen. Transparente Pauschalpreise ohne versteckte Gebühren oder Taxameter-Aufschläge.',
    w4_title: 'Diskretion Garantiert', w4_desc: 'Ihre Privatsphäre ist unsere Priorität. Unsere Chauffeure arbeiten mit höchster Professionalität und Vertraulichkeit.',
    dest_label: 'Unser Einsatzgebiet', dest_title: 'Ihr <em>Tor</em><br>zu den Alpen',
    testi_label: 'Kundenstimmen', testi_title: 'Vertraut von<br><em>anspruchsvollen</em> Reisenden',
    t1: '„Tadelloser Service von Anfang bis Ende. Unser Chauffeur wartete bereits, als wir die Zollkontrolle passierten."',
    t2: '„Wir buchten Transfers für unsere gesamte Skigruppe über drei Tage. Alles war pünktlich und makellos."',
    t3: '„Bei Geschäftsreisen ist Zuverlässigkeit alles. VIP Transfers hat uns noch nie im Stich gelassen."',
    contact_label: 'Kontakt', contact_title: 'Lassen Sie uns<br>Ihre <em>perfekte</em><br>Reise planen',
    c_phone: 'Telefon', c_hours: 'Öffnungszeiten', c_hours_val: '24 Stunden · 7 Tage die Woche',
    cf_label: 'Nachricht Senden', cf_title: 'Schnellanfrage', cf_btn: 'Anfrage Senden',
    footer_desc: 'Premium privater Chauffeurservice in der Schweiz und Frankreich. Eleganz, Pünktlichkeit und absolute Diskretion — bei jeder Reise.',
    footer_company: 'Unternehmen', footer_about: 'Über Uns', footer_fleet: 'Unsere Flotte',
    booking_conflict: '⚠️ Dieser Zeitraum ist bereits gebucht. Bitte wählen Sie ein anderes Datum oder eine andere Uhrzeit.',
    booking_success: '✓ Buchung bestätigt! Wir werden Sie in Kürze kontaktieren.',
    booking_error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.',
    booking_loading: 'Buchung wird verarbeitet…',
    contact_success: '✓ Nachricht gesendet! Wir antworten innerhalb von 24 Stunden.',
    contact_error: 'Nachricht konnte nicht gesendet werden. Bitte schreiben Sie uns direkt.',
    fill_required: 'Bitte füllen Sie alle Pflichtfelder aus.',
  },

  ru: {
    nav_services: 'Услуги', nav_fleet: 'Автопарк', nav_destinations: 'Направления', nav_book: 'Забронировать',
    hero_eyebrow: 'Швейцария и Франция — Премиум Шофёр',
    hero_title: 'Прибывайте с <em>абсолютной</em><br>элегантностью',
    hero_sub: 'Частные VIP-трансферы для взыскательных путешественников. Роскошь от двери до двери, безупречно организованная.',
    hero_btn1: 'Забронировать Трансфер', hero_btn2: 'Наши Услуги',
    book_title: 'Забронируйте Поездку', book_service: 'Тип услуги', book_pickup: 'Место отправления',
    book_dest: 'Пункт назначения', book_date: 'Дата и время', book_pax: 'Пассажиры', book_cta: 'Получить предложение',
    svc_airport: 'Трансфер из аэропорта', svc_p2p: 'Из точки в точку', svc_hourly: 'Почасовая аренда',
    svc_corp: 'Корпоративные поездки', svc_ski: 'Горнолыжные курорты',
    modal_title: 'Оформление Бронирования', modal_sub: 'Заполните данные, и мы скоро подтвердим.',
    modal_submit: 'Подтвердить Бронирование',
    srv_label: 'Что Мы Предлагаем', srv_title: 'Индивидуальная<br><em>роскошь</em> для<br>каждой поездки',
    srv_desc: 'От частных встреч в аэропорту до полных дневных чартеров — наши профессиональные шофёры обеспечивают безупречный трансфер по Швейцарии и Франции.',
    s1_title: 'Трансфер из Аэропорта', s1_desc: 'Отслеживание рейсов, встреча и приветствие, трансферы из Женевы, Цюриха, Лиона и других аэропортов.',
    s2_title: 'Трансфер на Горнолыжные Курорты', s2_desc: 'Прибудьте в Вербье, Церматт, Куршевель или Мегев с комфортом. Мы позаботимся о вашем багаже и лыжном снаряжении.',
    s3_title: 'Корпоративные Поездки', s3_desc: 'Пунктуально, профессионально и дискретно. Персональные шофёры для руководителей и деловых делегаций.',
    s4_title: 'Мероприятия и Гала', s4_desc: 'Свадьбы, галы, частные вечеринки — прибывайте с достоинством. Наш автопарк доступен для эксклюзивных событий.',
    s5_title: 'Дневные Туры', s5_desc: 'Частные экскурсии по Швейцарским Альпам, Женевскому озеру или Лазурному берегу с личным шофёром-гидом.',
    s6_title: 'Почасовая Аренда', s6_desc: 'К вашим услугам, час за часом. Встречи, шопинг, медицинские визиты — ваш шофёр всегда ждёт.',
    fleet_label: 'Наш Автопарк', fleet_title: 'Лучшие<br>автомобили для<br><em>элитных</em> поездок',
    f1_desc: 'Представительский седан · До 3 пассажиров', f2_desc: 'Премиум-вэн · До 7 пассажиров', f3_desc: 'Люкс-минибус · До 14 пассажиров',
    why_label: 'Почему Мы', why_title: '<em>Стандарт</em><br>совершенства',
    w1_title: 'Доступность 24/7', w1_desc: 'Днём и ночью наша команда и шофёры доступны круглосуточно для любого расписания.',
    w2_title: 'Отслеживание Рейсов', w2_desc: 'Мы следим за вашим рейсом в реальном времени. Задержки или ранние прилёты — водитель всегда вовремя.',
    w3_title: 'Фиксированные Цены', w3_desc: 'Никаких сюрпризов. Прозрачные цены «всё включено» без скрытых платежей.',
    w4_title: 'Гарантия Конфиденциальности', w4_desc: 'Ваша приватность — наш приоритет. Наши шофёры работают с максимальным профессионализмом и конфиденциальностью.',
    dest_label: 'Где Мы Работаем', dest_title: 'Ваши <em>ворота</em><br>в Альпы',
    testi_label: 'Голоса Клиентов', testi_title: 'Доверие<br><em>взыскательных</em> путешественников',
    t1: '«Безупречный сервис от начала до конца. Наш шофёр уже ждал нас, когда мы прошли таможню.»',
    t2: '«Мы заказали трансферы для всей нашей лыжной группы на три дня. Всё было пунктуально и безупречно.»',
    t3: '«В корпоративных поездках надёжность — это всё. VIP Transfers ни разу нас не подвёл.»',
    contact_label: 'Связаться', contact_title: 'Давайте спланируем<br>вашу <em>идеальную</em><br>поездку',
    c_phone: 'Телефон', c_hours: 'Часы работы', c_hours_val: '24 часа · 7 дней в неделю',
    cf_label: 'Отправить Сообщение', cf_title: 'Быстрый Запрос', cf_btn: 'Отправить Запрос',
    footer_desc: 'Премиальный частный шофёрский сервис по Швейцарии и Франции. Элегантность, пунктуальность и абсолютная конфиденциальность — в каждой поездке.',
    footer_company: 'Компания', footer_about: 'О Нас', footer_fleet: 'Наш Автопарк',
    booking_conflict: '⚠️ Это время уже занято. Пожалуйста, выберите другую дату или время.',
    booking_success: '✓ Бронирование подтверждено! Мы свяжемся с вами в ближайшее время.',
    booking_error: 'Что-то пошло не так. Попробуйте ещё раз или позвоните нам напрямую.',
    booking_loading: 'Обрабатываем ваше бронирование…',
    contact_success: '✓ Сообщение отправлено! Мы ответим в течение 24 часов.',
    contact_error: 'Не удалось отправить сообщение. Напишите нам напрямую.',
    fill_required: 'Пожалуйста, заполните все обязательные поля.',
  },

  ar: {
    nav_services: 'الخدمات', nav_fleet: 'الأسطول', nav_destinations: 'الوجهات', nav_book: 'احجز الآن',
    hero_eyebrow: 'سويسرا وفرنسا — خدمة سائق فاخرة',
    hero_title: 'اصل بـ<em>أناقة</em><br>مطلقة',
    hero_sub: 'نقل VIP خاص مصمم للمسافرين المميزين. رفاهية من باب إلى باب، منظمة بإتقان.',
    hero_btn1: 'احجز نقلاً', hero_btn2: 'استكشف الخدمات',
    book_title: 'احجز رحلتك', book_service: 'نوع الخدمة', book_pickup: 'موقع الاستلام',
    book_dest: 'الوجهة', book_date: 'التاريخ والوقت', book_pax: 'الركاب', book_cta: 'احصل على عرض',
    svc_airport: 'نقل المطار', svc_p2p: 'من نقطة إلى نقطة', svc_hourly: 'تأجير بالساعة',
    svc_corp: 'سفر الشركات', svc_ski: 'منتجعات التزلج',
    modal_title: 'أكمل حجزك', modal_sub: 'أدخل بياناتك وسنؤكد قريباً.',
    modal_submit: 'تأكيد الحجز',
    srv_label: 'ما نقدمه', srv_title: 'رفاهية<br><em>مخصصة</em> لكل<br>رحلة',
    srv_desc: 'من الاستقبال الخاص في المطارات إلى الإيجارات اليومية الكاملة، يضمن سائقونا المحترفون أن كل تفاصيل نقلك سلسة وسرية ومتقنة عبر سويسرا وفرنسا.',
    s1_title: 'نقل المطار', s1_desc: 'تتبع الرحلات، الاستقبال والترحيب، والتوصيل السلس من جنيف وزيورخ وليون وجميع المطارات الإقليمية.',
    s2_title: 'نقل منتجعات التزلج', s2_desc: 'اصل إلى فيربيه وزيرمات وكورشيفيل أو ميجيف بأناقة. نتولى أمتعتك ومعدات التزلج.',
    s3_title: 'سفر الشركات', s3_desc: 'دقيق ومهني وسري. سائقون مخصصون للمديرين التنفيذيين والوفود التجارية.',
    s4_title: 'الفعاليات والحفلات', s4_desc: 'حفلات الزفاف والسهرات الراقية والحفلات الخاصة — اصل بحضور مميز. أسطولنا متاح لنقل الفعاليات.',
    s5_title: 'جولات يومية', s5_desc: 'جولات خاصة عبر جبال الألب السويسرية أو بحيرة ليمان أو الريفييرا الفرنسية مع سائق مرشد شخصي.',
    s6_title: 'تأجير بالساعة', s6_desc: 'تحت تصرفك، ساعة بساعة. اجتماعات، تسوق، مواعيد طبية — سائقك ينتظرك.',
    fleet_label: 'أسطولنا', fleet_title: 'أرقى<br>المركبات لـ<br><em>سفر النخبة</em>',
    f1_desc: 'سيدان تنفيذية · حتى 3 ركاب', f2_desc: 'فان فاخر · حتى 7 ركاب', f3_desc: 'ميني باص فاخر · حتى 14 راكب',
    why_label: 'لماذا نحن', why_title: '<em>معيار</em><br>التميز',
    w1_title: 'متاح 24/7', w1_desc: 'ليلاً أو نهاراً، فريقنا وسائقونا متاحون على مدار الساعة لأي جدول زمني.',
    w2_title: 'تتبع الرحلات', w2_desc: 'نراقب رحلتك في الوقت الفعلي. التأخيرات أو الوصول المبكر — سائقك دائماً في الوقت المحدد.',
    w3_title: 'أسعار ثابتة', w3_desc: 'لا مفاجآت. أسعار شاملة وشفافة بدون رسوم خفية.',
    w4_title: 'ضمان السرية', w4_desc: 'خصوصيتك أولويتنا. يعمل سائقونا بأعلى مستويات الاحترافية والسرية.',
    dest_label: 'أين نعمل', dest_title: '<em>بوابتك</em><br>إلى جبال الألب',
    testi_label: 'آراء العملاء', testi_title: 'ثقة<br><em>المسافرين المميزين</em>',
    t1: '«خدمة لا تشوبها شائبة من البداية إلى النهاية. كان سائقنا ينتظرنا بالفعل عندما أكملنا إجراءات الجمارك.»',
    t2: '«حجزنا نقلاً لمجموعة التزلج بأكملها لمدة ثلاثة أيام. كل شيء كان دقيقاً ونظيفاً.»',
    t3: '«في سفر الشركات، الموثوقية هي كل شيء. VIP Transfers لم تخذلنا أبداً.»',
    contact_label: 'تواصل معنا', contact_title: 'دعنا نخطط<br>رحلتك <em>المثالية</em>',
    c_phone: 'هاتف', c_hours: 'ساعات العمل', c_hours_val: '24 ساعة · 7 أيام في الأسبوع',
    cf_label: 'أرسل رسالة', cf_title: 'استفسار سريع', cf_btn: 'إرسال الاستفسار',
    footer_desc: 'خدمة سائق خاصة فاخرة عبر سويسرا وفرنسا. أناقة ودقة وسرية مطلقة — في كل رحلة.',
    footer_company: 'الشركة', footer_about: 'من نحن', footer_fleet: 'أسطولنا',
    booking_conflict: '⚠️ هذا الوقت محجوز بالفعل. يرجى اختيار تاريخ أو وقت مختلف.',
    booking_success: '✓ تم تأكيد الحجز! سنتواصل معك قريباً.',
    booking_error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
    booking_loading: 'جارٍ معالجة حجزك…',
    contact_success: '✓ تم إرسال الرسالة! سنرد خلال 24 ساعة.',
    contact_error: 'تعذر إرسال الرسالة. يرجى مراسلتنا مباشرة.',
    fill_required: 'يرجى ملء جميع الحقول المطلوبة.',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Update select options
  const serviceSelects = [document.getElementById('b_service')];
  serviceSelects.forEach(sel => {
    if (!sel) return;
    const keys = ['svc_airport','svc_p2p','svc_hourly','svc_corp'];
    Array.from(sel.options).forEach((opt, i) => {
      if (keys[i] && t[keys[i]]) opt.text = t[keys[i]];
    });
  });
}

function t(key) {
  return (translations[currentLang] || translations.en)[key] || key;
}
