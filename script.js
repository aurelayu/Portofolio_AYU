/* =====================================================================
   1. TAILWIND DESIGN TOKENS CONFIGURATION
====================================================================== */
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          display: ['"Playfair Display"', 'Georgia', 'serif'],
          sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'monospace'],
        },
        colors: {
          lavenderMist: '#F7F5FC',
          softLilac: '#EDE7FA',
          paleLilac: '#E5DDF5',
          deepViolet: '#261747',
          royalViolet: '#5B3DF5',
          royalVioletDark: '#472CD9',
          violetMuted: '#5C4E7A',
          warmGold: '#D4962A',
          brightGold: '#F3B94B',
          softGoldTint: '#FEF8EB',
          goldBorder: '#F2DDA8',
        },
        boxShadow: {
          bento: '0 14px 36px -14px rgba(38, 23, 71, 0.10)',
          bentoHover: '0 24px 48px -16px rgba(91, 61, 245, 0.18)',
          goldGlow: '0 10px 28px -10px rgba(212, 150, 42, 0.25)',
        },
      },
    },
  };
}

/* =====================================================================
   2. APPLICATION STATE & BILINGUAL DICTIONARY (ID / EN)
====================================================================== */
let currentLang = 'id';
let activeLightboxIndex = 0;
let toastTimeout = null;

