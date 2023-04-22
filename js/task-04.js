let counterValue = 0;
const counterEl = document.querySelector('#counter');

const refs = {
  value: counterEl.querySelector('#value'),
  decrementBtn: counterEl.querySelector('button[data-action="decrement"]'),
  incrementBtn: counterEl.querySelector('button[data-action="increment"]'),
};

//? solution 1
// refs.decrementBtn.addEventListener('click', () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// });

// refs.incrementBtn.addEventListener('click', () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// });


//? solution 2
function changeCounterValue(value) {
  counterValue += value;
  refs.value.textContent = counterValue;
}

refs.decrementBtn.addEventListener('click', () => {
  changeCounterValue(-1);
});

refs.incrementBtn.addEventListener('click', () => {
  changeCounterValue(1);
});
