# CLAUDE.md — Shieldwall Games Web Project

## Read this first

This repository is the **studio** website, **shieldwallgames.co.uk**. Vitus has
its own website, **brothervitus.co.uk** (`brothervitus.com` redirects to it at
DNS), in the separate **VitusSite** repository, which has its own `CLAUDE.md`
holding the Vitus commercial model, plans, credits and feature rules. Do not
rebuild Vitus pages here; link to brothervitus.co.uk.

**Owner decisions (these override anything below that disagrees):**

- **Built means available.** If a feature is built in the app, label it "Available".
- **No "alpha" in public copy.** Vitus is in **open beta** (owner decision, 15 November
  2026). Public copy says "open beta"; the legal pages' "public Beta" means the same.
- **Legal pages are published** without solicitor review. Keep them in step with the
  app repo's drafts and the app's code.
- **Credits and allowances: the app's code is the source of truth.**
- **Never use the retired names "Mimir" or "Lorekeeper"** anywhere public. The
  product is "Vitus"; the Vitus website is brothervitus.co.uk.
- **Do not deploy or merge** without the owner's approval.

If this file conflicts with a new explicit instruction from the owner, follow the
instruction and update this file.

---

## Company, theme and products

**Shieldwall Games Ltd** is a small independent studio in Kent, UK (company number
12655497). Theme: **"One world, many games."** Belief: **creativity should never be
held back**, which is why the studio releases its tools before its games.

### Studio roadmap (targets, not guarantees)

1. **Vitus**: the open beta is live and runs for around six months; Vitus 1.0 is
   targeted for 2027.
2. **Ashborn CCG**: a historically grounded Viking Age collectible card game, in
   development alongside Vitus and built with it. Targeting late 2027.
3. **Ashborn — Saga's Tavern**: a standalone, GM-led RPG simulator with major Vitus
   integration. Follows Ashborn CCG. No date set.

At least two narrative trilogies are planned for future games. Say no more than
that until the owner shares details.

### Vitus on this site

Keep Vitus copy here short and link to brothervitus.co.uk. Safe facts: local-first
worldbuilding platform for writers, Game Masters and game developers; worlds are
connected entries kept as ordinary Markdown files on the user's computer; trees,
maps, calendars, timelines, story/quest/dialogue planning and simulation; hosted
Campaigns, the Writers' Room and Vitus AI; the free Core plan has unlimited local
worlds and entries. For anything about plans, prices, credits or tiers, follow the
VitusSite `CLAUDE.md` and the app repo's `docs/commercial-model.md`, and prefer not
to repeat them here.

Never describe live engine integration, round-tripping, MCP or BYOK as available.

---

## Website architecture

```text
/
├── index.html                  # Studio homepage (Stage 10B)
├── llms.txt                    # Plain-text studio summary for AI search crawlers
├── privacy.html terms.html refunds.html eula.html subprocessors.html support.html
├── 404.html
├── download.html               # Redirect to https://brothervitus.co.uk/download.html
├── robots.txt sitemap.xml CNAME
├── styles/
│   ├── main.css                # Fonts, reset, tokens, skip link, reveal, cookie banner
│   ├── studio.css              # Homepage (approved Stage 10B prototype, ported)
│   ├── home.css                # Legal + 404 layout
│   └── shieldwall.css          # Legal text styles (sw-legal)
├── scripts/
│   ├── main.js
│   └── consent.js
├── assets/
│   ├── images/                 # Web images only (no PNG masters)
│   │   ├── landscapes/         # Responsive AVIF/WebP crops for the homepage
│   │   └── vitus/              # Homepage Vitus screenshot (real capture, cropped)
│   ├── og/shieldwall.jpg
│   ├── fonts/ icons/ logos/
├── ashborn/
│   ├── index.html
│   └── styles/ashborn.css
├── vitus/ mimir/               # Redirect stubs only (noindex)
├── docs/design-handover/       # Approved design handovers (not published)
├── tools/build-legal-pages.ts
├── .github/workflows/deploy.yml
├── README.md
└── CLAUDE.md
```

### Redirects

The old `/vitus/*.html` and `/mimir/*.html` pages are redirect-only stubs (meta
refresh, `location.replace` keeping the `#hash`, canonical link, `noindex`, visible
link) to the same page on brothervitus.co.uk. Exceptions: `index.html` goes to the
root, `mimir-ai.html` to `vitus-ai.html`, and `move-to-mimir.html` to
`move-to-vitus.html`. Root `download.html` redirects too, because the app links to
it. Keep the stubs; the deploy check expects `vitus/index.html`.

---

## Design rules (Stage 10B, approved)

- **The approved prototype is the source of truth for the homepage:**
  `docs/design-handover/2026-11-vitus-shieldwall-complete/02_SHIELDWALL_APPROVED/Shieldwall_Games_Stage10B_Alive_Landscape_Mockup.html`
  plus `SHIELDWALL_SECTION_SPEC.md` beside it. Match its composition, section order, tokens and
  interactions; do not reskin an older layout. Only the studio homepage has an
  approved design; the legal pages and 404 keep their existing layout. The handover is
  implemented and live; it stays as the visual reference only.
