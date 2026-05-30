# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio for Sandeep Rawat (SAP Enterprise Architect / SAP AI Evangelist). Static React SPA, no backend, no router, no test suite.

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

There is no lint, typecheck, or test script defined in `package.json`. TypeScript is consumed via Vite/`@vitejs/plugin-react`; there is no `tsconfig.json` in the repo, so type errors won't fail the build — be deliberate about types.

## Architecture

The entire UI lives in a single file: [src/app/App.tsx](src/app/App.tsx). Treat it as the source of truth — there is no component library split, no `components/` directory, no routing.

Structure of `App.tsx`:
1. **Top of file: data constants** (`NAV_ITEMS`, `STATS`, `SERVICES`, `ROADMAP`, `SAP_MODULES`, `TECH_SKILLS`, `AI_ROADMAP`, `CERTIFICATIONS`, `ACHIEVEMENTS`, `PRODUCTS`, `CONTACT_ITEMS`, `STATUS_CONFIG`). Edit these to update site content — they drive the rendered sections.
2. **Small shared components** (`SkillBar`, `SectionLabel`, `Tag`) defined in the same file.
3. **`App` default export** — long JSX containing every section: Hero, Core Competencies, Career Roadmap, Expertise, AI Journey, Certifications, Achievements, Contact, Footer. Section anchors are derived from `NAV_ITEMS` via `id.toLowerCase().replace(/\s+/g, "-")` (e.g. "AI Journey" → `id="ai-journey"`).

Entry: [src/main.tsx](src/main.tsx) → renders `<App />` into `#root` from [index.html](index.html).

## Styling

- **Tailwind v4** via `@tailwindcss/vite` (no `tailwind.config.js`). Tailwind is wired in three CSS files imported from [src/styles/index.css](src/styles/index.css): `fonts.css`, `tailwind.css`, `theme.css`.
- **Design tokens live in [src/styles/theme.css](src/styles/theme.css)** as CSS variables (`--primary`, `--accent`, `--background`, etc.) and are re-exported into Tailwind via `@theme inline { --color-primary: var(--primary); ... }`. To recolor the site, edit the `:root` block in `theme.css` — most JSX references colors as `var(--primary)`, `#C49B4B` (gold accent), or `#0D1B2E` (dark text) inline.
- Heavy use of **inline `style={{ ... }}`** for fonts, backgrounds, and one-off colors rather than utility classes. When editing, match the existing pattern — don't refactor to className-only without reason.
- Fonts: `Outfit` (display), `Inter` (body), `JetBrains Mono` (mono accents/labels). Loaded in `fonts.css`.

## Conventions

- Import alias `@` → `./src` (see [vite.config.ts](vite.config.ts)). Use `@/styles/...`, `@/app/...`.
- Icons come from `lucide-react`. Add new icons to the existing import block at the top of `App.tsx`.
- Animation is `motion/react` (the `motion` package, not `framer-motion`). Pattern: `initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`.
- Static assets (profile photo, certification badges) live in [public/](public/) and are referenced as absolute paths (`/profile.jpg`, `/sap-gen-ai-cert.png`).
- The hero uses a CSS-mask gradient on the profile image to blend it into the dark background — preserve the `WebkitMaskImage` + `maskImage` pair when touching that block.
