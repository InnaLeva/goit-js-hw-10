import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let userChoseDate = new Date();
let timerInterval = 0;

const options = {
    enableTime: true,
    dateFormat: "Y-m-d  H:i",
    time_24hr: true,    
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    userChoseDate = selectedDates[0];
    if (userChoseDate < new Date()) {
        iziToast.error({
            title: "Error",
            message: "Please choose a date in the future",
        });
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
    }
    },
};

flatpickr("#datetime-picker", options);

startButton.addEventListener("click", startTimer);

function startTimer() {
    // this.isActive = true
    startButton.disabled = true;
    datetimePicker.disabled = true;

    timerInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = userChoseDate - now;

    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        iziToast.success({
        title: "Completed",
        message: "The countdown has finished!",
        });
    resetTimer();
    return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    updateTimer({ days, hours, minutes, seconds });
    }, 1000);
}
