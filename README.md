# Shieldwall Games Web Project

The public website for Shieldwall Games Ltd, Mimir, and Ashborn CCG.

## Live structure

| Page | File | Purpose |
| --- | --- | --- |
| Shieldwall Games | `index.html` | Studio homepage led by Mimir |
| Mimir | `mimir/index.html` | Product, V1 scope, pricing, FAQ, beta signup |
| Mimir features | `mimir/features.html` | Comprehensive, searchable product capabilities |
| Mimir AI | `mimir/mimir-ai.html` | Grounding, evidence, consistency, context, translation and control |
| Proving Grounds | `mimir/proving-grounds.html` | AI-refereed play against a world's Rule entries (Loremaster) |
| Campaign | `mimir/campaign.html` | GM campaign management, controlled reveals and player access deep dive |
| Collaboration | `mimir/collaboration.html` | Writers' Room collaborative worldbuilding deep dive |
| Migration | `mimir/migration.html` | Reviewed spreadsheet/document import and local ownership deep dive |
| Mimir download | `mimir/download.html` | Tester download page (`noindex`, not in the sitemap) |
| Mimir roadmap | `mimir/roadmap.html` | Data-driven public roadmap |
| Ashborn CCG | `ashborn/index.html` | Product landing page |
| Privacy | `privacy.html` | Website and planned Mimir privacy model |
| Terms | `terms.html` | Website and planned Mimir commercial terms |
| 404 | `404.html` | Custom not-found page (root-relative links, so it works at any path) |
| Download redirect | `download.html` | Redirects to `mimir/download.html`, because the app links to `/download.html` (`noindex`, not in the sitemap) |

## Tech stack

- Vanilla HTML, CSS, and JavaScript
- No framework, npm dependency, or build step
- MailerLite embedded forms for email capture
- GitHub Actions deployment to GitHub Pages during the pre-launch website phase
- Canonical domain: `shieldwallgames.co.uk`

## Local development

