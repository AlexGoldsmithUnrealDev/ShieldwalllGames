// /assets/js/header.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("../partials/header.html")
    .then(res => res.text())
    .then(html => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;

      const header = wrapper.querySelector("header");
      const footer = wrapper.querySelector("footer");

      document.body.prepend(header);
      document.body.appendChild(footer);

      // Fade background when scrolling away from video
      const observerTarget = document.querySelector(".hero") || document.querySelector("iframe");

      const navHeader = document.querySelector(".site-header");

      if (observerTarget && navHeader) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            navHeader.classList.toggle("scrolled", !entry.isIntersecting);
          },
          { threshold: 0.1 }
        );

        observer.observe(observerTarget);
      }
    });
});
