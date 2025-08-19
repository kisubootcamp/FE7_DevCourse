class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // static property (정적 속성) => Person.APP_NAME 로 접근
  static APP_NAME = "Person Android";
  // static method (정적 메서드) => Person.greet()로 접근
  static greet() {
    return `Hello`; // => this.age: undefined
  }
}
const p1 = new Person("kim", 20);
console.dir(Person.APP_NAME);
console.dir(Person.greet());
