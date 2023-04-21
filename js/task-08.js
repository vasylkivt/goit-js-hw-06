const loginFormEl = document.querySelector('.login-form');
const formElements = loginFormEl.elements;
const { email, password } = formElements;

email.setAttribute('required', '');
password.setAttribute('required', '');
password.setAttribute('pattern', '^[^\\s]+$');
password.setAttribute('title', 'Пароль,не може містити Пробіли');

loginFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);

  loginFormEl.reset();
}
