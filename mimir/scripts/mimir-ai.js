/* Progressive enhancement for Mimir AI conceptual demonstrations. */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        document.documentElement.classList.add('ai-enhanced');
        document.querySelectorAll('[data-ai-tabs]').forEach(initTabs);
        initEvidenceDemo();
        initReviewDemo();
    });

    function initTabs(group) {
        var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"][data-ai-tab]'));
        var panels = Array.prototype.slice.call(group.querySelectorAll('[role="tabpanel"][data-ai-panel]'));
        if (!tabs.length || !panels.length) return;

        function select(key, moveFocus) {
            tabs.forEach(function (tab) {
                var active = tab.dataset.aiTab === key;
                tab.setAttribute('aria-selected', String(active));
                tab.tabIndex = active ? 0 : -1;
                if (active && moveFocus) tab.focus();
            });
            panels.forEach(function (panel) { panel.toggleAttribute('hidden', panel.dataset.aiPanel !== key); });
            group.dataset.activeTab = key;
        }

        tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () { select(tab.dataset.aiTab, false); });
            tab.addEventListener('keydown', function (event) {
                var next = null;
                if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
                if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
                if (event.key === 'Home') next = 0;
                if (event.key === 'End') next = tabs.length - 1;
                if (next === null) return;
                event.preventDefault();
                select(tabs[next].dataset.aiTab, true);
            });
        });

        var selected = tabs.find(function (tab) { return tab.getAttribute('aria-selected') === 'true'; });
        select(group.dataset.defaultTab || (selected && selected.dataset.aiTab) || tabs[0].dataset.aiTab, false);
    }

    function initEvidenceDemo() {
        var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-evidence]'));
        var sentences = Array.prototype.slice.call(document.querySelectorAll('[data-supported-by]'));
        var status = document.querySelector('[data-evidence-status]');
        if (!buttons.length || !sentences.length) return;

        var labels = {
            vael: 'House Vael supports the explanation of the faction and its response to the decree.',
            greywatch: 'Greywatch supports the fortress context and the failure of its supply route.',
            war: 'The War of the Three Crowns supports the loss of the northern supply road.',
            decree: "Aldric's decree supports the order to preserve House Vael's remaining forces."
        };

        function select(key) {
            buttons.forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.evidence === key)); });
            sentences.forEach(function (sentence) {
                var supports = (sentence.dataset.supportedBy || '').split(/\s+/).indexOf(key) !== -1;
                sentence.classList.toggle('is-supported', supports);
            });
            if (status) status.textContent = labels[key] || 'Evidence selected.';
        }

        buttons.forEach(function (button) {
            button.addEventListener('click', function () { select(button.dataset.evidence); });
            button.addEventListener('mouseenter', function () { select(button.dataset.evidence); });
            button.addEventListener('focus', function () { select(button.dataset.evidence); });
        });
    }

    function initReviewDemo() {
        var demo = document.querySelector('[data-review-demo]');
        if (!demo) return;
        var run = demo.querySelector('[data-review-run]');
        var finding = demo.querySelector('[data-review-finding]');
        var status = demo.querySelector('[data-review-status]');
        if (!run || !finding) return;

        finding.setAttribute('hidden', '');
        run.addEventListener('click', function () {
            finding.removeAttribute('hidden');
            run.textContent = 'Finding revealed';
            var heading = finding.querySelector('h4');
            if (heading) heading.setAttribute('tabindex', '-1');
            if (heading) heading.focus();
        });

        demo.querySelectorAll('[data-review-action]').forEach(function (button) {
            button.addEventListener('click', function () {
                if (status) status.textContent = button.dataset.reviewAction + ' selected. This conceptual website demo has not changed a world.';
            });
        });
    }
}());
