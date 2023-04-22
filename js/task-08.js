//? solution
const loginFormEl = document.querySelector('.login-form');
const email = loginFormEl.querySelector('input[type="email"]');
const password = loginFormEl.querySelector('input[name="password"]');

email.setAttribute('required', '');
password.setAttribute('required', '');
password.setAttribute('pattern', '^\\S+$');
password.setAttribute('autocomplete', 'new-password');
password.setAttribute('title', 'Пароль, не може містити Пробіли');

loginFormEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  loginFormEl.reset();
}
