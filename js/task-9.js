const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);


function onButtonClick() {
    const bgColor = getRandomHexColor();
    textEl.textContent = bgColor;
    document.body.style.backgroundColor = bgColor;  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
