class IdolModel {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `안녕하세요, ${this.name}입니다.`;
  }
}

class Dancer extends IdolModel {
  onVacation;

  constructor(name, age, onVacation) {
    super(name, age); // 부모 클래스 생성자 실행
    this.onVacation = onVacation;
  }

  sayHello() {
    if (this.onVacation === 'Y') {
      return `${super.sayHello()} 오늘은 휴가입니다`; // 변수는 this를 통해서 접근해야하고 함수는 super를 통해 접근이 가능
    } else {
      return `${super.sayHello()}`;
    }
  }
}

const dancer = new Dancer('아무개', 25, 'Y');
console.log(dancer);
console.log(dancer.sayHello());

const dancer2 = new Dancer('블라블라', 23, 'N');
console.log(dancer2);
console.log(dancer2.sayHello());
