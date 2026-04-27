/*
 * mimir.js — Mimir product zone interactions
 * Depends on: scripts/main.js (must be loaded first)
 */

/* ==========================================================================
   Mimir Navigation — mobile drawer and scroll behaviour
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* Scroll: add .scrolled class to mimir-nav after 80px */
    var mimirNav = document.querySelector('.mimir-nav');
    if (mimirNav) {
        window.addEventListener('scroll', function () {
            mimirNav.classList.toggle('scrolled', window.scrollY > 80);
        }, { passive: true });
    }

    /* Hamburger toggle */
    var hamburger = document.querySelector('.mimir-nav__hamburger');
    var drawer = document.querySelector('.mimir-nav__drawer');

    if (hamburger && drawer) {
        hamburger.addEventListener('click', function () {
            var isOpen = drawer.classList.toggle('is-open');
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        /* Close on Escape */
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
                drawer.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });

        /* Close on drawer link click */
        drawer.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                drawer.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

});
