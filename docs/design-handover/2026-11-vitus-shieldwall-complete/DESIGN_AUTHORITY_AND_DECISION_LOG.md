# Decisions and design authority — “Research Realmly Competitor” + continuation

This is a **reconstruction of all materially relevant approvals and rejections available through the recovered original artifacts and available conversation history**, not a claim to reproduce every message of the old chat verbatim. Use the original interactive HTML designs as the primary record where a paraphrase is incomplete.

## Timeline — what was actually approved

1. **Competitor/feature research.** The original `Mimir_Competitor_Feature_Audit_Master.md` is preserved in `90_HISTORICAL_NOT_FOR_IMPLEMENTATION/`. The user chose to move beyond competitors' dated UX, unclear layouts and generic worldbuilding marketing.
2. **Vitus visual direction.** “Iron & Ink” chosen over Scriptorium and Living Codex. The product site needs medieval warmth and storytelling but still modern product clarity and tonal variation (gold/oxblood, some light sections). Vitus is a separate product identity with its own sword/quill logo and current assets. Do not replace the final logo with old Mimir or an illustrative preview mark.
3. **Vitus hero/navigation explorations.** The user preferred the earlier **autumn Brother Vitus composition plus application screenshot**, with Vitus flipped horizontally, over a later expansive “Living Chronicle” cinematic hero. The later alternative was **rejected**. The approved hero has **subtle warm text shading** without a hard-edged black block. Keep the composition and partial screenshot where necessary.
4. **Stage04 sections** progressed to a six-area homepage storytelling design. User approved feature cards and parts of the interactive homepage; structure recorded in Stage06 final.
5. **Stage05 motion** approved in the **Dramatic** treatment (~820ms substantial animations): scroll soft-rise, stacking narrative cards, restrained hover tilt, manual product carousel with crossfade, atmospheric motion, mobile instant responses and reduced-motion fallback. Stage05 is a **behavior reference, not a superseding hero**.
6. **Stage06 homepage** approved after product-first tablet/mobile revisions and subtle shading fixes. **Vitus Stage06 subtle-text-shading HTML is final homepage visual authority.** Keep screenshots more prominent than character art on small devices.
7. **Stage07 media capture** approved as planning methodology: real screenshot/video captures of one consistent demo world, with appropriate form factors and feature-status checks; don't invent current features.
8. **Stage08 secondary pages** approved as structure: navigable prototype covering 13 route views (Home+12 secondary), including Pricing, Download, Roadmap, Guides, creators and specialist feature families. Most wording/media remained deliberately provisional. The user was designing layouts and behaviour first.
9. **Stage08A features**: user requested **more features**, grouped logically (all trees together; Maps, History, Calendar together); prominent World Builder for first-time creators; Writers' Room, campaigns, interactive stories and other tools. The user approved the **role selector** with limited changes to text/examples/media, not core functionality. Desktop Features mega menu was corrected from 2 columns × 2 subheadings to **ONE row of FOUR columns**, each subheading with its own column. Mobile four collapsible groups.
10. **Stage09** technical/component design system approved: consistent Iron & Ink tokens, page families, role selector, responsive interaction and accessibility. Although the original file header says “review draft” and “no implementation authorised”, the user **subsequently explicitly approved all of Stage09** and moved on. The old header reflects the stage when drafted; it does NOT mean the design was rejected.
11. **Stage10 studio homepage** first concept included multiple project showcases. User then corrected that Shieldwall is a small studio, **not** another Vitus website or fictional catalogue. Existing **Njord** font and current logo must be retained; only a studio introduction, Vitus first product, modest in-development game, roadmap and newsletter are needed.
12. **Stage10A** alternative Shieldwall design was rejected as **too corporate**. Do not implement it and do not use its palette/system.
13. **Stage10B** redesigned Shieldwall homepage approved: **“One world. Many games.”**, lively atmospheric landscapes behind each section with fades, dark glass panels, studio creative philosophy, differentiated from the Vitus product site; temporary existing art acceptable until the user provides final landscapes.
14. **Stage10B roadmap/content specifics** confirmed: Vitus launch, ~6-month beta then 1.0 in 2027; parallel Ashborn CCG target end 2027; subsequent Ashborn — Saga's Tavern, an RPG simulator with strong Vitus integration where GMs build their own encounters/scenarios; at least two planned narrative trilogies; **“Creativity should never be held back.”** The tools come first so players create while waiting for the studio's stories.
15. **Implementation handover failure**: A previous archive incorrectly directed Claude to implement **only Shieldwall** and labelled all Vitus originals “archive only”. That directive was an assistant error. The user **explicitly requires the full Vitus AND Shieldwall website designs to be built**. THIS CURRENT TWO-SITE HANDOVER AND CURRENT USER INSTRUCTIONS SUPERSEDE ALL PREVIOUS SCOPE LIMITATIONS.

## Unambiguous design priority

| Area | MUST implement | MUST NOT copy from |
|---|---|---|
| Vitus homepage | `01_VITUS_APPROVED/vitus_stage6_subtle_text_shading.html` | Stage08 `#home` placeholder, rejected big “Living Chronicle” hero, current site's older layout |
| Vitus responsive | `vitus_stage6_responsive_homepage_revised.html` and final subtle-shading variant | Earlier uncorrected comparison/mockups |
| Vitus motion | Stage05 motion laboratory | Heavy animation that obscures controls, autoplay or scroll traps |
| Vitus secondary pages | Stage08 `#features … #guides` views | Merely repainting existing old site or limiting work to homepage |
| Vitus Features menu & roles | Stage08A four-column and personalised-features files; Stage09 | Two desktop columns with four scattered headings; separate feature mechanics per role |
| Vitus components/tokens | Stage09 design system + technical playbook | Shieldwall palette |
| Shieldwall homepage | Stage10B landscape-led source | Corporate Stage10A or earlier Stage10 |
| Current logos, typeface assets, form integrations, verified feature/price data | Current repository and actual application | Any old prototype screenshot/logo/pricing text |

## What is NOT fully frozen
Marketing copy, current product status, tier entitlements, exact current screenshots, installer release URLs and Shieldwall's final landscape images were deliberately left for implementation/capture. Claude must write/source/verify these, preserve approved visual layout, and flag genuinely unavailable assets transparently. The design is approved; not every marketing claim in placeholder text is approved.

## Execution and approval
The user authorises **implementation on a review branch**, not live deployment. Claude must submit screenshot comparisons and await explicit approval to merge/deploy.
