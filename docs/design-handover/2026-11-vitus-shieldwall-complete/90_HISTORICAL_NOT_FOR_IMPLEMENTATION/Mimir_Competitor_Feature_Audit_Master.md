# Mimir (working name): competitor feature audit

**Working research master** — started **6 November 2026**. Prepared for Alex Goldsmith / Shieldwall Games.

## Purpose and boundaries

Systematically compare the *documented, currently available* features of worldbuilding, TTRPG and fiction-writing software with **Mimir**, then identify plausible additions to Mimir's roadmap. This is the **feature audit only**. A separate, later phase will cover competitors' commercial success, customer sentiment, reputation, marketing and growth. **Naming convention (Alex, 6 November 2026):** Mimir remains the product's working name while its eventual replacement brand is undecided. The abbreviation **WBW** in historical batches and their table headers refers to this same application and does not indicate a committed rebrand.

**Final status (6 November 2026): the complete 12-batch, 33-competitor feature-source research; Stage 0 Mimir repository baseline; and Stage 13 comparative synthesis and prioritised roadmap are all recorded below.** This is a **source-backed feature comparison**, not independent hands-on certification of each competitor, production acceptance of Mimir's hosted services, or a study of sales/reviews/market share. Those remain separate explicit follow-ups.

### Audit convention

- **Y** — Current feature supported by vendor's published information.
- **P** — Partial or related capability, with a meaningful limitation; details in notes.
- **G** — Available but gated behind a specific subscription tier.
- **N** — An authoritative vendor statement rules this out, or the product's stated form definitively conflicts with it. Never infer N simply because a feature is omitted from marketing.
- **F** — Planned or promised, not available in the reviewed release.
- **U** — Not sufficiently verified; **not** an assertion the feature is absent.
- **—** — Historical placeholder in the original per-batch competitor tables. The actual 57-row Mimir baseline appears in Stage 0, with the consolidated 57-feature evidence index and priorities in Stage 13. Earlier source matrices preserve their original research snapshots for traceability.

Current capabilities should be checked against **official documentation, versioned release notes, official demos, and (where available) hands-on product testing**. Vendor marketing descriptions count as vendor assertions, *not* independently confirmed hands-on behaviour. Record feature scope and subscription tier; a generic yes/no comparison would hide important differences. A claim published after the audit date should not be silently backdated.

## Fixed research roster and status

| Stage | Competitors / task | Status |
|---|---|---|
| **0** | **Audit current Mimir repository and distinguish implemented `main` code from Integration-only, planned, and prototype work** | **Code/CI/acceptance baseline recorded, 6 Nov 2026; device/production acceptance still open** |
| **1** | **Realmly; ScribesBlade (Destrola); World Anvil** | **Source research recorded, 6 Nov 2026** |
| **2** | **Campfire; LegendKeeper; Kanka** | **Source research recorded, 6 Nov 2026** |
| **3** | **Notebook.ai; Fantasia Archive; Lore Forge** | **Source research recorded, 6 Nov 2026** |
| **4** | **ChronoGrapher; Realm Works; Obsidian Portal** | **Source research recorded, 6 Nov 2026** |
| **5** | **Alkemion Studio; Chronicler; WorldStitch** | **Source research recorded, 6 Nov 2026** |
| **6** | **Skryrún; OnlyWorlds; MythScribe** | **Source research recorded, 6 Nov 2026** |
| **7** | **DMRealm; Storyflow; Quarry** | **Source research recorded, 6 Nov 2026** |
| **8** | **NovelCanon; Deckle** | **Source research recorded, 6 Nov 2026** |
| **9** | **Obsidian; Notion; Scrivener** | **Source research recorded, 6 Nov 2026** |
| **10** | **Plottr; Arcweave; Sudowrite** | **Source research recorded, 6 Nov 2026** |
| **11** | **NovelAI; Inkarnate; Wonderdraft** | **Source research recorded, 6 Nov 2026** |
| **12** | **Azgaar's Fantasy Map Generator** | **Source research recorded, 6 Nov 2026** |
| **13** | **Reconcile status/tier definitions, validate Mimir gaps, consolidate 33 products × 57 features and propose prioritised roadmap** | **Source-backed final feature synthesis recorded, 6 Nov 2026; untested/vendor-`U` claims explicitly unresolved** |

**Total competitors: 33.** Feature batches: 12. Mimir code baseline: Stage 0 recorded. **Stage 13 final evidence-qualified feature comparison complete**; hands-on vendor tests, real-device Mimir acceptance and detailed market-success research are explicitly outside that completion claim.

---

## Batch 1: Realmly, ScribesBlade, World Anvil

**Evidence checked:** official vendor product websites, documentation, knowledge bases, FAQs, privacy statements, public showcase pages and dated release notes on 6 November 2026. **Not done:** opening paid accounts, installing ScribesBlade or performing hands-on feature acceptance tests. Such testing would increase confidence on complex behaviour but is not represented as completed.

### Comparable feature matrix (Batch 1)

The classifications refer to the exact capability in the first column. **U is not No.** The WBW column remains blank until its current release/branch baseline is audited.

| Category | Capability | Realmly | ScribesBlade | World Anvil | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | N | Y | N | — |
| Platform | Edit entire world offline | U | Y | N | — |
| Platform | Local user-controlled world files | N | Y | N | — |
| Platform | Vendor-hosted cloud world storage | Y | N | Y | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | N | Y | N | — |
| Platform | Ongoing free account tier | N | N | Y | — |
| Structure | Structured lore/entry type templates | Y | Y | Y | — |
| Structure | Fully arbitrary schema/field definitions | U | P | P/G | — |
| Structure | Editable reusable entry prompts | U | Y | G | — |
| Onboarding | Guided question-based world creation | U | Y | P | — |
| Editing | Rich-text article editing | Y | Y | Y | — |
| Editing | Images embedded within entries | Y | Y | Y | — |
| Editing | PDF document viewing alongside notes | U | Y | U | — |
| Editing | Tables inside editor or wiki content | U | Y | Y | — |
| Editing | Split/multicolumn working panels | U | Y | P | — |
| Linking | Cross-article wiki links/mentions | Y | Y | Y | — |
| Linking | Backlinks/auto-discovered relationships | Y | Y | Y | — |
| Linking | Visual relationship graph | Y | Y | P | — |
| Organisation | Categories/hierarchy/tags | Y | Y | Y | — |
| Organisation | Search across lore | Y | Y | Y | — |
| Characters | Automatically generated family trees | Y | U | Y | — |
| Factions | Interactive diplomacy/organisation webs | U | U | Y | — |
| Time | User-defined calendar systems | U | Y | Y | — |
| Time | Recurring calendar events | U | Y | U | — |
| Time | Event/history timelines | Y | Y | Y | — |
| Time | Historical events shown geographically on maps | U | U | Y | — |
| Maps | Import/upload map image | Y | Y | Y | — |
| Maps | Native procedural terrain generation | Y | U | N | — |
| Maps | Native procedural city generation | Y | U | N | — |
| Maps | Generated sci-fi star systems and routes | Y | U | N | — |
| Maps | Interactive pins linked to lore | Y | Y | Y | — |
| Maps | Nested/interconnected interactive maps | Y | Y | Y | — |
| Maps | Toggleable image/map layers | U | Y | Y | — |
| Maps | Political borders/territory polygons | P | Y | Y | — |
| Maps | Draw roads/routes on map | U | Y | Y | — |
| Maps | Calculate distance and travel time | U | Y | U | — |
| Maps | Map labels synchronise automatically from wiki entries | Y | U | U | — |
| RPG | Campaign/plot management | U | Y | Y | — |
| RPG | Session preparation, session notes or reports | U | Y | Y | — |
| RPG | Integrated RPG character sheets | U | Y | Y | — |
| RPG | Creature/NPC statblocks | U | Y | Y | — |
| RPG | Built-in support for multiple game systems | U | Y | Y | — |
| Visibility | Hide GM/private secrets | Y | P | Y | — |
| Visibility | Publish or share player-readable world pages | Y | F | Y | — |
| Visibility | Granular reader/subscriber permissions | P | F | Y | — |
| Collaboration | Invite coauthors or collaborative editors | U | U | Y | — |
| AI | Integrated lore-writing AI | Y | U | N | — |
| AI | Integrated AI image generation | N | U | N | — |
| Generation | In-product heraldry design/generation | Y | U | U | — |
| Generation | In-product character portrait generation | Y | U | U | — |
| Export | Portable whole-world backup/export | Y | Y | G | — |
| Export | Editable Word export and reimport | U | Y | U | — |
| Export | Compiled world/codex as PDF | Y | U | P | — |
| Writing | Dedicated novel/manuscript tool | U | U | Y | — |
| Accessibility | Multiple localised UI languages | U | Y | U | — |
| Accessibility | UI font/readability/colour accessibility controls | U | Y | P | — |

### Vendor evidence and limits

#### 1. Realmly — https://realmly.co/

**Classification:** direct competitor with unusually broad world/map creation, hosted online; paid subscription. Official site quoted **US$7 per month or US$60 per year** and a seven-day trial at review time (pricing may change).

Key official evidence:

1. [Product homepage](https://realmly.co/) — linked lore wiki, World Forge and City Forge, science-fiction systems, generated people/crests, genealogy, chronicles, exports, pricing and optional AI-assist statements.
2. [Official map import guide](https://realmly.co/learn/maps-to-lore) — imports PNG/JPEG/WebP base maps, up to 20 MB and 100 megapixels; pins tie imported base maps to wiki content; pre-existing map layers do not become editable terrain. Important: map import and procedural map creation are **two distinct modes**.
3. [Privacy policy](https://realmly.co/privacy) — stored project data via Supabase, optional external Anthropic-backed AI assistance, sharing behaviour, export and image conditions. It specifically described in-product AI image generation as **not enabled at launch**.
4. [Public showcase](https://realmly.co/showcase) — a public example of how some interlinked components are presented, not a demonstration that paid editing or all generation options work as advertised.

**What is current by vendor claim:** procedural terrain/continents/rivers, city/district generation, generated star systems with jump routes and celestial bodies, lore templating, articles crosslinked to map features, family-tree connections, timelines, visual relationships, heraldry/portrait tools, a single-world PDF codex, private/public world sharing, contextual AI writing assistance, and portable exports.

**Qualification:** This is hosted software with server-stored work; offline full-world editing is *unverified*, and there is no evidence of native desktop/local world file ownership. The precise scope of custom schema editors, recurring calendars, travel time, map layers and collaborative author editing is not established. Generated art/design is distinct from external AI image generation; do not merge those labels. The vendor's price/trial are not a free ongoing plan.

#### 2. ScribesBlade by Destrola — https://www.destrola.com/scribesblade

**Classification:** very close direct competitor for offline-first WBW: native desktop app with structured worldbuilding, RPG planning, interconnected maps and timeline, locally owned files. Vendor advertised a **US$47 one-off licence**, lifetime updates, and 30-day refund at review time. Supported OS: Windows, macOS, Linux.

Key official evidence:

1. [Official ScribesBlade product page and FAQ](https://www.destrola.com/scribesblade) — native platform, offline model, own files and backups, onboarding interview, world bible, world webs, custom-calendar tools, uploaded maps, route measures, campaign planner, game-system integrations, visibility markers, PDF reference material, purchase licence.
2. [Dated official update log](https://www.destrola.com/scribesblade/updates) — chronological features. The latest reviewed **v2.1.1, dated 27 October 2026**; earlier v1.5+ map enhancements, v2.0 custom entry types, v2.1 editable prompt sections and new rule system support. Release dates matter: do not count roadmap ideas as shipped.

**What is current by vendor claim:** question-led world creation; six world-bible families and 19 types, including user-created types and editable prompts; automatically connected `@mention` graph; image-map pins, layers, territory polygons, roads and foot/horse/wagon travel time; custom calendars and recurring festivals/holidays; arc/session planning; multiple journals and rich editor; D&D 5e, Daggerheart and Call of Cthulhu 7e character/NPC sheets; split-view panels and PDF reference display; seven UI languages (EN, DE, PT-BR, ES, FR, IT, PL); owner-controlled local storage plus world ZIP export, per-entry Word-file editing/reimport; no vendor account for ongoing use.

**Critical future/current boundary:** v2.1 changelog explicitly describes a **'Known to players' visibility-eye note** that explains how hidden notes will work with **future player exports**. Metadata/eye indicators exist, but a working filtered player export or hosted read-only world-sharing service **must not be counted as current**. The FAQ allows manually sharing local files/ZIP; that is a different thing from publishing an authenticated player-facing lore portal.

**Qualification:** The custom data system has types and configurable prompts, but the full WBW sense of arbitrary field types, conditional layouts, field validation, stat grids, and schema editing cannot yet be claimed equivalent. ScribesBlade's web/relations are established; an automatically generated genealogical tree is not established. It does not promise integrated generative AI or procedural cartography on the pages reviewed; those remain *unverified* rather than assumed absent. One-time purchase is not a free plan. Cloud sync is user-controlled via external file-sync provider, not a vendor-hosted collaboration platform.

#### 3. World Anvil — https://www.worldanvil.com/

**Classification:** mature broad competitor in hosted worldbuilding, TTRPG campaign management, and fiction writing. Free 'Freeman' tier and paid 'Guild' tiers. Important functionality is restricted by paid tier.

Key official evidence:

1. [World Anvil FAQ](https://www.worldanvil.com/faq) — explicitly: cannot be used offline; browser service requires an internet connection. This is an actual **N**, not a guess.
2. [Article templates](https://www.worldanvil.com/learn/article-guides/article-templates) — 28 structured templates and relationships that power family trees and diplomacy webs.
3. [Customising article layout](https://www.worldanvil.com/learn/styling/styling-workflow) — custom article templates require **Grandmaster** level; not unrestricted for all users. The tool uses templates/BBCode rather than a demonstrated WBW-equivalent schema field editor.
4. [Official interactive-map guide](https://www.worldanvil.com/learn/map-making/maps) — users upload their own base map images, then overlay pins, links, layers, lines and polygons; native map *drawing/generation* is expressly not provided. Free map upload max 3.5 MB and two layers; Guild maps up to 25 MB, layer count uncapped at time of review.
5. [Campaign manager](https://www.worldanvil.com/learn/rpg/campaign-manager) — plots, sessions, players, reports and in-session GM screen. [Storyteller Screen](https://www.worldanvil.com/learn/rpg/dsts) provides game-session context.
6. [Official documentation index](https://www.worldanvil.com/learn) — timelines, Chronicles, calendar, manuscripts, family trees, diplomacy webs, maps, whiteboards, random generators, secrets, statblocks, content trees, interactive tables and author workflows.
7. [Chronicles](https://www.worldanvil.com/learn/chronicles/chronicles) — connects historical events and map/location contexts.
8. [World export](https://www.worldanvil.com/learn/world/export) — complete ZIP with JSON/HTML is a **Guild paid** feature, not part of the universal free tier. [Manuscript export](https://www.worldanvil.com/learn/manuscripts-guides/export-manuscript) has its own **Master+** gate.
9. [Official features by Guild level](https://www.worldanvil.com/learn/account/list-features) — check when converting this exploratory matrix into plan-by-plan comparisons.
10. [Official AI-feature request disposition](https://www.worldanvil.com/community/voting/suggestion/182ee13a-ceb8-4bb8-b53d-904bfb2a326e/view) — team states generative AI functionality is **outside its product scope**, rejecting the proposed AI novel writer. Support explicit N for integrated generative writing AI from this policy, subject to recheck if official roadmap changes.

**What is current by vendor claim:** 28 article structures, linked lore, flexible BBCode formatting, world wiki, map upload plus pins/lines/layers/polygons and nested links, maps with privacy permissions, timelines and calendars, geographical Chronicles, family trees and diplomacy webs, campaign/session manager, GM screen, over 100 RPG systems via statblock/player features, manuscript editor and exports, private sections/secrets, audience permissions, some collaboration, stylable presentations, generators, whiteboards and content organisation.

**Qualification:** World Anvil's detailed customization and export tiers matter. An exposed article heading or BBCode section is not necessarily a native typed field, and a random *text* generator is not native procedural terrain or city cartography. The vendor explicitly says World Anvil is **not** a map-making application. The published FAQ directly disconfirms offline operation. Some in-product tables and manuscript features may have tier limits not yet individually verified; avoid using the matrix to imply all listed features are free.

### Provisional feature-design watchlist, **not yet validated WBW gaps**

These are hypotheses for the *final* WBW roadmap audit; they must be checked against actual WBW implementation and product direction before prioritisation:

1. **World/map generation:** procedural terrain, city districts, star systems and their travel/jump links (Realmly).
2. **Map↔lore integration:** automatic label synchronisation, hierarchical/embedded maps, political polygons and route-duration calculation (Realmly, ScribesBlade, World Anvil).
3. **Time systems:** comprehensive custom calendars, repeat events and time+geography Chronicle-style views (ScribesBlade, World Anvil).
4. **GM workspace:** side-by-side lore/session/rules reference panes and PDFs (ScribesBlade), storyteller screen and session reports (World Anvil).
5. **Information models:** flexible custom prompts/types (ScribesBlade), genealogical/diplomacy relationship presentations (Realmly, World Anvil).
6. **Output and authoring:** entire-world PDF compendium (Realmly), editable Word roundtrip (ScribesBlade), manuscript workflow and structured export (World Anvil).
7. **Audience access:** safe filtered player-facing sharing/exports and fine-grained rights. Treat ScribesBlade's player export as *future*, not a current benchmark.
8. **Accessibility/global reach:** multilingual UI, easy-read and colour-contrast options (ScribesBlade).

**No roadmap decision has been made.** A competitor having a feature is not sufficient justification for adding it; impact, cost, differentiation and core WBW philosophy (local-first, owner-controlled files, grounded AI, flexible schemas) take precedence.

### Outstanding verification questions / follow-up

- **WBW baseline first:** inspect the live repository/actual shipping app and branches. Label each WBW feature as *shipped*, *implemented on an unmerged branch*, *prototype*, or *planned*. Several 'watchlist' items may already exist.
- Realmly: confirm precise schema editor, calendars/recurrence, true offline behaviour (if any), interactive map layers and co-author permissions through demo/access, not snippets.
- ScribesBlade: check customer-facing version for local schema depth, genealogical trees, filterable player exports versus visibility metadata, live collaborative editing, AI and map generator absences. Do not purchase a licence without Alex's approval.
- World Anvil: audit paid plan feature gates in detail before final relative-value judgement; recheck AI scope against current official site at the final pass.
- Cross-product: score feature **quality** and **constraints** only after the existence matrix is reliable. User reviews, success metrics and revenue remain explicitly deferred.

---

## Batch 2: Campfire, LegendKeeper, Kanka

**Evidence checked:** vendor-owned current feature pages, technical/help documentation, subscription terms and versioned release notes current to **6 November 2026**. Campfire's **2 November 2026 Update 44**, LegendKeeper's **27 October 2026 v0.21** and Kanka's **26 October 2026 anniversary/development statement** were particularly important for correcting outdated descriptions. No paid account was opened, no software purchased, and no product operation independently acceptance-tested. Commercial performance, community opinion and success analysis are deliberately postponed.

### Comparable feature matrix (Batch 2)

Use the same feature definitions and **Y / P / G / N / F / U** legend as Batch 1. **P/G** means a partial form is available at a paid tier; **Y/G** means the capability is available at a paid tier but is not generally available for free. **U is not No.** WBW remains unaudited.

| Category | Capability | Campfire | LegendKeeper | Kanka | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | Y | N | N | — |
| Platform | Edit entire world offline | P | P | U | — |
| Platform | Local user-controlled world files | N | N | N | — |
| Platform | Vendor-hosted cloud world storage | Y | Y | Y | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | Y | N | N | — |
| Platform | Ongoing free account tier | Y | P | Y | — |
| Structure | Structured lore/entry type templates | Y | P | Y | — |
| Structure | Fully arbitrary schema/field definitions | P | P | P/G | — |
| Structure | Editable reusable entry prompts | Y | Y | P | — |
| Onboarding | Guided question-based world creation | P | U | P | — |
| Editing | Rich-text article editing | Y | Y | Y | — |
| Editing | Images embedded within entries | Y | Y | Y | — |
| Editing | PDF document viewing alongside notes | U | U | P | — |
| Editing | Tables inside editor or wiki content | Y | Y | Y | — |
| Editing | Split/multicolumn working panels | Y | Y | P | — |
| Linking | Cross-article wiki links/mentions | Y | Y | Y | — |
| Linking | Backlinks/auto-discovered relationships | P | Y | P | — |
| Linking | Visual relationship graph | Y | P | G | — |
| Organisation | Categories/hierarchy/tags | Y | Y | Y | — |
| Organisation | Search across lore | Y | Y | Y | — |
| Characters | Automatically generated family trees | P | U | G | — |
| Factions | Interactive diplomacy/organisation webs | P | P | P/G | — |
| Time | User-defined calendar systems | Y | Y | Y | — |
| Time | Recurring calendar events | Y | U | Y | — |
| Time | Event/history timelines | Y | Y | Y | — |
| Time | Historical events shown geographically on maps | U | U | U | — |
| Maps | Import/upload map image | Y | Y | Y | — |
| Maps | Native procedural terrain generation | U | F | U | — |
| Maps | Native procedural city generation | U | U | U | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | Y | Y | Y | — |
| Maps | Nested/interconnected interactive maps | Y | Y | U | — |
| Maps | Toggleable image/map layers | Y | F | Y | — |
| Maps | Political borders/territory polygons | Y | Y | P/G | — |
| Maps | Draw roads/routes on map | U | Y | U | — |
| Maps | Calculate distance and travel time | P | Y | U | — |
| Maps | Map labels synchronise automatically from wiki entries | U | U | U | — |
| RPG | Campaign/plot management | P | P | Y | — |
| RPG | Session preparation, session notes or reports | P | P | Y | — |
| RPG | Integrated RPG character sheets | P | P | G | — |
| RPG | Creature/NPC statblocks | U | P | G | — |
| RPG | Built-in support for multiple game systems | U | P | P | — |
| Visibility | Hide GM/private secrets | Y | Y | Y | — |
| Visibility | Publish or share player-readable world pages | Y | Y | Y | — |
| Visibility | Granular reader/subscriber permissions | Y | Y | Y | — |
| Collaboration | Invite coauthors or collaborative editors | Y | Y | Y | — |
| AI | Integrated lore-writing AI | U | U | N | — |
| AI | Integrated AI image generation | U | U | N | — |
| Generation | In-product heraldry design/generation | U | U | U | — |
| Generation | In-product character portrait generation | U | U | U | — |
| Export | Portable whole-world backup/export | Y | Y | Y | — |
| Export | Editable Word export and reimport | P | U | U | — |
| Export | Compiled world/codex as PDF | P | U | U | — |
| Writing | Dedicated novel/manuscript tool | Y | U | U | — |
| Accessibility | Multiple localised UI languages | Y | U | Y | — |
| Accessibility | UI font/readability/colour accessibility controls | P | P | P | — |

**Comparative feature extensions found in this batch** (add these as standard rows in the global matrix during final consolidation):

| Additional capability | Campfire | LegendKeeper | Kanka | WBW |
|---|:---:|:---:|:---:|:---:|
| Native Android/iOS mobile app for editing | Y | F | N | — |
| Mobile-friendly responsive website | Y | P | Y | — |
| Live dice roller / multiplayer dice requests | U | Y | U | — |
| Ready-made GM whiteboard / freeform diagram canvas | P | Y | U | — |
| Entry-side numerical properties / stat meters | Y | Y | Y | — |
| Derived/calculated field formulas | U | U | Y | — |
| Campaign inventory and abilities/charges | U | U | Y | — |
| External import formats (beyond its own backup) | P | Y | Y | — |
| Public developer read/write API | U | G | Y | — |
| Automatic page version history / recover prior edit | P | Y | G | — |
| Built-in project chat, activity feed | U | Y | U | — |
| Installable user-created themes/character-sheet plugins | U | F | G | — |
| Native fantasy language/conlang designer | Y | U | U | — |
| Word-count goals / writing progress dashboard | Y | U | U | — |
| Direct Inkarnate map integration | Y | U | U | — |
| Publish/sell finished books in same ecosystem | Y | U | U | — |

### Vendor evidence, limitations and temporal corrections

#### 4. Campfire Writing — https://www.campfirewriting.com/

**Classification:** very broad direct worldbuilding + authoring competitor. Browser, **Windows/macOS desktop app** (with offline mode), and iOS/Android creator app. Limited free tier. Subscription **and lifetime module licences** are available; a lifetime module licence is not necessarily lifetime access to every module. Older discontinued **Campfire Pro** is a separate, legacy app and must not be conflated with the current Campfire desktop app.

Official evidence:

1. [App feature/OS comparison](https://www.campfirewriting.com/apps) — desktop offline; web and mobile require internet, mobile covers a subset of modules, project cloud storage and collaborations.
2. [Current subscriptions and free-plan module caps](https://www.campfirewriting.com/pricing) — 18 modules and module-level free limits, paid monthly/yearly or lifetime choices, unlimited storage and collaboration even with free account.
3. [FAQ](https://www.campfirewriting.com/faq) — project download backup and restore; DOCX individual-element exports requiring server connection; current desktop offline supports locally cached work and synchronisation. With only lifetime module purchases, recurring online licence checking may not be necessary. Sync conflicts are resolved by choosing a version, not automatically merging every edit.
4. [Writing and outlining](https://www.campfirewriting.com/write) — manuscript drafting, corkboard cards, goals and statistics, plot arcs, custom story structure templates, character creation, systems and relationship flowcharts.
5. [Maps feature guide](https://www.campfirewriting.com/interactive-maps) — uploaded maps, linked element/map pins, zones, layers, annotations, scale/distance ruler, customised units, and **live Inkarnate integration for Inkarnate Pro**; free limit quoted as **two maps and five locations**.
6. [Custom calendar guide](https://campfirewriting.com/calendar-creator) — moons, phases, seasons, eras, leap days, recurring holidays/events with observance filters, multiple calendar elements, bidirectional timeline integration.
7. [Relationships module tutorial](https://campfirewriting.com/learn/relationships-tutorial) — user-arranged relationship diagrams, including family tree flowcharts. **This is not evidence of automatic family-tree computation** from character parents.
8. [Manuscript compilation](https://campfirewriting.com/word-processor) — PDF and EPUB print/publishing exports, distinct from a full *world encyclopedia PDF*. [Mobile sharing and exports](https://www.campfirewriting.com/learn/mobile-app-tutorial) includes element-level DOCX, PDF, RTF and HTML.
9. [Update 44: 2 November 2026](https://campfirewriting.com/learn/update44) — native mobile app gains **full map-module support**; new Portuguese, French and Polish UI localisations, alongside earlier Spanish support; continuity of weeks across calendar eras, and new user-only early rollout of badges/writing streaks. **Planned 'Lodges' writing groups are not current.**

**Current documented capability:** richly editable module-specific records for characters, species, cultures, locations, systems, languages/conlangs and more; panel customisation and template reuse; lore cross-links; maps and travel-distance measurement; custom calendar and timeline; plotted arcs, manuscripts and goals, family-tree *diagramming*, public or permissioned sharing, multiauthor editing, world/project backups, PDF/EPUB manuscript export, desktop offline access, and real mobile editing.

**Boundary details:** Campfire's **offline feature is app- and account-specific**, not equivalent to editable world data living natively as user-owned plain files. Exported **project backup** exists, but this is not proof the live working format is human-readable. The mobile app does **not** implement all 18 modules; published app comparison expressly lists gaps/restrictions for arcs, calendars, languages, relationships and others even after map support shipped on 2 Nov 2026. Characters built in Campfire can resemble RPG character sheets but do not establish D&D rule automation or multiple integrated RPG systems. The PDF/EPUB output concerns **manuscripts** and not automatically a fully compiled setting bible. One can draw family trees/relationships, but **automatic genealogical graphs** were not verified. Automated route **travel time** wasn't established, only scale/distance measurement. Fully typed arbitrary schemas, integrated generative AI and procedural terrain/city/star generation remain unverified.

#### 5. LegendKeeper — https://www.legendkeeper.com/

**Classification:** close direct worldbuilding competitor, cloud account and **offline-capable browser application** (NOT a native desktop app). Work is cached in browser local storage for offline editing and synchronised on reconnect. **14-day creation trial** then paid **Pro** project-ownership subscription; a separate **free Basic plan supports viewing, exporting and collaborating on another owner's projects**, but not maintaining editable self-owned projects. Official pricing at review time: **US$9 monthly**, or **US$7.50/month billed annually**, subject to change.

Official evidence:

1. [Features, clearly labelled Current vs Planned](https://www.legendkeeper.com/features/) — maps, unlimited wiki/project structure, rich article layouts and tables, auto-linking, page templates, timeline calendar/Gantt, boards, nested atlas, sharing and collaboration, offline browser caveats.
2. [FAQ and price/Basic distinction](https://www.legendkeeper.com/pricing/) — ongoing subscription required for creating/editing own projects; no one-time licence.
3. [Current help hub (updated 26 October 2026)](https://www.legendkeeper.com/help/) — inline fact/property blocks, auto-link, imports from Markdown/HTML/JSON/**Obsidian/World Anvil/LegendKeeper**, and the actual scope of player secrets, chat, dice, restoring old versions.
4. [Maps help, updated 26 October 2026](https://www.legendkeeper.com/help/maps/) — actual live **paths, drawn territorial regions, labels, ruler and travel navigation**.
5. [January 2026 map launch](https://dev.legendkeeper.com/the-new-legendkeeper-map-tool-is-here/) — added path/region drawing, calibrated area and perimeter, drawn routes, zoom-aware annotation styles, route finding and **travel time based on user-set travel speed**.
6. [Project organization/export](https://www.legendkeeper.com/help/organizing/) — entire-project portability plus page-level export as Markdown/HTML/JSON/LegendKeeper files, import external formats, page nesting, tags, search and restore/Trash.
7. [Official v0.20.0, 12 October 2026](https://www.legendkeeper.com/changelog/legendkeeper-0-20-0-1/) — **read/write developer API and TypeScript SDK** shipped; paid plan required. Also media import and offline-load fixes.
8. [Official v0.21.0, 27 October 2026](https://www.legendkeeper.com/changelog/legendkeeper-0-21-0/) — **project chat**, activity feed, 'View As' player, complex notation/3D multiplayer dice with check requests and live result lists, snapshot/diff/restore for page, board, map and timeline tabs, with **90-day** automatic server version retention.
9. [SDK reference](https://www.legendkeeper.com/developers/sdk/documents/) — per-project token/paid-owner requirement for API.

**Important correction for near-100%-accurate comparison:** Its general Features webpage still lists **region drawing** in a **planned Atlas improvements** bullet, but authoritative release documentation dated **January 2026** and a fresh **October 2026 help centre** show drawn regions and paths are already **shipped**. So **polygons/regions, paths, calibrated distance and route duration are Y**, not F. The *separate* feature of **toggleable uploaded image layers** was not verified as shipped and is still described as planned. Its broad 'procedural generation tools' entry remains aspirational, without evidence of a live map generator. Never conflate those.

**Current documented capability:** freeform wiki with templates, rich tables, labelled properties and progress meters; two-way page/world connection via mentions and bulk auto-links, rich multi-pane previews; embedded maps, nested maps, region outlines, path-calibrated travel planning; timeline/Gantt and custom fantasy calendar; infinite boards and relationship flowcharts; offline browser editing; real-time collaborators and role-restricted secrets; public read-only views; 2026 project chat, live dice engine and version history; portable exports, cross-tool imports and paid API.

**Boundary details:** LegendKeeper's browser cache is **not an ordinary file-based local vault**. Uploading new images or maps requires internet, private/incognito browsing does not support offline mode, and clearing browser data before a sync can lose unsynchronised edits. A label-value Properties block is not confirmed to provide arbitrary typed schema validation or computed attributes; manual relationship boards are not automatic kinship/diplomacy graphs. **Page versions auto-expire after 90 days**. The **API is current, but paid**, while example Discord bots and VTT integrations in the API announcement were developer possibilities **not shipped first-party integrations**. Full-fledged RPG character sheet/ruleset automation was not established.

#### 6. Kanka — https://kanka.io/

**Classification:** directly relevant collaborative TTRPG world/campaign wiki with extensive typed entities, object relationships and calendars, browser-based, **free unlimited core campaigns** and paid Premium Campaigns. The vendor’s premium page quotes **starting at US$4.99 per month**. There is no native dedicated mobile app; the site is designed to be responsive on smaller screens.

Official evidence:

1. [Feature list](https://kanka.io/features) — free campaigns, around 20 native entity categories, character/location/organisation/item/quest journals, permissions and role previews, interactive maps, timeline, custom calendars, inventory/ability systems, derived properties, paid visual relationships/family trees, custom themes/plugins and webhooks.
2. [Kanka overview/docs](https://docs.kanka.io/en/latest/overview.html) — entity links/relations, image/PDF/file assets, recurring calendar events, moons/seasons/weather/intercalary dates, multiple calendars, daily campaign exports and REST API.
3. [Properties system](https://docs.kanka.io/en/latest/features/properties.html) — **text, checkbox, paragraph, number, sections**, reusable property kits, randomly assigned lists/ranges and formulas referencing other properties. Numeric arithmetic can drive stats/HP; private properties are admin-only.
4. [Premium benefits and limits](https://kanka.io/premium) — custom categories **0 free / 5 premium / 10 Wyvern / 20 Elemental** at time reviewed, tier-dependent member/storage restrictions, family trees, relation explorer, character sheet plugin/theme controls and advanced dashboards, restore-deleted for 30 days and audit logs. Premium access is per designated campaign, not a universal unlock for all campaigns.
5. [Custom category release (v3.0)](https://blog.kanka.io/2025/02/19/version-3-0-custom-modules/) — new types shipped in **2025** for premium accounts. The older [docs entry overview](https://docs.kanka.io/en/latest/entries/overview.html) still says custom entry types are impossible, **now superseded**.
6. [October 2026 developer update](https://blog.kanka.io/2026/10/26/nine-years-of-kanka/) — **per-category always-on custom typed fields** are a stated *future ambition*, not completed by existing custom category/property-kit controls. The maintainers explicitly state Kanka **does not currently offer AI-generated content features**. Do not use that same post's commercial-user statistics here; those belong to later success research.
7. [Calendar structure](https://docs.kanka.io/en/latest/entries/calendars.html) — parent/child calendars, remote eras, auto-advancing day, custom formatting, reminders. [Calendar dashboard limits](https://docs.kanka.io/en/latest/guides/dashboard.html) warn very complex recurrences can limit accurate upcoming-event widget previews.
8. [Campaign export](https://docs.kanka.io/en/latest/features/campaigns/export.html) — whole-campaign ZIP as **JSON (restorable)** or Markdown (**not restorable**) no more than once daily; admin-initiated, available for downloading for 120 minutes.
9. [Campaign import](https://docs.kanka.io/en/latest/features/campaigns/import.html) — **JSON restore restricted to Wyvern/Elemental subscribers**; imported data *omits* some categories such as **permissions, family trees, dashboards, plugins and custom theming**. Reimporting twice creates duplicates. [CSV import](https://docs.kanka.io/en/latest/features/campaigns/csv-import.html) is a different bulk-entry tool.
10. [Official REST API](https://kanka.io/developers) — read/write world data through API; plugin marketplace and editable character-sheet styles are governed by paid campaign access.
11. [UI languages](https://kanka.io/about) — community-translated UI including English, French, Spanish, Brazilian Portuguese, Polish, German, Italian, Russian and Slovak; [appearance docs](https://docs.kanka.io/en/latest/account/appearance.html) explain per-user interface language.
12. [Kanka FAQ](https://kanka.io/kb) — no dedicated native mobile app; system-agnostic philosophy with community plugins rather than a hardcoded set of D&D/CoC rulesets.

**Current documented capability:** deeply structured entry types and custom paid types; reusable typed property kits with simple formulas; private/public entity, article, relation and attribute permissions with role previews; all-entry inventory/abilities/charges; quests and journals; very flexible calendars, recurrences and historical timelines; uploaded map layers/pins; paid family-tree visualisations and relationship explorers; multiplayer campaign dashboards, API, marketplace character-sheet plugins, themes and webhook automation; daily ZIP export.

**Boundary details:** A **custom entry type** is current and paid; **a schema template requiring particular typed fields for every instance of that type** is **not yet shipped**, per October 2026 developers' post. Properties can be applied from kits, so call this **partial schema support**, not all-or-nothing. Maps are primarily imported images with lore-linked interactive annotations, not proven built-in cartographic generators. The full export is not a byte-perfect backup of *every* feature, and its restore/import is an **upper-tier paid** capability. Recurring moon-phase event widgets can be approximate/omitted in their near-future preview, even if core calendar event support exists. System-specific character sheets rely in part on **paid plugins/community content**, not necessarily built-in D&D automation. The vendors report no integrated AI tools. User accounts and campaign work are server-hosted; there is **no independently verified full offline edit mode**.

### Provisional Batch 2 feature-design watchlist, **not yet validated WBW gaps**

These items remain hypotheses only until the WBW repository/launch baseline and all 33 competitors have been checked:

1. **Calendar depth:** recurring lunar/seasonal events, linked calendars, per-cultural date formats, intercalary days, optional continuous week handling across eras (Campfire, Kanka, LegendKeeper).
2. **Map operations:** drawing polygons and snapping shared territory borders, calibrated distance, **automatically calculated fastest routes** over paths and travel speeds (especially LegendKeeper), Inkarnate linked live map updates (Campfire).
3. **Entity structure:** configurable formula/derived attributes, reusable typed kits, cross-entry inventories with abilities and usage charges (Kanka); property/infobox/meter elements (LegendKeeper).
4. **Collaboration & role-play:** simultaneous editing, granular viewer secrecy, 'View As player', project discussion/chat, dice requests with shared result lists, version comparisons and partial restores (LegendKeeper), campaign role-specific dashboards (Kanka).
5. **Import/export:** full owner-controlled project export, cross-app Markdown/Obsidian/World Anvil imports (LegendKeeper); per-entry DOCX/HTML plus project backups (Campfire); transparent warnings about incompleteness and paid restore (Kanka).
6. **Author ecosystem:** dedicated manuscript editor, PDF/EPUB formatting and selling/publishing integration, goal tracking and visual plot arcs (Campfire).
7. **Device and reach:** real web/desktop/mobile parity where practical, offline boundary labelling, accessible localisations, API/SDK for external integrations.

**No WBW feature or roadmap item is confirmed missing, planned, or prioritised on the strength of Batch 2 alone.**

### Outstanding Batch 2 verification questions

- **Campfire:** verify precise licensing/pricing for complete 18-module lifetime bundle and how synchronised project backups are represented; inspect whether all editor panels are schema-typed or mostly presentational; verify any ruleset/statblock automation and AI claims before assigning N.
- **LegendKeeper:** verify whether any arbitrary real image-map layers actually shipped after the stale feature-page roadmap; confirm limits of multi-project whole-world export, custom template/properties field types, and long-term unsynced offline security. Use v0.21+ product documentation, not an old Beta-only features table.
- **Kanka:** verify exact premium tier for custom entity categories, parent map relations/polygons, import/export completeness, and the shape of reusable property kits; assess campaign permissions for sharing entire sets of entries. Documentation is partially stale after v3.0.
- **All three:** perform hands-on evaluation where accounts/trials are available without unapproved purchases; tag untested UX details. Defer adoption, reviews, revenue and commercial success to separate research.

---

## Batch 3: Notebook.ai, Fantasia Archive, Lore Forge

**Evidence checked:** current vendor websites, first-party documentation, original developer release notes, GitHub repositories and versioned development statements as available on **6 November 2026**. Special identity and version checks were necessary: Fantasia Archive's public **v1 release 0.1.15** must not be confused with the unshipped v2 rewrite, and **Lore Forge** here means the writing/worldbuilding app at **loreforge.com**, not similarly named AI services. No paid account, local installation or hands-on acceptance testing was undertaken. Competitor commercial performance and user reviews remain deferred.

### Comparable feature matrix (Batch 3)

The same feature definitions and **Y / P / G / N / F / U** legend used in Batches 1–2 apply. **G** means a verified premium-only feature, **P/G** means a limited related capability behind payment, **U is not No**, and WBW remains unaudited. For Fantasia Archive, only the publicly downloadable **v1.0.1.15** family is counted as current, not publicly unshipped v2 progress demonstrations.

| Category | Capability | Notebook.ai | Fantasia Archive v1 | Lore Forge | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | N | Y | Y | — |
| Platform | Edit entire world offline | N | Y | Y | — |
| Platform | Local user-controlled world files | N | Y | Y | — |
| Platform | Vendor-hosted cloud world storage | Y | N | G | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | N | N | U | — |
| Platform | Ongoing free account tier | Y | Y | Y | — |
| Structure | Structured lore/entry type templates | Y/G | Y | Y | — |
| Structure | Fully arbitrary schema/field definitions | P | P | P | — |
| Structure | Editable reusable entry prompts | Y | Y | G | — |
| Onboarding | Guided question-based world creation | P | U | U | — |
| Editing | Rich-text article editing | Y | Y | Y | — |
| Editing | Images embedded within entries | Y | Y | Y | — |
| Editing | PDF document viewing alongside notes | U | U | U | — |
| Editing | Tables inside editor or wiki content | U | U | Y | — |
| Editing | Split/multicolumn working panels | U | P | P | — |
| Linking | Cross-article wiki links/mentions | Y | Y | Y | — |
| Linking | Backlinks/auto-discovered relationships | Y | Y | U | — |
| Linking | Visual relationship graph | U | P | Y | — |
| Organisation | Categories/hierarchy/tags | Y | Y | Y | — |
| Organisation | Search across lore | Y | Y | Y | — |
| Characters | Automatically generated family trees | P | F | U | — |
| Factions | Interactive diplomacy/organisation webs | P | F | P | — |
| Time | User-defined calendar systems | U | F | U | — |
| Time | Recurring calendar events | U | U | U | — |
| Time | Event/history timelines | G | F | P | — |
| Time | Historical events shown geographically on maps | U | U | U | — |
| Maps | Import/upload map image | P | P | P | — |
| Maps | Native procedural terrain generation | U | U | U | — |
| Maps | Native procedural city generation | U | U | U | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | U | F | U | — |
| Maps | Nested/interconnected interactive maps | U | F | U | — |
| Maps | Toggleable image/map layers | U | U | U | — |
| Maps | Political borders/territory polygons | U | U | U | — |
| Maps | Draw roads/routes on map | U | U | U | — |
| Maps | Calculate distance and travel time | U | U | U | — |
| Maps | Map labels synchronise automatically from wiki entries | U | U | U | — |
| RPG | Campaign/plot management | P | P | Y | — |
| RPG | Session preparation, session notes or reports | P | P | P | — |
| RPG | Integrated RPG character sheets | U | P | P | — |
| RPG | Creature/NPC statblocks | U | P | P | — |
| RPG | Built-in support for multiple game systems | U | P | U | — |
| Visibility | Hide GM/private secrets | P | U | U | — |
| Visibility | Publish or share player-readable world pages | Y | P | U | — |
| Visibility | Granular reader/subscriber permissions | P | U | U | — |
| Collaboration | Invite coauthors or collaborative editors | Y | U | U | — |
| AI | Integrated lore-writing AI | P/G | U | U | — |
| AI | Integrated AI image generation | U | U | U | — |
| Generation | In-product heraldry design/generation | U | U | U | — |
| Generation | In-product character portrait generation | U | U | U | — |
| Export | Portable whole-world backup/export | Y | Y | Y | — |
| Export | Editable Word export and reimport | U | F | P | — |
| Export | Compiled world/codex as PDF | U | P | U | — |
| Writing | Dedicated novel/manuscript tool | Y | U | Y | — |
| Accessibility | Multiple localised UI languages | U | U | U | — |
| Accessibility | UI font/readability/colour accessibility controls | P | Y | Y | — |

**Interpretations important to downstream use:**

- **Notebook.ai `Y/G` for structured types:** the three basic *types* (character, location, item) are free, with more specialist types Premium. The phrase '3 core worldbuilding pages' on the new pricing page means three *page types*, **not three individual pages**. Its Premium '29 types' count is the site's own marketing count, and categorisation/counts should be reconciled before a published tier-by-tier chart.
- **Fantasia Archive `Y` for free:** this is free **open-source software**, not an account-based free cloud tier. `N` for one-time *purchase* means the program is free, not that a subscription is needed. Its `P` for map image means **an image can be embedded as document art**, not that an interactive map editor was verified. `F` denotes the developer's explicitly planned family/relationship graphical views, calendar/timeline and map-pins ideas that were **not evidenced in the v1 release notes**; some v2 implementation may be more advanced, but not yet the public product.
- **Lore Forge `Y` for free:** free native desktop editing is unlimited, with **no initial charge**; the Pro recurring tier offers web/mobile-browser access, hosted online projects and sync. `G` cloud means that specific **additional Pro** capability. `P` Word export/reimport means **DOCX export is confirmed** but DOCX import/roundtrip is not. `P` timelines refers to ordered **story plot beats/chapter summaries**, not a fantasy calendar or historical timeline.
- **No product is marked `N` solely because a feature was not listed on its public site.** Significant uncertain rows remain deliberately `U` pending demos/source inspection; this batch must not be used as a categorical absence list.

### Comparative feature extensions found in Batch 3

| Additional capability | Notebook.ai | Fantasia Archive v1 | Lore Forge | WBW |
|---|:---:|:---:|:---:|:---:|
| Worldbuilding prompts adapt to the specific entry and save answers into its fields | Y | U | U | — |
| Template-field changes propagate to all entries of that same type | Y | U | U | — |
| Reciprocal kinship and organisational fields maintained automatically | Y | Y | U | — |
| Ability to completely export whole notebook as alternate data formats | Y | P | U | — |
| Premium document-level stylistic/readability/emotion AI **analysis**, not generation | G | U | U | — |
| Public reader access configurable per entry/universe | Y | U | U | — |
| All universe collaborators inherit owner's paid page-type access | Y | U | U | — |
| Fully free native offline desktop worldbuilding (no premium licence) | N | Y | Y | — |
| Custom CSS styling of individual worlds/projects | U | Y | U | — |
| Custom embedded image editing within rich-text documents | U | Y | Y | — |
| Interactive manually arranged, directed entity relation graphs | U | U | Y | — |
| Local managed automatic project backups including raw story JSON | N | U | Y | — |
| Series management: multiple stories within one shared world/project | P | P | Y | — |
| Novel structure beat-sheet templates, including editable custom arcs | U | U | Y | — |
| Plot beat and individual chapter/scene references crosslink automatically | P | U | Y | — |
| Narrative setup/payoff thread tracking across scenes | U | U | Y | — |
| Transform a note into a manuscript scene and back | U | U | Y | — |
| Local data folder selectable by user | N | Y | Y | — |
| Native editor word count and per-story editor themes | U | U | Y | — |

### Vendor evidence, limitations and version corrections

#### 7. Notebook.ai — https://new.notebook.ai/

**Classification:** hosted/browser creative worldbuilding notebook with rich entry relationships and an integrated document editor; **free Starter** plus **Premium**. Current vendor list: Starter has up to **five universes**, unlimited characters/locations/items and written documents, and a **50 MB image allowance**. Premium has unrestricted universes, more specialised page types, up to **10 GB images**, timelines, collaborative collections and document AI analysis, priced at **US$9 monthly / $24 quarterly / $84 annually** at review time. Pricing is a snapshot, not commercial success analysis.

First-party evidence:

1. [Current landing, pricing and tier comparison](https://new.notebook.ai/) — free-versus-Premium page types, quotas, timelines, collections, AI document analysis, all payment options.
2. [Official roleplayers' guide](https://new.notebook.ai/for/roleplayers) — automated writing questions; template-field changes automatically reflected in all same-type pages; reciprocal two-way page/parent-child/group relationships; page/universe privacy; collaborative universe editing with edit logs; full-notebook export in several formats.
3. [Original roleplayers' detailed guide](https://www.notebook.ai/for/roleplayers) — uploaded *map images* appear on location pages; automatically mirrored spouse/parent-child and group affiliations; public/private page and universe toggles; private pages can be withheld from player readers. It is **not evidence of a pin-based map editor or a drawn genealogical chart**.
4. [Official items and writing document features](https://new.notebook.ai/worldbuilding/items) — integrated linked document writing, global search, prompted field answers, source-linked timeline/collection/document references, page-level commenting and sharing, editor light/dark mode, unlimited free universe collaborators.
5. [Original vendor overview](https://www.notebook.ai/) — extensive list of premium page categories; document-level stylistic AI (readability, emotion, structure), not automatically generative story text.
6. [Developer-run historical format announcement](https://medium.com/indent-labs/the-next-version-of-notebook-ai-is-here-62470d0bda19) — confirms whole-notebook export to outline, CSV, XML and JSON at that point; current official roleplayers' guide still promises several formats, but exact current supported output extensions require a live export check.

**Confirmed scope:** predefined lore page types with **customisable per-type fields**; on-the-fly question suggestions that populate existing page records; automatically created reverse links for families, places and groups; private and shareable public pages, owner-selected universe collaborators; linked browser-based writing documents; search, user art, light/dark themes; whole-notebook data export; Premium-only timelines/collections and AI feedback about written documents.

**Important boundaries:** **Automatically maintained family relationships are not proof of a rendered auto-layout family-tree diagram.** Notebook.ai's AI service **analyses** existing documents but official sources reviewed do not establish the same kind of AI-assisted grounded content *generation* WBW plans. “Fully customisable templates” establishes flexible common fields, but not complex typed schema definitions with arbitrary validators or conditional form layouts. Timeline creation is Premium; do not imply it's in Starter. Notebook's map imagery is **static uploaded location art**, not demonstrated interactive map pins, polygons or generated terrain. The document editor is a writing workspace, not evidence of a dedicated structural manuscript compiler with chapter-level goal management. Collaboration is whole-universe with owner-approved invitees rather than per-field roles; paid-plan privileges extend to those collaborators. Exports should be acceptance-tested for completeness.

#### 8. Fantasia Archive — https://github.com/vishiri/fantasia-archive-v1

**Classification:** free, GPL-3.0, local/offline desktop worldbuilding database for **Windows and Linux**, with older **macOS builds** available through the creator's download listing. The **last public v1 release is 0.1.15 (12 January 2025)**. Do not equate source updates in the separate **Fantasia Archive 2.0** development repo with a downloadable current feature, or assume the `.faproject` SQLite design from the rewrite is the storage engine of v1.

First-party evidence:

1. [Current v1 source and user-facing app description](https://github.com/vishiri/fantasia-archive-v1) — v1 document blueprints, Electron/Quasar native desktop source, GPL licence, locally built app.
2. [Actual v1 release list and changelogs](https://github.com/vishiri/fantasia-archive-v1/releases) — **0.1.15** released Jan 2025, styling and accessible-scrollbar improvement in v0.1.14a, full-page search and keyboard/editing improvements in v0.1.14, **custom CSS, WYSIWYG image embedding and PDF image export** in v0.1.13, and recurring document-save/open and `@` linking issues explicitly documented. Note the creator says v0.1.15 **did not have a newly built macOS release**, but older builds are available; [creator's official distribution listing](https://cartographyassets.com/assets/10089/fantasia-archive/) later lists a Mac download.
3. [Developer's v0.1.7 announcement](https://www.patreon.com/vishiri/posts/release-fantasia-51567321) — native Markdown/PDF export, field and relationship forms (including multi-RPG stat fields), generation of linked entries straight from a relationship picker, quick previews, advanced text/field searches and project graph legend fixes.
4. [Developer's v0.1.8 announcement](https://www.patreon.com/vishiri/posts/release-fantasia-53375183) — pre-filled **document templates**, per-document export formatting and reverse relationship improvements; this is **not** an arbitrary user-editable *type schema*.
5. [Developer's v0.1.13 release discussion](https://www.patreon.com/vishiri/posts/release-fantasia-101821664) — documents can now include WYSIWYG images, with known v1 limitations, per-world CSS.
6. [v1 suggestions and unfinished-feature record](https://github.com/vishiri/fantasia-archive-v1/blob/master/suggestionList.md) and [developer's stated roadmap](https://www.patreon.com/vishiri/posts/current-fantasia-47464579) — custom user-defined field/module types, DOCX/ODT export, calendar/timeline, interactive map pins and auto-generated family/relationship webs proposed as **future**, not substantiated as 0.1.15 shipping features. Old roadmap is **aspirational**, so `F` should be revisited if a release post supplies contrary evidence.
7. [Developer's 2026 rewrite progress report](https://www.patreon.com/vishiri/posts/fa-development-166850859) and [v2 development GitHub repository](https://github.com/vishiri/fantasia-archive) — as of the reviewed statement, significant v2 functionality still needed for a usable *public alpha/beta*. Project storage as a modern `.faproject` SQLite file, dynamic typed form templates, richer styling, settings/translations shown in v2 work should **not** be assigned to v1.

**Confirmed v1 scope:** wholly local desktop projects, many predetermined worldbuilding entry kinds and hierarchical categories, prefilled templates, native rich text and inserted images, `@` document linking, reciprocal relationships, advanced search including field search, document preview, multiple rearrangeable editor tabs, world CSS, note/overview visual elements, multi-RPG custom stat fields, and native Markdown/PDF **document exports**. Local project load/save establishes portable working project data, but exported Markdown/PDF is a separate *lossy presentation* format and need not round-trip perfectly.

**Critical corrections:** A **project overview graph** in release notes is not necessarily a **graph of relationship edges**. A complex kinship/relationship graph was separately described as a *future* feature, so this matrix records only partial visual linkage. Image insertion is not an interactive cartographic atlas. Static Markdown/PDF world pages can be shared with someone but **cannot be called authenticated player-facing sharing**. The older codebase has some reported data-save and link-popup issues; no test was performed here. Full custom typed schema editing, custom calendar/event engine, Word/DOCX roundtrip, procedural map generation and player permission filters remain unverified or historical roadmap concepts, not current strengths.

#### 9. Lore Forge — https://loreforge.com/

**Classification:** directly adjacent local-first *worldbuilding plus novel/series writing* product. Current official **v1.2.4** docs/downloads describe a **free, unlimited offline desktop app** (Windows, macOS, Linux), a **user-selected local folder**, plus optional **Pro at US$5.99 per month** for browser/mobile-ready access, hosted projects, auto device synchronisation, editor Zen mode and more advanced custom templates/theme controls. There is **no one-off purchase requirement** for the free desktop edition. Do not confuse this developer/product with a similarly named generative-AI tool elsewhere.

First-party evidence:

1. [Current product and pricing](https://loreforge.com/) and [official plan comparison](https://loreforge.com/pricing) — desktop free, locally saved projects, automated backups, DOCX export, all major lore modules; paid mobile-ready web app/cloud, synced projects, cross-device access, customised project menu, custom templates and scene background art.
2. [Download and versioned changelog](https://loreforge.com/download) — **v1.2.4** added tables in writing editor, managed backup scheduling, entity cloning/importing from another project, reconfigurable node sizes/colours/edges, summary folding, per-story themes, editor word counts, and improvements to story export settings.
3. [Project/local storage and backups guide](https://loreforge.com/docs) — prompts users to set a **local world data folder**, references separate story and lore entities, and specifically states that project backups are **ZIP archives containing raw JSON plus story data**, unlike rendered document/story exports. Do not manually alter the internal project directory.
4. [Characters guide](https://loreforge.com/docs/characters) — preset major/minor character category forms, optional added descriptive tabs, and arbitrary **custom character stat/name-value entries**. These do not establish full typed arbitrary schemas or D&D rules automation.
5. [Templates guide](https://loreforge.com/docs/templates) — **Pro-only** editing of reusable Details/Stats starters, including reordering and pre-populated stats, applied to newly created entities. The normal preset categories/tabs exist in the free edition.
6. [Relations/graph guide](https://loreforge.com/docs/graphs) — **directed, manually edited graph** of entities with editable edge labels, node/edge styling, grouping and pan/zoom; unlike Notebook.ai's reciprocal fields, these graph edges are user-made, not automatically inferred genealogy.
7. [Plot structures and beat tracking](https://loreforge.com/docs/plot) — Hero's Journey, Save the Cat and other presets, plus fully custom beat sheets, multiple plotlines with chapter/scene links and indicator highlights.
8. [Summaries/threads guide](https://loreforge.com/docs/summaries) — bird's-eye chapter/scene summaries, setup-and-payoff plot threads; [Notes guide](https://loreforge.com/docs/notes) supports tag editing, pinning, image-bearing notes and **one-click converting notes to scenes**.
9. [Cultures guide](https://loreforge.com/docs/cultures) — deep worldbuilding fields and culture-specific viewpoints; [organisations guide](https://loreforge.com/docs/orgs) — interconnected faction/group info.

**Confirmed scope:** rich story-oriented entries for people, locations, items, species, cultures, organisations, technologies/magic and notes; linked references in a sidebar; manually arranged directed relationship graphs; free offline writing editor with tables, thumbnails, variable themes and word count; multiple stories in one lore project, ordered chapters/scenes, plot-beat templates, chapter/scene reference integration, note-to-scene conversion and scene-level narrative thread tracking. On the data side, local JSON world projects, managed whole-project ZIP backups and DOCX story export are confirmed. Pro adds sync, cloud access and editable reusable field templates.

**Boundary details:** story plot beats **are not a custom world calendar or historical event timeline**. Local structured `custom stats` are **not** a demonstrated full schema/form builder. DOCX **export** does not prove DOCX **reimport**. Pro online storage does not prove collaborative shared editing or public/permissioned world publishing. Location art and hierarchical geography are not an interactive map editor with pins and layers. No first-party claim for built-in procedural terrain generation, RPG ruleset automation or AI-generated lore/images was found in these reviewed sources; those cells therefore stay **U, not N**. The vendor advertises 'all features unlimited' for free desktop yet explicitly lists certain Pro-only customisation and hosted functions; **the tier table takes precedence for those individual gates**.

### Provisional Batch 3 feature-design watchlist, **not yet validated WBW gaps**

1. **Template intelligence:** Notebook.ai's questionnaire prompts **populate the right editable schema field** and automatically adapt to facts already entered. Changes to a standard type's fields propagate to existing records. Lore Forge adds editable default values and starter field sets behind Pro. Do not assume WBW lacks either until its schema editor and proposed World Builder quiz are inspected.
2. **Bi-directional model integrity:** reciprocal parent/child, spouse, group, territorial hierarchy, alliance/rivalries with automatic reverse-edge updates (Notebook.ai and Fantasia Archive). This may have a higher day-to-day value than an impressive but manually maintained graph.
3. **Writer workflow:** multiple interlinked stories per world, classic structural beat sheets and *custom* plot templates, scene-level viewpoint/cast/place references, setup/payoff thread tracing, convert a lore note into a prose scene, and per-story editor preferences (Lore Forge).
4. **Self-contained local backup and autonomy:** full raw-data backups, user-selectable data folders, deterministic export vs editable source distinctions (Lore Forge, Fantasia Archive), plus several machine-readable notebook export formats from a hosted tool (Notebook.ai).
5. **Low-friction relationships:** simple drag/label directed graph authoring, sidebars that keep character/place/item references accessible while drafting (Lore Forge).
6. **Gentle AI differentiation:** Notebook.ai offers AI **analysis of a user's existing prose**, separate from generating text; compare that to WBW's grounded creation assistance only if both workflows fit the product.
7. **Accessible no-upfront-cost offline competition:** Fantasia Archive and Lore Forge's free local clients set a usability/ownership bar. This is product positioning, **not** evidence of customer success or pricing preference.

**No WBW feature or roadmap item is confirmed missing, planned, or prioritised on the strength of Batch 3 alone.**

### Outstanding Batch 3 verification questions

- **Notebook.ai:** manually confirm present-day full-notebook export formats/completeness; differentiate custom field *types* from renamed free-text fields; check whether any timeline/collections public views, family-tree diagrams or map pins actually ship; establish whether AI analysis is included in all Premium terms.
- **Fantasia Archive:** install latest v1 on Windows/Linux to inspect project file formats, native template/field editing boundaries, relationship overview graph (counts vs relations), custom CSS and PDF project-level export. Confirm actual available macOS binary independently of the 2025 Github note. Treat the 2026 v2 development demonstrations separately until a signed public beta exists.
- **Lore Forge:** test the whole-project JSON/ZIP restore path, DOCX export and possible import, template field data typing, cross-project entity duplication, Pro sync ownership/privacy, and true scope of relationship graph cross-entry semantics. Review current version after v1.2.4 if a later changelog appears.
- **All three:** source research is **not** hands-on acceptance testing. Do not treat `U` as absence, or convert an adjacent feature (`P`) to equivalence without demonstrating its details. Revenue, sentiment and promotion analysis are reserved for the later success audit.

---

## Batch 4: ChronoGrapher, Realm Works, Obsidian Portal

**Evidence checked:** vendor feature pages, dedicated guides, pricing and account tiers, first-party knowledge bases, software support statements and developer-published export/import explanations as accessible **6 November 2026**. Special care was taken to distinguish **ChronoGrapher's closed-alpha browser editor using the user's Google Drive** from a native offline program, **Realm Works' desktop licence** from its optional server subscription and suspended feature development, and **Obsidian Portal's free public campaign wiki** from Ascendant-only functions. No Patreon membership purchased, Realm Works installed, or live account feature acceptance tests conducted. Success, sentiment, and marketing audits remain out of scope.

### Comparable feature matrix (Batch 4)

Identical rows to earlier batches. **Y** vendor-documented feature; **P** incomplete or related functionality; **G** an expressly paid-tier-only feature; **N** ruled out by official documentation/product operation; **F** proposed but not shipped; **U** unverified, not absent; **—** WBW is pending its independent baseline audit. Combined symbols such as `P/G` preserve both the limitation and pricing gate. A native desktop app must actually be installable; access via a desktop browser does **not** qualify. Obsidian Portal's calendar for arranging *real-world game sessions* does **not** count as a fictional-world calendar.

| Category | Capability | ChronoGrapher | Realm Works | Obsidian Portal | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | N/F | Y | N | — |
| Platform | Edit entire world offline | N | P | N | — |
| Platform | Local user-controlled world files | P | P | N | — |
| Platform | Vendor-hosted cloud world storage | N | G | Y | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | N | Y | N | — |
| Platform | Ongoing free account tier | N | N | Y | — |
| Structure | Structured lore/entry type templates | P | Y | P | — |
| Structure | Fully arbitrary schema/field definitions | P | Y | P | — |
| Structure | Editable reusable entry prompts | Y | Y | P | — |
| Onboarding | Guided question-based world creation | N | U | U | — |
| Editing | Rich-text article editing | Y | Y | Y | — |
| Editing | Images embedded within entries | Y | Y | Y | — |
| Editing | PDF document viewing alongside notes | U | U | U | — |
| Editing | Tables inside editor or wiki content | Y | U | P | — |
| Editing | Split/multicolumn working panels | P | P | U | — |
| Linking | Cross-article wiki links/mentions | Y | Y | Y | — |
| Linking | Backlinks/auto-discovered relationships | U | Y | Y | — |
| Linking | Visual relationship graph | P | P | U | — |
| Organisation | Categories/hierarchy/tags | Y | Y | Y | — |
| Organisation | Search across lore | Y | Y | P | — |
| Characters | Automatically generated family trees | U | U | U | — |
| Factions | Interactive diplomacy/organisation webs | U | U | U | — |
| Time | User-defined calendar systems | Y | U | U | — |
| Time | Recurring calendar events | Y | U | U | — |
| Time | Event/history timelines | Y | P | P | — |
| Time | Historical events shown geographically on maps | Y | U | U | — |
| Maps | Import/upload map image | Y | Y | Y | — |
| Maps | Native procedural terrain generation | U | U | U | — |
| Maps | Native procedural city generation | U | U | U | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | Y | Y | Y | — |
| Maps | Nested/interconnected interactive maps | Y | P | U | — |
| Maps | Toggleable image/map layers | Y | P | U | — |
| Maps | Political borders/territory polygons | P | U | U | — |
| Maps | Draw roads/routes on map | P | U | U | — |
| Maps | Calculate distance and travel time | U | U | U | — |
| Maps | Map labels synchronise automatically from wiki entries | P | U | U | — |
| RPG | Campaign/plot management | P | Y | Y | — |
| RPG | Session preparation, session notes or reports | P | Y | Y | — |
| RPG | Integrated RPG character sheets | U | P | Y | — |
| RPG | Creature/NPC statblocks | P | Y | P | — |
| RPG | Built-in support for multiple game systems | U | Y | P | — |
| Visibility | Hide GM/private secrets | P | Y | G | — |
| Visibility | Publish or share player-readable world pages | G | G | Y | — |
| Visibility | Granular reader/subscriber permissions | P/G | G | P/G | — |
| Collaboration | Invite coauthors or collaborative editors | G | U | G | — |
| AI | Integrated lore-writing AI | U | U | U | — |
| AI | Integrated AI image generation | U | U | U | — |
| Generation | In-product heraldry design/generation | U | U | U | — |
| Generation | In-product character portrait generation | U | U | U | — |
| Export | Portable whole-world backup/export | P | Y | P | — |
| Export | Editable Word export and reimport | U | U | U | — |
| Export | Compiled world/codex as PDF | U | U | U | — |
| Writing | Dedicated novel/manuscript tool | U | U | U | — |
| Accessibility | Multiple localised UI languages | U | U | U | — |
| Accessibility | UI font/readability/colour accessibility controls | U | U | P/G | — |

**Classification caveats:**

- **ChronoGrapher:** Browser-based closed alpha, requires Google Drive for primary project storage; it says explicitly it cannot work offline, and a desktop version is *planned*. `P` local control is **ownership of Google Drive project contents**, **not** a locally stored open-format desktop world. The hosted vendor does not store the world. The Alpha is Patreon-supported; an ongoing generally available free creator tier is not established, notwithstanding a demo/playground and limited trial. `P` entity graph refers to the **ChronoMapper visual graph of article properties and historical conditions**, not a proven entity-to-entity social graph. `P` map roads reflects manual painting of **road terrain tiles**, not a measured route-planning tool. Atlas territory masks/overlays can represent historical borders but require a **preprepared black-and-white segmentation image**. `P` wiki map-label sync reflects linked dynamic article properties and pins, not confirmation that *all* map labels automatically inherit every article rename. Mobile viewing exists; **map creation/editing requires desktop-sized browser view**.
- **Realm Works:** Windows desktop **GM licence $59.99** (includes 6 months server use plus one Player Edition); standalone **Player Edition $4.99**. Existing realms edit substantially offline, but **creating a new realm and initial activation require internet**. Local data is a managed database rather than user-selected loose world files. Server hosting, differential sync and Player Edition reveal depend on optional ongoing server access. Native **custom category/snippet/tag structure is confirmed** and substantially more flexible than a fixed form. `P` visual graph is an **adventure storyboard** rather than freeform relationships. `P` image layers represents Fog of World reveal/masking, not evidence of arbitrary image-layer authoring. **Developer halted feature development in 2019** and stated only limited maintenance; any historical intended calendars/other proposed features must **not** be treated as shipped.
- **Obsidian Portal:** Browser campaign site; **Basic** allows **two publicly visible campaigns**, **one uploaded interactive map** and **2 MB uploaded material per campaign**. **Ascendant US$5.99/month or $49.99/year** lifts limits to unlimited campaigns, **ten maps**, large uploads and grants custom CSS/theme, private/friends-only campaigns, player secrets, in-app group calendar, forums, page version restoration, co-GMs and dice roller. The **Ascendant calendar schedules real-life game sessions** with Google/iCal export, attendance/RSVP and reminders; it does **not** demonstrate in-world custom date systems. Community-made **Dynamic Sheet Templates** can use HTML, CSS and optional JS to define key/value character, item and wiki layouts, but are moderator-reviewed and not a generic GUI schema editor or guaranteed rules calculator. Its official campaign backup **stores data but does not recreate the identical site**. `G` for visual accessibility here refers to paid custom CSS/styling, *not* verified dedicated accessibility tooling. The official backlink index only includes `[[wiki links]]` (not raw HTML, map pins, forum or calendar links).
- Across all three, **`U` means an unproven capability, not a negative**. The matrix is comparable vendor-supported product research, not live feature testing. As with prior batches, it contains **no WBW gap assertion**.

### Comparative feature extensions found in Batch 4

| Additional capability | ChronoGrapher | Realm Works | Obsidian Portal | WBW |
|---|:---:|:---:|:---:|:---:|
| Store active world projects in the **creator's own cloud account** rather than the vendor's server | Y | N | N | — |
| Map creation/viewing across browser and mobile, with editing restricted by viewport | P | N | U | — |
| Wiki article **Blueprint** copied when a new page is created | Y | P | P | — |
| Live wiki **Template** transclusion updated wherever reused | Y | U | U | — |
| Auto-updating wiki lists from article tags and filters | Y | U | U | — |
| Wiki article properties calculated through node-based expressions | Y | U | U | — |
| Article properties, prose and maps respond to a historical time slider | Y | U | U | — |
| Multiple distinct **cultural calendars** with parent-child conversion/offsets | Y | U | U | — |
| Recurring in-world events with configurable interval, weekday and stop criteria | Y | U | U | — |
| World history rendered into **calendar and timeline views inside wiki entries** | Y | P | P | — |
| Infinite hand-painted hex-tile map with nested detail levels | Y | U | U | — |
| Import creator-supplied tile and location-icon artwork | Y | U | U | — |
| Atlas territory/culture/habitat overlays with time-varying regions | Y | U | U | — |
| Automatic clustering of map pins at crowded zoom levels | Y | U | U | — |
| Export visible map scene or chosen map region as an image | Y | U | U | — |
| Realm export in full reusable form and compact interoperability-oriented form | U | Y | U | — |
| Export only content already revealed to players | U | Y | U | — |
| Select a predesigned RPG system to preload a **customisable content structure** | U | Y | P | — |
| Automated mention-based content crosslinking while writing | Y | Y | P | — |
| Storyboard of linked scene/quest plot points | U | Y | P | — |
| Individual map/image/story text sections revealed gradually to players | U | Y | G | — |
| Real-world session calendar, Google/iCal syncing, invitations and RSVP | U | U | G | — |
| Wiki backlinks respecting logged-in reader visibility | U | P | Y | — |
| Restore previous wiki page revisions | U | U | G | — |
| Co-GM campaign editing with player versus GM permissions | G | U | G | — |
| Public campaign discovery and community browsing | U | U | Y | — |
| Moderated community-built game-system character sheet templates | U | U | Y | — |
| OAuth/API access to campaign records and pages | U | U | Y | — |
| Integrated in-browser RPG dice roller | U | U | G | — |
| Host campaign-specific forums and logged-in discussion | U | U | G | — |
| User-downloadable **partial campaign data backup** | P | Y | Y | — |

### Vendor evidence, limitations and lifecycle notes

#### 10. ChronoGrapher — https://chronographer.net/

**Classification:** browser-based world wiki, interactive atlas/hex maps and deeply integrated history engine, in a **closed alpha** available through Patreon supporters. Data is **kept in the creator's Google Drive** (not stored on the developer's backend), and the site states that it cannot yet be used offline. The developer has announced possible future desktop and additional cloud-provider support; neither counts as released. The official site calls the editor freeform, with "no forms, no questionnaires". A distinct mobile display exists but guide restricts map creation to a desktop viewport. The Patreon currently advertises a **Starter €4.50 monthly tier** plus higher levels, with trials/guest limits depending on membership; exact VAT and promotional availability vary.

First-party evidence:

1. [Product overview and closed-alpha sign-up](https://chronographer.net/info) — time-dependent maps and articles, user-owned Google Drive projects, Patreon-only alpha entry, external project sharing, mobile access, no offline.
2. [Core feature overview](https://chronographer.net/Info/Features) — automatic wiki tables of contents, user templates, tagged lists, article properties, visual maps, pins, time-dependent editing, and explicit exclusion of questionnaire-driven content entry.
3. [FAQ](https://chronographer.net/Info/FAQ) and [privacy policy](https://chronographer.net/Privacy) — browser product, Google Drive storage/account permissions, desktop future rather than current.
4. [Full official guides](https://chronographer.net/Info/Guides) — primary detailed specification: Blueprints copy page body once; `Template:` pages transclude live text; user custom calendars and cross-calendar conversions; historical timeline slider; `<calendar>` and `<timeline>` render events; intervals/weekday-aware repeats; automatic tag-filter lists; ChronoMapper dynamic wiki article properties; huge custom-tiled hex grids, hierarchical detail, linked map pins, map exports, and atlas-region overlay editor.
5. [Official Patreon membership page](https://www.patreon.com/ChronoGrapher/membership) — supporter tiers and Alpha access, rather than an ordinary perpetual free creative workspace.

**High-value verified distinctions:**

- **Time is part of the data model, not merely a chronological list.** Wiki article properties can change by selected date, and terrain, map borders and claimed territories can change across epochs. Calendars can have different month lengths, weekdays, ages and eras, and convert from parent calendars by offsets. Custom timelines support a time slider with configurable intervals. Markers, wiki excerpts, recurring events and page renderers can use those dates.
- The mapping system has two different editors: image-based **Atlas** with overlaid regions and linked location pins, and a hand-painted **hex-tile terrain grid**, with potentially unlimited horizontal extent and multiple levels of fine-grained tiles. Custom tilesets are imported from Google Drive; the official guide does **not** establish a random procedural terrain generator. Territory overlays do not accept arbitrary freely traced polygon geometry initially: setup requires a black/white region segmentation mask. Mark `P`, not full equivalent, for unconstrained polygon creation.
- `Blueprint:` pages are copied **at new article creation**; later edits to the Blueprint do not propagate. In contrast, `Template:` articles are rendered/transcluded and **do** update in every referencing page. Automatic lists query article tags. These are quite different reusable-information primitives, worth comparing separately to WBW's schema types.
- The **ChronoMapper** uses a visual node graph for *calculated properties*. Its graph-like appearance should not be mistaken for a social network or freeform entity-to-entity connection graph. Likewise, dynamic link and property references do not independently prove an auto-genealogy diagram.
- **Sharing:** users enable project sharing by granting wider Google Drive permission, then share a project folder. Reader/Viewer versus Collaborator roles exist; the developer says active subscribers can collaborate, while guests of a paying user can view for free. This is practical cross-user sharing but has **data access and paid-access restrictions** that matter when compared with local-first WBW.
- Guide says image-resource deletion **cannot be undone or recovered from a ChronoGrapher-owned server backup**, so Google Drive ownership is not synonymous with developer-managed disaster recovery. Test whole-project backup/restore and deleted-file recovery before calling its data portability equivalent to a self-contained Mimir archive.

#### 11. Realm Works — https://www.wolflair.com/realmworks/

**Classification:** long-running Windows-only GM-facing offline-friendly **campaign/world database**, tightly integrated with Hero Lab tools and an optional paid sync/reveal server. **Game Master Edition $59.99**, **Player Edition $4.99**, with the GM licence including a Player Edition and the first six months of server access. Users can edit existing realms without the service, but **realm creation itself requires a server connection**, and independent Player Edition distribution/revelation requires server access. The server is not interchangeable with consumer Dropbox/Google Drive syncing.

First-party evidence:

1. [Product page and licence prices](https://www.wolflair.com/realmworks/) — automatic article link detection, content/image/map linking, storyboards, text search, many RPG systems, embedded media/statblocks, Fog of World and Player Edition.
2. [Server access details](https://www.wolflair.com/server-access-details/) — optional sync, selective device storage, server backup, user-revealed content to Player Edition, connectivity required for realm creation; explicitly warns directly syncing the running desktop database through Dropbox/Google Drive can **corrupt it**. Integrated backup/restore is the safe method.
3. [Game-specific content structures](https://www.wolflair.com/realmworks/designers-diary/004-game-specific-content-structures/) — *fully editable* category structures, sections, snippet/field types, rules-specific form structure, tag domains; initial optional structures for Pathfinder, D&D 5th Edition and Savage Worlds are corroborated by [official release discussion](https://forums.wolflair.com/threads/whats-new-in-realm-works.56988/). This is richer native schema customisation than simple user prompts.
4. [Entire-realm export](https://www.wolflair.com/realmworks/designers-diary/001-exporting-your-realm/) and [reimport walkthrough](https://www.wolflair.com/realmworks/designers-diary/002-importing-your-content/) — **Full Export** contains images and all content for RW reimport; **Compact Output** is intended for reuse by other products, with no proof of effortless external import; realm **Structure Export** copies the form taxonomy; **Player Export** filters to revealed snippets; exports can be password-protected.
5. [Vendor's president: Realm Works development suspended](https://www.wolflair.com/an-update-from-our-president/) — formally halted work on new features in **2019** while stating licence and servers would continue at that time. As of the audit date, no official newer public feature development was located. This is a **lifecycle caution**, not a present-day guarantee of future server survival, nor a substitute for the separately planned commercial-success audit.
6. [Official designer's diary on integrating game modules and Hero Lab](https://www.wolflair.com/realmworks/designers-diary/003-making-the-most-of-official-content/) — formal articles and imported portfolios for mechanical data, alongside a separate encounter/tactical component.

**High-value verified distinctions:**

- **Fog of World** reveals selected snippets and sections rather than simply toggling the visibility of a whole page; the GM can show maps/partial map areas and textual facts progressively. Player Edition is effectively a separate client for already-revealed knowledge, not ordinary public website hosting. **Paid server access** is required for ongoing remote player distribution.
- Realm Works separates **Story** topics from mechanical **Articles** and supports game-specific structural templates, custom-defined metadata, hierarchical categorisation, tags, cross-article auto-linking, scene storyboards and searchable lore. It is not just a flat note-taking wiki.
- A full realm can be exported and reimported as **native Realm Works content** with metadata and images, and a player-safe export is possible. Compact Output aims at external interoperability, but should be inspected before claiming industry-standard file import. Running-database sync through generic cloud folders is unsafe according to the vendor.
- **Custom calendar editor remains unconfirmed** in the released product. Historical forum posts explicitly discussed a still-absent custom fantasy calendar feature, but these are insufficient by themselves to assert current `N`. Broad chronological organisation within the World Almanac and date-labelled events supports only `P` for an event/history timeline, not the custom live calendar ChronoGrapher has.
- Although it is still listed for sale, the team explicitly suspended further Realm Works coding in 2019. Any old developer roadmap is disqualified as proof of a shipped feature. Its current value and longevity must be assessed separately from contemporary active-development rivals.

#### 12. Obsidian Portal — https://www.obsidianportal.com/

**Classification:** long-running hosted **tabletop RPG campaign portal**, with public wiki, adventure log, character/item records and uploaded interactive maps. Its **Basic** tier is ongoing free, with two publicly viewable campaigns, one map and 2 MB uploads **per campaign**. **Ascendant** is listed at **US$5.99 per month or $49.99 per year**, supporting unlimited campaigns, ten maps and 10 GB uploads **per GM**, plus multiple important permission, communication and presentation features. A forum reference describes an intermediate Adventurer plan historically, but that plan was **not verified as currently purchasable on the observed live tier comparison**, so the matrix uses only Basic and Ascendant.

First-party evidence:

1. [Official Basic/Ascendant feature and pricing table](https://www.obsidianportal.com/ascendant_membership) — restrictions on campaign counts/maps/storage, and paywalled private campaigns, player secrets, calendar, forum, page history, co-GM, JavaScript/CSS and dice roller.
2. [Official campaign and wiki overview](https://www.obsidianportal.com/) — wikis, story/adventure logs, characters, content for players, organised campaigns.
3. [Uploading a campaign map](https://help.obsidianportal.com/article/83-uploading-a-map) and [map markers](https://help.obsidianportal.com/article/129-adding-a-map-marker) — user-supplied image maps, processed for Google Maps-style pan/zoom, clickable wiki/character/adventure links, public/private map toggle; no claimed in-app cartography drawing editor.
4. ["What Links Here" backlinks](https://help.obsidianportal.com/article/191-what-links-here-backlinks-section) — optional, visibility-aware backlink panel on wiki, adventure log, character and item pages. Indexes **only double-square-bracket wiki links**; does not index map pin links, HTML, forum or calendar links.
5. [Dynamic Sheet Template developer guide](https://help.obsidianportal.com/article/173-creating-a-dynamic-character-sheet-template-dst) — HTML, CSS, optional JS, built around editable key/value fields; supports community-authored layouts for Characters, Items and Wiki Pages, with moderator approval. Does not promise full built-in automatic RPG rules enforcement.
6. [Campaign calendar event creation](https://help.obsidianportal.com/article/130-create-an-event) — explicitly a **real-world session planning calendar**, with player attendance, Google/iCal subscription and reminders, available to Ascendant; not a custom fantasy chronology/calendar.
7. [Download campaign backup](https://help.obsidianportal.com/article/90-download-a-campaign-backup) — self-service campaign **data** backup, expressly **not an exact duplicate** of the hosted campaign site; tool cannot be assumed to restore styles or integrations on another platform.
8. [Co-GM role permissions](https://help.obsidianportal.com/article/167-promote-a-player-to-co-gm), [vendor video tutorials](https://help.obsidianportal.com/article/182-video-tutorials) and [API overview](https://help.obsidianportal.com/article/82-api-overview) — authenticated co-GM management, dice roller documentation, campaign backup process, and an official programmatic API. More detailed current API scopes and rate limits require later checking.

**High-value verified distinctions:**

- **Basic is public by default** and cannot provide private/friends-only campaigns. Ascendant is required for **player-secret sections**, multi-GM authoring, campaign forums, style overrides and revision history. Free published wiki access is not equivalent to role-controlled private story content.
- Obsidian Portal's calendar is for **arranging the next table session in real life**, not a worldbuilder's custom eras, weekday lengths or historical change simulation. Campaign **adventure logs** may be read chronologically, but should not be counted as a fully featured interactive historical timeline.
- The **Dynamic Sheet Templates** are extensible but technically demanding, submitted by community members and vetted by moderators. They support varied character/stat forms and optional user-authored calculations, but the vendor says they are not necessarily full automated character builders. Basic data may be entered without a specific hardcoded RPG sheet.
- The **backlinks implementation accounts for viewer permissions**; hidden GM-only relationships do not leak into player-visible backlink lists. Its coverage is narrower than a universal semantic graph because not all link types are indexed.
- Uploaded maps link to wiki, character and log entries and have viewer-controlled visibility, but the cited material does not substantiate map **generation**, region drawing, nested map transitions or live article-name overlays. Site history and visual campaign CSS are paid features. The export is a **recoverable data backup**, not proof of an independently hostable package or accurate full-site roundtrip.

### Provisional Batch 4 feature-design watchlist, **not yet validated WBW gaps**

1. **Treat lore as historically versioned data:** ChronoGrapher's time slider can simultaneously change wiki facts, terrain, map borders and current officeholders. A calendar plus separate timeline is less powerful than a shared time-aware data model. Before considering an addition, inspect WBW's timeline/events and entity schema temporal design.
2. **Custom calendar conversion and recurrence:** parent-child civil/cultural calendars, event recurrence intervals, weekday adjustment and calendar/timeline transclusions are concrete functions that may interest fantasy settings more than simple date strings.
3. **Two modes of templates:** one-time page Blueprints versus always-live transcluded templates; plus auto-updated queries, infoboxes and computed properties. Compare with WBW's schema editor and planned World Builder guidance for maintenance burden and integrity.
4. **Maps as historical assets:** manual tile grids, imported custom icon packs, per-era territory/terrain changes, arbitrary territory influence masks and automatic pin clustering. The risk is scope creep; compare separately with Mimir's core entries, planned maps and asset-pack system.
5. **Gradual player revelation:** Realm Works' Fog of World offers per-snippet and partial-image visibility, and its player-safe export shows how to distribute only knowledge characters have learned. Obsidian Portal's visibility-aware backlinks avoid unintentionally revealing a hidden relationship. Evaluate against WBW's existing/planned reveal modes before proposing work.
6. **Separation of ownership and backup:** ChronoGrapher uses a user-owned cloud account without vendor content copies; Realm Works uses local proprietary DB and guarded differential server sync; Obsidian Portal's nominal backup is lossy relative to site reproduction. A simple, trustworthy WBW archive-and-restore UX could be strategically useful, but inspect the current backend and installer first.
7. **System-specific forms and community templates:** Realm Works preloads custom category structures for rulesets while preserving generic user editing. Obsidian Portal allows third parties to create moderated HTML/CSS/JS sheet templates. Compare WBW's content packs, schema typing and intended Content Studio publishing standards.
8. **Multiple audience roles:** reader versus co-editor, player secrets, published/free access and co-GM permissions have genuinely different costs and UX risks. Avoid assuming a binary public/private switch handles all use cases.

**No WBW feature or roadmap item is confirmed missing, planned, or prioritised on the strength of Batch 4 alone.**

### Outstanding Batch 4 verification questions

- **ChronoGrapher:** test a paid alpha user workspace and Google Drive permissions; verify which storage files are genuinely reimportable, project archive completeness, actual map label sync, differences between viewer and collaborator behaviour on mobile, and whether the calculated properties can express arbitrary entity-to-entity links. Validate user-facing trial and gift tier limits without purchasing access prematurely.
- **Realm Works:** install/authenticate current Windows GM edition; check offline post-login editing/new-realm restrictions, Fog of World pin/image granularity, specific calendar/timeline UI, native export roundtrip including media and categories, cross-platform compact export fidelity, and whether paid servers remain operational as of the test date. Ask vendor about support lifecycle only when preparing the later commercial-success review.
- **Obsidian Portal:** create a free campaign and check backlink links, map upload and marker semantics, upload limits, exact backup file type and restore process; verify existing DST library and game systems. Ascendant-only private campaign/secret/calendar/co-GM/version-history features need a paid trial or authoritative vendor screencast for behavioural acceptance testing.
- **All three:** vendor documentation constitutes **source-backed research**, not 100% verified runtime functionality. `P` and `U` are not interchangeable with unqualified `Y`/`N`. The final WBW comparison and proposed roadmap remain gated on Stage 0 (actual WBW shipping/branch baseline) and Stage 13 (cross-batch reconciliation). Commercial outcomes, customer comments and marketing performance must wait until the later success audit.

---

## Batch 5: Alkemion Studio, Chronicler, WorldStitch

**Evidence checked:** up-to-date first-party product descriptions, feature manuals, FAQs, official release chronology and stated licensing on **6 November 2026**. No login to private workspaces, paid licence purchase, installation or feature acceptance test was performed. Alkemion documents describe a functioning free **web beta** plus a separate **unreleased desktop**. Chronicler is an installable **alpha** whose recently added time/canvas features must be read against a separate unreleased paid v1. WorldStitch advertises an **application-only early access** with very little public documentation. **Neither competitor success nor WBW feature completeness is judged here.**

### Comparable feature matrix (Batch 5)

This reproduces the **same 57 capabilities** as Batches 1–4. **Y** is an affirmative developer claim for the reviewed public state, **P** is a partial or narrower equivalent, **G** is gated, **N** is specifically ruled out, **F** is future, **U** is not verified (and absolutely not shorthand for absent). A **P/G** code means limited or alpha-stage functionality explicitly associated with a licence gate. All three columns are **vendor research**, not hands-on verification.

| Category | Capability | Alkemion Studio | Chronicler | WorldStitch | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | N/F | Y | U | — |
| Platform | Edit entire world offline | N/F | Y | U | — |
| Platform | Local user-controlled world files | N/F | Y | U | — |
| Platform | Vendor-hosted cloud world storage | Y | N | U | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | F | F | U | — |
| Platform | Ongoing free account tier | Y | Y | U | — |
| Structure | Structured lore/entry type templates | P | P | P | — |
| Structure | Fully arbitrary schema/field definitions | U | P | U | — |
| Structure | Editable reusable entry prompts | P | Y | U | — |
| Onboarding | Guided question-based world creation | U | U | U | — |
| Editing | Rich-text article editing | Y | P | Y | — |
| Editing | Images embedded within entries | Y | Y | U | — |
| Editing | PDF document viewing alongside notes | U | P | U | — |
| Editing | Tables inside editor or wiki content | Y | Y | U | — |
| Editing | Split/multicolumn working panels | Y | Y | U | — |
| Linking | Cross-article wiki links/mentions | Y | Y | Y | — |
| Linking | Backlinks/auto-discovered relationships | P | Y | U | — |
| Linking | Visual relationship graph | Y | P | Y | — |
| Organisation | Categories/hierarchy/tags | Y | Y | Y | — |
| Organisation | Search across lore | Y | Y | U | — |
| Characters | Automatically generated family trees | U | F | U | — |
| Factions | Interactive diplomacy/organisation webs | P | U | U | — |
| Time | User-defined calendar systems | N | P | U | — |
| Time | Recurring calendar events | U | U | U | — |
| Time | Event/history timelines | Y | P | U | — |
| Time | Historical events shown geographically on maps | U | U | U | — |
| Maps | Import/upload map image | Y | P/G | U | — |
| Maps | Native procedural terrain generation | N | U | U | — |
| Maps | Native procedural city generation | N | U | U | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | Y | P/G | U | — |
| Maps | Nested/interconnected interactive maps | U | P/G | U | — |
| Maps | Toggleable image/map layers | U | P/G | U | — |
| Maps | Political borders/territory polygons | U | P/G | U | — |
| Maps | Draw roads/routes on map | U | U | U | — |
| Maps | Calculate distance and travel time | U | U | U | — |
| Maps | Map labels synchronise automatically from wiki entries | P | U | U | — |
| RPG | Campaign/plot management | Y | P | P | — |
| RPG | Session preparation, session notes or reports | Y | P | Y | — |
| RPG | Integrated RPG character sheets | U | U | U | — |
| RPG | Creature/NPC statblocks | P | P | U | — |
| RPG | Built-in support for multiple game systems | U | U | U | — |
| Visibility | Hide GM/private secrets | U | P | U | — |
| Visibility | Publish or share player-readable world pages | Y | P | U | — |
| Visibility | Granular reader/subscriber permissions | N/F | N | U | — |
| Collaboration | Invite coauthors or collaborative editors | N/F | P | U | — |
| AI | Integrated lore-writing AI | N | U | P | — |
| AI | Integrated AI image generation | N | U | U | — |
| Generation | In-product heraldry design/generation | U | U | U | — |
| Generation | In-product character portrait generation | U | U | U | — |
| Export | Portable whole-world backup/export | P | Y | U | — |
| Export | Editable Word export and reimport | U | P | U | — |
| Export | Compiled world/codex as PDF | Y | U | U | — |
| Writing | Dedicated novel/manuscript tool | U | U | U | — |
| Accessibility | Multiple localised UI languages | U | Y | U | — |
| Accessibility | UI font/readability/colour accessibility controls | P | Y | U | — |

**Classification caveats:**

- **Alkemion Studio:** The currently accessible product is a free **browser workspace** with cloud-stored content and viewable/editable boards on large and small screen sizes. An offline native desktop edition, richer multi-board modules, cross-module synchronisation, version history, and perpetual desktop purchase are **announced/funded future plans**, not a desktop release. Its structured Nodes have types and rich document blocks; they are **not proven** to have WBW-equivalent user-defined typed schema fields. A visual plot board and manually connected factions are not the same as an automatically calculated diplomacy graph. The map editor **requires a user-uploaded image**; no native procedural terrain/city tools were claimed. Maps have linked and possibly title-inheriting POIs, not confirmed universal automatic pin-label synchronisation. Alkemion's **horizontal timelines expressly are not calendars**. The sharing function produces a **read-only link for an entire module** and does not expose coauthor or granular role management at audit time; advanced sharing is described as future. The official FAQ expressly rules out **any generative AI in the app**. Its Markdown/HTML/text/Obsidian ZIP exports make content portable, but do **not** document an equivalent lossless re-import of every visual board, asset, link and layout.
- **Chronicler:** The free Windows/macOS/Linux app is a **local-first user-chosen Markdown vault**, compatible with Obsidian notes. Its editor is formatted Markdown with visual preview, not verified to be a full WYSIWYG rich-text editor. Custom **YAML frontmatter infoboxes** with user fields and page templates count as **partial** schema support, not a confirmed drag-and-drop arbitrary type editor. A **freeform canvas compatible with Obsidian JSON Canvas** shipped in the dated **11 October 2026 v0.62 alpha**; this is manually composed, not an automatically generated entity relationship network. The **3 November 2026 v0.63 alpha** changelog ships custom calendars and linked historical timeline lanes, including automatic harvesting of date-tagged notes. Their current alpha availability and Pro entitlement are **not demonstrated for every free user**, hence **P**, rather than unqualified Y or F; unlike Alkemion, the calendar is a true custom calendar with months/leap years/eras. **Interactive image maps** launched in **24 February 2026 v0.47 alpha expressly for licensed testers** with image layers, lore/map-linking pins and clickable polygon regions; record **P/G**, not generally available Y. The website separately labels **Pro v1.0 coming soon** and promises a paid permanent v1.x licence; planned family trees must be **F**. The **Community License is a donation**, expressly not Pro access, despite alpha changelog referencing some licensed testers. This ambiguity deserves direct testing or a developer clarification. Per-note spoiler markup hides onscreen text but does **not** constitute secure viewer-specific GM permissions. Vaults can be shared externally via third-party sync, **not** via first-party reader roles/co-edit. PDF files currently launch in the **external system viewer**, so parallel in-app PDF review is only partial. Its existing Word feature is **import from .docx**, not demonstrated two-way Word export. Multiple UI languages are verified (English, Dutch). Its source is **publicly viewable under PolyForm Shield**, not open-source under an OSI licence.
- **WorldStitch:** As of audit day the only substantiated source is a **60-line early-access landing page** offering application-based access; no public manual, pricing, feature release log, import/export example or test environment was found. The developer describes **isolated world vaults, tagged/linked/structured notes, a character/faction/location relationship graph, session notes tied to entities, and AI grounded question-answering over existing lore**. Treat these as **early-access vendor claims only**. Grounded question-answering does not prove **generative lore-writing or editing** (so AI writing receives **P**, not Y). WorldStitch's word **vault** does not establish local file ownership, offline mode or Markdown compatibility. Nearly all other capabilities are **U**: no claim of absence, no inferred map features, no assumed SaaS pricing, no inferred character-sheet or permission system.

### Comparative feature extensions found in Batch 5

These narrower comparisons capture meaningful ideas hidden by the fixed categories. For Chronicler, where a feature is part of its 2026 alpha and entitlement is not clear for all users, **P** flags that limitation; **P/G** additionally captures the explicit map-testing licence restriction.

| Additional capability | Alkemion Studio | Chronicler | WorldStitch | WBW |
|---|:---:|:---:|:---:|:---:|
| Infinite freeform spatial board/canvas | Y | Y | U | — |
| Nodes connected by draggable labelled arrows/links | Y | Y | U | — |
| Reuse the **same logical content node as many independent board tokens** | Y | U | U | — |
| Multiple independent boards/canvases in one project | F | Y | U | — |
| Project collection and shared cross-project curated asset library | Y | P | U | — |
| Save, name and restore board camera views/layout | Y | U | U | — |
| Duplicate or export **whole scene/module layouts** as templates | Y | U | U | — |
| Page templates that are copied into new pages | P | Y | U | — |
| Inline reusable content transclusion into multiple pages | U | Y | U | — |
| Weighted user-editable random/roll tables | Y | U | U | — |
| Roll a table and update a linked entity/node with the result | Y | U | U | — |
| Curated included artwork/icons for visual worldbuilding | Y | U | U | — |
| Embed a zoomable interactive image map in a lore page | Y | P/G | U | — |
| Embed interactive sequence timeline directly in lore page | Y | U | U | — |
| Multilane colour-coded timelines with events linked to lore | Y | P | U | — |
| Custom calendar months, weekdays, eras and leap-year rules | N | P | U | — |
| Automatically harvest page metadata dates into timelines | U | P | U | — |
| Clickable map region polygons linked to pages or other maps | U | P/G | U | — |
| Swap/rescale base map image without moving existing pins | U | P/G | U | — |
| Automatic cluster grouping of dense map pins | U | P/G | U | — |
| Chronology shown as an order-of-scenes axis without calendar dates | Y | P | U | — |
| Inline wiki-link autocomplete and automatic repair on rename | U | Y | U | — |
| Detect broken internal links to missing lore pages | U | Y | U | — |
| Obsidian-compatible Markdown or vault interchange | Y | Y | U | — |
| Obsidian JSON Canvas-compatible spatial board files | U | Y | U | — |
| Import existing Word / Google Docs documents | U | Y | U | — |
| Import MediaWiki/Fandom XML archive data | U | Y | U | — |
| Theme customisation via local CSS snippets and custom fonts | U | Y | U | — |
| Sort rendered wiki tables interactively | U | Y | U | — |
| No-account **fully offline** writing with user-selected file directory | N/F | Y | U | — |
| Cryptographically signed in-app updates for native desktop | F | Y | U | — |
| **Read-only shareable module URL** with optional PDF printing/rollable tables | Y | N | U | — |
| AI questions answered against the owner's lore knowledge base | N | U | Y | — |

### Vendor evidence, scope and lifecycle notes

#### 13. Alkemion Studio — https://alkemion.com/

**Classification:** directly relevant **visual TTRPG/story planning workspace**, with many structured-yet-freeform building blocks. Public beta launched **15 July 2024**, and the 2026 product is a **free browser application**. The vendor promises that the web edition remains free indefinitely, without essential features behind a paywall. The **one-time-purchase desktop** is being built rather than currently downloadable. The site states that its Kickstarter was funded; funding is **not shipment**.

Official evidence:

1. [Vendor About and release history](https://alkemion.com/about) — father/son development, current free browser programme and separately in-development, one-off-licence native desktop with offline/cross-module/version-history goals.
2. [Board documentation](https://alkemion.com/docs/features/board), [Modules](https://alkemion.com/docs/features/modules), [Nodes](https://alkemion.com/docs/features/nodes), [Links](https://alkemion.com/docs/features/links) — modular scene/plot boards, reusable underlying Nodes, Tokens as separate visual instances, categorised typed elements, links, spatial layout and content collections.
3. [Rich Editor](https://alkemion.com/docs/features/editor) and [Templates](https://alkemion.com/docs/features/templates) — linked Nodes/pages and visual constructs, floating editor, nested page documents, copied asset/scene arrangements, new module versus import into existing.
4. [Map editor](https://alkemion.com/docs/features/maps) — user-supplied map image, named custom POIs, optional wiki node links, board instances and in-page Map Construct.
5. [Timeline editor](https://alkemion.com/docs/features/timelines) — **11 October 2026** sequence-based, multi-lane visual tool explicitly distinct from a calendar.
6. [Random Tables](https://alkemion.com/docs/features/random-tables) — weighted random entries, random Nodes, reuse and table rolls.
7. [Export and print](https://alkemion.com/docs/features/exporting) — ZIP containing Obsidian Markdown, generic Markdown, HTML or text (depending on choice), and separate print-preview/PDF output.
8. [Sharing](https://alkemion.com/docs/features/sharing) — per-Module read-only public URL, optional viewer random rolls and PDF print; no co-writing/roles yet.
9. [FAQ](https://alkemion.com/faq) — explicit developer policy **against any AI-generated content inside the application**.

**Distinctions worth holding for the eventual WBW comparison:**

- Separates **authoring objects** (Nodes), **visual placements** (Tokens), and **documents** (Editor Pages). Reusing one entity on multiple boards/timelines avoids duplicating its story; deleting the visible token need not delete the source object. This is not the same as a generic relationship graph.
- The **Board** can be a nongeographical plot, investigation, dungeon crawl, campaign architecture or relationship/conspiracy chart. Zoomed **Views** and map/timeline Constructs can live together in a workspace, with a shared asset library and reusable scene templates.
- The **Map** is specifically annotation, not generation. It is built from a previously uploaded image and points of interest, including Node linking. The Timeline is a separate visual Construct: editable lanes, freeform markers and Node references, **without calendar semantics**.
- Its **export is content-centric**, with strong Obsidian Markdown interoperability; it is not a proven lossless native restoration path for every original spatial composition. This distinction matters against WBW's editable world files.
- A full **read-only Module** can be shown to players, optionally with their own throwaway random rolls or print/PDF. There is no established page-level GM/player visibility enforcement, and no collaborative editor permission model in the current share feature.

#### 14. Chronicler — https://chronicler.pro/

**Classification:** closest **local ownership/offline** comparison in this batch: free desktop for **Windows, macOS and Linux**, built with Tauri and editing user-selected **plain Markdown folder vaults**. No account, vendor server or network requirement for ordinary work. It is published in pre-v1 alpha as of **v0.63.0-alpha, 3 November 2026**, rather than a released paid Pro 1.0. Native support for Markdown/wiki links/infoboxes, LaTeX, images and table rendering allows sophisticated page presentation without a proprietary database. The **forthcoming Pro v1.0** is described as a permanent licence for the 1.x line, with possible extra cost for future major versions.

Official evidence:

1. [Chronicler FAQ](https://chronicler.pro/faq) — current desktop/offline/no-account, unlimited local Markdown worlds, optional third-party folder sync, user ownership, Word/Google Docs and MediaWiki imports, OS coverage, source-available PolyForm Shield licence, and clarification that **Community License means donation, not Pro**.
2. [Getting Started manual, updated 3 Nov 2026](https://chronicler.pro/getting-started) — editing/wiki syntax, YAML infoboxes, templates, tags, page inserts, styled tables, custom themes, fonts, HTML/CSS and live timeline/date metadata workflows.
3. [Official dated changelog](https://chronicler.pro/changelog) — **v0.47.0-alpha (24 Feb): licence-restricted alpha image-map editor**; **v0.60 (3 Sep): two tabs side by side**; **v0.61 (21 Sep): Dutch UI language**; **v0.62 (11 Oct): freeform Obsidian-compatible JSON Canvas with text/image/wiki cards and arrows**; **v0.63 (3 Nov): custom-calendar visual timelines and date-indexed auto-ingest**. Numerous intermediary releases cover map pin clustering, page hover previews, theme import/export and tab/view functionality.
4. [Main product, Free versus Pro distinction](https://chronicler.pro/) — download is free now, **Pro v1.0 explicitly coming soon**, one-off future paid licence; maps/timeline/family trees are described in v1 intentions, while dated alpha changelog already reports some corresponding prototype implementations.
5. [Project source and licence](https://github.com/mak-kirkland/chronicler) — public source inspection availability with **PolyForm Shield**, not a permissive or copyleft open-source licence.

**Distinctions and source conflicts to preserve:**

- **v0.63 custom calendars** support user months, leap rules, weekdays and eras, and timelines plot dated events, spans and approximate dates. A timeline lane can auto-include qualifying **YAML date/date-end** notes by folders/tags, updating when source lore changes. This is a different level of chronology from Alkemion's arbitrary scene order.
- **v0.47 image map editor** has stacked elevation/floor image layers, custom pins, linked other-map entrances and clickable drawn polygon regions. It allows base-image replacement while preserving relative pin coordinates, and later alpha releases add pin clustering. **The v0.47 notes explicitly say licensed users can test it**. Do not promote maps to free-mainline Y simply because the product homepage markets future Pro maps.
- A newly introduced **v0.62 canvas** has free-position text/image/page cards and arrows stored as **Obsidian JSON Canvas-compatible files**. This permits user-created relationship diagrams but does not evidence an automatically maintained semantic graph.
- The **free core** is a self-contained vault, not a one-off software purchase; the advertised Pro lifetime-within-major-version purchase **is not released**. The FAQ says the Community License donation unlocks **no Pro** functionality, but older alpha logs mention **licensed map testers**, so their entitlement must be checked directly in a later acceptance test.
- The infobox editor and page templates make it adaptable, and the **.docx/MediaWiki XML import** offers a migration route. Neither proves Word **roundtrip** or a true workbook-style arbitrary schema designer. Custom CSS snippets, theme editor, downloadable fonts, layout galleries and sortable tables offer more presentation control than a basic Markdown note viewer.
- Sharing a vault by **Git/Dropbox/Drive** is feasible, but these are external sync mechanisms with no verified secure per-player view/reveal permissions, hosted reading portal or native coauthor transactional conflict resolution.

#### 15. WorldStitch — https://worldstitch.app/

**Classification:** emergent, direct AI-plus-lore management competitor in **early access by application**, with only brief public self-description. **Do not conflate with similarly named projects or invent an entire platform suite based on generic AI/worldbuilding labels.** At the audit date the official homepage had **no public feature manual, changelog, screenshots establishing exact behaviours, pricing details or downloadable app**.

Official evidence:

1. [WorldStitch landing page](https://worldstitch.app/) — explicitly lists a grounded lore question-answering assistant, linked notes with tags/structure, a relationship graph covering characters/factions/locations, isolated multiple-world vaults, and session history tied to people/places; says the project is accepting early-access applications.

**Strict evidence boundary:**

- **AI:** The landing page promises that the assistant can answer questions **about the user's stored lore**. It does **not** explicitly describe bulk writing of new lore, rewriting, automated consistency repair, or AI-generated images. Grounded Q&A belongs in a distinct capability row.
- **Visual graph:** It expressly advertises relationship visualisation, but no public detail establishes whether it is automatically calculated from wiki links, manually authored, directed, filterable or exportable.
- **Storage:** Multiple isolated **vaults** are advertised, but no evidence establishes locally owned YAML/Markdown files, sync rules, encryption, cloud server location or offline access.
- **TTRPG:** It advertises **session history with links** to lore. It does not claim VTT, combat tools, RPG character sheets, campaign scheduling or specific rule-system support.
- **Validation:** Every Y in this product's rows is a **vendor landing-page assertion, not a feature demonstrated in an accessible workspace**. Leave unmentioned items U until an early-access account, trustworthy product demonstration or fuller documentation can be inspected.

### Provisional Batch 5 feature-design watchlist, **not yet validated WBW gaps**

1. **Visual story planning:** Alkemion's reusable single entity behind many placed tokens, freeform infinite board, saved camera views, draggable links and cloned plot/scene templates are worth testing against WBW's existing relationship and schema UX. Chronicler's JSON Canvas interoperability offers a more portable implementation model.
2. **Calendar versus sequence:** A *sequence board* (Alkemion) and a *dated history engine* (Chronicler) solve different problems. Chronicler's custom-calendar timeline can ingest YAML event dates, display approximate ranges and organise parallel lanes; compare these specifically with WBW's calendar/timeline plans.
3. **Rich map annotation:** Chronicler's alpha map layers, inter-map portals, clickable polygon geography, persistent pins after higher-resolution image replacement and automated pin clustering may be valuable designs, but are currently **licence-gated alpha**. Alkemion's image-based point-of-interest map inside an editor page provides a simpler implementation reference.
4. **Local-first interoperability:** Chronicler's file format and Obsidian compatibility, native Markdown/JSON Canvas, Word and MediaWiki importers, sortable tables and CSS control emphasise avoiding proprietary lock-in. Alkemion exports content-oriented ZIPs with Obsidian syntax. Confirm WBW's actual import/export contracts before adding roadmap candidates.
5. **Two kinds of context-aware assistance:** WorldStitch's advertised lore-grounded **question answering** should be assessed distinctly from AI drafting text, making new entries, creating images and relationship inference. WBW's grounded AI may already cover it; no gap assumed.
6. **Read-only sharing:** Alkemion's low-friction sharable module link is useful for player handouts, but offers no current verified per-secret filtering or author collaboration. Compare with WBW's reveal-mode design before promising a web portal.
7. **Ease of use and file confidence:** Built-in predesigned icons, random tables and template modules (Alkemion) and guided Markdown/YAML infobox editing with automated broken-link checks (Chronicler) reduce repeated GM work. Evaluate quality/value as well as binary existence before roadmap prioritisation.

**No WBW feature gap or roadmap item is confirmed on the strength of Batch 5 alone.**

### Outstanding Batch 5 verification questions

- **Alkemion Studio:** create a free test module to distinguish page-level hidden content from truly private data; check map POI label inheritance and backlink behaviour, module collections, how well templates roundtrip and whether export preserves enough information to restore board/spatial structures. Track the native desktop launch separately; do not credit the funded Kickstarter as a released one-time-licence product.
- **Chronicler:** install the current alpha on each target desktop OS or test via published release binaries. Specifically establish which **v0.63 custom calendars/timelines** are free versus licence-limited and how map alpha test licences are obtained, without paying without approval. Test custom YAML field types, visual canvas changes, PDF side-panel claims, Word import fidelity, whole-vault resilience and conflict handling under Drive/Dropbox/Git. Clarify current licensing with developer if official FAQ and dated alpha note remain ambiguous.
- **WorldStitch:** obtain authorised early-access walkthrough/docs before scoring usability, security, offline support, persistence, schema editability, graph mechanics, exact AI prompts and availability. Do not submit an application without Alex's direction; no success or public sentiment assessment yet.
- **Cross-product:** preserve the 57-row matrix definitions; compare actual WBW runtime against these records at Stage 0 and reconcile all gaps only at Stage 13. Current research can approach exhaustive **public documentation accuracy**, but cannot guarantee 100% runtime truth without feature acceptance testing or privileged product access.

---

## Batch 6: Skryrún, OnlyWorlds, MythScribe

**Evidence checked:** current official product/pricing pages, product help, schema and developer documentation, release notes, and applicable product/privacy statements on **6 November 2026**. No account purchase, beta application, private workspace login, installed app, or hands-on acceptance test was performed. In particular, Skryrún's help centre mixes released features, documented beta-test features and explicitly **in-development** features; OnlyWorlds is both an open data format and a family of tools, of which **Atlas** is the principal comparison; MythScribe's **seven-day free trial is not a permanent free tier**. This remains vendor-document research, not a success or public-review audit.

### Comparable feature matrix (Batch 6)

These are the **same 57 capabilities and definitions** used in Batches 1–5. **U** is unresolved, never an assertion that the product lacks a feature. **P** includes narrower capabilities and features restricted to a beta/preview; **G** indicates an explicit recurring-plan gate, including combined **P/G** where relevant. The WBW baseline remains **—** until Stage 0 is performed.

| Category | Capability | Skryrún | OnlyWorlds | MythScribe | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | N | N | N | — |
| Platform | Edit entire world offline | N | Y | N | — |
| Platform | Local user-controlled world files | N | Y | N | — |
| Platform | Vendor-hosted cloud world storage | Y | Y | Y | — |
| Platform | Multiple separate worlds/projects | G | Y | G | — |
| Platform | One-time purchase instead of subscription | N | N | N | — |
| Platform | Ongoing free account tier | Y | Y | N | — |
| Structure | Structured lore/entry type templates | Y | Y | G | — |
| Structure | Fully arbitrary schema/field definitions | P | P | U | — |
| Structure | Editable reusable entry prompts | U | U | U | — |
| Onboarding | Guided question-based world creation | Y | Y | P | — |
| Editing | Rich-text article editing | Y | P | P | — |
| Editing | Images embedded within entries | Y | Y | U | — |
| Editing | PDF document viewing alongside notes | U | P | U | — |
| Editing | Tables inside editor or wiki content | P | U | U | — |
| Editing | Split/multicolumn working panels | P | U | U | — |
| Linking | Cross-article wiki links/mentions | Y | Y | P | — |
| Linking | Backlinks/auto-discovered relationships | Y | Y | P | — |
| Linking | Visual relationship graph | Y | Y | U | — |
| Organisation | Categories/hierarchy/tags | Y | Y | P | — |
| Organisation | Search across lore | Y | Y | U | — |
| Characters | Automatically generated family trees | U | U | U | — |
| Factions | Interactive diplomacy/organisation webs | Y | P | P | — |
| Time | User-defined calendar systems | Y | Y | U | — |
| Time | Recurring calendar events | U | U | U | — |
| Time | Event/history timelines | Y | Y | P | — |
| Time | Historical events shown geographically on maps | U | Y | U | — |
| Maps | Import/upload map image | Y | Y | U | — |
| Maps | Native procedural terrain generation | N | P | N | — |
| Maps | Native procedural city generation | N | U | U | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | Y | Y | U | — |
| Maps | Nested/interconnected interactive maps | N | Y | U | — |
| Maps | Toggleable image/map layers | P | U | U | — |
| Maps | Political borders/territory polygons | Y | Y | U | — |
| Maps | Draw roads/routes on map | Y | Y | U | — |
| Maps | Calculate distance and travel time | P | U | U | — |
| Maps | Map labels synchronise automatically from wiki entries | U | P | U | — |
| RPG | Campaign/plot management | Y | P | G | — |
| RPG | Session preparation, session notes or reports | Y | P | G | — |
| RPG | Integrated RPG character sheets | P | P | Y | — |
| RPG | Creature/NPC statblocks | P | P | Y | — |
| RPG | Built-in support for multiple game systems | P | U | Y | — |
| Visibility | Hide GM/private secrets | Y | Y | U | — |
| Visibility | Publish or share player-readable world pages | Y | Y | U | — |
| Visibility | Granular reader/subscriber permissions | Y | Y | U | — |
| Collaboration | Invite coauthors or collaborative editors | G | Y | U | — |
| AI | Integrated lore-writing AI | Y | P | Y | — |
| AI | Integrated AI image generation | P | U | U | — |
| Generation | In-product heraldry design/generation | P | U | U | — |
| Generation | In-product character portrait generation | P | U | U | — |
| Export | Portable whole-world backup/export | P | Y | P | — |
| Export | Editable Word export and reimport | U | U | U | — |
| Export | Compiled world/codex as PDF | U | U | U | — |
| Writing | Dedicated novel/manuscript tool | U | Y | U | — |
| Accessibility | Multiple localised UI languages | U | U | U | — |
| Accessibility | UI font/readability/colour accessibility controls | G | Y | U | — |

**Classification caveats:**

- **Skryrún:** An account-based browser service, not native software. Its **free Chronicler tier** (a plan name **unrelated** to the independent Chronicler desktop app in Batch 5) supports one world and one campaign; the paid Weaver and Runekeeper plans allow more worlds, storage, AI credits and collaborators. Its official reference says basic tools are included at all tiers, yet a **separate beta guide** expressly limits GM Screen, 3D dice, Discord share, session canvas and statblock compendium to **approved testers before launch**. Dated September 2026 release notes demonstrate development of character sheets, maps and session tools, but do not establish that all such functions are in unrestricted production. **P** therefore flags the uncertain beta/product boundary, not lack of implementation. It has **20 fixed entity types plus free-form Custom blocks**, which do not evidence a complete arbitrary typed schema designer. Interactive map categories can represent a continent, city or room, but official guidance says **each map is independent**; multiple maps at different scales do not themselves establish clickable parent-child nested map navigation. Its **measure tool** does not establish a travel-duration calculator. Its **uploaded images and video backgrounds** are not native random terrain/city generation; tactical battlemap overlays are only a **partial** substitute for a normal multi-layer cartographic editor. A future/tester-only **offline session pack is explicitly a read-only prepared-session reference**; full offline world authoring requires a connection and is **N**. JSON/Markdown export exists, but media completeness and faithful whole-world import/reconstruction remain to be verified. AI portraits, banners and emblems are described in an **in-development/tester-admin** help section, so their main matrix entries remain **P** even though the help-centre pricing and release notes discuss Runes and images.
- **OnlyWorlds:** It is not one traditional packaged SaaS app. **Atlas** is the free, browser-based, offline-capable editor over a **documented portable JSON world schema**, with optional folder access on Chromium browsers and browser-local storage on other browsers. **Lantern** is a separate offline-capable phone PWA. Hosting/synchronisation on onlyworlds.com is **optional**; the local folder can remain the source of truth. Its **22 prescribed entity types** and data-driven editor are powerful but do not prove user-facing **arbitrary add-a-field or type-schema design**. Atlas has a full chapter/scene **Writing** area, visual entity **Web**, date-aware charts and maps, custom calendars, mapped pins/zones/routes and character-relative **Knowledge** visibility. Its map-style renderer can derive coast/river/road appearances from **user-drawn polygons and paths**; that is **partial map generation, not random world/terrain generation**. An attached PDF file can reside on its hosted entry, but in-product PDF side-by-side rendering is unverified. Its ZIP export does include world elements/pages/notes/charts/images and opens in Atlas, but the official documentation cautions that **server-only file attachments (including PDFs) are not in the ZIP**, and account/member attribution and synced page layouts are not fully preserved. Its **AI agents use external clients via MCP/SDK/API with scoped permissions**, rather than a built-in click-to-write lore model; **P** for integrated AI writing means external integration, not proof of a hosted internal generator. A free, no-account local app is **not** a one-time purchased licence; its one-time-purchase row is N, not a pricing disadvantage.
- **MythScribe:** The reviewed product is **mythscribe.io**, not unrelated similarly named products. It is an account-based AI/TTRPG browser service with a **seven-day trial only**; no verified ongoing free tier. Seeker ($5 per month) provides character sheets, AI chat, backstories, rule-system support and a **prompt-generated gridded dungeon/battlemap**. **Worldbuilder/campaign-memory access starts at Adventurer ($10 per month)**, and Archmage ($20 per month) raises world/entity limits, so multiple worlds, typed worldbuilding, campaign management and session tooling are **G**. Three documented systems are **D&D 5e, Pathfinder 2e and Daggerheart**, not arbitrary game-system support. Connected quest/entity selectors demonstrate **semantic cross-references**, not necessarily Wiki syntax, backlinks or a visual graph. The site depicts dated event entries, but does not confirm a WBW-like time-axis application. The **map maker** outputs **flat PNG/JPEG floorplans**, explicitly positioning itself as unsuitable for large-scale world/region cartography: it is **not** evidence of interactive pins, imported cartographic layers, geographic terrain or city generators. AI map generation is recorded in the **extensions** below but does **not automatically mean general-purpose AI portrait/art generation**. A privacy policy promises data export **on request**, without a confirmed whole-world self-service restore path; its export score is **P**.

### Comparative feature extensions found in Batch 6

These entries capture capabilities the 57 common columns cannot express. A **Y** here remains a first-party claim, not a completed product trial; a **P** for Skryrún often means beta-only or explicitly in-development documentation.

| Additional capability | Skryrún | OnlyWorlds | MythScribe | WBW |
|---|:---:|:---:|:---:|:---:|
| Separate immutable-ish world canon with campaign/session-specific overrides | Y | U | U | — |
| Promote campaign/session events into reusable world canon | Y | U | U | — |
| Per-entity AND per-article-block reveal permissions | Y | P | U | — |
| Per-character/player knowledge-gated reading view | Y | Y | U | — |
| Real-time reveal of a secret while players are viewing | Y | U | U | — |
| GM preview of player visibility for map layers/pins | Y | P | U | — |
| Public/no-account player-reading link | P | Y | U | — |
| Dedicated player-facing mobile/offline web companion | P | Y | U | — |
| Use completely offline with no account or subscription | N | Y | N | — |
| User-owned plain JSON directory readable/writable by third-party tools | N | Y | N | — |
| Export ZIP and open it as an editable standalone world | P | Y | U | — |
| Optional two-way cloud sync with the user folder as source of truth | N | Y | N | — |
| Explicit merge/conflict choice for simultaneous offline edits | U | Y | U | — |
| Named entity and connection graph with queryable/focus lenses | Y | Y | U | — |
| Auto-link text occurrences in manuscript prose to world entities | P | Y | U | — |
| Books, chapters and scenes with author-chosen hierarchy labels | U | Y | U | — |
| Question-at-a-time first-story onboarding building linked entities | P | Y | P | — |
| Entity types driven by openly documented cross-tool schema | U | Y | U | — |
| API/SDK for reading and writing a world from games/tools | U | Y | U | — |
| Scoped AI agent seats and permissions for external assistants | U | Y | U | — |
| Human review/proposal workflow for externally authored world changes | U | Y | U | — |
| User calendar with custom month/day rules and accurate leap rules | Y | Y | U | — |
| Time-slider/geographic filter hiding future/past map zones and pins | U | Y | U | — |
| Manually drawn geographic zones with automatic atlas-style cartographic rendering | P | Y | U | — |
| Nested interactive submaps with map-to-map navigation | N | Y | U | — |
| Import Inkarnate/VTT maps or animated/video basemaps | Y | U | U | — |
| Live battlemap fog, walls, doors, lighting and dynamic vision | P | U | U | — |
| 3D dice overlay and in-session tactical combat manager | P | U | P | — |
| System-specific player sheet with spells, inventory and condition logic | P | U | Y | — |
| System-specific searchable built-in rules reference | Y | U | Y | — |
| AI prompt-to-grid dungeon/battlemap PNG/JPEG | U | U | Y | — |
| AI lore generation grounded in named world entities | Y | P | Y | — |
| AI-driven NPC, quest and encounter drafting linked to the current world | Y | P | Y | — |
| Campaign arc → numbered sessions → attached encounters | P | U | G | — |
| AI-generated balanced encounters by system/challenge rating | P | U | Y | — |
| Session debrief tracks opened, progressed and closed story threads | Y | U | P | — |
| Session canvas/freeform visual arrangement of prepared scenes | P | U | U | — |
| Reference-only offline cached game-session bundle | P | P | N | — |
| Versioned/entitled art styles plus a world-wide reference image | P | U | U | — |
| World currencies, merchant inventories and player-owned businesses | Y | P | U | — |
| Original languages/scripts with character-specific proficiency | Y | P | U | — |
| Complete player handout/public-page sharing without author account | P | Y | U | — |
| Hosted attachments excluded from normal portable world ZIP | U | Y | U | — |

### Vendor evidence, scope and lifecycle notes

#### 16. Skryrún — https://skryrun.com/

**Classification:** direct **cloud-first world lore + GM-session + player-portal** competitor, differentiated by its three-layer **world canon → campaign variation → session** model. Official documentation also lives at **scryrun.com**, an alternate domain spelling; both are attributed to the Skryrún product. The site invites ordinary free account registration but reserves an evolving group of features for **beta testers**. The last dated release record located is **2 October 2026**, before this audit; do not treat published help articles for unfinished systems as proof they reached everyone.

Official evidence:

1. [Pricing and tiers](https://scryrun.com/help/reference/pricing-and-tiers) and [Public pricing](https://skryrun.com/pricing) — free Chronicler tier, paid Weaver/Runekeeper, credit and collaboration limits, and warning that beta access may be separate from plan access. Distinguish its tier name from Batch 5 Chronicler.
2. [Beta guide](https://scryrun.com/help/beta) and [Beta application](https://skryrun.com/beta) — unrestricted beta-test privileges and explicit not-yet-launched GM Screen, Discord sharing, 3D dice, statblock compendium and session canvas.
3. [Worldbuilding architecture and waterfall](https://scryrun.com/help/for-gms/worldbuilding), [Entities and articles](https://scryrun.com/help/for-gms/worldbuilding/entities-and-articles), [Relationship graph](https://scryrun.com/help/for-gms/worldbuilding/wikilinks-and-graph) — world/campaign/session inheritance, 20 entity categories, Tiptap articles, structured optional blocks, hierarchy, linked lore and graph.
4. [Map editor](https://scryrun.com/help/for-gms/worldbuilding/maps-and-locations) — PNG/JPG/WebP or video basemaps, Inkarnate/VTT import, entity pins, labels, polygons, routes, measurement, independent scales and spoiler visibility.
5. [Timeline and calendar](https://scryrun.com/help/for-gms/worldbuilding/timeline-and-calendar) and [Visibility and secrets](https://scryrun.com/help/for-gms/worldbuilding/visibility-and-secrets) — custom weekdays/month lengths/intercalary days; dated lore links and independently hidden plot events; inherited entity and per-block player visibility, some character-tag rules.
6. [Offline session packs](https://scryrun.com/help/for-gms/session-prep/offline-session-packs) — **in development**, a device-local reference copy of a linked, prepped session; explicitly **not a fully offline world editor**.
7. [Runes and AI art](https://scryrun.com/help/for-gms/tools/runes-and-ai-art) — page labelled **in development** with tester/admin scope for portraits/emblems/banners/style references, despite credit/pricing references elsewhere.
8. [Dated official changelog](https://scryrun.com/help/changelog) — 2026 progress on browser sheets, the 2024 D&D builder, spellbook, map/combat assets, campaign dashboards and session debrief. Treat changelog entries as developer evidence, not general-public entitlement tests.

**Special design considerations to preserve:** Its article's **Secret block** can be hidden while the containing character biography is public; campaign-aware **map tokens, drawn regions and timeline events** can also be revealed independently. Session planning and live tactical tools are a **distinct product surface** from lore authoring, and some may remain beta-only. The **waterfall** deliberately keeps world canon reusable between multiple campaigns without overwriting campaign deviations. AI presentation uses **consumable Runes**, and the explicitly in-development image generator offers reference-style matching and quality tiers. Any comparison with WBW's grounded AI should separate text generation, art, source provenance, credits, and **availability to normal customers**.

#### 17. OnlyWorlds — https://www.onlyworlds.com/

**Classification:** unusually relevant **local-first/open-interoperability** competitor. Its data **standard, self-owned files, offline browser editor (Atlas), phone PWA (Lantern), optional hosting, Obsidian connector, public API/SDKs and agent access** must be analysed as separate components. The whole ecosystem is not a native desktop programme, but it provides many of the practical benefits of WBW's local data design.

Official evidence:

1. [Atlas full documentation, updated 5 Nov 2026](https://onlyworlds.github.io/docs/tools/atlas.html) — free offline browser editor, own local JSON files, Chromium folder access versus Firefox/Safari browser storage, guided question onboarding, hosted sync, writing, graph, maps, chronology, knowledge and published pages.
2. [Schema and 22 entity kinds](https://onlyworlds.github.io/docs/schema/) and [Fields](https://onlyworlds.github.io/docs/schema/fields.html) — standardised typed entries and relationships, not established arbitrary GUI schema-design parity.
3. [Lantern mobile companion](https://onlyworlds.github.io/docs/tools/lantern.html) — installable home-screen web application, local offline notes and field edits, later sync, no-account invitation into character-relative player view.
4. [Hosted world accounts and permissions](https://onlyworlds.github.io/docs/tools/onlyworlds-com.html), [API members and sharing](https://onlyworlds.github.io/docs/development/api/members.html) — roles, invitations, private or published content, scoped access and co-edit.
5. [AI MCP server](https://onlyworlds.github.io/docs/development/mcp.html), [Agent seats](https://onlyworlds.github.io/docs/development/agents.html), [TypeScript SDK](https://onlyworlds.github.io/docs/development/typescript.html) — external AI/tool integrations, change authorship and agent boundaries (verify endpoint names at implementation time).
6. [Obsidian plugin](https://onlyworlds.github.io/docs/tools/obsidian-plugin.html) and [Changelog](https://onlyworlds.github.io/docs/changelog.html) — other supported authoring surfaces and date-specific release evolution.

**Special design considerations to preserve:**

- **Plain JSON working folder and real restore path:** Atlas can open the same world from local folder, exported ZIP, a standalone .owworld file or hosted sync. Browser-local storage is **not durable on clearing browser data**; its onboarding prompts to export or move worlds. A ZIP includes elements/pages/notes/charts/images and is reopenable, but not the server's separate uploaded attachment files, member attribution or necessarily original page layout across devices.
- **Local-first collaborative conflict resolution:** When both local and online users changed the same entity, Atlas retains the conflict and presents the user a choice. Shared-world roles include owner, co-builder, contributor, guest and character-specific player. A no-account invitation can expose knowledge only as a designated character perceives it.
- **Time-aware world model:** Its custom-calendar profile is not merely decoration: map pins/zones and charts can filter by world date; historical territorial change is intrinsically geographical. It can style roads, rivers, coasts, territories and forests from existing user geometry, **not create a fully random landscape**.
- **Open tool ecosystem:** World data is consumable by Obsidian, AI agents, external games, scripting SDKs and other applications. External assistants can be granted scoped agent seats. No evidence establishes a first-party hosted instant lore-writing AI in Atlas; the main matrix uses **P** to distinguish connectivity from an internal AI writing button.
- **Structured writing:** Books/chapters/scenes form an actual manuscript hierarchy and can link character/place occurrences from prose into typed lore. It must be evaluated against WBW's writing scope, not assumed covered by its entry editor.

#### 18. MythScribe — https://mythscribe.io/

**Classification:** direct **AI-first TTRPG co-pilot/worldbuilder** rather than a general user-owned world database or full cartographic editor. Its strongest documented workflows are natural-language world/NPC/quest generation, persistent world context, linked campaign management, system-aware character sheets and exported **flat dungeon-floorplan maps**.

Official evidence:

1. [Current pricing and tier entitlements](https://mythscribe.io/pricing) — Seeker $5 monthly, Adventurer $10, Archmage $20, cheaper annual commitments, **seven-day trial not ongoing free service**; worldbuilder specifically Adventurer and above.
2. [Worldbuilder](https://mythscribe.io/tools/worldbuilder) — NPC/Location/Faction/Item/Lore/Event types, linked quest-giver/location/faction references, editable character stats, date-stamped lore event examples, AI context.
3. [AI chat](https://mythscribe.io/tools/ai-chat) and [Encounter generator](https://mythscribe.io/tools/encounter-generator) — persistent world-aware generation, specific game-system rules, characters and rated combat encounters.
4. [Campaign planner](https://mythscribe.io/tools/dnd-campaign-planner) — GM arcs, session steps, encounters, connections to in-world NPCs/places and party records. This is a product assertion, not a paid-plan UI test.
5. [Battle/dungeon map maker](https://mythscribe.io/tools/map-maker) — prompting produces a crosshatched square-grid map with named rooms, downloadable **PNG/JPEG** images; its own FAQ recommends a separate cartographic tool for world/region maps.
6. [Privacy policy, March 2026](https://mythscribe.io/legal/privacy) — hosted personal/world and AI data, email account requirement, deletion/retention provisions and user-requested machine-readable export; does not establish a self-service ZIP editor roundtrip.

**Special design considerations to preserve:** MythScribe differentiates **system-specific convenience** from a general world schema: its D&D 5e, Pathfinder 2e and Daggerheart generators can draft balanced tactical encounters and complete sheet fields from world context. Its **AI dungeon plan** is a generated exportable image that could complement, rather than replace, WBW's conventional interactive cartography. The marketing phrase “free map maker” refers to a **time-limited trial**. Do not infer that this map generator is also an AI character-image service, that dated worldbuilder events provide a full timeline editor, or that a page stating “everything connects” demonstrates backlink visualisation.

### Provisional Batch 6 feature-design watchlist, **not yet validated WBW gaps**

1. **Canon without duplicating an entire world:** Skryrún's world→campaign→session inheritance and explicit canonisation address long-running campaigns branching from one setting. Determine whether WBW's schema/world model already enables comparable variations before scheduling anything.
2. **Reveals, handouts and character knowledge:** Skryrún's per-article-block/map-object/time-event secrets and live reveal mechanics, plus OnlyWorlds' “read only what this character knows” view and invitation links, are useful design benchmarks for WBW's planned reveal modes and mobile companion. The complexity of safe filtering and sync should be assessed before promises.
3. **Open, reliable data portability:** OnlyWorlds shows what a truly reconstructable ZIP, openly specified JSON, local folders, external SDKs, Obsidian interop, AI agent seats and explicit conflict handling can provide. It also exposes a caution: separately hosted file attachments omitted from a “whole-world ZIP” can undermine backup trust.
4. **Map history, not just a timeline:** Date-filtered pins and territorial polygons on OnlyWorlds maps create geography that changes with the fictional calendar. This is substantially different from manually storing “before/after siege” images and is a testable potential differentiator.
5. **Manuscript-to-lore automation:** OnlyWorlds links occurrences of proper nouns in chapter/scene prose to typed entries. Consider whether that would benefit WBW's writer audience, and distinguish it from generic AI writing.
6. **AI as an interface to content and game prep:** MythScribe's context-aware system character sheets, party-sized encounter balancing, arc/session plans, and named-room dungeon drawings demonstrate guided generation; Skryrún's Rune-based in-context content drafting is another reference. Verify grounding, editability and true rule correctness before adopting any claim of parity.
7. **Tabletop toolkit scope discipline:** Battlemaps, fog of war, 3D dice, session screens, economy/currency and system-specific SRDs may offer value but can transform a worldbuilding app into a full VTT. Compare expected user demand and engineering cost before treating every competitor feature as a mandatory roadmap item.
8. **Onboarding alternatives:** Skryrún offers guided NPC questions, OnlyWorlds constructs linked starter lore one question at a time, and MythScribe asks for genre/system/tone then offers AI generation. These provide test cases for WBW's already-planned guided World Builder onboarding.

**No WBW feature gap or roadmap commitment is confirmed from Batch 6 alone. Commercial outcomes, user ratings, revenue and publicity are out of scope for this research phase.**

### Outstanding Batch 6 verification questions

- **Skryrún:** Register a free account and, if Alex approves, separately request tester access to establish which help-described features are publicly available **versus** tester-only. Verify whether separate map navigation can behave as true nested maps despite “independent” documentation; test that map label text follows renamed entities, AI image generation entitlement, real custom fields, full export/import media survival, player-side secret leakage and general-public multisystem character sheets. No paid upgrade or beta request has been submitted.
- **OnlyWorlds:** Test Atlas offline in Chromium with folder permissions and in Firefox/Safari with browser storage; inspect actual schema field customisation, rich-text tables, whether PDFs display or merely attach, nested map navigation, calendar leap exceptions, on-device versus server-only attachment backup, Obsidian plugin interchange and two-device edit conflicts. Try a copied ZIP in a fresh browser. Verify SDK/MCP endpoints and agent-seat permissions against current published version, without authorising outside services.
- **MythScribe:** Use a consented trial only if Alex wants hands-on work; establish the exact editor/link/backlink behaviour, worldbuilder tier gates, session-plan integration, reproducibility and editable output of AI combat math and floorplans, self-service world export/reimport, sharing and private GM content rules, and limits on total generated/saved entities. A seven-day trial should not be mistaken for free ongoing service.
- **Cross-product:** Maintain the common 57 definitions, evaluate the **actual WBW shipping build** separately from branch work/plans at Stage 0, and postpone scored feature gaps and roadmap priorities to Stage 13. Vendor literature cannot yield 100% implementation accuracy without hands-on or developer confirmation.

---

## Batch 7: DMRealm, Storyflow, Quarry

**Evidence checked:** current official vendor landing/pricing pages, help centres, feature references, dated release notes and founder explanations on **6 November 2026**. No private beta invitation, subscription, purchase, login, installation or hands-on feature acceptance test was attempted. **Identity matters:** Storyflow here means the creative-canvas product at **storyflow.so**, not the unrelated products at storyflow.world, storyflow-ai.com or usestoryflow.com. **Lifecycle matters:** DMRealm is recruiting a private beta and describes its future free notebook as a *goal*; Storyflow is paid early access with a planned free tier; Quarry has an existing free entry-limited plan, but **Local Vault is Premium-only**. Claims in an unreleased/private beta are **vendor claims**, not equivalent to an unrestricted public feature.

### Comparable feature matrix (Batch 7)

This retains the **same 57 feature definitions** as Batches 1–6. **U means unknown, not absent.** **P** denotes materially narrower functionality, uncertain access, or a beta qualification; **G** denotes a feature specifically behind payment; **F** is planned rather than available; **N** is restricted to sufficiently explicit negative evidence. WBW remains **—** pending separate examination of its actual current build and branches.

| Category | Capability | DMRealm | Storyflow | Quarry | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | N | N | N | — |
| Platform | Edit entire world offline | P | N | P/G | — |
| Platform | Local user-controlled world files | N | N | G | — |
| Platform | Vendor-hosted cloud world storage | Y | Y | Y | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | N | N | N | — |
| Platform | Ongoing free account tier | F | F | Y | — |
| Structure | Structured lore/entry type templates | Y | P | Y | — |
| Structure | Fully arbitrary schema/field definitions | U | U | U | — |
| Structure | Editable reusable entry prompts | P | G | U | — |
| Onboarding | Guided question-based world creation | P | P/G | U | — |
| Editing | Rich-text article editing | Y | Y | Y | — |
| Editing | Images embedded within entries | Y | Y | Y | — |
| Editing | PDF document viewing alongside notes | U | Y | P | — |
| Editing | Tables inside editor or wiki content | P | Y | U | — |
| Editing | Split/multicolumn working panels | P | Y | P | — |
| Linking | Cross-article wiki links/mentions | Y | P | Y | — |
| Linking | Backlinks/auto-discovered relationships | Y | U | Y | — |
| Linking | Visual relationship graph | Y | P | P | — |
| Organisation | Categories/hierarchy/tags | Y | Y | Y | — |
| Organisation | Search across lore | Y | Y | P | — |
| Characters | Automatically generated family trees | U | U | U | — |
| Factions | Interactive diplomacy/organisation webs | P | P | P | — |
| Time | User-defined calendar systems | Y | U | U | — |
| Time | Recurring calendar events | Y | U | U | — |
| Time | Event/history timelines | Y | P | P | — |
| Time | Historical events shown geographically on maps | U | U | U | — |
| Maps | Import/upload map image | Y | P | U | — |
| Maps | Native procedural terrain generation | Y | N | N | — |
| Maps | Native procedural city generation | Y | N | N | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | Y | U | Y | — |
| Maps | Nested/interconnected interactive maps | U | N | U | — |
| Maps | Toggleable image/map layers | Y | P | Y | — |
| Maps | Political borders/territory polygons | Y | U | P | — |
| Maps | Draw roads/routes on map | Y | U | Y | — |
| Maps | Calculate distance and travel time | Y | U | U | — |
| Maps | Map labels synchronise automatically from wiki entries | U | U | U | — |
| RPG | Campaign/plot management | Y | P | P | — |
| RPG | Session preparation, session notes or reports | Y | P | P | — |
| RPG | Integrated RPG character sheets | Y | U | U | — |
| RPG | Creature/NPC statblocks | Y | U | U | — |
| RPG | Built-in support for multiple game systems | P | U | U | — |
| Visibility | Hide GM/private secrets | Y | P | P | — |
| Visibility | Publish or share player-readable world pages | Y | Y | Y | — |
| Visibility | Granular reader/subscriber permissions | Y | G | P | — |
| Collaboration | Invite coauthors or collaborative editors | Y | Y | U | — |
| AI | Integrated lore-writing AI | P | G | N | — |
| AI | Integrated AI image generation | P | G | N | — |
| Generation | In-product heraldry design/generation | U | P/G | U | — |
| Generation | In-product character portrait generation | P | P/G | N | — |
| Export | Portable whole-world backup/export | P | P | P/G | — |
| Export | Editable Word export and reimport | U | P | Y | — |
| Export | Compiled world/codex as PDF | P | P | P | — |
| Writing | Dedicated novel/manuscript tool | U | N | Y | — |
| Accessibility | Multiple localised UI languages | U | U | U | — |
| Accessibility | UI font/readability/colour accessibility controls | P | P | Y | — |

**Classification caveats:**

- **DMRealm:** The product is **not presently an open general-release service**. Its private beta may expose wiki, realm, GM, calendar, art, map and campaign features, but availability to ordinary accounts is unverified. Pricing states the manually maintained notebook is **intended** to be free when released, AI is consumption-priced and in beta, and exact costs are undecided. Accordingly **F** for the future free tier and **P** for AI should not be converted into active public entitlements. It is cloud-first: an **already open page** can reportedly accept edits during brief disconnection, but navigating/reloading while offline cannot retrieve the rest of the world. This is **not whole-world offline authoring**. A wiki **relationship-graph block** exists while a full standalone graph view is still being developed; the matrix's graph Y means *visual relationships*, not parity with a dedicated graph workspace. Its two documented RPG system profiles are **D&D 5e SRD 5.1 and D&D 2024 SRD 5.2.1**, not established Pathfinder/Daggerheart/etc. Multi-game support is therefore **P**. The **settlement generator is genuine procedural city generation**: the official recipe describes settlement type and seed, generated districts, streets and building blocks, density/entropy changes, regenerated quarters, rerolled/frozen blocks, editable walls and labelled layers. Mark city **Y** as *documented private-beta functionality*, pending hands-on testing. Exported JSON and Foundry/UniversalVTT bundles do not establish a complete editable world roundtrip (including uploads) or Word import. Beware Atlas help entries headed **“Private numeric details”** and **“when available to you”**: they document conditional specialised access, not universally usable map functionality. The reported map measurement covers distance and travel, but the exact travel-time rules need testing.
- **Storyflow:** The audited **storyflow.so** is a broad browser-only **AI creative project canvas**, not a traditional typed lore database. Its worldbuilding, character profile, plot, research and story-bible templates contain visual cards and documents; they do **not** demonstrate schema-driven entity types, automatic backlinks, bespoke chronologies, player knowledge or a real GIS/map renderer. Imported map images are **moodboard/reference media**, not native interactive maps. Native procedural terrain/city generation is **N** because this is an infinite canvas rather than a cartographic editor; it *does* generate AI imagery in eligible paid tiers, a separate capability. The AI reads board/doc context and writes cards/docs, but its rich project planning does not prove **guided question-by-question onboarding**; **P/G** records AI-assisted bootstrapping only. It provides real rich-text documents with tables, comments, headings, embedded media, TOC, PDF/Word/plain exports. Nonetheless its **own novel-planner page explicitly positions the product as prewriting/structuring, not the final manuscript drafting tool**; hence N for *dedicated manuscript*, without denying its substantial document editor. Word **export** is verified; Word **reimport** is not, so P. **Free is future** (advertised before end 2026) and regular sign-up currently requires a paid early-access plan; invited collaborators can join an existing paid workspace without payment. Collaborator role levels are **Max tier**, but simple sharing/commenting and view-only links are less restricted. Overall AI access/credits, video/image tools and role boundaries vary by Plus/Pro/Max; generic G here means **plan-gated**, not necessarily Pro or Max only.
- **Quarry:** The Story Shack's **quarry.thestoryshack.com** is a browser/PWA worldbuilding and serious-writing workspace; installing its PWA shortcut does **not** turn it into a native desktop app. A free ongoing account provides its tools with a **25-item combined world-entry/map cap**; Premium ($5.99 monthly or $29.99 yearly, as listed 6 Nov) raises the limit and adds **Local Vault**. Founder documentation **17 September 2026 explicitly says Local Vault is Premium-only** and works in compatible desktop Chromium browsers with permission to a selected local folder. Cloud and local are **separate workspaces**, not continuously synchronised; copying a world creates a new distinct world and simultaneous edits across computers can conflict. The locally stored *data* should not be mistaken for guaranteed **offline functioning of the entire browser app** without a network connection, so **P/G** pending a clean offline test. Fantasy and battlemaps are *drawn in an editor*, **not algorithmically generated**; the vendor map-maker FAQ explicitly rules out random map generation. Map labels, nested drill-down, geometric territory polygons and direct import of a background image remain inadequately proven. One product page presents manual maps and linked map objects as current, whereas an older page describes mapmaking as in development; prefer the **newer currently marketed feature** but verify it in-app. Its Word **import and export** are confirmed for manuscript material, not for faithfully restoring all lore fields. Published shareable worlds are selectively republished **snapshots** (with optional password), not automatic character-by-character spoiler gating. The founder explicitly says **Quarry works without built-in AI**: separate optional external WebMCP/agent interaction is an integration, not a built-in writing or image model. Its website offers numerous translation links, but **multilingual website navigation is not proof the editor UI itself is localised**. Public Premium text presents monthly and annual subscriptions; a hidden generic account-upgrade template also references a lifetime option without a published price or eligibility. **One-time access remains U**, not a definitive N.

### Comparative feature extensions found in Batch 7

The 57 common columns are deliberately stable; preserve these more specific product design patterns for later cross-batch synthesis. An extension **Y** means vendor-documented, **P** a narrower or beta-qualified analogue, **G** a paid entitlement, **F** planned, **U** not verified, **N** explicitly contradicted. No assertion about the present WBW implementation is made here.

| Additional capability | DMRealm | Storyflow | Quarry | WBW |
|---|:---:|:---:|:---:|:---:|
| Infinite draggable board for connected cards, notes and story structures | Y | Y | Y | — |
| Whiteboard cards promoted into persistent typed wiki entries | Y | P | P | — |
| Board tokens/objects linked bidirectionally to one underlying entity | Y | U | P | — |
| Saved board views, snapshots and reusable board templates | Y | Y | U | — |
| 200+ reusable AI-assisted creative workflow templates/tactics | U | G | U | — |
| Hierarchical project folders containing boards and rich documents | P | Y | Y | — |
| Automatically discovered semantic backlink list (not visual proximity) | Y | U | Y | — |
| Directed, typed relationship strengths or visibility properties | Y | U | U | — |
| Graph rendered directly as an embedded wiki block | Y | U | U | — |
| Full standalone searchable relationship-graph surface | F | U | P | — |
| Freeform manuscript plot boards with rearrangeable acts/scenes | P | Y | Y | — |
| Chapter/scene writing, progress targets and time/word tracking | U | P | Y | — |
| Text-document AI reading/length/style analysis | U | G | N | — |
| Embed live documents directly on a spatial infinite canvas | P | Y | P | — |
| Collapsible rich-text sections, callouts and document mini-TOC | U | Y | U | — |
| Video and audio attachments visible on research/creative boards | Y | Y | P | — |
| In-app PDF preview or research board alongside writing | U | Y | P | — |
| Browser clipper to bring articles and assets into the workspace | U | Y | U | — |
| Custom-world calendar months, weeks, eras and campaign date | Y | U | U | — |
| Repeating festivals/holidays tied to the world's calendar | Y | U | U | — |
| Timeline items cross-referenced to people, places and campaigns | Y | P | P | — |
| Terrain brushes by biome, with generator-based starts | Y | N | N | — |
| Manual settlement editor separate from world-map terrain | Y | N | P | — |
| Seeded settlement generation with rerollable/pinnable districts, streets and building blocks | Y | N | N | — |
| Standalone atlas map reusable on several lore pages | Y | N | U | — |
| Fine-grained separate map marker/player visibility | Y | U | P | — |
| User-defined factions, quests, campaign-progress and agenda clocks | Y | P | P | — |
| Encounter composition using party, creature records and battlemaps | Y | U | P | — |
| Session audio capture/transcription and speaker-labelled summaries | P | U | U | — |
| Role-based author/editor and per-section/player/group secrecy | Y | G | P | — |
| No-account publishable, view-only information | Y | Y | Y | — |
| Deliberate three-step publishing/reveal switches to prevent leaks | Y | U | U | — |
| Published world is snapshot requiring manual republish | U | U | Y | — |
| Branching playable interactive fiction with choice-state/inventory/conditions | U | P | Y | — |
| Native markdown manuscript import and export | U | P | Y | — |
| Word manuscript import, edit and Word/PDF/HTML export | U | P | Y | — |
| AI edits world/board only via reviewable draft acceptance | Y | N | N | — |
| AI directly edits selected doc/canvas with undo | P | Y | N | — |
| AI can gather external web research with references and board context | U | Y | N | — |
| Expose board/project to outside AI clients using MCP | U | Y | P | — |
| External AI integration is opt-in while app works without AI | P | U | Y | — |
| Audio ambience/focus timer/typing environment personalisation | P | U | Y | — |
| Portable local-vault folder as separately selected cloud alternative | N | N | G | — |
| Local and cloud worlds copied deliberately, not auto-synced | N | N | G | — |
| One free tier limited by total combined lore/map items | U | U | Y | — |
| Worldbuilding data used for hosted no-account shop links | Y | U | U | — |
| Export FoundryVTT/UniversalVTT encounter/map assets | Y | U | U | — |
| RPG profiles for two D&D SRD revisions, not multiple rule families | Y | U | U | — |

### Vendor evidence, product scope and lifecycle notes

#### 19. DMRealm — https://dmrealm.com/

**Classification:** direct fantasy/TTRPG **browser-cloud campaign notebook, atlas, graph, permissioned lore wiki and private-beta AI assistant**. Very relevant to WBW's proposed grounded assistant, Wiki/graph/maps, calendar and campaign workflows, but **not yet generally released**. Product specifications need a separate beta-access test before a feature is represented as reliable shipping functionality.

Official evidence:

1. [Product](https://dmrealm.com/), [features](https://dmrealm.com/features) and [pricing / beta terms](https://dmrealm.com/pricing) — private-beta join/waitlist; future free manually edited notebook goal; AI pay-per-generation in beta with final costs unsettled. Do not call it currently open/free SaaS.
2. [Help index](https://docs.dmrealm.com/), [Wiki](https://docs.dmrealm.com/docs/wiki) and [relationship graph](https://docs.dmrealm.com/docs/graph) — entity and page modules, `@` mentions, typed semantic links, backlink discovery and graph as an embeddable wiki block. A full separate graph is described as an enhancement under work.
3. [Boards](https://docs.dmrealm.com/docs/boards) — freeform thinking canvas, draggable typed page-backed tokens, board-specific links, snapshots, timelines, templates/groups, per-object visibility, player previews and media/PDF export. Mark high-confidence as **documented beta**; verify account access.
4. [Atlas](https://docs.dmrealm.com/docs/atlas), [paint terrain](https://docs.dmrealm.com/docs/paint-terrain), [draw regions](https://docs.dmrealm.com/docs/draw-a-region) and [procedural settlement generator](https://docs.dmrealm.com/docs/build-a-settlement) — standalone reusable maps in folders, images plus terrain generators and **seeded town/city generation**, editable/rerollable districts, road routing, building blocks, walls, borders, labels, pins, measurement and layer controls. The specialised conditional **private numeric details** operations must not be mistaken for general-access graphics tooling.
5. [Calendars and time](https://docs.dmrealm.com/docs/calendars), [quests](https://docs.dmrealm.com/docs/quests) and [running a campaign](https://dmrealm.com/docs/running-a-campaign) — custom eras/months/weeks, recurring holidays, linked dated events and GM's current game date, quest progression, campaign encounters and session journals.
6. [Role-based permissions](https://docs.dmrealm.com/docs/roles), [publishing](https://docs.dmrealm.com/docs/publishing) and [work offline](https://docs.dmrealm.com/docs/work-offline) — section/record/editor/player/group scopes and no-account public reading, multi-switch publication, temporary edit of current cached browser page, not fully offline worlds.
7. [Supported rules systems](https://docs.dmrealm.com/docs/supported-systems), [AI assistant](https://docs.dmrealm.com/docs/ai-overview) and [export guide](https://docs.dmrealm.com/docs/exports) — two 5e SRD version profiles, AI proposals/portraits subject to consumption and approval, JSON/asset/Foundry/UniversalVTT pathways. Neither all-media restore nor MS Word two-way editing is proven.

**Design observations to preserve:** A single record can be represented as a wiki page, movable board token, linked map marker, quest reference and graph node, while **visibility on the board/map object is independent of entity visibility**. The model of publish-as-a-separate-deliberate-action reduces accidental spoiler leakage; check this against WBW's planned reveal modes in Stage 0. The Atlas and campaign tools share records rather than forcing duplicate NPC or site entries. Its **AI suggestions are drafts requiring a human acceptance step**, an important contrast to direct-edit AI workspaces; a rich review workflow need not require accepting every generated detail. Session audio and recaps, faction clocks, merchant inventories, holidays and VTT export are additional product surfaces. Do not infer offline parity or a broadly supported free plan from its aspirational pricing copy.

#### 20. Storyflow (creative canvas) — https://storyflow.so/

**Classification:** **adjacent AI brainstorming, visual planning, collaborative document and reference-board competitor** with explicit novelist/worldbuilding templates, not a native TTRPG wiki/cartographer. **Do not merge with identically named software elsewhere.** Its planning experience could materially inform WBW's World Builder and alternative freeform scratchpad, but a direct field-by-field schema comparison needs caution.

Official evidence:

1. [Pricing](https://storyflow.so/pricing) and [dated news / releases](https://storyflow.so/news-updates) — early-access paid plans, projected free tier before the end of 2026, version 1.0 targeted for Q1 2027, and tier differences in AI, team roles, media generation and exports. Current invitation-based collaboration does not turn the product into an ongoing ordinary free tier.
2. [Product introduction](https://storyflow.so/help-center/intro-to-storyflow), [worldbuilding template](https://storyflow.so/templates/writers/world-building) and [novel planner](https://storyflow.so/novel-planner) — generic world, character and plot templates laid out as an editable canvas with AI generation; the vendor itself recommends drafting actual novels in a separate manuscript programme.
3. [Document editor basics](https://storyflow.so/help-center/document-basics) and [help centre](https://storyflow.so/help-center) — prose docs on boards or at project level, tables, toggles, callouts, covers, comments, TOC, Word/PDF/text exports, uploaded media/PDF reference. Reading a DOCX is not proof of reconstructing one by import.
4. [How Storyflow AI works](https://storyflow.so/help-center/how-storyflow-ai-works) — board/document-aware assistance, targeted rewriting, research/synthesis, generated cards/tables/images and context selection; AI changes are generally direct canvas edits with undo, not DMRealm-style approval-only proposals.
5. [Storyflow MCP](https://storyflow.so/mcp) — optional external assistant/client access to connected project or boards. This is different from WBW's own potential product-specific grounded AI assistant.

**Design observations to preserve:** Its most relevant capabilities are **spatially arranged work with persistent context**, freeform content and rich documents living side-by-side, **AI-assisted first-blank-board creation**, transparent source references and quick export, plus explicit collaboration/feedback. Standardised “Tactics” templates and a browser clipper are adjacent workflow patterns. Storyflow's strength is **pre-writing breadth and connections seen spatially**, while the lack of verified typed entity schema, temporal rules, map layers, world file control, game sheets and lore-specific visibility limits direct product substitutability. It also demonstrates that **being able to write prose in the editor** and **being a dedicated final-manuscript system** are materially different feature claims.

#### 21. Quarry — https://thestoryshack.com/writer/

**Classification:** unusually relevant **worldbuilding plus novel-writing browser/PWA** with typed lore, maps, relationship canvas, manuscript chapters, optional local-owned workspace and published interactive-fiction extensions. Its current offer combines a genuinely ongoing **25-world-item free allowance** with paid unlimited work and a **Premium-gated** folder vault.

Official evidence:

1. [Quarry overview and pricing](https://thestoryshack.com/writer/) — characters, organisations, cultures, magic, places, rich worldbible, World Canvas, plot Outliner, manuscripts, maps, attachments, read-only publishing, free cap and Premium pricing. Product names like Junction/Foundry/Satchel elsewhere in the Story Shack suite should not silently be counted as Quarry-native capabilities.
2. [Fantasy map-maker](https://thestoryshack.com/writer/fantasy-map-maker/) — hand-drawn landscape/settlements/routes with linked map objects and export; its FAQ excludes automatic random map generation. [Novel writing](https://thestoryshack.com/writer/novel-writing-software/) — books/chapters/scenes, Word/Markdown/text import, Word/PDF/Markdown/HTML export, distraction-free writing and progress support.
3. [Why I added Local Vault, 17 Sep 2026](https://thestoryshack.com/articles/why-i-added-local-vault-to-quarry/) — **Premium-only**, compatible desktop Chrome/Edge browser, selected user folder, separate Cloud/Local workspaces, manual world copying and non-automatic synchronisation. This is stronger evidence for the actual tier and data semantics than undated summary bullets that merely say “local storage”.
4. [Quarry Chromebook/PWA design, 20 Aug 2026](https://thestoryshack.com/articles/quarry-writing-software-for-chromebooks/) — installable browser workspace, custom themes and focused writing. A PWA is not a native application, and a stored folder is not proof of offline execution of all tools.
5. [Opening Quarry to assistants, 30 Sep 2026](https://thestoryshack.com/articles/why-i-added-optional-webmcp-to-quarry/) — optional external WebMCP/assistant connectivity, stated explicitly to leave Quarry **functional without AI**, not an integrated first-party generative model.

**Design observations to preserve:** The strongest strategic combination is **a publishable world bible and manuscript workspace**, with **Word as a two-way manuscript format**, typed lore and manual relationship/mapping editors. Its **branching playable narrative** (choices, inventories, variables and conditions) extends the world from static reference into interactive output and merits separate later verification. The **read-only publication snapshot** design has different consistency/security properties from live player-specific GM knowledge: the owner can select what to publish and optionally password-protect it, but republishing is required to refresh public content. The **Premium local folder** is an explicit trust feature, though default cloud and vault copies do not auto-sync; that restriction is important for safe device and backup expectations. The vendor's no-native-AI stance is a conscious product choice, not missing documentation.

### Outstanding Batch 7 verification questions

- **DMRealm:** If the beta becomes publicly testable, create a throwaway realm and distinguish beta-only permissions from future general-release plans; measure behaviour on full network loss, reload and navigation; prove the accessible standalone graph, exact source-file/export restore and uploaded media coverage; **reproduce the documented seeded/interactive settlement generator** and test its per-block regeneration and layer rules; test hierarchy-linked nested maps, map-label updates, table blocks, travel-time calculation, campaign roles and real player spoiler isolation. Record final AI credit entitlements when published. The conditional **private numeric details** section should only be reviewed under authorised tester access, not treated as a general shipping feature.
- **Storyflow:** Confirm any ordinary-access free plan has *actually* launched rather than merely reached its projected date; verify what Plus versus Pro versus Max includes, AI image generation and MCP availability, full-project import/export restore, and whether Word imports reconstruct document blocks. Test whether editable board links create true bidirectional typed records or just visual arrows; verify scope of view/comment/edit roles and whether AI reads excluded project/hidden assets. Revisit version 1.0 only after its Q1 2027 target.
- **Quarry:** Check installable PWA and Premium folder vault with network fully disabled, including opening the app from a cold start and accessing all entity/map/manuscript assets; verify exact on-disk format, export/restore of image and PDF attachments, collision handling, and whether copied cloud/local worlds retain internal links. Test current fantasy and battlemap shipping tools against older pre-release articles: interactive pins, independent maps, image background import, map labels, layers, borders and routes. Confirm Word roundtrips and whether multiple writers can co-edit, check the 25-item cap calculation and whether localisation reaches the editor rather than the public website. Confirm external-assistant permission scoping, without authorising external AI accounts.
- **Cross-product:** Common 57 columns are vendor-document classifications, **not a score of WBW gaps**. Differentiate Storyflow's writing-board media, DMRealm's semantic beta atlas and Quarry's locally stored manual manuscript/map tools. The actual WBW baseline belongs in Stage 0; competitor commercial outcomes and public sentiment remain a separate later phase.

---

## Batch 8: NovelCanon, Deckle

**Evidence checked:** official product and pricing sites, dated help-centre documentation, official feature instructions, vendor comparisons used only for *their own* product facts, and versioned Deckle release notices on **6 November 2026**. No registration, external AI-provider connection, purchase, download/install, trial, file upload or hands-on feature acceptance test was undertaken. This batch deliberately contains **two** products as fixed in the original 33-product roster. **NovelCanon is a hosted, installable-PWA novel continuity studio whose AI requires the user's own provider key; Deckle is an independently installed, offline, local-file novel-writing/typesetting application with no built-in AI.** Deckle's unlimited-time demo is **not a full free licence for creating personal projects**. Its latest located release before this audit is **1.7.9, dated 3 November 2026**.

### Comparable feature matrix (Batch 8)

Use the identical **57 ordered capabilities** as Batches 1–7. **U means unverified, not absent**. **P** means partial, narrower or mismatched scope; **G** means paid tier or licence required; **N** needs explicit negative evidence or decisive incompatibility. The **WBW baseline is unassessed** and remains —. This research is vendor-document validation only, not a commercial-success or user-sentiment audit.

| Category | Capability | NovelCanon | Deckle | Mimir |
|---|---|:---:|:---:|:---:|
| Platform | Native desktop application | N | Y | — |
| Platform | Edit entire world offline | P | Y | — |
| Platform | Local user-controlled world files | N | Y | — |
| Platform | Vendor-hosted cloud world storage | Y | N | — |
| Platform | Multiple separate worlds/projects | G | Y | — |
| Platform | One-time purchase instead of subscription | N | Y | — |
| Platform | Ongoing free account tier | Y | N | — |
| Structure | Structured lore/entry type templates | Y | Y | — |
| Structure | Fully arbitrary schema/field definitions | U | Y | — |
| Structure | Editable reusable entry prompts | U | P | — |
| Onboarding | Guided question-based world creation | P/G | U | — |
| Editing | Rich-text article editing | Y | Y | — |
| Editing | Images embedded within entries | U | Y | — |
| Editing | PDF document viewing alongside notes | U | Y | — |
| Editing | Tables inside editor or wiki content | U | U | — |
| Editing | Split/multicolumn working panels | P | Y | — |
| Linking | Cross-article wiki links/mentions | P | P | — |
| Linking | Backlinks/auto-discovered relationships | P | Y | — |
| Linking | Visual relationship graph | U | U | — |
| Organisation | Categories/hierarchy/tags | Y | Y | — |
| Organisation | Search across lore | P | Y | — |
| Characters | Automatically generated family trees | U | U | — |
| Factions | Interactive diplomacy/organisation webs | U | U | — |
| Time | User-defined calendar systems | U | N | — |
| Time | Recurring calendar events | U | N | — |
| Time | Event/history timelines | Y | Y | — |
| Time | Historical events shown geographically on maps | U | N | — |
| Maps | Import/upload map image | U | P | — |
| Maps | Native procedural terrain generation | U | N | — |
| Maps | Native procedural city generation | U | N | — |
| Maps | Generated sci-fi star systems and routes | U | U | — |
| Maps | Interactive pins linked to lore | U | N | — |
| Maps | Nested/interconnected interactive maps | U | N | — |
| Maps | Toggleable image/map layers | U | N | — |
| Maps | Political borders/territory polygons | U | N | — |
| Maps | Draw roads/routes on map | U | N | — |
| Maps | Calculate distance and travel time | U | N | — |
| Maps | Map labels synchronise automatically from wiki entries | U | N | — |
| RPG | Campaign/plot management | P | P | — |
| RPG | Session preparation, session notes or reports | U | U | — |
| RPG | Integrated RPG character sheets | U | N | — |
| RPG | Creature/NPC statblocks | U | N | — |
| RPG | Built-in support for multiple game systems | U | N | — |
| Visibility | Hide GM/private secrets | U | P | — |
| Visibility | Publish or share player-readable world pages | U | N | — |
| Visibility | Granular reader/subscriber permissions | U | N | — |
| Collaboration | Invite coauthors or collaborative editors | U | N | — |
| AI | Integrated lore-writing AI | Y | N | — |
| AI | Integrated AI image generation | U | N | — |
| Generation | In-product heraldry design/generation | U | N | — |
| Generation | In-product character portrait generation | U | N | — |
| Export | Portable whole-world backup/export | G | Y | — |
| Export | Editable Word export and reimport | G | Y | — |
| Export | Compiled world/codex as PDF | P/G | Y | — |
| Writing | Dedicated novel/manuscript tool | Y | Y | — |
| Accessibility | Multiple localised UI languages | U | U | — |
| Accessibility | UI font/readability/colour accessibility controls | Y | Y | — |

**Classification caveats:**

- **NovelCanon:** The account-backed **novelcanon.com** app runs in a browser and can be **installed like an app** on desktop/mobile, but published material describes an offline-capable web/PWA client, **not native executables**. Its **drafts save locally first and sync to a vendor account**; it explicitly promises offline writing, while **AI analysis and requests require a network and the user's own API key**. It does not demonstrate unrestricted offline reading/editing of the entire Story Bible or a user-controlled working-folder world database: offline whole-world **P**, local user files **N**, cloud **Y**. An ongoing **Free** tier exists after an automatic **14-day Pro trial**, but is capped at **one editable project and three editable chapters**; surplus projects/chapters become **read-only, never deleted**, while basic Markdown/text export remains. Multiple active projects, full DOCX import/export and guided manuscript-to-bible generation require Manuscript/Pro (G); a self-contained whole-project backup and PDF/EPUB export require Pro. Free and Manuscript include **20 AI writing actions/day, Pro unlimited**; all plans bill provider-model usage **separately**, and background scene analysis is **not free merely because it does not consume the daily action quota**. Free BYOK OpenRouter generation models do not eliminate the charged **low-cost background fact-analysis model**. **Automatic deterministic as-you-type checks** need no AI calls, but per-scene facts and deep checking require a connected, funded provider key. The product **imports Word and exports Word**, but *only on appropriate tiers* and for **manuscripts**, not evidence that the whole typed world schema survives DOCX roundtrip. Characters, places, world rules, relationships, plot threads and event timeline constitute a substantial book-oriented Story Bible; source-linked fact registry and accepted suggestions are **not proof of user-configurable arbitrary entity-field schema, universal backlinks, a visual world relationship graph, custom calendars or cartography**. PDF export is **a manuscript PDF**, not verified as a compiled world-codex book, so **P/G**. No separate in-product general world atlas is documented, so the many map columns remain **U** instead of pretending an explicit product prohibition. The product supplies novel plotting, not dedicated live RPG campaign/session infrastructure.
- **Deckle:** The audited **deckle.studio** is an **installed Windows/macOS/Linux desktop programme** using projects kept in user-controlled local folders (a `.deckle` database plus `research/` and assets). It works offline **after activation**, has **no vendor cloud sync, online shared world, phone app or real-time coauthoring** and expressly has **no AI service or generative model**. $197 is a **one-time licence including future updates**, for two devices; **“Take Deckle for a Spin” is an unlimited-duration, no-account demonstration** with the sample book, about **500 words** of added text and at most a few new Codex/timeline items, but **creating a personal project requires purchase**, so it is **N for an ongoing fully usable free account tier**, with the demo separately logged below. Its Codex can add completely custom fields/field types/dropdown options, entry sections and saved templates, but these are **form fields/templates**, not a demonstrated library of **editable question-prompts**; score P for that narrower capability. The guided demonstration tours the app rather than interviewing an author to construct a world; guided question-based creation remains U. This is a **book-linked story bible**, not an independent navigable public lore wiki. “Appears In” scans actual names and aliases **in manuscript documents** and builds inverse mention lists; it does not establish a universal entity-to-entity wiki backlink system or relationship graph. `@` and manual linking tie documents to Codex entries, **P for full wiki-like cross-article linking**. Character sheets mean **writer character profiles**, not playable D&D/PF RPG sheets. The product's **Timeline is a zoomable, arbitrary-number story axis** with plotline lanes and era bands; official feature documentation explicitly says **not a real-world calendar calculation**. The homepage's “Real dates or your own / March 1871” marketing framing must not be equated to a **user-configurable week/month calendar or recurring dated events**, hence N. Images can be imported as **research/illustrations and full-page book art**, but are not interactive map baselayers; **P** for importing map images and N for the map-native tools. It can export the **entire Codex as a PDF or editable Word story bible** and the manuscript as DOCX/EPUB/print PDF; it also offers **whole-project Markdown folder exports with assets/research plus re-import**, local ZIP backups and manual restoration, so portable backup **Y**. Custom **interface fonts, themes, split editor and multilingual spellchecking** are documented; spellchecking Arabic, Polish, Norwegian etc or writing RTL prose is **not proof the application interface is translated**, so UI localisation remains U. Its privacy is local disk custody, **not** player-specific secret controls or publication.
- **Source disagreements to resolve:** Deckle's **Codex Templates** feature guide contains contradictory statements within one page: its “things to know” says a template becomes an independent copy, yet its own FAQ says editing the template **propagates new fields to every existing entry**. The dated **1.6 release** separately asserts propagation. Until a hands-on test, record saved template **Y** but do **not** promise reliable live schema propagation on every existing entry. Likewise the **Timeline feature guide** explicitly denies real calendar semantics despite headline wording elsewhere. Prefer the more precise technical feature descriptions, flag the conflict and retest if roadmap decisions depend on it. Deckle's latest **1.7.9** release provides important newer evidence that **full-project Markdown export/re-import including assets**, custom writing font, right-to-left language text and expanded document/image compilation are now available; do not accidentally use older articles to mark these missing.

### Comparative feature extensions found in Batch 8

These are candidate design patterns beyond the unchanged 57 columns. **Y** indicates first-party documented support, **G** an explicit entitlement, **P** a related/narrower capability, **N** documented absence, and **U** unresolved. WBW is left unscored until Stage 0.

| Additional capability | NovelCanon | Deckle | WBW |
|---|:---:|:---:|:---:|
| In-editor near-instant deterministic name/fact warnings without paid AI call | Y | N | — |
| Per-scene AI fact extraction into a source-linked canonical fact registry | Y | N | — |
| Facts automatically retired when source prose no longer asserts them | Y | N | — |
| Review-and-accept suggested people, places, relationships and world rules | G | N | — |
| Manuscript import automatically drafts a complete Story Bible | G | N | — |
| Post-draft scan proposes newly introduced canon entities for human review | G | N | — |
| Suggested duplicate entity can instead become alias of an existing entry | G | U | — |
| Whole-book AI contradiction/foreshadowing/world-rule/knowledge check | G | N | — |
| Contradiction evidence links both passages, with fix/dismiss/intentional resolution | Y | N | — |
| AI warns about characters knowing information before they learn it | G | N | — |
| AI proposes edited prose only for explicit accept/reject/regenerate | Y | N | — |
| AI-generated passage self-audit against confirmed canon before acceptance | Y | N | — |
| Editable AI author-voice profile derived from the user's own prose | G | N | — |
| Choose external model/provider/API key without markup from app | Y | N | — |
| Provider usage estimate and hard monthly model-spend ceiling | Y | N | — |
| Background lore analysis charged separately from daily writing-action quota | Y | N | — |
| One project/three editable chapters with surplus retained read-only on free | Y | N | — |
| Offline PWA drafts with local-first autosave and subsequent cloud reconciliation | Y | N | — |
| On-device native project folder containing local database and media assets | N | Y | — |
| No-account unlimited-time sample/demo with limited new content | N | Y | — |
| Lifetime paid licence including future updates | N | Y | — |
| Completely AI-free app with no built-in model code/service | N | Y | — |
| In-manuscript automatic mention index for Codex entries and aliases | P | Y | — |
| Inline hover preview of matched character/place entry inside prose | U | Y | — |
| Deliberately link a Codex character to a scene where not named | U | Y | — |
| Per-entry custom field types/options, role badges and schema sections | U | Y | — |
| Reusable Codex section/field templates with central management | U | Y | — |
| Confirmed propagation of changed templates to older linked entries | U | P | — |
| Project-specific plot beat sheet using Three-Act, Hero's Journey or Save the Cat | Y | P | — |
| Corkboard scene cards with POV, draft status, summary and live reordering | Y | Y | — |
| Adjustable multi-pane editor (up to four independently open documents) | P | Y | — |
| Continuous reading of manuscript without breaking at chapters | G | Y | — |
| Narrative date scale in arbitrary units with nested eras and plotline lanes | Y | Y | — |
| Link timeline events to draft scenes and people, filter by person/plotline | P | Y | — |
| Duration events and separate coloured eras/range bands | U | Y | — |
| Character age calculated from character's Born field at timeline events | U | Y | — |
| Actual user-authored 12-month/week/leap/repeating calendar engine | U | N | — |
| Automated whole-project zipped backups with configurable local retention | U | Y | — |
| Restore one earlier chapter snapshot without rolling back entire project | Y | Y | — |
| Export fully reconstructable project folder as Markdown plus media/research | U | Y | — |
| Import DOCX/PDF/EPUB/Markdown/TXT/Scrivener into chapter/scene hierarchy | G | P | — |
| Import Scrivener preserving chapter/scene structure and research | P | Y | — |
| Export full world/story bible to typeset PDF or editable Word | U | Y | — |
| Export selected chapter subset without changing the full manuscript | U | Y | — |
| Print-on-demand trim, bleed, type, running heads and EPUB styling from live preview | P | Y | — |
| Book/page-cover, full-bleed image, two-page spread and boxed set export | U | Y | — |
| Citation style support and automatically composed bibliography | U | Y | — |
| Import a web page as a reference snapshot for offline use | U | Y | — |
| Timed writing sprints, goals, streaks and planned completion pace | Y | Y | — |
| Writing-session chronicle/activity heatmap and per-session word/time log | P | Y | — |
| Arabic/right-to-left manuscript editing and ebook/PDF/DOCX layout | U | Y | — |
| Separate writing-font preferences from finished book's typeset font | P | Y | — |

### Vendor evidence, scope and lifecycle notes

#### 22. NovelCanon — https://novelcanon.com/

**Classification:** direct **AI-assisted long-form-fiction authoring and canon-continuity** neighbour to WBW's lore/AI features, but built around the **draft manuscript as the source of truth**. Especially valuable for assessing **grounded AI citations, canon drift and human approval**, not a substitute for a general-purpose fantasy atlas, lore schema designer, D&D sheet library or player-sharing system. Vendor claims are not independently stress-tested.

Official evidence:

1. [Main product](https://novelcanon.com/) and [pricing](https://novelcanon.com/pricing) — entire draft/Story Bible/corkboard/beat-sheet workflow, local-first browser writing with cloud sync, optional PWA installation, Free/Manuscript/Pro tier boundaries, BYOK AI and explicit approval for draft AI passages.
2. [Plans and billing, last updated 4 Nov 2026](https://novelcanon.com/help/plans-and-billing) — Free 1 project/3 chapters with read-only excess and Markdown/plain export; Manuscript $5 monthly billed annually or $7 monthly with unlimited chapters, AI-assisted full import and DOCX; Pro $12 monthly billed annually or $15 monthly with deep scan, voice matching, full backup and EPUB/PDF. Both lower plans cap manual AI actions at 20/day; **14-day Pro trial** requires no payment card.
3. [Getting started](https://novelcanon.com/help/getting-started) — one project equals one book; chapters/scenes, Story Bible sections, overview, corkboard, beat sheets, fact tracking from 100+ word scenes, saves locally before cloud sync, rollback through History. The initial workflow is **not** a documented one-question-at-a-time worldbuilding interview.
4. [Import a manuscript](https://novelcanon.com/help/import-your-manuscript) — DOCX, PDF, EPUB, Markdown, plain text and Scrivener (10 MB/file), heading-based chapter/scene detection, background factual extraction, suggested characters/places/rules/relationships/threads/events, aliases and acceptance workflow. Full import restricted to Manuscript/Pro or Pro trial; **importing itself requires the user's configured API key and paid analysis capacity**, not just a NovelCanon account.
5. [Find and fix contradictions, 4 Nov 2026](https://novelcanon.com/help/find-and-fix-contradictions) — distinguish zero-provider-cost on-device as-you-type checks, charged AI scene fact recording and Pro whole-book scan; evidence paired to original passages, human choice of canon, intentional-exception/dismissal handling, cleared issues after edits, character-knowledge tests, explicitly untested travel times and Timeline semantics.
6. [Connect an AI key and cost controls](https://novelcanon.com/help/connect-an-ai-key) — OpenRouter/OpenAI/Anthropic/Google providers, selectable model vs fixed cheaper analysis model, estimate before jobs, monthly hard spending cap, encrypt-at-rest API credentials, key error handling. The app itself is a paid product **in addition to** the provider's bills; model costs are not bundled into its plan.

**Design observations to preserve:** NovelCanon treats **manuscript prose as evidence**, linking individual passages to facts and recognising that changed claims should expire. It explicitly shows conflicting quotations, asks the author which is canon, and avoids inserting inferred entities until approved, including an alias suggestion when duplicates are likely. Its **three levels of checking** should be compared separately with WBW's current grounded-lore AI, and the **100-word threshold and paid analysis key** are material restrictions. It even distinguishes stable facts (eye colour, birthdate) from mutable facts (job/location), though its rules do not attempt travel-time consistency. Automatic fact extraction can support **both worldbuilding and continuity QA**, but one must avoid allowing a prose-reading model to silently overwrite established user canon. The free tier is real yet severely chapter-limited; the paid tier only controls editor capabilities, while API-key costs are a separate customer decision.

#### 23. Deckle — https://deckle.studio/

**Classification:** direct **locally installed, one-time-purchase, no-AI novel drafting/formatting suite**; adjacent worldbuilding competitor through its detailed Codex and precise story chronology. A meaningful benchmark for WBW's local-first philosophy and proposed writer-facing features, but not an interactive atlas or live TTRPG campaign manager.

Official evidence:

1. [Main product, current price and feature overview](https://deckle.studio/) and [press facts](https://deckle.studio/press/) — $197 lifetime purchase (two Windows/macOS/Linux devices), works offline after activation with user-owned files, no built-in AI/cloud collaboration, Codex, visual Timeline, four-pane editor, full publication pipeline, no-card demo.
2. [Codex feature guide](https://deckle.studio/wiki/features/codex/) — Characters/Locations/Items/Custom sections, aliases, role/type badges, custom entry fields and sections, portrait/gallery, literal name and alias detection across book, separate manual character-to-scene associations.
3. [Codex Templates](https://deckle.studio/wiki/features/codex/templates/) and [version 1.6 release](https://deckle.studio/deckle-1-6-brings-a-smarter-story-bible-selective-compiling-and-a-more-flexible-outliner/) — save, edit and reuse schema fields; note conflicting assertions within current guide regarding propagation to already created entries; 1.6 claims central propagation, so a paid/demo acceptance test is needed before promising exact behaviour.
4. [Timeline feature guide](https://deckle.studio/wiki/features/timeline/) — swim-lane plotlines, zoomable **story-relative numeric axis**, custom unit labels, ranged events, era bands, per-event linked prose/Codex characters, filtered views and age-at-event; **explicitly not calendar computation**. [Product front page](https://deckle.studio/) uses a broader “real dates” presentation; this conflict is preserved rather than hiding it.
5. [Research area](https://deckle.studio/wiki/features/research/), [split editor](https://deckle.studio/wiki/features/multi-pane/), [Word import](https://deckle.studio/wiki/features/import/docx/), [backups](https://deckle.studio/wiki/features/backups/) and [document version snapshots](https://deckle.studio/wiki/features/versions/) — imported/stored PDF/DOCX/images/web snapshots alongside draft (but not compiled), up to four document panes, ZIP project backups and manual restoration, per-chapter snapshots/rollback.
6. [Version 1.5 release, 30 Jul 2026](https://deckle.studio/deckle-1-5-adds-a-visual-story-timeline-a-story-codex-and-writing-goals/) — Codex and Timeline debut/upgrade, goals and multilingual spellcheck; [1.7 release, 21 Sep 2026](https://deckle.studio/deckle-1-7-use-the-whole-app-free-then-decide/) — genuinely open-ended no-account **sample-mode trial** with limited new writing, own-project licence requirement, writing Chronicle and citation tools.
7. [Latest dated 1.7.9 release, 3 Nov 2026](https://deckle.studio/deckle-1-7-9-your-own-writing-font-full-page-pictures-boxed-sets-and-custom-chapter-openings/) — crucial newly documented **whole-project Markdown folder export AND reimport** preserving pictures/PDF/research/notes, custom independent authoring font, full-page and spread artwork, boxed sets, multi-format Word import/export refinements, localised manuscript text including RTL Arabic, plus interface/navigation refinements.
8. [Story-bible handoff guide](https://deckle.studio/wiki/workflow/software/story-bible-software/) — compiled full Codex PDF with contents, editable Word handoff, individual character sheet PDF/Word, project templates carrying lore into new books; [offline/no-AI/local data explanation](https://deckle.studio/wiki/workflow/software/does-atticus-use-ai/) — local `.deckle` database, `research/` and `.deckle-assets/`, no cloud server, no generative model.

**Design observations to preserve:** Deckle uses **two forms of manuscript/lore linkage**, separating **automatic literal mention scanning** (including aliases, with inverse chapter lists) from **manually tagged conceptual presence**, so unnamed characters can still be connected to scenes. It also connects dated plotline events to characters and manuscript scenes, and apparently derives character ages from birth data. The **Codex exports as an actual reference document**, not just an EPUB containing chapter prose; this is a stronger example than most vague “PDF export” claims. Its **real restore story** combines local project folders, periodic ZIP backups, single-chapter snapshots and new 1.7.9 Markdown+asset roundtrips. The publishing pipeline covers selective chapter exclusion, print/EPUB/Word and fine typography including right-to-left text, with one-time licensing and no AI. It is clearly a writer's **book production workspace**, not a public/player wiki, non-linear map explorer or structured TTRPG rules builder. The unlimited-duration **trial mode is an excellent transparent evaluation tactic**, but must never be counted as a fully usable free product tier. The date-axis and reusable-template contradictions deserve hands-on clarification before feature copying.

### Outstanding Batch 8 verification questions

- **NovelCanon:** Verify PWA cold-start and offline availability of the *entire* Story Bible, not just an open draft; inspect actual IndexedDB/account backup/restore semantics, simultaneous device conflict behaviour and how snapshots work offline. Test the no-cost inline checker separately from funded AI fact extraction, particularly 100-word scene threshold, time-varying facts, aliases, revisions and whether apparent facts/contradictions are hallucinated. Try DOCX manuscript import/export with known heading structures and imagery; verify paid full-backup file format and whether its restore recreates a new editable project. Check whether true user-editable schema, tables, embedded maps, entity-to-entity relationships, direct wiki links, comments, collaborators or read-only sharing exist behind authentication. Any account/API-cost action needs separate authorisation; **no key was connected**.
- **Deckle:** On a consented download/demo, validate precise trial item/word caps, project creation restrictions and what is functional without activation/network. Examine **real project-folder layout**, ZIP restoration, full Markdown export/reimport of notes/PDF/images, and restored alias/entry references. Confirm how updated Codex templates affect **existing** entries, because the FAQ and the same page's guidance conflict. Test whether @ mentions, hover cards and “Appears In” apply to manuscript **and** Codex text, and whether a genuine entity-to-entity link graph exists. Reproduce plotline numeric dates vs real-calendar marketing, calendar month arithmetic and automatic character ages. Check compiled whole-Codex PDF/Word outputs, optional imagery, custom templates, Unicode/RTL and accessible colour/font settings. Do not attribute video reviews or vendor comparative claims about **other** products as evidence of Deckle's own implementation.
- **Cross-product:** Compare **NovelCanon's AI-derived, approved canonical facts from prose** against **Deckle's user-maintained custom Codex and deterministic mention scanning**; these are *different approaches* to authoring and validating lore. Both have sophisticated manuscript functionality; neither should be automatically assumed equivalent to a generic worldbuilding map/GM knowledge system. Wait until Stage 0 and Stage 13 for WBW gap judgements and roadmap priority. Commercial success, reputation, reviews, user counts and market share are **not** part of this evidence batch.

---

## Batch 9: Obsidian, Notion, Scrivener

**Evidence checked:** current official Obsidian help pages, core-plugin inventory, pricing, Sync/Publish terms and policies; Notion pricing/help for new offline availability, 2026-era Map view, databases, AI, sharing and export; and Literature & Latte product pages, manuals, 2026 articles, licensing and platform details on **6 November 2026**. No account was created, no apps/plugins were installed, no paid tiers were accessed and no hands-on feature test was performed. **These are three general-purpose neighbouring products, not specialist native fantasy-world suites.** Notion's **geographic Map view** and **AI image generation** and Obsidian's built-in **Bases** must be recognised as first-party, currently documented capabilities; third-party Obsidian plugins must not be silently merged into its core.

### Comparable feature matrix (Batch 9)

Use the identical **57 ordered capabilities** from Batches 1–8. Ratings cover the documented *native/first-party* experience unless specifically qualified below. **P** means narrower workflows may approximate the requirement; **G** means gated; **N** requires a vendor statement or decisive product-boundary incompatibility; **U** is deliberately unresolved, not No. Generic note/doc text that could describe a fantasy world is **not** proof of a game-system engine, fantasy time arithmetic or custom layered atlas. The **WBW baseline remains unassessed** (—).

| Category | Capability | Obsidian | Notion | Scrivener | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | Y | Y | Y | — |
| Platform | Edit entire world offline | Y | P | Y | — |
| Platform | Local user-controlled world files | Y | N | Y | — |
| Platform | Vendor-hosted cloud world storage | G | Y | N | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | P | N | Y | — |
| Platform | Ongoing free account tier | Y | Y | N | — |
| Structure | Structured lore/entry type templates | P | Y | Y | — |
| Structure | Fully arbitrary schema/field definitions | P | Y | P | — |
| Structure | Editable reusable entry prompts | Y | Y | Y | — |
| Onboarding | Guided question-based world creation | U | U | U | — |
| Editing | Rich-text article editing | P | Y | Y | — |
| Editing | Images embedded within entries | Y | Y | Y | — |
| Editing | PDF document viewing alongside notes | Y | Y | Y | — |
| Editing | Tables inside editor or wiki content | Y | Y | Y | — |
| Editing | Split/multicolumn working panels | Y | Y | Y | — |
| Linking | Cross-article wiki links/mentions | Y | Y | P | — |
| Linking | Backlinks/auto-discovered relationships | Y | Y | U | — |
| Linking | Visual relationship graph | Y | U | U | — |
| Organisation | Categories/hierarchy/tags | Y | Y | Y | — |
| Organisation | Search across lore | Y | Y | Y | — |
| Characters | Automatically generated family trees | U | U | U | — |
| Factions | Interactive diplomacy/organisation webs | P | P | U | — |
| Time | User-defined calendar systems | U | U | U | — |
| Time | Recurring calendar events | P | Y | U | — |
| Time | Event/history timelines | P | Y | P | — |
| Time | Historical events shown geographically on maps | U | P | U | — |
| Maps | Import/upload map image | Y | Y | Y | — |
| Maps | Native procedural terrain generation | U | U | U | — |
| Maps | Native procedural city generation | U | U | U | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | U | P | U | — |
| Maps | Nested/interconnected interactive maps | U | U | U | — |
| Maps | Toggleable image/map layers | U | U | U | — |
| Maps | Political borders/territory polygons | U | U | U | — |
| Maps | Draw roads/routes on map | U | U | U | — |
| Maps | Calculate distance and travel time | U | N | U | — |
| Maps | Map labels synchronise automatically from wiki entries | U | U | U | — |
| RPG | Campaign/plot management | P | P | P | — |
| RPG | Session preparation, session notes or reports | P | P | P | — |
| RPG | Integrated RPG character sheets | P | P | P | — |
| RPG | Creature/NPC statblocks | P | P | P | — |
| RPG | Built-in support for multiple game systems | U | U | U | — |
| Visibility | Hide GM/private secrets | P | Y | P | — |
| Visibility | Publish or share player-readable world pages | G | Y | N | — |
| Visibility | Granular reader/subscriber permissions | P/G | Y | N | — |
| Collaboration | Invite coauthors or collaborative editors | G | Y | N | — |
| AI | Integrated lore-writing AI | N | G | N | — |
| AI | Integrated AI image generation | N | G | N | — |
| Generation | In-product heraldry design/generation | U | U | N | — |
| Generation | In-product character portrait generation | U | P/G | N | — |
| Export | Portable whole-world backup/export | Y | P | Y | — |
| Export | Editable Word export and reimport | P | P | Y | — |
| Export | Compiled world/codex as PDF | P | P/G | P | — |
| Writing | Dedicated novel/manuscript tool | P | P | Y | — |
| Accessibility | Multiple localised UI languages | Y | Y | Y | — |
| Accessibility | UI font/readability/colour accessibility controls | Y | Y | Y | — |

**Classification caveats:**

- **Obsidian — distinguish first-party core from community plugins.** A Windows/macOS/Linux **desktop** and iOS/Android app stores Markdown note files, attachments, `.base` views, `.canvas` boards and app settings in a user-controlled **local vault folder**. Free use **including commercial work** no longer needs a commercial licence; optional **Catalyst and Commercial contributions** are support purchases, **not** a one-time paid full-app licence, so one-time-vs-subscription is **P**, while unrestricted continuing free core is **Y**. The vendor's paid **Sync Standard** ($4/user/month annual or $5 monthly, 1 GB/1 vault/1 month history) and **Sync Plus** ($8 annual or $10 monthly, 10 GB/10 vaults/12 months history) are optional hosted encrypted services; no sync subscription is needed to store or copy local files. **All shared-vault collaborators must individually subscribe to Sync.** **Publish** ($8/site/month annual or $10 monthly) exposes *selected notes*, search and graph on a website; it supports a **whole-site password**, **not evidenced per-reader/per-entry GM role permissions**, so private lore handling is **P** via selective publish, and granular viewer rights **P/G**. Core includes Markdown Live Preview, linked notes and backlinks, Graph, Canvas, Templates, PDF/image embedding, and **Bases** as local Markdown-property-powered database-like views with calculations and formula lookups. Arbitrary frontmatter fields are **not** the same as a guided, type-restricted fantasy schema editor or validator; P. Canvas cards and graph nodes can illustrate faction connections but don't constitute a typed diplomacy engine; P. Native note export to PDF covers an individual document, not demonstrably a whole codex; a compiled codex is P pending use of community tools. No first-party AI core plugin is listed; AI, fantasy clocks, interactive Leaflet maps, tabletop statblocks and manuscript workflows may be achievable through separately maintained plugins/templates, **but no such plugin was installed or evaluated**, and they are not first-party Ys. The official first-party **Importer** is itself a separately installed community plugin; third-party DOCX conversion is not a native bidirectional Word pipeline. The built-in day/week note approach partially supports periodic journals, not user-defined time-system recurrence. The vendor explicitly advises a **separate backup**: Sync is not itself backup.
- **Notion — hosted by default, offline is limited but real.** Windows/macOS desktop and mobile apps connect to a vendor-hosted workspace; Notion documents that data resides on its cloud servers even if local *downloaded* pages are edited offline. **All plans** now let users explicitly download individual pages in the *desktop/mobile app* and create/edit notes while disconnected; the browser doesn't offer it. Subpages **do not** download with their parent; downloading a database initially caches **only the first 50 rows of the first view**, with extra rows individually downloadable. Some blocks (AI, embeds, Forms and Buttons) do not work offline; sharing and access changes need a connection; database property conflicts can lose a concurrent change. Paid tiers automatically download recent/favourite pages. This is **P**, fundamentally different from Obsidian/Scrivener full local project editing. Free exists, but Free for workspaces of **two or more members limits total blocks**, and attachments cap at **5 MB** (vs up to 5 GB on paid plans). **Databases, custom property types, templates, Relations/Rollups, formula values, table/board/gallery/timeline/calendar/chart views, forms and linked databases** make the structure highly customisable; a separate visual entity-to-entity graph is unverified. Notion's newly documented first-party **Map view** is **not** a fantasy-map-image layer: a **Place/address/geolocation property** puts at most **100 database records** on a real-world map and tapping a pin opens that database page. A historical event can be a dated record with a Place and be filtered/displayed geographically (P), but a timeline scrubber, user-uploaded image as the basemap, custom polygons and nested atlas are not established. The official Map help **explicitly says distance between places cannot be calculated**, so that row is N (travel-time engine also unproven). Repeating database templates **do** create recurring dated records in the standard calendar; they don't provide arbitrary fantasy month lengths or leap rules. Notion Sites and page/guest/member permissions provide publication and team collaboration with much more granularity than Obsidian Publish's global password. **Notion AI** writes, summarises, searches workspace/connected sources, builds databases and assists with formulas; **AI image creation/editing is documented for Business and Enterprise with usage allowances**, while Free and Plus receive only a trial. An AI-generated picture may depict a character (P/G), **not a supported consistent portrait system**. Export is possible as HTML, Markdown + CSV, or PDF; however **CSV cannot recreate relation and rollup properties upon reimport**, and DOCX import has no corresponding first-party DOCX export, thus portable backup **P** and editable Word *roundtrip* **P**. Whole nested-page PDF is gated (Business/Enterprise) and results in **separate PDF files**, not one designed codex (P/G). The vendor has also **phased out entire-workspace PDF exports** in 2026; page PDF and Markdown/CSV/HTML workspace exports remain. Public sites can expose collaborator names/profile images/email addresses in metadata: check this before treating them as a secret-safe player publication system.
- **Scrivener — full local manuscript editor, not a collaborative wiki.** Scrivener 3 on macOS/Windows is a **one-time licensed application** with a genuine **30 days of actual use** trial but **no enduring free entitlement**; iOS/iPadOS is purchased separately. It uses user-controlled local **`.scriv` projects**, works offline and offers optional **Dropbox** synchronisation (especially to the iOS app) without turning into a developer-hosted cloud system. On desktop, the Binder tree, built-in novel/character/place templates, Corkboard index cards, Outliner, custom metadata fields, labels, status, keywords, internal document links, Research folder, image/PDF/web capture, **up to four document panes**, section snapshots/compare and automatic project backups are first-party. The fixed entity-type and field **templates** can be user-written, but custom metadata is attached to manuscript documents; it is not a true unlimited database schema with full field-level validation (P). Notes can chronicle plot and session material; card order and date fields do **not** make a native fantasy-calendar/time-axis or event-mapped atlas. Character sheets are **writer's character questionnaires**, not calculated RPG rules sheets; mark P as manually repurposable. **Compile** assembles binder manuscript content into print/PDF, Word DOCX and ebooks; a user could put character/location articles into the Draft/Manuscript and produce a reference PDF (P), but Scrivener does **not** advertise automatically compiling its research/metadata into an integrated linked world encyclopaedia. Its **File > Export > Files** separately exports text as DOCX/RTF/HTML etc. Import/export and automated ZIP backups are genuine, while a `.scriv` backup is not the same as an open-format, exact semantic interchange schema. The vendor explicitly states in a September 2026 article that **Scrivener itself contains no AI**; OS-level Apple Intelligence prompts are external. Scrivener has no built-in collaborative user permissions, real-time coauthoring or hosted player-facing wiki, so those rights/publication rows are N. Desktop and iOS feature sets differ: **Corkboard on iPad but not iPhone**, while desktop offers richer metadata/compile functionality; confirm before promising feature parity. An August 2026 official guide verifies multiple **interface translations** separate from foreign-language spellchecking, although completeness varies by platform.

### Comparative feature extensions found in Batch 9

These patterns are outside the fixed 57-row schema. Scores refer to **documented first-party support**, except an explicitly marked external plugin/integration row. They are *not* WBW requirements or recommendations until the baseline and synthesis phases.

| Additional capability | Obsidian | Notion | Scrivener | WBW |
|---|:---:|:---:|:---:|:---:|
| Entirely local, human-readable Markdown per lore article | Y | N | N | — |
| Local indexed structured note views without separate hosted database | Y | N | P | — |
| Saved database-like views based on metadata properties | Y | Y | P | — |
| Formula fields reaching through links to related note properties | Y | Y | P | — |
| Configurable typed property fields beyond plain text/tags | Y | Y | Y | — |
| Database Relation + Rollup fields managed as linked records | P | Y | U | — |
| Visual relationship graph automatically built from document links | Y | U | U | — |
| Infinite freeform canvas of linked notes/images/embed cards | Y | P | P | — |
| Obsidian community plugins for calendars, maps, TTRPG statblocks or AI | P | N | N | — |
| Custom CSS snippets and downloadable visual themes | Y | P/G | P | — |
| Saved layout/workspace presets across multiple panes | Y | P | P | — |
| Local file recovery snapshots | Y | N | Y | — |
| Encrypted selective sync with version history as optional paid service | G | P | N | — |
| Shared vault requiring each coauthor to buy a sync entitlement | G | N | N | — |
| Publish selective notes as searchable, linked external website | G | Y | N | — |
| Single password protecting entire published site | G | U | N | — |
| Separate reader-level permissions on individual pages | U | Y | N | — |
| First-party browser web clipper to local notes | Y | Y | P | — |
| Mobile apps for iOS/Android with meaningful editing | Y | Y | P | — |
| Fully usable free personal core without account or usage cap | Y | P | N | — |
| Commercial use allowed for free, donation/licence optional | Y | P | N | — |
| Select chosen pages for offline access per device | Y | Y | Y | — |
| Pre-cache subpages with parent automatically | Y | N | Y | — |
| First database view automatically downloads only first 50 rows | N | Y | N | — |
| Offline create/edit but online-only Forms, embeds, Buttons and AI | N | Y | N | — |
| Automatic offline download of recently used pages on paid tier | N | G | N | — |
| Actual geographic Map view from place/address properties | N | Y | N | — |
| Map view opens linked record by clicking location pin | U | Y | U | — |
| Maximum 100 displayed map records per view | N | Y | N | — |
| Real-world point-to-point distance calculated in native map | U | N | U | — |
| Multiple interchangeable database views for same data | Y | Y | P | — |
| Repeating database template creates new dated items on schedule | P | Y | P | — |
| Drag/drop story section on corkboard also reorders manuscript | P | P | Y | — |
| Scene synopsis and editing metadata in hierarchical outliner | P | P | Y | — |
| Author custom character/place template sheet inside writing project | Y | Y | Y | — |
| Save and compare per-section pre-revision snapshots | Y | Y | Y | — |
| Automatic local zipped project backup on open/close | U | N | Y | — |
| Up to four independent working documents in same native editor | P | P | Y | — |
| Editable manuscript export as Microsoft Word DOCX | P | N | Y | — |
| Rich Word, RTF, PDF and EPUB manuscript Compile engine | P | P | Y | — |
| Customisable print/book layout via document/section compile profiles | P | P | Y | — |
| Third-party Dropbox required for iOS project syncing | N | N | Y | — |
| In-product AI edits based on workspace context and source retrieval | N | G | N | — |
| AI generates and edits standalone images on current paid plan | N | G | N | — |
| AI image outputs tied consistently to one fictional character identity | U | U | N | — |
| Export relational database CSV then import preserving every relation | P | N | P | — |
| User-facing workspaces and groups with page-level read/edit permissions | N | Y | N | — |
| Dated page revisions and restore retention changes by plan | P/G | G | Y | — |
| Multiple UI translations distinct from content/spellchecker language | Y | Y | Y | — |

**Extension interpretation:** A **P** for generic character profile, manuscript/corkboard or third-party plugin possibility is **not** a claim of a shipped native D&D-specific implementation. Obsidian Bases and its formulas are substantial native structure; **plugins add a different security/maintenance dependency**. Notion's real geographic map is valuable for a traveller's or modern-world location database, but differs architecturally from fantasy cartography. Scrivener's document compilation is one of the strongest writing-product benchmarks, yet it remains a book-oriented system. “N” in the extension rows that explicitly say *first-party/vendor cloud/native* is about that specific design, not inability to reproduce a similar effect through third-party workarounds.

### Vendor evidence, scope and lifecycle notes

#### 24. Obsidian — https://obsidian.md/

**Classification:** a **local-first Markdown knowledge-base platform** with rich official core link/graph/Canvas/Bases capabilities and a very broad independently maintained extension ecosystem. Particularly important when considering WBW's **user-controlled data, offline reliability, relationship navigation, theme customisation and optional services**, but not evidence of an out-of-box RPG atlas.

Official evidence:

1. [Pricing and optional commercial licence](https://obsidian.md/pricing), [2025 free-for-work policy](https://obsidian.md/blog/free-for-work/) and [licence terms](https://obsidian.md/terms) — free core for personal and commercial use, optional support purchases, Sync Standard/Plus and Publish subscription prices; **commercial licence no longer mandatory**.
2. [Vaults](https://obsidian.md/help/vault), [storage format](https://obsidian.md/help/Files%2Band%2Bfolders/How%2BObsidian%2Bstores%2Bdata), [accepted formats](https://obsidian.md/help/file-formats), [desktop/mobile download](https://obsidian.md/download) — local Markdown, `.base` and JSON Canvas, PDF/image and audiovisual attachments, all major platforms.
3. [Complete core-plugin inventory](https://obsidian.md/help/plugins), [Bases introduction](https://obsidian.md/help/bases), [formula functions](https://obsidian.md/help/formulas), [views](https://obsidian.md/help/bases/views) and [Canvas guide](https://obsidian.md/help/plugins/canvas) — Notes, templates, backlinks/unlinked mentions, graph, interactive note cards, tables/formulas and metadata, all first-party; no specialist fantasy map or native AI claimed.
4. [Sync service plans/storage](https://obsidian.md/sync), [shared-vault collaboration terms](https://obsidian.md/help/sync/collaborate), [Sync pricing limits](https://obsidian.md/help/sync/plans), [backup advice](https://obsidian.md/help/backup) — encryption, selective syncing, version history, per-user shared collaboration and explicit recommendation of backups **separate** from synchronisation.
5. [Publish overview](https://obsidian.md/publish), [site security/password](https://obsidian.md/help/publish/security) and [site settings](https://obsidian.md/help/publish/sites) — host chosen pages, site-level password rather than verified per-article group ACL, full-text search and graph; subscription per site.
6. [Community plugins/security](https://obsidian.md/help/plugin-security), [official but separately installed Importer](https://obsidian.md/help/plugins/importer), [Web Clipper](https://obsidian.md/help/web-clipper) and [Appearance settings](https://obsidian.md/help/settings) — extension/provenance boundary, cross-app imports, browser clipping, UI languages and font control. **An official plugin in the community directory is still not automatically enabled core.**

**Design observations to preserve:** Obsidian offers a clear separation between **portable data files**, **views** generated from note properties, **canvas graph composition**, **automatic backlinks**, and optional **hosted synchronisation/publication**. This suggests distinguishing data custody, visual working surfaces, and sharing entitlements when eventually comparing WBW. Bases' formula joins and new view types are worth testing against WBW's schema/table fields; but unlike a worldbuilding domain schema, Bases does not establish built-in NPC class rules, fantasy calendar arithmetic, family trees or a political map layer. A plugin-enabled vault can become extraordinarily capable; **record the plugin, author, maintenance, offline support and licences individually before promoting its capabilities to first-party status**.

#### 25. Notion — https://www.notion.com/

**Classification:** a highly configurable **cloud-workspace/database/wiki** tool that can be adapted for a shared lore encyclopaedia or plot tracker. First-party **Map view**, advanced database properties and permissioned publication are relevant, but its selective offline cache and cloud-native data model are not WBW's intended local-first implementation.

Official evidence:

1. [Pricing and tier matrix](https://www.notion.com/en-gb/pricing) — Free, Plus, Business and Enterprise, member/block/file/history limits, Business/Enterprise AI allowances, desktop/mobile offline features and workspace rights.
2. [Full offline help and limitations](https://www.notion.com/en-gb/help/use-pages-offline) and [offline setup guide](https://www.notion.com/en-gb/help/guides/working-offline-in-notion-everything-you-need-to-know) — individual page downloads, paid automatic cached recent/favourites, 50 database rows/first view, no inherited subpage cache, offline conflict limits and blocked advanced features.
3. [Database views](https://www.notion.com/help/views-filters-and-sorts), [Relations/Rollups](https://www.notion.com/en-gb/help/relations-and-rollups), [database templates](https://www.notion.com/en-gb/help/database-templates), [repeating templates](https://www.notion.com/en-gb/help/guides/automate-work-repeating-database-templates) — schema/views, relational fields, standard date timelines, repeats, cards, charts and custom page patterns.
4. [Map view and explicit limitations](https://www.notion.com/en-gb/help/maps) — Place properties interpreted as **real geocoordinates/addresses**, **100 markers** shown, record-opening map pins and explicit **absence of point-to-point distance calculation**. This source supersedes any older blanket assertion that Notion has no map view.
5. [Notion AI feature scope](https://www.notion.com/help/notion-ai-faqs), [AI image creation/editing](https://www.notion.com/en-gb/help/create-and-edit-images-with-notion-ai), [AI trial limits](https://www.notion.com/help/complimentary-ai-responses) — Business/Enterprise gated writing/database assistance and image generation, Free/Plus limited trial, not a stable character portrait pipeline.
6. [Sharing and permissions](https://www.notion.com/en-gb/help/sharing-and-permissions), [publish with Notion Sites](https://www.notion.com/en-gb/help/public-pages-and-web-publishing), [Sites customisation](https://www.notion.com/help/edit-and-customize-your-notion-sites) — permission granularity and public sites, plus public contributor-metadata disclosure and selected paid controls.
7. [Export all content](https://www.notion.com/en-gb/help/export-your-content), [backups](https://www.notion.com/help/back-up-your-data), [imports and CSV data loss](https://www.notion.com/help/import-data-into-notion), [language switching](https://www.notion.com/help/change-your-language) — PDF/HTML/Markdown+CSV exports, full workspace export, one-way loss of database Relation/Rollup settings on CSV reimport, Word import without built-in DOCX export, many UI languages. The workspace-level PDF option was scheduled for removal by **31 August 2026**; do not silently treat historic documentation as current.

**Design observations to preserve:** Notion illustrates how much can be done with a **general schema + many views**, plus page templates, relationship rollups, automations and permission groups, without making the database intrinsically about fantasy lore. There is a critical trade-off between Notion's strong multi-user collaboration and the operational risk of **partial offline caches**: a user who assumes an entire campaign copied offline might actually have only a top-level page and 50 rows. Its geographic pins are linked to article records but limited to real-world map tiles and address providers. **Portability must be tested by restoration fidelity**, not the mere existence of CSV export: relation links cannot currently be reconstituted by CSV import. The ability of Notion AI to generate pictures is real; an identity-consistent portrait pipeline, heraldry generator or asset marketplace is a different feature not established by the vendor docs.

#### 26. Scrivener — https://www.literatureandlatte.com/scrivener/overview

**Classification:** a locally owned **long-form writing, research, scene-planning and publishing** application, with optional Dropbox interoperability, not a canonical multi-world graph database or player wiki. A relevant benchmark for WBW's manuscript-writing ambitions, offline project safety, novel outline navigation and final export.

Official evidence:

1. [Current product overview and platform feature explanations](https://www.literatureandlatte.com/scrivener/overview) — desktop Binder, Corkboard, Outliner, character/location template sheets, four-pane layout, research/media, snapshots/compare, autosave and backup, novel and script workflows, desktop vs mobile feature differences.
2. [Scrivener purchase/licensing](https://www.literatureandlatte.com/store/scrivener), [30-day actual-use trial download](https://www.literatureandlatte.com/download), [licensing FAQ](https://www.literatureandlatte.com/scrivener/faqs) — perpetual desktop platform licence, separate iOS purchase, Mac+Windows bundle, no ongoing free core.
3. [Scrivener 3 Mac manual](https://www.literatureandlatte.com/docs/Scrivener_Manual-Mac.pdf) and [Windows manual](https://www.literatureandlatte.com/docs/Scrivener_Manual-Win.pdf) — project metadata, bookmarks, custom fields, snapshots, document links, backups, Binder export and detailed Compile behaviour. Manuals are **references**, not proof of feature parity on the much narrower iPhone editor.
4. [Inspector and custom metadata](https://www.literatureandlatte.com/blog/get-to-know-the-scrivener-inspector) and [adding custom metadata](https://www.literatureandlatte.com/blog/how-to-add-custom-metadata-to-the-scrivener-inspector) — dates, lists, checkboxes, text and document-level fields alongside labels, status, comments and keywords.
5. [Compile to PDF or DOCX](https://www.literatureandlatte.com/blog/how-to-compile-your-scrivener-project-for-print-pdf-or-microsoft-word), [sync with iOS over Dropbox or file transfer](https://www.literatureandlatte.com/blog/sync-scrivener-for-ipad-and-iphone-projects-using-dropbox-itunes-or-the-finder) and [mobile scriptwriting/compile workflow](https://www.literatureandlatte.com/blog/how-to-use-scriptwriting-in-scrivener-on-ipad-and-iphone) — real handoff formats and optional third-party syncing.
6. [Vendor statement, 15 September 2026: no AI in Scrivener](https://www.literatureandlatte.com/blog/scrivener-and-ai-why-do-i-see-ai-prompts-in-my-scrivener-projects-on-mac) — distinguishes OS-provided Apple Intelligence prompts from software-owned AI. [Interface-language guide, August 2026](https://www.literatureandlatte.com/blog/how-to-change-scriveners-interface-language) — translated app menus separately from spellchecking language.

**Design observations to preserve:** Scrivener organises writing into **fragments that can be re-ordered freely, yet compile into one polished output**, with editable scene synopses, independent research alongside draft, section snapshots and multiple export profiles. This is stronger, more specialised authoring than merely having a rich-text field on a lore entry. It gives concrete examples of a story's **character/place template sheets** and metadata without pretending those are typed RPG mechanics. Careful backup and import/export distinctions matter: a zipped `.scriv` copy faithfully restores a project in the app, while DOCX/EPUB/HTML are presentation/handoff formats and don't reconstruct all live Binder/metadata relationships. Its lack of built-in AI is an explicit developer choice, not a technological inability to use OS-level text features.

### Outstanding Batch 9 verification questions

- **Obsidian:** Install a baseline current release with **restricted/community-plugins-off mode** to confirm exactly which Bases views exist and whether desktop/mobile formula/linked-property editing are equivalent. Test actual linked-property rollup and query sizes, Canvas export, Markdown tables, PDF per-note export and file recovery. Separately inventory, version and security-check any maintained RPG **calendar, atlas, initiative, statblock, family-tree and AI plugins**; assess offline operation, plugin conflicts, persistence format and maintenance ownership. Confirm Obsidian Publish site-password and selected-note semantics with unpublished link targets; never assume password gives per-player roles. Confirm paid shared-vault collision/conflict behaviour, Sync limits and independent backup restore. No plugin download or sync account was authorised or undertaken.
- **Notion:** Use a disposable permitted workspace with Free and Business test accounts to verify 2026 offline **per-device** behaviour: parent/subpage selection, 50-row limit, beyond-50 manual caching, formula/relations views and conflict reconciliation. Test database Map view on 100+ records, Place fields vs **uploaded fantasy map images**, changing addresses, filters and whether embedded dated events can represent a reliable world timeline without a date calendar engine. Test guest/read-only/published page and public-subpage exposure, especially contributor metadata. Re-export and reimport a purpose-built relational test DB to measure loss of relations, formulas, rollups, view filters, permissions and attached files. Verify current Notion AI Business/Enterprise usage charges and **whether generated character art can retain identity across edits**; do not imply generic AI image generation equals a proper asset pipeline.
- **Scrivener:** Trial on macOS/Windows (consented download) and iPad/iPhone (licence needed) to verify custom metadata, character template inheritance versus copy-on-create, project backup ZIP restore and section snapshot compare. Test a self-contained **world codex** compiled from Lore/Research versus Draft documents to identify exact PDF and DOCX export gaps. Validate whether document links have native backlinks or a visual relation overview, and whether outliner/card order can track two independent plot lines without a proper chronology tool. Test native local project opening after a week offline and Dropbox/iOS sync conflict rules. Check differences across operating systems and interface translations; no licence was purchased or trial installed in this batch.
- **Across all three:** Compare **data custody**, **relational schema fidelity**, **reader permissions**, **offline completeness**, **AI provenance** and **structured compilation** as separate dimensions. Do not project Obsidian community plugins, Notion's ordinary geographic Map view, or Scrivener's scene compilation into an equivalent native fantasy atlas/campaign engine. Maintain **U** where the vendor source is insufficient; defer WBW gaps and feature-priority decisions to Stages 0 and 13. Commercial outcomes, customer reviews, adoption and pricing-market performance are expressly outside this batch.

---

## Batch 10: Plottr, Arcweave, Sudowrite

**Evidence checked:** official Plottr product/features/pricing pages and detailed support articles; official Arcweave site, documentation, current billing/export/AI explanations and dated 2026 updates; and official Sudowrite product pricing, help documents and August–September 2026 articles, on **6 November 2026**. No app, subscription or beta version was installed; no personal manuscripts were uploaded and no AI credits were spent. **Plottr Classic and Plottr Pro must be treated as materially different offline/storage products.** The Arcweave product is an interactive **branching-narrative engine** with script variables and game-engine handoffs, not a static lore graph alone. Sudowrite now has **native canonical character portraits, series-scoped Story Bibles and manuscript sharing**, so older generic-AI-only summaries understate its current scope. In all three cases, a marketed 'timeline', 'map' or 'character sheet' is not automatically equivalent to a fantasy chronology, cartography engine or playable rules system.

### Comparable feature matrix (Batch 10)

The **same 57 ordered capability definitions** are used as in Batches 1–9. **Y** means vendor-documented current feature; **P** means a narrower or analogous implementation; **G** paid-tier/paid-use gated; **N** explicit absence or decisive product-boundary conflict; **U** unverified, never shorthand for No; **—** WBW baseline pending. Where two variants differ, the **classification caveats** below disambiguate the rating. No success/reputation review or WBW gap ranking is performed here.

| Category | Capability | Plottr | Arcweave | Sudowrite | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | Y | N | N | — |
| Platform | Edit entire world offline | Y | N | N | — |
| Platform | Local user-controlled world files | Y | N | N | — |
| Platform | Vendor-hosted cloud world storage | G | Y | Y | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | Y | N | N | — |
| Platform | Ongoing free account tier | N | Y | P | — |
| Structure | Structured lore/entry type templates | Y | Y | Y | — |
| Structure | Fully arbitrary schema/field definitions | P | P | P | — |
| Structure | Editable reusable entry prompts | Y | P | Y | — |
| Onboarding | Guided question-based world creation | P | U | P | — |
| Editing | Rich-text article editing | Y | Y | Y | — |
| Editing | Images embedded within entries | Y | Y | Y | — |
| Editing | PDF document viewing alongside notes | U | U | U | — |
| Editing | Tables inside editor or wiki content | U | U | U | — |
| Editing | Split/multicolumn working panels | P | Y | Y | — |
| Linking | Cross-article wiki links/mentions | P | Y | P | — |
| Linking | Backlinks/auto-discovered relationships | P | P | U | — |
| Linking | Visual relationship graph | U | Y | P | — |
| Organisation | Categories/hierarchy/tags | Y | Y | Y | — |
| Organisation | Search across lore | Y | Y | Y | — |
| Characters | Automatically generated family trees | U | U | U | — |
| Factions | Interactive diplomacy/organisation webs | U | P | P | — |
| Time | User-defined calendar systems | U | U | U | — |
| Time | Recurring calendar events | U | U | U | — |
| Time | Event/history timelines | Y | P | P | — |
| Time | Historical events shown geographically on maps | U | U | U | — |
| Maps | Import/upload map image | P | P | P | — |
| Maps | Native procedural terrain generation | U | U | U | — |
| Maps | Native procedural city generation | U | U | U | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | U | U | U | — |
| Maps | Nested/interconnected interactive maps | U | U | U | — |
| Maps | Toggleable image/map layers | U | U | U | — |
| Maps | Political borders/territory polygons | U | U | U | — |
| Maps | Draw roads/routes on map | U | U | U | — |
| Maps | Calculate distance and travel time | U | U | U | — |
| Maps | Map labels synchronise automatically from wiki entries | U | U | U | — |
| RPG | Campaign/plot management | Y | Y | P | — |
| RPG | Session preparation, session notes or reports | P | P | P | — |
| RPG | Integrated RPG character sheets | P | P | P | — |
| RPG | Creature/NPC statblocks | P | P | P | — |
| RPG | Built-in support for multiple game systems | U | U | U | — |
| Visibility | Hide GM/private secrets | P | P | P | — |
| Visibility | Publish or share player-readable world pages | N | P | P | — |
| Visibility | Granular reader/subscriber permissions | N | P/G | P | — |
| Collaboration | Invite coauthors or collaborative editors | G | Y | P | — |
| AI | Integrated lore-writing AI | N | Y | G | — |
| AI | Integrated AI image generation | N | Y | G | — |
| Generation | In-product heraldry design/generation | N | P | P/G | — |
| Generation | In-product character portrait generation | N | P | G | — |
| Export | Portable whole-world backup/export | Y | Y | P | — |
| Export | Editable Word export and reimport | P | U | P | — |
| Export | Compiled world/codex as PDF | P | P/G | P | — |
| Writing | Dedicated novel/manuscript tool | N | N | Y | — |
| Accessibility | Multiple localised UI languages | U | U | U | — |
| Accessibility | UI font/readability/colour accessibility controls | Y | P | Y | — |

**Classification caveats:**

- **Plottr — Classic vs Pro is a fundamental distinction.** The current *Classic* product is a fully installed **Windows/macOS** story outlining app that saves files on the user's computer and can open and edit those projects **entirely offline after installation/occasional licence checks**. It has a **paid annual option with continued use of the installed version after the plan expires**, and a **lifetime licence** with continuing updates; a 30-day trial is **not** a permanent free edition. *Pro* adds a **hosted browser app**, vendor cloud files, instant syncing, cloud backups and **real-time project collaboration**, requiring a Pro entitlement even on desktop. Current main pricing lists **Classic $60/year or $150 lifetime**; **Pro $9.99/month, $99/year or $599 lifetime**, plus a more expensive Pro+Community option. The vendor's own current Pro FAQ warns **cloud projects become inaccessible after a Pro subscription lapses unless renewed**; export before expiry is therefore material even for users who previously used a local app. The main features page claims Pro can edit an **already open** project during temporary disconnection, but the **pricing comparison still says Pro Offline 'Coming Soon'**, the **support guide says Pro needs internet to OPEN the project**, and permits continuation after connectivity loss through a **beta toggle that must stay open until resynchronisation**. Treat Classic as **Y offline**, Pro as **P/beta session-continuation only**, **not robust offline-first**. The old series-bible landing page still advertises **native Linux/iOS/Android** and stale $49/$149 licences, but the official current device help says only Windows and Mac are native, and a separate mobile notice says **native phone apps were withdrawn from stores; Pro web is best on tablets and has no phone-optimised view**. **Do not count an available current native mobile app on those stale pages.** Structurally Plottr has book/series timelines, separate parallel plotline lanes, drag-and-drop scene cards, cross-links to Character/Place/Tag records, primary and secondary images, custom character/scene/place attributes, and templates including writer character archetypes. **Custom attributes are text/paragraph only**, not fully typed relational schema definitions. Templates for Characters exist; older current-index documentation explicitly says **Places cannot have templates**. There is no built-in AI on any plan by vendor statement. Plottr exports outlines, characters, places and notes **into a new Word document or new Scrivener project**, but **does not continuously sync to, or insert into, an existing Scrivener project**. This is not a novel prose editor; its own positioning directs authors to write the actual book elsewhere. A scene timeline is an **ordered chapter/beat grid**, not proven custom date arithmetic, dated recurring events, or geographical map layers.
- **Arcweave — visually branching, executable narrative, not simply a lore wiki.** Arcweave is a **browser-based service explicitly requiring an internet connection** to author projects; **no native desktop programme and no independent local working vault**. A **Basic Free** workspace is documented as **3 projects, at most 200 items per project, 50 MB asset storage/project, 5 MB upload cap and 25 AI credits monthly**, with guest/member collaboration options. **Pro** ($15/seat/month annually; $18 monthly) unlocks unlimited items/projects, 1 GB/project, PDF/Markdown/XLSX exports and full backup export/import; **Team** ($25/seat/month annually; $30 monthly) adds localisation, REST API, MCP access, project history and customised member roles. The authoring model is **boards → elements connected by labelled links/conditional branches or jumpers**, with **reusable components** for characters, places and objects; components, boards and elements carry typed attributes/variables (string, Boolean, integer, float, component/asset lists). **Arcscript** conditions and variable mutations control story pathways, and the browser **Play Mode** is an executable choice-driven prototype with CSS and linked media. This first-party graph is **real visual branching with logic**, not merely a manually drawn family relationship chart, and not an event timeline or fantasy cartography system. A Play Mode URL can be published or embedded, **but players navigate interactive scenes rather than a conventional role-aware encyclopaedia page tree**, hence P in publication. Collaboration includes project guests, editors, commenters and messages; **custom roles and full project history are Team-gated**. As of 2026, native AI **Element Generator, Element Enhancer, Design Assistant and Image Generator** spend included workspace credits even on Basic (e.g. one credit per text/assistant action and **five per generated image**), so AI is **Y with a free quota**, rather than falsely G-only. **JSON project export with optional assets is already available to Basic and can be imported**; stronger backup, Markdown/PDF/Excel export and workbook transfer are paid. The project-data and game-engine JSON handoffs to **Unity, Unreal and Godot** are especially relevant to game developers. **Team REST read/write API and hosted MCP integration** are genuine current capabilities, but access does not mean users can run Arcweave authoring completely offline. Its multi-language **story localisation** in Team does not establish that the editor UI itself has multiple translated language packs (UI language U).
- **Sudowrite — hosted AI novel writing plus an increasingly structured Story Bible.** Sudowrite runs a **browser-based main authoring app** with separate **iOS/Android apps**, but **no installed Windows/macOS editor and no complete offline world** are documented; mobile apps are substantially narrower than web: they can read/edit Story Bible and use Write/Rewrite/Chat/Dictation, but **mobile cannot generate Story Bible fields directly, edit the Series timeline or access full Document History/Trash**, and can only view Visualize results. The paid fiction AI offerings are **Hobby & Student, Professional and Max** with credit-based allowances; the Jan 2026 official plan table lists **225,000 / 1,000,000 / 2,000,000 credits** at **$10/$22/$44 per month billed annually**, and notes that **developmental feedback tools require Professional/Max**. The current pricing page mixes a **crossed-out 1,000,000** and **450,000** figure for Professional, so **credit amounts need a checkout verification**, not automatic assumption of the older docs. The **free trial is not ongoing free AI**. Crucially, the FAQ says *after cancellation writers can still access and work on projects*, although no AI features run without payment: **P ongoing free non-AI editing**, not a full free AI tier. Native **Story Bible** has chained fields (Braindump, Genre, Style, Synopsis, Characters, Worldbuilding, Outline, Scenes, Draft), custom traits, character/worldbuilding cards, AI trait generation, contextual manuscript continuation, style matching, and a guided **story-making sequence** rather than a one-question-at-a-time independent world creator (P). **Series Folders share selected characters/world lore across volumes and assemble a sequence from ordered project outlines**, which is a useful narrative timeline but not a fantasy calendar. A current **Portraits & Images** feature creates specific Story Bible character portraits from traits, **supports image-reference-guided identity across new poses/clothes** and stores a canonical thumbnail/gallery: **G for true integrated character portraits**. Visualize can create other images from prose and put them in the draft. The word 'map' in **Canvas** means a freeform **plot/character relationship planning board**, not an importable landscape with clickable wiki pins. Sudowrite shares individual **live-updating documents with a public link**; **Clean Copy** gives readers their *own private comment view* and lets authors reply, but this is **feedback collaboration**, not live coauthor editing, page-level GM roles or a public world wiki. **A Project ZIP export contains draft documents only and expressly excludes Story Bible**. Full merged DOCX likewise excludes it; Characters, Worldbuilding and Outline need **separate CSV exports** to preserve their fields, so never score the entire-story-bible project backup as complete based on the project ZIP alone. Smart import of Worldbuilding from **up to 60,000 words/30 extracted items per operation** is credit-free and provides a user selection step; typed CSV imports bypass that 30-item AI extraction limit. 'Hide from AI' for a character/trait **controls context sent to the generator**, not player/reader secrecy. Generated suggestions need human review, and vendor claims about continuity or voice should not be treated as independent proof of factual correctness.

### Comparative feature extensions found in Batch 10

These are potential design patterns not captured by the fixed 57 columns, included only where official first-party sources give relevant evidence. They are **not yet a prioritised WBW roadmap**. Plottr entries marked P/G often separate Classic from Pro; Sudowrite 'AI' always assumes paid credits after a limited trial.

| Additional capability | Plottr | Arcweave | Sudowrite | WBW |
|---|:---:|:---:|:---:|:---:|
| Offline local Windows/macOS project file opens without cloud database | Y | N | N | — |
| Local backups automatically before and after each day's editing session | Y | N | U | — |
| Current desktop project remains usable after annual updates expire | Y | N | N | — |
| Lifetime licence including a hosted cloud Pro tier | Y | N | N | — |
| Expired ordinary cloud subscription locks access to stored projects | G | P | N | — |
| Full cold-start access to previously opened hosted project offline | P | N | N | — |
| Hosted project edits may continue temporarily after connection drops | P | N | U | — |
| Current first-party native iOS and Android editing apps | N | N | Y | — |
| Browser-based mobile/tablet working view | G | Y | Y | — |
| Automatic sync and collaborative editing of same outline/board | G | Y | P | — |
| Multiple books and one shared series-level Timeline | Y | P | Y | — |
| Colour-coded lanes for independent plots/subplots in a book | Y | P | P | — |
| Scene card linked to people/places/tags with filtered plotline view | Y | Y | P | — |
| User-defined scene and character attributes | Y | Y | Y | — |
| Custom attribute types constrained to text and rich paragraph | Y | N | P | — |
| Ready-made story-structure cards and character archetype templates | Y | P | Y | — |
| Add arbitrary custom Character templates | Y | P | Y | — |
| Add native reusable Place templates | N | P | P | — |
| Multiple filters combined strictly as OR rather than AND | Y | U | U | — |
| Export outline, story bible notes and scene cards into a new DOCX | Y | U | P | — |
| Import a Scrivener project to reconstruct a plotter outline | Y | U | P | — |
| Live bidirectional sync to an existing Scrivener project | N | N | U | — |
| Chapter order rearranged through drag/drop virtual timeline/cards | Y | P | Y | — |
| Distinct story nodes with conditional branches and jumpers | N | Y | P | — |
| Narrative engine with variable state and condition scripts | N | Y | N | — |
| Reusable typed character/item/location components across story scenes | P | Y | P | — |
| Component fields referencing other components/assets as typed lists | P | Y | P | — |
| Play choice-driven story prototype instantly from the editing graph | N | Y | N | — |
| Debug/test script state during branching narrative play | N | Y | N | — |
| Public playable link with embeddable interactive story | N | Y | P | — |
| Live comments and mentions attached to narrative graph context | F | Y | P | — |
| Free workspace permits three projects with 200-item cap per project | N | Y | N | — |
| AI text element generation in an otherwise free workspace | N | Y | G | — |
| AI image generation in an otherwise free workspace | N | Y | G | — |
| Workspace-wide switch disabling the native generative AI suite | N | Y | N | — |
| Stable prompt/style guidelines for generated story images | N | Y | Y | — |
| Portable JSON plus image/audio/video asset ZIP on free tier | U | Y | P | — |
| Full project backup export/import separate from interoperable JSON | P | G | P | — |
| Explicit Unity, Unreal and Godot project-data integrations | N | Y | N | — |
| Machine-readable REST API with separate read and write permissions | N | G | N | — |
| Hosted MCP service for external agents to inspect/edit narrative graph | N | G | U | — |
| Story-content localisation with review states and translation export | U | G | U | — |
| Free and paid tiers both offer some generative AI credits | N | Y | N | — |
| Fiction-specific prose-generation model and 30+ model choices | N | P | G | — |
| Guided seed → synopsis → people/world → outline → scenes pipeline | P | P | G | — |
| Manuscript continuation uses preceding 20,000 words and Story Bible | N | N | G | — |
| Character style/voice profile derived from author's prose | N | P | G | — |
| Series-wide reuse of canon characters and worldbuilding cards | Y | P | G | — |
| AI selectively ignores lore/characters hidden from its context | N | P | G | — |
| Character card with canonical portrait and multiple reference images | P | P | G | — |
| Generate new character portrait with identity reference for consistency | N | P | G | — |
| Generate one illustration from selected manuscript passage | N | P | G | — |
| Smart extraction of character/worldbuilding entries from unstructured Word prose | N | P | G | — |
| Worldbuilding smart import reviews 60,000 words and up to 30 items/pass | N | P | Y | — |
| Structured CSV import bypasses worldbuilding AI extraction item cap | P | P | Y | — |
| Public view-only draft links automatically reflect edited original | N | P | Y | — |
| Each beta reader gets separate private passage-level comments | N | P | Y | — |
| Full project ZIP includes document prose but explicitly excludes Story Bible | N | N | Y | — |
| Export Characters, Worldbuilding and Outline separately as CSV | P | P | Y | — |
| Paid AI expires but editing of existing project persists | N | P | Y | — |
| Mobile AI writing, rewrite and smart dictation with web feature mismatch | N | N | Y | — |

**Extension interpretation and conflicts:** **Plottr:** 'work offline' applies unequivocally to Classic; Pro's website promises versus the pricing table and Beta settings do not yet describe the same guarantee. Current support wins over old landing-page mobile and price claims. Its live scene cards have narrative order, not verifiable world-date arithmetic. **Arcweave:** a **branching graph with executable variables** and Unity/Unreal/Godot export is substantially more than a static 'links graph'; its PDF is a board print, and collaboration/AI quota do not mean local/offline support. **Sudowrite:** the actual native portrait reference feature is stronger than generic paragraph-to-image tools, but still subject to human verification; series ordering drives context assembly rather than reconstructing all event chronology. **The Story Bible export omission is an explicit data-portability weakness**, while comment sharing and AI-exclusion switches have different security purposes from reader role visibility.

### Vendor evidence, scope and lifecycle notes

#### 27. Plottr — https://plottr.com/

**Classification:** a dedicated **book/series outline and story-bible planner**, deliberately differentiated between a local offline Classic licence and a hosted Pro collaboration workflow. Especially relevant to WBW's proposed fiction and series planning, starter-world prompts and local-first guarantees, **not** a manuscript word processor or game rules manager.

Official evidence:

1. [Current pricing and exact annual/lifetime/Pro entitlements](https://plottr.com/pricing/) — lifetime $150 Classic/$599 Pro, $60 Classic annual/$99 Pro annual, Pro monthly, entitlement and backup expiry behaviour, with **contradictory Pro offline statements within the same page**; it supersedes stale landing-page pricing.
2. [Current features overview](https://plottr.com/features/) — book and series timeline, templates, scene cards, characters, places, imports, Pro browser cloud sync and collaboration, and **commenting labelled 'Coming'**, not shipped.
3. [Plottr Pro setup and offline beta](https://docs.plottr.com/article/10-plottr-pro-setup-guide), [Classic offline answer](https://docs.plottr.com/article/35-do-i-need-an-internet-connection-to-use-plottr) — Pro needs a connection to open cloud project; temporary already-open continuation depends on Beta setting and cannot be closed before sync; Classic opens offline.
4. [Mobile app withdrawal notice](https://docs.plottr.com/article/117-mobile-new-mobile-app-incoming-please-read) and [current supported devices](https://docs.plottr.com/article/34-what-devices-does-plottr-work-on) — former app delisted, Plottr Pro via web on tablet, **no current supported phone-optimised native mobile**; contradicts [older Series Bible landing page](https://plottr.com/series-bible-software/) marketing Linux/Android/iOS.
5. [Timeline mechanics and limitations](https://docs.plottr.com/article/54-timeline-overview), [story structure templates](https://docs.plottr.com/article/58-timeline-starter-templates), [series view](https://docs.plottr.com/article/101-project-series-navigating-your-books) — narrative chapter/scene grid, drag/drop plotline lanes, filters, images, labels and custom attributes; native timeline screenshot printing and card duplication are limited.
6. [Character custom attributes](https://docs.plottr.com/article/84-characters-custom-attributes), [place custom attributes](https://docs.plottr.com/article/91-places-custom-attributes), [Character Templates](https://docs.plottr.com/article/85-characters-templates), [Place limitations](https://docs.plottr.com/article/88-places-overview) — custom attributes mostly **simple text or formatted paragraph**, premade and custom character templates, absence of Place templates on older help page.
7. [Word and Scrivener export](https://docs.plottr.com/article/66-exporting), [Scrivener import](https://docs.plottr.com/article/13-importing-from-scrivener) — `.docx` structured planning handoff and new Scrivener project, *not* ongoing bidirectional sync with a live Scrivener manuscript.
8. [Main help centre](https://docs.plottr.com/) and [current pricing FAQ for backups](https://plottr.com/pricing/) — local default-folder options, two backups per worked-on project/day, Pro cloud backup and Classic third-party file syncing. [Recent project template packs](https://docs.plottr.com/article/147-using-premium-project-templates) were documented just **3 November 2026**, but their packaging/individual price was not authenticated during this audit.

**Design observations to preserve:** Plottr deliberately separates **story structure**, **reference profiles** and **prose drafting**. Its multitrack chapter/scene timeline with filters can reveal missing appearances and subplot gaps, while custom templates offer a quick way into plot development without a full guided world-quiz interview. A single book or series can reuse characters and places; nevertheless the **attribute type range is thin** versus a real schema editor. The availability of both a lasting local Classic entitlement and account-based Pro sync is highly relevant to a local-first product strategy. The current Pro **beta offline** and **subscription-access expiry** warn against treating “can continue briefly without internet” or “lifetime cloud plan” as synonymous with permanent local data custody. Test mobile availability rather than relying on old SEO pages.

#### 28. Arcweave — https://arcweave.com/

**Classification:** a **web-native branching game-narrative design and playtest engine**, with usable lore components, rich node data and export for actual development engines. It speaks to WBW's **future game-developer audience and integrations** more than its standalone encyclopaedia/editor audience.

Official evidence:

1. [Current overview](https://arcweave.com/features) and [What is Arcweave](https://docs.arcweave.com/introduction/what-is-arcweave) — cloud browser+internet requirement, boards, conditional narrative flow, reusable character/location components, integrated playtester, exports/integrations and collaboration.
2. [Plans and pricing](https://arcweave.com/pricing), [billing/plan differences](https://docs.arcweave.com/workspaces/billing-plans) — Free 3 projects/200 items and 25 monthly AI credits; Pro unlimited items, better exports/backups; Team custom roles/history/localisation/API/MCP; $15/$25 per editor seat monthly on annual billing, more on month-to-month.
3. [Project items and variable/attribute types](https://docs.arcweave.com/project-items/overview), [components](https://docs.arcweave.com/project-items/components), [attributes](https://docs.arcweave.com/project-items/attributes), [branches/conditions](https://docs.arcweave.com/project-items/branches) — typed, reusable/linked lore attached to graph elements and Arcscript variable/condition-driven flow.
4. [Play Mode and browser game preview](https://docs.arcweave.com/project-tools/play-mode/using-play-mode), [share/export quick tour](https://docs.arcweave.com/introduction/quick-tour/share-export), [game-engine integration overview](https://docs.arcweave.com/integrations/overview) — interactive story testing and publishing, engine JSON and plugins for Unity, Unreal, Godot; playable hyperlink is not a native wiki reader mode.
5. [Export manual and format/permission details](https://docs.arcweave.com/project-tools/export) — **Basic JSON + optional attached media ZIP and import**, CSV and game JSON; paid full backup/PDF/Markdown/XLSX, selected boards, and extra Team language export options.
6. [Current AI tools](https://docs.arcweave.com/project-tools/ai-features/overview), [Image Generator and credit costs](https://docs.arcweave.com/project-tools/ai-features/image-generator), [Design Assistant](https://docs.arcweave.com/project-tools/ai-features/design-assistant) — free included allowance, 1-credit text/assistant actions, 5-credit image actions, workspace-wide AI disable and style-guideline settings.
7. [Dated 22 September 2026 REST write API update](https://arcweave.com/whats-new/new-features), [REST API schema](https://docs.arcweave.com/rest-api/overview) and [hosted MCP support](https://arcweave.com/whats-new/new-features) — **Team** external read/write data integration with separate permissions; older descriptions of Arcweave as export-only are obsolete.
8. [Role permissions and guests](https://docs.arcweave.com/workspaces/roles), [localisation feature](https://arcweave.com/features), [collaboration quick tour](https://docs.arcweave.com/introduction/quick-tour/collaboration) — workspace and project role tiers, reviewer comments and Team story-content translation states.

**Design observations to preserve:** Arcweave does not merely hold character notes beside a flowchart. Reusable typed components and variables actually drive **branch outcomes**, can be directly playtested and transfer to a runtime narrative engine. Its entity component shape and game engine export are potential interoperability examples, but a genuinely usable branch design interface needs interaction, debugging and clear states, not simply YAML links. The strong Basic JSON+asset export is worth comparing to WBW importer/exporter, while **full backup import and version history are paywalled differently**. Treat narrative localisation as content management, not proven editor-interface translation. For *future* Shieldwall Unreal tools, review existing Arcweave plugins and data schema **after** the WBW audit rather than widening this 33-product feature study into new product engineering.

#### 29. Sudowrite — https://sudowrite.com/

**Classification:** an **AI-assisted fiction drafting, canonical story reference and revision** service with mobile companion apps, a real per-character portrait system and some series-scale continuity. Unlike Plottr it edits/generates manuscripts, unlike Arcweave it is not an executable branching game state tool, and unlike WBW it is not local-first.

Official evidence:

1. [Current pricing and cancellation/free non-AI access](https://sudowrite.com/pricing), [Jan 2026 plan table](https://docs.sudowrite.com/plans--account/wBnmhtSyMcWtk2BLzifGkz/what-plans-are-available/mwfVvj2rGcKYs1BQy4Pdcb) — Hobby/Professional/Max credits and annualised costs; cancellation preserves project editing but not AI. **Professional credit quantity has a live-page crossed-out/current mismatch**, verify at checkout before quote.
2. [Current 2026 workflow explanation](https://sudowrite.com/blog/how-sudowrite-works/), [Story Bible structure](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/what-is-story-bible/jmWepHcQdJetNrE991fjJC) and [guided writing/continuation](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/write/pvxUvbQqYybfEosqx1sXjY) — chained story fields, authored canon, fiction-trained model, AI reading preceding draft context and guided scene/prose generation.
3. [Characters and custom traits](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/characters/a7tdE1ZB8KvAwMD3Mopwpd), [Worldbuilding import/export](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/worldbuilding/uc5NfWSz4x8Wm3S19LZeo8) — free-of-credit 60k-word/30-item AI-assisted smart import, editable default/custom traits, CSV schema import without the unstructured text extraction limit, individual trait AI prompts.
4. [Portraits and image-reference generation](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/portraits--images/8FB59VFrbbhcmBRYNicXis), [Visualize](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/visualize/4MxYzYduLVPbGceg6zMMCb) — real Story Bible portrait gallery and thumbnail, generated busts with several style choices and face-reference hints, plus prose-to-illustration.
5. [Series Support and ordering](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/series-support/3vfbZPCB1ANLm75FXmJf28), [Chapter Continuity](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/chapter-continuity/4KL8gFeLZQ6GSBjDWtSbV6) and [AI visibility switches](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/visibility-settings/4KL8gFeLZP6ep8keUhKVGp) — linked series canon, outline-derived chronology, ordered past-chapter context, author control over which canon is exposed to generation.
6. [Document sharing and Clean Copy comment process](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/collaboration-options/4dqKfy8aTHoaefw151arNW) — live-updating share link, private per-reader annotations, author replies, unpublish control, **not** a multi-editor project wiki permission scheme.
7. [Export mechanics and Story Bible omission](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/exporting-files/3NtVWXcnwYaRCmPW2iwcCB), [import formats](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/importing-files/rbGUgrZM6tNuXFG1hjDFyS) — manuscript DOCX/ZIP and separate Story Bible CSV; whole-world reconstructability **not established**.
8. [iOS/Android app availability](https://docs.sudowrite.com/resources/ktuxRrzphwp3uTNneRtaos/is-there-a-mobile-app/sFZPG2o8QqXR7bqrb9Swae) and [explicit mobile/web feature comparison](https://docs.sudowrite.com/using-sudowrite/1ow1qkGqof9rtcyGnrWUBS/web-app-vs-mobile-app-differences/6JmxspPSKC83DkQZ7rFYcJ) — native mobile yes, feature parity no: limited Story Bible generation, no Series timeline editing/History/Trash, mobile-exclusive dictation.

**Design observations to preserve:** Sudowrite increasingly resembles a **novel-centred world bible**: creators can import a whole written draft, extract people/world concepts into *editable traits*, build a shared series canon and supply a face reference for portraits. These are genuine useful patterns for the WBW writers audience, though generated canon can still contradict original sources and needs user approval. Its *high-value insight* is the careful linking of AI generation to specific upstream author fields (Style → scenes, Characters/Worldbuilding → outlines, chapter continuity → next prose), coupled with a **context visibility toggle for spoilers**. But that toggle hides details from the **model**, not players. Its export story needs scrutiny: manuscript DOCX and ZIP do not include Story Bible; a backup user has to export separate CSV files before assuming they can reconstruct the full project.

### Outstanding Batch 10 verification questions

- **Plottr:** Perform a consented install of Classic and Pro and test project open/edit cold-start offline, local backup ZIP restoring, cloud export before Pro expiry, and **beta Pro offline** through a dropped connection, app close and account expiration. Resolve the **pricing page's 'Work Offline' vs 'Coming Soon'** contradiction. Check a fresh App Store/Play Store listing, not the stale landing page, for an actually available replacement native mobile client and phone usability. Verify current character/place template behaviour and whether the 2024 no-Place-templates limitation survives newer version updates. Export a representative Project/Series to Word and Scrivener, import back, and measure loss of notes, custom attributes, aliases and links. A real account/purchase or licence use was not authorised.
- **Arcweave:** With a permitted Basic account, build and export an 200-item-limited branch game with nested boards, jumps, components/variables, media, conditions and named assets; reimport Basic JSON+assets and compare exact graph state. Compare **Pro Backup** versus Base JSON and check whether Pro paid restore adds version state/permissions/other metadata. Validate free AI credit consumption, limit reset, image style guidance and effects of AI global disable. Exercise Unreal/Unity/Godot export on a neutral sample, test runtime variable precision and use **read-only Team API** only if expressly authorised; external agent read/write permissions deserve care. Verify playable link privacy and project visitor access: **public game preview does not imply safe private player-specific lore fields**.
- **Sudowrite:** Use a disposable permitted trial to import a manuscript with characters, places, trait collisions and known continuity contradictions; inspect the **30 extracted elements/pass**, CSV bypass, trait default updates and provenance/acceptance experience. Compare Story Bible outputs against uploaded source passages and measure inconsistent character details. Test portrait re-generation with reference faces/clothing prompts and multiple style choices for identity retention; record exact credits charged. Verify Series Folders sharing/AI-hidden details and whether chapter order changes leave stale facts. Export both Project ZIP and merged DOCX then separately export Outline, Character and Worldbuilding CSV; attempt to restore a *complete* book with AI context, confirming whether image references/media survive. Check payment cancellation non-AI edit rights and current Professional credit price/quantity mismatch. Confirm sharing privacy with two beta readers using Clean Copy; do not confuse comment isolation with GM secrets.
- **Across all three:** The comparison must distinguish **timeline as ordered narrative scenes** (Plottr), **graph as executable choice/state flow** (Arcweave), and **series context chronology from ordered books** (Sudowrite). Likewise separate **hosted subscription offline/beta access**, **file-export completeness**, **first-party AI**, **AI per-character visual identity** and **public link rights**. Leave WBW status unscored and final feature priorities for Stages 0 and 13. Reviews, commercial outcomes and user growth remain out of scope.

---

## Batch 11: NovelAI, Inkarnate, Wonderdraft

**Evidence checked 6 November 2026:** official NovelAI service documentation for current subscriptions, Lorebook, storage/privacy, story export, editor, scripting and image reference; Inkarnate's 2025–2026 first-party release notes, pricing/FAQ and terms; Wonderdraft's current Megasploot sales page and developer-maintained GitHub repository/wiki. This is **source research**, not installed testing. All three products have importantly different boundaries: NovelAI is primarily an AI **fiction editor and image-generation service**, Inkarnate is a hosted **visual map editor with an additional paid Windows client**, and Wonderdraft is a **DRM-free, offline 2D cartography application**. Neither map maker should be described as a complete lore encyclopaedia merely because it draws places or contains labels. No claims about popularity, profitability or WBW competitive gaps are made yet.

### Comparable feature matrix (Batch 11)

The **identical 57 capabilities, in identical order**, are carried forward from Batches 1–10. **Y** = vendor-confirmed present; **P** = narrower, analogue or materially restricted; **G** = specifically paid/credit gated; **N** = explicit absence or decisive mismatch with product's documented purpose; **U** = not verified (never treat as No); **—** = WBW baseline remains unaudited. Some visual-map functions are genuinely present while corresponding *interactive encyclopaedia/map* functions are not; the distinction is explained below. Commercial-success and audience judgements are deliberately withheld.

| Category | Capability | NovelAI | Inkarnate | Wonderdraft | Mimir |
|---|---|:---:|:---:|:---:|:---:|
| Platform | Native desktop application | N | G | Y | — |
| Platform | Edit entire world offline | N | N | Y | — |
| Platform | Local user-controlled world files | P | N | Y | — |
| Platform | Vendor-hosted cloud world storage | Y | Y | N | — |
| Platform | Multiple separate worlds/projects | Y | Y | Y | — |
| Platform | One-time purchase instead of subscription | N | N | Y | — |
| Platform | Ongoing free account tier | N | Y | N | — |
| Structure | Structured lore/entry type templates | P | N | N | — |
| Structure | Fully arbitrary schema/field definitions | P | N | N | — |
| Structure | Editable reusable entry prompts | Y | N | N | — |
| Onboarding | Guided question-based world creation | P | P | U | — |
| Editing | Rich-text article editing | Y | P | N | — |
| Editing | Images embedded within entries | U | U | N | — |
| Editing | PDF document viewing alongside notes | U | U | U | — |
| Editing | Tables inside editor or wiki content | U | U | U | — |
| Editing | Split/multicolumn working panels | Y | Y | Y | — |
| Linking | Cross-article wiki links/mentions | P | P | N | — |
| Linking | Backlinks/auto-discovered relationships | U | U | N | — |
| Linking | Visual relationship graph | U | U | N | — |
| Organisation | Categories/hierarchy/tags | Y | P | P | — |
| Organisation | Search across lore | Y | P | N | — |
| Characters | Automatically generated family trees | U | U | N | — |
| Factions | Interactive diplomacy/organisation webs | U | U | N | — |
| Time | User-defined calendar systems | U | U | N | — |
| Time | Recurring calendar events | U | U | N | — |
| Time | Event/history timelines | U | U | N | — |
| Time | Historical events shown geographically on maps | U | U | N | — |
| Maps | Import/upload map image | P | G | U | — |
| Maps | Native procedural terrain generation | U | P | P | — |
| Maps | Native procedural city generation | U | U | U | — |
| Maps | Generated sci-fi star systems and routes | U | U | U | — |
| Maps | Interactive pins linked to lore | U | P | N | — |
| Maps | Nested/interconnected interactive maps | U | U | N | — |
| Maps | Toggleable image/map layers | U | Y | P | — |
| Maps | Political borders/territory polygons | U | P | P | — |
| Maps | Draw roads/routes on map | U | Y | Y | — |
| Maps | Calculate distance and travel time | U | U | U | — |
| Maps | Map labels synchronise automatically from wiki entries | U | N | N | — |
| RPG | Campaign/plot management | P | P | N | — |
| RPG | Session preparation, session notes or reports | P | P | N | — |
| RPG | Integrated RPG character sheets | P | U | N | — |
| RPG | Creature/NPC statblocks | P | U | N | — |
| RPG | Built-in support for multiple game systems | U | U | N | — |
| Visibility | Hide GM/private secrets | P | P | P | — |
| Visibility | Publish or share player-readable world pages | P | P | N | — |
| Visibility | Granular reader/subscriber permissions | N | U | N | — |
| Collaboration | Invite coauthors or collaborative editors | N | U | N | — |
| AI | Integrated lore-writing AI | G | U | N | — |
| AI | Integrated AI image generation | G | U | N | — |
| Generation | In-product heraldry design/generation | P/G | P | P | — |
| Generation | In-product character portrait generation | G | U | N | — |
| Export | Portable whole-world backup/export | Y | P | Y | — |
| Export | Editable Word export and reimport | P | N | N | — |
| Export | Compiled world/codex as PDF | U | P | P | — |
| Writing | Dedicated novel/manuscript tool | Y | N | N | — |
| Accessibility | Multiple localised UI languages | Y | U | U | — |
| Accessibility | UI font/readability/colour accessibility controls | Y | P | P | — |

**Classification caveats and version corrections:**

- **NovelAI is not a durable local-first desktop vault.** It is a browser/PWA service needing a stable connection for server-backed AI. Stories can optionally reside in the **browser's local storage**, and full .story/.scenario or batch ZIP exports are possible, so *some local control exists* (P); this is **not equivalent to an editable standalone project file opened by a local programme**. The vendor explicitly warns that browser cache clearing can irrevocably erase locally stored stories. Remote stories are **client-side encrypted at rest**, but text needed for model generation is transmitted for processing. Losing/resetting login credentials can render remote encrypted stories unrecoverable. These are concrete privacy/backup differences, not reasons to claim the service stores all author prose unencrypted. NovelAI has **Paper: finite free trial**, not an ongoing free AI tier: currently 50 free text, 30 image and 100 TTS generations for a verified account. Its recurring subscriptions are **Tablet $10, Scroll $15 and Opus $25 USD per 30 days**, with differing AI context and image Anlas. Opus currently documents up to **28,672 context tokens** and exclusive Xialong access. Following Diffusion V5 the policy resets *subscription* Anlas upon subscription expiry, while separately purchased Anlas are treated differently; don't apply older unconditional rollover statements. The **Lorebook** is an AI-context retrieval system, not typed object schema or a wiki relationship graph: categories, title, free-form entry text, keyword/regex/AND activation, Always On, priority/token budgets, category defaults and AI-generated entries. **Hidden entries** can conceal scenario spoilers from someone using a shared scenario, but do not establish per-player network permissions. Xialong/GLM-4.6 have model-specific **advanced conditional entry activation**, while older placement settings are unavailable with those models. NovelAI's **Precise Reference → Character Reference** is a real first-party attempt to keep a visual character consistent across generated images (G); it is distinct from Sudowrite's *stored Story Bible portrait field*. Its default image generation history is **session-only unless manually downloaded**, in stark contrast with persistent story files. JSON .story/.scenario exports retain lore, context and settings; plain-text output does not. NovelAI's multiple UI-language and visual-accessibility options are explicitly documented. The Lorebook's activation-key mentions are **not clickable relational backlinks**. Its interactive Storyteller/Text Adventure modes are fiction generation, not TTRPG session/rules management.
- **Inkarnate's desktop status changed in 2026.** Its FAQ calls it an online service and expressly says **offline use is unavailable**, but the vendor **released a Windows desktop application to Studio subscribers in January and Creator/Studio subscribers in March 2026**. Therefore **G native desktop** is accurate as of the review date, and **N offline** remains accurate; a paid installed client does not establish a local editable offline map. The FAQ's old browser-only wording is outdated regarding the existence of a desktop executable. The current tiers are **Hobby/Free** (up to 3 maps, 2K, personal licence), **Creator** (100 maps, custom uploads, up to 8K export, personal licence) and **Studio** (unlimited maps, up to 16K *beta* export, advanced asset organisation and commercial licence). Current public monthly prices are approximately **$7.99 Creator / $14.99 Studio**; the published annual prices and grandfathered 2025 launch offers should be verified at checkout before quoting a total. Studio grants commercial use for exports created during the active subscription and the vendor explicitly says those exported maps remain commercially licensed after cancellation. **2.0 (December 2025)** delivered reusable **Scene Stamps**, editable named **Custom Layers**, per-layer masks and visibility, transparent brush layers, blend modes, shadow settings, filter/grid layers, brush improvements and autosave with snapshots; much launched as working **beta**, with a January 2026 migration to the new layers and removal of the old standalone Path tool in favour of **Line Tool Color Mode**. June 2026 brought cloneable free-user map templates, and September a built-in free world-map tutorial. A separate earlier **World Generator** creates **landmass masks**, but does not evidence automatic biome, mountain, city, faction or road generation. Hence **P native procedural terrain**, not unrestricted generator. The editor has text labels, graphics, freeform shapes/polygons and a map **Notes** tool, but these are not demonstrated as a schema-linked entry wiki, nested navigable atlas, timeline or recurring calendar. Map-note export as a lore-aware HTML/PDF has been publicly *requested*, not confirmed shipped. Creator+ custom image uploads justify **G import/upload map image via stamp/background art**, not true editable map-data import. JPEG/PNG scene export is **not** a reconstructible map/source backup; vendor-cloud editability, map cloning and snapshots are separate matters. Do not silently turn **published maps** into role-specific player encyclopaedia permissions, or count map-collaboration requests as shipped coauthor editing. No first-party lore/image AI generator was substantiated, so its AI entries are **U rather than false No**; the word *generator* in the editor refers to geography, not language-model generation.
- **Wonderdraft is a dedicated map author, not a world wiki.** Megasploot's current first-party page confirms a **$29.99 one-time DRM-free licence** (with separately sold art packs), **no internet needed, no subscription, no separate commercial licence**, maps **512–8192 pixels**, instant coastline beautification, real landmass generation, manual forest/mountain stamping, roads/rivers and stylised label presets. The developer's GitHub repository names **Windows, Linux and macOS** support, although the website minimum-requirements table currently singles out Windows/Ubuntu; validate the specific macOS build in the purchaser portal. Its developer-maintained guide describes **saving an editable local project and exporting flattened JPG/PNG**, and its toolbar includes **Water, Landmass, Symbols, Labels and Overlay**. A geographic layer/territory appearance could be simulated by the Overlay workflow, but an exposed *named toggleable GIS/political layer engine* is not established; consequently **P layers and political shapes** rather than a false full Y. The map design tool's *procedural landmass shapes* count as **P terrain generation**, not evidenced biomes, settlement auto-population, physics, climate or travel routes. Manual settlements and river/road paths are documented; **procedural town generation** is **U**, not inferred from the existence of a city-symbol art pack. Editable native map files give **Y local/offline and a portable source-file backup**, but an exported JPEG/PNG is a final map image, not an automatically linked living wiki. A printed or externally converted PDF would be a **P graphical printout**, not a codex of articles. Current official materials do not establish campaign notes, multiplayer reading roles, automatic name syncing, RPG statblocks, or built-in image/text AI. Unlike Inkarnate, Wonderdraft does not require a continuing hosted subscription to access the original editable map after purchase.

### Comparative feature extensions found in Batch 11

These **additional, narrower capabilities** should remain visible in the final analysis instead of being collapsed into a single generic 'AI' or 'maps' tick. **Y / P / G / N / U** retain the definitions above; entries refer to built-in vendor capabilities unless qualified.

| Additional capability / competitive detail | NovelAI | Inkarnate | Wonderdraft | WBW |
|---|:---:|:---:|:---:|:---:|
| Text story storage encrypted client-side before vendor-cloud upload | Y | N | N | — |
| Optional story storage in browser only (with cache-loss risk) | Y | N | N | — |
| Fully local editable files with no browser-cache dependency | P | N | Y | — |
| Published finite free text/image/TTS **trial generations**, not ongoing free plan | Y | N | N | — |
| Search-activated lore entries inserted automatically into AI prompt | Y | N | N | — |
| Regex/AND multi-key lore-activation conditions | Y | N | N | — |
| Model-dependent conditional Lorebook activation by logic/variables | Y | N | N | — |
| Per-entry token reservation, trimming, priority and context viewer | Y | N | N | — |
| Hidden scenario lore concealed from scenario reader | Y | N | N | — |
| Import/export standalone Lorebook JSON or image-embedded Lorebook | Y | N | N | — |
| Whole story export retaining redo history, prompts and Lorebook | Y | N | N | — |
| Plain-text-only manuscript export, without extra project metadata | Y | N | N | — |
| Custom AI text-generation model choice and advanced sampling controls | G | N | N | — |
| Image character-reference and image style-reference generation | G | U | N | — |
| AI inpainting and multi-image Vibe Transfer with reusable encodings | G | U | N | — |
| AI image background-removal/emotion/colorise Director tools | G | U | N | — |
| Image-generation history expires unless downloaded | Y | N | N | — |
| Localisable editor, custom CSS, dyslexia-friendly fonts and TTS | Y | U | N | — |
| Scripting API with Lorebook/content-edit permissions and UI extensions | Y | U | U | — |
| Browser/PWA mobile text authoring with no separate installed native app | Y | U | N | — |
| **Paid native Windows map editor**, still online-dependent | N | G | N | — |
| Free 3-map account with printable 2K output | N | Y | N | — |
| Native map generator for landmass masks | N | Y | Y | — |
| Procedural auto-placement of mountains, forests and settlement sets | N | U | U | — |
| Dedicated hand-built city / isometric / battle-map styles | N | Y | P | — |
| Cloneable beginner template maps, including free-plan access | N | Y | P | — |
| Reusable composite Scene Stamp made from several source objects | N | Y | P | — |
| Named, reorderable custom object/brush/filter/grid layers | N | Y | P | — |
| Per-layer masks, clip masks and blend modes | N | Y | U | — |
| Layer-specific transparent PNG compositing | N | Y | U | — |
| Separate map snapshots/history and auto-save | N | Y | P | — |
| Reuse copy/pasted stamps/text/shapes across scenes | N | Y | P | — |
| Native map Note tool at specific locations | N | Y | U | — |
| Map-note content exported as live HTML/wiki interaction | N | U | N | — |
| Manual road/river routes and settlement labels | N | Y | Y | — |
| 2026 free guided on-canvas first-world-map tutorial | N | Y | U | — |
| Publish maps to hosted community Explore/profile | N | Y | N | — |
| Marketplace for paid/community map-art packs | N | Y | P | — |
| Paid plan-specific commercial export rights lasting after downgrade | N | Y | N | — |
| 16K exported map resolution (beta, Studio) | N | G | N | — |
| DRM-free perpetual offline map creation | N | N | Y | — |
| Stylus/pen-tablet-oriented map drawing | U | Y | Y | — |
| Generated coastlines with automatic coastline aesthetic polish | N | P | Y | — |
| Curated map themes and aesthetic font/label presets | N | Y | Y | — |
| Editable project vs flattened JPG/PNG output clearly distinguished | P | P | Y | — |
| Developer offers separately purchasable one-time fantasy symbol packs | N | P | Y | — |

### Vendor evidence, limits and design observations

#### NovelAI — privacy-aware generative fiction with a sophisticated conditional Lorebook

**Product role:** Anlatan's hosted writing/text adventure and illustrated-story service for authors, imaginative roleplayers and visual-fiction creators. It is a **nearby alternative to WBW's grounded AI, lore storage, writing view and art tools**, but not an all-purpose editable map/relationship/calendar workspace. The current main editor supports story generation, revision, prompt control and branches; the Lorebook supplies selected world facts to each model invocation. NovelAI has both text and image models, user-selectable model generations, sampling control, scene-oriented directions, image reference tools, text-to-speech and an opt-in public image Explore feature. This is significantly more than a generic autocomplete box.

**Architecture and data risk:** Official FAQ calls the service browser/PWA-first and says any computer/mobile device with a current browser and stable internet is suitable. It allows **remote story storage** (default, encryption before storage) and **local-browser story storage** (not recommended because browser cache/storage loss deletes it). Neither approach is the same as opening a desktop-native world file without a server. Client-side encrypted cloud storage protects data at rest; **an author forgetting/resetting credentials can lose their remotely encrypted stories**, and AI use sends needed decrypted context over HTTPS to compute servers. Story output can be saved as raw .txt, .story JSON with full edit/retry history, .scenario JSON for shared scenario setup, screenshots and an all-stories ZIP. **The .story and .scenario bundles contain Lorebook, Memory, Author's Note and settings; text exports do not.** Conversely, the image generator's canvas/generation queue is **ephemeral** and generated art must be deliberately saved, or session history disappears. Many competitors claim 'export' but export different components; the two NovelAI subsystems illustrate why independent backup-completeness tests matter.

**Lorebook anatomy:** Entries have a title (for author organisation, **not automatically provided to the AI**), body text, one or more activation keys, Always On option, enable/disable and special Hidden mode. Activation can match simple text, case-sensitive regex and AND-requiring multiple keys; advanced conditions for the Xialong/GLM-4.6 model families can respond to active lore entries, model choice, Story/Adventure mode, numeric/string comparisons and AND/OR/NOT groups. Category defaults change entry behaviour; contextual prefix/suffix, reserved tokens, max budgets, trim strategy, insertion order/position and subcontext grouping let an expert tune what is actually sent to the model. **The user can see a Context Viewer preview and count token consumption.** Crucially, *which settings are supported differs by model*: the older free-placement tab is unavailable for certain current models. The AI **Lore Generator** accepts entry type, input descriptor and optional existing story/Lorebook context; it can generate from a proposed concept, but still requires a human to check whether the output actually follows established canon. Hidden entries have a specific **shared-scenario spoiler-obscuring use**; this is not evidence of group-specific live wiki access.

**Image tooling:** The current official docs describe multiple Diffusion models, prompts, negative prompts, seeds, visual Canvas, image2image, inpainting, enhancement/upscaling and image conditioning. **Precise Reference** can take a character image and attempt identity consistency across further outputs; Style Reference can carry a look independently. **Vibe Transfer** allows multiple influence images and encodings which can be exported/imported to avoid unnecessary repeated setup; Director Tools include **background removal, sketch/line-art, colourisation, emotion shifts and decluttering**. This functionality is a **directly evidenced portrait capability**, not just 'AI generates an image'; however, there is no verified automatic attachment of a consistent image identity to a typed WBW-style Character entry. V5 2026 usage and the image Anlas/refill rules must be checked independently of the old V4.5-friendly Opus unlimited-message marketing.

**Price and availability:** $10 Tablet, $15 Scroll and $25 Opus per 30-day subscription are current official claims. The free Paper trial (with verified-email allowances) is **not** an ongoing free-user workspace. Text can be generated during a paid term, but the retained ability to edit or export stories after expiry should be tested with an actual expired account before treating it as equivalent to Sudowrite's expressly documented post-cancellation writing. Mobile is **PWA web access**, not a verified independent iOS/Android native application. NovelAI documents **EN/JP language controls** plus bespoke themes and CSS, enlarged fonts/spacing, dyslexia-friendly fonts, colourblind-friendly themes, and TTS. A 'Story Shelf' is organisational grouping, **not a visual lineage or diplomacy chart**.

First-party sources:

1. [NovelAI subscription and Paper / Tablet / Scroll / Opus terms](https://docs.novelai.net/en/subscription/) — explicit trial allotment and price, context, Opus image allowances, 2026 V5 subscription Anlas expiry policy.
2. [NovelAI full FAQ: privacy, client-side encryption, local storage, loss risks, exports, permissions and accessibility](https://docs.novelai.net/en/faq/) — especially **Stories**, **Images**, **Accessibility** and **Pricing** sections. The service explicitly distinguishes *encrypted stored story data* from *context sent to model servers*.
3. [Lorebook documentation](https://docs.novelai.net/en/text/lorebook/) — import/export JSON/lorebook/embedded-PNG, keyword/regex/AND activation, Hidden scenario entries, Lore Generator, conditional logic and model-dependent placement.
4. [Advanced Context, priority, budget and token viewer](https://docs.novelai.net/en/text/editor/advancedsettings/) — context assembly, trimming/priority, ephemeral context and viewer.
5. [Story settings, Memory/Author's Note, shelves and .story/.scenario exports](https://docs.novelai.net/en/text/editor/storysettings/) and [account backup options](https://docs.novelai.net/en/text/usersettings/account/) — JSON fidelity, conflict settings, bulk ZIP backup.
6. [Precise Reference: character and visual style conditioning](https://docs.novelai.net/en/image/precisereference/); [Vibe Transfer](https://docs.novelai.net/en/image/vibetransfer/) — explicit image-identity tool and reusable encoded conditioning.
7. [Image inpainting](https://docs.novelai.net/en/image/inpaint/) and [Director Tools](https://docs.novelai.net/en/image/directortools/) — named visual editing functions, not an asset-library or map editor.
8. [User settings and custom themes/languages](https://docs.novelai.net/en/text/usersettings/usersettings/), [official image model list](https://docs.novelai.net/en/image/models/) and [scripting Lorebook API](https://docs.novelai.net/en/scripting/lorebook-api/) — user-side personalisation and plugin/API capabilities.
9. [2026 NovelAI updates](https://novelai.net/updates) and [official Aug 2026 V5 subscriber policy explanation](https://blog.novelai.net/subscription-updates-usage-limits-2025-88a208d5d9c5) — dated evidence where evergreen FAQ pages contain older model-generation language.

**Design observations to preserve:** NovelAI has meaningful differentiation in *control over when individual lore records enter an AI prompt*, its transparent token-budgets/context viewer, model-specific conditional activation, a powerful author-controlled visual-reference pipeline, and a surprisingly serious story export format. Conversely, **Hidden story lore is not an RPG role-based permissions engine**, and **local browser storage is not a robust local-first project**. For WBW, compare model-grounded fact retrieval and actionable author decisions, and do not infer that richer prompts alone deliver reliable canonical consistency.

#### Inkarnate — online cartography suite with an existing Windows app and reusable 2.0 scene art

**Product role:** A visual creator for **world/region maps, cities, villages, grid battlemaps, interiors, isometric/scenic maps**, using layered brushes, terrain masks, text, lines, shapes, thousands of preset/marketplace stamp assets and downloadable scene images. Map production is its product, rather than a rich encyclopaedia whose maps happen to sit beside lore. Its 2.0 releases changed what counts as 'current' in several ways, making a circa-2023 comparison particularly unreliable.

**Release timing / platform:** December **8, 2025** was the Inkarnate 2.0 release with the refreshed editor, new asset packs and functioning beta features: per-scene composite stamps, modern custom layers, filters, blend modes, advanced brushes and background autosave. **January 21, 2026** introduced paid **Studio** Windows desktop early access. **March 6, 2026** extended the available **Windows desktop app to both Creator and Studio subscribers**; Mac was still in progress in the vendor's announcement. Importantly, **Inkarnate's official FAQ still says it cannot be used offline**. The Windows desktop programme is therefore real and paid but **is not a supported local-first/cloud-independent map file programme**. The download route is [Inkarnate's desktop installer page](https://inkarnate.com/download); the vendor's public changelog is the clearest contemporaneous tier evidence.

**Free and paid product limits:** The present FAQ distinguishes Free/Hobby 3-map/2K/personal-use, Creator 100-map/8K/custom asset upload/clone shared map, and Studio unlimited-map/16K beta/licensed commercial use, custom asset manager and larger art limit. Monthly public prices shown with the FAQ are **$7.99 Creator and $14.99 Studio**, but there were **grandfathered 2025 introductory annual rates** for pre-2.0 buyers. **Do not use those launch specials as the current new-customer default.** The studio commercial licence remains valid for maps exported while Studio was active, even after cancellation; this is materially different from permission to resell stock assets or source libraries, which the [December 2025 terms](https://inkarnate.com/terms/) prohibit. Artwork licensed from **third-party marketplace artists** may have separate terms; validate each pack if a map will be used commercially.

**Generative maps versus drawing:** A named **World Generator** exists for automatic random **landmass shapes**; the August 2024 official update moved it to a dedicated sidebar tool for world/region styles and characterised **auto mountains as a future possibility**, not a shipped fact. Newer community feedback from August 2026 still requests continent/archipelago seed presets, restricted masks and **procedural stamps**. A basic **water percentage** control is reported, but advanced landmass-template generation is unverified. That warrants **P procedural terrain**, not 'no generation' and not an unqualified full terrain/city simulation. The 2026 **built-in tutorial** is a step-by-step visual *world map* introduction, not the same thing as WBW's proposed worldbuilder questionnaire linking places to factions/people. The free June dashboard cloneable maps are useful **starting map templates**, not configurable lore entity schemas.

**Layer and library mechanics:** Inkarnate 2.0's layers are not mere freeform images: author-created/renamed/reordered layers can carry their own masks, clipping, transparency, blend and shadow options. Separate grid/filter types, border shapes, brush textures, stamps and editable text make a complex atlas painting possible, and the January 2026 release notes explicitly say old **Path objects were migrated to the Color Mode of the Line Tool**. Scene Stamps turn *multiple placed objects and textures into a single reusable composite* that can be dropped into other maps. The copy/paste mechanism can transfer selections of stamps/text/shapes across maps via a clipboard-encoded string. **Autosave** runs asynchronously for free accounts, and **Snapshots** capture states (one saved snapshot per Free map, unlimited in paid tiers). These are real user-experience features that a generic 'has map editor' tick misses.

**Notes, publication, and export boundary:** A first-party **map Note tool** is referenced in the vendor's own feedback tracker and can associate prose with locations; that is a more useful approximation of lore-linked map pins than merely putting a location name on a map. However, a long-standing official feature request specifically asks for **exporting Notes to thematic PDF or HTML with clickable pins**, and the vendor's affirmative FAQ promises downloadable **images**, not an independent editable whole-project package. Community publishing/cloning offers shareable maps, but there is no established role-aware player reading mode, GM spoiler encryption, cross-article backlinks or live coauthor roles. **Published image maps are not a restorable source file** and custom uploads are a paid benefit. Product documentation should be retested for whether user can export an internally editable *native scene format*, and whether Note text, custom stamps, label IDs and layers survive any available map download/downgrade.

First-party sources:

1. [Inkarnate FAQ and plan comparisons](https://inkarnate.com/faq/) — account and internet requirement, Free/Creator/Studio scopes, commercial exports, map types and images-only public export description.
2. [Inkarnate 2026 release feed](https://feedback.inkarnate.com/changelog?c=New+Feature) — **6 March native Windows client for Creator/Studio**, 21 January Studio early access, 12 January line/path migration, June map templates and 28 September free tutorial.
3. [Official Inkarnate 2.0 feature release](https://feedback.inkarnate.com/changelog/inkarnate-20-star) — masks, clip masks, named custom layers, Scene Stamps, autosave/snapshots, asset marketplace and working beta caveats.
4. [Fantasy World 2.0 release and existing World Generator](https://feedback.inkarnate.com/changelog/major-update-fantasy-world-20-earthamericas) — generated landmasses, but explicitly future mountain automation.
5. [Official 2026 guided-world-generation feature request](https://feedback.inkarnate.com/p/feature-request-guided-world-generation-and-generation-templates) — current generator's shape/landmask-control limitations; **this is a user request, not a release announcement**.
6. [Map Notes export feature request and status](https://feedback.inkarnate.com/p/notes-export) — validates the Note-tool concept while warning that exported interactive lore is not established shipped.
7. [Published map and map maker terms](https://inkarnate.com/terms/) — Marketplace asset redistribution, AI-generated Marketplace product restrictions, authorship, commercial use and subscriptions.
8. [Current public pricing landing](https://inkarnate.com/pricing) and [download route](https://inkarnate.com/download) — client-rendered live pages; cross-check tier access against vendor changelog as above.

**Design observations to preserve:** Inkarnate's impact is the *visual workflow*: repeatable scene subassemblies, painterly layers with local masks, community cloneable templates, approachable tutorial, fast auto-saving and a broad asset ecosystem. None proves that a map asset has a unique schema-backed Lore Entry, time-versioned territory, automatically linked settlement name or playable GM permission. If WBW pursues any map editor, the distinction between *cartographic art layers* and *semantic world data layers* is decisive. The commercial licence is likewise **an export-time condition**, not proof of source-file ownership or redistributable stamp libraries.

#### Wonderdraft — offline perpetual-licence procedural landmasses and manually finished cartography

**Product role:** A strictly map-focused Megasploot tool with installed desktop execution and no recurring sign-in need. It caters to writers/game masters drawing *world and region maps*, supplying a route from rough generated coastlines to polished presentation imagery. It is a competitor to WBW **only on cartography**, not evidence for built-in entities, faction graphs or AI lore creation. Its companion Dungeondraft is a **separate Megasploot app**, so do not merge Dungeondraft's dungeon/battlemap tools into Wonderdraft.

**Ownership and platform:** The official current sales page offers **one-time $29.99**, with downloadable optional one-time Pirate pack ($4.99) and Fantasy Buildings pack ($9.99). It expressly advertises **DRM-free, internet-independent operation, no subscriptions, no extra commercial licence**, and selectable dimensions **512–8192px**. This is unusual against Inkarnate's hosted subscription, and closer to WBW's local ownership principle. The vendor GitHub about text names **Windows 10 x64, Linux and macOS**; the website minimum-spec text currently lists Windows 10 x64 or Ubuntu, so **do not assume native ARM Mac or all Linux distributions work** without installer/architecture verification. Pen/tablet support is specifically claimed for supported Surface/Wacom devices and can materially improve manual cartography.

**How maps are built:** The **Landmass Wizard** can create a world/region landmass quickly, while dedicated tools let an author change coastlines and lakes, route rivers/roads, paint clusters of forest and mountain symbols, colour biomes, place towns and labels, and apply curated style themes. The first-party GitHub wiki quick-start groups controls under Water, Landmass, Symbols, Labels and Overlay. It describes *saving an editable map project locally*, then *exporting a rendered JPG or PNG*. The sales page markets automated coast beautification and artistic roads; there is **no demonstrated editable underlying vector-road route network or measured travel duration system**. It is raster/bitmap-oriented; an exported PNG is an image that a user can include in a world article, not an interactive map with click-through wiki entries. The older developer wiki was last edited in **2019–2020**, so it supports the enduring base workflow but cannot rule out newer functionality.

**Boundaries for comparison:** A set of territories with coloured contours may be painted as an *artistic overlay*, but no first-party recent source establishes typed borders owned by dated factions, a multi-epoch map history, named nested scale maps, auto-propagated linked labels or author/player reveal permissions. 'Layers' and 'territories' therefore receive **P** for graphic approximation, not **Y** for WBW's richer interactive-world definitions. **Procedural landmass** is explicitly current; procedural city, star-system, population, roads or climate ecosystem generation **remain U** unless the actual build is tested or direct documentation found. Native local project files are a tangible **offline source backup for the map**, not a multi-type world content archive. Flat PNG/JPEG exports are commercial presentation assets, and vendor says no extra commercial licence is needed for maps made with its shipped content; *third-party asset pack licences must be judged separately*. No native coauthoring or subscribed web wiki is shown.

First-party sources:

1. [Current Wonderdraft home, features, $29.99 and separately priced official add-ons](https://wonderdraft.net/) — live public vendor claims for offline/DRM-free, price, output dimensions, roads/rivers, procedural landmass, thematic labels and commercial licence.
2. [Megasploot Wonderdraft repository](https://github.com/Megasploot/Wonderdraft) — official desktop OS scope and maintained support/issues locus. The GitHub project contains older developer-owned documentation; not an open-source claim.
3. [Developer's Wonderdraft wiki home](https://github.com/Megasploot/Wonderdraft/wiki) and [developer Quick Guide](https://github.com/Megasploot/Wonderdraft/wiki/Quick-Guide) — historic primary-source instructions: new map, wizard, Water/Landmass/Symbols/Labels/Overlay controls, editable save and JPG/PNG image export.
4. [Developer-maintained quick-guide indexing mirror](https://github-wiki-see.page/m/Megasploot/Wonderdraft/wiki/Quick-Guide) — **mirrors the 2019 official wiki text**, used only where the official GitHub wiki endpoint is temporarily inaccessible. This should not be misrepresented as fresh 2026 release evidence.

**Design observations to preserve:** Wonderdraft offers a straightforward commercial proposition: a one-off purchase, local editable map files, fast generated coastlines, coherent illustration themes, and premium optional art assets. It also underlines the gap between **a beautiful hand-painted map image** and **a lore-linked, navigable geographic database with temporal and permission semantics**. A final comparison should avoid framing these as two versions of the same technical feature.

### Outstanding Batch 11 verification questions

- **NovelAI:** Use a disposable, explicitly authorised trial account to test the 50/30 free-generation caps, whether browser-only local storage survives reload/offline *without AI*, and how it reacts to cleared storage. Import/export a story with deliberate undo branches, memory, custom Lorebook key/regex/AND settings, conditional activation, hidden scenario spoilers and a separate visual image; compare **.story, .scenario, all-stories ZIP, .lorebook and plain text**. Verify which current model family supports each Placement/Advanced Condition. With permission, test the latest V5 image budget and **Precise Reference** consistency across angles/styles, inspect generated image metadata, and save+reimport a Vibe bundle. **Do not reset a real account password** as a test; vendor says that can destroy encrypted remote data. Verify after-subscription free *editing* separately from AI generation entitlement.
- **Inkarnate:** Confirm with a consenting Creator/Studio account that the March 2026 **Windows desktop installer** opens and closes normally, check network disconnect before opening, while editing and after save; the FAQ still says offline editing is not supported. Create a simple map on Free and clone the June tutorial template; confirm whether World Generator only changes the land mask or produces new elevations/biomes. Inspect named **Custom Layers**, visibility and masks, plus export of transparent PNG, composite **Scene Stamps**, snapshots, embedded Note text and 2K/8K/16K resolution gates. Try official download/backup and restore of a map with references/labels/notes to determine whether **editable scene data** can actually be exported or only images. Verify 2026 Creator/Studio current annual billing, no user-composed AI features, public/unlisted access, marketplace artwork licence and multi-editor support. Never attempt to extract restricted asset libraries or scrape member maps.
- **Wonderdraft:** If a tester has a legitimate licence, install the current supported Windows/Mac/Linux binary and record its version, available macOS architecture and project file format; compare source-file save/reopen to PNG/JPEG export. Test Landmass Wizard seed/configuration, multi-scale maps, image import/trace, Overlay/territory editing, individual layer visibility, river/road editing and any direct distance ruler. Distinguish automatically drawn coastline from generated biome/settlement/ecology and from manually painted stamps. Verify included asset commercial licence versus independently sourced art, highest supported canvas resolution, and whether any new release adds a more structured map-note/link system. Do not infer future functionality from the old 2019 guide.
- **Across all three:** Treat **NovelAI's prompt-conditional Lorebook**, **Inkarnate's location-note and multi-layer art canvas**, and **Wonderdraft's DRM-free local map composition** as distinct capabilities, even if all are described loosely as 'worldbuilding'. Separate **native desktop app** from **offline ownership**, **client-side encrypted hosted writing** from **browser-cache data**, **paid commercial map-export rights** from **stock asset redistribution**, and **image-reference character identity** from **canon-attached character portrait objects**. Stage 0 must first establish WBW's shipping and branch state before any 'feature gap' ranking; Stage 13 must revisit prices, 2026 release notes and independently validated user-success signals before publishing a finished report.

---

## Batch 12: Azgaar's Fantasy Map Generator

**Evidence checked 6 November 2026:** Azgaar's first-party GitHub repository and **v1.156.0 release dated 24 October 2026**, the synchronised October wiki/Knowledge Base, Working offline, Azgaar Assistant, data import and GIS export, policy, Journeys, Markers, Battle Simulator and Emblems documentation. This is **documentary research**, not a hands-on test of an installed desktop build, an AI API account or a shared map. As of this batch, **all 33 named competitors have source profiles**. The WBW baseline is deliberately unscored and no overall feature-gap ranking, sales/reach judgement or final recommendation is asserted.

### Comparable feature matrix (Batch 12)

The **same 57 capabilities and ordering** used throughout Batches 1–11 are preserved. **Y** = evidenced current feature; **P** = partial, analogue or significantly narrower feature; **G** = paid/credit-gated; **N** = explicit absence or product/category mismatch; **U** = insufficient vendor evidence (not proof of absence); **—** = WBW baseline unverified. The most significant caveats are that Azgaar now genuinely has an **offline Electron desktop edition**, **computed multi-leg journeys**, **AI-assisted map editing**, and a **view-only exported-map mode**; none should be mistaken for a governed encyclopaedia or real historical state simulation.

| Category | Capability | Azgaar | Mimir |
|---|---|:---:|:---:|
| Platform | Native desktop application | Y | — |
| Platform | Edit entire world offline | Y | — |
| Platform | Local user-controlled world files | Y | — |
| Platform | Vendor-hosted cloud world storage | N | — |
| Platform | Multiple separate worlds/projects | Y | — |
| Platform | One-time purchase instead of subscription | P | — |
| Platform | Ongoing free account tier | Y | — |
| Structure | Structured lore/entry type templates | P | — |
| Structure | Fully arbitrary schema/field definitions | P | — |
| Structure | Editable reusable entry prompts | N | — |
| Onboarding | Guided question-based world creation | P | — |
| Editing | Rich-text article editing | Y | — |
| Editing | Images embedded within entries | P | — |
| Editing | PDF document viewing alongside notes | U | — |
| Editing | Tables inside editor or wiki content | U | — |
| Editing | Split/multicolumn working panels | Y | — |
| Linking | Cross-article wiki links/mentions | P | — |
| Linking | Backlinks/auto-discovered relationships | U | — |
| Linking | Visual relationship graph | P | — |
| Organisation | Categories/hierarchy/tags | Y | — |
| Organisation | Search across lore | P | — |
| Characters | Automatically generated family trees | N | — |
| Factions | Interactive diplomacy/organisation webs | P | — |
| Time | User-defined calendar systems | P | — |
| Time | Recurring calendar events | N | — |
| Time | Event/history timelines | N | — |
| Time | Historical events shown geographically on maps | N | — |
| Maps | Import/upload map image | Y | — |
| Maps | Native procedural terrain generation | Y | — |
| Maps | Native procedural city generation | P | — |
| Maps | Generated sci-fi star systems and routes | N | — |
| Maps | Interactive pins linked to lore | Y | — |
| Maps | Nested/interconnected interactive maps | P | — |
| Maps | Toggleable image/map layers | Y | — |
| Maps | Political borders/territory polygons | Y | — |
| Maps | Draw roads/routes on map | Y | — |
| Maps | Calculate distance and travel time | Y | — |
| Maps | Map labels synchronise automatically from wiki entries | P | — |
| RPG | Campaign/plot management | P | — |
| RPG | Session preparation, session notes or reports | P | — |
| RPG | Integrated RPG character sheets | N | — |
| RPG | Creature/NPC statblocks | N | — |
| RPG | Built-in support for multiple game systems | N | — |
| Visibility | Hide GM/private secrets | P | — |
| Visibility | Publish or share player-readable world pages | P | — |
| Visibility | Granular reader/subscriber permissions | N | — |
| Collaboration | Invite coauthors or collaborative editors | N | — |
| AI | Integrated lore-writing AI | P | — |
| AI | Integrated AI image generation | U | — |
| Generation | In-product heraldry design/generation | Y | — |
| Generation | In-product character portrait generation | U | — |
| Export | Portable whole-world backup/export | Y | — |
| Export | Editable Word export and reimport | N | — |
| Export | Compiled world/codex as PDF | N | — |
| Writing | Dedicated novel/manuscript tool | N | — |
| Accessibility | Multiple localised UI languages | Y | — |
| Accessibility | UI font/readability/colour accessibility controls | Y | — |

**Classification caveats, important corrections and security boundaries:**

- **Current desktop/offline status is unequivocally Y.** The official [v1.156.0 release](https://github.com/Azgaar/Fantasy-Map-Generator/releases/tag/v1.156.0) provides **Windows x64/ARM, macOS Intel/Apple Silicon, Linux AppImage and Debian/Ubuntu** installers; it is an Electron app. Earlier descriptions of Azgaar as 'web-only' are stale as of the September–October 2026 releases. [Working offline](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Working-offline) explicitly says the packaged app needs no browser or connection. The installed web app/PWA also precaches the programme for offline use *after* a successful first download, whereas an ordinary browser tab might not cache editors that have not yet been opened. External fonts/textures, third-party city previews, Dropbox or remote AI providers can still need a connection. Do not confuse **core offline editing** with **every optional online integration working offline**.
- **Free is not a perpetual-licence product and not a hosted free 'account'.** Azgaar is free, MIT-licensed open-source software; the author says there is no sale and no standard account/profile service. A **P for 'one-time purchase instead of subscription'** denotes *no recurring software-access payment*, not an invented purchase transaction; **Y free tier** means unfettered free map authoring, not a commercial freemium account. The optional **Discord-connected Assistant Member tier** increases a documentation-chat daily allowance; it is not an Azgaar subscription for map authoring. Community donations are not a licence gate. The author permits commercial sale/use of created maps, subject to separately sourced artwork licences. [Repository](https://github.com/Azgaar/Fantasy-Map-Generator), [Policy](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Policy), [Knowledge Base](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Knowledge-Base).
- **A world map is structured data, but not an arbitrary-entry encyclopedia.** Typed editable geographical entities include **states, provinces, cultures, religions, burgs, routes, rivers, regiments, journeys, markers, markets, goods, biomes and zones**; many have names, flags, metadata, tags and **rich-text Notes**. The Notes editor can format prose and contain links, externally referenced images and raw HTML. Current versions use **Quill 2** rather than the former TinyMCE. This supports **P typed lore templates**, **P custom fields** (free-form tags and typed CSV columns, *not* user-created arbitrary field definitions) and **Y rich-text**; it does **not** demonstrate WBW-style configurable species/characters/skills/items schemas, cross-article backlinks or full wiki. Public documentation says rulers/dynasties have to be described in notes because they are **not structured entities**; dynasty/family trees are explicitly absent. Links inside notes and click-through map objects justify a narrower **P cross-links**, not a proved backlinks engine. [Knowledge Base](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Knowledge-Base), [Markers](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Markers), [Data import](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Data-import).
- **Calendar language does not establish event time.** The **Lore Editor** provides map **year, era, calendar text and description**, and battles/notes can bear dates. But Azgaar's current official FAQ explicitly says **the map is static and time progression is not implemented**. Therefore **P calendar metadata** is not a custom runnable days/months/recurrence engine, and **N recurring events, historical timeline and dated geography** are defensible. Neither an AI Assistant's ability to alter a 'chronicle' nor a battle date proves a multi-epoch map layer. Similarly, the economy is a **single recalculated snapshot**, *not* a market changing as time advances. [Knowledge Base: time and economy](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Knowledge-Base).
- **Generated settlements are not the same as generated streets.** Azgaar genuinely generates and edits **burgs** (settlement sites and attributes), but the Burg Editor's zoomable **street-scale city/village/dwelling preview is generated by an external Watabou application**. That is **P native city generation**: the settlement geography is built in, while detailed street layout relies on an external generator. Similarly **Submap** makes a separate map from a region and **Transform** rebuilds terrain; neither documents a linked hierarchy of live parent/child atlas maps. The documentation describes an Earth-like generator; sci-fi galaxy images can be **styled manually** but a generated star-system graph is **not shipped**. [Knowledge Base: submaps, city previews and galaxies](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Knowledge-Base).
- **Interactive cartography deserves full credit.** Generated/modifiable heightmaps, hydrology, climate, biomes, population, borders, cultures, states, religions, provinces, labels, icons, roads/sea-routes, markers and regions are **semantic layers**; toggle styles and political/cultural/religious overlays individually. The **Image Converter** can convert a supplied heightmap image into geographic height data; an image overlay is also available. Right-click context menus expose entities under the pointer. The **Journeys layer** (2026 v1.150) is not merely a line-ruler: it generates 18 trip archetypes, chooses overland/river/sea route legs, supports travel-mode and daily-hours parameters, derives **distance, speed, hours and days**, permits author overrides, animates the route and exports **CSV**. Therefore distance **and** travel time merit **Y**, correcting older literature. **Labels** can reflect generated map objects, but there is no stand-alone prose wiki whose renamed entry automatically drives *every* artistic label; score **P auto-sync from wiki**. [Journeys](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Journeys), [User Interface](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/User-Interface), [Knowledge Base](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Knowledge-Base).
- **'AI integrated' has two different modes.** The **AI text generator** writes prose in Notes using an owner-selected provider (official policy names **OpenAI/Anthropic/local Ollama**); an external API or local model is normally required. Separately the **Azgaar Assistant** offers limited *free, document-only* Guest/Discord Member questions on the official website: its vendor server **cannot inspect the open map** in that free mode. With **a user-supplied remote AI API key or local model** (the current Assistant supports a wider provider list including Gemini, Mistral, Qwen and DeepSeek), it can read the map, answer world-specific questions and **propose data changes** such as renaming burgs, editing notes, revising diplomacy/biomes or creating entities. Each proposed batch has a before/after diff and requires explicit **Apply**, with conditional **Undo**; it is not autonomous background editing. Desktop/self-hosted editions cannot use the vendor's free hosted documentary chat and need a key or local model. This is a more substantial **P lore-writing AI** and **P assisted map editing** than simply linking to ChatGPT, while no confirmed in-product **AI image maker** or character portrait generator warrants a Y. **Security caveat:** the vendor explicitly warns the Assistant executes **model-written JavaScript in the app context** to read the map, and untrusted imported map notes can carry prompt injection. The read-only intent of those scripts is a model instruction, **not a sandbox**. Treat foreign `.map` files as untrusted, particularly when an Assistant key has been configured. [Assistant](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Assistant), [Policy](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Policy), [Ollama integration](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Ollama-text-generation).
- **View-only player maps shipped, but are *not access control*.** Current **Save → View-only** exports a map that still allows pan, zoom, layer toggles, hover notes, search and 3D, but hides editor controls, Omnibar edit commands and Save. A URL `view=1` also opens a loaded map in that state. The current FAQ explicitly calls this **not a protection** because `.map` is plain text, readers can modify it, and they can open other maps. A **different, stale answer in the same Knowledge Base still says 'There's no View Only mode'**; the detailed current Save feature should control the 2026 assessment. A share link uses a **Dropbox-hosted map file** (or another CORS-compatible location), **not** an Azgaar-hosted permission-managed world wiki. To hide GM secrets, authors must make/sanitise **a separate player-facing export**; visibility masks or layer toggles do not implement row-level secrecy. Thus **P player sharing/private copy workflow**, **N granular reader permissions**, **N live invited coauthors**. [Knowledge Base: view-only and share](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Knowledge-Base), [Policy](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Policy).
- **Export formats have different preservation boundaries.** Save/Load `.map` files are **editable local source**; `.gz` is compressed and `.map` is text based. Browser IndexedDB autosave is an *additional convenience*, not a safe substitute for an independent exported backup; clearing browser data clears autosave. The Export dialog can produce **SVG/PNG/JPEG visual maps**, **full/minimal/packed-cell/grid JSON** and separate **GeoJSON** for cells, rivers, routes, markers and zones; entity Overviews also provide CSV exports, and the latest importer accepts CSV for numerous typed entity groups. GeoJSON polygon cells contain attributes such as elevation, biome, population, culture, religion, state and province. **3D scene** offers an **OBJ terrain mesh export** and JPEG screenshot; Globe view cannot export OBJ. These are genuine forms of portability, but JSON export and Word *document roundtrip*, or a beautifully exported cartographic PDF and a compiled **world article codex PDF**, are categorically different. No first-party Word DOCX import/export or book-like compiled codex was evidenced, so those columns are **N**. After v1.156, stored SVG is used for older-map migration and **the rendered map is rebuilt from data**, which improves the distinction between a persistent geographic source model and a picture. [GIS export](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/GIS-data-export), [Data import](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Data-import), [v1.156.0 migration](https://github.com/Azgaar/Fantasy-Map-Generator/releases/tag/v1.156.0), [Knowledge Base](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Knowledge-Base).
- **Accessibility and non-map limits:** v1.155 translated interface into **29 languages** (do not conflate this with available AI model languages). UI styling permits interface-scale changes, label fonts and configurable colours; local font assets may be needed for full offline consistency. A keyboard-friendly **Omnibar/command palette** and search cover geographic entities. 3D terrain, globe and heightmap mesh export are presentation/game-asset options, *not* a 3D scene object editor. The Knowledge Base calls mobile UX unsuitable/unsupported, even if a phone browser can technically load the site. No product-specific evidence for a Word manuscript drafting environment, statblock editor, ruleset selection, campaign/session pipeline, in-product AI portraits, PDF viewer or specialised table editor is offered. `U` is reserved for ambiguities where absence has not been demonstrated; known category differences receive `N` or `P`. [Releases](https://github.com/Azgaar/Fantasy-Map-Generator/releases), [Knowledge Base](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Knowledge-Base), [Omnibar](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Omnibar).

### Comparative feature extensions found in Batch 12

These narrower distinctions should be retained in the final comparison because a general 'map generator = yes' score obscures the tool's most interesting system design. **Y/P/N/U** follow the definitions above; **—** remains WBW unverified.

| Additional capability / competitive detail | Azgaar | WBW |
|---|:---:|:---:|
| Fully free open-source software with MIT-licensed code and commercial-use map rights | Y | — |
| Packaged Electron native app for Windows, Intel/Apple Silicon macOS and Linux | Y | — |
| Offline PWA after completed precache; ordinary tab offline completeness depends on cache | Y | — |
| Independent editable `.map` and compressed `.gz` backup files | Y | — |
| Browser-local IndexedDB autosave and manual computer save/load | Y | — |
| Optional Dropbox save and CORS-based shared map links | Y | — |
| Vendor-managed world hosting with account roles and content permissions | N | — |
| Seed-controlled map replay subject to version and generation options | Y | — |
| Image-to-heightmap conversion / visual map image overlay | Y | — |
| Procedural elevation, lakes, rivers, climate and biome geography | Y | — |
| Hex, square and isometric underlying map-cell lattice presets | Y | — |
| Direct cell-border fine-tuning with Wrap Tool and repainting geography | Y | — |
| Typed geographic entities: burg/state/province/culture/religion/zone | Y | — |
| Typed notes on terrain, units, settlements, economic entities and routes | Y | — |
| Rich Quill Notes with links, image references and HTML source editing | Y | — |
| In-product heraldry/coat-of-arms emblem generator | Y | — |
| Automatically generated dynasty characters and ancestry tree data | N | — |
| Political, cultural, religious, biomes and population map overlays | Y | — |
| Economy: resources, production, goods, markets, trade, tariffs and taxes | Y | — |
| Economy evolving on its own through in-world time | N | — |
| Generated armies/regiments and interactive turn/step battle simulator | Y | — |
| Route graph with road, river and sea travel segments | Y | — |
| Generated multileg journeys with modes, pace, hours/day and durations | Y | — |
| Custom journeys visible in the map, with route animation and CSV | Y | — |
| Generated urban settlement placements and descriptions | Y | — |
| Street-level city/village/dwelling previews through external Watabou tool | P | — |
| Automatically linked parent/child region atlas with live synched source data | N | — |
| Submap/Transform regional rebuild and reuse of some original geographic state | Y | — |
| Tagged entity columns, typed CSV import and bulk overview exports | Y | — |
| Full map JSON and geospatial GeoJSON layers for GIS processing | Y | — |
| SVG, PNG and JPEG rendered cartographic export | Y | — |
| 3D heightmap terrain viewing and export to editable OBJ geometry | Y | — |
| Globe view and terrain scene sun/lighting/presentation controls | Y | — |
| Date-labelled lore metadata without runnable time progression | P | — |
| Animated map changes automatically over centuries/years | N | — |
| Searchable maps, entity overviews and Omnibar command palette | Y | — |
| Built-in Note AI prose generator via user API/local Ollama | P | — |
| Limited free official-site AI documentation Assistant without map access | Y | — |
| User-key AI Assistant can inspect map and draft batched entity changes | P | — |
| Human confirmation with before/after preview and conditional undo for AI changes | Y | — |
| Model-written JavaScript executed in app for AI map inspection | Y | — |
| Security-enforced sandbox for AI map reads | N | — |
| View-only saved interactive map with editor controls hidden | Y | — |
| Cryptographically secured or permission-checked player view | N | — |
| Interface localised into 29 languages as of October 2026 | Y | — |
| Adjustable interface scaling, map text style, layer fonts and colours | Y | — |
| Responsive supported phone editing experience | N | — |

### Vendor profile and design implications: Azgaar

**Positioning and user job:** Azgaar is an unusually capable **geographic world simulator and atlas editor**, free rather than subscription-funded. It is at its strongest when an author needs a coherent generated planet with a reproducible geography; contiguous political territory; rivers, climate, cultures and settlements; military/economic systems; and routes that can be calculated, explored and exported. A user can do far more than draw a pretty static map. The **fundamental data model is a generated map with typed geographic records**, though, not a cross-project lore database of arbitrary article types. It should be treated as a serious specialist competitor in map-related WBW features and a potential interchange-format/integration reference, not scored as though it ships a fiction-writing/GM publication platform.

**Release chronology matters:** September's **v1.149 desktop app** and **v1.150 Journeys** release, October's **v1.153 Omnibar**, **v1.155 internationalisation** and **v1.156 data migration** changed capabilities that older competitor overviews would misreport. This research uses v1.156 as the authoritative latest tagged release at review, even though the main hosted generator may expose an older cached title at some crawl dates. 'Latest' is date-bounded to 6 November 2026, not permanent. The native desktop builds are explicitly **not code-signed** and trigger OS unknown-publisher warnings; that is relevant to trust/onboarding and should be confirmed with the vendor's published hashes, not by asking users to disregard security prompts casually.

**World generation and editing:** A user can regenerate stages selectively (e.g., provinces, religious distribution, burgs) while working on a seeded world. However, regenerating/editing one dependent layer can affect other map objects. The [Wrap Tool](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Wrap-Tool) advises that cell-corner transformation may not automatically reposition unrelated labels/burgs/routes. The risk is data **referential integrity when geometry changes**; WBW's prospective map integrations should explicitly design for georeferenced entity IDs, orphan validation, dependency updates and undo rather than assuming all cartography interactions are simple draggable pins. Semantic layers make all kinds of queries possible, but the current product is not a fully time-stepped historical simulator. Its turn-by-turn **Battle Simulator** should be described as a military engagement modelling subtool, not playable RPG combat with character ability actions.

**Storage and trust:** The programme's software licence and user-created map rights favour creator ownership. Source maps should be saved as portable `.map`/`.gz`; an exported PNG/SVG or GeoJSON subset does not substitute for the full editable map. Conversely, browser IndexedDB is convenience only and disappears with site-data clearing. The view-only flag is a **UI restraint, not secrecy**. Publishing a supposedly spoiler-safe version requires stripping private notes/entities from the actual shared file. AI extensions have another dependency: **user keys and third-party model data flows** plus model-authored in-page JavaScript inspection of potentially attacker-provided `.map` data. A local Ollama model may avoid network disclosure but does not by itself prove script execution safe. This is a practical requirement for any WBW AI-on-untrusted-worlds architecture, not a claim that attacks have occurred.

**What to learn without prematurely copying:** Geographical first-party generators, typed map overlay layers, solid export/backup hygiene, distance/travel-time calculation and **editable generated journeys with transparent parameters** are genuine positive patterns. So are map-to-entity notes, good interop (GIS, OBJ), readable interactive map handoffs, and AI changes displayed as explicit before/after transactions. But importing every simulator into WBW would increase scope dramatically. **Later Stage 13** should evaluate relevance against a verified WBW codebase and user needs, especially whether native 2D map generation is strategically useful to a lore author, instead of equating all 57 fields or treating every specialist map feature as an obligatory parity target.

### Outstanding Batch 12 verification questions

- **Offline/platform:** Install signed-hash-verified v1.156 Windows/Linux/macOS builds in a disposable test environment. Generate a map, save as `.map`, disconnect internet, close/reopen, edit and save again. Check offline font/texture fallbacks, 3D, rich Notes and city-preview breakage. Repeat as a PWA *after precache* and as a plain browser tab; clearly distinguish those outcomes. Test accessible OS architectures separately and record the native app's unknown-publisher warning.
- **Geography and integrity:** Create one seeded map and verify identical output with identical generator version/options, then vary a generation setting. Attach a note, image reference, route, population, market, province and journey; alter coastlines, remap a state, regenerate one layer and use Submap/Transform. Document which IDs, labels, notes, routes and commercial-simulation fields survive and whether transforms create orphans. Compare political, biome, population and climatic layers in the SVG/data model.
- **City/3D/exports:** Inspect a burg's **live Watabou city/village/dwelling preview** with and without network. Try custom burg links and test generated city context persistence. Export and reimport a representative `.map`/`.gz`; separately export JSON, GeoJSON, CSV, SVG, PNG and 3D OBJ, documenting loss of notes/geometry IDs, styling and faces. Import CSV for burgs, religions and states, verify typed-column behaviour, and establish whether full JSON is a **restore** format or only a data extract. Do not assume browser Print-to-PDF constitutes a codex export.
- **Journeys/economy:** Test the 18 archetypes, route-following versus off-road legs, different transport speeds, daily travel limits, per-leg time override, hidden segments, CSV preservation and reproducible output. Run a military battle and economy refresh: show that changes are triggered **on user action** rather than an autonomous world history. Verify if the `chronicle` stores a dated event log yet remains distinct from a navigable historical timeline.
- **Sharing/privacy:** Save separate editable and view-only files; open the view-only `.map` externally and inspect whether plain-text edits reveal/redraw hidden items. Try Dropbox sharing only with disposable content and explicit consent, checking whether signed-out users may load it and whether a CORS failure is explained. Never publish or upload a real private GM world merely to test. Do not treat the `view=1` URL parameter or hidden editing tabs as authentication.
- **AI security/consent:** With **an explicitly authorised disposable API key or local model**, test a small pre-approved world with ambiguous rename/market edits, diff review, Apply/Discard, and conditional Undo after external edits. Inspect exact context sent, including note and map snapshots. Test against inert sample prompt-injection text in a test copy only; avoid executing arbitrary external-world code or exposing secrets. Confirm free Guest/Discord Member limits, key-tier direct-provider costs, desktop requirements and 90-day vendor chat retention on official-site free mode. Do not sign into someone else's cloud or consume paid inference without consent.
- **Access and mobile:** Verify the 29 language options and custom font/offline behaviour, map search, keyboard shortcuts, interface scaling and browser screen-reader support. Check phone/tablet ergonomics rather than interpreting 'page opens' as proper mobile product support. Verify remaining U scores via direct install (PDF viewer, table editing, any AI image integration) without converting lack of documentation into proof of absence.
- **Across the whole audit:** **33/33 vendor source profiles now exist**. Before a ranking, Stage 0 must inspect WBW's actual repository/branch, working functionality and scope, and Stage 13 must normalise **licence vs freemium**, **native offline vs PWA cache**, **model-powered map edits vs editorial text AI**, **geography entity vs wiki entity**, **static map vs historical simulation**, and **view-only export vs access controls**. The detailed final comparative conclusions, feature priorities, market positioning and any commercially meaningful success claims remain held back for the single final report.

---

## Stage 0: Mimir repository baseline — 6 November 2026

### Identity, authority and what has actually been checked

**Repository:** private [AlexGoldsmithUnrealDev/Lorekeeper](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper). **Authoritative inspected branch:** `main`, commit [`02b3607d149fe4740d7e2ea6f83fa08152a2f282`](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/commit/02b3607d149fe4740d7e2ea6f83fa08152a2f282) (5 November 2026). **Product identity in the actual source:** `Mimir`, `package.json` `productName: "Mimir"`, version `0.9.4`; a replacement brand is **not yet selected** and no code rebrand is expected at this stage. The earlier Wood-Between-Worlds idea was a naming candidate, not a final decision. The [README](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/README.md) still describes the app as unpublished; the GitHub Releases collection returned no releases. Neither establishes that no installer has ever been distributed privately.

This stage inspected actual `main` source and schema/editor/campaign/map/AI/export code; versioned product specifications; the November user-interface pass; the Campaign and Writers' Room acceptance ledgers; the current CI workflow; and the latest run's **individual job outcomes**. **No local Electron installation was run, no external WBW production account was used, and no two-device end-to-end test was performed here.** Code presence means *implemented on main*; it does **not** automatically mean released to paying customers, operational at production scale, or verified on a real device. Features on unmerged `claude/*`/feature branches and designs do not count as present on `main`.

**Three independent release evidence levels:**

1. **Code implemented on `main`:** The Electron/React application and local Markdown/YAML files are real, and substantial editors/routes/handlers exist. November's [in-app idiot pass](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/audit/idiot-pass-2026-11.md) documents recent manual UI use. This establishes a meaningful development build, not a released product.
2. **Automated CI:** [CI run 42194675555](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/actions/runs/42194675555) on 6 November succeeded for this exact SHA; inspection of its jobs showed **quick = success** (install, typecheck, lint, third-party notices), but **checks = skipped** and **smoke = skipped**. The [workflow](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/.github/workflows/ci.yml) reserves full unit and short smoke checks for PRs/weekly/manual runs. **Do not describe the entire test suite or installers as green on this evidence alone**; the older 8 October coverage snapshot is historical.
3. **Hosted Integration versus production:** The [acceptance matrix](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/audit/acceptance-matrix.md) and [Campaign completion ledger](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/audit/campaign-completion-ledger.md) record **specific** hosted test successes, not blanket acceptance. Writers' Room membership and a past Campaign transport exercised Integration services. Current Campaign map tiles, realtime pings, playback and GM/client paths have **not all crossed the deployed current-build transport**; player companion end-to-end, deep links and multi-device acceptance remain outstanding. The [platform boundary](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/specs/product-platform.md) identifies production configuration/live payments and personal phone sync as absent in its 8 October status. Reverify those environments before calling hosted functionality launch-ready.

For the table below **Y** means a directly evidenced, usable code path on `main` *within its stated scope*, **P** means related code or a materially incomplete delivery path, and **N** means the specific feature is explicitly outside the implemented system's documented scope or absent from its enumerated user-facing functionality. **U** is insufficient evidence. A **G** suffix flags a known paid-plan entitlement and is independent of whether the service is fully operational. Thus `P/G` is neither a working paid customer feature nor the same as `N`. This is a different evidence standard from the competitor vendor-marketing matrices; the Stage 13 synthesis must normalise them.

### Fixed 57-capability WBW matrix (actual `main` branch)

| # | Exact comparison capability | WBW | Evidence-based boundary and qualification |
|---:|---|:---:|---|
| 1 | Native desktop application | **Y** | Real Electron application with desktop build/packaging scripts. Version 0.9.4 development tree; public release unconfirmed. E1 |
| 2 | Edit entire world offline | **Y** | Local non-AI world editing works without internet; accounts, credits, cloud participation and Anthropic-powered operations do not. E1 |
| 3 | Local user-controlled world files | **Y** | Markdown entry bodies, YAML frontmatter, assets and schema folders; no proprietary-only canonical storage. E1, E12 |
| 4 | Vendor-hosted cloud world storage | **P/G** | Writers' Room can host shared snapshots on Integration, with membership and reconcile logic. It is **not** the same as automatic personal multi-device backup, and no production launch was verified. E10, E17 |
| 5 | Multiple separate worlds/projects | **Y** | Create/select/manage worlds and world-specific files/filters; local world switching routes and handlers. E1, E17 |
| 6 | One-time purchase instead of subscription | **N** | The canonical app pricing is CORE Free plus monthly/annual APPRENTICE+, WORLDSMITH+ and LOREMASTER. One-off content packs/credits are *not* a perpetual software licence. E15 |
| 7 | Ongoing free account tier | **P** | Canonical CORE = Free and entitlement/account UI exist, but live customer sign-up, payments and production service operation were not accepted here. E15, E17 |
| 8 | Structured lore/entry type templates | **Y** | Bundled editable entry schemas cover characters, places, factions, events, classes, maps, quests and more, including game-system variants. E1, E2, E9 |
| 9 | Fully arbitrary schema/field definitions | **Y** | Schema Editor creates custom types and configurable fields; generic editor/read view renders them. Some bundled field-specific affordances remain special. E2 |
| 10 | Editable reusable entry prompts | **P** | Save/apply schema-and-enum presets; World Builder draws deterministic/pack questions and custom-type fields. A general end-user freeform prompt-template editor for every entry type was **not established**. E2, E3 |
| 11 | Guided question-based world creation | **Y** | Built optional World Builder, Build a World/Develop a Subject modes, conditional questions, saved answers and explicit review/apply. Its AI-adaptive stage is **not** built. E3 |
| 12 | Rich-text article editing | **Y** | Wiki-link-aware editing with Markdown-backed bodies and rich formatting; read view renders styled content. E4 |
| 13 | Images embedded within entries | **Y** | Universal image references, entry galleries/hero imagery and first-class Asset records. E1, E4 |
| 14 | PDF document viewing alongside notes | **P** | PDFs are accepted as assets with placeholders and a **system Open** affordance; the current Asset preview explicitly does **not** render a PDF inside the app beside an editing pane. E4 |
| 15 | Tables inside editor or wiki content | **Y** | Schema-defined stat-grid/data-table fields and a separate saved Data Table view are implemented. **Not** an arbitrary table that can be inserted freely inside any rich-text paragraph. E4, E9 |
| 16 | Split/multicolumn working panels | **Y** | Three-column read view (infobox/prose/links) and multi-pane specialist editors. This is **not** proof of configurable, independently docked document panes. E4 |
| 17 | Cross-article wiki links/mentions | **Y** | `[[entry]]` links resolve in read views and entry editors. E1, E5 |
| 18 | Backlinks/auto-discovered relationships | **Y** | Backlink computation and on-entry 'what links to me'; explicit relationship edges coexist with inferred links. E5 |
| 19 | Visual relationship graph | **Y** | Layered graph with typed edges, kinship and wiki-link layers, filters and click-through to entries. Matrix and deeper focus views are deferred. E5 |
| 20 | Categories/hierarchy/tags | **Y** | Tags, type folders, schema fields, world filters and hierarchical tree views. E1, E2, E5 |
| 21 | Search across lore | **Y** | Library/browser search, command palette and entry lookup, subject to locally loaded world scope. E1, E4 |
| 22 | Automatically generated family trees | **Y** | Family tree built from character kinship/parent data using ReactFlow; no AI generation required. E5 |
| 23 | Interactive diplomacy/organisation webs | **Y** | Faction/organisation trees plus typed political/organisational relationship graph (allied, at war, vassal, trade partner etc.). **No** separate turn-based diplomacy simulator. E5 |
| 24 | User-defined calendar systems | **Y** | Calendar definition/editor with custom months, weekdays, leap rules and calendar-aware event maths. E6 |
| 25 | Recurring calendar events | **Y** | Calendar-agnostic recurrence engine, event schema and picker. E6 |
| 26 | Event/history timelines | **Y** | Timeline view supports dated event records, filters, zoom and jumps. This is a chronology viewer rather than historical world-state simulation. E6 |
| 27 | Historical events shown geographically on maps | **P** | A map pin may link to an **Event** entry, but the map remains static; time-filtered event geography and animated historical state are not built. E7 |
| 28 | Import/upload map image | **Y** | Image-backed Map entry with imported backing image. E7 |
| 29 | Native procedural terrain generation | **N** | The shipped Map architecture is single-layer image-backed pin authoring, not a terrain generator. E7 |
| 30 | Native procedural city generation | **N** | No generator in the documented Map model or implemented map editor. E7 |
| 31 | Generated sci-fi star systems and routes | **N** | No native star-system/route generation in the map tool; lore entry data is not a galaxy generator. E7 |
| 32 | Interactive pins linked to lore | **Y** | Place/select pins, associate a record of any entry type, show hover entry preview and click through. E7 |
| 33 | Nested/interconnected interactive maps | **P** | One map can link to another Map entry as a normal entry link/pin, but dedicated map-to-map drill navigation is explicitly V1.1+ deferred. E7 |
| 34 | Toggleable image/map layers | **N** | Single backing image; multilayer overlays/layer toggles are deferred. E7 |
| 35 | Political borders/territory polygons | **N** | Editable region polygons are deferred, even though *political relationships between factions* exist in another tool. E7 |
| 36 | Draw roads/routes on map | **N** | No first-party road/route drawing in the V1 pin-and-image surface. E7 |
| 37 | Calculate distance and travel time | **N** | Scale/measurement tools are deferred; no travel-time engine is present in the map's V1 scope. E7 |
| 38 | Map labels synchronise automatically from wiki entries | **N** | Pin label is its own authored field; coordinate/field sync to Place entries is deferred. E7 |
| 39 | Campaign/plot management | **Y** | Local Campaign preparation (scenes, encounters, players, story visibility) and narrative planning exist. This does not assert production hosted sessions work. E8, E13 |
| 40 | Session preparation, session notes or reports | **Y** | GM Scene/Encounter preparation, tracking and session-related records qualify. Automated AI recap/analysis and hosted post-session workflow remain narrower or unverified. E8 |
| 41 | Integrated RPG character sheets | **P** | Character/Class fields, D&D-style stats and player-owned character projections exist; a fully tested, portable all-game-system player character-sheet experience is not established. E8, E9 |
| 42 | Creature/NPC statblocks | **Y** | Game-system schema templates, structured monster/character fields and stat-block presentational/editor widgets. No assertion of complete bestiary rules automation. E9 |
| 43 | Built-in support for multiple game systems | **Y** | Default, D&D 5e SRD and Wayfarer 2e/Pathfinder-derived schema-template infrastructure; game-system switching built. The restricted system's display naming/licence posture matters. E9 |
| 44 | Hide GM/private secrets | **Y** | Per-entry/field spoiler controls, safe-excerpt export and Campaign audience projection. Local spoiler protection is real; public Internet authorisation must be independently checked. E1, E8, E10, E12 |
| 45 | Publish or share player-readable world pages | **P** | Safe-to-publish **file export** and Campaign player-facing projection exist; general public hosted world/wiki pages and end-to-end current-build player publication were not verified. E8, E10, E12 |
| 46 | Granular reader/subscriber permissions | **P/G** | Hosted world role capabilities and player/GM audience rules are implemented, tested within defined Integration scopes. Not evidence of a public subscriber portal or production E2E enforcement. E8, E10, E17 |
| 47 | Invite coauthors or collaborative editors | **P/G** | Writers' Room invite/membership UI and Worker control plane exist and had hosted Integration proof. Product requires WORLDSMITH+ in the canonical commercial spec; two-device acceptance remains. E10, E15 |
| 48 | Integrated lore-writing AI | **P** | In-app grounding/retrieval assistant and author-draft broker exist, with account/credits/online service requirements. Live customer broker usability is not accepted here; deterministic World Builder should not be mislabelled AI. E11, E15 |
| 49 | Integrated AI image generation | **N** | No native image-generation surface found; image/cover-art workflows concern upload/import/asset approval. World Builder explicitly excludes graphic-asset generation. E3, E11 |
| 50 | In-product heraldry design/generation | **P** | Factions accept chosen heraldic colours and crest images; tree shows uploaded crest or a colour-derived fallback emblem. **Not** a full compositional coat-of-arms designer or AI heraldry generator. E13 |
| 51 | In-product character portrait generation | **N** | Character images may be attached, but no dedicated portrait generator was established; World Builder explicitly excludes portraits. E3, E11 |
| 52 | Portable whole-world backup/export | **Y** | Local canonical folders are directly portable; explicit export bundles copy structured Markdown/frontmatter and media with spoiler filters. Engine JSON export is a distinct, partly plan-gated product. E1, E12 |
| 53 | Editable Word export and reimport | **N** | DOCX can be treated as an asset/ingested source, but no lossless **Word document export → edit → merge/reimport** loop appears among the implemented export targets. E4, E12 |
| 54 | Compiled world/codex as PDF | **N** | The implemented Export route writes folder/JSON/engine targets, not a typeset multi-article PDF codex. Opening an individual PDF asset is unrelated. E4, E12 |
| 55 | Dedicated novel/manuscript tool | **P** | Story Arc/Narrative Planner provides graph/beat planning and entry prose, but no Scrivener-style full manuscript/binder/chapter drafting/compile workflow was established. E13 |
| 56 | Multiple localised UI languages | **N** | The **Translator** works with fictional in-world languages; it is not localisation of the application's controls and settings. No built UI locale selector was established. E1, E14 |
| 57 | UI font/readability/colour accessibility controls | **Y** | Alternative accessible fonts, line-height/spacing options and named/user themes with custom colours. E14 |

### Evidence index — direct source paths at the audited commit

These links resolve to the private repository for authorised collaborators; they are not public citations. Product specifications are used only where confirmed by implemented code or to establish an **explicit planned-versus-shipped boundary**.

- **E1 — Platform, files and core features:** [README](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/README.md), [package.json](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/package.json), [SCHEMAS.md](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/SCHEMAS.md).
- **E2 — Flexible schemas/presets:** [SchemaEditor.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/SchemaEditor.tsx), [GenericEntryEditor.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/editors/GenericEntryEditor.tsx), [schema presets build record](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/specs/schema-presets.md).
- **E3 — Guided creation and explicit image-gen limits:** [WorldBuilder.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/WorldBuilder.tsx), [feature specification §9.25](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/context/feature-specification.part6.md), [World Builder scope](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/specs/world-builder.md).
- **E4 — Reading, editing, media and tables:** [EntryView.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/EntryView.tsx), [EntryReadView.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/EntryReadView.tsx), [AssetMediaPreview.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/media/AssetMediaPreview.tsx), [DataTable.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/DataTable.tsx), [stat block field views](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/gameSystem/TemplateFieldViews.tsx).
- **E5 — Links, families and political relationships:** [BacklinksSection.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/BacklinksSection.tsx), [Relationships.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/Relationships.tsx), [FamilyTree.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/FamilyTree.tsx), [FactionTree.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/FactionTree.tsx), [relationship spec](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/context/feature-specification.part5.md).
- **E6 — Time:** [Calendar.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/Calendar.tsx), [recurrence.ts](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/calendar/recurrence.ts), [Timeline.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/Timeline.tsx).
- **E7 — Maps and deferred capabilities:** [MapCanvas.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/maps/MapCanvas.tsx), [mapIo.ts](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/lorebible/mapIo.ts), [Maps V1 and V1.1+ boundary](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/specs/maps.md).
- **E8 — GM campaign and actual hosted boundary:** [Campaign.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/Campaign.tsx), [CampaignEncounters.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/CampaignEncounters.tsx), [CampaignPlayers.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/CampaignPlayers.tsx), [acceptance matrix](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/audit/acceptance-matrix.md), [Campaign ledger](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/audit/campaign-completion-ledger.md).
- **E9 — Game-system templates, character/creature fields:** [system template spec/status](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/specs/game-system-templates.md), [SchemaTemplateFields.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/editors/shared/SchemaTemplateFields.tsx), [TemplateFieldViews.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/gameSystem/TemplateFieldViews.tsx).
- **E10 — Membership and audience authority:** [WritersRoom.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/WritersRoom.tsx), [acceptance matrix](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/audit/acceptance-matrix.md).
- **E11 — AI and owned-art boundaries:** [World Lore Assistant broker](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/electron/api/assistant/broker.ts), [author-draft broker](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/electron/api/authorBroker.ts), [World Builder no image-gen rule](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/specs/world-builder.md).
- **E12 — Actual export surfaces:** [Export.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/Export.tsx), [exportBundle.ts](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/lorebible/exportBundle.ts), [engineExport.ts](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/lorebible/engineExport.ts), [MigrationImport.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/MigrationImport.tsx).
- **E13 — Story planning and heraldry:** [NarrativeEditor.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/components/editors/NarrativeEditor.tsx), [Narratives.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/Narratives.tsx), [factionCrest.ts](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/lorebible/factionCrest.ts).
- **E14 — Accessibility and terminology:** [Settings.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/Settings.tsx), [Translator.tsx](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/src/routes/Translator.tsx).
- **E15 — Commercial/licensing plan:** [commercial-model.md](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/commercial-model.md); distinguish documented intended entitlements from any activated billing service.
- **E16 — Test gates and evidence:** [ci.yml](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/.github/workflows/ci.yml), [6 November job outcomes](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/actions/runs/42194675555), [coverage snapshot dated 8 October](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/audit/coverage-snapshot.md).
- **E17 — Hosting and sync boundary:** [product-platform.md](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/docs/specs/product-platform.md), [world management on `main`](https://github.com/AlexGoldsmithUnrealDev/Lorekeeper/blob/02b3607d149fe4740d7e2ea6f83fa08152a2f282/electron/handlers/worldManagement.ts).

### Stage 0 interpretation and work remaining

- **Already differentiated in code:** Offline ownership, true editable entry schemas, World Builder, typed political/family links, rich custom calendars and repeat events, faction/family/relationship graphs, an internally usable Campaign preparation surface, and actual structured stat blocks. Treat these as existing assets, not automatic competitor gaps.
- **Narrower than easy marketing labels suggest:** A PDF asset is an **OS-opened document**, not embedded split-pane PDF reading. Three-column entry reading is not arbitrary split-view documents. A saved schema preset is not necessarily a user-customised questionnaire. A Narrative Planner is not a manuscript compiler. Map pin-to-entry links are not political polygons, map layers, map-of-maps drill, travel distances or a historical slider. The built-in Translator is **for fictional languages**, not UI localisation. AI prose/lore infrastructure is not AI image creation.
- **Implemented but not accepted as a public service:** CORE/commercial subscriptions, hosted Writers' Room, player-facing Campaign sessions, live cloud account/billing and cross-device use. These are *release/operations verification gates*, not necessarily missing code. Where applicable, hosted evidence must be checked against the exact deployed build, rather than inferred from a past Integration run.
- **Known outstanding acceptance:** Full unit/smoke gate on the release candidate, real desktop installer tests, present-build hosted Campaign/Writers' Room tests with two physical devices and link/auth edge cases, production deployment and real payment setup. Stage 0 did **not** execute or clear these.
- **Stage 13 still required:** Normalise the 33 competitors' `Y/P/G/N/F/U` assertions against this narrower code-first WBW evidence, distinguish paid/third-party integrations from native features, and only then rank plausible roadmap items by buyer value, implementation cost, fit with local-first ownership, commercial gates and launch risk. Do not equate a single specialist cartography generator with the whole WBW product. A separate market-success/customer-sentiment phase remains outside this feature audit.

**Stage 0 status: repository-grounded baseline recorded. Runtime release acceptance: explicitly not certified. Stage 13 comprehensive comparative synthesis remains open.**

---

## Stage 13: Final feature comparison and prioritised roadmap for Mimir — 6 November 2026

**Status: source-backed comparison and decision recommendations complete.** This is an evidence-qualified feature audit, **not** independent hands-on acceptance of 33 competitors, a market-share study, a security audit, or a promise of a new Mimir release. The product remains **Mimir** as its working name; choosing a replacement name and brand identity is outside these recommendations.

### Executive judgement

**Mimir has a defensible product, not a blank feature checklist.** A private, genuinely local world made of author-controlled Markdown/YAML; arbitrary user-defined schemas; a deterministic question-led World Builder; typed political relationships, genealogy, calendars with recurring events, narrative planning and game-system-specific fields is an unusually coherent combination. Across this 33-product research roster, only **3** vendors have an unqualified documented **Y** for fully arbitrary field/schema definitions, **2** for automatic family trees (plus one paid-gated), and **3** for guided question-based world creation. Those counts are **documented positive claims**, not proof that all other competitors lack them; the other cells include `P` and `U`. Mimir has all three capabilities in `main`.

The clearest *product-market gap* is not a missing AI map generator. It is the **last mile of a useful workflow**: make and connect lore → show someone the right part safely → use that lore in a game session or written scene → publish/export a dependable result. Mimir has pieces of this, but full publication, current-build hosted acceptance, embedded reference documents and author-friendly book output are weaker or unproven.

**Recommended course:** complete the advertised V1 and security-critical acceptance first; then deepen **linked maps, reusable question/prompt sets, reference-document handling and creator-friendly export** before undertaking a full procedural planet generator, VTT, or general-purpose image studio. Protect the local-first/flexible-schema foundation rather than replacing it with one specialist vendor's architecture.

### How the comparison was normalised

The 12 source batches contain **33 competitor columns × 57 identical features = 1,881 competitor assessments**. They were matched to the **same 57 Mimir rows** from Stage 0; row order, names and column breadth all reconciled with no mismatch. The full original per-vendor evidence and links remain in Batches 1–12, with separate product-specific extensions and uncertainty notes.

For the aggregate below, **documented supported** is `Y`, `G` or `Y/G`; **qualified/partial** is `P` or `P/G`; **unresolved** is `U`; **not present** is `N`; **future** counts `F` and `N/F`. A paid feature counts as *supported* but **not free**. The aggregates are a **coverage map of available documentation**, not observed active users, test pass rates, market share, customer willingness to pay, feature quality, or a measured adoption ranking. Undocumented `U` never becomes `N` by implication. One app may be rated strong in only one of several buyer jobs.

**Mimir's recorded code baseline:** **30 Y**, **10 P**, **3 P/G**, **14 N**. The numbers refer to code coverage on `main`, not production-released capability. A `Y` in Mimir's code cannot be compared uncritically to a competitor's vendor-described `Y`; Stage 0 specifically separates implemented local UI from hosted Integration tests and actual production.

### Rival products by the job the customer is hiring them for

| Buyer job / segment | Especially relevant competitors | What the reference product is genuinely strong at | How to use it for Mimir |
|---|---|---|---|
| **General lore + GM campaign** | ScribesBlade, World Anvil, Campfire, LegendKeeper, Kanka | Rich articles, session context, linked maps, reader experiences, configurable templates | **Primary direct-product comparisons**, not a substitute for feature acceptance or pricing tests |
| **Generated world with attached lore** | Realmly, DMRealm, Azgaar (specialist) | Map-first geography, generated settlements/realms, linked or generated features; highly variable maturity | Consider **interchange/import** and narrow map upgrades before duplicating a full generator |
| **Flexible structured world knowledge** | Realm Works, OnlyWorlds, Skryrún, Lore Forge, Fantasia Archive, Chronicler, ChronoGrapher, Alkemion Studio | Schema structures, knowledge linking, relationships, calendars, visual planning, offline/local or user-cloud options | Use as **workflow and persistence** references; alpha/legacy status must be preserved |
| **Author-first world/novel workflow** | Deckle, Scrivener, Quarry, NovelCanon, Notebook.ai, Plottr | Long-form drafting, chapters/scenes, selective compilation, Word/Markdown roundtrips, entity mentions | Distinguish **manuscript creation** from Mimir's existing Narrative Planner |
| **AI-heavy creation** | Sudowrite, NovelAI, MythScribe, Storyflow | AI prose, context checking, image/portrait generation or campaign prompts, often paid-credit gates | Improve Mimir's **grounding, review and consent**; do not equate text generation with integrated cartography |
| **General knowledge / visual systems** | Obsidian, Notion, Arcweave, Obsidian Portal, WorldStitch | Mature notes/plug-ins or workspaces; executable branching flows (Arcweave); hosted campaign wiki (Portal) | Observe onboarding, portability, view modes, integration surface, **not** blanket feature parity |
| **Illustrated map production** | Inkarnate, Wonderdraft, Azgaar | Artistic layer/asset painting or deep procedural GIS-like world simulation | **Companion/integration or import/export** opportunity; a different core product |

**Direct comparison warning:** DMRealm is a private beta; Skryrún's published descriptions mix broadly accessible and tester-only functions; Storyflow's early-access product should not inherit features promised for its future 1.0; ChronoGrapher and Chronicler have gated alpha/test features; Realm Works' historical feature depth does not establish current support lifecycle. Treat these as concrete product/design benchmarks, but **do not** treat their long feature lists as independent proof of stable public availability.

### All 33 competitor evidence profiles at a glance

This table shows **breadth of affirmative documentation against the same 57 questions**, not a quality or popularity ranking. A product with fewer confirmed features can simply have more unverified source gaps. `No/future` combines explicit N and not-yet-available F; the original batch tables keep them separate. Position labels describe **the principal buyer job**, not every product module.

| Competitor | Primary job or maturity qualifier | Documented Y/G | Partial | U | No/future |
|---|---|---:|---:|---:|---:|
| Alkemion Studio | Visual boards / web beta | 18 | 8 | 20 | 11 |
| Arcweave | Interactive narrative graphs | 16 | 16 | 20 | 5 |
| Azgaar | Procedural map simulator | 19 | 18 | 5 | 15 |
| Campfire | Modular lore + writing | 30 | 13 | 13 | 1 |
| Chronicler | Local Markdown / alpha | 16 | 19 | 18 | 4 |
| ChronoGrapher | Temporal wiki / alpha | 18 | 14 | 19 | 6 |
| Deckle | Local book + codex suite | 20 | 5 | 8 | 24 |
| DMRealm | Map-first GM / private beta | 29 | 13 | 11 | 4 |
| Fantasia Archive v1 | Free local lore organiser | 15 | 11 | 22 | 9 |
| Inkarnate | Illustrated map creation | 8 | 16 | 24 | 9 |
| Kanka | Hosted campaign knowledge | 28 | 10 | 14 | 5 |
| LegendKeeper | Collaborative wiki/maps | 24 | 12 | 16 | 5 |
| Lore Forge | Local lore / Pro cloud | 19 | 9 | 29 | 0 |
| MythScribe | AI campaign generator | 9 | 8 | 34 | 6 |
| Notebook.ai | Structured writer notebooks | 16 | 11 | 26 | 4 |
| Notion | Cloud workspaces | 27 | 13 | 14 | 3 |
| NovelAI | AI stories + Lorebook | 14 | 14 | 23 | 6 |
| NovelCanon | AI writer continuity | 12 | 8 | 34 | 3 |
| Obsidian | Native knowledge vault | 22 | 16 | 17 | 2 |
| Obsidian Portal | Hosted campaign wiki | 16 | 11 | 26 | 4 |
| OnlyWorlds | Open schema / Atlas | 28 | 11 | 16 | 2 |
| Plottr | Story plotting desktop | 17 | 12 | 20 | 8 |
| Quarry | Writing + world bible PWA | 17 | 14 | 19 | 7 |
| Realm Works | Legacy Windows GM database | 23 | 8 | 25 | 1 |
| Realmly | Generated lore/atlas (hosted) | 26 | 2 | 24 | 5 |
| ScribesBlade | Desktop GM worldbuilding | 37 | 2 | 14 | 4 |
| Scrivener | Novel manuscript desktop | 20 | 9 | 19 | 9 |
| Skryrún | GM worldbuilding / beta | 27 | 12 | 11 | 7 |
| Storyflow | Visual story planning / early access | 15 | 17 | 16 | 9 |
| Sudowrite | AI-first novel authoring | 14 | 20 | 19 | 4 |
| Wonderdraft | Local map illustrator | 8 | 8 | 8 | 33 |
| World Anvil | Hosted world/wiki + RPG | 34 | 6 | 8 | 9 |
| WorldStitch | Early-access worldbuilding | 6 | 3 | 48 | 0 |

### High-signal direct comparisons (not commercial success rankings)

| Product | What it can do that Mimir has not yet matched in the audited scope | Where Mimir already competes or leads technically | Decisive caveat |
|---|---|---|---|
| **ScribesBlade (Destrola)** | Dedicated desktop GM workflow including map layers/paths, reference/PDF panels, editable Word exchange and session-specific conveniences | Local desktop ownership, broader arbitrary schema editing, deterministic World Builder and systematic relationship/calendars | Its player-facing publication/reveal mechanism was recorded as **future**, not current; don't score it as shipping collaboration |
| **World Anvil** | Integrated published online wiki, permissions and broader writer/manuscript-facing surfaces | Works offline with local editable files, arbitrary entry types and app-native graph/calendar workflows | World Anvil's **offline mode is explicitly absent**; template and export gates vary by Guild level, and it is **not** a first-party map generator |
| **Campfire** | Manuscript/story authoring modules, richer public/private sharing and map annotation | Free-tier local non-AI editing, deeper schema freedom and local file portability | One-off Campfire ownership is **module/licence scoped**, not necessarily a permanent all-in bundle at a single price |
| **LegendKeeper** | Shipped regions, stylable paths, map-layer groups, snapping and path-based navigation with estimated travel duration | Built-in family/faction relationships, calendrical recurrence, custom schema fields and fully local author files | LegendKeeper's offline caching, custom-template semantics and public sharing limits are not equivalent to local canonical folders |
| **Kanka** | Mature online campaign entity sharing, custom relations and audience features | Native offline experience, source-owned files, custom schema, genealogy and world guided prompts | Some advanced features and collaboration permissions are tier-gated |
| **Realmly** | Native terrain/world/city/star-system geography, wiki-synchronised labels, generated heraldry/portraits and printable codex | Mimir's desktop/local-first architecture, custom schemas, explicit relationships and custom calendars | Map-first hosted product and vendor claims; several schema/offline/collaboration details remain `U` |
| **DMRealm** | Claimed layered geography, generated locations, tactical map exploration and player knowledge views | Existing reliable author data model and local world workflow | **Private beta**, not unqualified public-launch parity; user testing still needed |
| **OnlyWorlds** | Character-knowledge projections, portable JSON/SDK model, richer history-aware maps and in-world map overlays | Mimir already has canonical local Markdown, entry/schema authoring and owner-controlled files | Browser/Atlas/offline scope and full attachment portability have explicit limits |
| **Deckle / Scrivener / Quarry** | Mature chapters, word processing, source-to-codex linking and compiled manuscripts/Word/PDF | Mimir can be the structured lore reference *feeding* those tools, with stronger world-schema focus | They are substantially **authoring/publishing tools**, not complete analogues of a GM campaign/wiki |
| **Azgaar / Inkarnate / Wonderdraft** | Procedural geography (Azgaar), manual professional map artwork and layer tools (Inkarnate, Wonderdraft), route planning (Azgaar) | Mimir's maps attach to canonical lore entities and join broader world data | A specialist map file is **not** a whole world's knowledge model; Inkarnate's 2026 desktop application still requires Internet |

**Commercial model qualification:** Among this 33-product set, **7** are positively classified `Y` on the exact criterion **one-time application purchase instead of subscription**; free software, separately purchased modules, legacy licences, future lifetime promises and feature-pack purchases are not equivalent. Mimir's currently approved business model is **Free CORE + three recurring paid plans**, with one-off AI credits/content packs. Do **not** reverse that pricing decision solely because seven competitors sell a perpetual licence. It is, however, an explicit positioning issue for offline-first buyers: Mimir must make clear that subscription cancellation never confiscates locally owned worlds, and that paid services, not one's files, are what stop.

### Confirmed advantages: do not re-add these to the roadmap as missing features

1. **Canonical editable local files and non-AI offline use.** Test safe upgrade/restore quality, not whether the architecture exists.
2. **Fully editable entry schemas and reusable schema presets.** The gap is better *prompts/questions*, not a missing schema engine.
3. **Guided creation.** Deterministic World Builder's 355-question library and review-before-commit flow are real; only the separately described AI-adaptive extension is future.
4. **Family trees, typed political/organisational relationships, wiki links, backlinks and graph views.** The differentiator to improve is clarity and usability, not a second parallel relationship database.
5. **User-defined calendars, repeat events and timeline.** Geographic/historical playback is new work; dates and recurring events themselves are **already implemented**.
6. **Image-backed maps with interactive linked pins.** The missing pieces are *layers, shapes, scale, navigation and label inheritance*, not basic image upload and pin placement.
7. **Game-system templates and stat blocks.** Work is needed on completeness, audience usage, rules/licence testing and user experience, not a brand-new template architecture.
8. **Spoiler-filtered local exports.** Web hosting and real reader authorisation are separate security/product capabilities.
9. **AI lore broker/retrieval code and author drafting.** Verify real service delivery, accuracy, privacy and credits. “Integrate AI” is not a useful feature request by itself.
10. **A portable world folder and export bundle.** A *guided, whole-world, verified restore* would add quality, but is an enhancement to existing ownership, not a missing backup foundation.

### Prioritised feature and release roadmap

**Priority definitions:** `P0` = release/acceptance gate for already promised functions; `P1` = first focused post-launch upgrades; `P2` = validate and build if the user signal warrants it; `P3` = specialist/strategic future option. **Effort** is relative `S` (small), `M` (medium), `L` (large), `XL` (major subsystem) based on inspected architecture, **not** a developer-day estimate or approved schedule. Each tier is a recommendation, not authorisation to modify the repository.

| Rank | Candidate | Current Mimir position | User value / strongest comparative evidence | Effort, dependency and decision |
|---:|---|---|---|---|
| **1 · P0** | **Finish and prove hosted Campaign + Writers' Room user journeys** | Code exists; Integration proof is scoped; current-build and two-device flows incomplete | Real player/collaborator capability is necessary if sold; World Anvil, Campfire, LegendKeeper and Kanka offer documented hosted sharing | **L, release critical.** Gate on exact deployed build, two accounts/devices, invite/revoke, reconnection, expiry, player-view leak tests. Do not market unproven production access |
| **2 · P0** | **Prove installer, complete automated gates, backup/restore and spoiler-safe export** | Local features built; latest CI quick green, full checks skipped | Protects Mimir's most important trust promise: ownership and reliability | **M, release critical.** Test real installer and cross-platform persistence; reconstruct a world from an archive; check links/assets/spoilers; no new flashy feature required |
| **3 · P1** | **Map-to-map drill and linked-entry label inheritance** | Map-to-map and label/coordinate sync deferred; pins already work | ScribesBlade, Realmly, LegendKeeper, World Anvil; immediate navigation improvement for GMs | **S–M.** Reuse Map entry links; preserve stable IDs and explicit user label overrides; test rename/cycle/missing map behaviours |
| **4 · P1** | **In-app PDF/reference pane beside lore or session preparation** | PDF assets open through OS, not inline | ScribesBlade, Deckle, Obsidian, Scrivener show the real reference-workflow value | **M.** Local PDF viewer + resizable side pane; sandbox file access and no accidental cloud upload. Start with PDF, not generic Office rendering |
| **5 · P1** | **Editable reusable World Builder question/prompt kits** | Schemas/presets and 355 questions exist; no general author-facing question kit proved | Documented positives across ScribesBlade, Campfire, Notebook.ai, Fantasia Archive and others | **M.** Compose on existing schemas and deterministic question engine; export as a simple portable template. Avoid a second schema language |
| **6 · P1** | **One-click complete archive and tested restore preview** | Canonical folders and filtered export already exist | Especially valuable for local-first confidence, migration and paid-tier trust | **M.** Manifest, relative paths, media, customised schemas/enums, calendars and links; validate duplicate IDs and show reversible import plan |
| **7 · P1/P2** | **Player-safe handout/site export first, general hosted public codex later** | Safe file export built; hosted player experience P, public world wiki unproved | 14 of 33 competitors have a documented positive player-readable publication capability; a strong GM handoff | **M for static export, L–XL for hosted roles.** Build sanitised HTML/pack before new public account infrastructure. Test actual bytes for hidden content and image metadata |
| **8 · P2** | **Map layers, regions and routes in a staged sequence** | Single image with pins; layers, polygons, roads absent | 9 documented positives for toggleable layers, 8 for polygons, 10 for roads; LegendKeeper is a strong coherent reference | **L.** Layers → linked region polygons → stylable roads → optional distance. Stable data model, undo, import/export and spoiler visibility before features proliferate |
| **9 · P2** | **Compile a beautiful, spoiler-safe world codex PDF** | No first-party whole-world PDF compiler | Realmly, Deckle and Alkemion positively documented; potentially powerful for DMs and writers | **M–L.** Templates, table of contents, working citations, maps, image rights, pagination. One-way PDF output **before** editable Word roundtrip |
| **10 · P2** | **Link manuscripts/scenes to lore automatically** | Narrative/Story Arc graphs built; no full book editor | Deckle, NovelCanon, Quarry, Scrivener and OnlyWorlds expose story↔entity linking patterns | **M for mention index, XL for full manuscript suite.** Begin with alias-aware occurrence scanner and explicit author approval; do not rebuild Scrivener without user evidence |
| **11 · P2** | **Calendar-filtered map events/history view** | An event can be pinned, but maps are static | OnlyWorlds, World Anvil and Realmly provide partial/direct models; scarce confirmed positives in the 57 matrix | **L–XL.** Only after map link IDs, dates and layer semantics are stable; include approximate/uncertain dates and avoid pretending to simulate all history |
| **12 · P2** | **Distances and travel routes over linked map paths** | No scale/travel algorithm | LegendKeeper, ScribesBlade, DMRealm and Azgaar documented positive | **L.** Need map scale, coordinate semantics and path graph before calculated time; do not hardcode lore-inconsistent speeds |
| **13 · P2/P3** | **UI localisation** | Fictional-language Translator is **not** UI localisation | 9 competitors positively document localised UI | **M–L.** Extract real UI strings, test overflow/fonts, start only with languages justified by audience evidence; fictional translation remains separate |
| **14 · P3** | **Editable Word export and roundtrip** | DOCX is an imported/openable asset, not a canonical reimport loop | ScribesBlade, Deckle, Scrivener, Quarry and NovelCanon have positive/paid signs | **XL/high integrity risk.** Define which metadata survives; imported Word edits must never silently delete IDs, relationships or custom fields |
| **15 · P3** | **AI portraits/heraldry/illustrations inside Mimir** | Image attach/faction crest fallback exists; no native generation studio | Realmly, NovelAI, Sudowrite and hosted AI tools; credits and image rights vary | **L + recurring inference cost.** Initially make it easy to attach externally made art and retain provenance; only add generation if real demand and unit economics justify |
| **16 · P3** | **Procedural terrain, settlement and star-system generators** | Outside shipped image-backed map architecture | Realmly, DMRealm, Azgaar; specialist depth far beyond a pin editor | **XL.** Prefer import/link integration or a separate optional map module first; avoid displacing the launch of a general worldbuilding product |

The top two are **release gates, not optional speculative features**. If Campaign/Writers' Room are intentionally held for a later paid-plan phase, they should be **removed or labelled unavailable in launch promises** rather than delaying a local-only Mimir release indefinitely. Do not confuse the promise of a feature on a pricing page with a reason to ship unsafe partial functionality.

### Two short roadmaps, depending on what Alex actually releases

**Route A: local-first V1 release this month.** Lock the supported offline core; prove installers, local data safety, documentation and safe export; make unaccepted cloud flows visibly unavailable or clearly labelled experimental. Release, learn from real users, then execute P1 map navigation/reference/prompt work. This protects the November 2026 goal without marketing production features that the acceptance ledger has not certified.

**Route B: V1 advertises the hosted paid experience immediately.** Treat exact-build Campaign and Writers' Room live transport, two-device tests, billing/entitlement gates and access-control red-teaming as *blocking*. Make no date commitment until those acceptance conditions are demonstrably met. Do not use the green CI quick job as a substitute.

Neither route requires an immediate rebrand or a change to the approved subscription ladder.

### What not to copy, even when another product does it well

- **Do not rebuild Azgaar, Inkarnate or Wonderdraft inside Mimir by default.** Each is a cartography product with a different centre of gravity. Support user-imported images and, later, sensible interoperable map data before building climate simulation and full city ecosystems.
- **Do not convert Mimir into a second full virtual tabletop or tactical RPG.** Campaign preparation and spoiler-aware player views are adjacent to the core world; combat engine, dice physics, turn-based encounters and 3D tactical maps are a separate product architecture. They may belong to Shieldwall's later encounter game, not this release.
- **Do not promise generated art just because AI prose is supported.** External APIs have cost, licensing, moderation and privacy implications; stylistic consistency is difficult (especially for the user's detailed graphic-novel art direction).
- **Do not mistake a page hidden by CSS or a view-only file for reader secrecy.** True spoiler security is enforced before the payload leaves the author's trust boundary and retested after all export/hosted transformations.
- **Do not confuse template fields with manuscript prose or a recurring-event engine with temporal world simulation.** Preserve those distinctions in UI, pricing, help copy and competitive claims.
- **Do not make marketing assertions of 'best', 'most popular', 'fastest growing', customer counts, revenue or support quality** from these feature tables. The separate market-success and sentiment study has not been performed.

### Practical validation experiments before committing major roadmap spend

| Test | Smallest useful exercise | Decision it informs |
|---|---|---|
| **GM handoff** | Give a GM a secret-bearing test world and have an independent player inspect a filtered export, including images, hidden body blocks, backlinks and map pins | Whether static safe publication is sufficient before hosted wiki work |
| **Map use** | Ask five DMs to navigate from world atlas → region → town → tavern with existing pins, then test a map-to-map prototype | Whether hierarchy and labels outperform a premature terrain generator |
| **Writers' workflow** | Ask five fiction writers to find every manuscript occurrence of a renamed character and reconcile names/aliases in a prototype | Whether lore↔scene mention indexing is worth building before full manuscript tooling |
| **Reference access** | Give a DM a 100-page rules PDF and ask them to edit a spell or creature without losing the current entry | Whether in-app PDF panel materially reduces friction |
| **Recoverability** | Archive a world with custom schema, images, calendars, relationship edges and non-default settings; restore to a clean installation and byte/semantic-check links | Whether the local-first promise is demonstrably safe |
| **Commercial trust** | Show the real free versus paid entitlements and the after-cancellation state to potential buyers; ask what they believe is kept/locked | Whether pricing copy accurately communicates file ownership |

These can start as **non-destructive prototypes or usability tests**; the project owner should approve access to actual accounts/paid competitor trials. Do not use private worlds as disposable test data.

### Consolidated 57-feature evidence index (33 competitors)

The competitor figures below count **documented vendor claims by evidence status**, not real-world adoption. `Yes` is Y/G/Y-G (including paid-only); `Partial` is P/P-G; `U` is not known; `N` is documented absence; `Future` is F/N-F. Every row adds to **33**. See the original 12 batch matrices for **which competitor** holds a given status, the precise tier and supporting source; see the Stage 0 matrix for why a particular Mimir status is qualified. **A large `U` column means do not draw a prevalence conclusion.**

| # | Area | Capability | Mimir | Yes | Partial | U | N | Future |
|---:|---|---|:---:|---:|---:|---:|---:|---:|
| 1 | Platform | Native desktop application | **Y** | 14 | 0 | 1 | 16 | 2 |
| 2 | Platform | Edit entire world offline | **Y** | 11 | 7 | 3 | 11 | 1 |
| 3 | Platform | Local user-controlled world files | **Y** | 12 | 3 | 1 | 16 | 1 |
| 4 | Platform | Vendor-hosted cloud world storage | **P/G** | 24 | 0 | 1 | 8 | 0 |
| 5 | Platform | Multiple separate worlds/projects | **Y** | 33 | 0 | 0 | 0 | 0 |
| 6 | Platform | One-time purchase instead of subscription | **N** | 7 | 2 | 2 | 20 | 2 |
| 7 | Platform | Ongoing free account tier | **P** | 18 | 2 | 1 | 10 | 2 |
| 8 | Structure | Structured lore/entry type templates | **Y** | 21 | 10 | 0 | 2 | 0 |
| 9 | Structure | Fully arbitrary schema/field definitions | **Y** | 3 | 20 | 8 | 2 | 0 |
| 10 | Structure | Editable reusable entry prompts | **P** | 17 | 6 | 7 | 3 | 0 |
| 11 | Onboarding | Guided question-based world creation | **Y** | 3 | 13 | 16 | 1 | 0 |
| 12 | Editing | Rich-text article editing | **Y** | 27 | 5 | 0 | 1 | 0 |
| 13 | Editing | Images embedded within entries | **Y** | 26 | 1 | 5 | 1 | 0 |
| 14 | Editing | PDF document viewing alongside notes | **P** | 6 | 4 | 23 | 0 | 0 |
| 15 | Editing | Tables inside editor or wiki content | **Y** | 13 | 3 | 17 | 0 | 0 |
| 16 | Editing | Split/multicolumn working panels | **Y** | 16 | 11 | 6 | 0 | 0 |
| 17 | Linking | Cross-article wiki links/mentions | **Y** | 22 | 10 | 0 | 1 | 0 |
| 18 | Linking | Backlinks/auto-discovered relationships | **Y** | 16 | 7 | 9 | 1 | 0 |
| 19 | Linking | Visual relationship graph | **Y** | 12 | 10 | 10 | 1 | 0 |
| 20 | Organisation | Categories/hierarchy/tags | **Y** | 30 | 3 | 0 | 0 | 0 |
| 21 | Organisation | Search across lore | **Y** | 25 | 5 | 2 | 1 | 0 |
| 22 | Characters | Automatically generated family trees | **Y** | 3 | 2 | 24 | 2 | 2 |
| 23 | Factions | Interactive diplomacy/organisation webs | **Y** | 2 | 16 | 13 | 1 | 1 |
| 24 | Time | User-defined calendar systems | **Y** | 9 | 2 | 18 | 3 | 1 |
| 25 | Time | Recurring calendar events | **Y** | 6 | 1 | 23 | 3 | 0 |
| 26 | Time | Event/history timelines | **Y** | 16 | 11 | 3 | 2 | 1 |
| 27 | Time | Historical events shown geographically on maps | **P** | 3 | 1 | 26 | 3 | 0 |
| 28 | Maps | Import/upload map image | **Y** | 18 | 10 | 5 | 0 | 0 |
| 29 | Maps | Native procedural terrain generation | **N** | 3 | 3 | 19 | 7 | 1 |
| 30 | Maps | Native procedural city generation | **N** | 2 | 1 | 24 | 6 | 0 |
| 31 | Maps | Generated sci-fi star systems and routes | **N** | 1 | 0 | 30 | 2 | 0 |
| 32 | Maps | Interactive pins linked to lore | **Y** | 15 | 3 | 12 | 2 | 1 |
| 33 | Maps | Nested/interconnected interactive maps | **P** | 7 | 3 | 18 | 4 | 1 |
| 34 | Maps | Toggleable image/map layers | **N** | 9 | 5 | 17 | 1 | 1 |
| 35 | Maps | Political borders/territory polygons | **N** | 8 | 7 | 17 | 1 | 0 |
| 36 | Maps | Draw roads/routes on map | **N** | 10 | 1 | 21 | 1 | 0 |
| 37 | Maps | Calculate distance and travel time | **N** | 4 | 2 | 25 | 2 | 0 |
| 38 | Maps | Map labels synchronise automatically from wiki entries | **N** | 1 | 4 | 25 | 3 | 0 |
| 39 | RPG | Campaign/plot management | **Y** | 12 | 19 | 1 | 1 | 0 |
| 40 | RPG | Session preparation, session notes or reports | **Y** | 10 | 19 | 3 | 1 | 0 |
| 41 | RPG | Integrated RPG character sheets | **P** | 6 | 14 | 10 | 3 | 0 |
| 42 | RPG | Creature/NPC statblocks | **Y** | 6 | 16 | 8 | 3 | 0 |
| 43 | RPG | Built-in support for multiple game systems | **Y** | 4 | 6 | 20 | 3 | 0 |
| 44 | Visibility | Hide GM/private secrets | **Y** | 11 | 16 | 6 | 0 | 0 |
| 45 | Visibility | Publish or share player-readable world pages | **P** | 17 | 7 | 4 | 4 | 1 |
| 46 | Visibility | Granular reader/subscriber permissions | **P/G** | 10 | 8 | 6 | 7 | 2 |
| 47 | Collaboration | Invite coauthors or collaborative editors | **P/G** | 15 | 2 | 10 | 5 | 1 |
| 48 | AI | Integrated lore-writing AI | **P** | 9 | 5 | 10 | 9 | 0 |
| 49 | AI | Integrated AI image generation | **N** | 5 | 2 | 16 | 10 | 0 |
| 50 | Generation | In-product heraldry design/generation | **P** | 2 | 7 | 21 | 3 | 0 |
| 51 | Generation | In-product character portrait generation | **N** | 3 | 5 | 20 | 5 | 0 |
| 52 | Export | Portable whole-world backup/export | **Y** | 21 | 11 | 1 | 0 | 0 |
| 53 | Export | Editable Word export and reimport | **N** | 5 | 9 | 15 | 3 | 1 |
| 54 | Export | Compiled world/codex as PDF | **N** | 3 | 15 | 14 | 1 | 0 |
| 55 | Writing | Dedicated novel/manuscript tool | **P** | 11 | 2 | 14 | 6 | 0 |
| 56 | Accessibility | Multiple localised UI languages | **N** | 9 | 0 | 24 | 0 | 0 |
| 57 | Accessibility | UI font/readability/colour accessibility controls | **Y** | 16 | 12 | 5 | 0 | 0 |

### Confidence and unresolved matters after reconciliation

**Resolved from primary sources and the actual code:** 57 exact row names across 12 source matrices; 33 vendor identities; the intended basic licence models; Mimir's implemented versus missing map capabilities; its working World Builder, calendar, graph and schema systems; the distinction between a native desktop application and offline execution; the difference between a PDF asset and a typeset codex; and the exact November 6 CI job scope.

**Not conclusively resolved without privileged or hands-on testing:** the actual customer usability and completeness of every vendor's paid gates; detailed schema depth on Realmly; ScribesBlade's current player delivery behaviour; on-device full offline tests on LegendKeeper/Quarry/OnlyWorlds/Inkarnate; Storyflow beta entitlement boundaries; beta-only DMRealm/Skryrún/Chronicler/ChronoGrapher scope; Deckle's conflicting template-propagation/date behaviour; full map-backup restoration across different tools; and Mimir's present-build hosted Campaign/Writers' Room on two real machines. Keep existing `U` values; do not replace them with invented certainties.

**Overall recommendation:** Market Mimir around **"your world, your files, interconnected and editable"**, with guidance, schema control and lore consistency as the centre. Make player sharing, document reference and useful export the first serious extensions of that promise. Use the next user-research round to choose between deeper **GM map/navigation** and deeper **writer manuscript linkage**, rather than trying to complete every rival product's specialty at once.

---

## Process record

| Date | Change |
|---|---|
| 2026-11-06 | Created master, fixed 33-product roster and 12-batch schedule, completed Batch 1 vendor-document research. No WBW feature gap or commercial-success claim yet. |
| 2026-11-06 | Added Batch 2: Campfire, LegendKeeper, Kanka. Cross-checked current vendor docs and versioned 2026 announcements against stale pages; explicitly separated premium gates, browser vs native offline, and current vs planned releases. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 3: Notebook.ai, Fantasia Archive v1, Lore Forge. Verified Notebook.ai current paid/free tiers, differentiated the Fantasia Archive 2025 public v1 from unfinished 2026 v2, and checked Lore Forge v1.2.4 free desktop vs Pro hosted/collaborative-template claims. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 4: ChronoGrapher, Realm Works and Obsidian Portal. Checked ChronoGrapher's closed-alpha Google Drive model, time-dependent wiki/maps and subscriber-gated collaboration; Realm Works' one-time Windows licence, offline/server limits, powerful schema, export and 2019 development suspension; and Obsidian Portal's Basic versus Ascendant wiki, maps, role restrictions, DST, session calendar and limited backup. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 5: Alkemion Studio, Chronicler and WorldStitch. Distinguished Alkemion's free web beta from its future perpetual-licence offline desktop; Chronicler's current free Markdown vaults and late-2026 alpha canvas/timeline from access-restricted map testing and future paid Pro v1; and WorldStitch's sparse early-access feature claims from unverified functionality. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 6: Skryrún, OnlyWorlds and MythScribe. Separated Skryrún public tier claims from beta/tester-only or in-development GM/AI features; established OnlyWorlds' offline JSON/Atlas/Lantern/open-agent ecosystem with limits to portable attachments; and distinguished MythScribe's paid AI-first campaign, rules and tactical-map generators from an all-purpose atlas. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 7: DMRealm, Storyflow (storyflow.so) and Quarry. Qualified DMRealm's private beta and planned free core, separated Storyflow's paid early-access visual planning from unrelated namesakes and a dedicated manuscript app, and recorded Quarry's entry-limited free plan, subscription-only Local Vault, native-PWA distinction, manual maps and opt-in external AI. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 8: NovelCanon and Deckle. Separated NovelCanon's hosted/offline-PWA subscription, real free three-chapter allowance, bring-your-own-paid-analysis-key continuity checks and approval-gated AI from Deckle's native one-time offline/no-AI publishing suite, custom Codex, manual/automatic scene mentions, PDF story-bible and new 1.7.9 Markdown+asset backup roundtrip. Recorded unresolved Deckle template-propagation and numeric-timeline-versus-real-date documentation conflicts. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 9: Obsidian, Notion and Scrivener. Recorded Obsidian's native local Markdown/Bases/Canvas/link graph vs separately maintained plugins and optional per-user Sync/Publish; Notion's real offline partial-cache limits, first-party geographic Map view, paid AI/image tools and non-roundtripping relational CSV exports; and Scrivener's native offline Binder/Corkboard/custom metadata, backup, document compilation, separate iOS licensing and explicit no-AI stance. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 10: Plottr, Arcweave and Sudowrite. Separated Plottr's lasting fully offline Classic from cloud Pro and its contradictory beta-offline/mobile marketing, recorded Arcweave's executable branch/variable graph, free-credit AI, JSON+assets export and 2026 Team API/MCP integrations, and verified Sudowrite's real canonical portrait reference feature, cross-book Story Bible context, Clean Copy reader comments, non-AI post-cancellation editing and non-inclusive Story Bible ZIP export. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 11: NovelAI, Inkarnate and Wonderdraft. Distinguished NovelAI's full exportable AI Lorebook, browser-only local storage, client-encrypted hosted files, model-conditional activation and real image Character Reference from a structured offline lore tool; corrected Inkarnate's outdated browser-only description using its 2026 paid Windows app release while keeping its explicit online requirement, and audited 2.0 custom layers, scene stamps, actual world-landmass generator and snapshot limits; documented Wonderdraft's one-time DRM-free local map projects, generated coastline/manual map workflow and limitations of graphic labels versus linked lore. No WBW or success audit yet. |
| 2026-11-06 | Added Batch 12: Azgaar's Fantasy Map Generator. Verified v1.156.0 and 2026 offline Electron builds, free MIT project rights, rich map entity/notes system, procedural geography, dated-only static world model, 18-archetype route-and-time Journeys, 3D OBJ/GIS exports, newly shipped non-secure view-only map mode, 29 UI languages, and proposal/undo-based bring-your-own-key/local AI Assistant with its explicit model-authored-script risk. Cross-checked the current view-only support against an outdated contradiction elsewhere in its own FAQ. **33/33 competitors and 12/12 source-research batches complete; WBW Stage 0 and final Stage 13 remain.** |
| 2026-11-06 | **Completed Stage 0 code-baseline review** at Lorekeeper `main` SHA `02b3607d`: audited source routes, editors, calendar/recurrence, graphs, maps, World Builder, Campaign, Writers' Room, AI, content/export, game systems and commercial gates against the fixed **57/57** feature definitions. Checked the same-SHA 6 Nov CI job details: quick/typecheck/lint/notices passed, full unit and smoke skipped. Separated local code, historically proven hosted Integration, deferred/branch work and unverified production/physical-device acceptance. **Stage 13 final synthesis and release acceptance still pending.** |
| 2026-11-06 | **Completed Stage 13 source-backed feature synthesis**. Reconciled **57 identical rows × 33 competitor columns = 1,881 assessment cells**, normalised Y/G, P/P/G, U, N and future status; added the full 33-product coverage table, consolidated 57-feature evidence index, direct-competitor contrasts, scoped release gates, ranked P0–P3 roadmap candidates, user-test proposals and unresolved evidence. User clarified **Mimir** remains the working name pending final brand choice. **Feature audit complete; product release acceptance and separate commercial-success/customer-sentiment analysis not claimed.** |

**End of final Mimir feature audit. All 33 vendor profiles, the 57-capability Mimir main-branch baseline, the normalised cross-vendor evidence index and the recommended feature roadmap are present. No unresolved `U` is silently scored absent; no product release or commercial-success claim is certified here.**