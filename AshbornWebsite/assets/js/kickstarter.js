// /assets/js/kickstarter.js

document.addEventListener("DOMContentLoaded", () => {
  // === COUNTDOWN TO LAUNCH ===
  const launchDate = new Date("2025-12-01T00:00:00Z").getTime();

  const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance <= 0) {
      clearInterval(countdownTimer);
      const countdown = document.getElementById("countdown");
      if (countdown) countdown.innerHTML = "We are live on Kickstarter!";
    } else {
      document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
      document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }, 1000);

  // === FUNDING BAR LOGIC ===
  const goal = 100000;
  const current = 0; // Replace this with a dynamic value if desired
  const percentage = Math.min(100, (current / goal) * 100);

  const fill = document.getElementById("progress-fill");
  const amount = document.getElementById("funding-amount");

  if (fill) fill.style.width = percentage + "%";
  if (amount) amount.innerText = `$${current.toLocaleString()} of $${goal.toLocaleString()} goal`;
});


  // Detailed tier data for modal
  const tierDetails = {
  1: {
    title: "🔥 Ember Supporter",
    price: "$10",
    description: "Show your support and join our exclusive community Discord. Your name will appear on our supporters page.",
    image: "../assets/images/tier1.jpg"
  },
  2: {
    title: "⚔ Ashborn Recruit",
    price: "$25",
    description: "Receive a digital wallpaper pack, early access demo, and Ember Supporter rewards.",
    image: "../assets/images/tier2.jpg"
  },
  3: {
    title: "🏰 Founder's Banner",
    price: "$50",
    description: "Includes all previous rewards plus an exclusive in-game banner to show your support.",
    image: "../assets/images/tier3.jpg"
  },
  4: {
    title: "🐉 Dragonlord Patron",
    price: "$100",
    description: "All previous rewards plus your name in the game credits and a special gold Discord role.",
    image: "../assets/images/tier4.jpg"
  }
};


  // Elements
  const modal = document.getElementById("tier-modal");
  const modalDetails = document.getElementById("modal-details");
  const modalClose = document.querySelector(".modal-close");
  const modalContent = modal.querySelector(".modal-content");
        modalContent.style.animation = "none"; // Reset animation
  void  modalContent.offsetWidth; // Force reflow
        modalContent.style.animation = "zoomIn 0.4s ease forwards";

  // Event: Click tier card to open modal
  document.querySelectorAll(".tier-card").forEach(card => {
    card.addEventListener("click", () => {
      const tierId = card.getAttribute("data-tier");
      const data = tierDetails[tierId];
      modalDetails.innerHTML = `
        <img src="${data.image}" alt="${data.title}">
        <h2>${data.title}</h2>
        <p><strong>${data.price}</strong></p>
        <p>${data.description}</p>
      `;

      // Reset animation by forcing reflow
      const modalContent = modal.querySelector(".modal-content");
      modalContent.style.animation = "none";
      void modalContent.offsetWidth; // Trigger reflow
      modalContent.style.animation = "zoomIn 0.3s ease forwards";

      modal.style.display = "block";
    });
  });

  // Event: Close modal
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Event: Click outside modal to close
  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
