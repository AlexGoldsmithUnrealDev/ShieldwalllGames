# Mimir pre-launch media checklist

This is the single production checklist for owner-supplied artwork, product captures and video. Per-page background READMEs remain the exact filename briefs; this document consolidates what still needs to be produced and how it should be integrated.

## Delivery standards

- Well artwork masters: 3840 × 2400 desktop and 1440 × 2560 mobile.
- Well production files: compressed AVIF, with aligned dark/lit pairs. Add WebP only if browser testing demonstrates a real need.
- Product images: capture the real application, crop deliberately, remove private data, and deliver AVIF plus WebP where needed.
- Informative images need useful alt text describing the product evidence visible in the capture. Decorative Well backgrounds use no alt text and must contain no essential information.
- Below-fold images use responsive `<picture>`, explicit dimensions and `loading="lazy"`. Only a true above-fold LCP image may use eager loading and `fetchpriority="high"`.
- Video needs a poster, controls, captions when speech exists, a transcript nearby and no autoplay with sound. Avoid autoplay under reduced motion.

## Well artwork sets

| Page | Sets | Exact filename brief | Purpose | Information role |
| --- | ---: | --- | --- | --- |
| Mimir homepage | 12 chapters / 48 files | [`backgrounds/README.md`](backgrounds/README.md) | Full Descent into the Well sales journey | Decorative |
| Features | 8 chapters / 32 files | [`backgrounds/features/README.md`](backgrounds/features/README.md) | Eight feature disciplines | Decorative |
| Roadmap | 5 phases / 20 files | [`backgrounds/README.md`](backgrounds/README.md#roadmap-backgrounds) | Current to Horizon depth progression | Decorative |
| Mimir AI | 6 chapters / 24 files | [`backgrounds/mimir-ai/README.md`](backgrounds/mimir-ai/README.md) | Wisdom, evidence and control chambers | Decorative |
| Proving Grounds | 6 chapters / 24 files | [`backgrounds/proving-grounds/README.md`](backgrounds/proving-grounds/README.md) | Experiment, state and creator-decision chambers | Decorative |
| Migration | 6 chapters / 24 files | [`backgrounds/migration/README.md`](backgrounds/migration/README.md) | Source, interpretation, review and ownership progression | Decorative |

Do not set a chapter's `assetReady` flag until all four aligned desktop/mobile dark/lit files for that chapter exist and have been tested.

## Homepage product evidence

| Section | Required media | Suggested capture | Alt text | Fold |
| --- | --- | --- | --- | --- |
| Hero | Workspace image | One real world open with entries, relationships, timeline and map visible | Required | Above |
| Product overview | 60–90 second video + poster | Create/connect, visualise, ask/review, test | Poster required; captions and transcript required | Above/near |
| Connected worldbuilding | Tree image | A populated Family Tree or another approved specialised tree | Required | Below |
| Lore Consistency | Review image | One real contradiction with implicated entries and evidence | Required | Below |
| Proving Grounds | Short capture or still | Meaningful choices, state change and result | Required | Below |
| Collaboration | Two related stills | GM/private view and controlled participant view of the same world | Required | Below |
| Ownership | Application + local files still | Mimir beside the corresponding readable local files | Required | Below |

## Features product evidence

All are informative, below the fold and require alt text.

| Discipline | Slot(s) |
| --- | --- |
| Build | Character and entry editor |
| Connect | Relationships and backlinks |
| Visualise | Family Tree; Genus/Species Tree; Culture Tree |
| Write & Plan | Narrative Planner |
| Understand | Main workspace/Browser; Mimir AI |
| Test | Proving Grounds |
| Own & Protect | History and rollback |
| Share | Collaboration and permissions |

Additional captures can later be used inside feature drawers, but they should not duplicate a near-identical view merely to fill a slot.

## Mimir AI product evidence

All are informative, below the fold and require alt text.

1. Ask Mimir grounded answer.
2. Visible sources and evidence.
3. Uncertainty or unsupported-answer example.
4. Lore Consistency Review finding with affected entries.
5. AI Context Bundle builder.
6. Constructed-language Translator with language and register controls.

Conceptual website diagrams must remain labelled separately from these real product captures.

## Proving Grounds product evidence

All are informative, below the fold and require alt text.

1. Dialogue graph and test run.
2. Quest graph with conditions and a meaningful result.
3. Variables and world-state inspector.
4. Proving Grounds setup or active session.
5. Simulation results showing state, coverage, path or replay evidence.

## Migration product evidence

All are informative, below the fold and require alt text.

1. CSV/XLSX mapping panel with a real entry type, name column and several field mappings.
2. Prose extraction review showing proposals being renamed, re-typed or omitted before draft creation.

Do not supply a fabricated universal warning dashboard, rollback control, competitor account integration or unsupported source-format screen.

## Social preview artwork

No Open Graph image is referenced until approved artwork exists. Recommended delivery is 1200 × 630 for:

- `assets/social/shieldwall-og-1200x630.jpg`
- `assets/social/ashborn-og-1200x630.jpg`
- `assets/social/mimir-og-1200x630.jpg`

The Mimir image may be reused across current Mimir pages if it accurately represents the product. Page-specific variants are optional, not a launch blocker. After delivery, add matching `og:image`, `og:image:width`, `og:image:height`, `og:image:alt` and `twitter:image` metadata.

## Final integration QA

- Check art focal positions at 2560×1440, 1920×1080, 1440 laptop, 16:10, tablet and 360–390px mobile.
- Confirm dark/lit pairs do not jump during a chapter transition.
- Confirm text contrast and card readability over every crop.
- Confirm no informative capture is hidden from screen readers or represented only by a background image.
- Confirm page weight and LCP after real assets replace placeholders.
- Confirm every capture uses current product terminology and contains no private or third-party copyrighted material.
