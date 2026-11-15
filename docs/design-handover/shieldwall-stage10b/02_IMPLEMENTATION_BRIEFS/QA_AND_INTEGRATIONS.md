# Implementation verification and visual approval gate

## Existing repo is function/asset authority

Repo: `AlexGoldsmithUnrealDev/ShieldwalllGames` (inspect current HEAD, not saved excerpts). At the time of preparing the handover, the existing homepage referenced `styles/main.css`, `styles/shieldwall.css`, `scripts/main.js`, and `scripts/consent.js`. Confirm current versions.

- Use the repo's **latest Shieldwall logo** and local Njord fonts (`assets/fonts/Njord-Regular.woff2`, `Njord-Alternate.woff2` in the current site CSS). No redistribution of font binaries in this package.
- Reuse all real MailerLite newsletter functionality. Existing `index.html` contains a consent-gated MailerLite loader and account `2430389`, and an existing form `rvVjbn` historically associated with Ashborn notifications. **Confirm which existing form is appropriate for the studio newsletter; don't blindly point the newsletter at an Ashborn-only form.** No duplicate loaders or second provider.
- Preserve consent gating/preferences, existing analytics/tracking respecting consent, current metadata/canonicals/schema, legal/support/privacy/refunds/terms/redirect URLs and social links. Test all links rather than assuming mocks have correct destinations.
- Source real *current* Vitus screenshots from a current build or verified assets; label uncertainty and do not use fake software screens. Temporary scene backgrounds may use current repository images (e.g. Avalon, Alba, FireFalls or other suitable current landscape art after verifying availability and usage rights). The owner will later provide final section artwork.
- Maintain accessible keyboard navigation, focus states, touch sizing, reduced-motion handling, colour contrast, responsive cropping, image load priorities, and reasonable performance. Long-form copy must remain legible over images.

## Pass/fail visual tests

- [ ] Original large Stage10B landscape hero clearly present. The old corporate masthead is GONE.
- [ ] “One world. Many games.” is the dominant hero headline with meaningful CTAs.
- [ ] All five content sections plus footer present in the approved order, each with real temporary landscape imagery, not placeholders.
- [ ] Deep charcoal/frost/amber Stage10B look, not Vitus gold/oxblood or generic white business-page design.
- [ ] Genuine current Shieldwall logo and Njord font load successfully in browser computed styles.
- [ ] Dark fades make copy readable but leave artwork clearly visible.
- [ ] Roadmap reflects Vitus beta/1.0 in 2027, Ashborn CCG end 2027 target, Saga's Tavern afterwards with no date.
- [ ] Future plans and two narrative trilogies are in future tense; product capability claims verified.
- [ ] Real consent-aware MailerLite newsletter embed works when authorised, with sensible failure/blocked-script fallback; no pretend submit control.
- [ ] Existing live privacy/legal/support/cookie paths and analytics/SEO not broken.
- [ ] 1440px, 834px, 390px and 320px tested; no clipping, overlay text occlusion, or horizontal overflow; reduced motion and keyboard behaviour tested.
- [ ] Actual desktop and mobile screenshots of new page **compared to approved Stage10B reference**, and a list of visual differences and their reasons. Final art is outstanding, so acknowledge image differences.
- [ ] Changes limited to Shieldwall pages/components/shared assets as necessary; do not unintentionally redesign Vitus pages through global CSS edits.
- [ ] No merge/deploy without explicit user approval.

If any of the major hero/colour/layout/section background elements are missing, **report that the work is incomplete**; do not claim the redesign succeeded just because screenshots or headings were updated.
