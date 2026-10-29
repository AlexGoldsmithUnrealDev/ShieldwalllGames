# CLAUDE.md — Shieldwall Games Web Project

## Read this first

**Owner decisions, 29 October 2026 (these override anything below that disagrees):**

- **Built means available.** If a feature is built in the app, label it "Available". Do not keep "In development" or "In testing" on a built feature. Only features the app's sources say are not built keep a not-yet-available label.
- **No "alpha" in public copy.** Mimir launches in public beta very soon. Do not describe the product as being in alpha.
- **Legal pages are published** without solicitor review, because review is not affordable until Mimir earns. Keep them in step with the app repo's drafts and the app's code.
- **Credits and allowances: the app's code is the source of truth.**

This file is the persistent working brief for the Shieldwall Games website. Read it before changing public copy, pricing, roadmap content, or site structure.

If this file conflicts with an explicit new instruction from the human owner, follow the new instruction and update this file so the conflict does not recur.

---

## Company and products

**Shieldwall Games Ltd** is a small independent studio based in Kent, UK.

### Mimir

Mimir is a local-first worldbuilding platform for writers, Game Masters, game developers, and other creators working with complex fictional worlds.

Public product positioning:

- Build structured worlds rather than disconnected notes.
- Visualise relationships through dedicated trees, maps, calendars, timelines, backlinks, and linked entries.
- Use Mimir AI to understand and review the user's own lore.
- Prototype interactive ideas in Proving Grounds.
- Import existing work and migrate from other worldbuilding tools.
- Collaborate with other creators.
- Host controlled world experiences for players/viewers/participants.
- Keep the primary local world files under the user's ownership and control.

The retired internal/product name **Lorekeeper** must not appear in public website copy.

### Ashborn

Ashborn is Shieldwall's Viking Age game line. Ashborn CCG is the first planned game in that line and launches after Mimir.

---

## Canonical Mimir commercial model

The deeper commercial source of truth lives in the Mimir application repository at `docs/commercial-model.md`.

This website must remain aligned with that specification.

### V1 plans

| Tier | Monthly | Annual | Position |
| --- | ---: | ---: | --- |
| **Mimir Core** | **Free** | **Free** | Build your world |
| **Apprentice** | **£6.99** | **£69.99** | Develop your world |
| **Worldsmith** | **£14.99** | **£149.99** | Bring your world to life |
| **Loremaster** | **£24.99** | **£249.99** | Work at professional scale |

**Worldsmith** is the featured/Most Popular plan.

### Commercial rules

- Unlimited local worlds and local entries at every tier.
- Core is a permanently useful free product, not a timed trial.
- Do not paywall accessibility, basic data integrity, ordinary migration/import, or export of the user's own local data.
- Paid tiers add increasingly powerful workflows, AI allowance, collaboration, hosting, and scale.
- Only Shieldwall-hosted resources should carry capacity limits.
- Free/Core users may join a paid user's hosted **Campaign** as a player or Co-GM within the host's allowance.
- The **Writers' Room** needs Worldsmith to create **and to join**: every collaborator needs their own Worldsmith plan. Core and Apprentice cannot join.
- Proving Grounds needs Loremaster for every action, including joining.
- Downgrading must not delete local work.
- Do not market a separate Writer, GM, or Developer edition. Those are audience/persona routes into the same product.
- Do not advertise a Studio/business plan as a current V1 consumer plan. A future business plan may be created only when real professional demand justifies it.

### Planned V1 feature progression

Ladder set 27 October 2026 (`docs/commercial-model.md` in the app repo). It supersedes the 7 October web brief on tiers, credits and allowances.

**Core** includes the full local toolset:

- Unlimited local worlds and entries
- Standard entry types/editors and the **Entry type editor** (formerly "Custom Schema Editor")
- Browser, search, tags, backlinks, links
- Family, genus/species, culture, faction and place trees, with advanced tree filters
- Timeline, calendar and maps
- Quest, Dialogue and Story Arc editors, and the **Narrative Planner**
- **Simulation** and world-state variables (stepping through quest and dialogue graphs)
- Spoilers, validation and naming consistency
- History (saved versions; Git under the hood) and the Bin
- Accessibility and local voice dictation
- Standard, safe-to-publish and JSON export
- General imports and competitor migration (dedicated Obsidian, Notion and World Anvil importers)
- Mimir AI (including creating entries) and the Translator, paid for with credits: a one-time 200-credit welcome grant, then credit bundles or a paid plan. Core has **no monthly allowance**.
- **World brief** (local Markdown bundle for other AI tools, no credits)
- Game-system templates: Default and D&D 5e (SRD 5.2), free and built in. Never say "Pathfinder" in public copy.
- Joining an invited hosted Campaign as player or Co-GM

