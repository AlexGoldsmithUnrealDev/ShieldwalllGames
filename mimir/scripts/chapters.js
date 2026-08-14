/*
 * chapters.js — Mimir "Descent into the Well" visual chapter system.
 *
 * FINAL ARTWORK SETUP
 * -------------------
 * Background files belong in: mimir/assets/backgrounds/
 * Desktop masters supplied by art: 3840x2400.
 * Mobile masters supplied by art: 1440x2560.
 * Publish compressed AVIF/WebP derivatives rather than source PNGs.
 *
 * Each chapter has dark and lit desktop/mobile paths below. Paths are
 * intentionally disabled until the matching files exist. When a full set for a
 * chapter has been added, change assetReady to true. Only the active, previous
 * and next chapters are preloaded; later chapters remain lazy.
 *
 * Focal points are CSS background-position values and can be tuned per chapter.
 */

(function () {
    'use strict';

    var CHAPTERS = [
        {
            key: 'hero',
            id: 'hero',
            targets: ['hero'],
            label: 'Entrance',
            accent: '#C9A45A',
            textAccent: '#D9E5EA',
            frame: '#7A8791',
            nav: '#C9A45A',
            glow: 'rgba(201, 164, 90, 0.30)',
            placeholder: 'radial-gradient(circle at 50% 5%, rgba(217,229,234,.30), transparent 35%), linear-gradient(180deg, #59636a 0%, #343d3e 62%, #242a2c 100%)',
            lightPlaceholder: 'radial-gradient(circle at 48% 8%, rgba(217,229,234,.35), transparent 38%), radial-gradient(circle at 75% 42%, rgba(111,139,107,.12), transparent 28%)',
            focalDesktop: '50% 18%',
            focalMobile: '50% 12%',
            animationClass: 'ms-chapter-motion--entrance',
            assetReady: false,
            assets: chapterAssets('01-hero')
        },
        {
            key: 'product',
            id: 'product',
            targets: ['product'],
            label: 'See Mimir Working',
            accent: '#6A98A8',
            textAccent: '#AFCAD3',
            frame: '#6A98A8',
            nav: '#82B4C4',
            glow: 'rgba(106, 152, 168, 0.30)',
            placeholder: 'radial-gradient(circle at 72% 32%, rgba(106,152,168,.18), transparent 34%), linear-gradient(180deg, #303a3e 0%, #252e33 100%)',
            lightPlaceholder: 'radial-gradient(circle at 70% 38%, rgba(106,152,168,.32), transparent 36%)',
            focalDesktop: '52% 45%',
            focalMobile: '50% 35%',
            assetReady: false,
            assets: chapterAssets('02-product')
        },
        {
            key: 'connected',
            id: 'connected-worldbuilding',
            targets: ['connected-worldbuilding'],
            label: 'Connected Worldbuilding',
            accent: '#3E7C83',
            textAccent: '#91B8BA',
            frame: '#B89149',
            nav: '#4F959C',
            glow: 'rgba(62, 124, 131, 0.34)',
            placeholder: 'radial-gradient(circle at 24% 46%, rgba(62,124,131,.22), transparent 34%), linear-gradient(180deg, #283334 0%, #202a2c 100%)',
            lightPlaceholder: 'radial-gradient(circle at 27% 45%, rgba(62,124,131,.34), transparent 34%), radial-gradient(circle at 78% 60%, rgba(184,145,73,.12), transparent 24%)',
            focalDesktop: '48% 50%',
            focalMobile: '45% 44%',
            assetReady: false,
            assets: chapterAssets('03-connected')
        },
        {
            key: 'wisdom',
            id: 'mimir-ai',
            targets: ['mimir-ai', 'consistency-review'],
            label: 'Mimir AI & Truth',
            accent: '#3E64C5',
            textAccent: '#9FB6F3',
            frame: '#586FC0',
            nav: '#7190ED',
            glow: 'rgba(62, 100, 197, 0.38)',
            placeholder: 'radial-gradient(circle at 50% 42%, rgba(62,100,197,.20), transparent 34%), linear-gradient(180deg, #242840 0%, #1b2034 100%)',
            lightPlaceholder: 'radial-gradient(circle at 50% 46%, rgba(74,112,218,.38), transparent 38%), radial-gradient(circle at 80% 30%, rgba(130,151,255,.10), transparent 22%)',
            focalDesktop: '50% 50%',
            focalMobile: '50% 46%',
            animationClass: 'ms-chapter-motion--runes',
            assetReady: false,
            assets: chapterAssets('04-wisdom')
        },
        {
            key: 'proving',
            id: 'proving-grounds',
            targets: ['proving-grounds'],
            label: 'Proving Grounds',
            accent: '#5A56B8',
            textAccent: '#B5B2EB',
            frame: '#6B67C9',
            nav: '#817CE1',
            glow: 'rgba(90, 86, 184, 0.36)',
            placeholder: 'radial-gradient(circle at 72% 48%, rgba(90,86,184,.24), transparent 36%), linear-gradient(180deg, #25263b 0%, #1d1f31 100%)',
            lightPlaceholder: 'radial-gradient(circle at 72% 48%, rgba(100,95,211,.38), transparent 34%)',
            focalDesktop: '52% 52%',
            focalMobile: '50% 48%',
            assetReady: false,
            assets: chapterAssets('05-proving')
        },
        {
            key: 'migration',
            id: 'migration',
            targets: ['migration'],
            label: 'Migration',
            accent: '#B88A42',
            textAccent: '#D7B87D',
            frame: '#8B7048',
            nav: '#D2A65D',
            glow: 'rgba(184, 138, 66, 0.32)',
            placeholder: 'radial-gradient(circle at 50% 45%, rgba(184,138,66,.20), transparent 34%), linear-gradient(180deg, #293139 0%, #20272d 100%)',
            lightPlaceholder: 'radial-gradient(circle at 50% 48%, rgba(184,138,66,.36), transparent 36%)',
            focalDesktop: '50% 50%',
            focalMobile: '50% 46%',
            animationClass: 'ms-chapter-motion--migration',
            assetReady: false,
            assets: chapterAssets('06-migration')
        },
        {
            key: 'collaboration',
            id: 'collaboration',
            targets: ['collaboration'],
            label: 'Collaboration & Hosting',
            accent: '#4F8573',
            textAccent: '#9EC4B7',
            frame: '#5C947F',
            nav: '#6BA68F',
            glow: 'rgba(79, 133, 115, 0.34)',
            placeholder: 'radial-gradient(circle at 28% 46%, rgba(79,133,115,.22), transparent 35%), linear-gradient(180deg, #22302e 0%, #1b2827 100%)',
            lightPlaceholder: 'radial-gradient(circle at 28% 47%, rgba(79,133,115,.36), transparent 36%)',
            focalDesktop: '50% 52%',
            focalMobile: '50% 48%',
            assetReady: false,
            assets: chapterAssets('07-collaboration')
        },
        {
            key: 'worldbuilders',
            id: 'worldbuilders',
            targets: ['worldbuilders'],
            label: 'For Worldbuilders',
            accent: '#6A4C7D',
            textAccent: '#BDA6C9',
            frame: '#7C6090',
            nav: '#9879AA',
            glow: 'rgba(106, 76, 125, 0.36)',
            placeholder: 'radial-gradient(circle at 72% 45%, rgba(106,76,125,.24), transparent 36%), linear-gradient(180deg, #2b2530 0%, #211d27 100%)',
            lightPlaceholder: 'radial-gradient(circle at 70% 46%, rgba(123,87,146,.38), transparent 36%)',
            focalDesktop: '50% 52%',
            focalMobile: '50% 48%',
            assetReady: false,
            assets: chapterAssets('08-worldbuilders')
        },
        {
            key: 'ownership',
            id: 'ownership',
            targets: ['ownership'],
            label: 'Local Ownership',
            accent: '#5E7257',
            textAccent: '#AABAA5',
            frame: '#425565',
            nav: '#7B9173',
            glow: 'rgba(94, 114, 87, 0.32)',
            placeholder: 'radial-gradient(circle at 30% 48%, rgba(94,114,87,.20), transparent 34%), linear-gradient(180deg, #222b31 0%, #192228 100%)',
            lightPlaceholder: 'radial-gradient(circle at 30% 48%, rgba(94,114,87,.34), transparent 35%)',
            focalDesktop: '50% 52%',
            focalMobile: '50% 48%',
            assetReady: false,
            assets: chapterAssets('09-ownership')
        },
        {
            key: 'pricing',
            id: 'pricing',
            targets: ['pricing'],
            label: 'Pricing',
            accent: '#A17A39',
            textAccent: '#D0B27B',
            frame: '#666B74',
            nav: '#BD9450',
            glow: 'rgba(161, 122, 57, 0.30)',
            placeholder: 'radial-gradient(circle at 50% 24%, rgba(161,122,57,.16), transparent 30%), linear-gradient(180deg, #22252b 0%, #191c22 100%)',
            lightPlaceholder: 'radial-gradient(circle at 50% 34%, rgba(161,122,57,.30), transparent 34%)',
            focalDesktop: '50% 44%',
            focalMobile: '50% 38%',
            assetReady: false,
            assets: chapterAssets('10-pricing')
        },
        {
            key: 'faq',
            id: 'faq',
            targets: ['faq'],
            label: 'Questions',
            accent: '#667784',
            textAccent: '#AAB8C1',
            frame: '#667784',
            nav: '#8497A4',
            glow: 'rgba(102, 119, 132, 0.28)',
            placeholder: 'radial-gradient(circle at 50% 25%, rgba(102,119,132,.18), transparent 32%), linear-gradient(180deg, #1d242a 0%, #171e24 100%)',
            lightPlaceholder: 'radial-gradient(circle at 50% 36%, rgba(102,119,132,.28), transparent 38%)',
            focalDesktop: '50% 48%',
            focalMobile: '50% 42%',
            assetReady: false,
            assets: chapterAssets('11-faq')
        },
        {
            key: 'bottom',
            id: 'beta-signup',
            targets: ['beta-signup'],
            label: 'Bottom of the Well',
            accent: '#4BA3D6',
            textAccent: '#9DD5F0',
            frame: '#315B73',
            nav: '#4BA3D6',
            glow: 'rgba(75, 163, 214, 0.34)',
            placeholder: 'radial-gradient(ellipse at 50% 78%, rgba(49,91,115,.30), transparent 38%), linear-gradient(180deg, #141c2a 0%, #0a1019 72%, #070c13 100%)',
            lightPlaceholder: 'linear-gradient(176deg, transparent 0 67%, rgba(75,163,214,.10) 73%, transparent 79%), radial-gradient(ellipse at 50% 80%, rgba(75,163,214,.24), transparent 36%)',
            focalDesktop: '50% 68%',
            focalMobile: '50% 62%',
            animationClass: 'ms-chapter-motion--water',
            assetReady: false,
            assets: chapterAssets('12-bottom')
        }
    ];

    function chapterAssets(stem) {
        return {
            desktopDark: 'assets/backgrounds/' + stem + '-dark.avif',
            desktopLight: 'assets/backgrounds/' + stem + '-lit.avif',
            mobileDark: 'assets/backgrounds/' + stem + '-dark-mobile.avif',
            mobileLight: 'assets/backgrounds/' + stem + '-lit-mobile.avif'
        };
    }

    /*
     * Pages may provide a data-driven chapter configuration before this
     * shared controller loads. The homepage continues to use the established
     * defaults above, while supporting pages can reuse the same stage,
     * observer, navigation, preloading and reduced-motion behaviour.
     */
    var ACTIVE_CHAPTERS = Array.isArray(window.MIMIR_WELL_CONFIG) && window.MIMIR_WELL_CONFIG.length
        ? window.MIMIR_WELL_CONFIG
        : CHAPTERS;

    function initWellChapters() {
        var stage = document.querySelector('.ms-well-stage');
        var layers = stage ? Array.prototype.slice.call(stage.querySelectorAll('.ms-well-layer')) : [];
        var navMount = document.getElementById('well-chapter-nav');
        var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        var mobileMedia = window.matchMedia('(max-width: 767px)');
        var loadedAssets = new Set();
        var activeIndex = -1;
        var activeLayer = 0;
        var markerLinks = [];
        var targetToIndex = new Map();

        if (!stage || layers.length !== 2 || !navMount) return;

        ACTIVE_CHAPTERS.forEach(function (chapter, index) {
            chapter.targets.forEach(function (targetId) {
                var target = document.getElementById(targetId);
                if (!target) return;
                targetToIndex.set(target, index);
                applyChapterVariables(target, chapter);
                if (chapter.animationClass) target.classList.add(chapter.animationClass);
            });

            document.querySelectorAll('[data-chapter-style="' + chapter.key + '"]').forEach(function (element) {
                applyChapterVariables(element, chapter);
            });

            document.querySelectorAll('[data-chapter="' + chapter.key + '"]').forEach(function (element) {
                applyChapterVariables(element, chapter);
            });
        });

        buildNavigation();
        initRevealAnimations();
        initChapterObserver();
        activateChapter(findInitialChapter(), true);

        var handleViewportModeChange = function () {
            if (activeIndex >= 0) applyLayer(layers[activeLayer], ACTIVE_CHAPTERS[activeIndex]);
            preloadAround(activeIndex);
        };

        if (mobileMedia.addEventListener) mobileMedia.addEventListener('change', handleViewportModeChange);
        else mobileMedia.addListener(handleViewportModeChange);

        function applyChapterVariables(element, chapter) {
            element.style.setProperty('--chapter-accent', chapter.accent);
            element.style.setProperty('--chapter-text-accent', chapter.textAccent);
            element.style.setProperty('--chapter-frame', chapter.frame);
            element.style.setProperty('--chapter-nav', chapter.nav);
            element.style.setProperty('--chapter-glow', chapter.glow);
        }

        function buildNavigation() {
            var nav = document.createElement('nav');
            nav.className = 'ms-depth-nav';
            nav.setAttribute('aria-label', 'Descend through the Well of Mimir');

            var heading = document.createElement('span');
            heading.className = 'ms-depth-nav__title';
            heading.textContent = 'Depth';
            heading.setAttribute('aria-hidden', 'true');
            nav.appendChild(heading);

            var list = document.createElement('ol');
            ACTIVE_CHAPTERS.forEach(function (chapter, index) {
                var item = document.createElement('li');
                var link = document.createElement('a');
                var marker = document.createElement('span');
                var label = document.createElement('span');

                link.href = '#' + chapter.id;
                link.className = 'ms-depth-nav__link';
                link.dataset.chapterIndex = String(index);
                link.setAttribute('aria-label', chapter.label);
                marker.className = 'ms-depth-nav__marker';
                marker.setAttribute('aria-hidden', 'true');
                label.className = 'ms-depth-nav__label';
                label.textContent = chapter.label;
                label.setAttribute('aria-hidden', 'true');

                link.appendChild(marker);
                link.appendChild(label);
                item.appendChild(link);
                list.appendChild(item);
                markerLinks.push(link);

                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    var target = document.getElementById(chapter.id);
                    if (!target) return;
                    target.scrollIntoView({
                        behavior: reducedMotion.matches ? 'auto' : 'smooth',
                        block: 'start'
                    });
                    history.pushState(null, '', '#' + chapter.id);
                }, true);
            });

            nav.appendChild(list);
            navMount.appendChild(nav);
        }

        function initChapterObserver() {
            if (!('IntersectionObserver' in window)) return;

            var observer = new IntersectionObserver(function (entries) {
                var visible = entries
                    .filter(function (entry) { return entry.isIntersecting; })
                    .sort(function (a, b) {
                        return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
                    });

                if (visible.length) activateChapter(targetToIndex.get(visible[0].target));
            }, {
                rootMargin: '-28% 0px -58% 0px',
                threshold: 0
            });

            targetToIndex.forEach(function (index, target) {
                observer.observe(target);
            });
        }

        function findInitialChapter() {
            var hash = window.location.hash.slice(1);
            var hashIndex = ACTIVE_CHAPTERS.findIndex(function (chapter) {
                return chapter.id === hash || chapter.targets.indexOf(hash) !== -1;
            });
            if (hashIndex >= 0) return hashIndex;

            var viewportGuide = window.innerHeight * 0.38;
            var nearest = 0;
            var nearestDistance = Infinity;
            targetToIndex.forEach(function (index, target) {
                var distance = Math.abs(target.getBoundingClientRect().top - viewportGuide);
                if (distance < nearestDistance) {
                    nearest = index;
                    nearestDistance = distance;
                }
            });
            return nearest;
        }

        function activateChapter(index, immediate) {
            if (typeof index !== 'number' || index < 0 || index >= ACTIVE_CHAPTERS.length || index === activeIndex) return;

            var chapter = ACTIVE_CHAPTERS[index];
            activeIndex = index;
            document.documentElement.dataset.activeChapter = chapter.key;
            document.documentElement.style.setProperty('--active-chapter-accent', chapter.accent);
            document.documentElement.style.setProperty('--active-chapter-text', chapter.textAccent);
            document.documentElement.style.setProperty('--active-chapter-frame', chapter.frame);
            document.documentElement.style.setProperty('--active-chapter-nav', chapter.nav);
            document.documentElement.style.setProperty('--active-chapter-glow', chapter.glow);

            document.querySelectorAll('[data-chapter], [data-chapter-style]').forEach(function (element) {
                var elementChapter = element.dataset.chapter || element.dataset.chapterStyle;
                element.classList.toggle('is-current-chapter', elementChapter === chapter.key);
            });

            if (immediate) {
                applyLayer(layers[activeLayer], chapter);
                layers[activeLayer].classList.add('is-active', 'is-illuminated');
            } else {
                var previousLayer = layers[activeLayer];
                activeLayer = activeLayer === 0 ? 1 : 0;
                var nextLayer = layers[activeLayer];

                applyLayer(nextLayer, chapter);
                nextLayer.classList.add('is-active');
                nextLayer.classList.remove('is-illuminated');

                requestAnimationFrame(function () {
                    nextLayer.classList.add('is-illuminated');
                    previousLayer.classList.remove('is-illuminated', 'is-active');
                });
            }

            markerLinks.forEach(function (link, markerIndex) {
                link.classList.toggle('is-active', markerIndex === index);
                link.classList.toggle('is-complete', markerIndex < index);
                if (markerIndex === index) link.setAttribute('aria-current', 'step');
                else link.removeAttribute('aria-current');
            });

            preloadAround(index);
        }

        function applyLayer(layer, chapter) {
            var selected = mobileMedia.matches ? {
                dark: chapter.assets.mobileDark,
                light: chapter.assets.mobileLight,
                focal: chapter.focalMobile
            } : {
                dark: chapter.assets.desktopDark,
                light: chapter.assets.desktopLight,
                focal: chapter.focalDesktop
            };

            var darkBackground = chapter.placeholder;
            var lightBackground = chapter.lightPlaceholder;
            if (chapter.assetReady) {
                darkBackground = 'url("' + selected.dark + '"), ' + chapter.placeholder;
                lightBackground = 'url("' + selected.light + '"), ' + chapter.lightPlaceholder;
            }

            layer.querySelector('.ms-well-layer__dark').style.backgroundImage = darkBackground;
            layer.querySelector('.ms-well-layer__light').style.backgroundImage = lightBackground;
            layer.style.setProperty('--well-focal-point', selected.focal);
            layer.style.setProperty('--well-layer-glow', chapter.glow);
        }

        function preloadAround(index) {
            [index - 1, index, index + 1].forEach(function (chapterIndex) {
                var chapter = ACTIVE_CHAPTERS[chapterIndex];
                if (!chapter || !chapter.assetReady) return;
                var paths = mobileMedia.matches
                    ? [chapter.assets.mobileDark, chapter.assets.mobileLight]
                    : [chapter.assets.desktopDark, chapter.assets.desktopLight];

                paths.forEach(function (path) {
                    if (loadedAssets.has(path)) return;
                    loadedAssets.add(path);
                    var image = new Image();
                    image.decoding = 'async';
                    image.src = path;
                });
            });
        }

        function initRevealAnimations() {
            var revealGroups = [
                '.ms-hero-copy',
                '.ms-hero .ms-media',
                '.ms-proof',
                '.ms-section-head',
                '.ms-copy-block',
                '.ms-media',
                '.ms-composite',
                '.ms-composite > div',
                '.ms-audience-grid article',
                '.ms-tier',
                '.pricing-commitment',
                '.faq-item',
                '.ms-beta-wrapper',
                '.rm-journey-step',
                '.rm-phase-head',
                '.rm-phase-milestone',
                '.rm-feature',
                '.rm-cta-panel',
                '.ft-hero-copy',
                '.ft-orbit',
                '.ft-search',
                '.ft-chapter-head',
                '.ft-chapter-intro',
                '.ft-media-slot',
                '.ft-object',
                '.ft-cta-panel'
            ];

            var elements = Array.prototype.slice.call(document.querySelectorAll(revealGroups.join(',')));
            elements.forEach(function (element, index) {
                element.classList.add('ms-reveal');
                element.style.setProperty('--reveal-delay', String((index % 4) * 55) + 'ms');
            });

            document.documentElement.classList.add('ms-motion-ready');

            if (reducedMotion.matches || !('IntersectionObserver' in window)) {
                elements.forEach(function (element) { element.classList.add('is-revealed'); });
                return;
            }

            var revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-revealed');
                    revealObserver.unobserve(entry.target);
                });
            }, {
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.08
            });

            elements.forEach(function (element) { revealObserver.observe(element); });
        }
    }

    window.MIMIR_WELL_CHAPTERS = ACTIVE_CHAPTERS;
    document.addEventListener('DOMContentLoaded', initWellChapters);
}());
