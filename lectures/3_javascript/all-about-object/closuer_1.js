/**
 * Closuer
 *
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우로 해석해볼 수 있음
 */

// function getNumber() {
//   var num = 5;
//   function innerGetNum() {
//     return num;
//   }
//   return innerGetNum();
// }

// console.log(getNumber());

function getNumber() {
  var num = 5;
  function innerGetNum() {
    return num;
  }
  return innerGetNum; // 실행을 시켜버리면 inner함수를 클로저로 활용할 수 없음
}

const runner = getNumber(); // getNumber함수(상위함수)의 excution context는 끝난 상태 (변수에 반환값 할당)
console.log(runner);
console.log(runner()); // inner함수(하위함수)가 동작

// 데이터 캐싱 : 오래걸리는 로직의 값을 저장해둘 때

// 1) 일반 함수 호출
// 아래와 같이 작성하면 해당 함수를 호출할 때마다 오래 걸리는 로직을 수행해야함
// function CacheFunction(newNum) {
//   var num = 10 * 10; // 해당 로직이 매우 오래 걸리는 계산이라고 가정

//   return num * newNum;
// }
// console.log(CacheFunction(10));
// console.log(CacheFunction(20));
// console.log(CacheFunction(30));

// 2) 클로저 사용
function CacheFunction2() {
  var num = 10 * 10; // 해당 로직이 매우 오래 걸리는 계산이라고 가정

  function InnerCacheFunction(newNum) {
    return num * newNum;
  }

  return InnerCacheFunction;
}

// 여기서 innerFunction 호출만 해둠
// 이때, 오래 걸리는 로직은 수행되어 값이 저장 되어있는 상태
const runner2 = CacheFunction2();

console.log(runner2(10));
console.log(runner2(20));

// 2) 데이터 캐싱 : 반복적으로 값을 변환해야할 때
function CacheFunction3() {
  var num = 99;

  function Increment() {
    num++;
    return num;
  }

  return Increment;
}

const runner3 = CacheFunction3();
console.log(runner3());
console.log(runner3());

// 3) 정보 은닉
function Person(name, year) {
  this.name = name;

  var _year = year; // this로 선언하지 않으면 외부에서 직접 접근이 불가 => private 변수처럼 사용할 수 있음

  this.sayNameAndYear = function () {
    return `${this.name}입니다. ${_year}에 태어났습니다`; // 내부에서는 접근 가능
  };
}

const hg = new Person('임하경', 1998);

console.log(hg.sayNameAndYear());
console.log(hg.name);
console.log(hg._year); // undefined
