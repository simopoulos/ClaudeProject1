'use strict';

/* ===== SERVICE DATA ===== */
const services = {
  general: {
    tag: 'General & Preventive',
    title: 'General & Preventive Dentistry',
    desc: 'The foundation of a healthy smile. Our comprehensive general dentistry services keep your teeth and gums in optimal condition throughout every stage of life.',
    items: [
      'Professional cleaning & polishing (scaling)',
      'Comprehensive oral exams & digital X-rays',
      'White composite fillings',
      'Root canal therapy',
      'Periodontal gum disease treatment',
      'Sealants & fluoride treatments',
      'Emergency same-day appointments'
    ]
  },
  cosmetic: {
    tag: 'Cosmetic Dentistry',
    title: 'Cosmetic Dentistry',
    desc: 'Transform your smile with our full suite of cosmetic dental services. Whether you want subtle improvements or a complete makeover, Dr. Wong and Dr. Battaglin craft beautiful, natural-looking results.',
    items: [
      'Porcelain veneers & composite bonding',
      'Professional teeth whitening (Zoom & take-home)',
      'Crowns & bridges (tooth-colored)',
      'Smile design consultations',
      'Gum contouring',
      'Full smile makeovers'
    ]
  },
  implants: {
    tag: 'Dental Implants',
    title: 'Dental Implants',
    desc: 'Led by Dr. Peter Kim, our implant program offers the most advanced tooth replacement available. Implants look, feel, and function just like natural teeth — and they last a lifetime.',
    items: [
      'Single tooth dental implants',
      'Immediate placement (same-visit implants)',
      'Implant-supported crowns & bridges',
      'Implant-supported dentures',
      'Bone grafting when required',
      'Free implant consultations'
    ]
  },
  invisalign: {
    tag: 'Clear Aligners',
    title: 'Invisalign & Clear Aligners',
    desc: 'Achieve a straighter smile without metal braces. Dr. Wong and Dr. Battaglin are certified Invisalign and ClearCorrect providers offering adult and teen aligner treatments.',
    items: [
      'Invisalign Full & Lite for adults',
      'Invisalign Teen',
      'ClearCorrect alternative aligners',
      'Treatment range: $4,000–$7,000',
      'Progress check-ins every 6–8 weeks (included)',
      'Retainers included at treatment end',
      'Flexible payment plans available'
    ]
  },
  surgery: {
    tag: 'Oral Surgery',
    title: 'Oral Surgery & Wisdom Teeth',
    desc: 'All oral surgery procedures are handled in-house by Dr. Peter Kim. We offer sedation options for anxious patients and complex cases, ensuring a comfortable experience from start to finish.',
    items: [
      'Wisdom tooth extractions',
      'Complex & surgical extractions',
      'Nitrous oxide (laughing gas) sedation',
      'IV sedation available for complex cases',
      'TMJ (jaw joint) therapy',
      'Pre-surgical consultations & 3D imaging',
      'Post-op care & follow-up included'
    ]
  },
  dentures: {
    tag: 'Denture Clinic',
    title: 'Denture Clinic',
    desc: 'Our in-house denture clinic offers complete prosthetic solutions for patients who have lost teeth. We craft comfortable, natural-looking dentures tailored to your unique anatomy.',
    items: [
      'Full upper & lower dentures',
      'Partial dentures',
      'Implant-supported overdentures',
      'Same-day denture repairs',
      'Denture relines & adjustments',
      'Immediate dentures (placed same day as extraction)'
    ]
  }
};

