let h2 = document.querySelector('h2');
h2.dataset.test = 'hello javascript';
console.log(h2.dataset.test);

let liList = document.querySelectorAll('li');
console.log(liList);

let img = document.querySelector('img');

let selectedItem = document.querySelector('.selected-item');

liList[0].addEventListener('click', selecteItem);

liList[1].addEventListener('click', selecteItem);

liList[2].addEventListener('click', selecteItem);

function selecteItem(event) {
  selectedItem.textContent = event.target.textContent;
  console.log(event.target.dataset.img);
  img.setAttribute('src', event.target.dataset.img);
}
