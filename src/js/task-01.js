// знаходжу загальну к-сть категорій
const listEl = document.querySelector("#categories");
const allItemEl = listEl.querySelectorAll(".item");
console.log(`Number of categories: ${allItemEl.length}`);

// знаходжу першу категорію (Animal)
const firstItemEl = listEl.firstElementChild;
const firstTitleEl = firstItemEl.querySelector("h2").textContent;
console.log(`Category: ${firstTitleEl}`);

// знаходжу загальну к-сть елементів Animal
const allItemChildinFirstItem = firstItemEl.querySelectorAll("li").length;
console.log(`Elements: ${allItemChildinFirstItem}`);

// знаходжу другу категорію (Products)
const secondItemEl = firstItemEl.nextElementSibling;
const secondTitleEl = secondItemEl.querySelector("h2").textContent;
console.log(`Category: ${secondTitleEl}`);

// знаходжу загальну к-сть елементів Products
const allItemChildinSecondItem = secondItemEl.querySelectorAll("li").length;
console.log(`Elements: ${allItemChildinSecondItem}`);

// знаходжу третю категорію (Technologies)
const lastItemEl = listEl.lastElementChild;
const lastTitleEl = lastItemEl.querySelector("h2").textContent;
console.log(`Category: ${lastTitleEl}`);

// знаходжу загальну к-сть елементів Technologies
const allItemChildinLastItem = lastItemEl.querySelectorAll("li").length;
console.log(`Elements: ${allItemChildinLastItem}`);
