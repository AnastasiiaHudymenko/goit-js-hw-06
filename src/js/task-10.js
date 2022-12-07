const refs = {
  div: document.querySelector("#controls"),
  input: document.querySelector("input"),
  // btnCreate: document.querySelector("[ data-create]"),
  // btnDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

refs.div.addEventListener("click", onClickDivConteiner);

function onClickDivConteiner(evt) {
  const button = evt.target.textContent;
  if (button === "Create") {
    const userInput = Number(refs.input.value);
    createBoxes(userInput);
  } else if (button === "Destroy") {
    reset();
  }
}

function createBoxes(amount) {
  const elemtsDiv = [];
  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement("div");
    elem.style.width = `${30 + i * 10}px`;
    elem.style.height = `${30 + i * 10}px`;
    elem.style.backgroundColor = getRandomHexColor();
    elemtsDiv.push(elem);
  }
  refs.divBoxes.append(...elemtsDiv);
}

function reset() {
  refs.divBoxes.innerHTML = "";
  refs.input.value = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// refs.btnCreate.addEventListener("click", (event) =>
//   createBoxes(Number(refs.input.value))
// );

// refs.btnDestroy.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   const divsEl = [];
//   for (let i = 0; i < amount; i += 1) {
//     const divEl = document.createElement("div");
//     divEl.style.width = `${30 + i * 10}px`;
//     divEl.style.height = `${30 + i * 10}px`;
//     divEl.style.backgroundColor = getRandomHexColor();
//     divsEl.push(divEl);
//   }
//   refs.divBoxes.append(...divsEl);
// }

// function destroyBoxes() {
//   refs.divBoxes.innerHTML = "";
//   refs.input.value = "";
// }