- `styles/studio.css` is the scoped port of the prototype's CSS (`body.s10`).
- Landscape-led storytelling: full-bleed artwork behind each section, softened with
  layered fades; immersive dark styling; studio-first positioning; a simple
  roadmap; newsletter placement; "One world, many games".
- It must feel alive, imaginative and distinctly Shieldwall, not corporate and not
  like another Vitus website. Do not turn it into a product catalogue.
- Motion is the prototype's: scroll reveals (24px rise, 0.8s), nav underline on
  hover, button lift. Everything shows at once with `prefers-reduced-motion: reduce`.
- Vanilla HTML/CSS/JS, no framework, no build step. Semantic HTML, WCAG AA,
  keyboard access, mobile layouts.
- Use the repository's Shieldwall logo (`assets/logos/shieldwall-logo-*.png`, mark
  at `shieldwall-mark-light-96.webp`), never the design package's preview logo.
- Fonts: Njord (display), Inter (body), Source Serif 4 and JetBrains Mono are loaded
  by `main.css`.
- No placeholder labels ("ARTWORK SLOT") or design commentary in public pages.
- Current homepage art is existing site artwork until the owner supplies
  replacements. Replace by regenerating the same file names (see README).
- Screenshots must be genuine captures from the app. Never fabricate one, and never
  show the old "Mimir" branding.

---

## Email capture

Provider: **MailerLite**. Account ID `2430389`. Vitus form `data-form="x3uRLn"`,
Ashborn form `data-form="rvVjbn"`. Sending domain `shieldwallgames.co.uk`. Do not
reintroduce Buttondown. The homepage newsletter box switches between the two real
forms ("Choose a list"); there is no studio-wide list yet. The forms' wording is set
in the MailerLite dashboard (the Vitus form still needed its old-name copy updated
as of 15 November 2026).

## Cookie consent

- `scripts/consent.js` and the "Cookie consent" block in `styles/main.css` run the
  banner on every page. Include `consent.js` (deferred) before `</body>` on any new
  page.
- Two equal buttons only: **Reject all** and **Accept all**, one short sentence and a
  "Cookie notice" link to `/privacy.html#cookies`. No "Choose" layer.
- Every footer carries `<a href="#" data-cookie-settings>Cookie settings</a>`.
- Optional scripts are held as `<script type="text/plain" data-consent="forms|analytics">`.
  Keep MailerLite's full loader in one held script.
- Each MailerLite form sits in `<div data-consent-placeholder="forms">`.
- The choice is kept in `localStorage` (`sw-consent`) for 12 months. Bump `VERSION`
  in `consent.js` when the optional purposes change. VitusSite has its own copy.
- No analytics provider is installed; only the consent category exists.

## Privacy and legal copy

Vitus is local-first, but never claim Shieldwall can never receive world data:
local editing stays on the device; Vitus AI sends relevant context to an AI
provider; hosting and collaboration store what the user chooses to host; account
services process account, entitlement, credit, usage and security metadata.

The legal pages (`privacy`, `terms`, `refunds`, `eula`, `subprocessors`, `support`)
are built from the app repo's drafts (`docs/legal/*.md`, `docs/website/support.md`)
with `tools/build-legal-pages.ts`, run with the app repo's `npx tsx`. The script
holds the page template, fills company number 12655497 and the registered office,
removes DRAFT lines and `[[...]]` notes, and applies fixes where the app's code
disagrees with a draft. Both websites (shieldwallgames.co.uk and
brothervitus.co.uk) are named as GitHub Pages sites. Shieldwall is on the ICO data
protection register, reference **ZC303122** (confirmed 16 November 2026). The build script
fills it into the privacy page (`ICO_REGISTRATION`). Never publish the ICO security number
or the ICO:000… contact references. Do not add promises the owner has not approved.

---

## Domains and deployment

- Studio: **shieldwallgames.co.uk** (this repo, `CNAME`).
- Vitus: **brothervitus.co.uk**, with brothervitus.com redirecting at DNS (VitusSite repo).
- GitHub Pages deploys on pushes to `main`. The workflow publishes a copy without
  `*.md`, `*.docx`, `.github/`, `tools/` and `docs/`.
- `robots.txt` and `sitemap.xml` list only real canonical studio pages (root,
  `ashborn/`, legal pages). Redirect stubs are not in the sitemap.
- Structured data stays conservative: no fake ratings, launch dates or offers.
- Never add pages, text or instructions only crawlers can see. `llms.txt` is a
  plain-text studio summary; update it with any roadmap change.

## Social media

- Facebook: `https://www.facebook.com/share/18PW3HCR6m/`
- Instagram: `https://www.instagram.com/shieldwall_games`
- YouTube: `https://youtube.com/@shieldwallgames`
- Twitter/X: `https://twitter.com/ShieldwallG`

## Files to review after a roadmap or studio change

1. `index.html`
2. `ashborn/index.html`
3. `llms.txt`
4. `README.md` and `CLAUDE.md`
5. The VitusSite roadmap (`roadmap-data.json`) if Vitus dates change

---

*Last updated: 15 November 2026. Vitus moved to brothervitus.co.uk; Mimir removed;
Stage 10B homepage. Human owner: Shieldwall Games Ltd.*
