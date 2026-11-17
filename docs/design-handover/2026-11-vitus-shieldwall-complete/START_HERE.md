# FINAL DESIGN HANDOVER — BUILD BOTH VITUS AND SHIELDWALL GAMES
**Approved design source of truth | 15 November 2026**

> **Status, 17 November 2026: implemented and live on both sites. Keep as the visual reference; later owner decisions in each repository's `CLAUDE.md` take precedence.**
>
> **THIS IS THE CURRENT, TWO-SITE HANDOVER. IMPLEMENT BOTH WEBSITES.** The earlier folder `docs/design-handover/shieldwall-stage10b/` and its `CLAUDE_PROMPT.md` were incomplete and **are superseded**. Their Shieldwall-only scope and “Vitus archive-only / do not implement” instructions are **void**. Do not follow them.

## What has been approved?
We spent the previous week in the ChatGPT conversation **“Research Realmly Competitor”** building the **entire Vitus product website design**, including its homepage, responsive views, movement, Features navigation, 13 navigable prototype views (Home plus 12 secondary pages), feature/detail templates, audience selectors, download page, media planning, and design system. **Stage 09 was approved in full.** We then designed the separate **Shieldwall Games studio homepage** in the present conversation. Its atmospheric **Stage 10B** version was approved. The old Stage 10 and corporate Stage 10A were rejected.

**Goal: Implement the actual websites as drawn in the original interactive HTML prototypes, not existing pages with different copy/screenshots.** The user has already had one failed implementation because the earlier handovers were wrong.

## Read in this order, before editing production code
1. **`CLAUDE_IMPLEMENT_BOTH_WEBSITES.md`** — explicit current brief and completion standard.
2. **`DESIGN_AUTHORITY_AND_DECISION_LOG.md`** — what was approved, what was rejected, what overrides what.
3. **`VITUS_PAGE_AND_FEATURE_MATRIX.md`** — whole product website, not just homepage; includes all secondary-page prototypes and feature taxonomy.
4. **`SHIELDWALL_SECTION_SPEC.md`** — separate, approved Stage10B studio homepage.
5. **`ASSETS_COPY_AND_INTEGRATIONS.md`** — preserve existing production branding/integrations and source real media.
6. **`QA_VISUAL_ACCEPTANCE.md`** — required desktop/mobile screenshot proof for each site.
7. **`SOURCE_FILE_MANIFEST.md`** — exact original HTML files and versions.
8. **`01_VITUS_APPROVED/vitus_stage6_subtle_text_shading.html`** — open and interact: this is the **final Vitus homepage visual authority**.
9. **`01_VITUS_APPROVED/vitus_stage8_secondary_pages.html`** — open and switch between all **13 page views** using the URL hash (`#features`, `#maps`, … `#download`).
10. **`01_VITUS_APPROVED/vitus_stage8a_four_column_menu.html`** + **`vitus_stage9_design_system.html`** — final menu/layout/style.
11. **`02_SHIELDWALL_APPROVED/Shieldwall_Games_Stage10B_Alive_Landscape_Mockup.html`** — actual approved studio homepage; preserve its hero and landscape-based composition.

The supporting original files are in `01_VITUS_APPROVED/`; rejected or exploratory designs are in `90_HISTORICAL_NOT_FOR_IMPLEMENTATION/`. Every original mock-up recovered from the two chats is directly accessible as a standalone file; historical work is preserved for provenance and to explain rejected alternatives.

## Critical distinction
- **VITUS**: a substantial, multi-page product website with its own **Iron & Ink** aesthetic. Build the product homepage **and every required page/template**, not merely swapping out text on the current website.
- **SHIELDWALL GAMES**: a **different-looking studio site**, chiefly one artistic, scrolling homepage with the slogan **“One world. Many games.”** It is *not* a big catalogue and *not* Vitus copied under a different brand. Do not invent other fully approved studio page mock-ups.
- Preserve **existing current logos**, **Shieldwall's Njord font**, **MailerLite**, cookie consent, analytics, legal/support links, working forms, SEO and routes. The prototype preview logos and screenshot stand-ins do not override production assets.
- Claude writes final British-English copy and sources **current, genuine app UI screenshots** and suitable existing artwork; unverified claims or fake screenshots are forbidden.
- **No merges or deployment until the user's visual approval.** Use a work branch/PR. Report actual pages changed and show side-by-side screenshots.

**Authority:** This file and the present two-site handover override the prior Shieldwall-only instruction, but do NOT override the approved original mock-up layouts. Any unavoidable conflicts or missing images must be documented, not invented.
