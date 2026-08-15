/* Data-driven Well lighting and future artwork paths for Proving Grounds. */
(function () {
    'use strict';

    function assets(stem) {
        return {
            desktopDark: 'assets/backgrounds/proving-grounds/' + stem + '-dark.avif',
            desktopLight: 'assets/backgrounds/proving-grounds/' + stem + '-lit.avif',
            mobileDark: 'assets/backgrounds/proving-grounds/' + stem + '-dark-mobile.avif',
            mobileLight: 'assets/backgrounds/proving-grounds/' + stem + '-lit-mobile.avif'
        };
    }

    window.MIMIR_WELL_CONFIG = [
        chapter('experiment', 'experiment', ['experiment'], 'Test Before Canon', '#6258C8', '#C9C5FF', '#7169BC', '#887FE3', 'rgba(98,88,200,.42)', 'radial-gradient(circle at 66% 36%, rgba(98,88,200,.29), transparent 38%), linear-gradient(180deg,#28243f,#131426)', '01-experiment', '54% 42%', '50% 34%'),
        chapter('conversation', 'conversations', ['conversations'], 'Conversations', '#527FC0', '#B7D4F2', '#6288B5', '#75A1D6', 'rgba(82,127,192,.42)', 'radial-gradient(circle at 34% 46%, rgba(82,127,192,.28), transparent 39%), linear-gradient(180deg,#1b293f,#101827)', '02-conversation', '48% 48%', '46% 42%'),
        chapter('choices', 'quests', ['quests'], 'Quests & Choices', '#7A59B5', '#D1B8EE', '#8169A9', '#9879CB', 'rgba(122,89,181,.42)', 'radial-gradient(circle at 68% 48%, rgba(122,89,181,.30), transparent 39%), linear-gradient(180deg,#2b213f,#17132a)', '03-choices', '52% 50%', '50% 44%'),
        chapter('state', 'world-state', ['world-state'], 'World State', '#4D8B91', '#ACE0DF', '#5E9297', '#71ADB2', 'rgba(77,139,145,.42)', 'radial-gradient(circle at 30% 50%, rgba(77,139,145,.29), transparent 40%), linear-gradient(180deg,#182f34,#0d1b24)', '04-state', '48% 52%', '48% 46%'),
        chapter('simulation', 'simulation', ['simulation'], 'Simulation', '#5366C4', '#BBC7F7', '#6875B6', '#7F91E0', 'rgba(83,102,196,.44)', 'radial-gradient(circle at 70% 52%, rgba(83,102,196,.31), transparent 41%), linear-gradient(180deg,#202746,#11152d)', '05-simulation', '52% 55%', '50% 48%'),
        chapter('decision', 'creator', ['creator'], 'Creator Decides', '#A07A52', '#E0C69D', '#8E7258', '#C19A68', 'rgba(160,122,82,.40)', 'radial-gradient(ellipse at 50% 62%, rgba(160,122,82,.29), transparent 42%), linear-gradient(180deg,#282331,#0d111c)', '06-decision', '50% 60%', '50% 54%')
    ];

    function chapter(key, id, targets, label, accent, textAccent, frame, nav, glow, placeholder, stem, focalDesktop, focalMobile) {
        return {
            key: key,
            id: id,
            targets: targets,
            label: label,
            accent: accent,
            textAccent: textAccent,
            frame: frame,
            nav: nav,
            glow: glow,
            placeholder: placeholder,
            lightPlaceholder: 'radial-gradient(circle at 50% 48%, ' + glow + ', transparent 40%)',
            focalDesktop: focalDesktop,
            focalMobile: focalMobile,
            animationClass: 'pg-chapter-motion--' + key,
            assetReady: false,
            assets: assets(stem)
        };
    }
}());
