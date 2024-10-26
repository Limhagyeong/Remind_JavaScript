import a_number from './a.js';
import b_number from './b.js';

const btnA = document.querySelector('#button-a');
const btnB = document.querySelector('#button-b');
const display = document.querySelector('#display');

btnA.addEventListener('click', function () {
  display.textContent = a_number;
});

btnB.addEventListener('click', function () {
  display.textContent = b_number;
});
