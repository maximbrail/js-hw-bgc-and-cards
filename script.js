
const userName = prompt("What's your name?");

const bodyBackgroundColor = prompt("Write background color");

const cardBackgroundColor = prompt("Write card color");



const boxElement = document.querySelector('.card')
const card = document.querySelector('.card')

const name = document.querySelector('#name')



name.textContent = userName


document.body.style.backgroundColor = bodyBackgroundColor;

card.style.backgroundColor = cardBackgroundColor
