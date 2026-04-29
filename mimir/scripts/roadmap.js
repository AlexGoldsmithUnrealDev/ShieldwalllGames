/*
 * roadmap.js — Mimir roadmap page rendering
 * Fetches roadmap-data.json and builds the roadmap DOM.
 * Depends on: main.js and mimir.js (both loaded first)
 */

document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------------------------------
       Fetch and render roadmap
       ------------------------------------------------------------------ */
    function loadRoadmap() {
        fetch('roadmap-data.json')
            .then(function (res) {
                if (!res.ok) throw new Error('Failed to load roadmap data');
                return res.json();
            })
            .then(function (data) {
                renderLastUpdated(data.lastUpdated);
                renderRoadmap(data.versions);
            })
            .catch(function (err) {
                console.error('Roadmap load error:', err);
                document.getElementById('roadmap-content').innerHTML =
                    '<p class="roadmap-loading">Unable to load roadmap. Please refresh.</p>';
            });
    }

    /* ------------------------------------------------------------------
       Render last updated timestamp
       ------------------------------------------------------------------ */
    function renderLastUpdated(dateStr) {
        var el = document.getElementById('roadmap-last-updated');
        if (!el) return;
        try {
            var date = new Date(dateStr);
            var formatted = date.toLocaleDateString('en-GB', {
                year: 'numeric', month: 'long', day: 'numeric'
            });
            el.textContent = 'Last updated: ' + formatted;
        } catch (e) {
            el.textContent = 'Last updated: ' + dateStr;
        }
    }

    /* ------------------------------------------------------------------
       Render status indicator
       ------------------------------------------------------------------ */
    function renderStatus(status) {
        var labels = {
            'shipped': 'Shipped',
            'in-progress': 'In progress',
            'planned': 'Planned'
        };
        var label = labels[status] || status;
        return (
            '<div class="roadmap-status roadmap-status--' + status + '" ' +
                'aria-label="Status: ' + label + '">' +
                '<span class="roadmap-status__dot" aria-hidden="true"></span>' +
                '<span class="roadmap-status__label">' + label + '</span>' +
            '</div>'
        );
    }

    /* ------------------------------------------------------------------
       Render version status badge
       ------------------------------------------------------------------ */
    function renderVersionStatus(status) {
        var labels = {
            'in-progress': 'In Development',
            'planned': 'Planned',
            'shipped': 'Shipped'
        };
        var label = labels[status] || status;
        return (
            '<span class="roadmap-version__status ' +
                'roadmap-version__status--' + status + '">' +
                label +
            '</span>'
        );
    }

    /* ------------------------------------------------------------------
       Render feature tile
       ------------------------------------------------------------------ */
    function renderFeature(feature) {
        var badge = feature.badge === 'new'
            ? '<span class="roadmap-badge-new" aria-label="Newly added">New</span>'
            : '';

        return (
            '<div class="roadmap-feature" id="' + feature.id + '">' +
                '<div class="roadmap-feature__top">' +
                    '<span class="roadmap-feature__name">' +
                        escapeHtml(feature.name) +
                    '</span>' +
                    '<div style="display:flex; gap:0.5rem; align-items:center;">' +
                        badge +
                        renderStatus(feature.status) +
                    '</div>' +
                '</div>' +
                '<p class="roadmap-feature__desc">' +
                    escapeHtml(feature.desc) +
                '</p>' +
            '</div>'
        );
    }

    /* ------------------------------------------------------------------
       Render category
       ------------------------------------------------------------------ */
    function renderCategory(category) {
        var featuresHtml = category.features
            .map(renderFeature)
            .join('');

        return (
            '<div class="roadmap-category">' +
                '<h3 class="roadmap-category__name">' +
                    escapeHtml(category.name) +
                '</h3>' +
                '<div class="roadmap-features">' +
                    featuresHtml +
                '</div>' +
            '</div>'
        );
    }

    /* ------------------------------------------------------------------
       Render version block
       ------------------------------------------------------------------ */
    function renderVersion(version) {
        var categoriesHtml = version.categories
            .map(renderCategory)
            .join('');

        return (
            '<div class="roadmap-version reveal" id="' + version.id + '">' +
                '<div class="roadmap-version__header">' +
                    '<span class="roadmap-version__label" aria-hidden="true">' +
                        version.label +
                    '</span>' +
                    '<div class="roadmap-version__meta">' +
                        '<h2 class="roadmap-version__title">' +
                            escapeHtml(version.title) +
                        '</h2>' +
                        renderVersionStatus(version.status) +
                    '</div>' +
                '</div>' +
                '<p class="roadmap-version__pitch">' +
                    escapeHtml(version.pitch) +
                '</p>' +
                categoriesHtml +
            '</div>'
        );
    }

    /* ------------------------------------------------------------------
       Render full roadmap
       ------------------------------------------------------------------ */
    function renderRoadmap(versions) {
        var container = document.getElementById('roadmap-content');
        if (!container) return;

        var html = versions.map(renderVersion).join('');
        container.innerHTML = html;

        /* Re-init scroll reveal for dynamically added .reveal elements */
        var newRevealEls = container.querySelectorAll('.reveal');
        if (window.IntersectionObserver) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal--visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

            newRevealEls.forEach(function (el) {
                observer.observe(el);
            });
        } else {
            newRevealEls.forEach(function (el) {
                el.classList.add('reveal--visible');
            });
        }
    }

    /* ------------------------------------------------------------------
       Utility — escape HTML to prevent XSS from JSON content
       ------------------------------------------------------------------ */
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    /* ------------------------------------------------------------------
       Mimir nav — wire hamburger on roadmap page
       ------------------------------------------------------------------ */
    var hamburger = document.querySelector('.mimir-nav__hamburger');
    var drawer = document.querySelector('.mimir-nav__drawer');
    if (hamburger && drawer) {
        hamburger.addEventListener('click', function () {
            var isOpen = drawer.classList.toggle('is-open');
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
                drawer.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });
    }

    /* Kick off the load */
    loadRoadmap();

});
