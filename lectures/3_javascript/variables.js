console.log('hello');

let name = '임하경';
console.log(name);
name = '하경';
console.log(name);

const user = '임하경';
console.log(user);
// user = '하경';
// console.log(user);

{
  let a = '변수';
  console.log('a:', a);
  {
    let a = '변수2';
    let c = 'c변수';
    console.log('c블록 a:', a);
  }
}
// console.log('a:', a);

function sum(a, b) {
  let result = a + b;
  return result;
}
{
  var number = 2;
  var number = 3;
}
console.log(number);

console.log(number2);
var number2 = 2;

console.log(print());
let print = function () {
  return 'hello';
};
