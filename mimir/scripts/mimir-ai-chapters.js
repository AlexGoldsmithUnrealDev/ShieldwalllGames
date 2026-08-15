/* Data-driven Well lighting and future artwork paths for the Mimir AI page. */
(function () {
    'use strict';

    function assets(stem) {
        return {
            desktopDark: 'assets/backgrounds/mimir-ai/' + stem + '-dark.avif',
            desktopLight: 'assets/backgrounds/mimir-ai/' + stem + '-lit.avif',
            mobileDark: 'assets/backgrounds/mimir-ai/' + stem + '-dark-mobile.avif',
            mobileLight: 'assets/backgrounds/mimir-ai/' + stem + '-lit-mobile.avif'
        };
    }

    window.MIMIR_WELL_CONFIG = [
        chapter('question', 'ask', ['ask'], 'Ask', '#3E64C5', '#A7C8E8', '#536EB6', '#6F91E1', 'rgba(62,100,197,.40)', 'radial-gradient(circle at 68% 36%, rgba(62,100,197,.27), transparent 37%), linear-gradient(180deg,#20253a,#111724)', '01-question', '56% 42%', '50% 34%'),
        chapter('grounding', 'grounding', ['grounding'], 'Grounding', '#477CC4', '#AED3EC', '#5C88BE', '#6FA9D9', 'rgba(71,124,196,.42)', 'radial-gradient(circle at 34% 44%, rgba(71,124,196,.29), transparent 38%), linear-gradient(180deg,#17283d,#0e1828)', '02-grounding', '48% 48%', '46% 42%'),
        chapter('truth', 'truth', ['truth'], 'Truth', '#5966BA', '#B7C4F0', '#6873B5', '#8190DD', 'rgba(89,102,186,.42)', 'radial-gradient(circle at 70% 45%, rgba(89,102,186,.29), transparent 38%), linear-gradient(180deg,#202442,#11162c)', '03-truth', '52% 50%', '50% 44%'),
        chapter('review', 'review', ['review'], 'Review', '#654D9E', '#C4B4EA', '#775EB0', '#8E73CA', 'rgba(101,77,158,.42)', 'radial-gradient(circle at 30% 48%, rgba(101,77,158,.30), transparent 38%), linear-gradient(180deg,#271f3d,#151329)', '04-review', '48% 52%', '48% 46%'),
        chapter('language', 'language-context', ['language-context'], 'Language', '#3F829F', '#A7D7E7', '#508BA3', '#63A8C0', 'rgba(63,130,159,.42)', 'radial-gradient(circle at 70% 50%, rgba(63,130,159,.29), transparent 40%), linear-gradient(180deg,#172d3a,#0d1a27)', '05-language', '52% 54%', '50% 48%'),
        chapter('control', 'control', ['control'], 'Control', '#506C9B', '#B6CBE4', '#607AA3', '#7795BC', 'rgba(80,108,155,.40)', 'radial-gradient(ellipse at 50% 62%, rgba(80,108,155,.30), transparent 42%), linear-gradient(180deg,#1b2535,#0a111c)', '06-control', '50% 60%', '50% 54%')
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
            animationClass: 'ai-chapter-motion--' + key,
            assetReady: false,
            assets: assets(stem)
        };
    }
}());
