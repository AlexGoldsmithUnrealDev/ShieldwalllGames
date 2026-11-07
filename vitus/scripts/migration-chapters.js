/* Data-driven Well lighting and future artwork paths for Migration. */
(function () {
    'use strict';
    function assets(stem) {
        return {
            desktopDark: 'assets/backgrounds/migration/' + stem + '-dark.avif',
            desktopLight: 'assets/backgrounds/migration/' + stem + '-lit.avif',
            mobileDark: 'assets/backgrounds/migration/' + stem + '-dark-mobile.avif',
            mobileLight: 'assets/backgrounds/migration/' + stem + '-lit-mobile.avif'
        };
    }
    function chapter(key, id, label, accent, textAccent, frame, nav, glow, placeholder, stem, focalDesktop, focalMobile) {
        return { key: key, id: id, targets: [id], label: label, accent: accent, textAccent: textAccent, frame: frame, nav: nav, glow: glow, placeholder: placeholder, lightPlaceholder: 'radial-gradient(circle at 50% 48%, ' + glow + ', transparent 40%)', focalDesktop: focalDesktop, focalMobile: focalMobile, animationClass: 'mg-chapter-motion--' + key, assetReady: false, assets: assets(stem) };
    }
    window.MIMIR_WELL_CONFIG = [
        chapter('existing', 'existing-world', 'Existing World', '#B89455', '#E2CAA0', '#9E835B', '#C7A768', 'rgba(184,148,85,.40)', 'radial-gradient(circle at 68% 35%, rgba(184,148,85,.26), transparent 38%), linear-gradient(180deg,#2a261f,#11151b)', '01-existing-world', '55% 42%', '50% 35%'),
        chapter('understand', 'understand', 'Understand', '#6C9FA8', '#B9DEE0', '#668D93', '#78B2BB', 'rgba(108,159,168,.40)', 'radial-gradient(circle at 34% 46%, rgba(108,159,168,.28), transparent 39%), linear-gradient(180deg,#1a2d31,#10181e)', '02-understand', '48% 48%', '46% 42%'),
        chapter('mapping', 'mapping', 'Mapping', '#657EAA', '#C1D2EE', '#6F7F9E', '#7E9AC8', 'rgba(101,126,170,.42)', 'radial-gradient(circle at 68% 48%, rgba(101,126,170,.30), transparent 39%), linear-gradient(180deg,#202a3c,#111721)', '03-mapping', '52% 50%', '50% 44%'),
        chapter('review', 'review', 'Review', '#A1765C', '#E0BEA8', '#8D705E', '#BB896C', 'rgba(161,118,92,.40)', 'radial-gradient(circle at 30% 50%, rgba(161,118,92,.28), transparent 40%), linear-gradient(180deg,#30241f,#171417)', '04-review', '48% 52%', '48% 46%'),
        chapter('commit', 'commit', 'Commit', '#78879B', '#C9D3E0', '#737F8F', '#92A3B7', 'rgba(120,135,155,.40)', 'radial-gradient(circle at 70% 52%, rgba(120,135,155,.29), transparent 41%), linear-gradient(180deg,#252b33,#11151b)', '05-commit', '52% 55%', '50% 48%'),
        chapter('ownership', 'ownership', 'Ownership', '#75866A', '#CAD7BA', '#6F7B66', '#91A580', 'rgba(117,134,106,.40)', 'radial-gradient(ellipse at 50% 62%, rgba(117,134,106,.28), transparent 42%), linear-gradient(180deg,#252a21,#0f1412)', '06-ownership', '50% 60%', '50% 54%')
    ];
}());