**Apprentice** adds:

- 400 Mimir AI credits a month; 8k retrieval context
- Desktop and phone sync
- Host one Campaign: 8 people including the GM, 1 GB, 1 live table

**Worldsmith** (Most Popular) adds:

- 1,200 credits a month; 16k context
- Lore Consistency Review and rules contradiction analysis
- Writers' Room create and join (5 hosted worlds, 5 guest collaborators each; every guest needs Worldsmith)
- Export to Engine: one-way JSON files for Unreal, Unity and Godot, run locally (folder and JSON export stay on every tier)
- Several Campaigns: 20 people, 3 GB, 2 live tables

**Loremaster** adds:

- 3,000 credits a month; 16k context
- Proving Grounds (AI-refereed play against the world's Rule entries; create, run, host, join)
- Several Campaigns: 50 people, 10 GB, 5 live tables
- 20 hosted worlds, 20 guest collaborators each
- Priority support queue (aim one working day; not an SLA)

### Current planning allowances

These figures are what the app's code grants (`workers/commerce/creditPeriods.mts`, `founderPricing.mts`, `src/campaign/campaignHostingAllowance.ts`, `src/collab/membershipPosture.ts`, `src/routes/marketplace/marketplacePricing.ts`). **The app's code is the source of truth for credits and allowances**; if a doc disagrees with the code, follow the code.

| Allowance | Core | Apprentice | Worldsmith | Loremaster |
| --- | ---: | ---: | ---: | ---: |
| Monthly Mimir AI credits | 0 | 400 | 1,200 | 3,000 |
| One-time welcome credits | 200 | 200 | 200 | 200 (once per account) |
| Ask Mimir retrieval context | 4k | 8k | 16k | 16k |
| Hosted Campaigns | - | 1 | Several | Several |
| People per Campaign (incl. GM) | - | 8 | 20 | 50 |
| Campaign storage | - | 1GB | 3GB | 10GB |
| Live tables at once | - | 1 | 2 | 5 |
| Writers' Room hosted worlds | 0 | 0 | 5 | 20 |
| Guest collaborators per world | - | - | 5 | 20 |

### Credits, founders and packs

- Credit bundles: 500 for £4.99, 1,500 for £12.99, 4,000 for £29.99. Bought credits never expire; monthly credits are used first.
- Founder programme: every account created in the first six months of the public beta, paying or not, keeps for life a Founder badge, 25% extra credits on every bundle, 5% extra monthly credits on any paid plan, and 10% off Shieldwall packs and collections. Automatic, not codes. Plan prices are never discounted. No start date has been set, so give no dates.
- Content packs are sold in the in-app Marketplace from public beta launch, from £4.99; collections are 20% off packs you don't already own.

### Downgrade and read-only rules

- Local data is never deleted. Bought credits stay on the account.
- Hosted resources above a new plan's allowance go to a grace, read-only or archive flow, never silent deletion.
- Writers' Room: if the host is below Worldsmith, the whole room is read-only for everyone. A guest below Worldsmith is read-only in every room and keeps their place. Everyone can still open, read and export.

---

## Mimir AI positioning

Customer-facing product name: **Mimir AI**.

Do not make the website teach customers to choose Haiku, Sonnet, Opus, or another provider model.

Production philosophy:

- Mimir chooses the underlying model/processing route internally.
- Simple mechanical/background tasks should use the cheapest validated route that does not reduce quality.
- Normal user-facing lore answers should use a high-quality model baseline.
- Credit consumption is based on the amount/type of work performed, not a provider-model surcharge.
- Subscription credits reset monthly.
- Separately purchased top-up credits do not expire under the planned V1 model.
- Shieldwall-caused failed calls/retries should not consume customer credits.
- Intentional user regenerate/retry operations are new work and may consume credits.

The website should describe the benefit and credit system, not provider SKU economics.

Bring-your-own-key (BYOK) is not a customer feature and must not be advertised.

---

## V1 launch scope and roadmap

The public roadmap must reflect this sequence.

### V1

Finish the complete launch platform, including:

- Existing structured worldbuilding systems
- General imports and competitor migration
- Proving Grounds
- Campaigns (with GM session tools: encounter tracker, GM screen, in-world date, quests) and the Writers' Room
- Hosted worlds/player participation
- Export to Engine (one-way JSON file export, Worldsmith)
- The Mimir phone app and desktop/phone sync (sync from Apprentice)
- Ask Mimir creating entries; content packs and Marketplace

### Post-V1 refinement period

After V1 launches, Shieldwall deliberately spends several months gathering real feedback and refining:

- onboarding
- migration
- Proving Grounds
- collaboration and hosting
- AI retrieval/routing
- performance
- accessibility/usability
- conversion and retention friction

### Next major features

Only after V1 refinement:

- Live Unreal Engine, Unity and Godot integration
- Native engine asset formats and advanced engine round-tripping

Later, with no release date set:

- ChatGPT MCP integration
- Claude MCP integration

**Critical:** the V1 Export to Engine is a one-way JSON file export on Worldsmith. Do not describe live engine integration, round-tripping or MCP as available at V1.

### Future professional expansion

Potential future items, not launch promises:

- Mimir Studio/business plan
- organisation/team administration
- enterprise SSO
- professional onboarding
- SLA/support contracts
- additional professional deployment features

---

## Website architecture

```text
/
├── index.html                  # Shieldwall homepage
├── privacy.html
├── terms.html
├── 404.html
├── styles/
│   ├── main.css
│   └── shieldwall.css
├── scripts/
│   └── main.js
├── assets/
│   ├── images/
│   ├── fonts/
│   ├── icons/
│   └── logos/
├── mimir/
│   ├── index.html              # Mimir landing/pricing/FAQ
│   ├── features.html           # Comprehensive feature discovery
│   ├── mimir-ai.html           # Mimir AI deep dive
│   ├── proving-grounds.html    # Proving Grounds deep dive
│   ├── campaign.html           # Campaign management for GMs
│   ├── collaboration.html      # Writers' Room and collaboration
│   ├── migration.html          # Reviewed Migration & Import deep dive
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
│       ├── features.js
│       ├── features-chapters.js
│       ├── mimir-ai.js
│       ├── mimir-ai-chapters.js
│       ├── proving-grounds.js
│       ├── proving-grounds-chapters.js
│       ├── migration.js
│       ├── migration-chapters.js
│       └── roadmap.js
├── ashborn/
│   ├── index.html
│   └── styles/
│       └── ashborn.css
├── .github/workflows/deploy.yml
├── README.md
└── CLAUDE.md
```

Stable pricing anchor: `/mimir/#pricing`. Do not rename `id="pricing"`.

### Proving Grounds website status

`mimir/proving-grounds.html` is the public deep dive for Mimir's testing and
prototyping discipline. All Proving Grounds actions (creating, running,
hosting, and joining) require Loremaster under the current commercial
specification. The complete experience is labelled "Planned for public beta".

Quest and dialogue **Simulation** is Core and is not Proving Grounds. Proving
Grounds is AI-refereed play against the world's Rule entries.

The application repository contains substantial Quest/Dialogue simulation and
local Proving Ground foundations. Label whatever is built as available.
Conceptual website demonstrations must remain labelled and separate from real
product-media slots.

### Migration website status

`mimir/migration.html` is the public deep dive for Core migration/import and is
labelled `In development`. Verified implementation formats are CSV, XLSX, TXT,
Markdown and DOCX. Spreadsheet mapping is deterministic; Mimir AI may optionally
suggest field matches. Prose extraction is AI-assisted, followed by explicit
creator review before draft entries are created.

Dedicated Obsidian, Notion and World Anvil importers are built (no AI, no
credits, offline) and may be named. Wherever World Anvil is named, say it has
been tested with sample exports. Do not name any other competitor as supported
until a dedicated adapter or a documented supported export workflow exists. Do not claim lossless conversion, universal
relationship or attachment preservation, a dry-run transaction, one-click
rollback or perfect round-tripping. The source attachment remaining available
is not the same as a transaction rollback.

### Campaign website status

`mimir/campaign.html` is the public deep dive for GM-facing campaign
management: preparation, controlled reveals, player access and the
host-funded access model. The complete Campaign experience is labelled
"Planned for public beta" and is V1 scope.

Label the built parts of Campaign as available.

### Collaboration website status

`mimir/collaboration.html` is the public deep dive for the Writers' Room
collaborative worldbuilding system: canon authority, roles, the
propose/review/accept workflow and tier allowances. The complete Writers'
Room experience is labelled "Planned for public beta" and is V1 scope.

Hosted acceptance confirmation is required before presenting Writers' Room
as publicly available. The owner's local copy is always canonical. The Writers'
Room is Worldsmith for everyone in it; only the owner accepts changes into
canon, and Admins can review in the hosted world.

---

## Design rules

The current visual design is established. Do not redesign it unless explicitly requested.

- Vanilla HTML/CSS/JS only
- No framework or build step
- Semantic HTML
- WCAG AA minimum
- Existing design tokens first
- Mobile layouts must remain functional
- Progressive enhancement where practical
- Use existing component patterns before creating new ones
- Public feature claims must match current roadmap/commercial decisions
- Future features must be labelled as future rather than implied as delivered

### Fonts

Production fonts are already integrated:

- Njord Regular + Alternate for display use
- Source Serif 4
- Inter
- JetBrains Mono

Do not reintroduce placeholder-font tasks.

---

## Email capture

Provider: **MailerLite**.

- Account ID: `2430389`
- Mimir form: `data-form="x3uRLn"`
- Ashborn form: `data-form="rvVjbn"`
- Sending domain: `shieldwallgames.co.uk`

Do not reintroduce Buttondown.

## Cookie consent

- `scripts/consent.js` and the "Cookie consent" block in `styles/main.css` run the banner on every page. Include `consent.js` (deferred) before `</body>` on any new page.
- The banner has two equal buttons only: **Reject all** and **Accept all**, with one short sentence and a "Cookie notice" link to `/privacy.html#cookies`. The owner rejected a "Choose" layer and per-category copy as cluttered. Do not add them back.
- Every page footer carries `<a href="#" data-cookie-settings>Cookie settings</a>` to reopen the banner.
- Optional scripts are held as `<script type="text/plain" data-consent="forms|analytics">`. Keep MailerLite's full loader snippet in one held script; splitting it breaks `ml()`.
- Each MailerLite form sits in `<div data-consent-placeholder="forms">`. If the visitor rejects, it shows "Allow and show the form", which enables forms only.
- The choice is kept in `localStorage` (`sw-consent`) for 12 months. Bump `VERSION` in `consent.js` when the optional purposes change.

---

## Privacy and legal-copy rules

Mimir is local-first, but the website must not claim Shieldwall can never receive world data.

Accurate distinction:

- Ordinary local creation/editing stays on the user's device.
- Mimir AI sends relevant context through an online broker/API provider.
- Optional collaboration/hosting necessarily stores or synchronises the data the user chooses to host.
- Account/subscription services process account, entitlement, credit, usage, and security metadata.

Production processors are not yet finalised. `privacy.html` should be updated with the actual account/payment/hosting/AI subprocessors before public paid launch.

The refund, renewal-reminder and failed-payment commitments in the published Terms and Refund Policy are approved by the owner (`docs/commercial-model.md`, "Billing commitments"). Do not add other promises that have not been approved. Statutory consumer rights always take precedence over website wording.

The UK subscription-contract regime is changing. Terms and checkout must be re-reviewed against the law actually in force when paid subscriptions open.

---

## Domains and deployment

Primary/canonical domain: **shieldwallgames.co.uk**.

Other owned domains may redirect to it.

The current pre-launch site deploys through GitHub Pages on pushes to `main`.

Public crawling is configured in root `robots.txt` and `sitemap.xml`. Keep the
sitemap limited to real canonical public pages. Structured data must remain
conservative: no fake ratings, launch dates, checkout Offers or download counts.

Owner-supplied artwork and product-capture requirements are consolidated in
`mimir/assets/MEDIA_CHECKLIST.md`; do not create fake media to fill those slots.

Current product captures and the overview video (`mimir/assets/captures/`,
`mimir/assets/video/`) are real screens from a development build using the
Nine Realms demo world. No AI answers are shown, because none were generated
live. Captions describe what is shown; only features that are not built say
"in development". Social preview images live in `mimir/assets/og/`.

Features page media and pop-up images come from the `image`, `imageAlt` and
`mediaCaption` fields in `mimir/data/features.json`. After editing them, run
`node mimir/scripts/generate-features.js` to rebuild the static block in
`features.html`.

The deploy workflow assembles a public copy of the site and excludes working
files: `CLAUDE.md`, every `*.md`, `*.docx`, `Mimir Design System/`, `.github/`,
`tools/` and `mimir/scripts/generate-*.js` are not served. Root `download.html`
redirects to `/mimir/download.html` because the app links to the root path.
The app also links to `/support.html`, `/refunds.html`, `/eula.html` and
`/subprocessors.html`. These, `privacy.html` and `terms.html` are published from
the app repo's drafts (`docs/legal/*.md`, `docs/website/support.md`, with the
cookie notice as the `#cookies` section of the privacy page). Rebuild them with
`tools/build-legal-pages.ts` (run with the app repo's `npx tsx`), which fills company number 12655497 and the registered
office from Companies House, remove the DRAFT line and `[[...]]` notes, and
follow the app's code where a draft disagrees (for example the 7-day offline
lease in `electron/api/accountEntitlementRuntime.ts`). No ICO registration was
found for the company, so no ICO number is shown.

