/*
 * consent.js — cookie consent for shieldwallgames.co.uk
 *
 * Optional scripts are written as inert placeholders and only run after consent:
 *   <script type="text/plain" data-consent="forms">…</script>
 *   <script type="text/plain" data-consent="analytics" data-src="…"></script>
 * Embedded forms that need consent are wrapped in <div data-consent-placeholder="forms">.
 * Any element with [data-cookie-settings] reopens the banner.
 * Bump VERSION whenever the optional purposes change, so everyone is asked again.
 */
(function () {
    'use strict';

    var KEY = 'sw-consent';
    var VERSION = 2;
    var MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
    var banner = null;

    function read() {
        try {
            var c = JSON.parse(localStorage.getItem(KEY) || 'null');
            if (!c || c.v !== VERSION || Date.now() - c.at > MAX_AGE_MS) return null;
            return c;
        } catch (e) {
            return null;
        }
    }

    function write(forms, analytics) {
        var c = { v: VERSION, at: Date.now(), forms: !!forms, analytics: !!analytics };
        try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) { /* private mode: ask again next visit */ }
        return c;
    }

    /* Run each held script once its purpose is allowed, and swap form placeholders. */
    function activate(c) {
        var held = document.querySelectorAll('script[type="text/plain"][data-consent]');
        for (var i = 0; i < held.length; i++) {
            var el = held[i];
            if (!c[el.getAttribute('data-consent')] || el.hasAttribute('data-consent-done')) continue;
            el.setAttribute('data-consent-done', '');
            var s = document.createElement('script');
            if (el.getAttribute('data-src')) { s.src = el.getAttribute('data-src'); s.async = true; }
            else { s.text = el.text; }
            el.parentNode.insertBefore(s, el.nextSibling);
        }

        var slots = document.querySelectorAll('[data-consent-placeholder]');
        for (var j = 0; j < slots.length; j++) {
            var slot = slots[j];
            var allowed = !!c[slot.getAttribute('data-consent-placeholder')];
            var note = slot.querySelector('.consent-placeholder');
            if (allowed && note) note.remove();
            if (!allowed && !note) slot.insertBefore(buildPlaceholder(), slot.firstChild);
        }
    }

    function buildPlaceholder() {
        var box = document.createElement('div');
        box.className = 'consent-placeholder';
        box.innerHTML =
            '<p>This sign-up form is run by MailerLite and needs optional cookies to load.</p>' +
            '<button type="button" class="consent-btn">Allow and show the form</button>';
        box.querySelector('button').addEventListener('click', function () {
            var current = read() || { analytics: false };
            choose(write(true, current.analytics));
        });
        return box;
    }

    function choose(c) {
        if (banner) banner.hidden = true;
        activate(c);
    }

    function buildBanner() {
        var el = document.createElement('section');
        el.className = 'cookie-banner';
        el.setAttribute('aria-label', 'Cookies');
        el.hidden = true;
        el.innerHTML =
            '<div class="cookie-banner__inner">' +
                '<p class="cookie-banner__text">We use essential cookies to make this site work. ' +
                'We’d also like to use optional cookies to improve it. We never sell your data. ' +
                '<a href="/privacy.html#cookies">Cookie notice</a></p>' +
                '<div class="cookie-banner__actions">' +
                    '<button type="button" class="consent-btn" data-consent-choice="reject">Reject all</button>' +
                    '<button type="button" class="consent-btn" data-consent-choice="accept">Accept all</button>' +
                '</div>' +
            '</div>';
        el.addEventListener('click', function (e) {
            var choice = e.target.getAttribute && e.target.getAttribute('data-consent-choice');
            if (choice === 'accept') choose(write(true, true));
            if (choice === 'reject') choose(write(false, false));
        });
        document.body.insertBefore(el, document.body.firstChild);
        return el;
    }

    function openBanner(focus) {
        banner.hidden = false;
        if (focus) banner.querySelector('button').focus();
    }

    banner = buildBanner();

    document.addEventListener('click', function (e) {
        var link = e.target.closest && e.target.closest('[data-cookie-settings]');
        if (!link) return;
        e.preventDefault();
        openBanner(true);
    });

    var saved = read();
    if (saved) {
        activate(saved);
    } else {
        activate({ forms: false, analytics: false });
        openBanner(false);
    }
})();
