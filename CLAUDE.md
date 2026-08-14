# CLAUDE.md — Shieldwall Games Web Project

## Read this first

This file is the persistent working brief for the Shieldwall Games website. Read it before changing public copy, pricing, roadmap content, or site structure.

If this file conflicts with an explicit new instruction from the human owner, follow the new instruction and update this file so the conflict does not recur.

---

## Company and products

**Shieldwall Games Ltd** is a small independent studio based in Kent, UK.

### Mimir

Mimir is a local-first worldbuilding platform for writers, Game Masters, game developers, and other creators working with complex fictional worlds.

Public product positioning:

- Build structured worlds rather than disconnected notes.
- Visualise relationships through dedicated trees, maps, calendars, timelines, backlinks, and linked entries.
- Use Mimir AI to understand and review the user's own lore.
- Prototype interactive ideas in Proving Grounds.
- Import existing work and migrate from other worldbuilding tools.
- Collaborate with other creators.
- Host controlled world experiences for players/viewers/participants.
- Keep the primary local world files under the user's ownership and control.

The retired internal/product name **Lorekeeper** must not appear in public website copy.

### Ashborn

Ashborn is Shieldwall's Viking Age game line. Ashborn CCG is the first planned game in that line and launches after Mimir.

---

## Canonical Mimir commercial model

The deeper commercial source of truth lives in the Mimir application repository at `docs/commercial-model.md`.

This website must remain aligned with that specification.

### V1 plans

| Tier | Monthly | Annual | Position |
| --- | ---: | ---: | --- |
| **Mimir Core** | **Free** | **Free** | Build your world |
| **Apprentice** | **£6.99** | **£69.99** | Develop your world |
| **Worldsmith** | **£14.99** | **£149.99** | Bring your world to life |
| **Loremaster** | **£24.99** | **£249.99** | Work at professional scale |

**Worldsmith** is the featured/Most Popular plan.

### Commercial rules

- Unlimited local worlds and local entries at every tier.
- Core is a permanently useful free product, not a timed trial.
- Do not paywall accessibility, basic data integrity, ordinary migration/import, or export of the user's own local data.
- Paid tiers add increasingly powerful workflows, AI allowance, collaboration, hosting, and scale.
- Only Shieldwall-hosted resources should carry capacity limits.
- Free/Core users may accept invitations to paid users' hosted/collaborative experiences within the host's allowance.
- Downgrading must not delete local work.
- Do not market a separate Writer, GM, or Developer edition. Those are audience/persona routes into the same product.
- Do not advertise a Studio/business plan as a current V1 consumer plan. A future business plan may be created only when real professional demand justifies it.

### Planned V1 feature progression

**Core** includes the standard local worldbuilding foundation:

- Unlimited local worlds and entries
- Standard entry types/editors
- Browser, search, tags, backlinks, wiki-links
- Family, genus/species, culture, faction, and place trees
- Timeline, calendar, and maps
- Quest, Dialogue, and Story Arc editors
- Spoilers
- Validation and naming consistency
- Git/history/rollback
- Accessibility
- Standard and safe-to-publish export
- General imports and competitor migration
- Mimir AI and Translator within the Core credit allowance
- Ability to join invited collaborative/hosted experiences

**Apprentice** adds:

- Custom Schema Editor
- Narrative Planner
- Advanced tree/filter tools
- Local Proving Grounds creation
- Small collaboration/hosting allowance
- Larger Mimir AI allowance

**Worldsmith** adds:

- AI Context Bundles
- Lore Consistency Review
- Simulation
- Variables/world-state tooling
- Hosted participant/player worlds
- Live collaborative Proving Grounds hosting
- Larger collaboration/hosting allowance
- Larger Mimir AI allowance

**Loremaster** primarily increases scale:

- More hosted worlds
- More collaborators
- More participants
- More hosted storage
- Larger Mimir AI allowance
- Priority support queue

### Current planning allowances

These are beta planning values and may be tuned before paid checkout opens.

| Allowance | Core | Apprentice | Worldsmith | Loremaster |
| --- | ---: | ---: | ---: | ---: |
| Monthly Mimir AI credits | 25 | 400 | 1,200 | 3,000 |
| One-time welcome credits | 100 | Account-level | Account-level | Account-level |
| Ask Mimir retrieval context | 4k | 8k | 16k | 16k |
| Hosted worlds owned | 0 | 1 | 5 | 20 |
| Guest collaborators/world | Host allowance | 2 | 5 | 20 |
| Participants/world | - | - | 50 | 200 |
| Hosted storage | - | 1GB | 10GB | 50GB |

---

## Mimir AI positioning

Customer-facing product name: **Mimir AI**.

Do not make the website teach customers to choose Haiku, Sonnet, Opus, or another provider model.

Production philosophy:

- Mimir chooses the underlying model/processing route internally.
- Simple mechanical/background tasks should use the cheapest validated route that does not reduce quality.
- Normal user-facing lore answers should use a high-quality model baseline.
- Credit consumption is based on the amount/type of work performed, not a provider-model surcharge.
- Subscription credits reset monthly.
- Separately purchased top-up credits do not expire under the planned V1 model.
- Shieldwall-caused failed calls/retries should not consume customer credits.
- Intentional user regenerate/retry operations are new work and may consume credits.

The website should describe the benefit and credit system, not provider SKU economics.

Bring-your-own-key (BYOK) is not a customer feature and must not be advertised.

---

## V1 launch scope and roadmap

The public roadmap must reflect this sequence.

### V1

Finish the complete launch platform, including:

