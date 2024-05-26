const onInputRange = document.getElementById('font-size-control');
const onSpanRange = document.getElementById('text');
onInputRange.addEventListener('change', onInputRangeChange);

function onInputRangeChange(e) {
    onSpanRange.style.fontSize = e.target.value + 'px'; 
}

