// Select buttons:
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const settings = document.getElementById("settings");

let timer;

// Start timer:
start.onclick = () => {
    timer = setInterval(startCountDown, 1000); // Count down every 1000 milliseconds / 1 second

    start.classList.add("hide");
    pause.classList.remove("hide");
};

// Pause timer:
pause.onclick = () => {
    const countDown = clearInterval(timer);

    pause.classList.add("hide");
    start.classList.remove("hide");
};

reset.onclick = () => {
    // Open modal asking if you are sure

    // console.log(timer.minutes + ":" + timer.seconds);
    // Select elements in DOM
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Initialize elements in DOM with initial time
    minutesElement.value = parseInt(timer.minutes) || 0;
    secondsElement.value = parseInt(timer.seconds) || 0;
};
settings.onclick = () => {
    // Modal for settings
};

// Counts down:
function startCountDown() {
    // Select elements in DOM
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    // Parse the element values into integers
    let minutes = parseInt(minutesElement.value) || 0;
    let seconds = parseInt(secondsElement.value) || 0;

    // Calculate remaining time
    if (seconds === 0 && minutes === 0) {
        const stopCountDown = clearInterval(timer);

        pause.classList.add("hide");
        start.classList.remove("hide");
    } else if (seconds === 0 && minutes !== 0) {
        minutes--;
        seconds = 60;
    } else {
        seconds--;
    }

    console.log(timer.minutes + ":" + timer.seconds);

    // Update elements in DOM with remaining time
    minutesElement.value = minutes;
    secondsElement.value = seconds;
    document.title = "Pomodoro: " + minutes + ":" + seconds;
}
