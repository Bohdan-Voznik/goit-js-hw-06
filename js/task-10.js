const DEF_SIZE = 30;
const STEP = 10;

const inputEl = document.querySelector('#controls input');
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createButtonEl.addEventListener('click', onCreateButtonClick);
destroyButtonEl.addEventListener('click', onDestroyButtonClick);

function onCreateButtonClick(event) {
  const boxesCount = inputEl.value;
  if (boxesCount === '' || boxesCount === '0') {
    console.log('Введите количество блоков!!')
    return;
  }

createBoxes(boxesCount)

}
function onDestroyButtonClick() {
  boxesEl.innerHTML = '';  
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
  const box = [];
  for (let i = 0; i < amount; i += 1) {    
    boxSize = DEF_SIZE + STEP * i;

    box[i] = document.createElement('div');
    box[i].style.height = `${boxSize}px`;
    box[i].style.width = `${boxSize}px`;
    box[i].style.backgroundColor = getRandomHexColor();       
  }
 
  boxesEl.append(...box);
}