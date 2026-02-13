const giftBox = document.getElementById("giftBox");
let clicks = 0;
const requiredClicks = 5;
let currentScale = 1;      // current cumulative scale
const scaleStep = 0.1;     // how much it grows per click
const maxScale = 1.5;      // maximum scale

giftBox.addEventListener("click", () => {
  clicks++;

  // increase scale gradually, up to max
  currentScale += scaleStep;
  if (currentScale > maxScale) currentScale = maxScale;

  // apply scale with a quick pulse
  giftBox.style.transform = `scale(${currentScale * 1.05})`; // slightly bigger on click

  setTimeout(() => {
    // shrink slightly back, but keep cumulative size
    giftBox.style.transform = `scale(${currentScale})`;
  }, 150);

  // If reached required clicks, go to gift.html
  if (clicks >= requiredClicks) {
    window.location.href = "gift.html";
  }
});


