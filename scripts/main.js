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

    /* ----------------------------------------------------------------------
       Smooth Scroll for Anchor Links
       Intercepts clicks on anchor links (href="#...") and scrolls smoothly
       to the target element. Moves focus to the target for accessibility.
       ---------------------------------------------------------------------- */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var href = this.getAttribute('href');
                if (!href || href === '#') return;

                var targetId = href.slice(1);
                var target = document.getElementById(targetId);
                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                /* Move focus to the target for screen reader users */
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            });
        });
    }

    /* ----------------------------------------------------------------------
       Scroll Reveal
       Uses IntersectionObserver to fade-in elements with the .reveal class
       when they enter the viewport. Each element gains .reveal--visible
       once it becomes at least 15% visible.
       ---------------------------------------------------------------------- */
    function initScrollReveal() {
        var revealElements = document.querySelectorAll('.reveal');
        if (!revealElements.length) return;

        /* Check for IntersectionObserver support (progressive enhancement) */
        if (!('IntersectionObserver' in window)) {
            /* If not supported, show everything immediately */
            revealElements.forEach(function (el) {
                el.classList.add('reveal--visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal--visible');
                    /* Stop observing once revealed — no need to re-animate */
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* ----------------------------------------------------------------------
       Initialise all modules
       ---------------------------------------------------------------------- */
    initNavToggle();
    initHeaderScroll();
    initSmoothScroll();
    initScrollReveal();

});
