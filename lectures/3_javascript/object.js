'use strict';

// 객체 리터럴 방식
// const person = {
//   name: '임하경',
//   age: 27,
// };
// person.job = 'programmer'; // 프로퍼티 추가 가능
// console.log(person);

// 객체 생성자 문법
// const person = new Object();
// person.name = '임하경';
// person.age = 27;
// console.log(person);

// 객체 접근법

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32, // 프로퍼티
//   gender: 'male',
//   interests: ['music', 'movie'],
//   hello: function () {
//     alert('Hello');
//   }, // 메소드
//   greeting: function () {
//     alert('Hi');
//   },
//   hobby: {
//     name: 'programming',
//     alert: function () {
//       alert('programming');
//     },
//   },
// };

// console.log(person.name[0]);
// // person.hello();
// person.hobby.alert();
// console.log(person.hobby.name);
// console.log(person);

// console.log(person['name']);
// console.log(person['name'][0]);
// // person['hello']();
// person['hobby']['alert']();
// console.log(person['hobby']['name']);

// delete person.name;
// delete person['hobby']['name'];
// console.log(person);

// const printPerson = (name, age, hobby) => {
//   console.log(
//     `제 이름은 ${name}이고, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby} 입니다`
//   );
// };
// printPerson('아무개', 22, '음악듣기');

// const printPerson = (personInfo) => {
//   console.log(
//     `제 이름은 ${personInfo.name[1]}이고, 나이는 ${personInfo.age}살 입니다. 그리고 취미는 ${personInfo.hobby} 입니다`
//   );
// };

// const personInfo = {
//   name: ['아무개', '임하경'],
//   age: 22,
//   hobby: '음악듣기',
// };

// printPerson(personInfo);

// 구조분해 할당 (배열)

// const fruits = ['사과', '귤', '수박'];
// const [a, b] = fruits;
// console.log(a);
// console.log(b);

// 구조분해 할당 (객체)
// const person = {
//   name: '임하경',
//   age: 27,
//   hobby: '음악듣기',
// };
// const { hobby, name, age } = person;
// console.log(name);
// console.log(age);
// console.log(hobby);

// 구조분해 할당 (매개변수로 받기)

// const printPerson = ({ name, age, hobby }) => {
//   console.log(
//     `제 이름은 ${name}이고, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby} 입니다`
//   );
// };

// const person = {
//   name: '임하경',
//   age: 27,
//   hobby: '음악듣기',
// };

// printPerson(person);

// 팩토리 함수 => 객체를 반환하는 함수
function createPerson(name, age, hobby) {
  return {
    name: name, // 키 밸류 값이 같을 때 하나만 선언해도 동작함
    age,
    hobby,
  };
}

// const person1 = createPerson('임하경', 27, '음악듣기');
// const person2 = createPerson('222', 22, '222');
// const person3 = createPerson('333', 33, '333');

// console.log(person1);
// console.log(person2);
// console.log(person3);

// ES5 클래스 생성
// function Person(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// // ES6 클래스 생성
// class Person {
//   constructor(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
// }

// const person1 = new Person('임하경', 1, 'ㅇㅇㅇ');
// console.log(person1);
