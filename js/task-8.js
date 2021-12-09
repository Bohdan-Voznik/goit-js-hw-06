const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', oSubmit)




function oSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  const user = {
    email,
    password,
  };

  if (email.value === '' || password.value === '') {
    return console.log("Заполние все поля!");
  }

  console.log(user);
  event.currentTarget.reset();
}