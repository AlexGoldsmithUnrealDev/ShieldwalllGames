/*
 * Roadmap-specific Well artwork configuration.
 *
 * Final artwork belongs in mimir/assets/backgrounds/roadmap/. Each phase
 * supports aligned dark/lit desktop and mobile files. Until those files are
 * supplied, assetReady remains false and the shared Well controller uses the
 * layered lighting placeholders below.
 */
(function () {
    'use strict';

    function assets(stem) {
        return {
            desktopDark: 'assets/backgrounds/roadmap/' + stem + '-dark.avif',
            desktopLight: 'assets/backgrounds/roadmap/' + stem + '-lit.avif',
            mobileDark: 'assets/backgrounds/roadmap/' + stem + '-dark-mobile.avif',
            mobileLight: 'assets/backgrounds/roadmap/' + stem + '-lit-mobile.avif'
        };
    }

    window.MIMIR_WELL_CONFIG = [
        {
            key: 'current',
            id: 'current',
            targets: ['roadmap-overview', 'current'],
            label: 'Current',
            accent: '#C9A45A',
            textAccent: '#E0C37D',
            frame: '#668FB5',
            nav: '#C9A45A',
            glow: 'rgba(201, 164, 90, 0.34)',
            placeholder: 'radial-gradient(circle at 22% 34%, rgba(201,164,90,.22), transparent 27%), radial-gradient(circle at 74% 56%, rgba(102,143,181,.20), transparent 34%), linear-gradient(180deg, #202a32 0%, #18232d 54%, #121a22 100%)',
            lightPlaceholder: 'radial-gradient(circle at 22% 36%, rgba(221,181,95,.38), transparent 29%), radial-gradient(circle at 76% 54%, rgba(102,143,181,.32), transparent 38%)',
            focalDesktop: '50% 44%',
            focalMobile: '48% 38%',
            animationClass: 'rm-phase-motion--current',
            assetReady: false,
            assets: assets('01-current')
        },
        {
            key: 'beta',
            id: 'beta',
            targets: ['beta'],
            label: 'Public Beta',
            accent: '#4C91C7',
            textAccent: '#8ED0EA',
            frame: '#73B7D8',
            nav: '#73B7D8',
            glow: 'rgba(76, 145, 199, 0.38)',
            placeholder: 'radial-gradient(circle at 68% 36%, rgba(115,183,216,.27), transparent 34%), linear-gradient(180deg, #172938 0%, #112333 56%, #0d1b28 100%)',
            lightPlaceholder: 'radial-gradient(circle at 66% 40%, rgba(92,178,220,.42), transparent 38%), linear-gradient(150deg, transparent 24%, rgba(115,183,216,.09) 48%, transparent 66%)',
            focalDesktop: '52% 48%',
            focalMobile: '50% 42%',
            animationClass: 'rm-phase-motion--beta',
            assetReady: false,
            assets: assets('02-beta')
        },
        {
            key: 'refine',
            id: 'refine',
            targets: ['refine'],
            label: 'Refine',
            accent: '#4F8573',
            textAccent: '#82BDAA',
            frame: '#5B9A8B',
            nav: '#6BB39E',
            glow: 'rgba(79, 133, 115, 0.38)',
            placeholder: 'radial-gradient(circle at 28% 48%, rgba(79,133,115,.26), transparent 36%), radial-gradient(circle at 78% 28%, rgba(91,154,139,.11), transparent 28%), linear-gradient(180deg, #152824 0%, #10211f 58%, #0b1918 100%)',
            lightPlaceholder: 'radial-gradient(circle at 28% 50%, rgba(91,154,139,.42), transparent 38%), radial-gradient(circle at 76% 28%, rgba(96,165,148,.18), transparent 30%)',
            focalDesktop: '48% 50%',
            focalMobile: '46% 46%',
            animationClass: 'rm-phase-motion--refine',
            assetReady: false,
            assets: assets('03-refinement')
        },
        {
            key: 'expand',
            id: 'expand',
            targets: ['expand'],
            label: 'Expand',
            accent: '#575EC6',
            textAccent: '#81D0E0',
            frame: '#56AFC5',
            nav: '#69C4D8',
            glow: 'rgba(87, 94, 198, 0.42)',
            placeholder: 'radial-gradient(circle at 74% 48%, rgba(86,175,197,.25), transparent 34%), radial-gradient(circle at 28% 35%, rgba(87,94,198,.25), transparent 33%), linear-gradient(180deg, #171a35 0%, #11152c 56%, #0c1124 100%)',
            lightPlaceholder: 'radial-gradient(circle at 72% 48%, rgba(86,175,197,.40), transparent 36%), radial-gradient(circle at 30% 35%, rgba(87,94,198,.38), transparent 35%)',
            focalDesktop: '52% 52%',
            focalMobile: '50% 48%',
            animationClass: 'rm-phase-motion--expand',
            assetReady: false,
            assets: assets('04-expansion')
        },
        {
            key: 'horizon',
            id: 'horizon',
            targets: ['horizon', 'roadmap-beta-signup'],
            label: 'Horizon',
            accent: '#654B7D',
            textAccent: '#839FDF',
            frame: '#4468A9',
            nav: '#728ED0',
            glow: 'rgba(101, 75, 125, 0.42)',
            placeholder: 'radial-gradient(ellipse at 50% 72%, rgba(68,104,169,.23), transparent 40%), radial-gradient(circle at 75% 28%, rgba(101,75,125,.22), transparent 32%), linear-gradient(180deg, #171426 0%, #0e1020 60%, #080c18 100%)',
            lightPlaceholder: 'linear-gradient(176deg, transparent 0 64%, rgba(68,104,169,.12) 72%, transparent 80%), radial-gradient(ellipse at 50% 74%, rgba(84,122,196,.28), transparent 40%), radial-gradient(circle at 74% 28%, rgba(123,89,153,.30), transparent 34%)',
            focalDesktop: '50% 58%',
            focalMobile: '50% 54%',
            animationClass: 'rm-phase-motion--horizon',
            assetReady: false,
            assets: assets('05-horizon')
        }
    ];
}());
