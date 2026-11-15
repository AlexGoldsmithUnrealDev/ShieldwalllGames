# Vitus — Stage 09 technical playbook

**Status:** review draft; no live-site implementation authorised. 14 November 2026.  
**Inputs:** approved Stage 05 motion laboratory, Stage 06 product-first responsive homepage with subtle shading, Stage 07 media capture, Stage 08 secondary-page prototypes and Stage 08A four-column feature menu.  
**Visual identity:** **Iron & Ink**. Brother Vitus and the existing cinematic hero composition are approved; do not replace them with the larger seasonal full-bleed concept or the Stage 5 experiment hero.

## 1. Architecture decisions

- The product website is planned for **brothervitus.com**, with **brothervitus.co.uk** redirected to the canonical domain. Shieldwall Games remains the separate, shorter studio website.
- Build a shared, accessible set of components. Reuse the approved visual system on secondary pages without overloading the product homepage.
- Do **not** rebuild the homepage hero. Keep the approved Brother Vitus illustration, subtle warm radial text shading, app/map preview and product-first tablet/mobile treatment.
- Website framework, repository structure and hosting integration are **not chosen by this design specification**. Assess current code before making implementation decisions.

## 2. Foundation tokens (provisional implementation values)

| Role | Value |
|---|---|
| Primary ink | `#111215` |
| Deep section | `#161719` |
| Iron surface | `#222326` |
| Parchment text | `#f0e6d5` |
| Muted text | `#c1b3a0` |
| Gold accent | `#cba778` |
| Oxblood primary action | `#82363d` |
| Raised red | `#ae5050` |
| Fine border | `rgba(214,178,127,.25)` |
| Display serif fallback | Georgia / Times New Roman |
| Body sans fallback | system UI / Segoe UI |
| Demonstration transition | ~820 ms for substantial visual changes |
| Short interaction transition | ~150–220 ms for feedback/menus |

Newsreader/DM Sans have been used in prior mock-ups as optional faces; the final font licensing, delivery and exact metrics are to be confirmed. Existing image assets are illustrative until approved. Use semantic tokens rather than copying hardcoded values everywhere.

## 3. Required reusable components

`SiteHeader`, `MegaFeaturesMenu`, `MobileNavigation`, `CreatorSelector`, `FeatureHub`, `FeatureCard`, `FeatureDetailTemplate`, `MediaShowcase`, `AudienceCard`, `StoryStack`, `StatusLabel`, `PrimaryCTA`, `SiteFooter`.

Navigation: **one row with four columns** at desktop width. Each of the following groups gets its own column:

1. **Create & Organise:** World Builder; World Management; Writing & Narrative Planning; Trees & Relationships.
2. **Explore & Understand:** Maps, Calendars & History; Ask Vitus & Vitus Checks; Translator.
3. **Collaborate & Play:** Writers' Room; Campaign; Proving Grounds; Interactive Stories & Game Development.
4. **Expand & Own:** Marketplace & Packs; Ownership, Import & Export.

On mobile, expose four expandable groups rather than four squeezed columns.

## 4. Page families

- **Homepage:** approved cinematic hero; six-category interactive showcase; layered story cards; audience destinations; ownership/trust; conversion.
- **Features hub:** introductory hero; prominent World Builder; 13 destinations; filter by the four groups.
- **Detail page:** breadcrumb → role selector → title and benefits → relevant product demonstration → use cases → related features → conversion. Same skeleton across roles and products.
- **Creator landing pages:** Writers, Game Masters, Game Developers (with Worldbuilder as default perspective throughout the rest of the site).
- **Transactional/resource:** Pricing, Download, Roadmap, Guides. Sitewide data and styling, not completely independent components.

## 5. Audience-personalisation contract

Creator types are **Worldbuilder (default)**, **Game Master**, **Writer**, and **Game Developer**. The selection affects:

- heading and lead paragraph;
- practical examples, benefit order and relevant proof;
- screenshot/video or featured workflow;
- related-feature recommendations and supporting CTA wording.

It **does not** change feature availability, pricing, tier eligibility, release status, product mechanics or fundamental layout. Implement all four variants against a single feature-page template with structured content data.

- Query parameter contract: `/features/maps-history?role=gm` (others: `worldbuilder`, `writer`, `developer`).
- An explicit URL choice overrides the locally remembered user preference; otherwise use the last chosen role, then Worldbuilder.
- A change should update visible content immediately and preserve the selected role across page navigation. Use accessible buttons with clear selected states. Avoid four duplicate SEO URLs for substantively the same page; default HTML and SEO copy must remain meaningful without client JavaScript.

## 6. Motion contract

**Approved:** Dramatic preset; ~820ms major visual sequences; soft-rise scroll reveals; layered stacking story cards; restrained hover tilt; manual carousels with crossfade; more cinematic atmosphere; navigation crossfade with immediate mobile feedback.

- No automatically advancing content and media by default.
- No content disappearing before it can be read.
- Respect `prefers-reduced-motion` and offer motion pause controls as appropriate.
- On phones, disable pointer-dependent tilt and scroll-trapping interactions; keep access to all information.
- Reduce/drop decorative orange glows and Brother Vitus imagery **before** sacrificing product screenshots or relevant app media at tablet/mobile sizes.

## 7. Capture and claim integrity

- Stage 07 media capture register is the authoritative planning reference. Capture one consistent example world across map, tree, timeline, Writing Desk, campaigns, AI, etc.
- Final media must demonstrate real features accurately. No fake UI screenshots pretending to be live product footage.
- Feature availability is **dynamic**, as Claude updates `docs/deployment/vitus-feature-list.md`; check its current version at content-finalisation time.
- Commercial entitlements come from `docs/commercial-model.md`, which takes precedence over the feature list when they conflict.
- Each feature claim should track: `slug`, `status`, `lowestPlan`, `sourceDoc`, `verifiedAt`, `captureId` and `roleVariants`.
- Exclude unverified and unfinished claims from live conversion messaging; roadmap content may identify planned features distinctly.

## 8. Responsive and quality acceptance

Review at 1440px, 834px, 390px and 320px, as in Stage 06/08A, and cover intermediate widths in real implementation. No page-level horizontal overflow; no text under photos or missing product media; no control blocked by a floating playbook label.

Keyboard-accessible navigation; Escape closes menus; visible focus rings; touch controls sized appropriately. Contrast at least 4.5:1 normal text and 3:1 large text (where WCAG applies); support reduced motion. Reserve media dimensions to avoid CLS; use poster images, responsive media, and lazy-load below the fold. Target Core Web Vitals LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at 75th percentile.

## 9. What is not approved by this document

This is **not** permission to implement new website code. It is not a redesign of the already-approved hero or homepage structure. It does not freeze feature descriptions, availability, screenshots, videos, commercial pricing, live downloads or testimonials. Those will be reviewed in the final content and production stages.

## 10. Stage 09 review checkpoints

1. Approve tokens/type/contrast and the Iron & Ink component catalogue.
2. Approve the four-column desktop menu and four-group mobile navigation.
3. Approve the feature-page data/template contract and role selector behaviour.
4. Approve motion, responsive and accessibility acceptance criteria.
5. Confirm implementation repository/hosting strategy only after reviewing current websites and source code.