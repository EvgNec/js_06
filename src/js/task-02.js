const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  let item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  listEl.append(item);
});

// -----------------------------------------
const listEL2 = document.getElementById("ingredients");
const elements = ingredients.map((ingredient) => {
  const liEl2 = document.createElement("li");
  liEl2.textContent = ingredient;
  liEl2.classList.add("item");
  return liEl2;
}
 )
 listEL2.append(...elements);