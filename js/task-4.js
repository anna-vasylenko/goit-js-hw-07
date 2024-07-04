const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const userData = {
    email: email,
    password: password,
  };

  console.log(userData);

  formEl.reset();
}
