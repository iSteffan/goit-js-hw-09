function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyTag = document.querySelector('body');

// btnStart.dataset;

let timerId = null;

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyTag.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
});

// function onBtnStartClick() {
//   const timerId = setInterval(() => {
//     bodyTag.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// }

// function onBtnStopClick() {
//   clearInterval(timerId);
// }