const translations = {
  id: {
    nav_about: 'Tentang',
    nav_projects: 'Projek',
    nav_skills: 'Keahlian',
    nav_certificates: 'Sertifikat',
    nav_contact: 'Kontak',

    view_full_photo: 'Lihat Foto Penuh',
    hero_floating_role: 'TJKT & Atlet Silat',
    hero_welcome: 'Selamat Datang di Portofolio Saya',
    hero_identity_sub: 'Pelajar SMKN 1 Blitar (TJKT) • Atlet Pencak Silat',
    hero_subtitle:
      'Siswi jurusan Teknik Jaringan Komputer dan Telekomunikasi (TJKT) di SMKN 1 Blitar yang antusias merancang sistem manajemen database dan aplikasi kasir, sekaligus aktif berkompetisi sebagai Atlet Pencak Silat berprestasi dengan disiplin dan sportivitas tinggi.',
    cta_certificates: 'Lihat Sertifikat',
    cta_contact: 'Hubungi Saya',
    stat_school: 'SMKN 1 Blitar',
    stat_projects: 'Projek Sistem',
    stat_certs: 'UTK & 7 Kejuaraan',

    about_kicker: '01 // TENTANG SAYA',
    about_title: 'Tentang Saya',
    about_sub:
      'Perpaduan ketelitian teknologi jaringan & database dengan disiplin, ketangguhan mental, dan sportivitas tinggi.',
    about_headline: 'Siswi TJKT SMKN 1 Blitar & Atlet Pencak Silat Berprestasi',
    about_p1:
      'Halo! Saya <strong>Aurel Ayu Puspitasari</strong>, siswi aktif jurusan <strong>Teknik Jaringan Komputer dan Telekomunikasi (TJKT)</strong> di <strong>SMKN 1 Blitar</strong>. Di bidang teknologi, saya mendalami administrasi jaringan komputer, konfigurasi perangkat jaringan, perancangan struktur basis data (database), serta pengembangan aplikasi kasir untuk mendukung pencatatan transaksi secara tertib dan akurat.',
    about_p2:
      'Selain menekuni dunia teknologi, saya aktif sebagai <strong>Atlet Pencak Silat</strong> berprestasi. Pengalaman bertanding di berbagai kejuaraan melatih saya untuk memadukan ketelitian analisis di depan layar komputer dengan disiplin tinggi, ketangguhan mental, fokus, dan sportivitas di arena pertandingan.',
    about_summary_title: 'Ringkasan Profil',
    hl_edu_label: 'Pendidikan',
    hl_edu_val: 'SMKN 1 Blitar — TJKT',
    hl_sport_label: 'Olahraga',
    hl_sport_val: 'Atlet Pencak Silat',
    hl_loc_label: 'Lokasi',
    hl_loc_val: 'Blitar, Jawa Timur',
    hl_ach_label: 'Pencapaian',
    hl_ach_val: 'Sertifikasi UTK & 7 Kejuaraan Pencak Silat',

    projects_kicker: '02 // PROJEK UNGGULAN',
    projects_title: 'Projek & Sistem Digital',
    projects_sub: 'Klik gambar projek untuk melihat tampilan layar penuh.',
    proj1_title: 'Sistem & Manajemen Database',
    proj1_desc:
      'Perancangan struktur tabel basis data relasional, pemodelan relasi antar data, serta pengelolaan query SQL untuk memastikan penyimpanan, pencarian, dan pembaruan informasi berjalan terstruktur dan akurat.',
    proj2_title: 'Aplikasi Sistem Kasir',
    proj2_desc:
      'Aplikasi Point of Sale (POS) untuk pencatatan transaksi penjualan barang, perhitungan total belanja dan kembalian secara otomatis, serta penyusunan laporan kasir yang rapi dan mudah dipantau.',

    skills_kicker: '03 // KEAHLIAN & KOMPETENSI',
    skills_title: 'Keahlian (Skills)',
    skills_sub: 'Sinergi penguasaan teknis TJKT & IT dengan karakter disiplin seorang atlet.',
    skill_cat_tech: 'Keahlian TJKT & IT',
    skill_tech_1: 'Jaringan Komputer & Infrastruktur',
    skill_tech_2: 'Manajemen Database SQL',
    skill_tech_3: 'Administrasi Sistem & Troubleshooting',
    skill_tech_4: 'Pengembangan Aplikasi Kasir',
    skill_tech_5: 'Konfigurasi Perangkat Jaringan',
    skill_cat_athlete: 'Keahlian Atlet & Soft Skills',
    skill_ath_1: 'Disiplin & Konsistensi Latihan',
    skill_ath_2: 'Fokus & Ketahanan Mental',
    skill_ath_3: 'Strategi & Kelincahan Pencak Silat',
    skill_ath_4: 'Manajemen Waktu Sekolah & Latihan',
    skill_ath_5: 'Kerja Sama Tim & Kepemimpinan',

    cert_kicker: '04 // SERTIFIKAT & PRESTASI',
    cert_title: 'Sertifikat Kompetensi & Kejuaraan',
    cert_sub: 'Tekan setiap sertifikat untuk membuka tampilan layar penuh.',
    utk_badge: 'Sertifikasi Unggulan UTK',
    utk_title: 'Sertifikat UTK (Uji Terampil / Kompetensi)',
    utk_desc:
      'Sertifikat resmi Uji Terampil / Kompetensi (UTK) sebagai bukti pencapaian standar kecakapan, kedisiplinan, serta evaluasi kompetensi terukur yang berhasil diselesaikan dengan hasil terbaik.',
    silat_gallery_title: 'Galeri 7 Sertifikat Kejuaraan Pencak Silat',
    silat_gallery_badge: 'Atlet Pencak Silat',
    cert_item_1: 'Kejuaraan Pencak Silat #1',
    cert_item_2: 'Kejuaraan Pencak Silat #2',
    cert_item_3: 'Kejuaraan Pencak Silat #3',
    cert_item_4: 'Kejuaraan Pencak Silat #4',
    cert_item_5: 'Kejuaraan Pencak Silat #5',
    cert_item_6: 'Kejuaraan Pencak Silat #6',
    cert_item_7: 'Kejuaraan Pencak Silat #7',

    contact_kicker: '05 // KONTAK PRIBADI',
    contact_title: 'Mari Terhubung',
    contact_sub:
      'Silakan hubungi saya secara langsung melalui email pribadi atau kunjungi akun Instagram saya.',
    contact_email_label: 'Email Pribadi',
    contact_email_hint: 'Salin alamat email dengan sekali klik atau kirim pesan langsung.',
    btn_send_email: 'Kirim Email',
    btn_copy_email: 'Salin Email',
    contact_ig_label: 'Instagram Pribadi',
    contact_ig_hint:
      'Ikuti keseharian belajar di TJKT SMKN 1 Blitar dan dokumentasi kejuaraan Pencak Silat.',
    btn_visit_ig: 'Buka Instagram',

    footer_tagline: 'Aurel Ayu Puspitasari • Pelajar SMKN 1 Blitar (TJKT) & Atlet Pencak Silat',
    footer_copy: '© 2026 Aurel Ayu Puspitasari. Hak Cipta Dilindungi.',
    toast_copied: 'Email berhasil disalin ke papan klip!',
    lightbox_hint: 'Gunakan tombol panah / geser layar untuk berpindah foto, ESC untuk menutup',
  },

  en: {
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_certificates: 'Certificates',
    nav_contact: 'Contact',

    view_full_photo: 'View Full Photo',
    hero_floating_role: 'TJKT & Silat Athlete',
    hero_welcome: 'Welcome to My Portfolio',
    hero_identity_sub: 'SMKN 1 Blitar Student (TJKT) • Pencak Silat Athlete',
    hero_subtitle:
      'Computer and Network Engineering (TJKT) student at SMKN 1 Blitar passionate about designing database management systems and cashier applications, while actively competing as an accomplished Pencak Silat athlete with high discipline and sportsmanship.',
    cta_certificates: 'View Certificates',
    cta_contact: 'Contact Me',
    stat_school: 'SMKN 1 Blitar',
    stat_projects: 'System Projects',
    stat_certs: 'UTK & 7 Championships',

    about_kicker: '01 // ABOUT ME',
    about_title: 'About Me',
    about_sub:
      'Combining precision in network & database technology with discipline, mental resilience, and high sportsmanship.',
    about_headline: 'TJKT Student at SMKN 1 Blitar & Accomplished Pencak Silat Athlete',
    about_p1:
      'Hello! I am <strong>Aurel Ayu Puspitasari</strong>, an active student majoring in <strong>Computer and Network Engineering (TJKT)</strong> at <strong>SMKN 1 Blitar</strong>. In technology, I focus on computer network administration, network device configuration, relational database architecture, and building cashier applications to support orderly and accurate transactions.',
    about_p2:
      'Alongside technology, I compete actively as an accomplished <strong>Pencak Silat Athlete</strong>. Tournament experiences have trained me to combine analytical precision at the computer with high discipline, mental toughness, focus, and sportsmanship in the arena.',
    about_summary_title: 'Profile Highlights',
    hl_edu_label: 'Education',
    hl_edu_val: 'SMKN 1 Blitar — TJKT',
    hl_sport_label: 'Sports',
    hl_sport_val: 'Pencak Silat Athlete',
    hl_loc_label: 'Location',
    hl_loc_val: 'Blitar, East Java',
    hl_ach_label: 'Achievements',
    hl_ach_val: 'UTK Certification & 7 Pencak Silat Championships',

    projects_kicker: '02 // FEATURED PROJECTS',
    projects_title: 'Projects & Digital Systems',
    projects_sub: 'Click any project image to view it in full screen.',
    proj1_title: 'Database System & Management',
    proj1_desc:
      'Relational database table architecture, entity relationship modeling, and SQL query management to ensure structured and accurate data storage, retrieval, and updates.',
    proj2_title: 'Cashier System Application',
    proj2_desc:
      'Point of Sale (POS) application for recording retail sales transactions, automatically calculating totals and change, and organizing clear cashier reports.',

    skills_kicker: '03 // SKILLS & COMPETENCIES',
    skills_title: 'Skills',
    skills_sub: 'Synergy of TJKT & IT technical mastery with athletic discipline.',
    skill_cat_tech: 'TJKT & IT Skills',
    skill_tech_1: 'Computer Networking & Infrastructure',
    skill_tech_2: 'SQL Database Management',
    skill_tech_3: 'System Administration & Troubleshooting',
    skill_tech_4: 'Cashier Application Development',
    skill_tech_5: 'Network Device Configuration',
    skill_cat_athlete: 'Athlete & Soft Skills',
    skill_ath_1: 'Training Discipline & Consistency',
    skill_ath_2: 'Focus & Mental Resilience',
    skill_ath_3: 'Pencak Silat Strategy & Agility',
    skill_ath_4: 'School & Training Time Management',
    skill_ath_5: 'Teamwork & Leadership',

    cert_kicker: '04 // CERTIFICATES & ACHIEVEMENTS',
    cert_title: 'Competency & Championship Certificates',
    cert_sub: 'Tap any certificate to open the full-screen view.',
    utk_badge: 'Featured UTK Certification',
    utk_title: 'UTK Certificate (Skill / Competency Test)',
    utk_desc:
      'Official Skill / Competency Test (UTK) certificate recognizing verified technical proficiency, discipline, and measured competency standards achieved with top results.',
    silat_gallery_title: 'Gallery of 7 Pencak Silat Championship Certificates',
    silat_gallery_badge: 'Pencak Silat Athlete',
    cert_item_1: 'Pencak Silat Championship #1',
    cert_item_2: 'Pencak Silat Championship #2',
    cert_item_3: 'Pencak Silat Championship #3',
    cert_item_4: 'Pencak Silat Championship #4',
    cert_item_5: 'Pencak Silat Championship #5',
    cert_item_6: 'Pencak Silat Championship #6',
    cert_item_7: 'Pencak Silat Championship #7',

    contact_kicker: '05 // PERSONAL CONTACT',
    contact_title: "Let's Connect",
    contact_sub:
      'Feel free to reach out directly via personal email or visit my Instagram profile.',
    contact_email_label: 'Personal Email',
    contact_email_hint: 'Copy the email address in one click or send a direct message.',
    btn_send_email: 'Send Email',
    btn_copy_email: 'Copy Email',
    contact_ig_label: 'Personal Instagram',
    contact_ig_hint:
      'Follow my daily TJKT studies at SMKN 1 Blitar and Pencak Silat championship highlights.',
    btn_visit_ig: 'Open Instagram',

    footer_tagline: 'Aurel Ayu Puspitasari • SMKN 1 Blitar Student (TJKT) & Pencak Silat Athlete',
    footer_copy: '© 2026 Aurel Ayu Puspitasari. All Rights Reserved.',
    toast_copied: 'Email copied to clipboard!',
    lightbox_hint: 'Use arrow keys / swipe to switch photos, press ESC to close',
  },
};

