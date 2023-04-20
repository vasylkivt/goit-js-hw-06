let counterValue = 0;

const valueEl = document.querySelector('#value');

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');

decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1
    valueEl.textContent = counterValue;
})

incrementBtnEl.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});