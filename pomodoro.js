let workIntervalID; // used to start and stop the work count down
let relaxIntervalID; // used to start and stop the break count down
let timerIntervalID;

let cycles;

let work; // in milliseconds
let relax; // in milliseconds
let remainingTime; // in milliseconds

function startTimer() {
    if (cycles !== 0) {
        timerIntervalID = setInterval(countDown, 1000);
        workIntervalID = setTimeout();
    } else {
        cycles--;
    }
}

function pauseTimer() {
    clearInterval(timerIntervalID);
}

function resetTimer() {
    clearInterval(timerIntervalID);

    update(10, 0, 2, 0);
}

function updateTimer() {
    update(
        document.getElementById("settingsWorkMinutes").value,
        document.getElementById("settingsWorkSeconds").value,
        document.getElementById("settingsRelaxMinutes").value,
        document.getElementById("settingsRelaxSeconds").value
    );

    console.log(
        "UPDATED:\n work: " +
            work +
            "\n relax: " +
            relax +
            "\n remaining time: " +
            remainingTime
    );
}

function countDown() {
    // Calculate remaining minutes and seconds:
    let minutes = Math.floor(remainingTime / 60000);
    let seconds = (remainingTime % 60000) / 1000;

    if (seconds === 0 && minutes === 0) {
        console.log("DONE!!!!");
        clearInterval(timerIntervalID);
    } else if (seconds === 0 && minutes !== 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    // Update remaining time
    remainingTime = minutes * 60000 + seconds * 1000;

    // Select elements and update DOM elements with remaining time:
    const minutesElement = document.getElementById("minutes").textContent = minutes;
    const secondsElement = document.getElementById("seconds").textContent = seconds;
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

// Initializes DOM elements and work and relax timer:
function update(
    workMinutes,
    workSeconds,
    relaxMinutes,
    relaxSeconds,
    numberOfCycles
) {
    console.log(
        "wm: " +
            workMinutes +
            " ws: " +
            workSeconds +
            " rm: " +
            relaxMinutes +
            " rs: " +
            relaxSeconds
    );
    document.getElementById("minutes").textContent = workMinutes || 25;
    document.getElementById("seconds").textContent = workSeconds || 00;
    // document.getElementById("minutes").value = workMinutes || 25;
    // document.getElementById("seconds").value = workSeconds || 00;

    cycles = numberOfCycles || 4;

    work = (workMinutes || 25) * 60000 + (workSeconds || 0) * 1000;
    relax = (relaxMinutes || 25) * 60000 + (relaxSeconds || 0) * 1000;

    remainingTime = work;
}

// Initialize text inputs minutes and seconds on page load:
window.onload = update(0, 3, 0, 5, 4);
