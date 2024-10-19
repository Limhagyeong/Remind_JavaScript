// html 요소 가져오기

let title = document.getElementById('title');
console.log('title:', title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log('items:', items);
console.log('item:', items[0]);

let liList = document.getElementsByTagName('li');
console.log('liList:', liList);

//  HTML 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2:', h2);

let item = document.querySelector('.item');
console.log('item:', item);

let items2 = document.querySelectorAll('.item');
console.log('items2:', items2);
console.log('item2:', items2[0]);

// 속성 제어하기

// h2.textContent = '<span>운동!!!!!</span>';

// h2.innerHTML = '<span>운동@@@</span>';

// document.querySelector('body').innerHTML = '<strong>운동</strong>';

let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요');
input.removeAttribute('placeholder');

let hello = document.querySelector('.hello');

console.log('hello', hello);

//  스타일 제어하기
hello.classList.add('dark');
hello.classList.remove('dark');
