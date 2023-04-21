function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//? solution

const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');

const refs = {
  input: controlsEl.querySelector('input[type="number"]'),
  buttonCreate: controlsEl.querySelector('button[data-create]'),
  buttonDestroy: controlsEl.querySelector('button[data-destroy]'),
};

const amountBox =  refs.input('input')
console.log("amountBox:", amountBox)
// const onTargetButtonClick = refs.buttonCreate.addEventListener(
//   'click'
// );

//? Очищення
const onTargetButtonClick = refs.buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesEl.innerHTML = ''
}
//? Очищення

  const defaultWidth = 30;
  const defaultHeight = 30;

function makeBoxesMarkup(height, width) {
  return `
<div  style="height: ${height}px; width: ${width}px;background-color: ${getRandomHexColor()};"></div>
  `;
}



function createBoxes(amount) {


boxesEl.insertAdjacentHTML(
  'afterbegin',
  makeBoxesMarkup(defaultHeight, defaultWidth)
);
}

console.log('createBoxes:', createBoxes());

// const makeImageMarkup = ({ url, alt }) => {
//   return `
//   <li class= 'gallery-item'>
//     <img src='${url}' alt='${alt}'>
//   </li>
//   `;
// };
/*
*Функції:
!при кліку на кнопку очишчає розмітку яка у середині '#boxes'
!при кліку на кнопку бере число з 'input[type="number"]' і створює таку кількість боксів
!



*/