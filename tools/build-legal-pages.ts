// Builds the website's legal and support pages from the Vitus app repo's drafts
// (docs/legal/*.md, docs/website/support.md). Reads the app repo, never writes to it.
//   cd <app repo> && npx tsx <website>/tools/build-legal-pages.ts
// Set MIMIR_APP_REPO and SITE_DIR if the checkouts are not at the default paths.
import * as fs from 'node:fs';

const APP = process.env.MIMIR_APP_REPO ?? '/home/user/lorekeeper';
const SITE = process.env.SITE_DIR ?? '/home/user/ShieldwalllGames';
const DATE = process.env.LEGAL_DATE ?? '15 November 2026';
const COMPANY_NUMBER = '12655497';
const OFFICE = '17 Chichester Road, Sandgate, Folkestone, Kent, CT20 3BN, United Kingdom';
// ICO data protection register reference (public). Never publish the ICO security number.
const ICO_REGISTRATION = 'ZC303122';

type Fix = [string | RegExp, string];

const COMMON: Fix[] = [
  [/^> \*\*DRAFT – needs legal review\.\*\*.*\n\n?/m, ''],
  [/<!--[\s\S]*?-->\n*/g, ''],
  ['[[DATE OF PUBLICATION]]', DATE],
  ['[[COMPANY NUMBER]]', COMPANY_NUMBER],
  ['[[REGISTERED OFFICE ADDRESS]]', OFFICE],
  ['[[ICO REGISTRATION NUMBER]]', ICO_REGISTRATION],
  [/ ?\[\[LEGAL:[^\]]*\]\]/g, ''],
  ['not your whole lorebible', 'not your whole world'],
  ['answers from your own lorebible', 'answers from your own world'],
  [/Shield Wall Games/g, 'Shieldwall Games'],
  [/\*\*shieldwallgames\.co\.uk\/subprocessors\.html\*\*/g, '[our Subprocessors page](https://shieldwallgames.co.uk/subprocessors.html)'],
  [/\*\*shieldwallgames\.co\.uk\/refunds\.html\*\*/g, '[our Refund Policy](https://shieldwallgames.co.uk/refunds.html)'],
  [/^Vitus was previously called [^\n]*\n\n?/m, ''],
  ['The full policy is at shieldwallgames.co.uk/refunds.html.', 'The full policy is in our [Refund Policy](https://shieldwallgames.co.uk/refunds.html).'],
];

