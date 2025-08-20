//객체
// key - value로 구성된 속성의 집합

//1. 객체를 정의하는 방법
// 1.1 리터럴, 객체 리터럴
const obj = {
  name: "kim",
};

// 1.2 Object 생성자 함수
const obj2 = new Object();

// 1.3 생성자함수(커스텀)
function Person(name) {
  this.name = name;
}
const obj3 = new Person("kim");

// 1.4 Object.create()
const obj4 = Object.create();
