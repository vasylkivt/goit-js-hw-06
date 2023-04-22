const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.text.style.fontSize = `${refs.input.value}px`;

function handleFontSizeChange() {
  refs.text.style.fontSize = `${refs.input.value}px`;
}

refs.input.addEventListener('input', handleFontSizeChange);
