// Builds the website's legal and support pages from the Mimir app repo's drafts
// (docs/legal/*.md, docs/website/support.md). Reads the app repo, never writes to it.
//   cd <app repo> && npx tsx <website>/tools/build-legal-pages.ts
// Set MIMIR_APP_REPO and SITE_DIR if the checkouts are not at the default paths.
import * as fs from 'node:fs';

const APP = process.env.MIMIR_APP_REPO ?? '/home/user/lorekeeper';
const SITE = process.env.SITE_DIR ?? '/home/user/ShieldwalllGames';
const DATE = process.env.LEGAL_DATE ?? '29 October 2026';
const COMPANY_NUMBER = '12655497';
const OFFICE = '17 Chichester Road, Sandgate, Folkestone, Kent, CT20 3BN, United Kingdom';

type Fix = [string | RegExp, string];

const COMMON: Fix[] = [
  [/^> \*\*DRAFT – needs legal review\.\*\*.*\n\n?/m, ''],
  [/<!--[\s\S]*?-->\n*/g, ''],
  ['[[DATE OF PUBLICATION]]', DATE],
  ['[[COMPANY NUMBER]]', COMPANY_NUMBER],
  ['[[REGISTERED OFFICE ADDRESS]]', OFFICE],
  [/ ?\[\[LEGAL:[^\]]*\]\]/g, ''],
  ['not your whole lorebible', 'not your whole world'],
  ['answers from your own lorebible', 'answers from your own world'],
  [/\*\*shieldwallgames\.co\.uk\/subprocessors\.html\*\*/g, '[our Subprocessors page](https://shieldwallgames.co.uk/subprocessors.html)'],
  [/\*\*shieldwallgames\.co\.uk\/refunds\.html\*\*/g, '[our Refund Policy](https://shieldwallgames.co.uk/refunds.html)'],
  ['The full policy is at shieldwallgames.co.uk/refunds.html.', 'The full policy is in our [Refund Policy](https://shieldwallgames.co.uk/refunds.html).'],
];

