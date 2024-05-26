const onInputBlur = document.getElementById("validation-input");

onInputBlur.addEventListener("blur", onInpurBlurCheck);

function onInpurBlurCheck(e) {
  if (e.target.value.length === 0) {
    onInputBlur.className = "";
  } else if (e.target.value.length === ~~onInputBlur.getAttribute("data-length")) {
    onInputBlur.className = "";
    onInputBlur.classList.add("valid");
  } else {
    onInputBlur.className = "";
    onInputBlur.classList.add("invalid");
  }
}
