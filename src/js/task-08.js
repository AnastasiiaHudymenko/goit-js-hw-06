const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Заповніть всі поля");
  } else {
    const userForm = {
      email: email.value,
      password: password.value,
    };
    console.log(`Email: ${userForm.email}, Password: ${userForm.password}`);
    event.currentTarget.reset();
  }
}
