const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (event) => {
  const valueInput = (inputRef.textContent = event.currentTarget.value);

  if (valueInput.length === Number(inputRef.getAttribute("data-length"))) {
    inputRef.classList.add("valid");
    inputRef.classList.replace("invalid", "valid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.replace("valid", "invalid");
  }
});
