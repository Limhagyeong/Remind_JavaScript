// getter, setter => 불변성 제어 가능
class person {
  #name; // private 프로퍼티는 외부에서 직접 접근이 불가
  age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  get getName() {
    // getter를 통해 외부에서 데이터 호출
    return this.#name;
  }

  set setName(name) {
    // setter를 통해 외부에서 데이터 수정
    // 유효성 검사 진행으로 수정 제어
    // 잘 사용하진않음
    this.#name = name;
  }
}

const hg = new person('임하경', 27);
console.log(hg); // => person { age: 27 }

console.log(hg.getName); // => 프라이빗 속성은 get을 통해 호출해야함

// hg.age = 33;
// hg.name = '아무개';
hg.setName = '아무개'; // => 프라이빗 속성은 set을 통해 접근해야함
console.log(hg.getName);
