# CLAUDE.md — Shieldwall Games Web Project

## Read This First

This file is the persistent brief for this project. Read it in full before making any changes. Do not introduce new CSS variables, components, fonts, or structural patterns without checking here first. If something in this file conflicts with a user instruction, flag the conflict rather than silently overriding it.

---

## Company Structure

**Shieldwall Games Ltd** is the parent studio. It publishes software tools and games.

### Mimir
A structured worldbuilding platform for indie game developers, writers, filmmakers, and tabletop GMs. World data lives as plain markdown files, ready to feed into any AI tool (Claude, Cursor, ChatGPT, Claude Code) and any game engine (Unreal, Unity, Godot). Mimir is the source of truth connecting design docs, AI workflow, and game runtime data.

- In-app AI assistant is called "Ask Mimir" — derives from Norse mythology (Mimir, keeper of the well of wisdom)
- Mimir ships before any Shieldwall game and will be used internally to develop them
- Previously called "Lorekeeper" — that name is retired. Never use it.

**Pricing tiers (locked — use these values everywhere, never the old ones):**

Mimir Core (Free):
- Full worldbuilding tool, local-first, unlimited entries
- Custom schemas, family trees, story arcs, basic maps, basic calendars
- Git version history, markdown export, mobile companion (read-only PWA)
- Translator — pay-as-you-go credits
- Ask Mimir — pay-as-you-go credits
- NOT included: engine exports, MCP server, quest/dialogue editor,
  time-aware maps, advanced features

Mimir Studio — £10/month or £100/year:
- Everything in Free, plus:
- All engine exports (Unreal, Unity, Godot, generic JSON)
- MCP server mode
- Quest and dialogue graph editor with simulation mode
- Advanced maps (all phases including time-aware layers)
- AI features with monthly quotas
- Async git collaboration (V1.5)
- Priority support, early access

Mimir Studio Pro — £20/month or £200/year:
- Everything in Studio, plus:
- Session capture with audio transcription — 15 hours/month (V2)
- Higher AI quotas
- Procedural lore expansion, branching canon (V2)
- Game data round-tripping with Unreal (V2)
- Real-time multiplayer cursors, opt-in (V2)

Pay-as-you-go credit packs (for Free tier AI features):
- £5 = 500 credits
- £10 = 1,000 credits
- £20 = 2,000 credits
- Credits never expire. Carry over to paid subscription if user upgrades.

**Critical rules:**
- NEVER mention bring-your-own-key (BYOK) anywhere on the site — not as
  a current or future feature. All AI routes through Mimir's broker.
- The previous "Saga" tier name is retired. Use "Studio Pro" everywhere.
- Recommended/featured pricing tier for UI emphasis: Studio (middle tier).
- All pricing shown with "subject to change before launch" caveat.
- CTAs are email signup ("Join the beta"), not purchase buttons.

### Ashborn
A brand and game line, not a single product. All Ashborn games share the same Viking Age fictional world.

- **Ashborn CCG** — collectible card game, first product, ~£30 GBP at launch, 1+ year from release
- The earlier name "Ashborn: Halls of Saga" is retired — do not use it
- Domains owned: ashbornsaga.com, ashbornsaga.co.uk — both 301-redirect to shieldwallgames.com/ashborn/

---

## Launch Sequencing

1. **Website** — launches first. Primary goal: email capture for Mimir beta and Ashborn release lists.
2. **Mimir** — launches when application is ready (~12 months)
3. **Ashborn CCG** — launches when game is ready (~1+ year after Mimir)

---

## Domains

- **shieldwallgames.com** — primary domain, canonical URL
- **shieldwallgames.co.uk** — owned, will 301-redirect to .com
- **ashbornsaga.com / ashbornsaga.co.uk** — both 301-redirect to shieldwallgames.com/ashborn/

Note: GitHub Pages does not handle 301 redirects between domains natively. These require DNS-level redirects via registrar settings.

---

## Site Architecture — V1 Scope

```
/
├── index.html                  → Homepage (Mimir-led hero, studio intro, Ashborn preview)
├── 404.html                    → Custom not-found page
├── mimir/
│   └── index.html              → Mimir product page (features, #pricing anchor, FAQ, beta CTA)
└── ashborn/
    └── index.html              → Ashborn coming-soon + CCG preview + release notification signup
```

Deferred to V2: /about.html, /blog/, /contact.html, /mimir/beta.html

### Subfolder discipline
Both /mimir/ and /ashborn/ are built for clean future domain extraction:
- Each has its own assets, CSS, and JS inside its subfolder
- Shared resources (nav, footer, email components, main.css tokens) live at root
- Extracting either subfolder to its own domain later is mechanical, not a rewrite

---

## Dual-Aesthetic System

