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
