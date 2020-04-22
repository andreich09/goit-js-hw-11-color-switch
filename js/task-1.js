const colors = [ '#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548' ];
const body = document.querySelector('body');
const startBtn = document.querySelector("[data-action='start']");
const stopBtn = document.querySelector("[data-action='stop']");
let intervalId;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function startChangeColor() {
    intervalId = setInterval(() => {
        body.style = `background-color:${colors[randomIntegerFromInterval(0, colors.length - 1)]}`;
    }, 1000);
    startBtn.disabled = true;
}

function stopChangeColor() {
    clearInterval(intervalId);
    body.removeAttribute('style');
    startBtn.disabled = false;
}

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);
