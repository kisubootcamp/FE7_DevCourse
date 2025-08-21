// 1. 객체 생성과 프로퍼티
// 1.1 객체 생성 방법
// 1.1.1 객체 리터럴 (가장 많이 사용)
const obj1 = { name: "John", age: 30 };
// 중괄호 {}로 바로 만드는 방식
// 코드가 짧고 간단

// 1.1.2 Object 생성자
const obj2 = new Object();
obj2.name = "John";
obj2.age = 30;
// 잘 쓰진 않지만, new Object()로도 만들 수는 있음

// 1.1.3 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj3 = new Person("john", 30);
// 같은 구조의 객체를 여러 개 만들 때 유용

// 1.1.4 Objectcreate()
const obj4 = Object.create(Object.prototype);
obj4.name = "John";

// --------------------------------------------- //

// 2.1 객체 메서드와 this
// 2.1.1 메서드란
// 객체 안에 들어있는 함수를 메서드라고 부름
const person = {
  name: "John",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};
person.greet(); // Hello, I'm John
// this는 메서드를 호출한 객체를 가리킵니다.
// person.name을 의미

// --------------------------------------------- //

// 3.1 함수
// 3.1.1 함수를 만드는 3가지
// 3.1.1.1 함수 선언식
function greet() {
  console.log("Hi");
}
// 3.1.1.2 함수 표현식
const greet2 = function () {
  console.log("Hi");
};
// 3.1.1.3 화살표 함수
const greet3 = () => console.log("Hi");

// --------------------------------------------- //

// 4.1 콜백 함수
// 다른 함수의 재료(인자)로 전달되는 함수
// 나중에 그 함수 안에서 호출됨

// 4.1.1 콜백 함수 예제
function greet(name) {
  console.log(`Hello, ${name}`);
}
function processUserInput(callback) {
  const name = "John";
  callback(name); // 여기서 콜백 함수 실행
}
processUserInput(greet);
// Hello, John

// 4.1.2 동기 콜백 (바로 실행)
[1, 2, 3].forEach(function (num) {
  console.log(num);
});
// 1
// 2
// 3

// 4.1.3 비동기 콜백
console.log("시작");
setTimeout(function () {
  console.log("3초 후 실행");
}, 3000);
console.log("끝");
// 출력 순서
// 시작
// 끝
// 3초 후 실행

// --------------------------------------------- //
