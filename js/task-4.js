  let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const counterValueEL = document.querySelector('#value');

console.log(incrementEl);
decrementEl.addEventListener('click', decrementdValue);
incrementEl.addEventListener('click', incrementValue);

  function changeValue() {
    counterValueEL.textContent = counterValue;

  };

function decrementdValue() {
  counterValue -= 1;

  console.log(counterValue);

  changeValue();
  };
function incrementValue() {
  counterValue += 1;

  console.log(counterValue);
  
  changeValue();
};