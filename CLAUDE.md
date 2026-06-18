# El Culto Cocina — Website

Landing page / website for **El Culto Cocina**, a Mexican author-cuisine restaurant (*cocina de autor*) in Envigado, Antioquia, Colombia (Medellín metro). Founded 2021.

**Tagline:** *"Sabores que despiertan memorias"* · **Bio line:** *Cocina de Autor con sabor a México*

> The complete, authoritative brand reference (story, voice, full menu, hours, SEO keywords, photography sources) lives in [docs/PROJECT-BRIEF.md](docs/PROJECT-BRIEF.md). The original brand materials are in [Brand_assets/](Brand_assets/) — read the logo, style-guide PNG, and `El Culto Cocina - Brand Brief.docx` before making design decisions. **Treat those as the source of truth; this file is the working summary.**

---

## What We're Building

A fast, beautiful, **Spanish-first** (English optional) marketing site whose primary jobs are:
1. Make people hungry — lead with vibrant, close-up food photography.
2. Drive **orders via WhatsApp** (`https://wa.me/573233196133`) — the #1 conversion goal.
3. Answer the restaurant's most-asked questions fast: **menu, hours, location**.

Most traffic arrives from the **Instagram link in bio** → the site must be flawless on mobile.

### Site structure (sections / routes)
| Section | Purpose |
|---------|---------|
| **Inicio / Hero** | Logo on cream or over food photo; tagline; CTAs: *Ver menú* · *Pedir por WhatsApp* |
| **Menú** | Full menu by section with the spice-level legend, prices in COP; link to flipbook fallback |
| **Nosotros / Filosofía** | Brand story + chef's manifesto (ES/EN), signed by `@zuluaga_chef` |
| **Galería** | Food + venue photography (patio, murals, papel picado) |
| **Visítanos / Contacto** | Address + Google Map, hours, WhatsApp button, Instagram |
| **Pedir / Domicilios** | Persistent WhatsApp ordering CTA |

A single long-scroll landing page with anchor navigation is the recommended default; the menu can graduate to its own route if it grows.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript (strict). Static-first (SSG/ISR) for SEO and Core Web Vitals.
- **Styling:** Tailwind CSS — mobile-first. Brand tokens defined in the theme (see below).
- **Animation:** Motion (Framer Motion) — tasteful scroll reveals, hover states, hero motion. Respect `prefers-reduced-motion`.
- **Images:** `next/image` (WebP/AVIF, lazy, correct `sizes`). Food photos are the star — never ship them unoptimized.
- **Fonts:** `next/font` (self-hosted, no layout shift).
- **Deploy target:** Vercel (assume this unless told otherwise).
- **Forms/ordering:** No backend needed for v1 — WhatsApp deep links + `tel:` + Instagram. Add a backend only if a real reservation/order form is requested.

Keep dependencies lean. This is a marketing site, not an app — every package is weight and attack surface.

---

## Brand Design System

> These are the rules. Match the style guide exactly — **elegant + minimal core, festive Mexican accents.** Crafted, never kitschy.

### Color palette (authoritative hex from the brand brief)
| Token | Name | HEX | Usage |
|-------|------|-----|-------|
| `lino` | Lino (Cream) | `#F0E6DC` | Primary background / canvas |
| `tinta` | Tinta (Ink) | `#1C1B19` | Text, logo, footers |
| `verde` | Verde Culto | `#0E6E2E` | Primary accent, headings, buttons |
| `rojo` | Rojo Chile | `#9A2B1E` | CTAs, highlights, prices |
| `barro` | Barro (Terracotta) | `#C2702F` | Secondary accent / warmth |
| `maiz` | Maíz (Gold) | `#EFC25E` | Highlights, dividers, hover |

Cream + ink is the backbone; green/red/terracotta/gold are **accents from the food and papel picado** — use them with restraint. The persistent "Pedir por WhatsApp" button should be high-contrast: **Rojo Chile** or **Verde Culto**.

### Typography
- **Display / headings:** Playfair Display (high-contrast elegant serif; Cinzel for the wordmark feel, Lora as a versatile alt).
- **Body / UI:** Poppins (clean friendly sans; Montserrat acceptable alt) — menus, captions, buttons.
- All-caps + generous letter-spacing for short serif headers (echoing the logo wordmark).

