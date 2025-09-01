// comp-navbar.js
// Handles rendering and behavior of the site navbar component

document.addEventListener('DOMContentLoaded', () => {
  // === Build Navbar ===
  const header = document.querySelector("header");
  if (!header) return;

  header.innerHTML = `
    <div class="header-inner">
      <div class="nav-left">
        <a href="index.html" class="brand-link">
          <img src="images/bgimage.jpg" alt="Ashborn Logo" class="logo">
          <h1>
            <span class="shimmer-text" data-text="Ashborn: Fire and Blood">
              Ashborn: Fire and Blood
            </span>
          </h1>
        </a>
      </div>

      <!-- Hamburger Icon -->
      <button class="hamburger" aria-label="Toggle navigation">☰</button>

      <!-- Navigation Menu -->
      <nav class="nav-menu">
        <ul>
          <li><a href="#">Game</a></li>
          <li><a href="kickstarter.html">Kickstarter</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">Devlog</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </div>
  `;

  // === Toggle Hamburger Menu ===
  const hamburger = header.querySelector(".hamburger");
  const navMenu = header.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // === Close nav on link click (mobile UX) ===
  const links = navMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
});
