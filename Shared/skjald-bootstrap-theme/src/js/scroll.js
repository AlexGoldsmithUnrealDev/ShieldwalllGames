// ============================================================================
// scroll.js
// Handles vertical snap scrolling, section highlighting, and parallax hints
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------
  // 1) Section Snap (CSS-driven)
  // ------------------------------
  // CSS already does most of the work with .snap-y and .snap-start.
  // We just ensure the container has the right properties if JS is present.
  const snapContainers = document.querySelectorAll(".snap-y");
  snapContainers.forEach(container => {
    container.style.scrollBehavior = "smooth";
    container.style.overscrollBehaviorY = "contain";
  });

  // ------------------------------
  // 2) IntersectionObserver for nav highlighting
  // ------------------------------
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-skjald .nav-link[href^='#'], .nav-indicator .dot");

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          const relatedLinks = document.querySelectorAll(
            `.navbar-skjald .nav-link[href="#${id}"], .nav-indicator .dot[data-target="#${id}"]`
          );

          if (entry.isIntersecting) {
            relatedLinks.forEach(link => link.classList.add("is-active", "active"));
          } else {
            relatedLinks.forEach(link => link.classList.remove("is-active", "active"));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px", // trigger when section is halfway
        threshold: 0.5
      }
    );

    sections.forEach(sec => observer.observe(sec));
  }

  // ------------------------------
  // 3) Auto-hide navbar on scroll
  // ------------------------------
  const navbar = document.querySelector(".navbar-skjald.auto-hide");
  if (navbar) {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 100) {
        navbar.classList.add("is-hidden");
      } else {
        navbar.classList.remove("is-hidden");
      }

      if (currentY <= 0) {
        navbar.classList.add("is-top");
        navbar.classList.remove("is-scrolled");
      } else {
        navbar.classList.remove("is-top");
        navbar.classList.add("is-scrolled");
      }

      lastScrollY = currentY;
    });
  }

  // ------------------------------
  // 4) Parallax background helper
  // ------------------------------
  // For any element with .parallax-y or .parallax-x
  const parallaxEls = document.querySelectorAll(".parallax-y, .parallax-x");
  if (parallaxEls.length) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      parallaxEls.forEach(el => {
        if (el.classList.contains("parallax-y")) {
          const speed = parseFloat(el.dataset.speed) || 0.3;
          el.style.setProperty("--parallax-y", `${scrollY * speed * -0.2}px`);
        }
        if (el.classList.contains("parallax-x")) {
          const speed = parseFloat(el.dataset.speed) || 0.3;
          el.style.setProperty("--parallax-x", `${scrollY * speed * -0.2}px`);
        }
      });
    });
  }

  // ------------------------------
  // 5) Scroll-to-top button (optional)
  // ------------------------------
  const scrollTopBtn = document.querySelector(".scroll-to-top");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
