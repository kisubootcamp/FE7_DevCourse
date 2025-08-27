/*

claa 문법
객체 지향 프로그래밍(OOP)을 더 직관적이고 깔끔하게 작성할 수 있도록 도입된 Sugar Syntax

Sugar Syntax => 기존의 문법을 사용하기 쉽게 만든 문법
() => {}, async..await
내부 동작은 여전히 프로토타입 기반 상속이지만, class 문법을 사용하면 전통적인 클래스 기반 언어(java, c++)처럼 코드를 작성할 수 있음

*/

function Person() {
  this.name = "kim";
  this.age = 20;
}

// this를 사용하지 않아도 똑같이 동작
class Person {
  name = "kim";
  age = 20;

  // 인스턴스 객체가 만들어질 때 무조건 한 번 실행
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 단축 함수(shorthand method) 문법
  greet() {
    return "Hi";
  }
}

const per1 = new Person("kim", 20);
console.log(per1);
