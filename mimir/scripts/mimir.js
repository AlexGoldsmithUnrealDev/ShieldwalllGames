/*
 * mimir.js — Mimir product zone interactions
 * Depends on: scripts/main.js (must be loaded first)
 */

document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------------------------------
       Mimir Navigation — scroll behaviour
       The ms-nav class is used by the current design system.
       ------------------------------------------------------------------ */
    var mimirNav = document.querySelector('.ms-nav');
    if (mimirNav) {
        window.addEventListener('scroll', function () {
            mimirNav.classList.toggle('scrolled', window.scrollY > 80);
        }, { passive: true });
    }

    /* ------------------------------------------------------------------
       Four-tier pricing layout
       The original stylesheet's pricing grid was built for three plans.
       Reuse the existing responsive two-column grid utility so the four
       V1 tiers render as a balanced 2x2 layout on larger screens and the
       existing mobile rule still collapses naturally to one column.
       ------------------------------------------------------------------ */
    var pricingGrid = document.querySelector('.ms-pricing-grid');
    if (pricingGrid) {
        pricingGrid.classList.add('pricing-commitments__grid');
    }

    var pricingBadge = document.querySelector('.ms-tier-badge');
    if (pricingBadge) {
        pricingBadge.classList.add('badge-coming-soon');
    }

    /* ------------------------------------------------------------------
       FAQ Accordion
       Toggles aria-expanded and hidden attribute on answer panels.
       ------------------------------------------------------------------ */
    function initFaq() {
        var questions = document.querySelectorAll('.faq-item__question button');
        questions.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var expanded = btn.getAttribute('aria-expanded') === 'true';
                var answerId = btn.getAttribute('aria-controls');
                var answer = document.getElementById(answerId);
                if (!answer) return;

                btn.setAttribute('aria-expanded', String(!expanded));
                if (expanded) {
                    answer.setAttribute('hidden', '');
                } else {
                    answer.removeAttribute('hidden');
                }
            });
        });
    }

    initFaq();

});
