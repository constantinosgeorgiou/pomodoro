let timerIntervalID;
let timer = 6000; // in milliseconds
let remainingTime = timer; // in milliseconds

function startTimer() {
    timerIntervalID = setInterval(countDown, 1000);
}

function pauseTimer() {
    clearInterval(timerIntervalID);
}

function resetTimer() {
    clearInterval(timerIntervalID);
    remainingTime = timer;
    updateTimer(calculateRemainingTime());
}

function countDown() {
    // Calculate remaining minutes and seconds:
    let minutes = Math.floor(remainingTime / 60000);
    let seconds = (remainingTime % 60000) / 1000;

    console.log(minutes + ":" + seconds);

    if (seconds === 0 && minutes === 0) {
        clearInterval(timerIntervalID);

        alert("Done!");
    } else if (seconds === 0 && minutes !== 0) {
        minutes--;
        seconds = 59;
        console.log("change: " + minutes + ":" + seconds);
    } else {
        seconds--;
    }

    // Update remaining time
    remainingTime = minutes + seconds * 1000;

    console.log("remaining: " + remainingTime + " " + minutes + ":" + seconds);

    // Select elements in DOM
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Update elements in DOM with remaining time
    minutesElement.value = minutes;
    secondsElement.value = seconds;
    document.title = "Pomodoro: " + minutes + ":" + seconds;
}

function updateButtons() {
    const startElement = document.getElementById("start");
    const pauseElement = document.getElementById("pause");

    if (pauseElement.classList.contains("hide")) {
        pauseElement.classList.remove("hide");
        startElement.classList.add("hide");
    } else {
        startElement.classList.remove("hide");
        pauseElement.classList.add("hide");
    }
}
