const onFormLogin = document.querySelector(".login-form");

onFormLogin.addEventListener("submit", onFormLoginSubmit);

function onFormLoginSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => {
    console.log("name", name);
    console.log("value", value);
  });
}
