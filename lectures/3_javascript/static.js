// static => 인스턴스가 아닌 클래스 자체에 속하는 속성이나 메소드

// class person {
//   static count = 0;
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     person.incrementCount();
//   }

//   static incrementCount() {
//     person.count++;
//   }
//   static returnCount() {
//     return `${person.count}번의 인스턴스가 생성되었습니다`;
//   }
// }

// const hg = new person('임하경', 27);
// const hg2 = new person('임하경', 27);
// const hg3 = new person('임하경', 27);
// console.log(hg); // => static은 인스턴스에 포함되지 않음

// console.log(person.returnCount());

/**
 * factory constructor
 */

class person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static fromObject(object) {
    return new person(object.name, object.age);
  }

  static fromList(list) {
    return new person(list[0], list[1]);
  }
}

const hg = person.fromObject({ name: '임하경', age: 27 });
console.log(hg);
const hg2 = person.fromList(['임하경', 1998]);
console.log(hg2);
