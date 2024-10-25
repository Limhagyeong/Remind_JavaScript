'use strict';

// 숫자형 리터럴 표현 방식
let number = 2;
const number2 = 2.1;

console.log(number);
console.log(number2);

console.log(5 / 0); // 반환 : Infinity => number 타입의 값
console.log(-5 / 0); // 반환 : -Infinity => number 타입의 값
console.log('hello' / 0); // 반환 : NaN => number 타입의 값

let nan = 'hello' / 0;
console.log(nan);
console.log(typeof nan); // number

// 문자형 리터럴 표현 방식
const name = '임하경';
const name2 = `임하경2`;

console.log(name);
console.log(name2);

console.log('안녕하세요 제 이름은 ' + name + '입니다'); // 싱글쿼터 표현
console.log('----------------------------------------------');
console.log(`안녕하세요 제 이름은 ${name}입니다`); // 백틱 표현
const msg = `안녕하세요

라고 표현 할수있어요`; // 백틱 표현
console.log(msg);

// 이스케이프 표현
const hello = "안녕하세요\n제 이름은 '임하경'입니다"; // 싱글쿼터 안에서 '임하경' 으로 표현하고싶을 때 => \'임하경\'
console.log(hello);

const message = null; // 값이 없는 상태 (의도적으로 값이 비어있음을 나타낼 때 사용)
let messge2; // 값을 할당하지 않은 상태

console.log(message);
// console.log(message2);

console.log(typeof message);
console.log(typeof message2);

/* object type => 1. person 이라는 객체 선언 시 메모리 상에 값들이 올라가고 
                  2. 모든 값을 그룹화한 주소체계가 생성됨
                  3. person은 메모리 주소를 참조하는것 (자바 인스턴스 참조 생각)

  Primitive type => 자바 기본타입 생각 (주소값 없이 직접 값을 저장)
 */

const person = {
  name: '임하경', // key는 property 이름
  age: 27,
  isProgramer: true,
  say() {
    console.log('hello');
  },
};

const arr = [1, 2, 3, 4];
console.log(arr.length);
arr.push(33);
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
