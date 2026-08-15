/* Migration deep-dive conceptual demonstrations. Core content remains visible without JavaScript. */
(function () {
    'use strict';

    function initTabs(group) {
        var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"][data-mg-tab]'));
        var panels = Array.prototype.slice.call(group.querySelectorAll('[role="tabpanel"][data-mg-panel]'));
        if (!tabs.length || !panels.length) return;

        function select(key, focus) {
            tabs.forEach(function (tab) {
                var active = tab.dataset.mgTab === key;
                tab.setAttribute('aria-selected', String(active));
                tab.tabIndex = active ? 0 : -1;
                if (active && focus) tab.focus();
            });
            panels.forEach(function (panel) { panel.hidden = panel.dataset.mgPanel !== key; });
        }

        tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () { select(tab.dataset.mgTab, false); });
            tab.addEventListener('keydown', function (event) {
                var next = null;
                if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
                if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
                if (event.key === 'Home') next = 0;
                if (event.key === 'End') next = tabs.length - 1;
                if (next === null) return;
                event.preventDefault();
                select(tabs[next].dataset.mgTab, true);
            });
        });
        var selected = tabs.find(function (tab) { return tab.getAttribute('aria-selected') === 'true'; });
        select(group.dataset.defaultTab || (selected && selected.dataset.mgTab) || tabs[0].dataset.mgTab, false);
    }

    function initRecognition() {
        var demo = document.querySelector('[data-mg-recognition]');
        if (!demo) return;
        var buttons = Array.prototype.slice.call(demo.querySelectorAll('[data-mg-recognition-key]'));
        var state = demo.querySelector('[data-mg-recognition-state]');
        var title = demo.querySelector('[data-mg-recognition-title]');
        var copy = demo.querySelector('[data-mg-recognition-copy]');
        var content = {
            columns: ['Recognised automatically', 'Column names and row values', 'Mimir can read the table structure. You still select the target entry type, name column and field mapping.'],
            prose: ['Suggested, then reviewed', 'Named and described entities', 'AI-assisted extraction can propose entries from readable prose. You can rename, re-type or remove every proposal before creating drafts.'],
            unsupported: ['Unsupported or unmapped', 'Complex values stay unconverted', 'Image-asset and relationship-list fields are skipped by the spreadsheet text converter instead of being guessed. The source attachment remains available.']
        };
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                buttons.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
                var next = content[button.dataset.mgRecognitionKey];
                state.textContent = next[0]; title.textContent = next[1]; copy.textContent = next[2];
            });
        });
    }

    function initMapping() {
        var demo = document.querySelector('[data-mg-mapping]');
        if (!demo) return;
        var selects = Array.prototype.slice.call(demo.querySelectorAll('[data-mg-map]'));
        var name = demo.querySelector('[data-mg-preview-name]');
        var age = demo.querySelector('[data-mg-preview-age]');
        var tags = demo.querySelector('[data-mg-preview-tags]');
        var summary = demo.querySelector('[data-mg-preview-summary]');
        var summaryValue = demo.querySelector('[data-mg-preview-summary-value]');
        if (!selects.length || !name || !summary || !summaryValue) return;

        function valueFor(key) {
            var select = selects.find(function (item) { return item.dataset.mgMap === key; });
            return select ? select.value : 'skip';
        }

        function update() {
            var summaryParts = [];
            var nameChoice = valueFor('name');
            name.textContent = nameChoice === 'name' ? 'Elara Voss' : 'Untitled Character';
            if (nameChoice === 'summary') summaryParts.push('Name: Elara Voss');
            age.hidden = valueFor('age') !== 'number';
            tags.hidden = valueFor('tags') !== 'tags';
            if (valueFor('age') === 'summary') summaryParts.push('Age: 34');
            if (valueFor('tags') === 'summary') summaryParts.push('Tags: commander, exile');
            summary.hidden = summaryParts.length === 0;
            summaryValue.textContent = summaryParts.join(' · ');
        }
        selects.forEach(function (select) { select.addEventListener('change', update); });
        update();
    }

    function initFlow() {
        var demo = document.querySelector('[data-mg-flow]');
        if (!demo) return;
        var steps = Array.prototype.slice.call(demo.querySelectorAll('.mg-flow-steps li'));
        var button = demo.querySelector('[data-mg-flow-next]');
        var status = demo.querySelector('[data-mg-flow-status]');
        var messages = [
            'The original source is present. No Mimir entries have been created.',
            'Rows or readable document text have been parsed. No entries have been created.',
            'The creator is choosing mappings or reviewing extracted proposals.',
            'Unwanted material can still be omitted or changed before the final action.',
            'The explicit create action produces follow-up draft entries. They are not automatically confirmed canon.'
        ];
        if (!steps.length || !button || !status) return;
        var index = 0;
        button.hidden = false;
        button.addEventListener('click', function () {
            index = (index + 1) % steps.length;
            steps.forEach(function (step, stepIndex) { step.classList.toggle('is-active', stepIndex === index); });
            status.textContent = messages[index];
            button.textContent = index === steps.length - 1 ? 'Restart example' : 'Advance example';
        });
    }

    function initResult() {
        var demo = document.querySelector('[data-mg-result]');
        if (!demo) return;
        var buttons = Array.prototype.slice.call(demo.querySelectorAll('[data-mg-result-view]'));
        var card = demo.querySelector('[data-mg-result-card]');
        if (!buttons.length || !card) return;
        var label = card.querySelector('span');
        var title = card.querySelector('strong');
        var copy = card.querySelector('p');
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                var isMimir = button.dataset.mgResultView === 'mimir';
                buttons.forEach(function (item) { item.setAttribute('aria-pressed', String(item === button)); });
                label.textContent = isMimir ? 'Local Mimir world' : 'Stored attachment';
                title.textContent = isMimir ? 'Character drafts' : 'characters.csv';
                copy.textContent = isMimir ? 'Reviewed rows are now ordinary local entries, ready to refine, connect, keep in history and export.' : 'Your source remains available as the reference material used for the reviewed conversion.';
            });
        });
    }

    document.querySelectorAll('[data-mg-tabs]').forEach(initTabs);
    initRecognition();
    initMapping();
    initFlow();
    initResult();
}());
