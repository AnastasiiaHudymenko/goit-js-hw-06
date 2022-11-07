// Створюю обьєкт посилань

const refs = {
  decrementBtn: document.querySelector('[data-action= "decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  spanValueEl: document.querySelector("#value"),
};

let counterValue = 0;

// Додаю слухачів

refs.decrementBtn.addEventListener("click", onClickDecrementBtn);
refs.incrementBtn.addEventListener("click", onClickIncrementBtn);

function onClickDecrementBtn() {
  counterValue -= 1;
  refs.spanValueEl.textContent = counterValue;
}

function onClickIncrementBtn() {
  counterValue += 1;
  refs.spanValueEl.textContent = counterValue;
}
