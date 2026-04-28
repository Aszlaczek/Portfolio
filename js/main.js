/* ============================================
   PORTFOLIO - MAIN JAVASCRIPT
   ============================================ */

/* ── Translation Dictionaries ── */
const translations = {
  pl: {
    // Nav
    'nav.about': 'O mnie',
    'nav.skills': 'Umiejętności',
    'nav.projects': 'Projekty',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.greeting': '👋 Cześć, jestem',
    'hero.iam': 'Jestem',
    'hero.cta_work': 'Zobacz moje prace',
    'hero.cta_contact': 'Skontaktuj się',
    'hero.scroll': 'Przewiń',

    // About
    'about.label': 'O mnie',
    'about.title': 'Pasjonat tworzenia<br>cyfrowych doświadczeń',
    'about.subtitle': 'Łączę kreatywność z kodem, aby budować piękne, funkcjonalne i przyjazne dla użytkownika strony internetowe.',
    'about.badge': 'Lata doświadczenia',
    'about.text1': 'Cześć! Jestem <strong>Adrian</strong> — pasjonat tworzenia stron internetowych i projektowania z zamiłowaniem do tworzenia wyjątkowych cyfrowych doświadczeń. Specjalizuję się w budowaniu nowoczesnych, responsywnych stron i aplikacji, które nie tylko świetnie wyglądają, ale także zapewniają doskonałe wrażenia użytkownikom.',
    'about.text2': 'Mając solidne podstawy w <strong>HTML, CSS i JavaScript</strong>, stale poszukuję nowych technologii i trendów projektowych, aby przesuwać granice możliwości w sieci. Każdy projekt to szansa na naukę czegoś nowego i stworzenie czegoś wartościowego.',
    'about.stat1': 'Projektów',
    'about.stat2': 'Zadowolonych klientów',
    'about.stat3': 'Technologii',

    // Skills
    'skills.label': 'Umiejętności',
    'skills.title': 'Technologie i narzędzia<br>z którymi pracuję',
    'skills.subtitle': 'Ciągle poszerzam swój zestaw narzędzi. Oto główne technologie, których używam do realizacji pomysłów.',
    'skills.frontend_title': 'Frontend Development',
    'skills.frontend_desc': 'Tworzenie responsywnych, dopracowanych co do piksela interfejsów za pomocą nowoczesnych technologii i frameworków.',
    'skills.design_title': 'Projektowanie UI / UX',
    'skills.design_desc': 'Tworzenie intuicyjnych i atrakcyjnych wizualnie interfejsów użytkownika z dbałością o szczegóły i użyteczność.',
    'skills.backend_title': 'Backend i narzędzia',
    'skills.backend_desc': 'Praca z technologiami serwerowymi, bazami danych i narzędziami deweloperskimi do budowy kompletnych rozwiązań.',

    // Projects
    'projects.label': 'Projekty',
    'projects.title': 'Ostatnie prace i<br>projekty poboczne',
    'projects.subtitle': 'Wybrane projekty, nad którymi pracowałem. Każdy z nich nauczył mnie czegoś nowego.',
    'projects.demo': '◉ Demo',
    'projects.source': '⟨/⟩ Kod źródłowy',
    'projects.p1_label': 'Wyróżniony projekt',
    'projects.p1_title': 'Wizualizacja ML',
    'projects.p1_desc': 'Interaktywna platforma do wizualizacji algorytmów uczenia maszynowego, w tym regresji liniowej, k-NN i sieci neuronowych z animacjami w czasie rzeczywistym.',
    'projects.p2_label': 'Aplikacja webowa',
    'projects.p2_title': 'Panel analityczny',
    'projects.p2_desc': 'Responsywny panel analityczny z dynamiczną wizualizacją danych, filtrowaniem w czasie rzeczywistym i trybem ciemnym.',
    'projects.p3_label': 'Projekt kreatywny',
    'projects.p3_title': 'Animowane kartki okolicznościowe',
    'projects.p3_desc': 'Kolekcja interaktywnych, animowanych kartek HTML/CSS z transformacjami 3D i pięknymi motywami kwiatowymi.',

    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Porozmawiajmy o<br>współpracy',
    'contact.subtitle': 'Masz pomysł na projekt lub po prostu chcesz się przywitać? Chętnie porozmawiam!',
    'contact.text': 'Jestem obecnie otwarty na nowe możliwości i ciekawe projekty. Niezależnie czy masz pytanie, czy chcesz po prostu porozmawiać — moja skrzynka jest zawsze otwarta.',
    'contact.email_label': 'E-mail',
    'contact.phone_label': 'Telefon',
    'contact.location_label': 'Lokalizacja',
    'contact.location_value': 'Polska',
    'contact.avail_label': 'Dostępność',
    'contact.avail_value': 'Otwarty na nowe projekty',
    'contact.form_name': 'Twoje imię',
    'contact.form_name_label': 'Imię',
    'contact.form_email': 'Twój e-mail',
    'contact.form_subject': 'Temat',
    'contact.form_subject_label': 'Temat',
    'contact.form_message': 'Twoja wiadomość',
    'contact.form_message_label': 'Wiadomość',
    'contact.form_submit': 'Wyślij wiadomość',
    'contact.form_success': '✓ Wiadomość wysłana!',

    // Footer
    'footer.copy': '&copy; 2026 <span>Adrian</span>. Zbudowane z pasją i kodem.',
    'footer.back_top': '↑ Wróć na górę',

    // Typewriter words
    'typewriter_words': ['Web Developerem', 'Projektantem UI/UX', 'Programistą', 'Kreatywnym twórcą', 'Entuzjastą technologii'],
  },
  en: {
    // Nav
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': '👋 Hello, I\'m',
    'hero.iam': 'I\'m a',
    'hero.cta_work': 'View My Work',
    'hero.cta_contact': 'Get In Touch',
    'hero.scroll': 'Scroll',

    // About
    'about.label': 'About Me',
    'about.title': 'Passionate About Creating<br>Digital Experiences',
    'about.subtitle': 'I blend creativity with code to build beautiful, functional, and user-friendly web experiences.',
    'about.badge': 'Years Experience',
    'about.text1': 'Hi there! I\'m <strong>Adrian</strong> — a passionate web developer and designer with a love for creating stunning digital experiences. I specialize in building modern, responsive websites and applications that not only look great but also deliver exceptional user experiences.',
    'about.text2': 'With a strong foundation in <strong>HTML, CSS, and JavaScript</strong>, I\'m constantly exploring new technologies and design trends to push the boundaries of what\'s possible on the web. Every project is an opportunity to learn something new and create something meaningful.',
    'about.stat1': 'Projects',
    'about.stat2': 'Happy Clients',
    'about.stat3': 'Technologies',

    // Skills
    'skills.label': 'Skills',
    'skills.title': 'Technologies & Tools<br>I Work With',
    'skills.subtitle': 'I\'m always expanding my toolkit. Here are the core technologies I use to bring ideas to life.',
    'skills.frontend_title': 'Frontend Development',
    'skills.frontend_desc': 'Building responsive, pixel-perfect interfaces with modern web technologies and frameworks.',
    'skills.design_title': 'UI / UX Design',
    'skills.design_desc': 'Crafting intuitive and visually appealing user interfaces with attention to detail and usability.',
    'skills.backend_title': 'Backend & Tools',
    'skills.backend_desc': 'Working with server-side technologies, databases, and development tools to build full-stack solutions.',

    // Projects
    'projects.label': 'Projects',
    'projects.title': 'Recent Work &<br>Side Projects',
    'projects.subtitle': 'A selection of projects I\'ve worked on. Each one taught me something new.',
    'projects.demo': '◉ Live Demo',
    'projects.source': '⟨/⟩ Source',
    'projects.p1_label': 'Featured Project',
    'projects.p1_title': 'ML Visualization App',
    'projects.p1_desc': 'Interactive platform for visualizing machine learning algorithms including Linear Regression, k-NN, and Neural Networks with real-time animations.',
    'projects.p2_label': 'Web App',
    'projects.p2_title': 'Analytics Dashboard',
    'projects.p2_desc': 'A responsive analytics dashboard with dynamic data visualization, real-time filtering, and dark mode support.',
    'projects.p3_label': 'Creative Project',
    'projects.p3_title': 'Animated Greeting Cards',
    'projects.p3_desc': 'Collection of interactive, animated HTML/CSS greeting cards with 3D transforms and beautiful floral designs.',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Let\'s Work<br>Together',
    'contact.subtitle': 'Have a project in mind or just want to say hi? I\'d love to hear from you.',
    'contact.text': 'I\'m currently open to new opportunities and exciting projects. Whether you have a question or just want to connect — my inbox is always open.',
    'contact.email_label': 'Email',
    'contact.phone_label': 'Phone',
    'contact.location_label': 'Location',
    'contact.location_value': 'Poland',
    'contact.avail_label': 'Availability',
    'contact.avail_value': 'Open for opportunities',
    'contact.form_name': 'Your Name',
    'contact.form_name_label': 'Name',
    'contact.form_email': 'Your Email',
    'contact.form_subject': 'Subject',
    'contact.form_subject_label': 'Subject',
    'contact.form_message': 'Your Message',
    'contact.form_message_label': 'Message',
    'contact.form_submit': 'Send Message',
    'contact.form_success': '✓ Message Sent!',

    // Footer
    'footer.copy': '&copy; 2026 <span>Adrian</span>. Built with passion & code.',
    'footer.back_top': '↑ Back to Top',

    // Typewriter words
    'typewriter_words': ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker', 'Tech Enthusiast'],
  }
};

