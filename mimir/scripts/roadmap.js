/*
 * roadmap.js — Progressive enhancement for the carved Mimir roadmap.
 *
 * The semantic roadmap remains visible without this file. The JSON source adds
 * richer detail panels, related-feature navigation and current metadata.
 */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        enhanceRoadmap();
    });

    function enhanceRoadmap() {
        var dialog = document.getElementById('roadmap-detail');
        var closeButton = dialog ? dialog.querySelector('.rm-dialog-close') : null;
        var lastFocused = null;
        var featureIndex = new Map();
        var statusIndex = new Map();
        var phaseIndex = new Map();

        fetch('roadmap-data.json', { cache: 'no-cache' })
            .then(function (response) {
                if (!response.ok) throw new Error('Roadmap data returned ' + response.status);
                return response.json();
            })
            .then(function (data) {
                if (!data || !Array.isArray(data.phases) || !Array.isArray(data.statusDefinitions)) {
                    throw new Error('Roadmap data schema is invalid');
                }

                data.statusDefinitions.forEach(function (status) {
                    statusIndex.set(status.id, status);
                });

                data.phases.forEach(function (phase) {
                    phaseIndex.set(phase.id, phase);
                    phase.features.forEach(function (feature) {
                        featureIndex.set(feature.id, {
                            feature: feature,
                            phase: phase
                        });
                    });
                });

                updateLastUpdated(data.lastUpdated);
                wireFeatureButtons();
                openHashFeature();
            })
            .catch(function (error) {
                /*
                 * The generated semantic snapshot is intentionally left intact.
                 * A data failure removes only the optional detail interaction.
                 */
                console.warn('Roadmap enhancement unavailable:', error);
                document.documentElement.classList.add('rm-data-fallback');
            });

        function wireFeatureButtons() {
            document.querySelectorAll('[data-feature-open]').forEach(function (button) {
                var id = button.getAttribute('data-feature-open');
                if (!featureIndex.has(id)) return;
                button.removeAttribute('hidden');
                button.addEventListener('click', function () {
                    openFeature(id, button);
                });
            });
        }

        function openHashFeature() {
            var hash = window.location.hash.slice(1);
            if (hash.indexOf('feature-') !== 0) return;
            var id = hash.replace(/^feature-/, '');
            var card = document.getElementById('feature-' + id);
            if (!featureIndex.has(id) || !card) return;
            card.scrollIntoView({ block: 'center' });
            openFeature(id, card.querySelector('[data-feature-open]'));
        }

        function openFeature(id, trigger) {
            if (!dialog) return;
            var record = featureIndex.get(id);
            if (!record) return;

            var feature = record.feature;
            var phase = record.phase;
            var status = statusIndex.get(feature.status);
            var chapter = Array.isArray(window.MIMIR_WELL_CHAPTERS)
                ? window.MIMIR_WELL_CHAPTERS.find(function (item) { return item.key === phase.id; })
                : null;

            lastFocused = trigger || document.activeElement;
            dialog.style.setProperty('--dialog-accent', chapter ? chapter.accent : '#668FB5');
            setText('roadmap-detail-phase', phase.eyebrow + ' · ' + phase.title);
            setText('roadmap-detail-title', feature.name);
            setText('roadmap-detail-copy', feature.detail);
            setText('roadmap-detail-why', feature.whyItMatters);

            var statusMount = document.getElementById('roadmap-detail-status');
            if (statusMount) {
                statusMount.textContent = '';
                statusMount.appendChild(makeStatus(feature.status, status ? status.label : feature.status));
            }

            renderMedia(feature);
            renderRelated(feature);
            renderDeepDive(feature);

            if (typeof dialog.showModal === 'function') {
                if (!dialog.open) dialog.showModal();
            } else {
                dialog.setAttribute('open', '');
                dialog.setAttribute('role', 'dialog');
                dialog.setAttribute('aria-modal', 'true');
            }

            emitRoadmapEvent('mimir_roadmap_feature_open', {
                feature: feature.id,
                phase: phase.id,
                status: feature.status
            });
        }

        function renderMedia(feature) {
            var mount = document.getElementById('roadmap-detail-media');
            if (!mount) return;
            var copy = mount.querySelector('p');
            if (feature.mediaSlot) {
                if (copy) copy.textContent = feature.mediaSlot + '. No screenshot or video has been fabricated.';
                mount.removeAttribute('hidden');
            } else {
                mount.setAttribute('hidden', '');
            }
        }

        function renderRelated(feature) {
            var mount = document.getElementById('roadmap-detail-related');
            if (!mount) return;
            var list = mount.querySelector('div');
            list.textContent = '';

            var related = (feature.relatedFeatures || [])
                .map(function (id) { return featureIndex.get(id); })
                .filter(Boolean);

            if (!related.length) {
                mount.setAttribute('hidden', '');
                return;
            }

            related.forEach(function (record) {
                var button = document.createElement('button');
                button.className = 'rm-related-link';
                button.type = 'button';
                button.textContent = record.feature.name;
                button.addEventListener('click', function () {
                    openFeature(record.feature.id, lastFocused);
                });
                list.appendChild(button);
            });
            mount.removeAttribute('hidden');
        }

        function renderDeepDive(feature) {
            var mount = document.getElementById('roadmap-detail-deep-dive');
            if (!mount) return;
            mount.textContent = '';
            if (!feature.deepDive || !feature.deepDive.enabled) {
                mount.setAttribute('hidden', '');
                return;
            }
            var link = document.createElement('a');
            link.className = 'ms-btn-secondary';
            link.href = feature.deepDive.url;
            link.textContent = feature.deepDive.label;
            mount.appendChild(link);
            mount.removeAttribute('hidden');
        }

        function closeDialog() {
            if (!dialog || !dialog.open) return;
            if (typeof dialog.close === 'function') dialog.close();
            else dialog.removeAttribute('open');
        }

        if (closeButton) {
            closeButton.addEventListener('click', closeDialog);
        }

        if (dialog) {
            dialog.addEventListener('click', function (event) {
                if (event.target === dialog) closeDialog();
            });
            dialog.addEventListener('close', function () {
                if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
                lastFocused = null;
            });
        }
    }

    function makeStatus(id, label) {
        var status = document.createElement('span');
        var marker = document.createElement('i');
        status.className = 'rm-status rm-status--' + id;
        marker.setAttribute('aria-hidden', 'true');
        status.appendChild(marker);
        status.appendChild(document.createTextNode(label));
        return status;
    }

    function setText(id, value) {
        var element = document.getElementById(id);
        if (element) element.textContent = value || '';
    }

    function updateLastUpdated(dateValue) {
        var element = document.getElementById('roadmap-last-updated');
        if (!element || !dateValue) return;
        var parsed = new Date(dateValue + 'T12:00:00');
        if (Number.isNaN(parsed.getTime())) return;
        element.textContent = 'Updated ' + parsed.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }

    function emitRoadmapEvent(name, detail) {
        window.dispatchEvent(new CustomEvent('mimir:analytics', {
            detail: {
                event: name,
                parameters: detail || {}
            }
        }));

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push(Object.assign({ event: name }, detail || {}));
        }
    }
}());
