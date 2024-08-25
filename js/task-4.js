'use strict';

const form = document.querySelector("form");
const formButton = document.querySelector('button');
const labelList = document.querySelectorAll('label');
const inputList = document.querySelectorAll('input');
const boxLabel = document.createElement('div');

labelList.forEach(labelEl => {
    boxLabel.append(labelEl);
});
form.insertAdjacentElement("afterbegin", boxLabel);
boxLabel.classList.add('label-box');

labelList.forEach(labelEl => {
    labelEl.classList.add('label-element');
});

inputList.forEach(inputEl => {
    inputEl.classList.add('input-element');
});
 
formButton.classList.add('btn-form');
formButton.innerHTML = 'Log in';


function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }

    const formData = {
    email: email,
    password: password,
    };
    
    console.log(formData);
    form.reset();
}

form.addEventListener('submit', handleSubmit);




