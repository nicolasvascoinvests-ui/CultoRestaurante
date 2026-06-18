# START HERE — El Culto Cocina Website

This folder is a **ready-to-build workspace** for the El Culto Cocina restaurant website. Open it in Claude Code and start working — everything you need is already installed.

---

## 1. Read these first
1. [CLAUDE.md](CLAUDE.md) — project rules, tech stack, design system, and the verification pipeline (loaded automatically).
2. [docs/PROJECT-BRIEF.md](docs/PROJECT-BRIEF.md) — the full brand, voice, design system, **and the complete menu** (source of truth).
3. [Brand_assets/](Brand_assets/) — the real logo, style guide, and brand brief. Look at the images before designing.

## 2. The stack
Next.js 15 (App Router) + TypeScript + Tailwind CSS + Motion, deployed to Vercel. Spanish-first, mobile-first, SEO-focused. The site's #1 job is driving **WhatsApp orders** (`https://wa.me/573233196133`).

## 3. How to build — GSD drives, subagents verify

This project runs on the **Get Shit Done (GSD)** framework (Phase 1) with a **subagent verification pipeline** (Phase 2). To begin:

```
/gsd:new-project
```
…then describe the goal, e.g. *"Build the El Culto Cocina single-page restaurant site per docs/PROJECT-BRIEF.md."* GSD will research, roadmap, plan phases, and execute with atomic commits.

Useful GSD commands (in `.claude/commands/gsd/`):
- `/gsd:new-project` — start a new project roadmap
- `/gsd:plan-phase` · `/gsd:execute-phase` · `/gsd:verify-work`
- `/gsd:ui-phase` · `/gsd:ui-review` — frontend-specific planning + visual review
- `/gsd:progress` · `/gsd:help`

After each phase, the **Automatic Verification Pipeline** in [CLAUDE.md](CLAUDE.md) runs (security → code → errors → performance → a11y → tests → verifier → SEO → UI → UX). Nothing is "done" until the relevant agents sign off.

## 4. What's installed

```
.claude/
├── skills/      10 skills — frontend-design, ui-ux-pro-max (styles/palettes/fonts),
│                motion, theme-factory, seo-audit, webapp-testing, canvas-design,
│                web-artifacts-builder, fal-ai, superpowers
├── agents/      39 subagents — all 15 GSD agents + frontend/UI, QA/security,
│                SEO, content, and TS/Next.js reviewer agents
├── commands/
│   ├── gsd/     37 GSD workflow commands
│   └── ecc/     9 cherry-picked commands (plan, tdd, code-review, verify, e2e, …)
└── contexts/    dev + review context profiles

frameworks/get-shit-done/   full GSD framework (templates, references, workflows, bin)
docs/PROJECT-BRIEF.md       brand + design system + full menu (source of truth)
Brand_assets/               logo, style guide, brand brief (provided by owner)
```

### Design skills worth invoking explicitly
- **ui-ux-pro-max** — searchable databases of 67 styles, 161 palettes, 57 font pairings, UX guidelines. Consult it when choosing layout, type scale, and section composition.
- **frontend-design** — generates distinctive, production-grade UI (avoids generic AI look).
- **motion** — tasteful scroll/hover animations (respect `prefers-reduced-motion`).
- **seo-audit** — run on every content change for local-SEO compliance.
- **fal-ai** — generate placeholder food/atmosphere imagery if real photos aren't ready.

## 5. Before launch — confirm with the owner
The brand brief lists details to verify (don't guess): exact **address** + Google Maps pin, current **WhatsApp** number, the **Hamburguesa Doble Carne** price, and any **menu/price** changes. See §10 of the brief.

---

**TL;DR:** Read CLAUDE.md + PROJECT-BRIEF.md → run `/gsd:new-project` → build the site → the verification pipeline checks it automatically.