let currentLang = 'pl';

document.addEventListener('DOMContentLoaded', () => {
  // ── Particle Canvas Background ──
  initParticles();

  // ── Navigation ──
  initNavigation();

  // ── Typewriter Effect ──
  initTypewriter();

  // ── Scroll Reveal Animations ──
  initScrollReveal();

  // ── Counter Animation ──
  initCounters();

  // ── Custom Cursor ──
  initCustomCursor();

  // ── Smooth Scroll ──
  initSmoothScroll();

  // ── Contact Form ──
  initContactForm();

  // ── Tilt Effect on Cards ──
  initTiltEffect();

  // ── Language Toggle ──
  initLanguageToggle();
});


/* ============================================
   PARTICLE SYSTEM
   ============================================ */
function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.baseX = this.x;
      this.baseY = this.y;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.density = Math.random() * 30 + 1;
      this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let directionX = forceDirectionX * force * this.density * 0.6;
          let directionY = forceDirectionY * force * this.density * 0.6;
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
        }
      } else {
        // Subtle drift
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.baseX = this.x;
        this.baseY = this.y;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${getAccentRGB()}, ${this.opacity})`;
      ctx.fill();
    }
  }

  function getAccentRGB() {
    const style = getComputedStyle(document.documentElement);
    const hue = parseInt(style.getPropertyValue('--accent-hue')) || 250;
    const [r, g, b] = hslToRgb(hue / 360, 0.85, 0.65);
    return `${r}, ${g}, ${b}`;
  }

  function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  // Determine particle count based on screen size
  const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 150);

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const opacity = (1 - distance / 120) * 0.15;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${getAccentRGB()}, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  animate();
}


/* ============================================
   NAVIGATION
   ============================================ */
function initNavigation() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__link');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;

    // Active link highlighting
    updateActiveLink();
  });

  // Mobile toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
      document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle?.classList.remove('open');
      links?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll('.section[id]');
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}


/* ============================================
   TYPEWRITER EFFECT
   ============================================ */
function initTypewriter() {
  const element = document.querySelector('.hero__typewriter');
  if (!element) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function getWords() {
    return translations[currentLang]['typewriter_words'];
  }

  function type() {
    const words = getWords();
    const currentWord = words[wordIndex % words.length];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  setTimeout(type, 1000);
}


/* ============================================
   SCROLL REVEAL
   ============================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Keep observing so animations can re-trigger if needed
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}


/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }
}


/* ============================================
   CUSTOM CURSOR
   ============================================ */
function initCustomCursor() {
  const cursor = document.querySelector('.cursor');
  if (!cursor || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  let cursorX = 0, cursorY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
  });

  function animateCursor() {
    currentX += (cursorX - currentX) * 0.15;
    currentY += (cursorY - currentY) * 0.15;
    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}


/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}


/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('.btn--primary');
    const originalText = btn.innerHTML;

    // Simple animation feedback
    btn.innerHTML = `<span>${translations[currentLang]['contact.form_success']}</span>`;
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}


/* ============================================
   3D TILT EFFECT ON CARDS
   ============================================ */
function initTiltEffect() {
  const cards = document.querySelectorAll('.project-card, .skill-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}


/* ============================================
   LANGUAGE TOGGLE
   ============================================ */
function initLanguageToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    applyTranslations();
    updateToggleButton(btn);
  });
}

function updateToggleButton(btn) {
  const flag = btn.querySelector('.lang-toggle__flag');
  const text = btn.querySelector('.lang-toggle__text');

  if (currentLang === 'pl') {
    flag.textContent = '🇬🇧';
    text.textContent = 'EN';
    btn.title = 'Switch to English';
    document.documentElement.lang = 'pl';
  } else {
    flag.textContent = '🇵🇱';
    text.textContent = 'PL';
    btn.title = 'Przełącz na polski';
    document.documentElement.lang = 'en';
  }

  // Add a quick scale animation
  btn.style.transform = 'scale(1.15)';
  setTimeout(() => { btn.style.transform = ''; }, 200);
}

function applyTranslations() {
  const dict = translations[currentLang];

  // Translate text content (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate HTML content (data-i18n-html) — for elements with <br>, <strong>, etc.
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Translate placeholders (data-i18n-placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}
