// ES5
// 프로토타입 기반의 생성자 함수
// 프로토타입 기반으로 상속

// function Person() {
//   this.name = "kim";
//   this.age = 20;
// }

// Person.prototype.greet = function () {
//     return `Hi`;
// }

// const p1 = new Person();
// console.log(p1);

// ES6
// class 문법
// 객체지향 프로그래밍(OOP)를 더 직관적이고 깔끔하게 작성할 수 있도록 도입된 Sugar Syntax.
// Sugar Syntax(Syntax Sugar), 기존의 문법을 사용하기 쉽게 만든 문법을 말함
// () => {}, async,..await
// 내부 동작은 여전히 프로토타입 기반 상족이지만, class 문법을 사용하면 전통적인 클래스 기반 언어(java,c++)처럼 코드를 작성할 수 있음

//클래스 내에서는 this 필요 없음
//클래스 내에서의 함수는 constructor를 사용해서 초기화를 함
class Person {
  // name; // = "kim"; 생략해도 상관 없음
  //cage; // = 20;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 구식
  greet = function () {
    return `Hello`;
  };

  // 단축 함수 문법
  greets() {
    return `Hi`;
  }
}

Person.prototype.sucoding = "잘생김";

const per1 = new Person("kim", 20);
console.log(per1);
console.log(per1.greet());
console.log(per1.greets());
console.dir(per1.sucoding);
