---
name: portfolio-redesign
description: >
  Użyj tego skilla, gdy zadaniem jest odświeżenie / redesign portfolio
  internetowego Adriana Wzorka (https://aszlaczek.github.io/Portfolio/),
  zbudowanego jako statyczna strona HTML/CSS/JS hostowana na GitHub Pages.
  Skill obejmuje: (1) zgodność treści ze źródłem prawdy (CV), (2) nowoczesny,
  przyjazny dla oka redesign wizualny, (3) poprawę struktury, dostępności
  i wydajności. Wywołaj ten skill przy każdej pracy nad plikami w repo
  aszlaczek/Portfolio lub przy generowaniu nowej wersji tej strony.
---

# Cel

Przeprowadzić kompletny redesign portfolio Adriana Wzorka tak, aby:

1. Treść była w 100% zgodna z jego CV (jedno źródło prawdy — patrz sekcja "Źródło prawdy").
2. Warstwa wizualna była nowoczesna, spójna, przyjazna dla oka, dostępna i responsywna.
3. Strona realnie sprzedawała jego mocne strony (projekt automatyzacji w pracy, wzrost ruchu o 25%), a nie tylko listę logo technologii.

Agent NIE powinien zaczynać od zmiany kolorów, zanim nie zamknie sekcji "Krok 0 — zgodność treści".

---

# Źródło prawdy: dane o użytkowniku

Zawsze zgodne z `/assets/Adrian_Wzorek_CV_en.pdf`. Jeśli treść na
stronie się z tym rozjeżdża — wygrywa CV, chyba że użytkownik jawnie potwierdzi,
że dana informacja na stronie jest nowsza / prawdziwsza (np. rzeczywiście zna
Django i SQLite) — wtedy trzeba zaktualizować **oba** dokumenty, nie tylko jeden.

**Stanowisko:** Full Stack Web Developer (NIE "Junior" / "Młodszy programista" —
to sprzeczne z CV i zaniża jego pozycję).

**Doświadczenie zawodowe (musi być widoczną sekcją na stronie, obecnie jej brak):**

- IT Specialist, Urząd Miejski w Lidzbarku Warmińskim (wrzesień 2025 – obecnie/
  wrzesień 2026 wg CV — **zweryfikuj z użytkownikiem tę datę końcową, bo wygląda
  na przyszłą/błędną**). Kluczowe osiągnięcie: zaprojektował i wdrożył aplikację
  w TypeScript automatyzującą konwersję czasu urlopów z minut na godziny +
  eksport do .xlsx. Pełny cykl: analiza potrzeb → design → kod → wdrożenie produkcyjne.
- Website Administrator, homideko.pl (czerwiec–listopad 2024). PrestaShop,
  redesign architektury strony, +25% ruchu.

**Wykształcenie:**

- Magister, Projektowanie Systemów IT i Sieci Komputerowych, UWM, 2025–2026
- Inżynier, Inżynieria Systemów IT, UWM, 2021–2025

**Języki programowania (wg CV):** TypeScript, JavaScript, HTML, CSS, Python, PHP,
MySQL, PostgreSQL

**Technologie (wg CV):** React, Next.js, Node.js, MUI, Bootstrap, DRF, FastAPI,
CMS (PrestaShop, WordPress), Git, GitHub

**ROZSTRZYGNIĘTE przez użytkownika — zasada twarda: lista umiejętności technicznych
= dokładnie to, co jest w CV, nic więcej, nic mniej.** Nie pytaj o to ponownie,
po prostu wykonaj:

- **Usuń** ze strony: Django, SQLite (nie występują w CV)
- **Dodaj** do strony (są w CV, brakuje ich na stronie): PHP, HTML, CSS, MUI,
  Bootstrap, DRF, FastAPI, CMS (PrestaShop, WordPress)
- **Zostają bez zmian:** TypeScript, JavaScript, Python, MySQL, PostgreSQL,
  React, Next.js, Node.js, Git/GitHub

**Data zakończenia pracy w Urzędzie Miejskim (wrzesień 2026) jest ZAMIERZONA
(planowane zakończenie) — nie zmieniać, nie traktować jako błąd.**

**Umiejętności miękkie (ujednolicona lista, suma CV + strony, bez duplikatów):**
Problem Solving, Praca zespołowa, Skuteczna komunikacja, Umiejętności
prezentacyjne, Design Thinking, Samodzielność i motywacja, Zarządzanie czasem,
Elastyczność, Krytyczne myślenie, Kreatywność, MS Office, Prawo jazdy kat. B.

**Języki obce:** Polski (natywny), Angielski (B2).

**Linki:** GitHub (github.com/aszlaczek), LinkedIn (linkedin.com/in/adrian-wzorek-902572309), homideko.pl.

**Projekty (już na stronie, zachować):** memory-game, color-picker, counter-apk,
search-bar (słownik AI) — każdy z linkiem do wersji live na Vercel.

---

# Krok 0 — Audyt zgodności treści

1. Wypisz każdą różnicę między aktualną treścią strony a listą wyżej.
2. Umiejętności techniczne: wykonaj wprost decyzję użytkownika (usuń
   Django/SQLite, dodaj PHP/HTML/CSS/MUI/Bootstrap/DRF/FastAPI/CMS) — to już
   rozstrzygnięte, agent nie pyta o to ponownie.
3. Zaktualizuj treść PRZED zmianami wizualnymi.
4. Dodaj brakującą sekcję "Doświadczenie" / "Experience" z dwoma stanowiskami
   opisanymi wyżej, w formie zgodnej resztą strony (karty/timeline).

---

# Kierunek wizualny — "nowoczesny i przyjazny dla oka"

## Zasady ogólne

- Jedna spójna paleta z jasnym i ciemnym motywem (przełącznik dark/light —
  standard w nowoczesnych portfolio deweloperskich, tanie w implementacji przy
  CSS variables).
- Duży, oddychający whitespace zamiast gęstego upakowania treści.
- Maks. 2 rodziny fontów: jeden display/nagłówkowy o charakterze (np. Space
  Grotesk, Sora, Clash Display) + jeden czytelny tekstowy (Inter, Manrope).
- Spójny system odstępów oparty o skalę 4/8px (np. 8, 16, 24, 32, 48, 64, 96px).
- Ograniczona paleta akcentu: 1 kolor bazowy neutralny (tło/tekst) + 1 kolor
  akcentu (CTA, linki, hover) + max 1 kolor dodatkowy do wykresów/ikon.
- Subtelne animacje (fade-in przy scrollu, hover na kartach projektów) —
  `prefers-reduced-motion` musi być respektowane.

## Konkretna propozycja palety (do zaakceptowania/zmiany przez użytkownika)

- Tło jasne: `#FAFAF9` / tekst: `#1A1A1E`
- Tło ciemne: `#0F1115` / tekst: `#F5F5F4`
- Akcent: `#4F46E5` (indygo) lub `#22C55E` (zielony, nawiązanie do karate/energii
  z sekcji "O mnie") — do wyboru z użytkownikiem, nie narzucać.
- Neutralne szarości do obramowań/kart: `#E4E4E7` (jasny), `#27272A` (ciemny)

## Typografia

- H1 (hero): 48–64px, waga 700
- H2 (sekcje): 32–40px, waga 600
- Body: 16–18px, line-height 1.6
- Zachować hierarchię — obecna strona ma płaskie nagłówki bez wyraźnej skali

## Layout i sekcje (kolejność docelowa)

1. **Hero** — zdjęcie/avatar, imię, stanowisko (Full Stack Web Developer), krótki
   pitch, 2 CTA: "Zobacz projekty" + "Pobierz CV"
2. **O mnie** — połączyć obecne dwa bloki tekstu ("Kim jestem" + "Co mnie
   napędza" + "O mnie"/karate) w jedną spójną narrację, bez powtórzeń
3. **Doświadczenie** — NOWA sekcja, timeline lub karty (patrz Krok 0)
4. **Projekty** — karty z podglądem (screenshot/gif), stackiem technologicznym,
   linkiem live + do repo GitHub (obecnie brak linków do repo, tylko do
   wdrożenia — warto dodać)
5. **Umiejętności** — pogrupowane: Języki programowania / Frameworki i
   technologie / Narzędzia / Umiejętności miękkie — zamiast jednej płaskiej
   karuzeli ikon
6. **Edukacja** — brakuje na stronie, dodać krótko
7. **Kontakt** — zachować formularz, dodać link LinkedIn obok GitHub

## Dostępność i UX (nie do pominięcia)

- Kontrast tekst/tło min. WCAG AA (4.5:1)
- Wszystkie obrazy/ikony z atrybutem `alt`
- Nawigacja dostępna z klawiatury, widoczny focus state
- Strona musi działać sensownie na 360px szerokości (mobile-first check)
- `lang="pl"` + wersja `lang="en"` (strona ma już `index_en.html` — dopilnować
  parytetu treści między wersją PL i EN po redesignie)

## Wydajność

- Kompresja/`.webp` dla ilustracji (obecne pliki PNG z długimi nazwami sugerują
  brak optymalizacji)
- `loading="lazy"` dla obrazów poza pierwszym ekranem
- Sprawdzić Lighthouse (Performance/Accessibility/SEO) przed i po redesignie,
  cel: 90+ w każdej kategorii

---

# Checklista końcowa przed wdrożeniem

- [ ] Stanowisko na stronie = "Full Stack Web Developer" wszędzie (PL i EN)
- [ ] Sekcja Doświadczenie dodana i zgodna z CV
- [ ] Django i SQLite usunięte ze strony
- [ ] PHP, HTML, CSS, MUI, Bootstrap, DRF, FastAPI, CMS dodane do strony
- [ ] Umiejętności miękkie ujednolicone między CV a stroną
- [ ] Dark/light mode działa i zapisuje preferencję (bez localStorage jeśli w
      artifaccie Claude.ai — w realnym repo GitHub Pages localStorage jest OK)
- [ ] Kontrast WCAG AA sprawdzony
- [ ] Wersje PL/EN spójne treściowo
- [ ] Lighthouse 90+ (Performance, Accessibility, Best Practices, SEO)
- [ ] Linki do repozytoriów projektów dodane (nie tylko live-demo)
