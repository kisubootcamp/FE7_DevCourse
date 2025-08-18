// 1. 생성자 함수
// 1.1 함수로 객체를 정의하는 방법
// 1.2 new 키워드 + 함수
// 1.3 [[Prototype]]을 가지고 있으면 -> 인스턴스 객체
// 1.3.1 자신을 생성한 생성자 함수의 프로토타입 객체를 참조

// 1.2 일반 함수의 this
// 1.2.1 자신을 호출한 객체. 함수를 어떻게, 누가 호출하냐에 따라서 this
// 1.3 화살표 함수의 this
// 1.3.1 자신의 상위 스코프의 this를 참조함
// 1.3.1.1 Person 함수 실행 컨텍스트 내부에 정의가 된 것.
function Person(name, age) {
  this.name = name;
  this.age = age;
  //   this.getInfo = function () {
  //     return `${this.name}, ${this.age}`;
  //   };
}

Person.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

const p1 = new Person("송", 20); // {}.Person()
const p2 = new Person("김", 30); // {}.Person()

console.dir(p1.__proto__.getInfo()); // __proto__ -> [[Prototype]]
console.dir(p2.getInfo()); // 프로토타입 체이닝
console.dir(p1.hasOwnProperty("age"));
console.log(p2.freeze); // freeze가 Object 객체에 있어도 undefined가 나오는 이유는 prototype은 prototype 객체까지만 찾기 때문에 Object 객체 있으면 못 찾음
