const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients')

function createIngredient(ingredient) {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList = 'item';
    console.log(item);
    return item;
}

const resultEl = ingredients.map(ingredient => {
     return createIngredient(ingredient);   
  })

ingredientsEl.prepend(...resultEl);

console.log(resultEl);



    