Open the files directly or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
/
├── index.html
├── privacy.html
├── terms.html
├── 404.html
├── download.html               # Redirect to mimir/download.html
├── robots.txt
├── sitemap.xml
├── CNAME
├── styles/
│   ├── main.css
│   └── shieldwall.css
├── scripts/
│   ├── main.js
│   └── consent.js
├── assets/
│   ├── images/
│   ├── fonts/
│   ├── icons/
│   └── logos/
├── mimir/
│   ├── index.html
│   ├── features.html
│   ├── mimir-ai.html
│   ├── proving-grounds.html
│   ├── campaign.html
│   ├── collaboration.html
│   ├── migration.html
│   ├── download.html           # Tester page, noindex
│   ├── roadmap.html
│   ├── roadmap-data.json
│   ├── data/
│   │   └── features.json
│   ├── styles/
│   │   ├── mimir.css
│   │   ├── internal.css
│   │   ├── features.css
│   │   ├── mimir-ai.css
│   │   ├── proving-grounds.css
│   │   ├── campaign.css
│   │   ├── collaboration.css
│   │   ├── migration.css
│   │   └── roadmap.css
│   └── scripts/
│       ├── mimir.js
│       ├── chapters.js
│       ├── internal.js
│       ├── features-chapters.js
│       ├── features.js
│       ├── generate-features.js
│       ├── mimir-ai-chapters.js
│       ├── mimir-ai.js
│       ├── proving-grounds-chapters.js
│       ├── proving-grounds.js
│       ├── migration-chapters.js
│       ├── migration.js
│       ├── roadmap-chapters.js
│       ├── roadmap.js
│       └── generate-roadmap.js
├── ashborn/
│   ├── index.html
│   └── styles/
│       └── ashborn.css
├── .github/workflows/deploy.yml
├── CLAUDE.md
└── README.md
```

## Mimir commercial source of truth

The live site currently uses the V1 commercial model:

| Tier | Monthly | Annual |
| --- | ---: | ---: |
| Mimir Core | Free | Free |
| Apprentice | £6.99 | £69.99 |
| Worldsmith | £14.99 | £149.99 |
| Loremaster | £24.99 | £249.99 |

Worldsmith is the featured "Most Popular" plan. Every tier keeps unlimited local worlds and entries. Paid tiers add a monthly Mimir AI allowance, sync, hosting, collaboration and scale rather than artificial local content caps.

- **Mimir Core:** the full local toolset, including the Entry type editor, Narrative Planner, advanced tree and filter tools, Simulation and world-state variables. Imports and competitor migration. Mimir AI and Translator using credits. Join a hosted Campaign free as a player or Co-GM.
- **Apprentice:** 400 Mimir AI credits a month. Desktop and phone sync. Host one Campaign (8 people including the GM, 1 GB, 1 live table).
- **Worldsmith:** 1,200 credits a month. Lore Consistency Review. Export to Engine. Writers' Room, which needs Worldsmith both to create and to join (5 hosted worlds, 5 guest collaborators each). Host several Campaigns (20 people, 3 GB, 2 live tables).
- **Loremaster:** 3,000 credits a month. Proving Grounds (create, run, host and join). Host several Campaigns (50 people, 10 GB, 5 live tables). 20 hosted worlds, 20 guest collaborators each. Priority support.

**Founder programme.** Every account created in the first six months of public beta, paying or not, becomes a founder automatically. Founders get a Founder badge, 25% extra credits on every bundle, 5% extra monthly credits on any paid plan and 10% off Shieldwall packs and collections. Plan prices are never discounted. Give no dates on the site.

The deeper canonical commercial specification lives in the Mimir application repository at `docs/commercial-model.md`. When pricing or entitlements change there, this website and `CLAUDE.md` must be updated together.

### Roadmap authoring

`mimir/roadmap-data.json` is the primary Roadmap content source. After changing
it, run `node mimir/scripts/generate-roadmap.js` to refresh the semantic HTML
snapshot in `mimir/roadmap.html`. The snapshot keeps the page useful and
indexable when JavaScript or JSON loading fails; `roadmap.js` adds only the
interactive detail layer.

The homepage and Roadmap share the Well stage/controller in
`mimir/scripts/chapters.js`. Roadmap-only phase artwork and colour configuration
lives in `mimir/scripts/roadmap-chapters.js`.

### Features authoring

`mimir/data/features.json` is the Features page presentation dataset. After
changing it, run `node mimir/scripts/generate-features.js` to regenerate the
crawlable semantic snapshot in `mimir/features.html`. The browser progressively
adds search and feature-detail drawers; it never replaces the static content.

`mimir/styles/internal.css` and `mimir/scripts/internal.js` provide shared
internal-page navigation/footer behaviour used by Features, Mimir AI and
Roadmap. The Features and Mimir AI Well configurations remain page-specific in
`features-chapters.js` and `mimir-ai-chapters.js`, while the stage, observer,
adjacent preloading and depth navigation stay shared in `chapters.js`. Future
artwork filenames are documented in each page's background README.

### Mimir AI page

`mimir/mimir-ai.html` is semantic and useful without JavaScript. Its conceptual
examples are progressively enhanced by `mimir/scripts/mimir-ai.js`; real product
screenshots remain separate labelled media slots. Do not turn conceptual website
diagrams into claims that a live product call is taking place.

The page uses current application guides for Ask Mimir, Lore Consistency Review,
World briefs, Translator and account/credit behaviour. In particular, the
current World briefs are a saved-filter export for external AI
tools, while Ask Mimir uses retrieval and focused-entry context internally.

### Proving Grounds page

`mimir/proving-grounds.html` explains the testing workflow through
progressively enhanced conceptual demonstrations. It keeps experiment results
separate from canon and distinguishes Proving Grounds, world state and
simulation. Built features are labelled Available; conceptual demonstrations
stay labelled and separate from real product captures.

Status labels follow the owner's rule: if a feature is built in the app, it is
labelled Available. Do not mention alpha in public copy. Keep a not-yet-available
label only for work the application repository records as not built.

The page reuses the shared Well controller and internal navigation/footer. Its
lighting and future artwork configuration lives in
`proving-grounds-chapters.js`; exact art requirements are documented in
`mimir/assets/backgrounds/proving-grounds/README.md`.

### Migration page

`mimir/migration.html` is the Core, `Available` deep dive for reviewed
import and migration. Verified current implementation formats are CSV, XLSX,
TXT, Markdown and DOCX. Spreadsheet conversion is deterministic, with optional
AI mapping suggestions; prose extraction is AI-assisted and creator-reviewed.
The app has dedicated importers for Obsidian, Notion and World Anvil
(`docs/specs/importer.md` in the application repository, built 13 Oct 2026).
Name them, but say World Anvil has only been tested with sample exports. Still
do not promise lossless conversion, dry runs or one-click rollback.

The page uses the shared Well controller and internal navigation/footer. Its
configuration is in `migration-chapters.js`, and exact background files are in
`mimir/assets/backgrounds/migration/README.md`.

### Crawling, metadata and media

`robots.txt` allows public crawling and declares the root `sitemap.xml`.
Conservative Organization/WebSite structured data lives on the Shieldwall
homepage; Mimir has SoftwareApplication data without checkout offers or ratings.

The consolidated owner-supplied background, screenshot, video and social-image
handoff is `mimir/assets/MEDIA_CHECKLIST.md`.

## Current V1 positioning

Mimir V1 is built around:

- Local-first structured worldbuilding
- Trees, timeline, calendar, maps, quests, dialogue, story arcs, validation, history, and accessibility
- Mimir AI and constructed-language translation
- General imports and competitor migration (Obsidian, Notion and World Anvil)
- Simulation: stepping through quest and dialogue graphs with world-state variables (Core)
- Proving Grounds: AI-refereed play against the world's Rule entries (Loremaster)
- Writers' Room collaboration for shared creative work (Worldsmith)
- Hosted Campaigns for players and Co-GMs (Apprentice and above to host)
- Export to Engine: one-way JSON files shaped for Unreal's DataTable import, Unity and Godot 4, written on the user's computer (Worldsmith and above)
- Mimir phone app. Desktop and phone sync needs Apprentice or above. Do not state a tier for the phone app itself, and do not claim the whole desktop app runs on a phone.

Live engine integrations, round-tripping and native engine asset formats are later work. MCP connections (ChatGPT, Claude) are later too, with no release date set. Do not advertise them as V1 launch features.

## Mimir AI positioning

Customer-facing language is **Mimir AI**.

Do not ask customers to choose Haiku, Sonnet, Opus, or another provider SKU in website copy. Mimir chooses the underlying processing route internally. Credit consumption is based on the amount/type of work rather than a customer-selected provider model.

Current launch-planning credits are:

- Every account: 200 one-time welcome credits
- Monthly: Core 0, Apprentice 400, Worldsmith 1,200, Loremaster 3,000
- Credit bundles: 500 for £4.99, 1,500 for £12.99, 4,000 for £29.99. Bundle credits never expire.

These are planning figures. They may change before paid checkout opens, after beta workload validation.

## Email capture

MailerLite account ID: `2430389`

- Mimir form: `data-form="x3uRLn"`
- Ashborn form: `data-form="rvVjbn"`
- Double opt-in is used for marketing lists
- Sending domain: `shieldwallgames.co.uk`

Do not reintroduce Buttondown instructions.

## Design and implementation rules

- Keep the current design system and visual identity unless explicitly asked to redesign it.
- Vanilla HTML/CSS/JS only.
- Keep semantic HTML and WCAG AA accessibility.
- Prefer shared tokens/components over new one-off patterns.
- Keep Mimir pricing anchored at `mimir/#pricing`.
- Keep user data ownership/local-first language precise: local worlds stay on the user's device by default; AI and optional hosted/collaboration services are network features.
- Do not promise future features as already delivered.
- Do not expose bring-your-own-key (BYOK) as a customer feature.
- Do not use the retired internal product name in public website copy (see `CLAUDE.md`).

