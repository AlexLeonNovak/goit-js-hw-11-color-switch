const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

function startChangeColor() {
    if (intervalId) {
        return;
    }

    refs.startBtn.disabled = true;

    intervalId = setInterval(() => {
        const colorId = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.backgroundColor = colors[colorId];
    }, 1000);
}

function stopChangeColor() {
    if (!intervalId) {
        return;
    }

    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    intervalId = null;
}
