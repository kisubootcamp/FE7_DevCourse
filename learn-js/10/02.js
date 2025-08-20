function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sucoding = "잘생김";
Person.prototype.greet = function () {
  return "Hello";
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 단축 함수 문법 (Prototype 메서드 등록의 설탕 문법)
  greet() {
    return "Hi";
  }
}
Person.prototype.sucoding = "잘생김";

const per1 = new Person("kim", 20);
const per2 = new Person("park", 30);
const per3 = new Person("yoon", 25);

console.log(per1);
console.log(per1.greet()); // Hello

console.log(typeof Person); // function
// 생긴 것은 클래스이지만, 생성자 함수와 다를 것이 없음
console.log(per1);