const PAGES: Array<{ src: string; out: string; title: string; desc: string; fixes: Fix[]; append?: string }> = [
  {
    src: 'docs/legal/privacy-policy.md', out: 'privacy.html', title: 'Privacy Policy',
    desc: 'How Shieldwall Games handles your data in the Vitus app, your Vitus account and our website.',
    fixes: [
      // The company is the controller in law; the owner asked to be named as the responsible person (17 Nov 2026).
      ['is the data controller. ICO registration number', 'is the data controller, and Alex Goldsmith is the person responsible for data protection. ICO registration number'],
      // Rebuilt from the current drafts on 20 Nov 2026: picture generation (OpenAI) is on hold and removed.
      [`**Last updated:** ${DATE}`, '**Last updated:** 20 November 2026'],
      ['Our website is hosted by GitHub Pages.', 'Our websites, shieldwallgames.co.uk and brothervitus.co.uk, are hosted by GitHub Pages.'],
      ['| GitHub | Our website (GitHub Pages) |', '| GitHub | Our websites (GitHub Pages) |'],
      // Desktop and phone sync: the drafts cover it themselves now (section 2.12), so no fix is needed here.
      ['Global network; [[CONFIRM]]', 'Global network'],
      ['European Union (Germany) [[CONFIRM region chosen]]', 'European Union (Germany)'],
      ['| Google Workspace | Our support inbox | [[CONFIRM]] |', '| Google Workspace | Our support inbox | United States and other countries |'],
      ['[[CONFIRM: suggest 2 years after the last message]]', '2 years after the last message.'],
      ['See our cookie notice.', 'See the [Cookie Notice](https://shieldwallgames.co.uk/privacy.html#cookies) below.'],
    ],
    append: 'docs/legal/cookie-notice.md',
  },
  {
    src: 'docs/legal/terms-of-service.md', out: 'terms.html', title: 'Terms of Service',
    desc: 'The terms for the Vitus app, your Vitus account, Vitus\'s online services and purchases from Shieldwall Games.',
    fixes: [
      ['While you are offline, the paid features your plan includes keep working for as long as you stay offline. When you reconnect, Vitus checks your plan again, and any change to it, such as a cancelled subscription, then takes effect.',
        'While you are offline, the paid features your plan includes keep working for up to 7 days from the last time Vitus checked your plan. Connect once within those 7 days to keep them working. When you reconnect, Vitus checks your plan again, and any change to it, such as a cancelled subscription, then takes effect.'],
      ['unlimited local worlds and entries, standard tools, import, export, and a monthly Vitus AI allowance.',
        'unlimited local worlds and entries, the full local toolset, import and export. Every account gets 200 Vitus AI welcome credits once; paid plans add a monthly allowance, and credit bundles can be bought on any plan.'],
      ['a Founder badge, 35% extra CORE monthly AI credits, and 10% off Shieldwall content packs and collections.',
        'a Founder badge, 25% extra credits on every Vitus AI credit bundle, 5% extra monthly credits on any paid plan, and 10% off Shieldwall content packs and collections. The perks are applied automatically.'],
    ],
  },
  {
    src: 'docs/legal/subprocessors.md', out: 'subprocessors.html', title: 'Subprocessors',
    desc: 'The providers Shieldwall Games uses to run Vitus, what each handles and where.',
    fixes: [
      [`**Last updated:** ${DATE}`, '**Last updated:** 20 November 2026'],
      ['European Union (Germany) [[CONFIRM region]]', 'European Union (Germany)'],
      ['| Our website | IP address in server logs | When you visit shieldwallgames.co.uk |', '| Our websites | IP address in server logs | When you visit shieldwallgames.co.uk or brothervitus.co.uk |'],
      ['| When you email us | [[CONFIRM]] |', '| When you email us | United States and other countries |'],
      [/ \[\[CONFIRM\]\]/g, ''],
    ],
  },
  { src: 'docs/legal/refund-policy.md', out: 'refunds.html', title: 'Refund Policy', desc: 'Our 14-day, no-questions refund promise for Vitus plans, content packs, collections and credit bundles.', fixes: [] },
  {
    src: 'docs/legal/eula.md', out: 'eula.html', title: 'Licence (EULA)', desc: 'The end-user licence agreement for the Vitus desktop application.',
    fixes: [['[[VERSION / DATE]]', '1.0, ' + DATE]],
  },
  {
    src: 'docs/website/support.md', out: 'support.html', title: 'Vitus support', desc: 'How to reach Shieldwall Games for Vitus help, billing, refunds and account questions.',
    fixes: [
      [' [[Remove this answer once the Windows installer is code-signed (lane 16).]]', ''],
      ['including your plan\'s paid features, for as long as you stay offline. Vitus checks your plan again when you reconnect.',
        'including your plan\'s paid features for up to 7 days from the last time Vitus checked your plan. Connect once within those 7 days to keep paid features working.'],
      ['https://shieldwallgames.co.uk/download.html', 'https://brothervitus.co.uk/download.html'],
    ],
  },
];

