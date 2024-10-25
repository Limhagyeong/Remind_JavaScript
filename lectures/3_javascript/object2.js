'use strict';

// let username = '임하경'; //  기본타입은 "값"을 가지고있음
// console.log(username);
// changeName(username);
// console.log(username); // 이름이 변하지 않는 이유
// function changeName(name) {
//   name = '아무개'; // name 변수에 할당된 값
//   console.log(name);
// }

// console.log('==========================');
// // 객체 타입은 주소 참조값을 가지고있음
// let person = {
//   name: '임하경',
//   age: 27,
// };
// console.log(person);
// changePersonName(person);
// console.log(person);
// function changePersonName(person) {
//   person.name = '아무개'; // person 객체에 직접 접근 => 해당 주소의 값이 바뀜
//   person.age = 55;
// }

// let person1 = {
//   name: '임하경',
//   age: 27,
// };

// let person2 = person1;

// person2.name = '아무개';

// console.log(person1);
// console.log(person2);

// let person3 = { ...person1 };

// person3.name = '아무개';

// console.log(person1);
// console.log(person3);

// let person4 = Object.assign({}, person1);
// person4.name = '아무개';
// console.log(person1);
// console.log(person4);

// 객체 존재 여부 확인

// const person = {
//   name: '임하경',
// };

// if ('name' in person) {
//   console.log(person['name']);
// }

// if ('age' in person) {
//   console.log(person['age']);
// } else {
//   console.log('존재하지 않는 정보');
// }

const person = {
  name: '임하경',
};

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('age'));
