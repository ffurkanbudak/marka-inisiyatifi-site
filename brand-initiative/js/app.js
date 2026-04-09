/* ═══════════════════════════════════════════
   MARKA İNİSİYATİFİ — app.js
   Animations, Data Layer & Form Handlers
   ═══════════════════════════════════════════ */

// ── Mock CMS Data ──────────────────────────
const SiteData = {
  foundations: [
    {
      id: 1,
      icon: "brand",
      title: "Sürdürülebilir Marka İnşası",
      summary: "Geçici taktikler yerine kalıcı marka değeri oluşturan uzun vadeli stratejiler.",
      detail: "Marka kimliği, konumlandırma ve hikaye anlatımını tek bir stratejik çerçevede birleştirerek uzun vadeli büyüme altyapısı kuruyoruz."
    },
    {
      id: 2,
      icon: "globe",
      title: "Küresel Ölçekleme",
      summary: "Uluslararası pazarlara açılma, cross-border operasyonlar ve global büyüme stratejileri.",
      detail: "Kültürel kodları evrensel marka diline çevirerek, markaların sınır ötesi ölçeklenmesini mümkün kılıyoruz."
    },
    {
      id: 3,
      icon: "chart",
      title: "Sektörel Standartları Belirleme",
      summary: "Endüstri normlarını yeniden tanımlayan araştırmalar, raporlar ve politika önerileri.",
      detail: "Veri odaklı analizler ve sektör barometreleri ile markalaşma ekosisteminin referans noktası oluyoruz."
    },
    {
      id: 4,
      icon: "clock",
      title: "Ölçülebilir Değer Üretimi",
      summary: "Somut metriklerle izlenebilir ROI, büyüme oranları ve marka değeri artışı.",
      detail: "Her stratejik hamlenin etkisini ölçülebilir KPI'lar ile takip ediyoruz."
    }
  ],

  stats: [
    { value: 500, suffix: "+", label: "Kurumsal Profesyonel" },
    { value: 20, suffix: "+", label: "Aktif Mentör" },
    { value: 90, suffix: "%", label: "Farkındalık Artışı" },
    { value: 82, suffix: "%", label: "Yeni İş Fırsatı" }
  ],

  partners: [
    "Türk Hava Yolları", "Tüpraş", "Ford Otosan", "Arçelik",
    "Ereğli Demir Çelik", "Koç Holding", "Sabancı Holding", "Turkcell",
    "Türk Telekom", "Aselsan", "Türkiye İş Bankası", "Garanti BBVA",
    "Akbank", "LC Waikiki", "Migros", "Pegasus",
    "Beko", "Anadolu Efes", "Getir", "Şişecam"
  ],

  boardMembers: [
    { initials: "AY", name: "Ahmet Yıldırım", role: "Kurul Başkanı", title: "Marka Stratejisti" },
    { initials: "SK", name: "Selin Kaya", role: "Kurul Üyesi", title: "CMO, Global Ölçek" },
    { initials: "EÖ", name: "Emre Öztürk", role: "Kurul Üyesi", title: "Girişim Sermayesi" },
    { initials: "DA", name: "Deniz Arslan", role: "Kurul Üyesi", title: "Kurumsal İletişim" }
  ],

  standards: [
    {
      icon: "clock",
      title: "Profesyonel Kıdem",
      text: "Strateji, marka yönetimi veya kurumsal liderlikte kanıtlanmış geçmiş."
    },
    {
      icon: "globe",
      title: "Küresel Vizyon",
      text: "Global pazarlarda varlık gösterme iradesi ve potansiyeli."
    },
    {
      icon: "users",
      title: "Bilgi Paylaşımı",
      text: "Uzmanlık aktarımı yoluyla topluluk sinerjisine katkı motivasyonu."
    }
  ],

  focusAreas: [
    {
      icon: "education",
      title: "Akademik & Sektörel Eğitimler",
      text: "Vizyon genişleten masterclass programları, seminerler ve ileri strateji eğitimleri."
    },
    {
      icon: "globe",
      title: "Sınır Ötesi Ticaret ve Büyüme",
      text: "Global operasyonel destek, pazaryeri stratejileri ve uluslararası ölçekleme altyapısı."
    },
    {
      icon: "megaphone",
      title: "Sektörel Farkındalık",
      text: "Endüstri raporları, analitik yayınlar ve araştırma tabanlı sektör barometreleri."
    },
    {
      icon: "lightbulb",
      title: "Yönetici Mentörlüğü",
      text: "Endüstri liderleri ile doğrudan deneyim aktarımı, birebir koçluk ve kariyer stratejisi."
    }
  ],

  advantages: [
    {
      num: "01",
      title: "SaaS ve Yazılım Teşvikleri",
      text: "Küresel araçlarda özel kullanım avantajları. Sektörün lider platformlarında indirimler ve öncelikli erişim."
    },
    {
      num: "02",
      title: "Stratejik Danışmanlık Erişimi",
      text: "Öncelikli strateji oturumları ve marka check-up imkanları. Kurul üyeleriyle doğrudan istişare."
    },
    {
      num: "03",
      title: "Global Pazar İndirimleri",
      text: "Lojistik, hukuk ve pazaryeri operasyonlarında özel partnerlikler ve ayrıcalıklı fiyatlandırma."
    }
  ],

  knowledge: [
    {
      icon: "doc",
      cat: "Vaka Analizleri",
      title: "Üye Markaların Büyüme Hikayeleri",
      text: "Gerçek veriler, gerçek sonuçlar. Ölçeklenme süreçleri ve stratejik dönüşüm vakaları.",
      tags: ["+24 Vaka"],
      url: "#"
    },
    {
      icon: "book",
      cat: "Literatür ve Makaleler",
      title: "Marka Mimarisi ve Yapay Zeka",
      text: "Derinlemesine içgörüler. Uygulama odaklı stratejik perspektifler.",
      tags: ["+60 Makale"],
      url: "#"
    },
    {
      icon: "play",
      cat: "Video & Podcast",
      title: "Stratejik Diyaloglar",
      text: "Kapalı oturum kayıtları. Sektörün önde gelen isimleriyle sohbetler.",
      tags: ["Spotify", "YouTube"],
      url: "#"
    }
  ],

  flow: [
    { num: "01", title: "Ön Başvuru", text: "Dijital form üzerinden temel vizyonun iletilmesi.", active: false },
    { num: "02", title: "Stratejik İnceleme", text: "Adayın ekosisteme sağlayacağı katma değer analizi.", active: false },
    { num: "03", title: "İstişare", text: "Hedefler ve beklentiler üzerine kapalı görüşme.", active: false },
    { num: "04", title: "Katılım Onayı", text: "Stratejik ayrıcalıklar ağına resmi katılım.", active: true }
  ],

  manifesto: [
    { text: "Geçici trendleri değil,", highlight: "kalıcı değerleri", after: "izleriz." },
    { text: "Rekabeti değil,", highlight: "iş birliğini", after: "büyütürüz." },
    { text: "Sektörel ezberleri yıkar,", highlight: "yeni standartlar", after: "koyarız." },
    { text: "Bilgiyi saklamaz,", highlight: "çoğaltırız.", after: "" },
    { text: "Küresel düşünür,", highlight: "yerel köklerimizle", after: "hareket ederiz." }
  ]
};