## Deployment

Every push to `main` triggers the GitHub Pages workflow. GitHub Pages is the current pre-launch website host.

Before Mimir becomes a commercial SaaS/download service, the production website/download/account infrastructure should be reviewed and moved to the intended commercial hosting setup rather than assuming GitHub Pages is the permanent service architecture.

## Before public paid launch

- [ ] Finish and validate migration/import workflows
- [ ] Finish Proving Grounds
- [ ] Finish collaboration and hosted-world systems
- [ ] Benchmark Mimir AI workloads and confirm monthly credit allowances
- [ ] Load-test hosted project/collaborator/storage allowances
- [ ] Finalise production auth, account ledger, payment, broker, storage, and hosting infrastructure
- [ ] Update `privacy.html` with the actual production subprocessors and retention details
- [ ] Update `terms.html` and checkout flow for the consumer/subscription law in force at launch
- [ ] Confirm refund/cancellation wording and hosted downgrade grace periods
- [ ] Create final OG images
- [ ] Verify all beta/launch MailerLite forms and automations
- [ ] Move installers/download delivery to the intended commercial storage/CDN
- [ ] Review GitHub Pages replacement for the commercial site
- [ ] Configure remaining domain redirects

## Social media

- Facebook: `https://www.facebook.com/share/18PW3HCR6m/`
- Instagram: `https://www.instagram.com/shieldwall_games`
- YouTube: `https://youtube.com/@shieldwallgames`
- Twitter/X: `https://twitter.com/ShieldwallG`

## Working with AI coding assistants

Read `CLAUDE.md` before making site changes. After any material product/pricing change, check all of:

- `mimir/index.html`
- `mimir/features.html`
- `mimir/data/features.json`
- `mimir/roadmap.html`
- `mimir/roadmap-data.json`
- `privacy.html`
- `terms.html`
- `README.md`
- `CLAUDE.md`

Do not treat older files inside `Mimir Design System/` as the commercial source of truth. They are retained design/reference material and may contain historical copy.
