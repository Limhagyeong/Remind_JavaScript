class IdolModel {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dancer extends IdolModel {
  dance() {
    console.log(`${this.name}이 춤을 춥니다`);
  }
}

class Singer extends IdolModel {
  sing() {
    console.log(`${this.name}이 노래를 부릅니다`);
  }
}

const dancer = new Dancer('아이돌1', 23);
const singer = new Singer('아이돌2', 25);

console.log(dancer.name);
console.log(singer);

dancer.dance();
singer.sing();

// console.log(dancer instanceof IdolModel);
// console.log(dancer instanceof Dancer);
// console.log(dancer instanceof Singer);
