/* class static */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // static property (정적 속성)
  static APP_NAME = "Person Android";

  // static method (정적 메서드)
  static greet() {
    return `Hello, ${this.name}`;
  }
}

const p1 = new Person("kim", 20);
console.dir(Person);
console.log(p1.greet()); // TypeError: p1.greet is not a function
console.dir(Person.APP_NAME);
console.dir(Person.greet());