// ── SVG Icon Map ───────────────────────────
const IconMap = {
  brand: `<svg viewBox="0 0 24 24"><path d="M2 3h20M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m7 21 5-5 5 5"/></svg>`,
  globe: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>`,
  clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  users: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  education: `<svg viewBox="0 0 24 24"><path d="M2 3h20M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m7 21 5-5 5 5"/></svg>`,
  megaphone: `<svg viewBox="0 0 24 24"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/></svg>`,
  lightbulb: `<svg viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/></svg>`,
  doc: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  book: `<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  play: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16 10,8"/></svg>`
};


// ── DOM Ready ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderFoundations();
  renderStats();
  renderPartners();
  renderBoard();
  renderStandards();
  renderFocusAreas();
  renderAdvantages();
  renderKnowledge();
  renderFlow();
  renderManifesto();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initCounterAnimation();
});


// ── Render Functions ───────────────────────

function renderFoundations() {
  const grid = document.getElementById('foundations-grid');
  if (!grid) return;
  grid.innerHTML = SiteData.foundations.map((item, i) => `
    <article class="foundation-card reveal reveal-delay-${i + 1}">
      <div class="card-icon">${IconMap[item.icon] || ''}</div>
      <h3>${item.title}</h3>
      <p class="card-summary">${item.summary}</p>
      <p class="card-detail">${item.detail}</p>
    </article>
  `).join('');
}