### Theme A — Studio / Ashborn (`body.theme-studio`)
- Parchment tones, iron grey, aged gold, deep red, charcoal
- Light-first. Dark variant: warm dark (deep brown/charcoal, not cold navy)
- Typography: carved/monumental display serif + readable body serif
- Used on: homepage studio sections, /ashborn/, future /about/, /blog/
- Design philosophy: "Looks old. Works new."

### Theme B — Mimir (`body.theme-mimir`)
- Deep navy / midnight blue base
- Dark-first. Light variant: warm parchment backgrounds, rich saturated accents — NOT an inversion
- Typography: distinctive display serif + clean sans-serif body
- Used on: /mimir/ pages, Mimir hero section on homepage
- Reference: LegendKeeper marketing site (legendkeeper.com) — theatrical atmospheric aesthetic

### Theme switching
- Detect prefers-color-scheme as default
- Apply data-theme="dark" or data-theme="light" to `<html>`
- User can override via toggle button (all pages, unobtrusive)
- Preference persists in localStorage
- Mimir pages: default dark. Studio pages: default light.

---

## Fonts (production)

- **Njord Regular + Alternate** — self-hosted woff2 in assets/fonts/. Display font only (28px+). Used for hero headlines, brand wordmarks, poster headings.
- **Source Serif 4** — Google Fonts CDN. Workhorse serif for body text, entry titles, longform reading, marketing display.
- **Inter** — Google Fonts CDN. UI sans-serif for labels, buttons, nav, dense rows.
- **JetBrains Mono** — Google Fonts CDN. Monospace for IDs, code, frontmatter.
- These are the final production fonts. No placeholders remain.

---

## CSS Token Architecture

Dual-scoped pattern:

```css
[data-theme="dark"] body.theme-studio  { ... }
[data-theme="light"] body.theme-studio { ... }
[data-theme="dark"] body.theme-mimir   { ... }
[data-theme="light"] body.theme-mimir  { ... }
```

Mimir section accent colours scoped per section class (.section--hero, --engine, --schemas, --maps, --ask-mimir, --translator, --community). Each section overrides: --section-bg, --section-glow, --section-accent, --section-accent-text, --section-cta-bg.

---

## Mimir Visual Language

- **Character art**: one illustration per feature section, edge-positioned, transparent cutout with glow halo in section accent colour. AI-generated initially, plan for commissioned replacement. Image references must be clean swaps.
- **Screenshots**: rounded corners, section-accent glow, slight rotation. Placeholder mockups until app is ready.
- **Annotation motif**: small + markers, hand-drawn highlights, connection arrows. Tasteful, not overwhelming.
- **Atmospheric backgrounds**: darkened per section, subtle CSS particles/haze overlay. Felt, not read.
- **CTAs**: rounded pill buttons, section accent colour, soft glow halo, icon + label.
- **Ask Mimir entity (V1)**: static well-with-wisp illustration. Animated blob deferred to V1.1 — do not build animation infrastructure now.

**V1 headline features (for homepage prominence):**
- Quest and dialogue graph editor — promoted from V1.5 to V1.
  This is the headline feature for indie game devs.
  Node-based editing, global variables, conditions, simulation mode,
  engine exports.
- Async git-based collaboration — headline V1.5 feature.

**Roadmap page:**
- Lives at /mimir/roadmap.html
- Linked from Mimir nav and pricing section
- Data-driven: mimir/roadmap-data.json rendered by mimir/scripts/roadmap.js
- Status system: shipped / in-progress / planned / new

---

## Email Capture

**Provider:** MailerLite (mailerlite.com)
- Account ID: 2430389
- Two groups: Mimir Beta Interest, Ashborn Release Notifications
- Double opt-in enabled on both groups (GDPR compliance)
- Sending domain: shieldwallgames.co.uk (verified)
- Embed method: MailerLite universal JS script in `<head>` + `ml-embedded` divs
- Mimir form: `data-form="x3uRLn"`
- Ashborn form: `data-form="rvVjbn"`
- The universal script loads once per page; only include it on pages with signup forms

## Social Media

Confirmed platforms and URLs:
- Facebook: https://www.facebook.com/share/18PW3HCR6m/
- Instagram: https://www.instagram.com/shieldwall_games
- YouTube: https://youtube.com/@shieldwallgames
- Twitter/X: https://twitter.com/ShieldwallG

---

## Navigation

### Studio pages
- Wordmark: "Shieldwall Games"
- Links: Home, Mimir, Ashborn
- Mobile: hamburger drawer

### Mimir pages
- Thin top bar (subdued, low contrast): back-link to shieldwallgames.com
- Main nav: "Mimir" wordmark + Features, Pricing, FAQ, Join Beta
- Mobile: hamburger drawer

### Ashborn pages
- Same thin top bar back-link pattern
- Minimal nav for coming-soon page

---

## Technical Rules

