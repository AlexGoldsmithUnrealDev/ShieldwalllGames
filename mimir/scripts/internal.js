/* Shared, progressively enhanced behaviour for Mimir internal pages. */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('[data-mi-nav]').forEach(initMobileNavigation);
    });

    function initMobileNavigation(nav) {
        var toggle = nav.querySelector('.mi-nav-toggle');
        var menu = nav.querySelector('.mi-mobile-menu');
        if (!toggle || !menu) return;

        function closeMenu(returnFocus) {
            menu.setAttribute('hidden', '');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open Mimir navigation');
            if (returnFocus) toggle.focus();
        }

        toggle.addEventListener('click', function () {
            var willOpen = menu.hasAttribute('hidden');
            if (willOpen) {
                menu.removeAttribute('hidden');
                toggle.setAttribute('aria-expanded', 'true');
                toggle.setAttribute('aria-label', 'Close Mimir navigation');
            } else {
                closeMenu(false);
            }
        });

        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () { closeMenu(false); });
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !menu.hasAttribute('hidden')) closeMenu(true);
        });
    }
}());