function renderStats() {
  const grid = document.getElementById('impact-grid');
  if (!grid) return;
  grid.innerHTML = SiteData.stats.map((stat, i) => `
    <div class="stat-card reveal reveal-delay-${i + 1}">
      <div class="stat-number">
        <span class="counter" data-target="${stat.value}">0</span><span class="stat-suffix">${stat.suffix}</span>
      </div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

function renderPartners() {
  const track = document.getElementById('partners-track');
  if (!track) return;
  const items = SiteData.partners.map(name => `<span class="partner-item">${name}</span>`).join('');
  track.innerHTML = `<div style="display:flex;gap:0">${items}</div><div style="display:flex;gap:0">${items}</div>`;
}

function renderBoard() {
  const grid = document.getElementById('board-grid');
  if (!grid) return;
  grid.innerHTML = SiteData.boardMembers.map((m, i) => `
    <div class="board-member reveal reveal-delay-${i + 1}">
      <div class="board-avatar">${m.initials}</div>
      <h4>${m.name}</h4>
      <div class="board-role">${m.role}</div>
      <div class="board-title">${m.title}</div>
    </div>
  `).join('');
}

function renderStandards() {
  const grid = document.getElementById('standards-grid');
  if (!grid) return;
  grid.innerHTML = SiteData.standards.map((s, i) => `
    <div class="standard-card reveal reveal-delay-${i + 1}">
      <div class="std-icon">${IconMap[s.icon] || ''}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>
  `).join('');
}

function renderFocusAreas() {
  const grid = document.getElementById('focus-grid');
  if (!grid) return;
  grid.innerHTML = SiteData.focusAreas.map((f, i) => `
    <div class="focus-card reveal reveal-delay-${(i % 2) + 1}">
      <div class="focus-icon">${IconMap[f.icon] || ''}</div>
      <div>
        <h3>${f.title}</h3>
        <p>${f.text}</p>
      </div>
    </div>
  `).join('');
}

function renderAdvantages() {
  const grid = document.getElementById('advantages-grid');
  if (!grid) return;
  grid.innerHTML = SiteData.advantages.map((a, i) => `
    <div class="advantage-card reveal reveal-delay-${i + 1}">
      <div class="adv-num">${a.num}</div>
      <h3>${a.title}</h3>
      <p>${a.text}</p>
    </div>
  `).join('');
}

function renderKnowledge() {
  const grid = document.getElementById('knowledge-grid');
  if (!grid) return;
  grid.innerHTML = SiteData.knowledge.map((k, i) => `
    <a href="${k.url}" class="knowledge-card reveal reveal-delay-${i + 1}">
      <div class="kc-icon">${IconMap[k.icon] || ''}</div>
      <div class="kc-cat">${k.cat}</div>
      <h3>${k.title}</h3>
      <p>${k.text}</p>
      <div>${k.tags.map(t => `<span class="kc-tag">${t}</span>`).join('')}</div>
    </a>
  `).join('');
}

function renderFlow() {
  const grid = document.getElementById('flow-grid');
  if (!grid) return;
  grid.innerHTML = SiteData.flow.map((f, i) => `
    <div class="flow-step${f.active ? ' active-step' : ''} reveal reveal-delay-${i + 1}">
      <div class="flow-num">${f.num}</div>
      <h3>${f.title}</h3>
      <p>${f.text}</p>
    </div>
  `).join('');
}

function renderManifesto() {
  const container = document.getElementById('manifesto-lines');
  if (!container) return;
  container.innerHTML = SiteData.manifesto.map((m, i) => `
    <p class="reveal reveal-delay-${i + 1}">${m.text} <span class="highlight">${m.highlight}</span>${m.after ? ' ' + m.after : ''}</p>
  `).join('');
}


// ── Navbar ─────────────────────────────────

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


// ── Mobile Menu ────────────────────────────

function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


// ── Scroll Reveal ──────────────────────────

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  reveals.forEach(el => observer.observe(el));
}


// ── Counter Animation ──────────────────────

function initCounterAnimation() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}


// ── Smooth Scroll ──────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ── Form Handlers (Backend Ready) ──────────

async function submitContactForm(formData) {
  const API_ENDPOINT = '/api/contact';
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error: error.message };
  }
}

async function submitNewsletter(email) {
  const API_ENDPOINT = '/api/newsletter';
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Newsletter submission error:', error);
    return { success: false, error: error.message };
  }
}

const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    const btn = newsletterForm.querySelector('button');
    const email = input?.value?.trim();
    if (!email) return;

    btn.textContent = 'Gönderiliyor...';
    btn.disabled = true;

    const result = await submitNewsletter(email);

    if (result.success) {
      btn.textContent = 'Başarılı!';
      input.value = '';
    } else {
      btn.textContent = 'Hata — Tekrar Deneyin';
    }

    setTimeout(() => {
      btn.textContent = 'Abone Ol';
      btn.disabled = false;
    }, 2500);
  });
}
