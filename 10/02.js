class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 구식
  // greet = function () {
  //   return `Hello`;
  // };
  // 단축 함수(shorthand method) 문법
  greet() {
    return `Hi`;
  }
}
Person.prototype.sucoding = "...";

const per1 = new Person("kim", 20);
const per2 = new Person("park", 30);
const per3 = new Person("yoon", 25);
console.log(per1);
console.log(per1.sucoding);
