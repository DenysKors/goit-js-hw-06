const incrementBtnRef = document.querySelector('#counter button[data-action="increment"]');
const decrementBtnRef = document.querySelector('#counter button[data-action="decrement"]');
const valueRef = document.querySelector("#value");
let counterValue = 0;

incrementBtnRef.addEventListener('click', () => { 
    counterValue += 1;
    valueRef.textContent = counterValue;
})

decrementBtnRef.addEventListener('click', () => { 
    counterValue -= 1;
    valueRef.textContent = counterValue;
})
