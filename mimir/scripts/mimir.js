/*
 * mimir.js — Mimir product zone interactions
 * Depends on: scripts/main.js (must be loaded first)
 */

document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------------------------------
       Mimir Navigation — scroll behaviour
       The ms-nav class is used by the new design system.
       ------------------------------------------------------------------ */
    var mimirNav = document.querySelector('.ms-nav');
    if (mimirNav) {
        window.addEventListener('scroll', function () {
            mimirNav.classList.toggle('scrolled', window.scrollY > 80);
        }, { passive: true });
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
