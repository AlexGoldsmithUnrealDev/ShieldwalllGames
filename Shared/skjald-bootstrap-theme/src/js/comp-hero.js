// ============================================================================
// comp-hero.js
// Hero behaviors: viewport reveal, parallax (scroll + mouse), bg video control
// ============================================================================

(() => {
  const onReady = (fn) =>
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", fn, { once: true })
      : fn();

  const prefersReduced = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ------------------------------------------------------------
  // 1) Viewport reveal: add .is-visible when hero enters view
  //    Works with classes from _animations.scss (e.g., .reveal-up)
  // ------------------------------------------------------------
  function initHeroReveal(hero) {
    const targets = [
      ...hero.querySelectorAll(
        ".reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger"
      ),
    ];
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          // Add once, keep it on (feels snappier for long pages)
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            // If element should reveal only once, unobserve after first hit
            if (el.classList.contains("reveal-once")) io.unobserve(el);
          }
        });
      },
      { root: null, threshold: 0.25 }
    );

    targets.forEach((t) => io.observe(t));
  }

  // ------------------------------------------------------------
  // 2) Scroll parallax: subtle Y/X drift on elements
  //    Use .parallax-y / .parallax-x; optionally data-speed="0.35"
  //    (scroll.js also sets these globally; here we scope to hero only)
  // ------------------------------------------------------------
  function initHeroParallax(hero) {
    if (prefersReduced()) return;

    const els = hero.querySelectorAll(".parallax-y, .parallax-x");
    if (!els.length) return;

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;
      // Only update while hero is at least partially on screen
      if (rect.bottom < 0 || rect.top > viewportH) return;

      const progress = clamp(1 - rect.top / (rect.height + viewportH), 0, 1);
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.speed) || 0.3;
        if (el.classList.contains("parallax-y")) {
          el.style.setProperty("--parallax-y", `${(progress - 0.5) * -40 * speed}px`);
        }
        if (el.classList.contains("parallax-x")) {
          el.style.setProperty("--parallax-x", `${(progress - 0.5) *  40 * speed}px`);
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ------------------------------------------------------------
  // 3) Mouse parallax for foreground accents
  //    Add data-parallax-mouse (speed defaults to 0.05)
  // ------------------------------------------------------------
  function initMouseParallax(hero) {
    if (prefersReduced()) return;

    const els = hero.querySelectorAll("[data-parallax-mouse]");
    if (!els.length) return;

    let raf = 0;
    let mx = 0, my = 0; // mouse
    let tx = 0, ty = 0; // target (lerp)

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;  // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      mx = (x - 0.5) * 2; // -1..1
      my = (y - 0.5) * 2; // -1..1

      if (!raf) raf = requestAnimationFrame(tick);
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      tx = lerp(tx, mx, 0.08);
      ty = lerp(ty, my, 0.08);

      els.forEach((el) => {
        const s = parseFloat(el.dataset.parallaxMouse) || 0.05;
        el.style.transform = `translate3d(${(-tx * 30 * s).toFixed(2)}px, ${(ty * 30 * s).toFixed(2)}px, 0)`;
      });

      if (Math.abs(tx - mx) > 0.002 || Math.abs(ty - my) > 0.002) {
        raf = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    hero.addEventListener("mousemove", onMove);
  }

  // ------------------------------------------------------------
  // 4) Background video: auto play/pause in view, mute by default
  //    Mark video element with data-hero-video (and optionally:
  //    data-hero-video-autoplay="false" data-hero-video-muted="false")
  // ------------------------------------------------------------
  function initHeroVideo(hero) {
    const video =
      hero.querySelector("video[data-hero-video]") ||
      hero.querySelector(".hero-media video");

    if (!video) return;

    const autoPlay = video.getAttribute("data-hero-video-autoplay") !== "false";
    const shouldMute = video.getAttribute("data-hero-video-muted") !== "false";

    // Mobile/autoplay sanity: prefer muted inline playback
    video.muted = shouldMute;
    video.playsInline = true;

    const playSafely = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay might be blocked; ignore
      }
    };

    if (!autoPlay) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playSafely();
          } else {
            // Pause when out of view to save battery/CPU
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    io.observe(hero);
  }

  // ------------------------------------------------------------
  // 5) Initialize all heroes on the page
  // ------------------------------------------------------------
  onReady(() => {
    const heroes = document.querySelectorAll(".section-hero");
    if (!heroes.length) return;

    heroes.forEach((hero) => {
      initHeroReveal(hero);
      initHeroParallax(hero);
      initMouseParallax(hero);
      initHeroVideo(hero);
    });
  });
})();
