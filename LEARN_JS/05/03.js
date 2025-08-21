// 객체 메서드와 this
// 메서드 : 객체 프로퍼티 값이 함수인 경우
// this 키워드 : 메서드가 호출될 때 해당 메서드를 소유한 객체를 가리킴

// 메서드 정의 방법
// 1. 객체 리터럴에서 메서드
const person = {
  name: "John",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};
person.greet(); // Hello, I'm John

// 2. 생성자 함수에서 메서드
function User(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}
const u1 = new User("Alice");
u1.sayHi(); // Hi, I'm Alice

// this 동작 방식
// 일반 함수 호출 : this는 전역 객체 (window 또는 global)
// 메서드 호출 : this는 해당 메서드를 소유한 객체
// 화살표 함수 : this를 정의된 위치의 상위 스코프에서 가져옴
