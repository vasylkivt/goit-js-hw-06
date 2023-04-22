const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

function updateNameOutput() {
  const isNameValid = refs.input.value.trim() !== '';
  refs.output.textContent = isNameValid ? refs.input.value : 'Anonymous';
}

refs.input.addEventListener('input', updateNameOutput);
