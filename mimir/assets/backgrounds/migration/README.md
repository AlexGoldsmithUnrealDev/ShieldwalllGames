# Migration Well background handoff

The Migration page uses six data-driven Well chapters. Until approved artwork is supplied, `migration-chapters.js` renders atmospheric gradients and keeps `assetReady: false` for every chapter.

## Source masters

- Desktop master: 3840 × 2400
- Mobile master: 1440 × 2560
- Preferred production format: AVIF
- Create each dark/lit pair from the same composition so the lit layer can cross-fade without a visible jump.
- Keep text-critical areas calm and preserve the focal positions configured in `mimir/scripts/migration-chapters.js`.

## Exact final filenames

```text
01-existing-world-dark.avif
01-existing-world-lit.avif
01-existing-world-dark-mobile.avif
01-existing-world-lit-mobile.avif

02-understand-dark.avif
02-understand-lit.avif
02-understand-dark-mobile.avif
02-understand-lit-mobile.avif

03-mapping-dark.avif
03-mapping-lit.avif
03-mapping-dark-mobile.avif
03-mapping-lit-mobile.avif

04-review-dark.avif
04-review-lit.avif
04-review-dark-mobile.avif
04-review-lit-mobile.avif

05-commit-dark.avif
05-commit-lit.avif
05-commit-dark-mobile.avif
05-commit-lit-mobile.avif

06-ownership-dark.avif
06-ownership-lit.avif
06-ownership-dark-mobile.avif
06-ownership-lit-mobile.avif
```

## Chapter direction

1. Existing world: an accumulated archive descending into the Well, warm amber evidence of years of work.
2. Understand: source fragments becoming legible without suggesting automatic perfection.
3. Mapping: deliberate correspondences between old structure and carved Mimir structure.
4. Review: uncertain fragments held in visible light for creator judgement.
5. Commit: a clear threshold between review and creating draft entries.
6. Ownership: reconstructed knowledge settling into durable local stone, with an open path outward.

These backgrounds are decorative. They should not contain readable text, product UI or information needed to understand the page.
