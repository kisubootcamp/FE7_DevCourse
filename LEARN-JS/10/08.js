class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `hello, ${this.name}`;
  }
}

const p1 = new Person('park', 40);
console.log(p1.greet());
// console.log(p1.coding());

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age); // 부모의 생성자를 호출
    this.skill = skill;
  }
  coding() {
    return `Coding in ${this.skill}`;
  }
}

const dev1 = new Developer('lee', 20, 'js');
console.dir(dev1);
console.dir(dev1.greet());
console.dir(dev1.coding());

console.log(dev1 instanceof Developer);
console.log(dev1 instanceof Person);