- Existing structured worldbuilding systems
- General imports and competitor migration
- Proving Grounds
- Collaboration
- Hosted worlds/player participation

### Post-V1 refinement period

After V1 launches, Shieldwall deliberately spends several months gathering real feedback and refining:

- onboarding
- migration
- Proving Grounds
- collaboration and hosting
- AI retrieval/routing
- performance
- accessibility/usability
- conversion and retention friction

### Next major features

Only after V1 refinement:

- ChatGPT MCP integration
- Claude MCP integration
- Unreal Engine integration
- Unity integration
- Godot integration
- advanced engine round-tripping

**Critical:** MCP and game-engine integrations are future features. Do not describe them as available at V1 launch.

### Future professional expansion

Potential future items, not launch promises:

- Mimir Studio/business plan
- organisation/team administration
- enterprise SSO
- professional onboarding
- SLA/support contracts
- additional professional deployment features

---

## Website architecture

```text
/
├── index.html                  # Shieldwall homepage
├── privacy.html
├── terms.html
├── 404.html
├── styles/
│   ├── main.css
│   └── shieldwall.css
├── scripts/
│   └── main.js
├── assets/
│   ├── images/
│   ├── fonts/
│   ├── icons/
│   └── logos/
├── mimir/
│   ├── index.html              # Mimir landing/pricing/FAQ
│   ├── roadmap.html
│   ├── roadmap-data.json
│   ├── styles/
│   │   ├── mimir.css
│   │   └── roadmap.css
│   └── scripts/
│       ├── mimir.js
│       └── roadmap.js
├── ashborn/
│   ├── index.html
│   └── styles/
│       └── ashborn.css
├── .github/workflows/deploy.yml
├── README.md
└── CLAUDE.md
```

Stable pricing anchor: `/mimir/#pricing`. Do not rename `id="pricing"`.

---

## Design rules

The current visual design is established. Do not redesign it unless explicitly requested.

- Vanilla HTML/CSS/JS only
- No framework or build step
- Semantic HTML
- WCAG AA minimum
- Existing design tokens first
- Mobile layouts must remain functional
- Progressive enhancement where practical
- Use existing component patterns before creating new ones
- Public feature claims must match current roadmap/commercial decisions
- Future features must be labelled as future rather than implied as delivered

### Fonts

Production fonts are already integrated:

- Njord Regular + Alternate for display use
- Source Serif 4
- Inter
- JetBrains Mono

Do not reintroduce placeholder-font tasks.

---

## Email capture

Provider: **MailerLite**.

- Account ID: `2430389`
- Mimir form: `data-form="x3uRLn"`
- Ashborn form: `data-form="rvVjbn"`
- Sending domain: `shieldwallgames.co.uk`

Do not reintroduce Buttondown.

---

## Privacy and legal-copy rules

Mimir is local-first, but the website must not claim Shieldwall can never receive world data.

Accurate distinction:

- Ordinary local creation/editing stays on the user's device.
- Mimir AI sends relevant context through an online broker/API provider.
- Optional collaboration/hosting necessarily stores or synchronises the data the user chooses to host.
- Account/subscription services process account, entitlement, credit, usage, and security metadata.

Production processors are not yet finalised. `privacy.html` should be updated with the actual account/payment/hosting/AI subprocessors before public paid launch.

Do not make legal promises about future cancellation/refund mechanics that have not been approved. Statutory consumer rights always take precedence over website wording.

The UK subscription-contract regime is changing. Terms and checkout must be re-reviewed against the law actually in force when paid subscriptions open.

---

## Domains and deployment

Primary/canonical domain: **shieldwallgames.co.uk**.

Other owned domains may redirect to it.

The current pre-launch site deploys through GitHub Pages on pushes to `main`.

GitHub Pages should not be treated as the permanent commercial SaaS/download/account infrastructure. Before paid launch, migrate or confirm the intended production hosting/download architecture.

---

## Social media

- Facebook: `https://www.facebook.com/share/18PW3HCR6m/`
- Instagram: `https://www.instagram.com/shieldwall_games`
- YouTube: `https://youtube.com/@shieldwallgames`
- Twitter/X: `https://twitter.com/ShieldwallG`

---

## Files to review after any material Mimir commercial change

Always check these together:

1. `mimir/index.html`
2. `mimir/features.html`
3. `mimir/data/features.json`
4. `mimir/roadmap.html`
5. `mimir/roadmap-data.json`
4. `privacy.html`
5. `terms.html`
6. `README.md`
7. `CLAUDE.md`

Older reference files under `Mimir Design System/` are retained historical/design material. They may contain obsolete commercial copy and must not override the live files or this brief.

---

## Pre-launch checklist relevant to current commercial work

- [ ] Finish competitor migration/imports
- [ ] Finish Proving Grounds
- [ ] Finish collaboration and hosting
- [ ] Benchmark real AI workloads and confirm credit allowances
- [ ] Load-test hosted allowances
- [ ] Finalise production account/auth database
- [ ] Finalise AI broker
- [ ] Finalise payment/subscription flow
- [ ] Finalise hosted storage/realtime architecture
- [ ] Update privacy policy with real subprocessors and retention
- [ ] Re-review terms/checkout against then-current UK subscription law
- [ ] Confirm hosted downgrade/grace/archive rules
- [ ] Move installer/download delivery to intended commercial storage/CDN
- [ ] Review replacement of GitHub Pages for commercial operation
- [ ] Create final OG images
- [ ] Verify MailerLite forms and subscription communications

---

*Last updated: 10 August 2026. Human owner: Shieldwall Games Ltd.*
