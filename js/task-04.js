let counterValue = 0;
const counterEl = document.querySelector('#counter');

const refs = {
  value: counterEl.querySelector('#value'),
  decrementBtn: counterEl.querySelector('button[data-action="decrement"]'),
  incrementBtn: counterEl.querySelector('button[data-action="increment"]'),
};

refs.decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
