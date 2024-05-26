let counterValue = 0;
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const formValue = document.querySelector("#value");

incrementBtn.addEventListener("click", onFormIncrementClick);
decrementBtn.addEventListener("click", onFormDecrementClick);
function onFormIncrementClick(e) {
  counterValue += 1;
  onFormValueChange(counterValue);
}
function onFormDecrementClick(e) {
  counterValue -= 1;
  onFormValueChange(counterValue);
}
function onFormValueChange(result) {
  formValue.textContent = result;
}