Roadmap cards come from `mimir/roadmap-data.json`. Run
`node mimir/scripts/generate-roadmap.js` after editing it; the generator adds
soft hyphens to long title words.

Current UI words (see `docs/specs/plain-english-pass.md` in the app repo):
Entry type editor, World brief, History / saved versions, links, file name, the
Bin, "your world" (never "lorebible").

GitHub Pages should not be treated as the permanent commercial SaaS/download/account infrastructure. Before paid launch, migrate or confirm the intended production hosting/download architecture.

---

## Social media

- Facebook: `https://www.facebook.com/share/18PW3HCR6m/`
- Instagram: `https://www.instagram.com/shieldwall_games`
- YouTube: `https://youtube.com/@shieldwallgames`
- Twitter/X: `https://twitter.com/ShieldwallG`

---

## Files to review after any material Mimir commercial change

Always check these together:

1. `mimir/index.html`
2. `mimir/features.html`
3. `mimir/data/features.json`
4. `mimir/mimir-ai.html`
5. `mimir/proving-grounds.html`
6. `mimir/campaign.html`
7. `mimir/collaboration.html`
8. `mimir/migration.html`
9. `mimir/roadmap.html`
10. `mimir/roadmap-data.json`
11. `privacy.html`
12. `terms.html`
13. `README.md`
14. `CLAUDE.md`
15. `mimir/download.html` and root `download.html`
16. `sitemap.xml`

Older reference files under `Mimir Design System/` are retained historical/design material. They may contain obsolete commercial copy and must not override the live files or this brief.

---

## Pre-launch checklist relevant to current commercial work

- [ ] Finish competitor migration/imports
- [ ] Finish Proving Grounds
- [ ] Finish collaboration and hosting
- [ ] Benchmark real AI workloads and confirm credit allowances
- [ ] Load-test hosted allowances
- [ ] Finalise production account/auth database
- [ ] Finalise AI broker
- [ ] Finalise payment/subscription flow
- [ ] Finalise hosted storage/realtime architecture
- [ ] Update privacy policy with real subprocessors and retention
- [ ] Re-review terms/checkout against then-current UK subscription law
- [ ] Confirm hosted downgrade/grace/archive rules
- [ ] Move installer/download delivery to intended commercial storage/CDN
- [ ] Review replacement of GitHub Pages for commercial operation
- [ ] Create final OG images
- [ ] Verify MailerLite forms and subscription communications

---

*Last updated: 28 October 2026. Aligned with the 27 October 2026 commercial ladder; product captures, overview video and social images added; deploy now excludes working files. Human owner: Shieldwall Games Ltd.*
