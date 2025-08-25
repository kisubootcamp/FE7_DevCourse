class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello`;
  }
  getInfo() {
    return `${this.name}, ${this.age}`;
  }
}

const p1 = new Person("kim", 20);
console.log(p1.greet());
