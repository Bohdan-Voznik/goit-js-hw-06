const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur)

ETALON_VALUE_LENGTH = inputEl.dataset.length;

function onInputBlur(event) {
  const inputValue = event.currentTarget.value
  if (inputValue.length == ETALON_VALUE_LENGTH) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
    return;
  }
  event.currentTarget.classList.add('invalid');
  event.currentTarget.classList.remove('valid');
  
}