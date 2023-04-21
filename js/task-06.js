const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputChange);

function onInputChange() {
  input.classList.add('invalid');

  input.value.trim().length === Number(input.dataset.length)
    ? input.classList.replace('invalid', 'valid')
    : input.classList.replace('valid', 'invalid');
}
