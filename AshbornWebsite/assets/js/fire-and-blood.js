  const slides = document.querySelectorAll(".carousel-slide");
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let current = 0;

  // Ensure an <img> has its natural sizes before we compute target height
  function ensureLoaded(img) {
    return new Promise(resolve => {
      if (img.complete && img.naturalWidth) return resolve();
      img.addEventListener("load", resolve, { once: true });
      img.addEventListener("error", resolve, { once: true }); // fail safe
    });
  }

  // Compute the height we want for the carousel so image fully fits (contain)
  function targetHeightFor(img) {
    const containerWidth = carousel.clientWidth;           // available width
    const viewportLimit = Math.floor(window.innerHeight * 0.8); // 80vh cap
    const ratio = img.naturalHeight / img.naturalWidth || 9/16; // fallback
    // height needed to display entire image within current width
    const needed = Math.round(containerWidth * ratio);
    // never exceed 80vh (stays on screen)
    return Math.min(needed, viewportLimit);
  }

  // Animate the carousel's height from current -> next cleanly
  async function animateToImage(img) {
    await ensureLoaded(img);                               // make sure we know size

    // Freeze current height (numeric px) so CSS can interpolate both ways
    const from = carousel.offsetHeight;
    const to = targetHeightFor(img);

    // Set current height explicitly to lock the starting point
    carousel.style.height = from + "px";

    // Next frame: set the final height (triggers transition up OR down)
    requestAnimationFrame(() => {
      carousel.style.height = to + "px";
    });
  }

  function setActive(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
  }

  async function showSlide(index) {
    // Target slide/image
    const nextSlide = slides[index];
    const nextImg = nextSlide.querySelector("img");

    // Height animation first, then fade slide in
    await animateToImage(nextImg);
    setActive(index);

    current = index;
  }

  // Controls
  prevBtn.addEventListener("click", () => {
    const next = (current - 1 + slides.length) % slides.length;
    showSlide(next);
  });

  nextBtn.addEventListener("click", () => {
    const next = (current + 1) % slides.length;
    showSlide(next);
  });

  // Initialize on load & update on resize
  window.addEventListener("load", () => showSlide(current));

  window.addEventListener("resize", () => {
    // Recompute height for current image on resize
    const img = slides[current].querySelector("img");
    const to = targetHeightFor(img);
    // lock current then animate to new height
    const from = carousel.offsetHeight;
    carousel.style.height = from + "px";
    requestAnimationFrame(() => { carousel.style.height = to + "px"; });
  });

  let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });
}

// Buttons
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
});

// Touch navigation
let startX = 0;

document.querySelector('.carousel').addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    // swipe left → next
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  } else if (endX - startX > 50) {
    // swipe right → previous
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
});

// Show the first image on load
showImage(currentIndex);
