/* Progressive enhancement: search, category state and accessible details. */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        fetch('data/features.json', { cache: 'no-cache' })
            .then(function (response) {
                if (!response.ok) throw new Error('Feature data returned ' + response.status);
                return response.json();
            })
            .then(initFeatures)
            .catch(function (error) {
                console.warn('Feature enhancement unavailable:', error);
                document.documentElement.classList.add('ft-data-fallback');
            });
    });

    function initFeatures(data) {
        if (!data || !Array.isArray(data.categories) || !Array.isArray(data.tiers) || !Array.isArray(data.statuses)) throw new Error('Feature data schema is invalid');

        var featureIndex = new Map();
        var categoryIndex = new Map();
        var tierIndex = new Map(data.tiers.map(function (tier) { return [tier.id, tier]; }));
        var statusIndex = new Map(data.statuses.map(function (status) { return [status.id, status]; }));

        data.categories.forEach(function (category) {
            categoryIndex.set(category.id, category);
            category.features.forEach(function (feature) { featureIndex.set(feature.id, { feature: feature, category: category }); });
        });

        initCategoryState(categoryIndex);
        initSearch(featureIndex);
        initDialog(featureIndex, tierIndex, statusIndex);
    }

    function initCategoryState(categoryIndex) {
        var links = Array.prototype.slice.call(document.querySelectorAll('[data-category-link]'));
        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                var target = document.querySelector(link.getAttribute('href'));
                if (!target) return;
                event.preventDefault();
                target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
                history.pushState(null, '', link.getAttribute('href'));
            });
        });

        if (!('IntersectionObserver' in window)) return;
        var observer = new IntersectionObserver(function (entries) {
            var current = entries.filter(function (entry) { return entry.isIntersecting; })
                .sort(function (a, b) { return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top); })[0];
            if (!current) return;
            var id = current.target.getAttribute('data-feature-category');
            if (!categoryIndex.has(id)) return;
            links.forEach(function (link) { link.classList.toggle('is-active', link.dataset.categoryLink === id); });
        }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
        document.querySelectorAll('[data-feature-category]').forEach(function (section) { observer.observe(section); });
    }

    function initSearch(featureIndex) {
        var form = document.getElementById('feature-search');
        var input = document.getElementById('feature-query');
        var clear = document.getElementById('feature-search-clear');
        var status = document.getElementById('feature-search-status');
        if (!form || !input || !clear || !status) return;
        form.removeAttribute('hidden');

        function filter() {
            var query = input.value.trim().toLowerCase();
            var visible = 0;
            document.querySelectorAll('[data-feature-id]').forEach(function (card) {
                var match = !query || (card.dataset.featureSearch || '').indexOf(query) !== -1;
                card.toggleAttribute('hidden', !match);
                if (match) visible += 1;
            });
            document.querySelectorAll('[data-feature-category]').forEach(function (section) {
                var hasMatch = section.querySelector('[data-feature-id]:not([hidden])');
                section.toggleAttribute('hidden', Boolean(query) && !hasMatch);
            });
            clear.toggleAttribute('hidden', !query);
            status.textContent = query ? (visible + (visible === 1 ? ' feature found.' : ' features found.')) : (featureIndex.size + ' features across eight connected disciplines.');
        }

        input.addEventListener('input', filter);
        clear.addEventListener('click', function () { input.value = ''; filter(); input.focus(); });
        form.addEventListener('submit', function (event) { event.preventDefault(); });
        filter();
    }

    function initDialog(featureIndex, tierIndex, statusIndex) {
        var dialog = document.getElementById('feature-detail');
        var close = dialog ? dialog.querySelector('.ft-dialog-close') : null;
        var lastFocused = null;
        if (!dialog) return;

        document.querySelectorAll('[data-feature-open]').forEach(function (button) {
            if (!featureIndex.has(button.dataset.featureOpen)) return;
            button.removeAttribute('hidden');
            button.addEventListener('click', function () { openFeature(button.dataset.featureOpen, button); });
        });

        function openFeature(id, trigger) {
            var record = featureIndex.get(id);
            if (!record) return;
            var feature = record.feature;
            var category = record.category;
            var tier = tierIndex.get(feature.tier);
            var status = statusIndex.get(feature.status);
            var chapter = (window.MIMIR_WELL_CHAPTERS || []).find(function (item) { return item.key === category.id; });
            lastFocused = trigger || document.activeElement;
            dialog.style.setProperty('--dialog-accent', chapter ? chapter.accent : '#668FB5');
            setText('feature-detail-category', category.label + ' · ' + category.purpose);
            setText('feature-detail-title', feature.name);
            setText('feature-detail-summary', feature.summary);
            setText('feature-detail-copy', feature.detail);

            var meta = document.getElementById('feature-detail-meta');
            meta.textContent = '';
            meta.appendChild(makePill('ft-tier', tier ? tier.label : feature.tier));
            var state = makePill('ft-state ft-state--' + feature.status, status ? status.label : feature.status);
            var dot = document.createElement('i'); dot.setAttribute('aria-hidden', 'true'); state.insertBefore(dot, state.firstChild); meta.appendChild(state);

            var media = document.getElementById('feature-detail-media');
            if (feature.media) { media.querySelector('p').textContent = feature.media + '. This slot is ready for a real product screenshot or video; no interface has been fabricated.'; media.removeAttribute('hidden'); }
            else media.setAttribute('hidden', '');

            renderRelated(feature);
            renderDeepDive(feature);
            if (typeof dialog.showModal === 'function') dialog.showModal();
            else { dialog.setAttribute('open', ''); dialog.setAttribute('role', 'dialog'); dialog.setAttribute('aria-modal', 'true'); }
        }

        function renderRelated(feature) {
            var mount = document.getElementById('feature-detail-related');
            var list = mount.querySelector('div'); list.textContent = '';
            var related = (feature.related || []).map(function (id) { return featureIndex.get(id); }).filter(Boolean);
            if (!related.length) { mount.setAttribute('hidden', ''); return; }
            related.forEach(function (record) {
                var button = document.createElement('button'); button.type = 'button'; button.className = 'ft-related-link'; button.textContent = record.feature.name;
                button.addEventListener('click', function () { openFeature(record.feature.id, lastFocused); }); list.appendChild(button);
            });
            mount.removeAttribute('hidden');
        }

        function renderDeepDive(feature) {
            var mount = document.getElementById('feature-detail-deep-dive'); mount.textContent = '';
            if (!feature.deepDive) { mount.setAttribute('hidden', ''); return; }
            if (feature.deepDive.enabled) { var link = document.createElement('a'); link.className = 'ms-btn-secondary'; link.href = feature.deepDive.url; link.textContent = feature.deepDive.label; mount.appendChild(link); }
            else { var label = document.createElement('span'); label.className = 'ft-deep-dive-disabled'; label.textContent = feature.deepDive.label + ' · detailed guide coming later'; mount.appendChild(label); }
            mount.removeAttribute('hidden');
        }

        function closeDialog() { if (dialog.open && typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open'); }
        if (close) close.addEventListener('click', closeDialog);
        dialog.addEventListener('click', function (event) { if (event.target === dialog) closeDialog(); });
        dialog.addEventListener('close', function () { if (lastFocused && lastFocused.focus) lastFocused.focus(); lastFocused = null; });
    }

    function makePill(className, text) { var span = document.createElement('span'); span.className = className; span.appendChild(document.createTextNode(text)); return span; }
    function setText(id, value) { var element = document.getElementById(id); if (element) element.textContent = value || ''; }
}());
