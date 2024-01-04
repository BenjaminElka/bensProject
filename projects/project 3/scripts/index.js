const totalTime = { hh: 23, mm: 0, ss: 0 };
let countdownInterval;
let isCounting = false;

function updateDisplay() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    hoursElement.textContent = totalTime.hh.toString().padStart(2, '0');
    minutesElement.textContent = totalTime.mm.toString().padStart(2, '0');
    secondsElement.textContent = totalTime.ss.toString().padStart(2, '0');
}  

function startCountdown() {
    countdownInterval = setInterval(() => {
        if (totalTime.hh === 0 && totalTime.mm === 0 && totalTime.ss === 0) {
            clearInterval(countdownInterval);
            alert('Countdown finished!');
            isCounting = false;
        } else {
            if (totalTime.ss > 0) {
                totalTime.ss--;
            } else if (totalTime.mm > 0) {
                totalTime.mm--;
                totalTime.ss = 59;
            } else {
                totalTime.hh--;
                totalTime.mm = 59;
                totalTime.ss = 59;
            }
            updateDisplay();
        }
    }, 1000);
}

document.getElementById('startButton').addEventListener('click', () => {
    if (!isCounting) {
        startCountdown();
        isCounting = true;
    }
});

document.getElementById('pauseButton').addEventListener('click', () => {
    if (isCounting) {
        clearInterval(countdownInterval);
        isCounting = false;
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    clearInterval(countdownInterval);
    isCounting = false;
    totalTime.hh = 23;
    totalTime.mm = 0;
    totalTime.ss = 0;
    updateDisplay();
});

 updateDisplay();


 