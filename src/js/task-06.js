const onInputBlur = document.querySelector('#validation-input');

onInputBlur.addEventListener('blur', onInpurBlurCheck);

function onInpurBlurCheck(e) {
         console.log("e.target.value.length", e.target.value.length)
    if (e.target.value.length === 0) {
     onInputBlur.className = '';   
    }
    else if (e.target.value.length === 6) {
     onInputBlur.classList.add('valid');   
    }
    else {
        onInputBlur.className = ''; 
     onInputBlur.classList.add('invalid');   
    }
         console.log("e.target.value.length", e.target.value.length)
}
   
