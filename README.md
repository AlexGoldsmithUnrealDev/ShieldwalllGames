# Shieldwall Games Web Project

The studio website for Shieldwall Games Ltd at **shieldwallgames.co.uk**: the
studio homepage, the Ashborn page, the legal and support pages, and redirects for
the old Vitus URLs.

Vitus has its own website at **brothervitus.co.uk** (`.com` redirects to it),
built from the separate `VitusSite` repository. Link to it; do not copy its pages
back here.

## Live structure

| Page | File | Purpose |
| --- | --- | --- |
| Shieldwall Games | `index.html` | Studio homepage (Stage 10B, "One world, many games") |
| Ashborn CCG | `ashborn/index.html` | Ashborn game landing page and sign-up |
| Privacy | `privacy.html` | Privacy policy, with the cookie notice at `#cookies` |
| Terms | `terms.html` | Terms of service |
| Refunds | `refunds.html` | Refund policy |
| Licence | `eula.html` | Vitus end-user licence |
| Subprocessors | `subprocessors.html` | Who processes data for us |
| Support | `support.html` | Vitus support page |
| 404 | `404.html` | Not-found page (root-relative links, so it works at any path) |
| Download redirect | `download.html` | Redirects to `https://brothervitus.co.uk/download.html`, because the app links to `/download.html` |
| Old Vitus URLs | `vitus/*.html`, `mimir/*.html` | Redirect-only stubs to the matching page on brothervitus.co.uk (`noindex`) |

## Homepage

The homepage is built from the approved Stage 10B prototype in
`docs/design-handover/2026-11-vitus-shieldwall-complete/02_SHIELDWALL_APPROVED/` (with
`SHIELDWALL_SECTION_SPEC.md`). Treat that prototype as the visual source of truth:

- one page with anchored sections in the prototype's order: hero, studio, Vitus,
  roadmap, future, newsletter, footer;
- every section sits on full-bleed landscape artwork under the prototype's gradient
  overlays, with glass panels, amber and frost accents;
- motion is the prototype's: sections rise into view on scroll, nav links underline
  on hover, buttons lift. With `prefers-reduced-motion: reduce` everything shows at once.

Styles are in `styles/studio.css`, a scoped port of the prototype's CSS (same
tokens, class names and breakpoints), loaded after `styles/main.css`. Njord has
no lowercase letters, so headings render in capitals.

The legal pages and 404 are not part of the approved design and keep their existing
layout: `styles/home.css` plus `shieldwall.css` for the legal text.

Artwork is served as responsive AVIF/WebP from `assets/images/landscapes/`
(640, 1024 and 1600 px wide). The PNG masters are not kept in this repository
(they were removed on 17 November 2026 and remain in git history). To swap
in new artwork, regenerate the same file names (see "Replacing artwork" below).

The Vitus screenshot on the homepage is `assets/images/vitus/vitus-home-grid-*`,
cropped from a real capture of the app (the entry grid only, with no app chrome).
The studio panel uses `assets/images/landscapes/studio-panel-*` (a square crop of the
Kernow artwork).

## Tech stack

- Vanilla HTML, CSS and JavaScript
- No framework, npm dependency or build step
- MailerLite embedded forms, loaded only after consent
- GitHub Actions deployment to GitHub Pages
- Canonical domain: `shieldwallgames.co.uk`

## Local development

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
/
├── index.html                  # Studio homepage
├── llms.txt                    # Plain-text studio summary for AI search
├── privacy.html  terms.html  refunds.html  eula.html  subprocessors.html  support.html
├── 404.html
├── download.html               # Redirect to brothervitus.co.uk/download.html
├── robots.txt  sitemap.xml  CNAME
├── styles/
│   ├── main.css                # Fonts, reset, tokens, skip link, reveal, cookie banner
│   ├── studio.css              # Homepage (approved Stage 10B design)
│   ├── home.css                # Legal pages and 404 layout
│   └── shieldwall.css          # Legal text styles (sw-legal)
├── scripts/
│   ├── main.js                 # Menu toggle, scroll reveal
│   └── consent.js              # Cookie banner and consent gating
├── assets/
│   ├── images/                 # Web images only (landscapes/, vitus/)
│   │   ├── landscapes/         # Responsive AVIF/WebP crops used by the homepage
│   │   └── vitus/              # Homepage Vitus screenshot
│   ├── og/shieldwall.jpg       # Social preview image
│   ├── fonts/  icons/  logos/
├── ashborn/
│   ├── index.html
│   └── styles/ashborn.css
├── vitus/  mimir/              # Redirect stubs only
├── docs/design-handover/       # Approved design handovers (not published)
├── tools/build-legal-pages.ts  # Rebuilds the legal pages from the app repo's drafts
├── .github/workflows/deploy.yml
├── CLAUDE.md
└── README.md
```

## Replacing artwork

Each homepage section uses one landscape (`hero`, `studio`, `vitus`, `roadmap`,
`future`, `newsletter`) plus `studio-panel` for the studio card (square, 560 and
880 px). Export the new art at
least 1600 px wide, then write `<name>-640/1024/1600` in both `.avif` and `.webp`
to `assets/images/landscapes/`. Keep the subject near the centre: the images are
cropped with `object-fit: cover`.

## Legal pages

The legal pages are published from the Vitus app repository's drafts
(`docs/legal/*.md`, `docs/website/support.md`). Rebuild them from the app repo:

```bash
LEGAL_DATE='15 November 2026' npx tsx /path/to/ShieldwalllGames/tools/build-legal-pages.ts
```

The page template, header and footer live in that script.

## Email capture

MailerLite account ID: `2430389`

- Vitus form: `data-form="x3uRLn"`
- Ashborn form: `data-form="rvVjbn"`
- Double opt-in is used for marketing lists
- Sending domain: `shieldwallgames.co.uk`

The homepage newsletter box has a "Choose a list" switch (Vitus updates / Ashborn
news) that shows one real embedded form at a time. There is no single studio-wide
list yet; if one is created in MailerLite, it can replace the switch. The forms'
own wording and header images are set in the MailerLite dashboard.

## Cookie consent and analytics

`scripts/consent.js` runs the banner (Reject all / Accept all) on every page.
Optional scripts are held as `<script type="text/plain" data-consent="…">` and
forms sit in `data-consent-placeholder="forms"`. The "analytics" category exists
but no analytics provider is installed.

## Deployment

Every push to `main` triggers the GitHub Pages workflow. It publishes a copy of the
site without `*.md`, `*.docx`, `.github/`, `tools/` and `docs/`.

Before paid launch, review whether GitHub Pages remains the right host.

## Social media

- Facebook: `https://www.facebook.com/share/18PW3HCR6m/`
- Instagram: `https://www.instagram.com/shieldwall_games`
- YouTube: `https://youtube.com/@shieldwallgames`
- Twitter/X: `https://twitter.com/ShieldwallG`

## Working with AI coding assistants

Read `CLAUDE.md` before making site changes.
