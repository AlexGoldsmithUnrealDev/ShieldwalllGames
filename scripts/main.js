/* ==========================================================================
   THEME INITIALISATION
   Runs immediately — not deferred — to prevent flash of wrong theme.
   This function is called from an inline <script> in each page <head>.
   It must not rely on DOMContentLoaded.
   ========================================================================== */

function initTheme(pageDefault) {
    var saved = localStorage.getItem('swg-theme');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    var theme;
    if (saved) {
        theme = saved;
    } else if (systemDark) {
        theme = 'dark';
    } else {
        theme = pageDefault || 'light';
    }

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('theme-' + theme);
}

/* Call signature:
   initTheme('dark')  — for Mimir pages (dark default)
   initTheme('light') — for studio/Ashborn pages (light default)
   Called inline in each page's <head> before stylesheets finish parsing */

/* ==========================================================================
   Main JS — Global navigation, utilities, and shared behaviour
   Shieldwall Games Web Project

   All JS is progressive enhancement — the site works fully without it.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ----------------------------------------------------------------------
       Navigation Toggle
       Opens and closes the mobile navigation drawer. Manages aria-expanded,
       the background overlay, body scroll lock, and Escape key dismissal.
       ---------------------------------------------------------------------- */
    function initNavToggle() {
        var toggle = document.querySelector('.nav-toggle');
        var nav = document.querySelector('.site-nav');
        var overlay = document.querySelector('.nav-overlay');
        var navLinks = document.querySelectorAll('.site-nav__link');

        if (!toggle || !nav) return;

        /* Helper: close the nav drawer and restore state */
        function closeNav() {
            nav.classList.remove('is-open');
            toggle.classList.remove('is-active');
            toggle.setAttribute('aria-expanded', 'false');
            if (overlay) overlay.classList.remove('is-visible');
            document.body.style.overflow = '';
        }

        /* Toggle the drawer on hamburger click */
        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('is-open');
            toggle.classList.toggle('is-active', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));

            if (overlay) {
                overlay.classList.toggle('is-visible', isOpen);
            }

            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        /* Close nav when clicking the overlay */
        if (overlay) {
            overlay.addEventListener('click', closeNav);
        }

        /* Close nav when a nav link is clicked (for same-page anchors) */
        navLinks.forEach(function (link) {
            link.addEventListener('click', closeNav);
        });

        /* Close nav when pressing Escape */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                closeNav();
                toggle.focus();
            }
        });
    }

    /* ----------------------------------------------------------------------
       Header Scroll Effect
       Adds a .scrolled class to the site header once the user scrolls
       past 80px. This triggers CSS transitions for background colour,
       padding, and shadow.
       ---------------------------------------------------------------------- */
    function initHeaderScroll() {
        var header = document.querySelector('.site-header');
        if (!header) return;

        var scrollThreshold = 80;

        function onScroll() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        /* Run on load in case the page is already scrolled */
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ------------------------------------------------------------------
       Scroll Reveal
       Fades elements up into view when they enter the viewport.
       Apply class .reveal to any element to opt in.
       ------------------------------------------------------------------ */
    function initScrollReveal() {
        var elements = document.querySelectorAll('.reveal');
        if (!elements.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal--visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* ------------------------------------------------------------------
       Smooth Scroll — anchor links
       Handles href="#..." links across all pages.
       ------------------------------------------------------------------ */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var id = link.getAttribute('href').slice(1);
                if (!id) return;
                var target = document.getElementById(id);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', '#' + id);
            });
        });
    }

    /* ----------------------------------------------------------------------
       Initialise all modules
       ---------------------------------------------------------------------- */
    initNavToggle();
    initHeaderScroll();
    initSmoothScroll();
    initScrollReveal();

    /* ------------------------------------------------------------------
       Theme Toggle
       Finds all .theme-toggle-mount elements and injects a sun/moon
       toggle button. Handles click to flip theme, persist to localStorage,
       and update aria-label.
       ------------------------------------------------------------------ */
    function buildThemeToggle() {
        var mounts = document.querySelectorAll('.theme-toggle-mount');
        if (!mounts.length) return;

        mounts.forEach(function (mount) {
            var btn = document.createElement('button');
            btn.className = 'theme-toggle';
            btn.setAttribute('aria-label', 'Switch to light mode');
            btn.setAttribute('type', 'button');

            /* Sun icon (shown in dark mode — click to go light) */
            var sunIcon = '<svg class="theme-toggle__icon theme-toggle__icon--sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
                '<circle cx="12" cy="12" r="5"/>' +
                '<line x1="12" y1="1" x2="12" y2="3"/>' +
                '<line x1="12" y1="21" x2="12" y2="23"/>' +
                '<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>' +
                '<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>' +
                '<line x1="1" y1="12" x2="3" y2="12"/>' +
                '<line x1="21" y1="12" x2="23" y2="12"/>' +
                '<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>' +
                '<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>' +
                '</svg>';

            /* Moon icon (shown in light mode — click to go dark) */
            var moonIcon = '<svg class="theme-toggle__icon theme-toggle__icon--moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
                '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>' +
                '</svg>';

            btn.innerHTML = sunIcon + moonIcon;
            mount.appendChild(btn);

            btn.addEventListener('click', function () {
                var current = document.documentElement.getAttribute('data-theme');
                var next = current === 'dark' ? 'light' : 'dark';

                document.documentElement.setAttribute('data-theme', next);
                document.documentElement.classList.remove('theme-dark', 'theme-light');
                document.documentElement.classList.add('theme-' + next);

                localStorage.setItem('swg-theme', next);

                btn.setAttribute('aria-label',
                    next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
                );
            });
        });
    }

    buildThemeToggle();

    /* NOTE FOR NEXT STEP: add theme toggle CSS to main.css global scope:
     *
     * .theme-toggle { ... }
     * .theme-toggle__icon--sun  { display: none; }
     * .theme-toggle__icon--moon { display: block; }
     * [data-theme="dark"] .theme-toggle__icon--sun  { display: block; }
     * [data-theme="dark"] .theme-toggle__icon--moon { display: none; }
     */

    /* ------------------------------------------------------------------
       Studio Navigation — mobile drawer and scroll behaviour
       Works for both studio and Ashborn pages.
       ------------------------------------------------------------------ */
    function initStudioNav() {
        var header = document.querySelector('.site-header');
        if (!header) return;

        /* Scroll: add .scrolled class after 80px */
        var onScroll = function () {
            header.classList.toggle('scrolled', window.scrollY > 80);
        };
        window.addEventListener('scroll', onScroll, { passive: true });

        /* Hamburger toggle */
        var hamburger = header.querySelector('.site-header__hamburger');
        var drawer = header.querySelector('.site-header__drawer');
        if (!hamburger || !drawer) return;

        hamburger.addEventListener('click', function () {
            var isOpen = drawer.classList.toggle('is-open');
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        /* Close drawer on Escape */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
                drawer.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });

        /* Close drawer when a drawer link is clicked */
        drawer.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                drawer.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    initStudioNav();

});
