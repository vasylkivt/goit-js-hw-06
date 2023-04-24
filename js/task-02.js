const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//? solution

const ingredientsEl = document.getElementById('ingredients');

const createElementLi = item => {
  const element = document.createElement('li');

  element.textContent = item;
  element.classList.add('item');

  return element;
};

const createListElementLi = ingredients.map(createElementLi);

ingredientsEl.append(...createListElementLi);