### Suggested Tailwind theme tokens
```js
// tailwind.config — theme.extend
colors: {
  lino:  '#F0E6DC',
  tinta: '#1C1B19',
  verde: '#0E6E2E',
  rojo:  '#9A2B1E',
  barro: '#C2702F',
  maiz:  '#EFC25E',
},
fontFamily: {
  display: ['var(--font-playfair)', 'Georgia', 'serif'],
  body:    ['var(--font-poppins)', 'system-ui', 'sans-serif'],
},
```

### Logo & motifs
- Logo: minimal line-art tomato in a thin circle, "EST 2021", serif wordmark "EL CULTO" + spaced "COCINA" on cream. Keep generous clear space. Dark-ink version on light backgrounds; reversed cream version over dark/photographic backgrounds.
- Motifs to use sparingly: **line-art tomato** icon, **papel picado** banners (in the 4 accent colors — see the style-guide header), chiles, elegant serif headers with small decorative borders.
- Source logo: `Brand_assets/Culto_Brand.png`. Rebuild as transparent PNG/SVG for web before using.

### Spice-level system (`Nivel de picante`)
Render as a small legend + per-dish chili icons on the menu:
- 🌶️ **Picante fuerte** — Strong / hot (Rojo Chile)
- 🌶️ **Picante medio** — Medium (Barro)
- 🌶️ **Ligeramente picante** — Mild (Verde Culto)
- 🌶️ **Mermelada dulce** — Sweet, house jam (Maíz)

---

## Brand Voice (for all copy)

Warm · Sensory · Authentic — a little poetic. Spanish primary; light, confident bilingual touch for reach.
- **Do:** lead with feeling and the senses (*sabores, memorias, emoción, reconfortar*); celebrate Mexican origin, color and craft (*chiles, recetas auténticas, "de la casa"*); use the language of care and ritual (*detener el tiempo, ser cuidados*); keep sentences inviting and unhurried.
- **Don't:** sound corporate, hype-y or discount-driven; over-explain or use jargon; go so minimal it turns cold and loses the festive warmth.
- **Ready-to-use lines:** *"Sabores que despiertan memorias." · "Un culto a la comida con origen mexicano." · "Una fiesta de sabores que deleitan todos tus sentidos."*

---

## Key Facts (for header, footer, metadata, schema)

