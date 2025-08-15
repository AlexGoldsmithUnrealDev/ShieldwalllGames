// <!-- MODAL -->
<div id="news-modal" class="modal">
  <div class="modal-content">
    <span class="modal-close">&times;</span>
    <div id="news-details"></div>
  </div>
</div>


const updates = {
  1: {
    title: "🔥 Combat System Overhaul",
    content: "Detailed breakdown of our revamped battle mechanics...",
    image: "images/update1.jpg"
  },
  2: {
    title: "🏰 New Stronghold Area",
    content: "Introducing the fortress hub area, a safe zone for players...",
    image: "images/update2.jpg"
  },
  3: {
    title: "🐉 Enemy Dragon Preview",
    content: "Meet one of Ashborn's most fearsome enemies...",
    image: "images/update3.jpg"
  }
};

const newsModal = document.getElementById("news-modal");
const newsDetails = document.getElementById("news-details");

document.querySelectorAll(".update-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    const data = updates[id];
    newsDetails.innerHTML = `
      <img src="${data.image}" style="width:100%; border-radius:8px; margin-bottom:15px;">
      <h2>${data.title}</h2>
      <p>${data.content}</p>
    `;
    newsModal.style.display = "block";
  });
});

document.querySelector(".modal-close").addEventListener("click", () => {
  newsModal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === newsModal) {
    newsModal.style.display = "none";
  }
});

