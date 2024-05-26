const onFormInput = document.querySelector('#name-input');
const onFormOutput = document.querySelector('#name-output');

onFormInput.addEventListener('input', onFormInputText);

function onFormInputText(e) {

    onFormOutput.textContent = e.currentTarget.value; 
    console.log("e.currentTarget.value", e.currentTarget.value)
        console.log("e.Target.value", e.target.value)
    if (onFormOutput.textContent === '') {
    onFormOutput.textContent="Anonymous"
}
}




/*
const textInput = document.getElementById('name-input');
const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', (event) => {
    textOutput.textContent = event.currentTarget.value;
    if (textOutput.textContent === "")
    { textOutput.textContent = 'Anonymous' };
});
*/