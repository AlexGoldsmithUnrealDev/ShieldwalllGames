/* Progressive enhancement for Proving Grounds conceptual demonstrations. */
(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        document.documentElement.classList.add('pg-enhanced');
        document.querySelectorAll('[data-pg-tabs]').forEach(initTabs);
        initCanonDemo();
        initQuestDemo();
        initStateDemo();
        initDecisionDemo();
    });

    function initTabs(group) {
        var tabs = Array.prototype.slice.call(group.querySelectorAll('[role="tab"][data-pg-tab]'));
        var panels = Array.prototype.slice.call(group.querySelectorAll('[role="tabpanel"][data-pg-panel]'));
        if (!tabs.length || !panels.length) return;

        function select(key, moveFocus) {
            tabs.forEach(function (tab) {
                var active = tab.dataset.pgTab === key;
                tab.setAttribute('aria-selected', String(active));
                tab.tabIndex = active ? 0 : -1;
                if (active && moveFocus) tab.focus();
            });
            panels.forEach(function (panel) {
                panel.toggleAttribute('hidden', panel.dataset.pgPanel !== key);
            });
            group.dataset.activeTab = key;
        }

        tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () { select(tab.dataset.pgTab, false); });
            tab.addEventListener('keydown', function (event) {
                var next = null;
                if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
                if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
                if (event.key === 'Home') next = 0;
                if (event.key === 'End') next = tabs.length - 1;
                if (next === null) return;
                event.preventDefault();
                select(tabs[next].dataset.pgTab, true);
            });
        });

        var selected = tabs.find(function (tab) { return tab.getAttribute('aria-selected') === 'true'; });
        select(group.dataset.defaultTab || (selected && selected.dataset.pgTab) || tabs[0].dataset.pgTab, false);
    }

    function initCanonDemo() {
        var demo = document.querySelector('[data-pg-canon-demo]');
        if (!demo) return;
        var run = demo.querySelector('[data-pg-run]');
        var steps = Array.prototype.slice.call(demo.querySelectorAll('[data-pg-flow-step]'));
        var result = demo.querySelector('[data-pg-result]');
        var timers = [];
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!run || !steps.length) return;

        function clearTimers() {
            timers.forEach(window.clearTimeout);
            timers = [];
        }

        run.addEventListener('click', function () {
            clearTimers();
            steps.forEach(function (step) { step.classList.remove('is-active'); });
            if (result) result.classList.remove('is-active');
            run.disabled = true;
            run.textContent = 'Scenario running';

            steps.forEach(function (step, index) {
                timers.push(window.setTimeout(function () {
                    step.classList.add('is-active');
                    if (index === steps.length - 1) {
                        run.disabled = false;
                        run.textContent = 'Run again';
                        if (result) result.classList.add('is-active');
                    }
                }, reduced ? 0 : index * 360));
            });
        });
    }

    function initQuestDemo() {
        var demo = document.querySelector('[data-pg-quest-demo]');
        if (!demo) return;
        var conditions = Array.prototype.slice.call(demo.querySelectorAll('[data-pg-condition]'));
        var branch = demo.querySelector('[data-pg-quest-branch]');
        var outcome = demo.querySelector('[data-pg-quest-outcome]');
        var status = demo.querySelector('[data-pg-quest-status]');
        if (!conditions.length || !branch || !outcome) return;

        function checked(name) {
            var input = conditions.find(function (item) { return item.dataset.pgCondition === name; });
            return Boolean(input && input.checked);
        }

        function update() {
            var gate = checked('gate');
            var commander = checked('commander');
            var allied = checked('allied');
            var title;
            var copy;
            var ending;

            if (gate && commander) {
                title = 'Request entry from Commander Arlen';
                copy = allied ? 'The allied approach removes the immediate siege risk.' : 'The gate is open and its commander can respond.';
                ending = allied ? 'Enter as an ally' : 'Enter under guard';
            } else if (allied) {
                title = commander ? 'Ask Arlen to open the postern' : 'Follow a Vael guide to the old passage';
                copy = 'The alliance preserves a route even though the main-gate path is unavailable.';
                ending = commander ? 'Enter through the postern' : 'Bypass the sealed gate';
            } else if (commander) {
                title = 'Parley from beyond the wall';
                copy = 'Arlen can answer, but the closed gate prevents direct entry.';
                ending = 'Receive a warning and withdraw';
            } else {
                title = 'No valid route';
                copy = 'The authored conditions leave no available branch to Greywatch.';
                ending = 'Quest path blocked';
            }

            branch.querySelector('strong').textContent = title;
            branch.querySelector('small').textContent = copy;
            outcome.textContent = ending;
            if (status) status.textContent = title === 'No valid route'
                ? 'A blocked route has been exposed for the creator to review.'
                : 'Available branch: ' + title + '.';
        }

        conditions.forEach(function (input) { input.addEventListener('change', update); });
        update();
    }

    function initStateDemo() {
        var demo = document.querySelector('[data-pg-state-demo]');
        if (!demo) return;
        var controls = Array.prototype.slice.call(demo.querySelectorAll('[data-pg-state]'));
        var result = demo.querySelector('[data-pg-state-result]');
        var reason = demo.querySelector('[data-pg-state-reason]');
        if (!controls.length || !result || !reason) return;

        function state(name) {
            var input = controls.find(function (item) { return item.dataset.pgState === name; });
            return Boolean(input && input.checked);
        }

        function update() {
            var gate = state('gate');
            var allied = state('vael');
            var arlen = state('arlen');
            var secureRoad = state('road');
            var labels = {
                gate: gate ? 'Open' : 'Closed',
                vael: allied ? 'Allied' : 'Hostile',
                arlen: arlen ? 'Alive' : 'Dead',
                road: secureRoad ? 'Secure' : 'Fallen'
            };
            Object.keys(labels).forEach(function (key) {
                var label = demo.querySelector('[data-pg-state-label="' + key + '"]');
                if (label) label.textContent = labels[key];
            });

            if (allied && secureRoad) {
                result.textContent = 'Greywatch can reopen its northern supply route.';
                reason.textContent = 'House Vael is allied and the road is secure. The fortress can receive support.';
            } else if (gate && arlen) {
                result.textContent = 'The envoy enters under guard, but Greywatch remains isolated.';
                reason.textContent = 'Arlen is alive and the gate is open. ' + (secureRoad ? 'The road is secure.' : 'The road is still fallen.') + (allied ? ' House Vael is allied.' : ' House Vael remains hostile.');
            } else if (arlen) {
                result.textContent = 'Arlen offers a parley from the sealed wall.';
                reason.textContent = 'The commander can respond, but the closed gate prevents entry.';
            } else if (allied) {
                result.textContent = 'A Vael guide offers a route around the abandoned command post.';
                reason.textContent = 'The alliance creates an alternative, but Greywatch has no living commander.';
            } else {
                result.textContent = 'No safe route into Greywatch remains.';
                reason.textContent = 'The gate is closed, Arlen is dead and House Vael is hostile.';
            }
        }

        controls.forEach(function (input) { input.addEventListener('change', update); });
        update();
    }

    function initDecisionDemo() {
        var demo = document.querySelector('[data-pg-decision-demo]');
        if (!demo) return;
        var buttons = Array.prototype.slice.call(demo.querySelectorAll('[data-pg-decision]'));
        var status = demo.querySelector('[data-pg-decision-status]');
        if (!buttons.length) return;

        buttons.forEach(function (button) {
            button.setAttribute('aria-pressed', 'false');
            button.addEventListener('click', function () {
                buttons.forEach(function (item) {
                    item.setAttribute('aria-pressed', String(item === button));
                });
                if (status) {
                    status.textContent = button.dataset.pgDecision + ' selected for this website example. The world itself has not been changed.';
                }
            });
        });
    }
}());
