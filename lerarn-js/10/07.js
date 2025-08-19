class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // static method (정적 메서드)
  static APP_NAME = "PERSON ANDROID";
  static greet() {
    return `Hello, ${this.name}`;
  }
}

const p1 = new Person("kim", 20);
console.log(Person.APP_NAME);

console.log(Person.greet());