const PAGES: Array<{ src: string; out: string; title: string; desc: string; fixes: Fix[]; append?: string }> = [
  {
    src: 'docs/legal/privacy-policy.md', out: 'privacy.html', title: 'Privacy Policy',
    desc: 'How Shieldwall Games handles your data in the Mimir app, your Mimir account and our website.',
    fixes: [
      [' ICO registration number: [[ICO REGISTRATION NUMBER]].', ''],
      ['your account, Mimir AI, the Marketplace, collaboration, hosted Campaigns or Proving Grounds.', 'your account, Mimir AI, the Marketplace, desktop and phone sync, collaboration, hosted Campaigns or Proving Grounds.'],
      ['### 2.4 Collaboration, hosted Campaigns and Proving Grounds\n\nIf you choose to host or join a shared world, the content, the member list, roles and changes needed for it are stored online. Your other worlds stay local.',
        '### 2.4 Sync, collaboration, hosted Campaigns and Proving Grounds\n\nIf you choose to host or join a shared world, the content, the member list, roles and changes needed for it are stored online. If you turn on desktop and phone sync, the worlds you sync are kept with your account so your devices can exchange changes. Your other worlds stay local.'],
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
    desc: 'The terms for the Mimir app, your Mimir account, Mimir\'s online services and purchases from Shieldwall Games.',
    fixes: [
      ['While you are offline, the paid features your plan includes keep working for as long as you stay offline. When you reconnect, Mimir checks your plan again, and any change to it, such as a cancelled subscription, then takes effect.',
        'While you are offline, the paid features your plan includes keep working for up to 7 days from the last time Mimir checked your plan. Connect once within those 7 days to keep them working. When you reconnect, Mimir checks your plan again, and any change to it, such as a cancelled subscription, then takes effect.'],
      ['unlimited local worlds and entries, standard tools, import, export, and a monthly Mimir AI allowance.',
        'unlimited local worlds and entries, the full local toolset, import and export. Every account gets 200 Mimir AI welcome credits once; paid plans add a monthly allowance, and credit bundles can be bought on any plan.'],
      ['a Founder badge, 35% extra CORE monthly AI credits, and 10% off Shieldwall content packs and collections.',
        'a Founder badge, 25% extra credits on every Mimir AI credit bundle, 5% extra monthly credits on any paid plan, and 10% off Shieldwall content packs and collections. The perks are applied automatically.'],
    ],
  },
  {
    src: 'docs/legal/subprocessors.md', out: 'subprocessors.html', title: 'Subprocessors',
    desc: 'The providers Shieldwall Games uses to run Mimir, what each handles and where.',
    fixes: [
      ['European Union (Germany) [[CONFIRM region]]', 'European Union (Germany)'],
      ['| When you email us | [[CONFIRM]] |', '| When you email us | United States and other countries |'],
      [/ \[\[CONFIRM\]\]/g, ''],
    ],
  },
  { src: 'docs/legal/refund-policy.md', out: 'refunds.html', title: 'Refund Policy', desc: 'Our 14-day, no-questions refund promise for Mimir plans, content packs, collections and credit bundles.', fixes: [] },
  {
    src: 'docs/legal/eula.md', out: 'eula.html', title: 'Licence (EULA)', desc: 'The end-user licence agreement for the Mimir desktop application.',
    fixes: [['[[VERSION / DATE]]', '1.0, ' + DATE]],
  },
  {
    src: 'docs/website/support.md', out: 'support.html', title: 'Mimir support', desc: 'How to reach Shieldwall Games for Mimir help, billing, refunds and account questions.',
    fixes: [
      [' [[Remove this answer once the Windows installer is code-signed (lane 16).]]', ''],
      ['including your plan\'s paid features, for as long as you stay offline. Mimir checks your plan again when you reconnect.',
        'including your plan\'s paid features for up to 7 days from the last time Mimir checked your plan. Connect once within those 7 days to keep paid features working.'],
      ['https://shieldwallgames.co.uk/download.html', 'https://shieldwallgames.co.uk/mimir/download.html'],
    ],
  },
];

const COOKIE_FIXES: Fix[] = [
  [/^# Cookie Notice\n\n\*\*Last updated:\*\*[^\n]*\n/m, '## Cookie Notice {#cookies}\n'],
  [' [[CONFIRM: list MailerLite\'s cookies after the check in README "Before publishing", step 4.]]', ' See MailerLite\'s own cookie policy for the details.'],
  [/^## (The website|The Mimir app|The service emails we send)$/gm, '### $1'],
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

function shell(title: string, desc: string, out: string, body: string): string {
  const url = 'https://shieldwallgames.co.uk/' + out;
  const full = `${title} | Shieldwall Games`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#1a1714" />

  <title>${full}</title>
  <meta name="description" content="${desc}" />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="${full}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${url}" />
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
</head>

<body>

<div class="sw-page">

  <a href="#main-content" class="skip-link">Skip to main content</a>

  <nav class="sw-nav">
    <div class="sw-wrap sw-nav-inner">
      <a class="sw-brand" href="./">Shieldwall Games<small>est. 2020 &middot; Kent</small></a>
      <div class="sw-nav-links">
        <a href="./">Home</a>
        <a href="mimir/">Mimir</a>
        <a href="ashborn/">Ashborn</a>
      </div>
      <button class="sw-hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="sw-drawer" type="button">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="sw-drawer" id="sw-drawer">
      <a href="./">Home</a>
      <a href="mimir/">Mimir</a>
      <a href="ashborn/">Ashborn</a>
    </div>
  </nav>

  <main id="main-content">

  <section class="sw-section">
    <div class="sw-wrap sw-wrap--narrow sw-legal">
${body}
    </div>
  </section>

  </main>

  <footer class="sw-footer">
    <div class="sw-wrap sw-footer-simple">
      <span>&copy; <script>document.write(new Date().getFullYear())</script> Shieldwall Games Ltd. All rights reserved.</span>
      <span class="footer-nav">
        <a href="mimir/">Mimir</a>
        <a href="support.html">Support</a>
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="refunds.html">Refunds</a>
        <a href="subprocessors.html">Subprocessors</a>
        <a href="eula.html">Licence</a>
        <a href="#" data-cookie-settings>Cookie settings</a>
      </span>
    </div>
  </footer>

</div>

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
  html = html.replace(/<h1>/, '<h1 class="sw-section-h2">');
  html = html.replace(/<p><strong>(Last updated|Version):<\/strong> ([^<]*)<\/p>/, '<p class="sw-legal-date">$1: $2</p>');
  html = html.replace(/<h2>Cookie Notice \{#cookies\}<\/h2>/, '<h2 id="cookies">Cookie Notice</h2>');
  html = siteLinks(html);
  fs.writeFileSync(`${SITE}/${page.out}`, shell(page.title, page.desc, page.out, html));
  console.log('wrote', page.out);
}
}

main().catch((error) => { console.error(error); process.exit(1); });