const COOKIE_FIXES: Fix[] = [
  ['Our website, shieldwallgames.co.uk, is hosted on GitHub Pages.', 'Our websites, shieldwallgames.co.uk and brothervitus.co.uk (the Vitus site), are hosted on GitHub Pages.'],
  [/^# Cookie Notice\n\n\*\*Last updated:\*\*[^\n]*\n/m, '## Cookie Notice {#cookies}\n'],
  [' [[CONFIRM: list MailerLite\'s cookies after the check in README "Before publishing", step 4.]]', ' See MailerLite\'s own cookie policy for the details.'],
  [/^## (The website|The Vitus app|The service emails we send)$/gm, '### $1'],
];

function apply(text: string, fixes: Fix[]): string {
  for (const [a, b] of fixes) {
    if (typeof a === 'string') {
      if (!text.includes(a)) throw new Error('Not found: ' + a.slice(0, 80));
      text = text.split(a).join(b);
    } else {
      text = text.replace(a, b);
    }
  }
  return text;
}


// Site header, footer and artwork band, matching the Stage 10B homepage (index.html).
const SITE_HEADER = `<header class="hm-header">
  <nav class="hm-wrap hm-nav" aria-label="Main">
    <a class="hm-brand" href="./" aria-label="Shieldwall Games home">
      <img class="hm-brand__mark" src="assets/logos/shieldwall-mark-light-96.webp" width="48" height="48" alt="" />
      <span class="hm-brand__text">
        <span class="hm-brand__name">Shieldwall Games</span>
        <span class="hm-brand__tag">One world &middot; many games</span>
      </span>
    </a>
    <div class="hm-nav__links">
      <a href="./#studio">Studio</a>
      <a href="https://brothervitus.co.uk/">Vitus</a>
      <a href="ashborn/">Ashborn</a>
      <a href="./#roadmap">Roadmap</a>
      <a href="./#newsletter" class="hm-nav__cta">Newsletter</a>
    </div>
    <button class="sw-hamburger hm-hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="hm-drawer" type="button">
      <span></span><span></span><span></span>
    </button>
    <div class="sw-drawer hm-drawer" id="hm-drawer">
      <a href="./">Home</a>
      <a href="https://brothervitus.co.uk/">Vitus</a>
      <a href="ashborn/">Ashborn</a>
      <a href="./#roadmap">Roadmap</a>
      <a href="./#newsletter">Newsletter</a>
    </div>
  </nav>
</header>`;

const PAGE_SCENE = `<div class="hm-scene hm-scene--page" aria-hidden="true">
      <picture>
        <source type="image/avif" srcset="assets/images/landscapes/newsletter-640.avif 640w, assets/images/landscapes/newsletter-1024.avif 1024w, assets/images/landscapes/newsletter-1600.avif 1600w" sizes="100vw" />
        <img src="assets/images/landscapes/newsletter-1600.webp" alt="" width="1600" height="900" decoding="async" />
      </picture>
    </div>`;

const SITE_FOOTER = `<footer class="hm-footer">
  <div class="hm-wrap hm-footer__bottom hm-footer__bottom--solo">
    <p>&copy; <span data-year>2026</span> Shieldwall Games Ltd &middot; Registered in England and Wales, company number 12655497 &middot; Kent, UK</p>
    <nav class="footer-nav" aria-label="Footer">
      <a href="https://brothervitus.co.uk/">Vitus</a>
      <a href="ashborn/">Ashborn</a>
      <a href="support.html">Support</a>
      <a href="privacy.html">Privacy</a>
      <a href="terms.html">Terms</a>
      <a href="refunds.html">Refunds</a>
      <a href="subprocessors.html">Subprocessors</a>
      <a href="eula.html">Licence</a>
      <a href="#" data-cookie-settings>Cookie settings</a>
    </nav>
  </div>
</footer>`;

function shell(title: string, desc: string, out: string, body: string): string {
  const url = 'https://shieldwallgames.co.uk/' + out;
  const full = `${title} | Shieldwall Games`;
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://assets.mailerlite.com https://groot.mailerlite.com https://static.mailerlite.com https://assets.mlcdn.com https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://assets.mailerlite.com https://assets.mlcdn.com https://fonts.mailerlite.com; font-src 'self' https://fonts.mailerlite.com https://assets.mlcdn.com; img-src 'self' data: https://storage.mlcdn.com https://assets.mlcdn.com https://assets.mailerlite.com; media-src 'self'; connect-src 'self' https://assets.mailerlite.com https://groot.mailerlite.com https://connect.mailerlite.com; frame-src https://www.google.com https://assets.mailerlite.com; form-action 'self' https://assets.mailerlite.com; base-uri 'self'; object-src 'none'; upgrade-insecure-requests" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0c0f13" />

  <title>${full}</title>
  <meta name="description" content="${desc}" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Shieldwall Games" />
  <meta property="og:locale" content="en_GB" />
  <meta property="og:title" content="${full}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="https://shieldwallgames.co.uk/assets/og/shieldwall.jpg" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${full}" />
  <meta name="twitter:description" content="${desc}" />

  <link rel="icon" type="image/png" sizes="192x192" href="assets/icons/favicon-192.png" />
  <link rel="icon" type="image/png" sizes="512x512" href="assets/icons/favicon-512.png" />
  <link rel="icon" href="assets/icons/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="assets/icons/favicon-192.png" />
  <link rel="canonical" href="${url}" />

  <link rel="stylesheet" href="styles/main.css" />
  <link rel="stylesheet" href="styles/shieldwall.css" />
  <link rel="stylesheet" href="styles/home.css" />
</head>

<body class="hm hm-sub">

<a href="#main-content" class="skip-link">Skip to main content</a>

${SITE_HEADER}

<main id="main-content">

  <section class="hm-page">
    ${PAGE_SCENE}
    <div class="hm-wrap hm-wrap--narrow sw-legal">
${body}
    </div>
  </section>

</main>

${SITE_FOOTER}

<script src="scripts/main.js" defer></script>
<script src="scripts/consent.js" defer></script>
</body>
</html>
`;
}

function siteLinks(html: string): string {
  // Make absolute links to our own pages relative, so they work on any host.
  return html.replace(/href="https:\/\/shieldwallgames\.co\.uk\/([^"]*)"/g, 'href="$1"');
}

async function main(): Promise<void> {
const { markdownToHtml } = await import(`${APP}/scripts/legal/buildLegalPages.ts`);
for (const page of PAGES) {
  let md = fs.readFileSync(`${APP}/${page.src}`, 'utf8');
  md = apply(md, COMMON.filter(([a]) => typeof a !== 'string' || md.includes(a)));
  md = apply(md, page.fixes);
  if (page.append) {
    let extra = fs.readFileSync(`${APP}/${page.append}`, 'utf8');
    extra = apply(extra, COMMON.filter(([a]) => typeof a !== 'string' || extra.includes(a)));
    extra = apply(extra, COOKIE_FIXES);
    md = md.trimEnd() + '\n\n' + extra;
  }
  const left = md.match(/\[\[[^\]]*\]\]/g);
  if (left) throw new Error(`${page.out}: placeholders left: ${left.join(', ')}`);
  let html = markdownToHtml(md);
  // Wide tables scroll sideways on phones; tabindex lets keyboard users scroll them too (WCAG 2.1.1).
  html = html.replace(/<table>/g, '<table tabindex="0">');
  html = html.replace(/<h1>/, '<h1 class="sw-section-h2">');
  html = html.replace(/<p><strong>(Last updated|Version):<\/strong> ([^<]*)<\/p>/, '<p class="sw-legal-date">$1: $2</p>');
  html = html.replace(/<h2>Cookie Notice \{#cookies\}<\/h2>/, '<h2 id="cookies">Cookie Notice</h2>');
  html = siteLinks(html);
  fs.writeFileSync(`${SITE}/${page.out}`, shell(page.title, page.desc, page.out, html));
  console.log('wrote', page.out);
}
}

main().catch((error) => { console.error(error); process.exit(1); });
