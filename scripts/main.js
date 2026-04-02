/* ==========================================================================
   Main JS — Global navigation, utilities, and shared behaviour
   Shieldwall Games Web Project

   All JS is progressive enhancement — the site works fully without it.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ----------------------------------------------------------------------
       Navigation Toggle
       Opens/closes the mobile navigation drawer and overlay.
       ---------------------------------------------------------------------- */
    function initNavToggle() {
        var toggle = document.querySelector('.nav-toggle');
        var nav = document.querySelector('.site-nav');
        var overlay = document.querySelector('.nav-overlay');

        if (!toggle || !nav) return;

        toggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('is-open');
            toggle.classList.toggle('is-active', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));

            if (overlay) {
                overlay.classList.toggle('is-visible', isOpen);
            }

            /* Prevent background scrolling when nav is open */
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        /* Close nav when clicking the overlay */
        if (overlay) {
            overlay.addEventListener('click', function () {
                nav.classList.remove('is-open');
                toggle.classList.remove('is-active');
                toggle.setAttribute('aria-expanded', 'false');
                overlay.classList.remove('is-visible');
                document.body.style.overflow = '';
            });
        }

        /* Close nav when pressing Escape */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                nav.classList.remove('is-open');
                toggle.classList.remove('is-active');
                toggle.setAttribute('aria-expanded', 'false');
                if (overlay) overlay.classList.remove('is-visible');
                document.body.style.overflow = '';
                toggle.focus();
            }
        });
    }

    /* ----------------------------------------------------------------------
       Header Scroll Effect
       Adds a .scrolled class to the site header once the user scrolls
       past 80px, enabling a visual transition (shadow, darker bg, etc.).
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
       to the target element. Falls back to native behaviour if the target
       doesn't exist or if the browser handles it via CSS scroll-behavior.
       ---------------------------------------------------------------------- */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var targetId = this.getAttribute('href').slice(1);
                if (!targetId) return;

                var target = document.getElementById(targetId);
                if (!target) return;

                e.preventDefault();

                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                /* Move focus to the target for accessibility */
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            });
        });
    }

    /* ----------------------------------------------------------------------
       Initialise all modules
       ---------------------------------------------------------------------- */
    initNavToggle();
    initHeaderScroll();
    initSmoothScroll();

});
