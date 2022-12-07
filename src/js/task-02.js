const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Знаходимо наш ul
const listEl = document.querySelector("#ingredients");

// Створюємо li
// ---------- Перший варіант створюємо в функції ------------

function creatItem(elements) {
  return elements.map((element) => {
    const item = document.createElement("li");
    item.textContent = element;
    item.classList.add("item");
    return item;
  });
}
const itemsEl = creatItem(ingredients);
listEl.append(...itemsEl);

// ---------------Варіант без функції----------

// const itemsEl = ingredients.map((element) => {
//   const item = document.createElement("li");
//   item.textContent = element;
//   item.classList.add("item");
//   return item;
// });

// listEl.append(...itemsEl);

// -----------Другий варіант-------------

// const items = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredients[i];
//   itemEl.classList.add("item");
//   items.push(itemEl);
// }
// console.log(items);
// listEl.append(...items);

//-------------- Третій варіант----------
// const itemElOne = document.createElement("li");
// itemElOne.textContent = "Potatoes";
// itemElOne.classList.add("item");

// const itemElTwo = document.createElement("li");
// itemElTwo.textContent = "Mushrooms";
// itemElTwo.classList.add("item");

// const itemElThree = document.createElement("li");
// itemElThree.textContent = "Garlic";
// itemElThree.classList.add("item");

// const itemElFour = document.createElement("li");
// itemElFour.textContent = "Tomatos";
// itemElFour.classList.add("item");

// const itemElFive = document.createElement("li");
// itemElFive.textContent = "Herbs";
// itemElFive.classList.add("item");

// const itemElSix = document.createElement("li");
// itemElSix.textContent = "Condiments";
// itemElSix.classList.add("item");

// //додавання елементів
// listEl.append(
//   itemElOne,
//   itemElTwo,
//   itemElThree,
//   itemElFour,
//   itemElFive,
//   itemElSix
// );
