// Get elements
const slides = document.querySelectorAll(".carousel-slide");
const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let current = 0;
let autoSlideInterval;
const intervalTime = 5000; // 5 seconds per slide

// Show the active slide
function setActive(index) {
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
}

// Move to a specific slide
function showSlide(index) {
  setActive(index);
  current = index;
}

// Next / Previous slide helpers
function nextSlide() {
  const next = (current + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (current - 1 + slides.length) % slides.length;
  showSlide(prev);
}

// Start auto sliding
function startAutoSlide() {
  stopAutoSlide(); // clear any existing interval
  autoSlideInterval = setInterval(nextSlide, intervalTime);
}

// Stop auto sliding
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Controls
prevBtn.addEventListener("click", () => {
  prevSlide();
  startAutoSlide(); // reset timer
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  startAutoSlide(); // reset timer
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
    startAutoSlide();
  }
  if (e.key === "ArrowRight") {
    nextSlide();
    startAutoSlide();
  }
});

// Pause on hover with visual feedback
carouselContainer.addEventListener("mouseenter", () => {
  stopAutoSlide();
  carouselContainer.classList.add("paused"); // add class for hover effect
});

carouselContainer.addEventListener("mouseleave", () => {
  startAutoSlide();
  carouselContainer.classList.remove("paused"); // remove class
});

// Initialize
window.addEventListener("load", () => {
  showSlide(current);
  startAutoSlide();
});
