const carouselContainer = document.querySelector(".carousel-container");
const items = Array.from(document.querySelectorAll(".carousel-item"));

// Focus effect: enlarge the photo closest to center
function updateFocus() {
    const containerCenter = carouselContainer.scrollTop + carouselContainer.offsetHeight / 2;

    items.forEach(item => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;
        const itemCenter = itemTop + itemHeight / 2;

        if (Math.abs(containerCenter - itemCenter) < itemHeight / 2) {
            item.classList.add("focus");
        } else {
            item.classList.remove("focus");
        }
    });
}

// Update focus when user scrolls manually
carouselContainer.addEventListener("scroll", updateFocus);

// Initialize focus on load
window.addEventListener("load", updateFocus);

