const textInputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', onTextInput)

function onTextInput(event) { 
    if (event.currentTarget.value === '') {
        spanRef.textContent = 'Anonymous'
    }
    else {
        spanRef.textContent = event.currentTarget.value;
    }
}