/* ===== DOCTOR DATA ===== */
const doctors = {
  battaglin: {
    name: 'Dr. Hermina Battaglin',
    credential: 'DDS — University of Toronto',
    tag: 'General Dentistry · Founder',
    photoInitials: 'HB',
    photoBg: 'linear-gradient(135deg, #dbeafe, #e0f2fe)',
    specialties: ['General Dentistry', 'Implant Restorative', 'Invisalign', 'Root Canal Therapy', 'Comprehensive Care'],
    bio: 'Dr. Hermina Battaglin founded Art of Smile Dentistry in 2001 with a single mission: to provide exceptional, compassionate dental care to the Midtown Toronto community. A graduate of the University of Toronto Faculty of Dentistry, she brings over two decades of experience to every patient interaction.',
    bio2: 'Dr. Battaglin has a particular passion for implant restorative work and Invisalign treatment, helping patients achieve beautiful, functional smiles at every stage of life. Her patients describe her as warm, thorough, and genuinely invested in their long-term oral health.',
    quote: '"Dentistry isn\'t just about teeth — it\'s about people. Every smile tells a story, and we\'re honoured to be part of it."'
  },
  kim: {
    name: 'Dr. Peter Kim',
    credential: 'DDS — University of Western Ontario',
    tag: 'Oral Surgery & Implants',
    photoInitials: 'PK',
    photoBg: 'linear-gradient(135deg, #fff3ee, #fce7dd)',
    specialties: ['Dental Implants', 'Oral Surgery', 'Wisdom Teeth', 'Immediate Implant Placement', 'Bone Grafting', 'Sedation'],
    bio: 'Dr. Peter Kim is Art of Smile\'s oral surgery and implants specialist. A graduate of the University of Western Ontario Schulich School of Medicine & Dentistry, Dr. Kim has focused his career on implant dentistry and oral surgical procedures.',
    bio2: 'His expertise in immediate implant placement — placing the implant at the same appointment as the extraction — has helped hundreds of patients avoid long healing periods and achieve beautiful results faster. He is known for his calm, reassuring chairside manner with anxious patients.',
    quote: '"I want every patient to leave feeling better than when they arrived — whether that\'s relief from pain, or excitement about their new smile."'
  },
  wong: {
    name: 'Dr. Jovanna Wong',
    credential: 'BDS — James Cook University, Australia',
    tag: 'General & Cosmetic Dentistry',
    photoUrl: 'https://artofsmile.ca/wp-content/uploads/2025/11/Jovanna-Website-Image.webp',
    photoInitials: 'JW',
    photoBg: 'linear-gradient(135deg, #ede9fe, #e0e7ff)',
    specialties: ['Cosmetic Dentistry', 'Invisalign', 'ClearCorrect', 'Composite Bonding', 'Veneers', 'Smile Design'],
    bio: 'Dr. Jovanna Wong is a general and cosmetic dentist and certified Invisalign and ClearCorrect provider. A graduate of James Cook University\'s College of Medicine and Dentistry in Australia, she brings international training and a keen aesthetic eye to her cosmetic work.',
    bio2: 'Dr. Wong is passionate about clear aligner treatment and smile transformations. Her patients love her meticulous attention to detail and her ability to achieve beautiful, natural-looking results. Saturday and extended hours allow patients with busy schedules to access her care.',
    quote: '"The best part of cosmetic dentistry is watching someone see their smile for the first time — that moment of pure joy never gets old."'
  }
};

/* ===== UTILITY ===== */
function $(id) { return document.getElementById(id); }

/* ===== 1. MOBILE NAV TOGGLE ===== */
const hamburger = $('hamburger');
const mobileNav = $('mobileNav');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===== 2 & 3. SCROLL SPY + NAV EFFECT ===== */
const navEl = $('nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 60);

  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ===== 4. HERO PARALLAX ===== */
const heroImg = $('heroImg');
if (heroImg) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroImg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    }
  }, { passive: true });
}

/* ===== 5 & 6. MODAL HELPERS ===== */
const serviceModal = $('serviceModal');
const serviceModalBody = $('serviceModalBody');
const serviceModalClose = $('serviceModalClose');
const teamModal = $('teamModal');
const teamModalBody = $('teamModalBody');
const teamModalClose = $('teamModalClose');

function openModal(modal) {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(modal) {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* SERVICE MODALS */
function openServiceModal(key) {
  const s = services[key];
  if (!s) return;
  serviceModalBody.innerHTML = `
    <span class="modal-tag">${s.tag}</span>
    <h2 class="modal-title">${s.title}</h2>
    <p class="modal-desc">${s.desc}</p>
    <div class="modal-list">
      ${s.items.map(item => `<div class="modal-list-item">${item}</div>`).join('')}
    </div>
    <a href="#contact" class="modal-cta">Book This Service</a>
  `;
  openModal(serviceModal);
  serviceModalClose.focus();
  serviceModalBody.querySelector('.modal-cta').addEventListener('click', () => closeModal(serviceModal));
}

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => openServiceModal(card.dataset.service));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openServiceModal(card.dataset.service); }
  });
});
serviceModalClose.addEventListener('click', () => closeModal(serviceModal));
serviceModal.addEventListener('click', e => { if (e.target === serviceModal) closeModal(serviceModal); });

/* TEAM MODALS */
function openTeamModal(key) {
  const d = doctors[key];
  if (!d) return;

  const photoHtml = d.photoUrl
    ? `<div class="modal-photo"><img src="${d.photoUrl}" alt="${d.name}" onerror="this.style.display='none'"></div>`
    : `<div class="modal-photo" style="background:${d.photoBg}"><div class="modal-initials">${d.photoInitials}</div></div>`;

  teamModalBody.innerHTML = `
    <span class="modal-tag">${d.tag}</span>
    <div class="modal-doctor-header">
      ${photoHtml}
      <div>
        <h2 class="modal-title" style="font-size:28px;margin-bottom:4px">${d.name}</h2>
        <p style="font-size:13px;color:var(--color-text-muted)">${d.credential}</p>
      </div>
    </div>
    <div class="modal-specialties">
      ${d.specialties.map(s => `<span class="modal-specialty-tag">${s}</span>`).join('')}
    </div>
    <p class="modal-desc">${d.bio}</p>
    <p class="modal-desc" style="margin-top:-8px">${d.bio2}</p>
    <blockquote class="modal-quote">${d.quote}</blockquote>
    <a href="#contact" class="modal-cta">Book with ${d.name.split(' ').slice(-1)[0]}</a>
  `;
  openModal(teamModal);
  teamModalClose.focus();
  teamModalBody.querySelector('.modal-cta').addEventListener('click', () => closeModal(teamModal));
}

