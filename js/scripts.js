const translations = {
  pl: {
    nav_home: "Główna",
    nav_about: "Narracja",
    nav_projects: "Projekty",
    nav_skills: "Ekspertyza",
    nav_cv: "CV",
    nav_contact: "Kontakt",
    hero_title1: "Architekt AI i Innowacji Webowej",
    hero_subtitle: "Adrian Wzorek",
    hero_role: "AI & Web Systems Engineer",
    about_title: "Strategia Inżynierska",
    about_intro_title: "Precyzja Inżynierska",
    about_intro_text: "Moje podejście łączy rygor inżynierski z elastycznością metodologii Agile (Scrum). Jako Inżynier Informatyki, projektuję systemy z myślą o skalowalności i czystej architekturze.",
    about_ai_title: "Ekosystem Agentów AI",
    about_ai_text: "Specjalizuję się w implementacji rozproszonych systemów Agentów AI. Opracowałem autorskie mechanizmy komunikacji międzymodelowej oraz optymalizacji pamięci LLM.",
    about_martial_title: "Etyka i Przywództwo",
    about_martial_text: "Ponad 5 lat jako instruktor karate wykształciło we mnie proaktywną postawę. Przenoszę liderstwo z maty sportowej do zespołów deweloperskich.",
    timeline_title: "Ścieżka Wzrostu",
    timeline_1_date: "Fundamenty CS",
    timeline_1_text: "Zdobycie tytułu Inżyniera Informatyki. Skupienie na optymalizacji algorytmicznej i systemach rozproszonych.",
    timeline_2_date: "Lider Grupy (5+ Lat)",
    timeline_2_text: "Instruktor i Mentor – zarządzanie zespołem w warunkach wysokiej presji.",
    timeline_3_date: "Innowacje AI & ML",
    timeline_3_text: "Projektowanie architektury systemów agentowych i integracja modeli LLM.",
    expertise_title: "Specjalizacja Techniczna",
    exp_ai_title: "AI & Agent Systems",
    exp_ai_list: "Agent Autonomy, LLM Connectivity, RAG Patterns, Neural Interface Design, Scalable Machine Learning Logic",
    exp_web_title: "System Design & Web",
    exp_web_list: "Next.js/React Specialist, Django/Python Backend Engineering, TypeScript Architecture, Clean Code Principles",
    exp_arch_title: "Methodologies & Scale",
    exp_arch_list: "Agile/Scrum Lifecycle, Git-Flow Strategy, System Scaling, Database Architecture, Continuous Integration",
    proj_1: "Memory Flow",
    proj_1_desc: "Interaktywna gra logiczna zbudowana w React.js, optymalizująca system pamięci podręcznej i stan aplikacji.",
    proj_2: "Color Spectrum",
    proj_2_desc: "Zaawansowane narzędzie UI do generowania palet barw, skupione na dostępności i czystej estetyce.",
    proj_3: "Attendance Analytics",
    proj_3_desc: "System analityczny do monitorowania obecności, integrujący bazy danych SQL z przejrzystym interfejsem dewelopera.",
    proj_4: "AI Lexicon Pro",
    proj_4_desc: "Platforma leksykalna zintegrowana z API Agentów AI, wspierająca wielojęzyczne przetwarzanie danych.",
    proj_look: "Explore Project",
    cv_btn: "Pobierz CV",
    contact_title: "Nawiąż Relację",
    form_send: "Wyślij",
    typewriter_skills: ["Inżynier AI/ML", "Architekt Systemowy", "Lider Agile", "Ekspert Full-Stack", "Inżynier Samomotywujący"]
  },
  en: {
    nav_home: "Home",
    nav_about: "Narrative",
    nav_projects: "Projects",
    nav_skills: "Expertise",
    nav_cv: "CV",
    nav_contact: "Contact",
    hero_title1: "AI & Web Innovation Architect",
    hero_subtitle: "Adrian Wzorek",
    hero_role: "AI & Web Systems Engineer",
    about_title: "Engineering Strategy",
    about_intro_title: "System Architecture",
    about_intro_text: "My approach fuses engineering rigor with Agile (Scrum) flexibility. As a CS Engineer, I design systems with scalability and Clean Architecture.",
    about_ai_title: "Agent Evolution",
    about_ai_text: "I specialize in the implementation of distributed AI Agent systems. I have developed proprietary inter-model communication mechanisms and LLM memory optimization.",
    about_martial_title: "Work Ethic & Leadership",
    about_martial_text: "Over 5 years as a karate instructor has forged a proactive attitude. I translate leadership from the mat to the development team.",
    timeline_title: "Growth Roadmap",
    timeline_1_date: "CS Foundations",
    timeline_1_text: "Earned my Computer Science Engineering degree. Focused on algorithmic optimization and distributed systems.",
    timeline_2_date: "Group Leader (5+ Years)",
    timeline_2_text: "Instructor & Mentor – Team management under high-pressure conditions.",
    timeline_3_date: "AI & ML Innovation",
    timeline_3_text: "Designing agentic system architectures and integrating LLM models.",
    expertise_title: "Technical Specialization",
    exp_ai_title: "AI & Agent Systems",
    exp_ai_list: "Agent Autonomy, LLM Connectivity, RAG Patterns, Neural Interface Design, Scalable Machine Learning Logic",
    exp_web_title: "System Design & Web",
    exp_web_list: "Next.js/React Specialist, Django/Python Backend Engineering, TypeScript Architecture, Clean Code Principles",
    exp_arch_title: "Methodologies & Scale",
    exp_arch_list: "Agile/Scrum Lifecycle, Git-Flow Strategy, System Scaling, Database Architecture, Continuous Integration",
    proj_1: "Memory Flow",
    proj_1_desc: "Interactive strategy game built with React.js, optimizing frontend performance and state management.",
    proj_2: "Color Spectrum",
    proj_2_desc: "Professional UI tool for color palette generation, focused on accessibility and minimal design standards.",
    proj_3: "Attendance Analytics",
    proj_3_desc: "Analytical dashboard for attendance tracking, integrating SQL databases with a developer-centric interface.",
    proj_4: "AI Lexicon Pro",
    proj_4_desc: "Lexical platform integrated with AI Agent APIs, supporting large-scale multilingual data processing.",
    proj_look: "Explore Project",
    cv_btn: "Download CV",
    contact_title: "Establish Connection",
    form_send: "Submit",
    typewriter_skills: ["AI/ML Engineer", "System Architect", "Agile Leader", "Full-Stack Expert", "Lead Engineer"]
  }
};

