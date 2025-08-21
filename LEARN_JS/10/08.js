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
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
}

const dev1 = new Developer("JavaScript");
console.log(dev1);

console.log(dev1 instanceof Developer); // dev1이라는 객체가 Developer의 인스턴스인지 확인
console.log(dev1 instanceof Person); // dev1이라는 객체가 Person의 인스턴스인지 확인
