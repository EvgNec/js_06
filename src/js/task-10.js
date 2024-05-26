const refs = {
  numberInput: document.querySelector('input[type="number"]'),
  creatBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  divBoxes: document.getElementById("boxes"),
};

refs.creatBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const elements = [];
  console.log("refs.numberInput.value", refs.numberInput.value);
  for (let i = 0; i < refs.numberInput.value; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.height = 30 + 10 * i + "px";
    divEl.style.width = 30 + 10 * i + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    elements.push(divEl);
  }
  refs.divBoxes.append(...elements);
  refs.numberInput.value = "";
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
    refs.numberInput.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
