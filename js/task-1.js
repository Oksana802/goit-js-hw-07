'use strict';

const categoriesList = document.querySelectorAll('#categories .item');
const categoriesUl = document.querySelector('#categories');
const categoriesP = document.querySelector('p');
const categoriesBox = document.createElement('div')

categoriesBox.append(categoriesUl);
categoriesP.insertAdjacentElement("afterend", categoriesBox);
categoriesBox.classList.add('container-task-1');

const categoryTitles = document.querySelectorAll('.item h2');
categoryTitles.forEach(title => {
    title.classList.add('title');
});

const listElements = document.querySelectorAll('.item ul');
listElements.forEach(list => {
    list.classList.add('.list-elements');
});

const elementsEl = document.querySelectorAll('.item ul li');

elementsEl.forEach(elementEl => {
elementEl.classList.add('element')
});



console.log('Number of categories:', categoriesList.length);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('.title').textContent;
    const elementsCount = category.querySelectorAll('.element').length;

    console.log('Category:', categoryTitle);
    console.log('Element:', elementsCount);
});
