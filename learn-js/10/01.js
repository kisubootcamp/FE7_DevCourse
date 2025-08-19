//ES5
// 프로토 타입 기반의 생성자 함수 , 프로토타입 기반으로 상속

// ES6
// class 문법
// 객체지향 프로그래밍을 더 직관적이고 깔끔하게 작성할 수 있도록 도입된 Sugar Syntax
// Sugar Syntax : 기존의 문법을 사용하기 쉽게 만든 문법
// () => {}, async..await
// 내부 동작은 여전히 프로토타입 기반 상속이지만,
// class 문법을 사용하면 전통적인 클래스 기반 언어(c++, java)처럼 코드를 작성할 수 있습니다.
// 다만? 자바스크립트가 클래스 기반 언어인건 아님. 프로토타입 기반 언어

class Person {
  name = "kim"; // 생성자 함수와 다르게 this를 사용하지 않아도 똑같은 효과를 만들어 줌
  age = 20;
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //구식
  greet = function () {
    console.log("구식 안녕");
  };

  // 단축 함수
  greets() {
    console.log("단축 안녕");
  }
}

const jiho = new Person("hi", 27);
console.log(jiho);
jiho.name = "jiho";
console.log(jiho);

jiho.greet();
jiho.greets();
