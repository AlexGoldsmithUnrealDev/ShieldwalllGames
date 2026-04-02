/* ==========================================================================
   Ashborn JS — Page-specific interactions for the Ashborn landing page
   Extends the shared behaviour from main.js.

   All JS is progressive enhancement — the page works fully without it.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ----------------------------------------------------------------------
       Development Timeline Animation
       When the timeline section enters the viewport, each stage animates
       in with a staggered delay (left-to-right on desktop, top-to-bottom
       on mobile). Uses IntersectionObserver for scroll-triggered entry.
       ---------------------------------------------------------------------- */
    function initTimelineAnimation() {
        var timeline = document.querySelector('.dev-timeline');
        if (!timeline) return;

        var stages = timeline.querySelectorAll('.timeline-stage');
        if (!stages.length) return;

        /* Progressive enhancement: if no IntersectionObserver, show all */
        if (!('IntersectionObserver' in window)) {
            stages.forEach(function (stage) {
                stage.classList.add('is-visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    /* Stagger each stage with a 200ms delay */
                    stages.forEach(function (stage, index) {
                        setTimeout(function () {
                            stage.classList.add('is-visible');
                        }, index * 200);
                    });

                    /* Only animate once — stop observing after trigger */
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -60px 0px'
        });

        observer.observe(timeline);
    }

    /* ----------------------------------------------------------------------
       Initialise Ashborn-specific modules
       ---------------------------------------------------------------------- */
    initTimelineAnimation();

});