/* =====================================================================
   3. ORDERED GALLERY REGISTRY FOR FULL-SCREEN LIGHTBOX (11 ITEMS)
====================================================================== */
const galleryItems = [
  {
    src: 'profil.jpeg',
    titleId: 'Foto Profil — Aurel Ayu Puspitasari',
    titleEn: 'Profile Photo — Aurel Ayu Puspitasari',
  },
  {
    src: 'database.jpeg',
    titleId: 'Projek: Sistem & Manajemen Database',
    titleEn: 'Project: Database System & Management',
  },
  {
    src: 'kasir.jpeg',
    titleId: 'Projek: Aplikasi Sistem Kasir',
    titleEn: 'Project: Cashier System Application',
  },
  {
    src: 'sertif.jpeg',
    titleId: 'Sertifikat UTK (Uji Terampil / Kompetensi)',
    titleEn: 'UTK Certificate (Skill / Competency Test)',
  },
  {
    src: '1.jpeg',
    titleId: 'Kejuaraan Pencak Silat #1',
    titleEn: 'Pencak Silat Championship #1',
  },
  {
    src: '2.jpeg',
    titleId: 'Kejuaraan Pencak Silat #2',
    titleEn: 'Pencak Silat Championship #2',
  },
  {
    src: '3.jpeg',
    titleId: 'Kejuaraan Pencak Silat #3',
    titleEn: 'Pencak Silat Championship #3',
  },
  {
    src: '4.jpeg',
    titleId: 'Kejuaraan Pencak Silat #4',
    titleEn: 'Pencak Silat Championship #4',
  },
  {
    src: '5.jpeg',
    titleId: 'Kejuaraan Pencak Silat #5',
    titleEn: 'Pencak Silat Championship #5',
  },
  {
    src: '6.jpeg',
    titleId: 'Kejuaraan Pencak Silat #6',
    titleEn: 'Pencak Silat Championship #6',
  },
  {
    src: '7.jpeg',
    titleId: 'Kejuaraan Pencak Silat #7',
    titleEn: 'Pencak Silat Championship #7',
  },
];

