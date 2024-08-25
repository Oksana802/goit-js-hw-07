'use strict';


const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');
const titleInput = document.querySelector('h1');
const pTaskThird = document.querySelector('p');
const boxInput = document.createElement('div');
boxInput.append(inputElement, titleInput);
pTaskThird.insertAdjacentElement("afterend", boxInput);


const classField = boxInput.classList.add('text-field')
const classInput = inputElement.classList.add('box-input');
const classTitle = titleInput.classList.add('title-input');


const handlerInput = () => {
    const inputValue = inputElement.value.trim();
    if (inputValue === '') {
        outputElement.textContent = 'Anonymous'
    }
    else {
        outputElement.textContent = inputValue
    }
}

inputElement.addEventListener("input", handlerInput);


