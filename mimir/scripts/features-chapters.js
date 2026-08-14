/* Data-driven Well lighting and future artwork paths for the Features page. */
(function () {
    'use strict';

    function assets(stem) {
        return {
            desktopDark: 'assets/backgrounds/features/' + stem + '-dark.avif',
            desktopLight: 'assets/backgrounds/features/' + stem + '-lit.avif',
            mobileDark: 'assets/backgrounds/features/' + stem + '-dark-mobile.avif',
            mobileLight: 'assets/backgrounds/features/' + stem + '-lit-mobile.avif'
        };
    }

    window.MIMIR_WELL_CONFIG = [
        chapter('build', 'build', ['features-overview', 'build'], 'Build', '#C09255', '#E1BF83', '#9A7142', '#D4A55F', 'rgba(192,146,85,.36)', 'radial-gradient(circle at 24% 38%, rgba(192,146,85,.25), transparent 34%), linear-gradient(180deg,#2a241d,#171a1d)', '01-build', '48% 44%', '46% 38%'),
        chapter('connect', 'connect', ['connect'], 'Connect', '#438B83', '#83C8BC', '#4F9F95', '#63B4A8', 'rgba(67,139,131,.38)', 'radial-gradient(circle at 72% 43%, rgba(67,139,131,.25), transparent 36%), linear-gradient(180deg,#172b2a,#111e20)', '02-connect', '52% 48%', '50% 42%'),
        chapter('visualise', 'visualise', ['visualise'], 'Visualise', '#4A9FC2', '#8ED2EA', '#5AB5D3', '#73C7E3', 'rgba(74,159,194,.40)', 'radial-gradient(circle at 35% 46%, rgba(74,159,194,.28), transparent 38%), linear-gradient(180deg,#142734,#0d1b27)', '03-visualise', '50% 50%', '48% 44%'),
        chapter('write', 'write-plan', ['write-plan'], 'Write & Plan', '#75518A', '#C3A1D4', '#8C68A0', '#A27ABA', 'rgba(117,81,138,.40)', 'radial-gradient(circle at 70% 44%, rgba(117,81,138,.28), transparent 36%), linear-gradient(180deg,#281d2d,#17131f)', '04-write', '52% 50%', '50% 46%'),
        chapter('understand', 'understand', ['understand'], 'Understand', '#4B69B4', '#9EB4EE', '#607CC6', '#7895DF', 'rgba(75,105,180,.42)', 'radial-gradient(circle at 30% 44%, rgba(75,105,180,.29), transparent 38%), linear-gradient(180deg,#1a2140,#10162d)', '05-understand', '48% 50%', '48% 46%'),
        chapter('test', 'test', ['test'], 'Test', '#675BC4', '#B4ACF1', '#756BD2', '#8A80E6', 'rgba(103,91,196,.42)', 'radial-gradient(circle at 72% 48%, rgba(103,91,196,.29), transparent 38%), linear-gradient(180deg,#211f3c,#12142a)', '06-test', '52% 52%', '50% 48%'),
        chapter('own', 'own-protect', ['own-protect'], 'Own & Protect', '#667A5F', '#B1C2A9', '#73866C', '#8DA087', 'rgba(102,122,95,.38)', 'radial-gradient(circle at 28% 50%, rgba(102,122,95,.26), transparent 37%), linear-gradient(180deg,#202923,#121b1a)', '07-own', '48% 52%', '48% 48%'),
        chapter('share', 'share', ['share', 'features-beta-signup'], 'Share', '#4F8F7A', '#98CCBA', '#5FA28C', '#72B59F', 'rgba(79,143,122,.40)', 'radial-gradient(ellipse at 62% 58%, rgba(79,143,122,.27), transparent 40%), linear-gradient(180deg,#162925,#0b1719)', '08-share', '52% 56%', '50% 52%')
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
            lightPlaceholder: 'radial-gradient(circle at 50% 46%, ' + glow + ', transparent 39%)',
            focalDesktop: focalDesktop,
            focalMobile: focalMobile,
            animationClass: 'ft-chapter-motion--' + key,
            assetReady: false,
            assets: assets(stem)
        };
    }
}());
