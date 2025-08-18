// 1. 생성자 함수
// 1.1 함수로 객체를 정의하는 방법
// 1.2 new 키워드 + 함수
// 1.3 [[Prototype]] => 인스턴스 객체
// 1.3.1 자신을 생성한 생성자 함수의 프로토타입 객체를 참조

// 1.2 일반 함수의 this
// 1.2.1 자신을 호출한 객체. 함수를 어떻게, 누가 호출하냐에 따라서 this 다름
// 1.3 화살표 함수의 this
// 1.3.1 자신의 상위 스코프의 this를 참조함
// 1.3.1.1 Person 함수 실행 컨텍스트 내부에 정의가 된 것.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

/* class Person {
    constructor() {
        this.name = "kim";
        this.age = 20;
    }
    getInfo() {
        return `${this.name}, ${this.age}`;
    }
} */

// 2. B C A
// 2.1 상속
function Developer(name, age, skill) {
  Person.call(this, name, age);
  this.skill = skill;
}
// const newObj = Object.create(null); // {} 빈 객체 생성
// console.dir(newObj);
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const dev1 = new Developer("kim", 90, "javascript");
console.log(dev1.getInfo());
console.log(dev1.hasOwnProperty("name"));

// 3. 고전적 의미의 클래스 기반 상속(classical inheritance)
// 3. C++, Java