- Vanilla HTML, CSS, JS only — no frameworks, no npm, no build step
- No inline styles — ever. All styles must live in the appropriate CSS file (main.css for global, shieldwall.css for homepage, mimir.css for Mimir zone, ashborn.css for Ashborn zone, roadmap.css for roadmap page)
- CSS custom properties for all colours, spacing, typography
- Semantic HTML throughout
- Mobile-first layouts
- Progressive enhancement — content works without JS
- defer on all script tags (except micro-scripts requiring immediate execution)
- Lowercase hyphen-separated file names
- Comments on every CSS section and JS function
- WCAG AA minimum accessibility
- WebP images preferred

---

## File Structure

```
/
├── index.html
├── 404.html
├── privacy.html
├── terms.html
├── CNAME
├── styles/
│   ├── main.css                 # Design system tokens + global baselines
│   └── shieldwall.css           # Homepage (sw-*) component styles
├── scripts/
│   └── main.js                  # Shared JS: nav, scroll, reveal, hamburger
├── assets/
│   ├── images/                  # Concept art, landscapes, characters
│   ├── fonts/                   # Njord-Regular.woff2, Njord-Alternate.woff2
│   ├── icons/                   # Entry-type icons (16 PNGs) + favicon.svg
│   └── logos/                   # Mimir mark, well-of-wisdom
├── mimir/
│   ├── index.html
│   ├── roadmap.html
│   ├── roadmap-data.json
│   ├── styles/
│   │   ├── mimir.css            # Mimir page (ms-*) component styles
│   │   └── roadmap.css          # Roadmap page styles
│   └── scripts/
│       ├── mimir.js             # Mimir nav, FAQ accordion
│       └── roadmap.js           # Roadmap data renderer
├── ashborn/
│   ├── index.html
│   └── styles/
│       └── ashborn.css          # Ashborn page (ab-*) component styles
├── .github/workflows/deploy.yml
├── .gitignore
├── README.md
└── CLAUDE.md
```

---

## Pricing Anchor

Mimir pricing section must have id="pricing" — linkable as /mimir/#pricing. This anchor is stable, do not rename it.

---

## Current Status

- [x] Project scaffolded
- [x] GitHub Actions deployment workflow
- [x] .gitignore
- [x] CLAUDE.md updated to current brief
- [x] README.md
- [x] CSS token architecture (dual-theme, dual-mode)
- [x] Theme switching JS and toggle button
- [x] mimir.css — Mimir component styles
- [x] Shared studio navigation (styles + JS)
- [x] Shared footer (studio and Mimir variants)
- [x] MailerLite email signup forms (replaced Buttondown)
- [x] Homepage (index.html)
- [x] Mimir product page (mimir/index.html)
- [x] Ashborn coming-soon page (ashborn/index.html)
- [x] Custom 404 page
- [x] Privacy policy and terms pages
- [x] Scroll reveal and smooth scroll
- [x] Accessibility audit completed
- [x] Skip links on all pages
- [x] Meta tags, OG tags, canonical links
- [x] Real fonts (Njord + Source Serif 4 + Inter + JetBrains Mono)
- [x] Mimir Design System applied (warm ink palette, grain texture, new typography)
- [x] Copyright year — dynamic via inline JS
- [x] GitHub Pages enabled (Source: GitHub Actions)
- [x] Site live and tested on GitHub Pages URL
- [x] Custom domain configured (shieldwallgames.com)
- [x] MailerLite forms wired (Mimir: x3uRLn, Ashborn: rvVjbn)
- [x] Mimir homepage — eight sections (quest editor section added)
- [x] Mimir pricing section — updated to locked pricing
- [x] Mimir roadmap page (/mimir/roadmap.html)
- [x] Mimir roadmap data (mimir/roadmap-data.json)
- [x] Mimir FAQ — updated with nine entries
- [x] Footer roadmap links — all pages
- [x] Ashborn page — explicit £30 pricing added
- [x] Competitor comparison table on Mimir page
- [ ] Character art — 5 commissioned illustrations (hero, engine, schemas, ask-mimir, translator)
- [ ] App screenshots / mockups (engine integration, schemas)
- [ ] Ask Mimir well-with-wisp illustration (replace placeholder)
- [ ] Animated Mimir blob entity (deferred — V1.1)
- [ ] Ashborn CCG card artwork
- [ ] Ashborn world panoramic art
- [ ] OG images created (1200×630px — 4 pages)
- [ ] PNG favicon generated from assets/icons/favicon.svg
- [ ] Social links added to all page footers (currently only on roadmap)
- [ ] Inline styles removed from all pages
- [ ] Custom sending domain configured (shieldwallgames.co.uk DNS)
- [ ] shieldwallgames.co.uk redirect to .com configured (DNS)
- [ ] ashbornsaga.com redirect configured (DNS)
- [ ] ashbornsaga.co.uk redirect configured (DNS)

---

*Last updated: June 2026. MailerLite integration, design system rebuild, social links confirmed. Human owner: Shieldwall Games Ltd.*
