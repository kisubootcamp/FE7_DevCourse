// ES5
// 프로토타입 기반의 생성자 함수
// 프로토타입 기반으로 상속
function Person() {
  this.name = "kim";
  this.age = 20;
}
const p1 = new Person();
console.log(p1);

// ES6
// class 문법
// 객체지향 프로그래밍(OOP)를 더 직관적이고 깔끔하게 작성할 수 있도록 도입된 Sugar Syntax
// Sugar Syntax(Syntax Sugar), 기존의 문법을 사용하기 쉽게 만든 문법
// () => {}, async.. await
// 내부 동작은 여전히 프로토타입 기반 상속이지만, class 문법을 사용하면 전통적인 클래스 기반 언어처럼 코드를 작성할 수 있음

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const per1 = new Person("lee", 30);
const per2 = new Person("park", 25);
const per3 = new Person("kim", 20);
console.log(per1);
console.log(per2);
console.log(per3);
