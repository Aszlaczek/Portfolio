export interface Experience {
  id: string;
  title: { pl: string; en: string };
  company: string;
  period: { pl: string; en: string };
  description: { pl: string; en: string };
  achievements: { pl: string; en: string }[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: { pl: string; en: string };
  field: { pl: string; en: string };
  institution: string;
  period: { pl: string; en: string };
  details?: { pl: string; en: string };
}

export const experiences: Experience[] = [
  {
    id: 'it-specialist',
    title: { pl: 'IT Specialist', en: 'IT Specialist' },
    company: 'Urząd Miejski w Lidzbarku Warmińskim',
    period: { pl: 'wrzesień 2025 — obecnie', en: 'September 2025 — Present' },
    description: {
      pl: 'Zaprojektowałem i wdrożyłem aplikację w TypeScript automatyzującą konwersję czasu urlopów z minut na godziny z eksportem do formatu .xlsx. Pełny cykl projektu: analiza potrzeb, design, implementacja, wdrożenie produkcyjne.',
      en: 'Designed and deployed a TypeScript application automating leave time conversion from minutes to hours with .xlsx export. Full project lifecycle: requirements analysis, design, implementation, production deployment.'
    },
    achievements: [
      { pl: 'Automatyzacja procesu ręcznego — oszczędność czasu pracowników HR', en: 'Automated manual process — HR staff time savings' },
      { pl: 'Pełny cykl rozwoju: od analizy po produkcję', en: 'Full development lifecycle: from analysis to production' },
      { pl: 'Stack: TypeScript, Node.js, ExcelJS', en: 'Stack: TypeScript, Node.js, ExcelJS' }
    ],
    technologies: ['TypeScript', 'Node.js', 'ExcelJS', 'Git']
  },
  {
    id: 'website-admin',
    title: { pl: 'Website Administrator', en: 'Website Administrator' },
    company: 'homideko.pl',
    period: { pl: 'czerwiec — listopad 2024', en: 'June — November 2024' },
    description: {
      pl: 'Administracja i redesign architektury sklepu internetowego opartego na PrestaShop. Wdrożone zmiany przyczyniły się do wzrostu ruchu na stronie o 25%.',
      en: 'Administration and architecture redesign of PrestaShop-based e-commerce store. Implemented changes contributed to 25% traffic increase.'
    },
    achievements: [
      { pl: 'Wzrost ruchu o 25% po redesignzie', en: '25% traffic increase after redesign' },
      { pl: 'Redesign architektury sklepu PrestaShop', en: 'PrestaShop store architecture redesign' },
      { pl: 'Optymalizacja wydajności i SEO', en: 'Performance and SEO optimization' }
    ],
    technologies: ['PrestaShop', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'SEO']
  }
];

export const education: Education[] = [
  {
    id: 'master',
    degree: { pl: 'Magister', en: 'Master of Science' },
    field: { pl: 'Projektowanie Systemów IT i Sieci Komputerowych', en: 'IT Systems and Computer Networks Design' },
    institution: 'Uniwersytet Warmińsko-Mazurski w Olsztynie',
    period: { pl: '2025–2026', en: '2025–2026' },
    details: { pl: 'Studia II stopnia', en: 'Second-cycle studies' }
  },
  {
    id: 'engineer',
    degree: { pl: 'Inżynier', en: 'Bachelor of Engineering' },
    field: { pl: 'Inżynieria Systemów IT', en: 'IT Systems Engineering' },
    institution: 'Uniwersytet Warmińsko-Mazurski w Olsztynie',
    period: { pl: '2021–2025', en: '2021–2025' },
    details: { pl: 'Studia I stopnia', en: 'First-cycle studies' }
  }
];

export const skills = {
  languages: [
    { pl: 'TypeScript', en: 'TypeScript' },
    { pl: 'JavaScript', en: 'JavaScript' },
    { pl: 'Python', en: 'Python' },
    { pl: 'PHP', en: 'PHP' },
    { pl: 'HTML', en: 'HTML' },
    { pl: 'CSS', en: 'CSS' },
    { pl: 'SQL (MySQL, PostgreSQL)', en: 'SQL (MySQL, PostgreSQL)' }
  ],
  frameworks: [
    { pl: 'React', en: 'React' },
    { pl: 'Next.js', en: 'Next.js' },
    { pl: 'Node.js', en: 'Node.js' },
    { pl: 'Express', en: 'Express' },
    { pl: 'MUI (Material UI)', en: 'MUI (Material UI)' },
    { pl: 'Bootstrap', en: 'Bootstrap' },
    { pl: 'Django REST Framework', en: 'Django REST Framework' },
    { pl: 'FastAPI', en: 'FastAPI' },
    { pl: 'CMS (PrestaShop, WordPress)', en: 'CMS (PrestaShop, WordPress)' }
  ],
  tools: [
    { pl: 'Git', en: 'Git' },
    { pl: 'GitHub', en: 'GitHub' },
    { pl: 'Docker', en: 'Docker' },
    { pl: 'Vercel', en: 'Vercel' },
    { pl: 'Vite', en: 'Vite' },
    { pl: 'Linux (CLI)', en: 'Linux (CLI)' }
  ],
  soft: [
    { pl: 'Rozwiązywanie problemów', en: 'Problem Solving' },
    { pl: 'Praca zespołowa', en: 'Teamwork' },
    { pl: 'Skuteczna komunikacja', en: 'Effective Communication' },
    { pl: 'Umiejętności prezentacyjne', en: 'Presentation Skills' },
    { pl: 'Design Thinking', en: 'Design Thinking' },
    { pl: 'Samodzielność i motywacja', en: 'Autonomy & Motivation' },
    { pl: 'Zarządzanie czasem', en: 'Time Management' },
    { pl: 'Elastyczność', en: 'Adaptability' },
    { pl: 'Krytyczne myślenie', en: 'Critical Thinking' },
    { pl: 'Kreatywność', en: 'Creativity' },
    { pl: 'MS Office', en: 'MS Office' },
    { pl: 'Prawo jazdy kat. B', en: 'Driving License Cat. B' }
  ],
  languages2: [
    { pl: 'Polski — natywny', en: 'Polish — Native' },
    { pl: 'Angielski — B2', en: 'English — B2' }
  ]
};