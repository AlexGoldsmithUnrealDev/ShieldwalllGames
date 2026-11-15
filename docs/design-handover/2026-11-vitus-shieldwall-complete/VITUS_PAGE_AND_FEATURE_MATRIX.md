# Vitus — complete approved product website requirements

This is the **main website redesign**, not a short product teaser. Build it as a coherent, production-ready product site with navigation, page families, responsive layouts, media and real interactions. The final approved mock-ups are in `01_VITUS_APPROVED/`.

## 1. Homepage — binding source: Stage 06 with subtle text shading

**Open `01_VITUS_APPROVED/vitus_stage6_subtle_text_shading.html` in a browser, inspect all of it and build that composition.** Use the Stage06 revised responsive file for screen-specific behavior, Stage05 for motion only, Stage09 for reusable tokens. This overrides the prototype `#home` view in Stage08.

The homepage needs:
- Original approved **autumn Brother Vitus hero illustration**, horizontally flipped as in prototype, partnered with product/app/map preview. Maintain its image-to-copy balance.
- **Subtle warm radial shading behind text** so words remain readable; no hard black rectangular cutoff. The larger seasonal / full-bleed “Living Chronicle” alternative was rejected.
- Hero CTA and supporting copy as in the visual composition. Editorial storytelling with enough colour variation to avoid a monotone black site.
- Six interactive product entry points: **Build, Explore, Write, Play, Vitus AI, Own & Share**; do not flatten them to generic cards.
- Layered story/scroll cards, creator/audience destinations, ownership/trust and conversion sections. Preserve the actual ordering and animation treatment visible in HTML, not generic replacements.
- **Mobile/tablet product-first:** preserve the app screenshots and relevant interface demonstration even if Brother Vitus illustration must shrink or crop. Prefer legible media over decorative ambient effects.

## 2. Stage08 — 13 prototype views (Home + 12 secondary page views)

**File:** `01_VITUS_APPROVED/vitus_stage8_secondary_pages.html`. This is one navigable HTML prototype using the hash values below; it is **not** a ready-made production router. Open each hash state, inspect its real layout and interactions. Build real pages using the site's existing route conventions, including aliases/redirects where needed. Don't ship a single hash-switched demo as the final website.

| Prototype hash | Required production page/family | Notes |
|---|---|---|
| `#home` | Home / reference only | **Superseded** by final Stage06 homepage composition. |
| `#features` | Features hub | Prominent World Builder; four-group navigation/taxonomy and 13 feature destinations. |
| `#maps` | Maps, Calendars & History | One combined feature family. Changing creator perspective swaps **copy/media** rather than mechanics. |
| `#writing` | Writing & Narrative Planning / Writing Desk | Longform workflows; screenshots of real app; do not invent released capability. |
| `#ai` | Vitus AI | Grounded Ask Vitus and Vitus Checks, verified current release state. |
| `#writers` | For Writers | Appropriate examples, visual proof and benefits. |
| `#gms` | For Game Masters | Campaign/GMs' use cases and accurate live feature status. |
| `#developers` | For Game Developers | Interactive and game-dev workflow; distinguish planned from released. |
| `#demo` | See Vitus / demonstration | Real screenshots/clips; accessible pause and controls; no fake interface. |
| `#pricing` | Pricing | **Verify current commercial model**, entitlements and tier status; no stale prototype prices. |
| `#download` | **Download** | Dedicated download hero, **working verified Windows installer CTA**, getting started, guides/support, platform notices. Do not omit. |
| `#roadmap` | Product roadmap | Current, checked feature statuses and delivery plans, distinct from studio-level roadmap. |
| `#guides` | Guides | Help and onboarding; use real docs/routes. |

Stage08 is a prototype showing page families. The **Stage09 feature taxonomy** below adds individual feature destinations; do not confuse those with the 13 route views.

## 3. 13 feature destinations — Stage08A/09 authoritative taxonomy

**Desktop mega-menu: a SINGLE horizontal row with FOUR columns; ONE category heading per column**, not two columns each with two subheadings. Mobile = four independently expandable categories.

| Create & Organise | Explore & Understand | Collaborate & Play | Expand & Own |
|---|---|---|---|
| World Builder | Maps, Calendars & History | Writers' Room | Marketplace & Packs |
| World Management | Ask Vitus & Vitus Checks | Campaign | Ownership, Import & Export |
| Writing & Narrative Planning | Translator | Proving Grounds | |
| Trees & Relationships | | Interactive Stories & Game Development | |

These are **13 destinations**, not 13 identical landing pages; related features are intentionally combined (all trees together, maps/calendar/history together). Do not invent extra final approved subpages. Use the shared feature-detail template where appropriate: breadcrumb → role selector → benefits → relevant demonstration → use cases → related tools → CTA. Treat the World Builder as a **prominent first-time-user feature**, not buried deep in the grid.

When feature readiness is unverified, implement the design shell and label a specific TODO rather than advertising availability. Plans/capabilities must be verified against the up-to-date app documentation.

## 4. Creator perspectives: consistent behaviour

Roles: **Worldbuilder (default), Game Master, Writer, Game Developer**.

- Selection changes title/lead, examples, benefit ordering, real screenshots/video and related CTAs where relevant.
- Selection **does not** change feature availability, product mechanics, actual price, release status, or base layout.
- Query contract in design: `/features/maps-history?role=gm` with `worldbuilder`, `gm`, `writer`, `developer` values. Explicit URL selection outranks locally saved role, then default Worldbuilder. Preserve selected role as user browses.
- Keep meaningful non-JS default HTML; accessible selected state, keyboard support. Avoid four duplicate SEO pages for one feature.

## 5. Motion, responsive and media

- Stage05 **Dramatic** preset: ~820ms big visual sequences; soft-rise reveal; layered story-card stacking; restrained hover tilt; manual carousel with crossfade; navbar crossfade; reduced-motion override.
- No required autoplay or trapped scrolling; no tilt-only content on touchscreen.
- Stage07 media capture plan is binding: show the **same consistent example world** across feature imagery where possible. Capture actual current product UI, not old fictional interface mockups.
- Check **1440px desktop, 834px tablet, 390px mobile, 320px minimum**. Contrast, keyboard, focus, no overflow, screenshot priority, Core Web Vitals.
- Stage09 design tokens: ink `#111215`, deep section `#161719`, iron `#222326`, parchment `#f0e6d5`, muted `#c1b3a0`, gold `#cba778`, oxblood `#82363d`, raised red `#ae5050`.

## 6. Acceptance checklist specific to Vitus

- [ ] Homepage visually matches final Stage06 hero and all approved sections, not old site or rejected alternate.
- [ ] 12 genuine secondary page views beyond home implemented under real routes, incl. **Download**, Guides, Pricing, Roadmap.
- [ ] Feature hub plus all 13 feature destinations present, verified/clearly planned when not ready.
- [ ] Four desktop columns in **one row**, four mobile groups.
- [ ] Four-role creator-perspective selector works across relevant feature pages.
- [ ] Actual verified app media; no fake screenshots or outdated pricing.
- [ ] Mobile prioritizes app UI; reduced motion works.
- [ ] Screenshot comparisons included for homepage, Features hub, Maps/History, Download, desktop + mobile.
