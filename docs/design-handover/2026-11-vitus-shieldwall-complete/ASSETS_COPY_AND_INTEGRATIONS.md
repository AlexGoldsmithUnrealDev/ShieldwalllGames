# Current assets, copy, technical integrations and provenance

## Design versus content authority

- The **approved original HTML mock-ups** dictate visual design, composition, section order, interactive affordances, visual hierarchy, responsive layout and animation direction.
- The **current source repository / application and authoritative documents** dictate real current logos, licensed custom fonts, product feature readiness, pricing, installer URLs, release status, analytics, legal copy and working integrations.
- Use the existing repo architecture where appropriate, but **do not keep obsolete old page compositions** out of convenience. A cosmetic reskin is not implementation.

## Existing site/repository

Repository: `AlexGoldsmithUnrealDev/ShieldwalllGames` (verify HEAD/default branch and exact deployment mapping). Existing site files observed: root `index.html`, `styles/main.css`, `styles/shieldwall.css`, `scripts/main.js`, `scripts/consent.js`, `vitus/`, and existing legal/help pages. Recheck actual HEAD before editing because code can change between handover and implementation.

Product source-of-truth may also be in `AlexGoldsmithUnrealDev/Lorekeeper`; check current feature inventory and commercial docs where they actually live, including `docs/deployment/vitus-feature-list.md` and `docs/commercial-model.md`. Do not assume either file's path exists on the Shieldwall site repo; locate and verify.

## Branding and artwork
- **Shieldwall Games**: use the **LATEST actual production logo** already present in repo, and **Njord** font. The current stylesheet `styles/main.css` has `@font-face` rules for `assets/fonts/Njord-Regular.woff2` and `Njord-Alternate.woff2`. Do not replace, fake, redistribute or rename the font files. The Stage10B mock's preview logo is not final production authority.
- **Vitus**: use the most recent approved Vitus logo/wordmark from actual product site/brand assets. The naming has changed from Mimir to Vitus; do not reintroduce Mimir branding. The Stage06 hero art plus product screenshot layout is approved, but screenshots/installer details must be current and verified.
- **Shieldwall landscapes**: the user will supply final landscape images for each major section. Meanwhile source appropriate **existing real artwork already in the repository**; preserve full-bleed fades and maintain a simple per-section asset mapping so replacement is easy. Do not ship `ARTWORK SLOT` text; do not pretend provisional images are approved final images.
- **Product media**: source real, recent actual app captures at meaningful resolutions, ideally one coherent demonstration world. Stage07 capture playbook specifies the needs. Do not use fabricated interface shots, obsolete versions or stock photos as real app proof.
- **Alt text, licensing and performance**: document media provenance; compress responsibly, reserve dimensions, use lazy loading below fold and verify copyright permission. Use CSS background images as decorative where appropriate; actual informative images need meaningful alt text.

## Newsletter and integrations
- Shieldwall existing **MailerLite** is already integrated with consent gating in the site root. Existing `index.html` uses a MailerLite universal loader and has embedded forms (previously form `rvVjbn` and account `2430389`); these are **observed existing references, NOT permission to hardcode stale IDs**. Inspect the latest code and reuse the correct functional integration, form IDs and existing cookie-consent system. Test consent declined/accepted states, network failure and embedded form accessibility.
- Keep working analytics/tracking, event firing, SEO, Google/OpenGraph metadata, canonical settings, cookies, preferences, redirects, legal pages, links, download/support links and any functional signup/contact forms.
- Avoid duplicate MailerLite installations or bypassing cookie consent.
- Stage10B input elements and fake signup CTA are **visual only**: replace with the genuine current integration.
- Existing current font files are production source assets; do not send/repackage fonts unnecessarily.

## Claims, pricing and releases
- Rewrite marketing copy in clear British English while preserving the approved intent and visual rhythm. It is not yet final.
- Cross-check actual feature statuses, paid entitlements and pricing. Commercial model is authoritative over older feature-list tier hints where conflicting.
- **Vitus**: planned ~six-month beta and 1.0 target 2027; verify launch state before asserting an exact release date.
- **Ashborn CCG**: target late 2027; not an existing catalogue of shipped products.
- **Ashborn — Saga's Tavern**: later major RPG simulator concept with Vitus integration, **no fixed launch date**.
- **Two planned narrative trilogies**: planned, not published.
- Do not invent adoption/user metrics, download links, app reviews, names or polished fictional screenshots. If information cannot be verified, mark it as an explicit unresolved item and show the user the exact question/asset needed.

## Release safety
- Implement in a review branch; keep existing site functional during rewrite, with redirects/legacy route compatibility if needed.
- Show what changed via screenshots and a changed-files/route list. Do not merge or deploy without explicit approval.
