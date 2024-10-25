'use strict';

// sayHello();

// 함수 선언식 => 호이스팅의 영향을 받음
// function sayHello() {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 임하경, 나이: 27');
// }

// let sayHello = () => {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 임하경, 나이: 27');
// };

// sayHello();

// 함수 표현식 => 호이스팅의 영향을 받지않음
// const sayHello = function () {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 임하경, 나이: 27');
// };

// 파라미터 (함수 재활용)
// const sayHello = function (name, age) {
//   console.log('이름과 나이를 출력해주세요');
//   console.log(`이름: ${name}, 나이: ${age}`);
// };

// let sayHello = (name, age) => console.log(`이름: ${name}, 나이: ${age}`);
// sayHello('임하경', 27);

// 반환 값
// const sum = function (num1, num2) {
//   return num1 + num2;
// };

// sayHello();
// sayHello('임하경', 27);
// sayHello('임하경2', 27);

// let res = sum(2, 8);
// console.log(res);

/* 익명 함수 => 재사용이 필요 없기 때문에 이름 X 
            => 콜백함수 등
*/
// let fruits = ['사과', '귤', '수박'];
// fruits.forEach(function (item) {
//   console.log(item);
// });

// 즉시 실행 함수
// (function () {
//   console.log('선언 즉시 사용');
// })();

// 파라미터 기본값 설정
// const sum = function (num1, num2) {
//   console.log(num1);
//   console.log(num2);
//   return num1 + num2;
// };

// let res = sum(5);
// console.log(res); // => NAN

// const sum2 = function (num1 = 0, num2 = 0) {
//   console.log(num1);
//   console.log(num2);
//   return num1 + num2;
// };

// res = sum2(5);
// console.log(res); // => 5

/*Arrow Function : 화살표 표기법
  1. function 예약어 생략 가능
  2. 함수 바디가 표현식 하나라면 return 키워드, 중괄호 생략 가능
  3. 매개변수가 하나일 때는 매개변수 담는 괄호 생략 가능
*/

// const hello = function () {
//   console.log('hello');
// };
// hello();

// const hello2 = (name) => {
//   console.log(`hello, ${name}`);
// };
// hello2('JavaScript');

// const hello3 = (name) => `hello, ${name}`;
// const hello = hello3('JavaScript');
// console.log(hello);

// 콜백함수
let fruits = ['사과', '귤', '수박'];

fruits.forEach((item, index) => {
  console.log(index, item);
});

// const printItem = function (item, index) {
//   console.log(index, item);
// };

// fruits.forEach(printItem);
