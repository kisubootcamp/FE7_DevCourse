function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getInfo = function () {
  return `${this.name} is ${this.age} years old.`;
};

function Developer(name, age, skill) {
  this.name = name;
  this.age = age;
  this.skill = skill;
}
Developer.prototype.getInfo = function () {
  return `${this.name} ${this.age} ${this.skill}.`;
};

const dev1 = new Developer("Lee", 30, "JavaScript");
console.dir(dev1);
console.dir(dev1.getInfo()); // Lee 30 JavaScript.

// 상속
// 과거에는 언어에 상속이 없으면 무시당했음
// 프로토타입 기반의 상속을 만듦
// 어떤 객체가 자신의 프로퍼티에 없으면 프로토타입을 ㅌㅇ해 부모 객체의 속성을 참조할 수 있는 것을 말함
// 자바스크립트는 클래스가 아니라 객체가 다른 객체로부터 상속하는 언어이다.

// Class -> Sugar Syntax(설탕을 뿌린 것처럼 문법적으로 편하게 쓴 것)
