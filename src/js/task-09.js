function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//? solution

const widgetEl = document.querySelector('.widget');

const refs = {
  button: widgetEl.querySelector('.change-color'),
  text: widgetEl.querySelector('.color'),
};

const onTargetButtonClick = refs.button.addEventListener(
  'click',
  changeBgColor
);

function changeBgColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  refs.text.textContent = randomColor;
}
