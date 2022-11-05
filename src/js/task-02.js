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
// console.log(listEl);

// Створюємо li і додаємо класс
const itemElOne = document.createElement("li");
itemElOne.textContent = "Potatoes";
itemElOne.classList.add("item");

const itemElTwo = document.createElement("li");
itemElTwo.textContent = "Mushrooms";
itemElTwo.classList.add("item");

const itemElThree = document.createElement("li");
itemElThree.textContent = "Garlic";
itemElThree.classList.add("item");

const itemElFour = document.createElement("li");
itemElFour.textContent = "Tomatos";
itemElFour.classList.add("item");

const itemElFive = document.createElement("li");
itemElFive.textContent = "Herbs";
itemElFive.classList.add("item");

const itemElSix = document.createElement("li");
itemElSix.textContent = "Condiments";
itemElSix.classList.add("item");

//додавання елементів
listEl.append(
  itemElOne,
  itemElTwo,
  itemElThree,
  itemElFour,
  itemElFive,
  itemElSix
);