/* =====================================================================
   4. SVG IMAGE PLACEHOLDER & ERROR HANDLER
====================================================================== */
function buildSvgPlaceholder(filename) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="violetGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#EDE7FA" />
          <stop offset="100%" stop-color="#F7F5FC" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#violetGoldGrad)" />
      <rect x="28" y="28" width="744" height="544" rx="28" fill="none" stroke="#5B3DF5" stroke-width="2.5" stroke-dasharray="10 8" opacity="0.4" />
      <circle cx="400" cy="242" r="46" fill="#261747" stroke="#F3B94B" stroke-width="2.5" />
      <path d="M380 254 L394 238 L404 249 L413 240 L422 254 Z" fill="#EDE7FA" />
      <circle cx="392" cy="231" r="5" fill="#F3B94B" />
      <text x="400" y="328" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="24" fill="#261747">${filename}</text>
      <text x="400" y="360" text-anchor="middle" font-family="sans-serif" font-weight="500" font-size="15" fill="#5C4E7A">Aurel Ayu Puspitasari • Portfolio Asset</text>
    </svg>
  `.trim();
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function handleImgError(imgEl, filename) {
  if (imgEl.dataset.fallbackApplied === 'true') return;
  imgEl.dataset.fallbackApplied = 'true';
  imgEl.src = buildSvgPlaceholder(filename);
}

/* =====================================================================
   5. BILINGUAL LANGUAGE SWITCHER (ID | EN)
====================================================================== */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');

  if (lang === 'id') {
    btnId.className = 'px-3.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all bg-[#261747] text-white shadow-sm';
    btnId.setAttribute('aria-pressed', 'true');
    btnEn.className = 'px-3.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all text-[#5C4E7A] hover:text-[#5B3DF5]';
    btnEn.setAttribute('aria-pressed', 'false');
  } else {
    btnEn.className = 'px-3.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all bg-[#261747] text-white shadow-sm';
    btnEn.setAttribute('aria-pressed', 'true');
    btnId.className = 'px-3.5 py-1 rounded-full text-xs font-bold tracking-wide transition-all text-[#5C4E7A] hover:text-[#5B3DF5]';
    btnId.setAttribute('aria-pressed', 'false');
  }

  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  const lightbox = document.getElementById('photo-lightbox');
  if (!lightbox.classList.contains('hidden')) {
    renderLightboxSlide();
  }
}

/* =====================================================================
   6. MOBILE NAVIGATION DRAWER HELPERS
====================================================================== */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  const iconOpen = document.getElementById('icon-menu-open');
  const iconClose = document.getElementById('icon-menu-close');

  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    menu.classList.remove('hidden');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  const iconOpen = document.getElementById('icon-menu-open');
  const iconClose = document.getElementById('icon-menu-close');

  menu.classList.add('hidden');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
  btn.setAttribute('aria-expanded', 'false');
}

/* =====================================================================
   7. CLIPBOARD COPY & TOAST NOTIFICATION
====================================================================== */
function copyEmail() {
  const emailText = document.getElementById('email-address').textContent.trim();

  const tempInput = document.createElement('textarea');
  tempInput.value = emailText;
  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.appendChild(tempInput);
  tempInput.select();

  try {
    document.execCommand('copy');
    showToast(translations[currentLang].toast_copied);
  } catch (err) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailText).then(() => {
        showToast(translations[currentLang].toast_copied);
      });
    }
  } finally {
    document.body.removeChild(tempInput);
  }
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = message;

  toast.classList.remove('opacity-0', 'translate-y-3');
  toast.classList.add('opacity-100', 'translate-y-0');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-3');
  }, 2800);
}

/* =====================================================================
   8. FULL-SCREEN LIGHTBOX MODAL & GESTURE CONTROLS
====================================================================== */
function openLightbox(index) {
  if (index < 0 || index >= galleryItems.length) return;
  activeLightboxIndex = index;
  renderLightboxSlide();

  const lightbox = document.getElementById('photo-lightbox');
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function renderLightboxSlide() {
  const item = galleryItems[activeLightboxIndex];
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption');
  const counterEl = document.getElementById('lightbox-counter');
  const filenameEl = document.getElementById('lightbox-filename');

  const title = currentLang === 'id' ? item.titleId : item.titleEn;

  delete imgEl.dataset.fallbackApplied;
  imgEl.onerror = function () {
    handleImgError(imgEl, item.src);
  };
  imgEl.src = item.src;
  imgEl.alt = title;

  captionEl.textContent = title;
  counterEl.textContent = `${activeLightboxIndex + 1} / ${galleryItems.length}`;
  filenameEl.textContent = item.src;
}

function navigateLightbox(step) {
  activeLightboxIndex = (activeLightboxIndex + step + galleryItems.length) % galleryItems.length;
  renderLightboxSlide();
}

function closeLightbox() {
  const lightbox = document.getElementById('photo-lightbox');
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

function handleLightboxBackdropClick(event) {
  if (event.target.id === 'photo-lightbox' || event.target.id === 'lightbox-touch-area') {
    closeLightbox();
  }
}

// Keyboard navigation for Lightbox (Escape, ArrowLeft, ArrowRight)
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('photo-lightbox');
  if (lightbox.classList.contains('hidden')) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    navigateLightbox(-1);
  } else if (e.key === 'ArrowRight') {
    navigateLightbox(1);
  }
});

// Mobile touch swipe support inside the Lightbox
let touchStartX = 0;
let touchEndX = 0;

const touchArea = document.getElementById('lightbox-touch-area');
if (touchArea) {
  touchArea.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  touchArea.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const deltaX = touchEndX - touchStartX;
      if (Math.abs(deltaX) > 45) {
        if (deltaX < 0) {
          navigateLightbox(1);
        } else {
          navigateLightbox(-1);
        }
      }
    },
    { passive: true }
  );
}