let currentLang = 'pl';

// Typewriter Logic
let typewriterElement = document.getElementById('typewriter');
let typeIdx = 0, charIdx = 0, isDeleting = false, typeSpeed = 100;
function type() {
  const currentSkills = translations[currentLang].typewriter_skills;
  const word = currentSkills[typeIdx];
  if (isDeleting) { typewriterElement.textContent = word.substring(0, charIdx - 1); charIdx--; typeSpeed = 50; }
  else { typewriterElement.textContent = word.substring(0, charIdx + 1); charIdx++; typeSpeed = 150; }
  if (!isDeleting && charIdx === word.length) { isDeleting = true; typeSpeed = 2000; }
  else if (isDeleting && charIdx === 0) { isDeleting = false; typeIdx = (typeIdx + 1) % currentSkills.length; typeSpeed = 500; }
  setTimeout(type, typeSpeed);
}

// Neural Web Background
const canvas = document.getElementById('neural-web-canvas');
const ctx = canvas.getContext('2d');
let width, height, nodes = [];
function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();
class Node {
  constructor() { this.x = Math.random() * width; this.y = Math.random() * height; this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4; }
  update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > width) this.vx *= -1; if (this.y < 0 || this.y > height) this.vy *= -1; }
  draw() { ctx.fillStyle = 'rgba(34, 100, 223, 0.4)'; ctx.beginPath(); ctx.arc(this.x, this.y, 1, 0, Math.PI * 2); ctx.fill(); }
}
for (let i = 0; i < 60; i++) nodes.push(new Node());
function animate() {
  ctx.clearRect(0, 0, width, height); nodes.forEach(n => { n.update(); n.draw(); });
  ctx.strokeStyle = 'rgba(34, 100, 223, 0.08)'; ctx.lineWidth = 0.5;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.sqrt((nodes[i].x - nodes[j].x) ** 2 + (nodes[i].y - nodes[j].y) ** 2);
      if (dist < 180) { ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); }
    }
  }
  requestAnimationFrame(animate);
}
animate();

// SCROLL SPY ENGINE
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');
const topBar = document.getElementById('top-bar');

window.addEventListener('scroll', () => {
    let current = "";
    if (window.scrollY > 50) topBar.classList.add('scrolled'); else topBar.classList.remove('scrolled');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 250)) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});

// INTERSECTION OBSERVER FOR REVEALS (Including Staggered Modules)
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.15 });

sections.forEach(s => revealObs.observe(s));
document.querySelectorAll('.narrative-module').forEach(m => revealObs.observe(m));

// TILT ACCELERATION
function initTilt() {
  document.querySelectorAll('.tilt-card').forEach(c => {
    c.addEventListener('mousemove', (e) => {
      const r = c.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = (y - r.height/2) / 15, ry = -(x - r.width/2) / 15;
      c.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    c.addEventListener('mouseleave', () => c.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
  });
}

// TRANSLATION ENGINE v2
const lb = document.getElementById('lang-switch'), ls = lb.querySelectorAll('span');
function update() {
  document.querySelectorAll('[data-i18n]').forEach(el => { 
    const k = el.getAttribute('data-i18n'); 
    if (translations[currentLang][k]) el.textContent = translations[currentLang][k]; 
  });
  const cv = document.getElementById('cv-link'); if (cv) cv.href = `./assets/Adrian_Wzorek_CV_${currentLang}.pdf`;
  document.documentElement.lang = currentLang;
}

lb.addEventListener('click', () => { 
  currentLang = currentLang === 'pl' ? 'en' : 'pl'; 
  ls[0].classList.toggle('active'); ls[1].classList.toggle('active'); 
  update(); 
});

// INITIALIZE
update(); initTilt(); type();
document.addEventListener('mousemove', e => { 
  document.documentElement.style.setProperty('--mouse-x', (e.clientX / window.innerWidth) * 100 + '%'); 
  document.documentElement.style.setProperty('--mouse-y', (e.innerHeight / window.innerHeight) * 100 + '%'); 
});
