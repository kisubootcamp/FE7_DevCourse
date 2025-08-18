// +. hasOwnProperty("") 메서드
// . 앞의 객체에 (직접적인) 속성이 있는지 확인하는 용도

// 참조할 수 있는 이유 :: 프로토타입 체이닝
// ㄴ 펄슨 프로토타입도 어떤 객체의 프로토타입에 참조하기 때문에 (펄슨 프로토타입도 누군가의 인스턴스 객체임)
// ㄴ 펄슨 프로토타입의 [[]] 안의 constructor를 확인하면 어떤 객체가 무엇인지 알 수 있음
// ㄴ 펄슨 위에는 오브젝트가 있는데 얘는 원래 존재하는 애, 프로토타입을 갖고 있음
// ㄴ 이런 식으로 타고 올라가면서 프로토타입 체이닝 하다보면 가장 상위에 오브젝트가 있고, 개가 hasOwnProperty 속성을 갖고 있음
// ㄴ 없는 속성에 대해서는 undefined를 반환함 (에러 ㄴㄴ) (hasOwnProper*d*y 처럼 없는 속성일 때)
// ㄴ 즉 프로토타입은 계속 연결되어 있다 == 프로토타입 체인 (함수를 건들지는 않음, 프로토타입 객체끼리만 연결됨)

// 3. b c a
// 3-1. 상속
function Person(name, age) {
  (this.name = "park"), (this.age = 20);
}

function Dveloper(name, age, skill) {
  Person.call(this, name, age); // call은 내장된 메서드, 겹치는 속성을 편하게 속성시킬 수  있음
  // this는 person의 this를 Dveloper로 가져오도록 고정(?)
  // this.name = name;
  // this.age = age;
  // 와 같은 역할
  this.skill = skill;
}
Dveloper.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

// const newObject = Object.create(null) // .create :: 빈 객체{}를 만듦 :: **property가 없음
// 왜 없음? :: 따라 올라가면 object.prototype에 도달, object보다 상위가 없으니까 누군가의 인스턴스가 될 수 없어서 없음
const newObject = Object.create(Person.prototype); // Person.prototype을 상속받는 객체를 만듦, 내부 슬롯 만들ㅇ서 펄슨의 프로토타입과 연결함
Dveloper.prototype = newObject; // 원래의 프로토타입과 관계를 끊고, 새로운 프로토타입(방금만든)을 연결함
// 근데 constructor 속성이 없음 그래서 추가
Dveloper.prototype.constructor = Dveloper; // constructor 속성 추가
console.dir(newObject);

const dev1 = new Dveloper("kim", 30, "js");
console.dir(dev1);
console.dir(dev1.getInfo()); // 직접 갖고 있지 않지만 프로토타입 체이닝을 통해 접근 가능

// 4. 고전적 의미의 클래스 기반 상속 (classical inheritance)
// 4-1. C++, Java 같은 언어는 클래스를 정의하고, 그 클래스를 extends해서 서브 클래스를 만드는 방식
// 이런걸 보통 클래스 상속 이라고 하고, 일반적으로 상속 하면 떠오르는 대표적인 상속 문법
// 4-2. 자바스크립트는 이런 고전적인 클래스 기반 상속이 없던 언어, 즉 원래 상속이 없었음
// 프로토 타입 기반의 상속 모델을 만든 것
// 자바스크립트의 모든 인스턴스 객체는 [[prototype]]을 통해 다르 프로토타입 객체를 참조 가능
// 이 연결 고리를 따라가, 프로퍼티/메서트는 찾는 구조 -> 프로토타입 체이닝
// 결국 자바스크립트에서 상속이란, 어떤 객체가 자신의 프로퍼티에 없으면 프로토타입을 통해 부모 객체의 속성을 참조할 수 있는 것
// 즉, 자바스크립트는 클래스가 아닌 객체가 다른 객체로부터 상속하는 언어