- **Name:** El Culto Cocina (styled EL CULTO COCINA)
- **Location:** Envigado, Antioquia, Colombia · **Address (confirmed):** Calle 46 Sur #46A-1, Zona 8, Envigado (postal 055421). JSON-LD `geo` is geocoded/approximate — replace with the exact Google Business Profile pin coordinates when available.
- **Hours:** Sun–Thu 2:00 PM–10:00 PM · Fri–Sat 2:00 PM–10:45 PM
- **WhatsApp / orders:** +57 323 319 6133 → `https://wa.me/573233196133`
- **Instagram:** [@culto_cocina](https://instagram.com/culto_cocina) · **Chef/Founder:** [@zuluaga_chef](https://instagram.com/zuluaga_chef)
- **Digital menu (flipbook):** https://heyzine.com/flip-book/a399c34ab4.html
- **Currency:** Colombian Peso (COP) — display as `$9.500` (dot thousands separator)

**Confirmed by owner (2026-06):** street address (Calle 46 Sur #46A-1, Zona 8), WhatsApp line (+57 323 319 6133), and Hamburguesa Doble Carne price ($45.000). **Still to do:** capture the exact Google Maps pin coordinates from the Google Business Profile, and confirm per-dish spice levels if chili icons are wanted. Do not invent details — if unknown, flag it.

---

## SEO Priorities (local, Spanish)

Restaurant = **local SEO**. Must-haves:
- `Restaurant` JSON-LD schema (name, address, geo, hours via `openingHoursSpecification`, `servesCuisine: Mexican`, `priceRange`, `menu`, `telephone`, `sameAs` → Instagram). Add `Menu`/`MenuItem` schema for the menu.
- Unique `<title>` + meta description per section/route; Open Graph + Twitter cards with appetizing food imagery.
- Semantic HTML, single H1, descriptive alt text on every food photo, `hreflang` if bilingual.
- Target keywords: *restaurante mexicano Envigado · comida mexicana Envigado / Medellín · tacos en Envigado · cocina de autor mexicana Medellín · domicilios comida mexicana Envigado.*
- Encourage a linked **Google Business Profile** (huge for restaurant discovery).

Run the **seo-audit** skill on every meaningful content change.

---

## How Work Gets Done — Two-Phase Workflow

**Phase 1 — GSD builds it.** All planning, research, phased execution and building flow through the **Get Shit Done** framework and its agents (`gsd-roadmapper`, `gsd-planner`, `gsd-executor`, `gsd-ui-researcher`, etc.). Start a new build with the GSD commands (see [START-HERE.md](START-HERE.md)). GSD handles roadmapping, phase planning, atomic commits, and state.

**Phase 2 — Subagents verify it.** Once GSD finishes a phase, the verification pipeline below runs to review, audit, and QA the output. **Nothing is done until the relevant agents sign off.**

This project also ships with **Superpowers** (spec-driven planning, TDD, systematic debugging, code review) and design skills: **frontend-design**, **ui-ux-pro-max** (styles, palettes, font pairings — consult it for layout/type decisions), **motion**, **theme-factory**, **seo-audit**, **webapp-testing**, **canvas-design**, **fal-ai** (generate food/atmosphere imagery if real photos are missing), and **web-artifacts-builder**.

---

## Automatic Verification Pipeline

After GSD completes any phase or task, the following verification agents run **automatically** — no manual invocation needed. Nothing is considered done until all relevant agents have signed off.

### Run Order (most critical first)

| Order | Agent | What It Checks | When It Runs |
|-------|-------|----------------|--------------|
| 1 | **security-auditor** | Form/WhatsApp link handling, no leaked keys, dependency CVEs, security headers/CSP, no XSS in any dynamic content | Every change |
| 2 | **code-reviewer** | TypeScript/React/Next.js quality, component structure, dead code, naming, idiomatic patterns | Every change |
| 3 | **error-detective** | Edge cases, broken links, empty/error states, missing alt text, broken WhatsApp/`tel:`/map links, hydration issues | Every change |
| 4 | **performance-engineer** | Core Web Vitals (LCP < 2.5s, CLS < 0.1), image optimization, bundle size, font loading, no render-blocking | Every change |
| 5 | **accessibility-tester** | WCAG 2.1 AA — contrast on cream/accent palette, keyboard nav, screen-reader labels, focus states, reduced-motion | Every change |
| 6 | **test-automator** | Generate/validate tests for changed code; check coverage of interactive elements | Every change |
| 7 | **gsd-verifier** | Goal-backward check that the phase output meets its spec | Every change |
| 8 | **seo-specialist** + **seo-audit** skill | Meta tags, JSON-LD (Restaurant/Menu), headings, local-SEO keywords, OG/Twitter, sitemap/robots | Content or structural changes |
| 9 | **gsd-ui-checker** / **gsd-ui-auditor** | Brand fidelity (palette, type, spacing, motifs), visual polish across the 6 UI quality dimensions, responsive layout | UI changes |
| 10 | **ux-researcher** | Conversion clarity — is "Pedir por WhatsApp" obvious? Are hours/location instantly findable? | UI / content changes |
| 11 | **architect-reviewer** | Component architecture, routing, data flow, scalability decisions | Structural changes |
| 12 | **gsd-integration-checker** | End-to-end flows: WhatsApp ordering, map embed, menu rendering, language toggle | When integrations touched |
| Last | **debugger** | Investigates and fixes anything the other agents flag | When issues are flagged |

### Pipeline Rules
- Agents 1–7 run on **every** change — no exceptions.
- Agents 8–12 run based on change type (content, UI, structural, integration).
- **debugger** runs last, only when other agents flag issues that need investigation.
- If any agent flags a **critical** issue, GSD must fix it before proceeding.
- The pipeline runs **again** after fixes to verify resolution.

---

## Project Conventions

- **Read before you write.** Check existing code and the brand assets before changing anything.
- **Mobile-first**, always. Test at 375px before anything else.
- **Accessible contrast** is mandatory — verify text on `lino`/accent backgrounds meets WCAG AA. Light text (`lino`) on `tinta`/`verde`/`rojo`; dark text (`tinta`) on `lino`/`maiz`.
- **Never invent restaurant facts** (prices, address, hours, dishes). Pull from [docs/PROJECT-BRIEF.md](docs/PROJECT-BRIEF.md); if missing, flag it for the owner to confirm.
- Spanish copy is primary and must read naturally — no machine-translated stiffness.
- Optimize every image. A slow, heavy restaurant site loses orders.
- Commit style: concise, imperative; branch prefixes `feature/`, `fix/`, `chore/`. Only commit/push when asked.

## Code Style
- TypeScript strict; prefer `interface` for object shapes; avoid `any` (use `unknown`/generics).
- Functional components + hooks; small, composable, co-locate styles/types/tests.
- `camelCase` vars/functions, `PascalCase` components, `kebab-case` utility files.
- No comments for self-explanatory code.
