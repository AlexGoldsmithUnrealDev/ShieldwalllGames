# Required visual QA and delivery — BOTH sites

## Definition of done
The two redesigned sites must be **visually unmistakable** compared with the old codebase and clearly match their **approved prototypes**. Copy swaps, new screenshots, changing button colours and existing layouts do NOT pass.

### Screenshots required BEFORE asking for approval
For each artifact, capture reference and implementation at **1440px desktop and 390px mobile**. Also test 834px tablet and 320px narrow.

**Vitus**
- [ ] Final homepage: Stage06 subtle-text-shading hero (Brother Vitus + app/map preview), all major homepage storytelling sections and footer.
- [ ] Features hub: visibly prominent World Builder and 4-group taxonomy.
- [ ] Desktop mega menu open: one row, exactly four headings/columns. Mobile independently expandable groups.
- [ ] Maps, Calendars & History: default Worldbuilder and at least one alternate role; same feature mechanics, differing copy/media.
- [ ] Writing, Vitus AI and representative creator page.
- [ ] Pricing (accurate current plan/entitlements).
- [ ] **Download** (actual Windows CTA and guidance; planned platforms correctly marked).
- [ ] Roadmap, Guides, Demo and other Stage08 route views present under real URLs.
- [ ] All 13 named feature destinations reach appropriate real pages or accurately planned-status pages.

**Shieldwall**
- [ ] Full-height **“One world. Many games.”** hero matches Stage10B composition, current logo/Njord, working CTAs and full-bleed landscape with readable fades.
- [ ] Studio, Vitus, Roadmap, Future, Newsletter: **same order/layout as approved**, each with real temporary full-bleed artwork and gradient overlays; no “ARTWORK SLOT” placeholder text.
- [ ] Small independent-studio voice, not corporate metrics, no fabricated big product catalogue.
- [ ] Genuine consent-aware MailerLite form works visually and functionally.
- [ ] Footer legal/help/social links accurate and functional.

### Layout/style fidelity checks
- [ ] Implement actual prototype structure and CSS layout rhythms. Document any intentional deviations and why.
- [ ] Vitus uses Stage09 **Iron & Ink** colours; Shieldwall uses Stage10B amber/frost charcoal colours. No shared copy-pasted website identity.
- [ ] Don't replace final Vitus hero with rejected “Living Chronicle” alternative, or approved Shieldwall landscapes with corporate Stage10A blocks.
- [ ] Correct logos/wordmarks and custom fonts loaded from current repo, no broken asset paths.
- [ ] Media visible and appropriately cropped at all widths; the mobile Vitus product screenshot takes precedence over decorative character artwork.
- [ ] Transitions, manual carousel, menu, story cards, role selector and scroll behavior match prototypes with `prefers-reduced-motion` support.

### Functional and accessibility regression
- [ ] No horizontal scroll/overlap at 320, 390, 834, 1440.
- [ ] Nav menus accessible by keyboard, focus state visible, Escape dismisses overlays; menu triggers and accordions expose state.
- [ ] Colour contrast, accessible media fallbacks, form labels/status messages and touch sizing tested.
- [ ] Consent declined and accepted: MailerLite loads only as allowed by current implementation. Newsletter subscribe journey tested, with errors and success.
- [ ] Analytics/tracking, SEO/canonicals, social/open graph, redirects, forms and legal/support pages preserved.
- [ ] Internal links, old-route redirects, installers and navigation tested.
- [ ] Source every current product screenshot, release label, tier/pricing statement, installer link and third-party media; list unverified placeholders explicitly.
- [ ] Target WCAG 2.2 AA as applicable, LCP <=2.5s, INP <=200ms, CLS <=0.1 at p75 where measurable.

## Review artifact Claude must deliver
1. **One PR or reviewable branch** containing both sites, no deployment/merge.
2. **Coverage table**: each Stage08 page hash mapped to actual route/implemented file; 13 feature destinations mapped to actual route/implemented file; Shieldwall sections mapped to actual route/DOM.
3. **Screenshot side-by-sides**: approved reference against new version, desktop/mobile for both sites and the critical Vitus pages.
4. **Changes summary**: specifically show new hero DOM/CSS, each redesigned section, interactive code, preserved integrations and current image locations.
5. **Asset provenance and TODO register**: what was verified, what was temporary (especially Shieldwall final landscapes), what couldn't be completed.
6. **Test report**: browser screenshots, responsive, accessibility, forms/cookie consent, download links, feature availability, no broken assets.

Claude must not report complete if any approved layout is only represented by the old website plus new content. Missing screenshot/source-of-truth evidence must be explicitly disclosed.
