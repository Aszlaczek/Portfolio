export interface Project {
  slug: string;
  title: { pl: string; en: string };
  description: { pl: string; en: string };
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  image: string;
  problem: { pl: string; en: string };
  role: { pl: string; en: string };
  process: { pl: string; en: string };
  solution: { pl: string; en: string };
  result: { pl: string; en: string };
}

export const projects: Project[] = [
  {
    slug: 'memory-game',
    title: { pl: 'Gra w Memory', en: 'Memory Game' },
    description: {
      pl: 'Klasyczna gra memory z nowoczesnym interfejsem. Użytkownik odkrywa pary kart, śledzi czas i liczbę ruchów.',
      en: 'Classic memory game with a modern interface. User reveals card pairs, tracks time and moves.'
    },
    stack: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    liveUrl: 'https://memory-game-tan-five.vercel.app',
    repoUrl: 'https://github.com/aszlaczek/memory-game',
    image: '/portfolio/assets/projects/memory-game.webp',
    problem: {
      pl: 'Stworzenie angażującej gry logicznej działającej w przeglądarce bez backendu, z responsywnym interfejsem.',
      en: 'Create an engaging logic game running in browser without backend, with responsive interface.'
    },
    role: {
      pl: 'Full Stack Developer — projekt, implementacja, wdrożenie.',
      en: 'Full Stack Developer — design, implementation, deployment.'
    },
    process: {
      pl: 'Zaprojektowano stan gry (plansza, ruchy, timer), zaimplementowano logikę sprawdzania par, dodano animacje odwracania kart i ekran końcowy z wynikami.',
      en: 'Designed game state (board, moves, timer), implemented pair-matching logic, added card flip animations and results screen.'
    },
    solution: {
      pl: 'Aplikacja React + TypeScript z CSS Modules. Stan zarządzany przez useState/useEffect. Wdrożona na Vercel.',
      en: 'React + TypeScript app with CSS Modules. State managed via useState/useEffect. Deployed on Vercel.'
    },
    result: {
      pl: 'Działająca gra z płynnymi animacjami, responsywna na mobile i desktop. Kod open source na GitHub.',
      en: 'Working game with smooth animations, responsive on mobile and desktop. Open source code on GitHub.'
    }
  },
  {
    slug: 'color-picker',
    title: { pl: 'Translator Kolorów', en: 'Color Translator' },
    description: {
      pl: 'Narzędzie do konwersji kolorów między formatami HEX, RGB, HSL i CMYK z podglądem na żywo.',
      en: 'Tool for converting colors between HEX, RGB, HSL and CMYK formats with live preview.'
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://colorchecker-omega.vercel.app/',
    repoUrl: 'https://github.com/aszlaczek/color-picker',
    image: '/portfolio/assets/projects/color-picker.webp',
    problem: {
      pl: 'Projektanci i deweloperzy potrzebują szybkiego narzędzia do konwersji formatów kolorów bez instalowania dodatkowego oprogramowania.',
      en: 'Designers and developers need a quick tool for color format conversion without installing extra software.'
    },
    role: {
      pl: 'Full Stack Developer — architektura, UI, logika konwersji.',
      en: 'Full Stack Developer — architecture, UI, conversion logic.'
    },
    process: {
      pl: 'Zaimplementowano algorytmy konwersji między przestrzeniami barwniczymi, dodano kopiowanie do schowka, historię ostatnich kolorów i tryb ciemny/jasny.',
      en: 'Implemented conversion algorithms between color spaces, added copy to clipboard, recent colors history, and dark/light mode.'
    },
    solution: {
      pl: 'React + TypeScript + Tailwind CSS. Logika matematyczna konwersji w czystych funkcjach. Wdrożenie na Vercel.',
      en: 'React + TypeScript + Tailwind CSS. Pure conversion functions. Deployed on Vercel.'
    },
    result: {
      pl: 'Narzędzie obsługuje 4 formaty kolorów, ma historię 10 ostatnich, działa offline (PWA ready).',
      en: 'Tool supports 4 color formats, has 10-item history, works offline (PWA ready).'
    }
  },
  {
    slug: 'counter-apk',
    title: { pl: 'Monitorowanie Czasu', en: 'Time Tracker' },
    description: {
      pl: 'Aplikacja do śledzenia czasu pracy z kategoriami, raportami i eksportem danych.',
      en: 'Time tracking app with categories, reports and data export.'
    },
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://counter-psi-blush.vercel.app/',
    repoUrl: 'https://github.com/aszlaczek/counter-apk',
    image: '/portfolio/assets/projects/counter-apk.webp',
    problem: {
      pl: 'Potrzeba prostego narzędzia do monitorowania czasu poświęcanego na zadania z możliwością kategoryzacji i eksportu.',
      en: 'Need for a simple tool to track time spent on tasks with categorization and export capability.'
    },
    role: {
      pl: 'Full Stack Developer — backend API, baza danych, frontend, konteneryzacja.',
      en: 'Full Stack Developer — backend API, database, frontend, containerization.'
    },
    process: {
      pl: 'Zaprojektowano schemat bazy danych (użytkowniki, projekty, wpisy czasu), zbudowano REST API w Express, frontend w React z kontekstem autentykacji, zapakowano w Docker.',
      en: 'Designed DB schema (users, projects, time entries), built REST API in Express, React frontend with auth context, containerized with Docker.'
    },
    solution: {
      pl: 'Full-stack: React/TypeScript frontend, Express/Node.js backend, PostgreSQL, Docker Compose. Wdrożenie frontend na Vercel, backend gotowy do wdrożenia na VPS/Cloud.',
      en: 'Full-stack: React/TS frontend, Express/Node.js backend, PostgreSQL, Docker Compose. Frontend on Vercel, backend ready for VPS/Cloud.'
    },
    result: {
      pl: 'Aplikacja śledzi czas z sekundową precyzją, generuje raporty CSV/PDF, obsługuje wiele użytkowników.',
      en: 'App tracks time with second precision, generates CSV/PDF reports, supports multiple users.'
    }
  },
  {
    slug: 'dictionary-ai',
    title: { pl: 'Słownik z AI', en: 'AI Dictionary' },
    description: {
      pl: 'Inteligentny słownik z definicjami generowanymi przez AI, tłumaczeniami i przykładami użycia.',
      en: 'Smart dictionary with AI-generated definitions, translations and usage examples.'
    },
    stack: ['React', 'TypeScript', 'Next.js', 'OpenAI API', 'Vercel AI SDK', 'Tailwind CSS'],
    liveUrl: 'https://dictionary-nu-ten.vercel.app/',
    repoUrl: 'https://github.com/aszlaczek/dictionary-ai',
    image: '/portfolio/assets/projects/dictionary-ai.webp',
    problem: {
      pl: 'Tradycyjne słowniki często nie mają kontekstowych przykładów lub nowoczesnych definicji. AI może generować dynamiczne, kontekstowe wyjaśnienia.',
      en: 'Traditional dictionaries often lack contextual examples or modern definitions. AI can generate dynamic, contextual explanations.'
    },
    role: {
      pl: 'Full Stack Developer — integracja z OpenAI, streaming odpowiedzi, UX.',
      en: 'Full Stack Developer — OpenAI integration, response streaming, UX.'
    },
    process: {
      pl: 'Wykorzystano Vercel AI SDK do streamowania odpowiedzi z OpenAI GPT. Zbudowano interfejs z autouzupełnianiem, historią wyszukiwań i trybem offline (cache).',
      en: 'Used Vercel AI SDK for streaming OpenAI GPT responses. Built interface with autocomplete, search history, and offline mode (cache).'
    },
    solution: {
      pl: 'Next.js 14 (App Router) + TypeScript + Tailwind + Vercel AI SDK. Edge functions dla szybkiego streamowania. Wdrożenie na Vercel.',
      en: 'Next.js 14 (App Router) + TypeScript + Tailwind + Vercel AI SDK. Edge functions for fast streaming. Deployed on Vercel.'
    },
    result: {
      pl: 'Słownik generuje definicje w <2s, obsługuje 10+ języków, cacheuje wyniki dla szybkości i oszczędności tokenów.',
      en: 'Dictionary generates definitions in <2s, supports 10+ languages, caches results for speed and token savings.'
    }
  }
];