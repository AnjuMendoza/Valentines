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

//Carousel

const carouselContainer = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");

function updateFocus() {
    const containerCenter = carouselContainer.scrollTop + carouselContainer.offsetHeight / 2;

    items.forEach(item => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;
        const itemCenter = itemTop + itemHeight / 2;

        // If item is near center of container, add focus
        if (Math.abs(containerCenter - itemCenter) < itemHeight / 2) {
            item.classList.add("focus");
        } else {
            item.classList.remove("focus");
        }
    });

    // Looping effect: if scrolled to bottom, jump back to start
    if (carouselContainer.scrollTop + carouselContainer.offsetHeight >= carouselContainer.scrollHeight - 10) {
        carouselContainer.scrollTop = 0;
    }
}

// Update focus on scroll
carouselContainer.addEventListener("scroll", updateFocus);

// Initialize focus on page load
window.addEventListener("load", () => {
    updateFocus();
});
