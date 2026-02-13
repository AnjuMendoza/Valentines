const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');

noBtn.addEventListener('click', () => {
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const yesRect = yesBtn.getBoundingClientRect();

    let randomX, randomY;
    let safe = false;

    // Keep trying random positions until it doesn't overlap the Yes button
    while (!safe) {
        randomX = Math.random() * (bodyWidth - btnWidth);
        randomY = Math.random() * (bodyHeight - btnHeight);

        const noRect = {
            left: randomX,
            right: randomX + btnWidth,
            top: randomY,
            bottom: randomY + btnHeight
        };

        // Check overlap with Yes button
        if (
            noRect.right < yesRect.left ||
            noRect.left > yesRect.right ||
            noRect.bottom < yesRect.top ||
            noRect.top > yesRect.bottom
        ) {
            safe = true;
        }
    }

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
