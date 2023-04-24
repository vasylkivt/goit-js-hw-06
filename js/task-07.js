const refs = {
  input: document.getElementById('font-size-control'),
  text: document.getElementById('text'),
};

refs.text.style.fontSize = `${refs.input.value}px`;

function handleFontSizeChange() {
  refs.text.style.fontSize = `${refs.input.value}px`;
}

refs.input.addEventListener('input', handleFontSizeChange);


