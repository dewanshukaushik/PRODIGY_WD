const timeDisplay = document.querySelector(".time-display");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");
const lapButton = document.querySelector(".lap");
const lapList = document.querySelector(".lap-list");

let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const date = new Date(time);
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    const milliseconds = Math.floor(date.getUTCMilliseconds() / 10)
        .toString()
        .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00.00";
    lapList.innerHTML = "";
}

function addLap() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", addLap);
