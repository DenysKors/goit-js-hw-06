const textInputRef = document.querySelector('input');

textInputRef.addEventListener('blur', onLoseFocus)

function onLoseFocus(event) { 
    event.currentTarget.classList.add("invalid");
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add("valid");
    }
}