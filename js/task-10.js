function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//? solution

const controlsEl = document.querySelector('#controls'); //
const boxesEl = document.querySelector('#boxes');

const refs = {
  input: controlsEl.querySelector('input[type="number"]'),
  buttonCreate: controlsEl.querySelector('button[data-create]'),
  buttonDestroy: controlsEl.querySelector('button[data-destroy]'),
};


refs.buttonCreate.addEventListener('click', getInputNumber);
refs.buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let defaultWidth = 30;
  let defaultHeight = 30;
  const boxesMarkup = [];

  for (let i = 0; i < amount; i += 1) {
    boxesMarkup.push(makeBoxesMarkup(defaultHeight, defaultWidth));
    defaultHeight += 10;
    defaultWidth += 10;
  }

  boxesEl.insertAdjacentHTML('afterbegin', boxesMarkup.join(''));
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function getInputNumber() {
  destroyBoxes();
  createBoxes(refs.input.value);
}

function makeBoxesMarkup(height, width) {
  return `
    <div
      style="
        height: ${height}px; 
        width: ${width}px;
        background-color: ${getRandomHexColor()};
      "
    ></div>
  `;
}
