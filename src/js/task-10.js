function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[ data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", (event) =>
  createBoxes(Number(refs.input.value))
);

refs.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const divsEl = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divsEl.push(divEl);
  }
  refs.divBoxes.append(...divsEl);
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
  refs.input.value = "";
}
