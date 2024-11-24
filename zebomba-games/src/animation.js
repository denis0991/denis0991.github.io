const backGroundBtn = document.querySelector('.background__btn');
const person = document.querySelector('.background__person');

const points = [
    { x: "444", y: "505" },
        { x: "408", y: "476" },
        { x: "388", y: "465" },
        { x: "370", y: "466" },
        { x: "350", y: "474" },
        { x: "333", y: "486" },
        { x: "317", y: "495" },
        { x: "298", y: "507" },
        { x: "276", y: "518" },
        { x: "260", y: "527" },
        { x: "235", y: "534" },
        { x: "210", y: "537" },
        { x: "190", y: "537" },
        { x: "171", y: "536" },
        { x: "148", y: "531" },
        { x: "127", y: "520" },
        { x: "111", y: "509" },
        { x: "95", y: "501" },
        { x: "84", y: "488" },
        { x: "87", y: "468" },
        { x: "121", y: "446" }
].map(point => ({ x: Number(point.x), y: Number(point.y) }));

let position = 0;

let currentIndex = 0;

person.style.left = `${points[0].x - 10}px`;
person.style.top = `${points[0].y - 69}px`;

function animateMove(start, end, callback) {
const duration = 300; // Длительность анимации
const startTime = performance.now();
function move(timestamp) {
const elapsed = timestamp - startTime;
const progress = Math.min(elapsed / duration, 1);
const currentX = start.x + (end.x - start.x) * progress - 10;
const currentY = start.y + (end.y - start.y) * progress - 69;
person.style.left = `${currentX}px`;
person.style.top = `${currentY}px`;
if (progress < 1) {
    requestAnimationFrame(move);
} else if (callback) {
    callback();
}
}
    requestAnimationFrame(move);
}

function moveToNextPoints() {
    let steps = 0;
    backGroundBtn.removeEventListener('click', moveToNextPoints);
    function moveNext() {
        if (steps < 4 && currentIndex < points.length - 1) {
            animateMove(points[currentIndex], points[currentIndex + 1], () => {
                currentIndex++;
                steps++;
                moveNext();
            });
        } else {
            setTimeout(() => {
                backGroundBtn.addEventListener('click', moveToNextPoints);
            }, 300);
        }
    }

    moveNext();
}

backGroundBtn.addEventListener('click', moveToNextPoints);