// class 상속
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}
const p1 = new Person("kimm", 200);
console.log(p1.greet());

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
  coding() {
    return `Coding in ${this.skill}`;
  }
}

const dev1 = new Developer("kim", 20, "JS");
console.log(dev1.greet());
console.log(dev1.coding());

console.log(dev1 instanceof Developer);
console.log(dev1 instanceof Person);
