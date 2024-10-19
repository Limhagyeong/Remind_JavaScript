// DOM 추가,제거
let addbtn = document.getElementById('button');
let inputBox = document.querySelector('input');
let addbeforebtn = document.getElementById('before');
let remove = document.getElementById('remove');
let removeBtn = document.querySelector('.remove-btn');

addbtn.addEventListener('click', function () {
  alert('경고');
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;
  let btn = document.createElement('button');
  btn.textContent = 'X';
  btn.setAttribute('class', 'remove-btn');
  btn.addEventListener('click', removeParentNode);
  li.appendChild(btn);
  ul.appendChild(li);
  inputBox.value = '';
  inputBox.focus();
});

addbeforebtn.addEventListener('click', function () {
  alert('앞에 추가');
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let target = document.querySelector('li#target');
  li.textContent = inputBox.value;
  ul.insertBefore(li, target);
});

remove.addEventListener('click', function () {
  let target = document.querySelector('li#target');
  target.remove();
});

removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  console.log(event.target.parentNode);
  event.target.parentNode.remove();
}
