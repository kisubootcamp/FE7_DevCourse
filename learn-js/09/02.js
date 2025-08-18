// 2. B C A
// 2.1 상속?

// 3. 고전적 의미의 클래스 기반 상속(classicale inheritance)
// 3.1 C++, Java 같은 언어는 클래스를 정의하고, 그 클래스를 extends 해서 서브 클래스를 만든느 방식
// 3.2 이런걸 보통은 클래스 상속이라고 하고, 일반적으로 상속 하면 떠오르는 대표적인 상속 문법
// 3.3 자바스크립트는 이런 고전적인 클래스 기방 상속이 없던 언어. 즉, 자바스크립트는 원래 상속이 없었음
// 3.3.1 2000 ~ 2010, 프로그래밍 언어 = 클래스 기반 언어

// 3.2 프로토타입 기반의 상속 모델을 만든 것
// 3.2.1 자바스크립트의 모든 인스턴스 객체는 [[Prototype]]을 통해 다른 프로토타입 객체를 참조 가능
// 3.2.2 이 연결고리를 따라가면, 프로퍼티/메서드를 찾는 구조 -> 프로토타입 체인, 프로토타입 체이닝
// 3.2.3 결국 자바스크립트의 상속이란, 어떤 객체가,
// 자신의 프로퍼티 없으면 프로토타입을 통해 부모 객체의 속성을 찾모할 수 있는 것을 말함
// 즉, 자바스크립트는 클래스가 아니라 객체가 다른 객체로부타 상속하는 언어다.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

function Developer(name, age, skill) {
  Person.call(this, name, age); // 변수 선언 안 하고 이렇게 하면 됨(상속 관계에서)
  //   this.name = name;
  //   this.age = age;
  this.skill = skill;
}

Developer.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

const newObject = Object.create(Person.prototype); // create는 객체를 만들어 주지만 프로퍼티가 아무것도 없음
Developer.prototype = newObject; // Developer가 원래 가지고 있던 prototype 관계를 새로운 prototype 객체로 설정하겠다고 하는 것
Developer.prototype.constructor = Developer; // 빈 객체의 constructor가 Developer 객체로 연결하게 해주는 것

const dev1 = new Developer("kim", 20, "javascript");
console.dir(dev1.getInfo()); // 없는 getInfo() 가 참조되는 건 프로토타입 체이닝 덕분
console.dir(dev1.hasOwnProperty("name"));
