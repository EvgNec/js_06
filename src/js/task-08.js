const onFormLogin = document.querySelector(".login-form");

onFormLogin.addEventListener("submit", onFormLoginSubmit);
const elements = {};

function onFormLoginSubmit(e) {
  e.preventDefault();
  elements.email = e.currentTarget.elements.email.value;
  elements.password = e.currentTarget.elements.password.value;
  if (elements.email === "") alert("Input login");
  else if (elements.password === "") alert("Input passwords");
  else {
    console.log("elements", elements);
    resetForm();
  }
  //    const formData = new FormData(e.currentTarget);
  //   formData.forEach((value, name) => {
  //     console.log("name", name);
  //     console.log("value", value);
  //   });
}

function resetForm() {
  onFormLogin.reset();
}
