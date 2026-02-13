const giftBox = document.getElementById("giftBox");
let clicks = 0;
const requiredClicks = 5;

giftBox.addEventListener("click", () => {
  clicks++;

  // Add temporary scale animation
  giftBox.style.transform = "scale(1.1)";
  
  setTimeout(() => {
    giftBox.style.transform = "scale(1)";
  }, 150);

  // If reached required clicks, go to gift.html
  if (clicks >= requiredClicks) {
    window.location.href = "gift.html";
  }
});
