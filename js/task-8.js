const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', oSubmit)




function oSubmit(event) {
  event.preventDefault();
   const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return console.log("Заполние все поля!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}