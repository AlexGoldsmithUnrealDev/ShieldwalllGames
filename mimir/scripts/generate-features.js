#!/usr/bin/env node
/* Generate crawlable feature chapters from the presentation dataset. */
'use strict';

var fs = require('fs');
var path = require('path');
var mimirDir = path.resolve(__dirname, '..');
var dataPath = path.join(mimirDir, 'data', 'features.json');
var htmlPath = path.join(mimirDir, 'features.html');
var START = '    <!-- FEATURES_STATIC_START -->';
var END = '    <!-- FEATURES_STATIC_END -->';

function esc(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function featureMarkup(feature, tiers, statuses, index) {
    var tier = tiers.find(function (item) { return item.id === feature.tier; });
    var status = statuses.find(function (item) { return item.id === feature.status; });
    var search = [feature.name, feature.summary, feature.detail, tier && tier.label, status && status.label].join(' ').toLowerCase();
    return [
        '          <article class="ft-object ft-object--' + esc(feature.status) + (index === 0 ? ' ft-object--lead' : '') + '" id="feature-' + esc(feature.id) + '" data-feature-id="' + esc(feature.id) + '" data-feature-search="' + esc(search) + '">',
        '            <div class="ft-object-rune" aria-hidden="true"><span></span></div>',
        '            <div class="ft-object-meta"><span class="ft-tier">' + esc(tier ? tier.label : feature.tier) + '</span><span class="ft-state ft-state--' + esc(feature.status) + '"><i aria-hidden="true"></i>' + esc(status ? status.label : feature.status) + '</span></div>',
        '            <h3>' + esc(feature.name) + '</h3>',
        '            <p>' + esc(feature.summary) + '</p>',
        '            <button class="ft-object-open" type="button" data-feature-open="' + esc(feature.id) + '" aria-label="Explore ' + esc(feature.name) + '" hidden>More detail <span aria-hidden="true">→</span></button>',
        '          </article>'
    ].join('\n');
}

function mediaMarkup(category) {
    var media = [];
    category.features.forEach(function (feature) {
        if (feature.media && media.indexOf(feature.media) === -1) media.push(feature.media);
    });
    var limit = category.id === 'visualise' ? 3 : (category.id === 'understand' ? 2 : 1);
    media = media.slice(0, limit);
    if (!media.length) return '';
    return [
        '        <div class="ft-media-cluster ft-media-cluster--' + esc(category.id) + '" aria-label="Planned product media">',
        media.map(function (label, index) {
            return '          <figure class="ft-media-slot' + (index === 0 ? ' ft-media-slot--primary' : '') + '"><div aria-hidden="true"><span>Product capture</span><strong>' + esc(label) + '</strong></div><figcaption>' + esc(label) + ' screenshot slot</figcaption></figure>';
        }).join('\n'),
        '        </div>'
    ].join('\n');
}

function categoryMarkup(category, tiers, statuses) {
    return [
        '    <section class="ft-chapter ms-chapter ms-chapter--long" id="' + esc(category.id === 'write' ? 'write-plan' : category.id === 'own' ? 'own-protect' : category.id) + '" data-chapter="' + esc(category.id) + '" data-feature-category="' + esc(category.id) + '" data-snap-chapter aria-labelledby="' + esc(category.id) + '-heading">',
        '      <div class="ms-wrap ft-chapter-inner">',
        '        <header class="ft-chapter-head">',
        '          <span class="ft-chapter-number" aria-hidden="true">' + esc(category.number) + '</span>',
        '          <div><span class="ms-eyebrow">' + esc(category.label) + '</span><h2 id="' + esc(category.id) + '-heading">' + esc(category.title) + '</h2><p>' + esc(category.purpose) + '</p></div>',
        '        </header>',
        '        <p class="ft-chapter-intro">' + esc(category.intro) + '</p>',
        mediaMarkup(category),
        '        <div class="ft-object-field" aria-label="' + esc(category.label) + ' features">',
        category.features.map(function (feature, index) { return featureMarkup(feature, tiers, statuses, index); }).join('\n'),
        '        </div>',
        '      </div>',
        '    </section>'
    ].filter(Boolean).join('\n');
}

var data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
var html = fs.readFileSync(htmlPath, 'utf8');
var start = html.indexOf(START);
var end = html.indexOf(END);
if (start === -1 || end === -1 || end <= start) throw new Error('Feature static markers not found');

var snapshot = data.categories.map(function (category) {
    return categoryMarkup(category, data.tiers, data.statuses);
}).join('\n\n');
var replacement = START + '\n    <!-- Generated from data/features.json. Do not edit this block by hand. -->\n' + snapshot + '\n' + END;
fs.writeFileSync(htmlPath, html.slice(0, start) + replacement + html.slice(end + END.length), 'utf8');
console.log('Generated semantic feature snapshot from data/features.json');
