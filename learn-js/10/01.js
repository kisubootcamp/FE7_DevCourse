// ES5
// 프로토타입 기반의 생성자 함수
// 프로토타입 기반으로 상속
function Person() {
  this.name = "kim";
  this.age = 20;
}

const p1 = new Person();
console.log(p1); // Person { name: 'kim', age: 20 }

// ES6
// class 문법
// 객체지향 프로그래밍(OOP)를 더 직관적이고 깔끔하게 작성할 수 있도록 도입된 Sugar Syntax
// Sugar Syntax(Sugar Syntax): 기존의 문법을 사용하기 쉽게 만든 문법
// () => {}, async..await
// 내부 동작은 여전히 프로토타입 기반 상속이자만,
// class 문법을 사용하면 전통적인 class 기반 언어(java, c++)처럼 코드를 작성할 수 있다.
// 본질: 자바스크립트는 클래스 기반 언어가 아니라 프로토타입 기반 언어이다.
class Person {
  //   name;
  //   age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 구식 방법
  //   greet = function () {
  //     return "Hello";
  //   };
  // 단축 함수 문법
  greet() {
    return "Hi";
  }
}

const per1 = new Person("kim", 20);
const per2 = new Person("park", 30);
const per3 = new Person("yoon", 25);
console.log(per1);
console.log(per2);
console.log(per3);

console.log(per1.greet()); // Hello
console.log(per2.greet()); // Hello
