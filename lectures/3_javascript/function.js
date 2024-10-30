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
// let fruits = ['사과', '귤', '수박'];

// fruits.forEach((item, index) => {
//   console.log(index, item);
// });

// const printItem = function (item, index) {
//   console.log(index, item);
// };

// fruits.forEach(printItem);

// 새로운 배열을 만드는 함수
//   concat() => 깊은 복사 후 push
//   slice() => 깊은 복사 후 지정 범위 요소 잘라옴

let source = ['사과', '바나나', '딸기', '멜론'];
// let newSource = source.concat('멜론');
// let newSource = source.slice(0, 2);
// // let newSource = source.splice(0, 2);
// console.log(source);
// console.log(newSource);

// join() => ,(default값) 기준으로 요소 잘라서 반환 (String)
// console.log(typeof source.join());
// console.log(source.join());
// console.log(source.join('/'));
// console.log(source.join(', '));

// // sort()=> 오름차순
// console.log(source.sort());
// // reverse() => 내림차순
// console.log(source.reverse());
// let num = [1, 9, 7, 8, 5, 3];
// console.log(num);

/*sort(): a, b를 비교했을 때
  1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
  2) a를 b보다 먼저에 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
  3) 기존 순서를 유지하려면 0을 반환
*/

// num.sort((a, b) => {
//   return a > b ? 1 : -1;
// }); //=> 오름차순

// num.sort((a, b) => {
//   return a > b ? -1 : 1;
// }); //=> 내림차순

// console.log(num);

// map()
// console.log(
//   source.map((fruit, index) => {
//     console.log(index, fruit);
//     return fruit;
//   })
// );

// filter() => 조건에대해 true인 모든 값을 새로운 배열로 반환
let num = [1, 9, 7, 8, 5, 3, 4];
// console.log(num.filter((x) => x % 2 === 0));

// // find() => 조건에대해 true인 첫번째 값을 반환
// console.log(num.find((x) => x % 2 === 0));

// // findIndex() => 조건에대해 true인 첫번째 값의 인덱스 반환
// console.log(num.findIndex((x) => x % 2 === 0));

// reduce()
//=> 첫번째 매개변수는 누적값 (p), 두번째 매개변수는 현재 요소(n)
//=> 초기값은 0으로 설정
console.log(num.reduce((p, n) => p + n, 0));
