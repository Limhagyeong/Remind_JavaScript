// 객체 생성 방법 1)
// const hg = {
//   name: '임하경',
//   age: 27,
// };

// 객체 생성 방법 2)
// class Person {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const hg = new Person('임하경', 27);

// 객체생성 방법 3) 생성자 함수
// 'this' 키워드는 새로 생성될 객체 참조
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const hg = new Person('임하경', 27);
console.log(hg);
