class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `hello, ${this.name}`;
  }

  getInfo() {
    return `${this.name}, ${this.age}`;
  }
}

const p1 = new Person('lee', 20);
console.log(p1.greet());
console.log(p1.getInfo());
