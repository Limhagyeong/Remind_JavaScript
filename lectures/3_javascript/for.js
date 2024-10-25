'use strict';

let person = {
  name: '임하경',
  age: 27,
  job: 'programmer',
};
console.log(person.name);

console.log('-------------');

// person은 현재 Object 타입 (키 밸류)
let keys = Object.keys(person);
console.log(keys);
console.log('-------------');

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(`${keys[i]}:`, person[key]);
}

console.log('-------------');

let key = prompt('출력할 값에 대한 키를 입력하세요');
console.log(person[key]);

console.log('-------------');

// for in
for (let key in person) {
  // console.log(key);
  console.log(person[key]);
}

console.log('-------------');
// for of
let fruits = ['사과', '바나나', '딸기'];
for (let fruit of fruits) {
  console.log(fruit);
}
