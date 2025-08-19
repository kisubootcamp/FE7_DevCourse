class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

const p1 = new Person("kim", 20);
console.log(p1.greet());
// console.log(p1.coding()); 부모에서 자식 클래스 접근은 안됨

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age); // 부모의 생성자를 호출
    this.skill = skill;
  }
  coding() {
    return `Coding in ${this.skill}`;
  }
}

const dev1 = new Developer("kim", 20, "JS");
console.dir(dev1.greet());
console.dir(dev1.coding());

console.log(dev1 instanceof Developer);
console.log(dev1 instanceof Person);
