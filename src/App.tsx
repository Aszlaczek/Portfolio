import { useState, useEffect, useRef } from "react";

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const SKILLS = {
  languages: [
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
    { name: "Python", icon: "PY" },
    { name: "PHP", icon: "PH" },
    { name: "HTML", icon: "H5" },
    { name: "CSS", icon: "C3" },
    { name: "MySQL", icon: "My" },
    { name: "PostgreSQL", icon: "Pg" },
  ],
  frameworks: [
    "React",
    "Next.js",
    "Node.js",
    "Django REST Framework",
    "FastAPI",
    "MUI",
    "Bootstrap",
  ],
  tools: ["Git", "GitHub", "WordPress", "PrestaShop", "CMS"],
  soft: [
    "Problem Solving",
    "Teamwork",
    "Effective Communication",
    "Presentation Skills",
    "Design Thinking",
    "Self-motivated",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Creativity",
  ],
};

const EXPERIENCE = [
  {
    title: "IT Specialist",
    company: "Urząd Miejski w Lidzbarku Warmińskim",
    period: "Sep 2025 - Sep 2026",
    highlights: [
      "Designed and deployed a TypeScript automation app for converting leave time from minutes to hours with .xlsx export",
      "Full development cycle: requirements analysis, design, coding, production deployment",
    ],
  },
  {
    title: "Website Administrator",
    company: "homideko.pl",
    period: "Jun 2024 - Nov 2024",
    highlights: [
      "PrestaShop platform management and site architecture redesign",
      "Achieved +25% organic traffic increase through UX improvements",
    ],
  },
];

const PROJECTS = [
  {
    name: "Memory Game",
    url: "https://memory-game-tan-five.vercel.app",
    stack: "React, TypeScript",
  },
  {
    name: "Color Picker",
    url: "https://colorchecker-omega.vercel.app/",
    stack: "React, TypeScript",
  },
  {
    name: "Counter Application",
    url: "https://counter-psi-blush.vercel.app/",
    stack: "React, TypeScript",
  },
  {
    name: "Dictionary by using AI",
    url: "https://dictionary-nu-ten.vercel.app/",
    stack: "React, TypeScript, AI API",
  },
];

export default function App() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-bg-light text-text-light dark:bg-bg-dark dark:text-text-dark transition-colors">
        <Navbar dark={dark} setDark={setDark} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <main className="max-w-6xl mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Navbar({
  dark,
  setDark,
  mobileOpen,
  setMobileOpen,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <nav className="sticky top-0 z-50 bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-bold font-[family-name:var(--font-heading)] text-accent">
          AW
        </a>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-border-light dark:hover:bg-border-dark transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-border-light dark:hover:bg-border-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border-light dark:border-border-dark px-6 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button onClick={() => setDark(!dark)} className="py-2 text-sm font-medium hover:text-accent">
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <FadeIn>
          <div className="space-y-6">
            <p className="text-accent font-semibold tracking-wide uppercase text-sm">Full Stack Web Developer</p>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight">
              Adrian Wzorek
            </h1>
            <p className="text-lg text-text-light/70 dark:text-text-dark/70 leading-relaxed max-w-lg">
              Building modern, efficient web applications with TypeScript, React, and Python.
              Passionate about clean code, automation, and continuous learning.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-border-light dark:border-border-dark font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/10 flex items-center justify-center">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-bold text-accent font-[family-name:var(--font-heading)]">
                  AW
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-12 text-center">
          About Me
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80">
              Movement has always been my passion — in every form. For over five years, I've been a karate instructor,
              sharing my knowledge and discipline with students of all ages.
            </p>
            <p className="text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80">
              As a sports camp mentor, I've worked with diverse groups, guiding and motivating people in various
              environments. These experiences shaped not only my teamwork skills but also my ability to communicate
              clearly and effectively.
            </p>
            <p className="text-lg leading-relaxed text-text-light/80 dark:text-text-dark/80">
              Whether in sports or web development, I believe that precision, adaptability, and strong leadership
              make all the difference.
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center">
              <span className="text-8xl">🥋</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-12 text-center">
          Experience
        </h2>
      </FadeIn>
      <div className="space-y-8">
        {EXPERIENCE.map((job, i) => (
          <FadeIn key={i}>
            <div className="p-6 md:p-8 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:border-accent/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-accent font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-text-light/50 dark:text-text-dark/50 mt-2 md:mt-0">{job.period}</span>
              </div>
              <ul className="space-y-2">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-text-light/70 dark:text-text-dark/70">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-12 text-center">
          Projects
        </h2>
      </FadeIn>
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <FadeIn key={i}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:border-accent/50 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
              <p className="text-sm text-text-light/50 dark:text-text-dark/50 mb-4">{project.stack}</p>
              <span className="text-accent text-sm font-medium">View Live →</span>
            </a>
          </FadeIn>
        ))}
      </div>
      <FadeIn className="mt-8 text-center">
        <a
          href="https://github.com/aszlaczek"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
        >
          <svg width="20" height="20" viewBox="0 0 640 640" fill="currentColor">
            <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
          </svg>
          More projects on GitHub
        </a>
      </FadeIn>
    </section>
  );
}

function SkillCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-12 text-center">
          Skills
        </h2>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FadeIn>
          <SkillCategory title="Languages">
            <div className="flex flex-wrap gap-2">
              {SKILLS.languages.map((s) => (
                <span
                  key={s.name}
                  className="px-3 py-1.5 text-sm rounded-lg bg-accent/10 text-accent font-medium"
                  title={s.name}
                >
                  {s.icon}
                </span>
              ))}
            </div>
          </SkillCategory>
        </FadeIn>
        <FadeIn>
          <SkillCategory title="Frameworks">
            <ul className="space-y-2">
              {SKILLS.frameworks.map((s) => (
                <li key={s} className="text-sm text-text-light/70 dark:text-text-dark/70 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </SkillCategory>
        </FadeIn>
        <FadeIn>
          <SkillCategory title="Tools & Platforms">
            <ul className="space-y-2">
              {SKILLS.tools.map((s) => (
                <li key={s} className="text-sm text-text-light/70 dark:text-text-dark/70 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </SkillCategory>
        </FadeIn>
        <FadeIn>
          <SkillCategory title="Soft Skills">
            <div className="flex flex-wrap gap-2">
              {SKILLS.soft.map((s) => (
                <span key={s} className="px-3 py-1.5 text-xs rounded-lg border border-border-light dark:border-border-dark">
                  {s}
                </span>
              ))}
            </div>
          </SkillCategory>
        </FadeIn>
      </div>
      <FadeIn className="mt-8">
        <div className="p-6 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-center">
          <p className="text-sm text-text-light/50 dark:text-text-dark/50">
            <span className="font-medium text-text-light dark:text-text-dark">Languages:</span> Polish (Native), English (B2)
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-12 text-center">
          Get in Touch
        </h2>
      </FadeIn>
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6 p-8 rounded-2xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark"
          >
            <input type="hidden" name="access_key" value="09fd9ecf-de99-4bde-9afe-f894041b1a22" />
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="context"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-light/50 dark:text-text-dark/50">
          Illustrations by{" "}
          <a href="https://www.pictographic.io/" className="hover:text-accent transition-colors">
            Pictographic
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/adrian-wzorek-902572309/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light/50 dark:text-text-dark/50 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 512 509.64" fill="currentColor">
              <rect width="512" height="509.64" rx="115.61" ry="115.61" />
              <path
                fill="currentColor"
                className="text-white"
                d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/aszlaczek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light/50 dark:text-text-dark/50 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 640 640" fill="currentColor">
              <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
