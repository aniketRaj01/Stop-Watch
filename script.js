const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

function formatTime(ms) {
  const date = new Date(ms);
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");
  return `${minutes}:${seconds}:${milliseconds}`;
}

function updateTime() {
  const currentTime = elapsedTime + (new Date() - startTime);
  display.textContent = formatTime(currentTime);
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(interval);
    startStopBtn.textContent = "Start";
    elapsedTime += new Date() - startTime;
  } else {
    startTime = new Date();
    interval = setInterval(updateTime, 10);
    startStopBtn.textContent = "Stop";
  }
  isRunning = !isRunning;
}

function resetTimer() {
  clearInterval(interval);
  display.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
}

startStopBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);
