'use strict';

// // 배열 생성
// const fruits = ['사과', '바나나', '딸기'];
// console.log(fruits);

// // const fruits2 = new Array('사과', '바나나', '딸기');
// // console.log(fruits2);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// fruits[2] = '포도';
// console.log(fruits[2]);

// // 배열 API
// console.log(fruits.length);
// console.log('마지막 값: ', fruits[fruits.length - 1]);

// // push()
// fruits.push('수박');
// console.log(fruits);

// // forEach()
// fruits.forEach(function (item, index) {
//   console.log(index, item);
// });

// // // pop()
// // let removedItem = fruits.pop();
// // console.log(removedItem);
// // removedItem = fruits.pop();
// // console.log(removedItem);
// // console.log(fruits);

// // // shift()
// // let removedItem = fruits.shift();
// // console.log(removedItem);
// // removedItem = fruits.shift();
// // console.log(removedItem);
// // console.log(fruits);

// // unshift()
// let addedItem = fruits.unshift('멜론');
// console.log(addedItem);
// addedItem = fruits.unshift('무화과');
// console.log(addedItem);
// console.log(fruits);

// // indexOf()
// console.log(fruits.indexOf('수박'));
// console.log(fruits.indexOf('귤')); // 찾고자하는 인덱스가 없음 => -1 반환

// // splice() 특정 아이템 삭제 (몇번째부터, 몇개 삭제할래)
// fruits.splice(2, 1);
// console.log(fruits);
// fruits.splice(2, 4);
// console.log(fruits);

// fruits.splice(fruits.indexOf('멜론'), 1);
// console.log(fruits);

// 개별 할당
// let fruits = ['사과', '바나나', '딸기'];
// const apple = fruits.indexOf[0];
// const banana = fruits.indexOf[1];
// const strawberry = fruits.indexOf[2];

// 구조 분해 할당
// let [apple, banana, strawberry, ...others] = [
//   '사과',
//   '바나나',
//   '딸기',
//   'a',
//   'b',
//   'c',
// ];

// console.log(banana);
// console.log(others);

// 전개 구문
// let fruits = ['사과', '바나나', '딸기'];
// let fruits2 = ['귤', '망고'];
// let items = [...fruits, ...fruits2];
// console.log(items);
// console.log(items.indexOf('사과'));
// items.push('파인애플');
// console.log(items);
// items.unshift('멜론');
// console.log(items);

// Rest parameter
// print('a', 'b', 'c', 'a', 'b', 'c');

// function print(value1, value2, value3) {
//   console.log(value1);
//   console.log(value2);
//   console.log(value3);
// }

// function print(...values) {
//   values.forEach(function (values, index) {
//     console.log(values, index);
//   });
// }

// 얕은 복사 (참조값 공유)
// let source = ['사과', '바나나', '딸기'];
// let target = source; // 같은 주소를 참조하게 되는거임 (값을 바로 할당)
// target[0] = '파인애플';
// console.log(source);
// console.log(target);

// 깊은 복사 (참조값 새롭게 생성)
let source = ['사과', '바나나', '딸기'];
// let target = [...source]; // 전개 구문을 사용해서 데이터를 배열에 담은 후 target에 저장
// let target = Array.from(source);
let target = source.slice();
target[0] = '파인애플';
console.log(source);
console.log(target);

/* 
   콜백함수: 함수의 파라미터로 들어가는 함수
   용도 : 순차적으로 실행하고싶을때 (비동기처리 등과 같은 이유로 실행순서 보장할 수 없음 
                                  => 콜백함수로 안정성 보장
                                  => Promise 사용해도 됨 .then(), async/await

   예시
   1. 이벤트 리스너
   document.querySelector('.button').addEventListener('click',function(){
   console.log('1. 버튼을 클릭하면 2. 로그를 찍어주세요');
   })

   2. setTimeout()
   setTimeout(function(){ 
    console.log('1. 1초 경과 후 2. 로그를 찍어주세요');
   },1000)

   만드는 방법
   function first(파라미터){
    console.log(1) // 실행 1
    파라미터() // 실행 2
   }

   function second(){
    console.log(2)
   }

   first(second)

*/
