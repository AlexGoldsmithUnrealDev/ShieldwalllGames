#!/usr/bin/env node
/*
 * Authoring helper for the progressively enhanced roadmap.
 *
 * roadmap-data.json remains the primary content source. This script writes a
 * complete semantic snapshot into roadmap.html so search engines, assistive
 * technology and visitors without JavaScript still receive the full roadmap.
 * The browser script only enhances this snapshot with the detail dialog.
 */
'use strict';

var fs = require('fs');
var path = require('path');

var mimirDir = path.resolve(__dirname, '..');
var dataPath = path.join(mimirDir, 'roadmap-data.json');
var htmlPath = path.join(mimirDir, 'roadmap.html');
var START = '    <!-- ROADMAP_STATIC_START -->';
var END = '    <!-- ROADMAP_STATIC_END -->';

function escapeHtml(value) {
    return String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function statusMarkup(status, definitions) {
    var definition = definitions.find(function (item) { return item.id === status; });
    var label = definition ? definition.label : status;
    return '<span class="rm-status rm-status--' + escapeHtml(status) + '">' +
        '<i aria-hidden="true"></i>' + escapeHtml(label) + '</span>';
}

function countMarkup(features, definitions) {
    return definitions.map(function (definition) {
        var count = features.filter(function (feature) { return feature.status === definition.id; }).length;
        if (!count) return '';
        return '<span><strong>' + count + '</strong> ' + escapeHtml(definition.shortLabel.toLowerCase()) + '</span>';
    }).filter(Boolean).join('');
}

function featureMarkup(feature, definitions) {
    var badge = feature.badge
        ? '<span class="rm-feature-badge">' + escapeHtml(feature.badge) + '</span>'
        : '';
    return [
        '          <article class="rm-feature rm-feature--' + escapeHtml(feature.status) + '" id="feature-' + escapeHtml(feature.id) + '" data-feature-id="' + escapeHtml(feature.id) + '">',
        '            <div class="rm-feature-rune" aria-hidden="true"><span></span></div>',
        '            <div class="rm-feature-top">',
        '              <span class="rm-feature-category">' + escapeHtml(feature.category) + '</span>',
        badge ? '              ' + badge : '',
        '            </div>',
        '            <h3>' + escapeHtml(feature.name) + '</h3>',
        '            ' + statusMarkup(feature.status, definitions),
        '            <p>' + escapeHtml(feature.shortDescription) + '</p>',
        '            <button class="rm-feature-open" type="button" data-feature-open="' + escapeHtml(feature.id) + '" aria-label="Explore ' + escapeHtml(feature.name) + '" hidden>Explore feature <span aria-hidden="true">→</span></button>',
        feature.deepDive && feature.deepDive.enabled ? '            <a class="rm-feature-deep-dive" href="' + escapeHtml(feature.deepDive.url) + '">' + escapeHtml(feature.deepDive.label) + ' <span aria-hidden="true">→</span></a>' : '',
        '          </article>'
    ].filter(Boolean).join('\n');
}

function phaseMarkup(phase, definitions) {
    var features = phase.features.map(function (feature) {
        return featureMarkup(feature, definitions);
    }).join('\n');
    var speculativeClass = phase.id === 'horizon' ? ' rm-phase--speculative' : '';
    return [
        '    <section class="rm-phase ms-chapter' + speculativeClass + '" id="' + escapeHtml(phase.id) + '" data-chapter="' + escapeHtml(phase.id) + '" data-snap-chapter aria-labelledby="' + escapeHtml(phase.id) + '-heading">',
        '      <div class="ms-wrap rm-phase-inner">',
        '        <header class="rm-phase-head">',
        '          <div class="rm-phase-index" aria-hidden="true">' + escapeHtml(phase.number) + '</div>',
        '          <div>',
        '            <span class="ms-eyebrow">' + escapeHtml(phase.eyebrow) + '</span>',
        '            <h2 id="' + escapeHtml(phase.id) + '-heading">' + escapeHtml(phase.title) + '</h2>',
        '            <p>' + escapeHtml(phase.summary) + '</p>',
        '          </div>',
        '          <div class="rm-phase-counts" aria-label="Feature status totals">' + countMarkup(phase.features, definitions) + '</div>',
        '        </header>',
        '        <p class="rm-phase-milestone"><span aria-hidden="true"></span>' + escapeHtml(phase.milestone) + '</p>',
        '        <div class="rm-feature-field" aria-label="' + escapeHtml(phase.title) + ' features">',
        '          <div class="rm-route" aria-hidden="true"><span></span></div>',
        features,
        '        </div>',
        '      </div>',
        '    </section>'
    ].join('\n');
}

var data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
var html = fs.readFileSync(htmlPath, 'utf8');
var startIndex = html.indexOf(START);
var endIndex = html.indexOf(END);

if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    throw new Error('Roadmap static markers were not found in roadmap.html');
}

var snapshot = data.phases.map(function (phase) {
    return phaseMarkup(phase, data.statusDefinitions);
}).join('\n\n');

var replacement = START + '\n' +
    '    <!-- Generated from roadmap-data.json. Do not edit this block by hand. -->\n' +
    snapshot + '\n' + END;

var nextHtml = html.slice(0, startIndex) + replacement + html.slice(endIndex + END.length);
fs.writeFileSync(htmlPath, nextHtml, 'utf8');
console.log('Generated semantic roadmap snapshot from roadmap-data.json');
