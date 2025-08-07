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
