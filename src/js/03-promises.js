import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const refs = {
  formRef: document.querySelector('.form'),
  delayRef: document.querySelector('input[name="delay"]'),
  stepRef: document.querySelector('input[name="step"]'),
  amountRef: document.querySelector('input[name="amount"]'),
  submitRef: document.querySelector('button[type="submit"]'),
};

refs.formRef.addEventListener('submit', e => {
  e.preventDefault();
  const delay = Number(refs.delayRef.value);
  const amount = Number(refs.amountRef.value);
  const step = Number(refs.stepRef.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i, delay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
