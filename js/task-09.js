const bodyRef = document.querySelector('body');
const changeColorBtnRef = document.querySelector('.change-color');
const colorNameRef = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtnRef.addEventListener('click', onBtnClick);

function onBtnClick() { 
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorNameRef.textContent = bodyRef.style.backgroundColor;
}