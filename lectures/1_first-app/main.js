console.log('Hello Javascript');

alert('Hello Javascript');

let str = 'hg';
console.log('문자열:', str);

function sayHello() {
  console.log('Hello1');
  console.log('Hello1');
  console.log('Hello1');
}

sayHello();

let obj = {
  number: 30, // 프로퍼티 (객체가 가지고있는 속성)
  sayHello: function () {
    console.log('obj>Hello1');
    console.log('obj>Hello1');
    console.log('obj>Hello1');
  },
};

console.log(obj);
console.log(obj.number);
obj.sayHello();