document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('click', () => openTeamModal(card.dataset.doctor));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openTeamModal(card.dataset.doctor); }
  });
});
teamModalClose.addEventListener('click', () => closeModal(teamModal));
teamModal.addEventListener('click', e => { if (e.target === teamModal) closeModal(teamModal); });

/* ===== 7. KEYBOARD TRAP & ESC ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (serviceModal.classList.contains('open')) closeModal(serviceModal);
    if (teamModal.classList.contains('open')) closeModal(teamModal);
  }
});

function trapFocus(modal) {
  modal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = Array.from(modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}
trapFocus(serviceModal);
trapFocus(teamModal);

/* ===== 8. TESTIMONIALS CAROUSEL ===== */
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = $('carouselDots');
let currentSlide = 0;
let autoTimer;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Review ${i + 1}`);
  dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
  dotsContainer.appendChild(dot);
});

function goTo(n) {
  slides[currentSlide].classList.remove('active');
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dotsContainer.children[currentSlide].classList.add('active');
}
function startAuto() { autoTimer = setInterval(() => goTo(currentSlide + 1), 5000); }
function stopAuto()  { clearInterval(autoTimer); }

$('carouselPrev').addEventListener('click', () => { stopAuto(); goTo(currentSlide - 1); startAuto(); });
$('carouselNext').addEventListener('click', () => { stopAuto(); goTo(currentSlide + 1); startAuto(); });

const carouselEl = $('carousel');
carouselEl.addEventListener('mouseenter', stopAuto);
carouselEl.addEventListener('mouseleave', startAuto);

document.addEventListener('keydown', e => {
  if (serviceModal.classList.contains('open') || teamModal.classList.contains('open')) return;
  if (e.key === 'ArrowLeft')  { stopAuto(); goTo(currentSlide - 1); startAuto(); }
  if (e.key === 'ArrowRight') { stopAuto(); goTo(currentSlide + 1); startAuto(); }
});

startAuto();

/* ===== 9. SCROLL REVEAL ===== */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.07}s`;
  revealObs.observe(el);
});

/* ===== 10. COUNT-UP ===== */
function countUp(el, target, isDecimal) {
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = target * eased;
    el.textContent = isDecimal ? val.toFixed(1) : Math.floor(val);
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = isDecimal ? target.toFixed(1) : target;
  }
  requestAnimationFrame(tick);
}

const countObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    if (el.dataset.count)        countUp(el, parseInt(el.dataset.count), false);
    if (el.dataset.countDecimal) countUp(el, parseFloat(el.dataset.countDecimal), true);
    countObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count], [data-count-decimal]').forEach(el => countObs.observe(el));

/* ===== 11. FAQ ACCORDION ===== */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

/* ===== 12. CONTACT FORM VALIDATION ===== */
const contactForm = $('contactForm');
const formSuccess = $('formSuccess');

function checkField(input, errId, msg) {
  const err = $(errId);
  if (!input.value.trim()) {
    input.classList.add('error');
    err.textContent = msg;
    return false;
  }
  input.classList.remove('error');
  err.textContent = '';
  return true;
}

function checkEmail(input, errId) {
  const err = $(errId);
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.value.trim())        { input.classList.add('error'); err.textContent = 'Email is required'; return false; }
  if (!re.test(input.value.trim())) { input.classList.add('error'); err.textContent = 'Please enter a valid email'; return false; }
  input.classList.remove('error');
  err.textContent = '';
  return true;
}

if (contactForm) {
  contactForm.querySelectorAll('input, textarea, select').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      const errEl = document.getElementById(el.id + 'Error');
      if (errEl) errEl.textContent = '';
    });
  });

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const ok1 = checkField($('fname'), 'fnameError', 'First name is required');
    const ok2 = checkField($('lname'), 'lnameError', 'Last name is required');
    const ok3 = checkEmail($('email'), 'emailError');
    if (ok1 && ok2 && ok3) {
      contactForm.style.display = 'none';
      formSuccess.classList.add('visible');
    }
  });
}

/* ===== 13. SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});
