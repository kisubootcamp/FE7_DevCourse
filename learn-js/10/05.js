//static
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // static property(정적 속성)
  static APP_NAME = "Person Android";
  // static methi(정적 메서드)
  static greet() {
    return `HELLO, ${this.name}`;
  }
  // 위랑
  // 이거랑 같음
  //   Person.greet = function () {
  //     return `hello`;
  //   }
}

const p1 = new Person("kim", 20);

console.dir(Person);
console.dir(Person.APP_NAME);
console.dir(Person.greet());
