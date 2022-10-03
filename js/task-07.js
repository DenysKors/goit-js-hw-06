const valueSliderRef = document.querySelector('#font-size-control')
const textAreaRef = document.querySelector('#text')

valueSliderRef.addEventListener('input', (event) => { 
    textAreaRef.style.fontSize = `${event.currentTarget.value}px`;
})