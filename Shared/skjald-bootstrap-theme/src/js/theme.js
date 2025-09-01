// ============================================================================
// src/js/theme.js
// Master entry: imports CSS, loads Bootstrap, bootstraps UX helpers & components
// ============================================================================

// 1) Import the theme stylesheet so Vite emits dist/css/skjald.min.css
import '../scss/theme.scss';

// 2) Bootstrap JS (dropdowns, tooltips, toasts, scrollspy, etc.)
import 'bootstrap';

// 3) Component modules (safe to include; no-op if markup not present)
import './comp-navbar.js';
import './scroll.js';
import './comp-hero.js';

// ----------------------------------------------------------------------------
// Guard against double-initialization (if script is included twice by mistake)
// ----------------------------------------------------------------------------
if (!window.__SKJALD_INIT__) {
  window.__SKJALD_INIT__ = true;

  // Small helper: run when DOM is ready
  const onReady = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  };

  // ----------------------------------------------------------------------------
  // THEME MODE
  // Modes: 'light' | 'dark' | 'auto' (auto follows system preference)
  // ----------------------------------------------------------------------------
  const STORAGE_KEY = 'skjald-theme';

  const systemPrefersDark = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const resolveMode = (mode) => (mode === 'auto' ? (systemPrefersDark() ? 'dark' : 'light') : mode);

  const applyTheme = (mode) => {
    const finalMode = resolveMode(mode);
    const html = document.documentElement;
    html.setAttribute('data-bs-theme', finalMode);
    // Announce to any listeners (charts, maps, custom components)
    const evt = new CustomEvent('skjald:themechange', { detail: { mode, resolved: finalMode } });
    window.dispatchEvent(evt);
  };

  // Initialize theme using:
  //  1) localStorage (user choice persists)
  //  2) html[data-bs-theme] if explicitly set to 'light' or 'dark'
  //  3) default to 'auto'
  const bootstrapTheme = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const fromAttr = document.documentElement.getAttribute('data-bs-theme');
    const attrIsExplicit = fromAttr === 'light' || fromAttr === 'dark' || fromAttr === 'auto';
    const mode = stored || (attrIsExplicit ? fromAttr : 'auto');
    applyTheme(mode);
  };

  const setTheme = (mode = 'auto') => {
    localStorage.setItem(STORAGE_KEY, mode);
    applyTheme(mode);
  };

  const getTheme = () => localStorage.getItem(STORAGE_KEY) || 'auto';

  const toggleTheme = () => {
    const curr = resolveMode(getTheme());
    setTheme(curr === 'dark' ? 'light' : 'dark');
  };

  // React to system theme changes when using 'auto'
  const watchSystemTheme = () => {
    if (!window.matchMedia) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if ((localStorage.getItem(STORAGE_KEY) || 'auto') === 'auto') {
        applyTheme('auto');
      }
    };
    try {
      media.addEventListener('change', handler);
    } catch {
      // Safari < 14 fallback
      media.addListener && media.addListener(handler);
    }
  };

  // Cross-tab sync for theme choice
  const watchStorage = () => {
    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY) {
        applyTheme(e.newValue || 'auto');
      }
    });
  };

  // ----------------------------------------------------------------------------
  // ACCESSIBILITY & POLISH
  // ----------------------------------------------------------------------------
  // Show outline rings only for keyboard users
  const initFocusVisible = () => {
    const onKey = (e) => {
      if (e.key === 'Tab') {
        document.documentElement.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', onKey);
        window.addEventListener('mousedown', onMouseDownOnce);
      }
    };
    const onMouseDownOnce = () => {
      document.documentElement.classList.remove('user-is-tabbing');
      window.removeEventListener('mousedown', onMouseDownOnce);
      window.addEventListener('keydown', onKey);
    };
    window.addEventListener('keydown', onKey);
  };

  // iOS/Safari viewport unit fix: sets --vh to the innerHeight-based 1vh
  const initIOSVHFallback = () => {
    let raf = 0;
    const setVH = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
      });
    };
    setVH();
    window.addEventListener('resize', setVH, { passive: true });
  };

  // Respect reduced-motion preference
  const prefersReducedMotion = () =>
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const initMotionGuards = () => {
    const html = document.documentElement;
    const mark = () => {
      if (prefersReducedMotion()) html.classList.add('reduced-motion');
      else html.classList.remove('reduced-motion');
    };
    mark();
    // Watch for changes at runtime
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    try {
      m.addEventListener('change', mark);
    } catch {
      m.addListener && m.addListener(mark);
    }
  };

  // ----------------------------------------------------------------------------
  // BOOTSTRAP ENHANCEMENTS
  // ----------------------------------------------------------------------------
  const hasBootstrap = () => !!(window.bootstrap && window.bootstrap.Tooltip);

  const initTooltips = () => {
    if (!hasBootstrap()) return;
    const triggers = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    triggers.forEach((el) => {
      // eslint-disable-next-line no-new
      new window.bootstrap.Tooltip(el, { container: 'body', trigger: 'hover focus' });
    });
  };

  const refreshTooltips = () => {
    if (!hasBootstrap()) return;
    const list = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    list.forEach((el) => {
      const inst = window.bootstrap.Tooltip.getInstance(el);
      if (inst) inst.update();
    });
  };

  const initToasts = () => {
    if (!hasBootstrap()) return;
    const nodes = document.querySelectorAll('.toast');
    nodes.forEach((node) => {
      const toast = new window.bootstrap.Toast(node, {
        autohide: node.dataset.autohide !== 'false',
        delay: parseInt(node.dataset.delay || '3000', 10)
      });
      if (node.dataset.autoshow === 'true') toast.show();
    });
  };

  const initScrollSpy = () => {
    if (!hasBootstrap()) return;
    // Enable ScrollSpy when declared via data attributes
    const spies = document.querySelectorAll('[data-bs-spy="scroll"]');
    spies.forEach((el) => {
      // eslint-disable-next-line no-new
      new window.bootstrap.ScrollSpy(el, {
        target: el.getAttribute('data-bs-target') || '#mainNav',
        offset: parseInt(el.getAttribute('data-bs-offset') || '100', 10)
      });
    });
  };

  const refreshScrollSpy = () => {
    if (!hasBootstrap()) return;
    const spies = document.querySelectorAll('[data-bs-spy="scroll"]');
    spies.forEach((el) => {
      const inst = window.bootstrap.ScrollSpy.getInstance(el);
      if (inst && typeof inst.refresh === 'function') inst.refresh();
    });
  };

  // ----------------------------------------------------------------------------
  // KICKOFF
  // ----------------------------------------------------------------------------
  onReady(() => {
    // Theme
    bootstrapTheme();
    watchSystemTheme();
    watchStorage();

    // A11y & polish
    initFocusVisible();
    initIOSVHFallback();
    initMotionGuards();

    // Bootstrap behaviors
    initTooltips();
    initToasts();
    initScrollSpy();

    // Public API for pages/overrides
    window.Skjald = Object.freeze({
      // Theme
      setTheme,
      getTheme,
      toggleTheme,
      // Motion & prefs
      prefersReducedMotion,
      // Bootstrap helpers
      refreshTooltips,
      refreshScrollSpy,
      // Misc
      version: '1.0.0'
    });
  });
}
