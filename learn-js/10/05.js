class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

class Developer extends Person {
  // 상속
  constructor(name, age, skill) {
    super(name, age); // 부모의 생성자를 상속
    this.skill = skill;

    // super를 이용해서 부모 클래스의 생성자 함수의 기능을 모두 사용하면서,
    // 자식 클래스만의 고유한 기능을 추가할 수 있다.
  }
}

const dev1 = new Developer("kim", 20, "JS");
console.dir(dev1);
console.dir(dev1.greet());

// dev1은 Developer와 Person 모두의 인스턴스
