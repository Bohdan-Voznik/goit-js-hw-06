const menu = document.querySelectorAll('li.item')

function takeCategory(menuItem) {
    const category = menuItem.querySelector('h2').textContent;
    
    console.log(`Category: ${category}`);

    return;

}

function takeElements(menuItem) {
    const elements = menuItem.querySelectorAll('li');
    
    console.log(`Elements: ${elements.length}`);
    return;
}


console.log(`Number of categories: ${menu.length}`);

for (menuItem of menu) {
    takeCategory(menuItem);
    takeElements(menuItem);
};
