const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function addIngredients() { 
  const ingredientsArray = [];
  const ulRef = document.querySelector("#ingredients");

  ingredients.forEach(ingredient => {
    const createLi = document.createElement("li");

    createLi.textContent = `${ingredient}`;
    createLi.classList.add("item");
    ingredientsArray.push(createLi)
    console.log(ingredientsArray)
  });

ulRef.append(...ingredientsArray)
}

addIngredients()
