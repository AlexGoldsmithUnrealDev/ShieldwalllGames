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
        var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        var closeTimers = new WeakMap();
        var closeHandlers = new WeakMap();

        function cancelPendingClose(answer) {
            var timer = closeTimers.get(answer);
            var handler = closeHandlers.get(answer);
            if (timer) window.clearTimeout(timer);
            if (handler) answer.removeEventListener('transitionend', handler);
            closeTimers.delete(answer);
            closeHandlers.delete(answer);
        }

        questions.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var expanded = btn.getAttribute('aria-expanded') === 'true';
                var answerId = btn.getAttribute('aria-controls');
                var answer = document.getElementById(answerId);
                if (!answer) return;

                btn.setAttribute('aria-expanded', String(!expanded));
                if (expanded) {
                    cancelPendingClose(answer);
                    if (reduceMotion.matches) {
                        answer.setAttribute('hidden', '');
                        return;
                    }

                    answer.classList.add('is-closing');
                    var finishClose = function () {
                        cancelPendingClose(answer);
                        answer.setAttribute('hidden', '');
                        answer.classList.remove('is-closing');
                    };
                    closeHandlers.set(answer, finishClose);
                    answer.addEventListener('transitionend', finishClose, { once: true });
                    closeTimers.set(answer, window.setTimeout(function () {
                        if (!answer.hasAttribute('hidden')) finishClose();
                    }, 420));
                } else {
                    cancelPendingClose(answer);
                    answer.removeAttribute('hidden');
                    if (!reduceMotion.matches) {
                        answer.classList.add('is-closing');
                        requestAnimationFrame(function () {
                            answer.classList.remove('is-closing');
                        });
                    }
                }
            });
        });
    }

    initFaq();

    /* ------------------------------------------------------------------
       Analytics-ready interaction hooks
       No analytics provider is installed here. Events are exposed as
       CustomEvents and forwarded to dataLayer only when a real analytics
       implementation has created it.
       ------------------------------------------------------------------ */
    function emitMimirEvent(name, detail) {
        var payload = detail || {};
        window.dispatchEvent(new CustomEvent('mimir:analytics', {
            detail: { event: name, parameters: payload }
        }));

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push(Object.assign({ event: name }, payload));
        }
    }

    document.querySelectorAll('[data-analytics-event]').forEach(function (element) {
        element.addEventListener('click', function () {
            emitMimirEvent(element.dataset.analyticsEvent, {
                tier: element.dataset.tier || undefined,
                label: element.textContent.trim().replace(/\s+/g, ' ').slice(0, 120),
                href: element.getAttribute('href') || undefined
            });
        });
    });

    var pricing = document.getElementById('pricing');
    if (pricing && 'IntersectionObserver' in window) {
        var pricingSeen = false;
        var pricingObserver = new IntersectionObserver(function (entries) {
            if (!pricingSeen && entries[0].isIntersecting && entries[0].intersectionRatio >= 0.35) {
                pricingSeen = true;
                emitMimirEvent('mimir_pricing_view');
                pricingObserver.disconnect();
            }
        }, { threshold: [0.35] });
        pricingObserver.observe(pricing);
    }

});
