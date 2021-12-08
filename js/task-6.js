ETALON_VALUE_LENGTH = 6;

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur)


function onInputBlur(event) {
  const inputValue = event.currentTarget.value
  if (inputValue.length <= ETALON_VALUE_LENGTH) {
    event.currentTarget.style.border = '2px solid red';
    return;
  }
   event.currentTarget.style.border = '2px solid green';  
  
}