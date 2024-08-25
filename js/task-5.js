function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.querySelector('body');
console.log(bodyEl)
const colorSpan = document.querySelector('.color');
const вtnChangeColor = document.querySelector('.change-color');

вtnChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;

})



