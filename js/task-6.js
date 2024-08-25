function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const boxControls = document.querySelector('#controls');
const inputEl = document.querySelector('#controls input');
inputEl.classList.add('input-controls')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

const boxDiv = document.createElement('div');
boxDiv.append(boxControls, boxesContainer);
bodyEl.insertAdjacentElement('beforeend', boxDiv);
boxDiv.classList.add('section-div');



function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
  }
  
  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  inputEl.value = '';
})

destroyBtn.addEventListener('click', destroyBoxes);
