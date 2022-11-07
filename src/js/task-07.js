const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("span");

console.dir(inputRef);

inputRef.addEventListener("input", (event) => {
  const spanValue = event.currentTarget.value;

  spanRef.style.fontSize = `${spanValue}px`;
});
