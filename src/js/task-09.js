const refs = {
  colorBtn: document.querySelector("button.change-color"),
  colorText: document.querySelector(".color"),
  bodyMark: document.querySelector("body"),
};

refs.colorBtn.addEventListener("click", changeColorBody);

function changeColorBody() {
  const color = getRandomHexColor();
  refs.colorText.textContent = color;
  refs.bodyMark.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
