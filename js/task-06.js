const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputChange);

//? solution 1
// function onInputChange() {
//   input.classList.add('invalid');

//   input.value.trim().length === Number(input.dataset.length)
//     ? input.classList.replace('invalid', 'valid')
//     : input.classList.replace('valid', 'invalid');
// }

//? solution 2
function onInputChange() {
  const { value, dataset, classList } = input;

  //! Створюю змінну для перевірки довжини рядка який введено
  const isLengthValid =
    !dataset.length || value.trim().length === Number(dataset.length);
  //! "!dataset.length" - це перевірить чи є валідне значення у `data-length=""`(якщо не валідне (false), то "isLengthValid" буде (true), і буде додано клас "valid", якщо ж у `data-length=""` буде якесь значення, то клас "valid", буде додано тільки тоді коли довжина рядка який введено буде відповідати значення `data-length=""`)

  classList.remove('valid');
  classList.remove('invalid');
  classList.add(isLengthValid ? 'valid' : 'invalid');
}
