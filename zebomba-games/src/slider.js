const sliderMoving = document.querySelector('.slider__moving');
const sliderNext = document.querySelector('.slider__next');
const sliderBack = document.querySelector('.slider__back');

let currentIndex = 0;
const itemWidth = 50;
const gap = 11;
const totalWidth = itemWidth + gap;

const totalItems = sliderMoving.children.length;
const visibleItems = 8;
const maxIndex = totalItems - visibleItems;

function updateButtons() {
    sliderNext.disabled = currentIndex >= maxIndex;
    sliderBack.disabled = currentIndex <= 0;
}

updateButtons();

sliderNext.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        sliderMoving.style.transform = `translateX(-${currentIndex * totalWidth}px)`;
        updateButtons();
    }
});

sliderBack.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        sliderMoving.style.transform = `translateX(-${currentIndex * totalWidth}px)`;
        updateButtons();
    }
});
