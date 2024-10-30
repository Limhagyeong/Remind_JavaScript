/**
 *  Property Attribute
 *
 * 1) 데이터 프로퍼티 : 키밸류 형식의 실질적 값을 가지고있는 프로퍼티
 * 2) 엑세서 프로퍼티 : 자제척으로 값을 가지고있지는 않지만 다른 값을 가져오거나
 *                     설정할 때 호출되는 함스로 구성된 프로퍼티
 *                     ex) getter, setter
 *
 * => Object.getOwnPropertyDescriptor를 통해 어떤 형태의 프로퍼티인지 확인 가능
 * => Object.defineProperty를 통해 직접 정의 가능
 */

const hg = {
  name: '임하경',
  age: 27,
};

// Object : 대문자로 시작하니 생성자 함수 혹은 클래스
// . 으로 접근하니 static 함수 (클래스에 직접 붙는 함수는 static 함수)
console.log(Object.getOwnPropertyDescriptor(hg, 'age'));

/**
 * 1) value: 실제 프로퍼티의 값
 * 2) writable: 값 수정 가능 여부
 * 3) enumerable: 열거 가능 여부 (for...in 등을 사용할 수 있으면 true)
 * 4) configurable: 프로퍼티의 어트리뷰트의 재정의가 가능한지 여부
 *                  false일 경우 프로퍼티 삭제나 어트리뷰트 변경 금지
 *                  단, wirtable이 true 인 경우 값 변경과 wirtable을 변경하는건 가능
 */
// console.log(Object.getOwnPropertyDescriptors(hg));
/**
 * {
  name: {
    value: '임하경',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 27, writable: true, enumerable: true, configurable: true }
}
 */
console.log(Object.getOwnPropertyDescriptor(hg, 'name'));
//{ value: '임하경', writable: true, enumerable: true, configurable: true }
const hg2 = {
  name: '임하경',
  year: 1998,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(hg2);

console.log(hg2.age);
hg2.age = 27;
console.log(hg2.age);

console.log(Object.getOwnPropertyDescriptor(hg2, 'age'));

hg2.blahblah = 'blahblah';
// console.log(hg2);
// console.log(Object.getOwnPropertyDescriptor(hg2, 'blahblah'));

console.log(hg2);
console.log(Object.getOwnPropertyDescriptor(hg2, 'blahblah'));

hg2.blahblah = '블라블라';
console.log(hg2);

Object.defineProperty(hg2, 'blahblah', {
  writable: false,
});

hg2.blahblah = '블라블라';
console.log(hg2);
