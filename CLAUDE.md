# CLAUDE.md — Shieldwall Games Web Project

## Project Overview

This repo contains the websites for:

1. **Shieldwall Games** — the company website (shieldwallgames.com or similar)
2. **Ashborn: Halls of Saga** — the product website for the company's first game

Both sites are built with **vanilla HTML, CSS, and JavaScript only** — no frameworks, no build tools, no npm. Every file must be directly openable in a browser.

---

## Brand Identity

### Shieldwall Games
- A historical games company
- Tone: serious, grounded, proud of craft, steeped in history
- Visual language: aged, tactile, manuscript-like — but modern in interaction and usability
- Think: illuminated manuscripts, stone carvings, worn leather, iron — not fantasy kitsch

### Ashborn: Halls of Saga
- The company's first product — details TBC
- Assumed setting: Viking Age / Norse / Early Medieval
- Tone: epic, atmospheric, but historically grounded

---

## Design Philosophy

> "Looks old. Works new."

Every design decision should honour this principle:

- **Typography**: Use period-appropriate serif and display fonts (Google Fonts or self-hosted). Favour fonts that feel aged, carved, or calligraphic without being unreadable
- **Colour palette**: Muted, earthy, historical — parchment, iron grey, deep red, aged gold, charcoal. No neon, no gradients unless they feel natural (e.g. vellum texture)
- **Texture**: Use CSS or SVG-based textures to suggest aged paper, stone, or worn surfaces. Avoid flat modern design
- **Layout**: Structured and considered. Grid-based but not corporate. Allow breathing room
- **Interactions**: Smooth, modern, accessible — hover states, transitions, focus management all handled properly
- **Accessibility**: WCAG AA minimum. Semantic HTML throughout. Keyboard navigable
- **Performance**: No unnecessary dependencies. Images optimised. CSS and JS lean and purposeful

---

## Technical Rules

- **No frameworks** — vanilla HTML, CSS, JS only
- **No npm / no build step** — all files run directly in browser
- **Semantic HTML** — use correct elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, etc.)
- **CSS custom properties** — use variables for all colours, spacing, and typography scales so the design system is easy to update
- **Mobile-first** — all layouts built mobile-first, then enhanced for larger screens
- **Progressive enhancement** — base content and structure works without JS; JS adds polish and interactivity only
- **File naming** — lowercase, hyphen-separated (e.g. `about-us.html`, `hero-banner.css`)
- **Comments** — every CSS section and JS function must have a clear comment explaining its purpose

---

## File Structure
/
├── index.html              # Shieldwall Games homepage (or router page)
├── styles/
│   └── main.css            # Global styles, variables, typography, resets
├── scripts/
│   └── main.js             # Global JS — navigation, utilities, shared behaviour
├── assets/
│   ├── images/             # All imagery (optimised WebP preferred)
│   ├── fonts/              # Self-hosted fonts if used
│   └── icons/              # SVG icons
├── pages/                  # Additional HTML pages as the project grows
└── CLAUDE.md               # This file

---

## When Adding New Pages or Features

1. Check CLAUDE.md first to ensure you understand the project constraints
2. Reuse existing CSS variables and components — do not introduce new colour values or font sizes without good reason
3. Keep JS modular — one responsibility per function
4. Never use inline styles
5. Always test: does this work on mobile? Does this work without JS?

---

## Deployment

- **Platform**: GitHub Pages
- **Trigger**: Auto-deploys on push to `main` branch via `.github/workflows/deploy.yml`
- **Source**: Repository root — no build step
- **Live URL**: TBC — update when domain is confirmed
- **Custom domain**: Not yet configured — see GitHub Pages settings when ready

---

## Current Status

- [x] Project scaffolded
- [x] Global design system (CSS variables, typography, reset)
- [x] Shieldwall Games homepage
- [x] Ashborn: Halls of Saga landing page
- [x] Navigation component
- [x] Footer component
- [x] Favicon (SVG — PNG fallback needed before launch)
- [x] Meta tags and OG tags (URLs and OG image needed before launch)
- [x] .gitignore
- [x] GitHub Actions deployment workflow
- [x] Custom 404 page
- [x] README.md
- [ ] Real fonts (client to supply)
- [ ] Real imagery / artwork
- [ ] Email form backend
- [ ] Social media handles confirmed
- [ ] OG images created (1200×630px per page)
- [ ] PNG favicon generated from SVG
- [ ] Domain confirmed and URLs updated
- [ ] Custom domain configured
- [ ] Site live and tested on GitHub Pages

---

*Last updated by Claude Code. Human owner: Shieldwall Games.*
