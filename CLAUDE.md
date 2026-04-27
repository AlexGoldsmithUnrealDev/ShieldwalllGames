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

**Pricing tiers (pre-launch, subject to confirmation):**
- Free — full desktop app, all worldbuilding features, bring-your-own-API-key for AI
- Studio — ~£8/month or £72/year — managed AI access
- Saga — ~£18/month or £180/year — adds session capture (V2 feature)

All pricing shown with "subject to change at launch" framing. CTAs are email signup, not purchase buttons.

### Ashborn
A brand and game line, not a single product. All Ashborn games share the same Viking Age fictional world.

- **Ashborn CCG** — collectible card game, first product, ~£30 GBP at launch, 1+ year from release
- The earlier name "Ashborn: Halls of Saga" is retired — do not use it
- Domains owned: ashbornsaga.com, ashbornsaga.co.uk — both 301-redirect to shieldwallgames.co.uk/ashborn/

---

## Launch Sequencing

1. **Website** — launches first. Primary goal: email capture for Mimir beta and Ashborn release lists.
2. **Mimir** — launches when application is ready (~12 months)
3. **Ashborn CCG** — launches when game is ready (~1+ year after Mimir)

---

## Domains

- **shieldwallgames.co.uk** — primary domain, canonical URL
- **shieldwallgames.com** — being acquired, will 301-redirect to .co.uk
- **ashbornsaga.com / ashbornsaga.co.uk** — both 301-redirect to shieldwallgames.co.uk/ashborn/

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

---

## Email Capture

**Provider:** Buttondown
- Two lists: Mimir beta interest, Ashborn release interest
- Double opt-in enabled (GDPR compliance)
- Custom sending domain via DNS on shieldwallgames.co.uk
- Plain HTML form embed — no JS required

Mimir form includes optional question: "What will you use Mimir for?" (Indie game dev / Novel writing / Tabletop RPG / Film or screenwriting / Other)

Ashborn form: email only.

---

## Navigation

### Studio pages
- Wordmark: "Shieldwall Games"
- Links: Home, Mimir, Ashborn
- Mobile: hamburger drawer

### Mimir pages
- Thin top bar (subdued, low contrast): back-link to shieldwallgames.co.uk
- Main nav: "Mimir" wordmark + Features, Pricing, FAQ, Join Beta
- Mobile: hamburger drawer

### Ashborn pages
- Same thin top bar back-link pattern
- Minimal nav for coming-soon page

---

## Technical Rules

- Vanilla HTML, CSS, JS only — no frameworks, no npm, no build step
- No inline styles — ever
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
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
├── components/
│   ├── email-mimir.html
│   └── email-ashborn.html
├── assets/
│   ├── images/
│   ├── fonts/
│   └── icons/
│       └── favicon.svg
├── mimir/
│   ├── index.html
│   ├── styles/
│   │   └── mimir.css
│   ├── scripts/
│   │   └── mimir.js
│   └── assets/
│       └── images/
├── ashborn/
│   ├── index.html
│   ├── styles/
│   │   └── ashborn.css
│   ├── scripts/
│   │   └── ashborn.js
│   └── assets/
│       └── images/
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
- [x] 404 page (shell)
- [x] README.md
- [x] CLAUDE.md updated to current brief
- [ ] CSS token architecture — NEXT
- [ ] Theme switching JS
- [ ] mimir.css
- [ ] Shared nav component
- [ ] Shared footer component
- [ ] Email components (Buttondown)
- [ ] Homepage
- [ ] Mimir product page
- [ ] Ashborn coming-soon page
- [ ] Real fonts
- [ ] Character art / imagery
- [ ] App screenshots / mockups
- [ ] Ask Mimir well-with-wisp illustration
- [ ] Animated Mimir blob (deferred — V1.1)
- [ ] Buttondown account + double opt-in configured
- [ ] Custom sending domain (DNS)
- [ ] Social handles confirmed
- [ ] OG images (1200×630px)
- [ ] PNG favicon from SVG
- [ ] Live domain and URLs updated
- [ ] Redirects live (shieldwallgames.com, ashbornsaga domains)

---

*Last updated: Phase 0. Human owner: Shieldwall Games Ltd.*
