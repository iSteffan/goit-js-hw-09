import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const startBtnRef = document.querySelector('[data-start]');
const daysToLeftRef = document.querySelector('[data-days]');
const hoursToLeftRef = document.querySelector('[data-hours]');
const minutesToLeftRef = document.querySelector('[data-minutes]');
const secondsToLeftRef = document.querySelector('[data-seconds]');

startBtnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const date = Date.now();
    if (date > selectedDates[0]) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    startBtnRef.disabled = false;

    startBtnRef.addEventListener('click', () => {
      startBtnRef.disabled = true;

      const timerId = setInterval(() => {
        const initTimerDate = Date.now();
        const timeToDeadline = selectedDates[0] - initTimerDate;
        const { days, hours, minutes, seconds } = convertMs(timeToDeadline);

        updateClockface({ days, hours, minutes, seconds });

        if (
          days === '00' &&
          hours === '00' &&
          minutes === '00' &&
          seconds === '00'
        ) {
          clearInterval(timerId);
        }
      }, 1000);
    });
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateClockface({ days, hours, minutes, seconds }) {
  daysToLeftRef.textContent = days;
  hoursToLeftRef.textContent = hours;
  minutesToLeftRef.textContent = minutes;
  secondsToLeftRef.textContent = seconds;
}
