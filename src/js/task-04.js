const refs = {
  div: document.querySelector("#counter"),
  spanValueEl: document.querySelector("#value"),
};

let counterValue = 0;

refs.div.addEventListener("click", onClickDiv);

function onClickDiv({ target: button }) {
  if (button.dataset.action === "decrement") {
    counterValue -= 1;
    addTextContentSpanEl(counterValue);
  } else if (button.dataset.action === "increment") {
    counterValue += 1;
    addTextContentSpanEl(counterValue);
  }
}

function addTextContentSpanEl(count) {
  refs.spanValueEl.textContent = count;
}
