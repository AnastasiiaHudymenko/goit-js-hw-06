const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (e) => {
  if (Number(e.target.dataset.length) === e.target.value.length) {
    addOrRemoveClassList("valid", "invalid");
  } else if (!e.target.value.length) {
    removeAllClassList("invalid", "valid");
  } else {
    addOrRemoveClassList("invalid", "valid");
  }
});

function addOrRemoveClassList(add, remove) {
  inputRef.classList.add(add);
  inputRef.classList.remove(remove);
}

function removeAllClassList(class1, class2) {
  inputRef.classList.remove(class1, class2);
}
