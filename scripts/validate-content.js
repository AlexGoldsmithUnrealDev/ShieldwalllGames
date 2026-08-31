// Product-truth validation for the public site (Task 4 closure).
//
//   node scripts/validate-content.js
//
// A maintenance check, not page JavaScript — plain Node built-ins,
// same convention as mimir/scripts/generate-*.js. It exists so the
// contradictions the Task 4 closure fixed cannot quietly return:
// retired tier spellings, a marketing/Terms disagreement about the
// current release phase, and "commerce does not exist" wording that
// is no longer true. Exits non-zero with a list of failures.

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const failures = [];

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf-8');
}

// Every customer-rendered page plus the two datasets the generated
// blocks are built from. The Design System archive is historical and
// deliberately excluded.
const RENDERED = [
  'index.html', 'privacy.html', 'terms.html', 'support.html', '404.html',
  'mimir/index.html', 'mimir/features.html', 'mimir/mimir-ai.html',
  'mimir/proving-grounds.html', 'mimir/migration.html', 'mimir/roadmap.html',
  'ashborn/index.html',
  'mimir/data/features.json', 'mimir/roadmap-data.json'
];

// ── 1. Canonical tier naming ──────────────────────────────
//
// Customer-facing tier names are CORE, APPRENTICE+, WORLDSMITH+ and
// LOREMASTER. The retired title-case spellings must not render.
// data-feature-search attributes are a lowercase search index, not
// rendered copy, so they are stripped before the scan.
for (const rel of RENDERED) {
  const body = read(rel).replace(/data-feature-search="[^"]*"/g, '');
  if (body.includes('Mimir Core')) {
    failures.push(`${rel}: retired tier name "Mimir Core"`);
  }
  const bare = body.match(/[^A-Za-z+-](Core|Apprentice|Worldsmith|Loremaster)[^A-Za-z+-]/);
  if (bare) {
    failures.push(`${rel}: retired title-case tier token "${bare[1]}"`);
  }
  const titledPlus = body.match(/\b(Apprentice|Worldsmith)\+/);
  if (titledPlus) {
    failures.push(`${rel}: title-case badge "${titledPlus[0]}" (canonical is uppercase)`);
  }
}

// The pricing cards carry exactly the four canonical names.
{
  const index = read('mimir/index.html');
  const names = [...index.matchAll(/class="ms-tier-name">([^<]+)</g)].map((m) => m[1]);
  const expected = ['CORE', 'APPRENTICE+', 'WORLDSMITH+', 'LOREMASTER'];
  if (names.join(',') !== expected.join(',')) {
    failures.push(`mimir/index.html: pricing cards are [${names.join(', ')}], expected [${expected.join(', ')}]`);
  }
  // CTA machine identifiers are lowercase ids, never display labels.
  for (const m of index.matchAll(/data-tier="([^"]+)"/g)) {
    if (!['core', 'apprentice', 'worldsmith', 'loremaster'].includes(m[1])) {
      failures.push(`mimir/index.html: data-tier="${m[1]}" is not a lowercase machine id`);
    }
  }
}

// ── 2. One release phase everywhere ───────────────────────
//
// Current truth: alpha, ahead of the public beta. Marketing and the
// legal pages must tell the same story.
{
  const marketing = read('mimir/index.html');
  const terms = read('terms.html');
  const support = read('support.html');
  if (!marketing.includes('currently in alpha')) {
    failures.push('mimir/index.html: no longer states the current alpha phase');
  }
  if (!terms.includes('currently in alpha')) {
    failures.push('terms.html: no longer states the current alpha phase');
  }
  if (/currently in beta|moving through its beta|currently moving through/.test(terms)) {
    failures.push('terms.html: claims beta is underway');
  }
  if (support.includes('during the beta')) {
    failures.push('support.html: claims beta is underway');
  }
  for (const rel of RENDERED) {
    if (read(rel).includes('currently in beta')) {
      failures.push(`${rel}: claims beta is underway`);
    }
  }
}

// ── 3. Implemented commerce vs publicly open checkout ─────
//
// The commerce implementation exists; what is not true is that the
// public checkout is open. The site must say the second thing and
// never the first.
{
  const index = read('mimir/index.html');
  if (!index.includes('public paid checkout is not open yet')) {
    failures.push('mimir/index.html: the checkout-status sentence is missing');
  }
  for (const rel of RENDERED) {
    const body = read(rel);
    for (const stale of [
      'paid checkout is not live',
      'payments are not implemented',
      'checkout does not exist',
      'planned V1 prices'
    ]) {
      if (body.includes(stale)) failures.push(`${rel}: stale wording "${stale}"`);
    }
  }
}

// ── 4. The legal destinations resolve ─────────────────────
for (const rel of RENDERED.filter((r) => r.endsWith('.html'))) {
  const base = path.dirname(rel);
  for (const m of read(rel).matchAll(/href="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|#|data:)/.test(url)) continue;
    const target = url.split('#')[0].split('?')[0];
    if (target.length === 0) continue;
    let p = path.normalize(path.join(base, target));
    if (target.endsWith('/')) p = path.join(p, 'index.html');
    if (!fs.existsSync(path.join(ROOT, p))) {
      failures.push(`${rel}: dead link ${url}`);
    }
  }
}
for (const page of ['privacy.html', 'terms.html', 'support.html']) {
  if (!fs.existsSync(path.join(ROOT, page))) {
    failures.push(`missing legal page ${page}`);
  }
}

// ── Verdict ───────────────────────────────────────────────
if (failures.length > 0) {
  console.error('validate-content: FAIL');
  for (const f of failures) console.error('  ✗ ' + f);
  process.exit(1);
}
console.log(`validate-content: OK (${RENDERED.length} files checked)`);
