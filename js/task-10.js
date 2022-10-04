const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const divRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() { 
  let boxwidth = 30;
  let boxheight = 30;
  const divArray = [];
  const amount = Number(document.querySelector('#controls input').value);

  for (let i = 1; i <= amount; i += 1) { 
  divArray.push(`<div style = "width: ${boxwidth}px; height: ${boxheight}px; background-color: ${getRandomHexColor()};"></div>`)
  boxwidth += 10;
  boxheight += 10;
  }

  const markup = divArray.join('')
  divRef.insertAdjacentHTML('beforeend', markup)
}

function destroyBoxes() { 
  divRef.innerHTML = ''
}