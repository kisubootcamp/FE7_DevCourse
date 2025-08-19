// /*

// 생성자 함수
// 함수로 객체를 정의하는 방법
// 선언 방법 -> new 함수()
// [[Prototype]] ? [[]] 로 감싼건 내부 슬롯이라고 하는 듯

// [[Prototype]] 이라는 내부 슬롯은 자신을 생성한 생성자 함수의 프로토타입 객체를 참조한다

// */

// function Person() {
// 	this.name = "kim";
// 	this.age = 20;
// }
// const p1 = new Person(); // [[Prototype]]을 가지고 있을 경우 인스턴스 객체
// console.log(p1);
// // 생성자 함수 내부에 매개변수를 정의하면 생성해내는 객체의 속성 값으로 활용이 가능하다
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.getInfo = function () {
// 		// 이렇게 내부에 함수 있으면 메서드
// 		return `${this.name}, ${this.age}`;
// 	};
// }

// const obj2 = {
// 	name: "park",
// };
// obj2.name = "kim"; // 값 변경
// obj2.age = 20; // 동적으로 속성 추가
// delete obj2.name; // 동적으로 값 삭제

// // 일반 함수의 this는 자신을 호출한 객체. 함수를, 누가 어떻게 호출하냐에 따라서 this가 달라짐
// // 화살표 함수의 this는 자신의 상위 스코프의 this를 참조함
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	// Person의 getInfo 메서드는 함수 실행 컨텍스트 내부에 정의된것
// 	this.getInfo = () => {
// 		return `${this.name}, ${this.age}`;
// 	};
// 	console.log(this);
// 	// 이 상황에서 this는 일반함수를 사용했을 때랑 똑같기 때문에 상관이 없긴합니다만
// 	// 생성자 함수 내에서 사용할때는 가급적 일반함수로 정의할것. (직관적인 코드)
// }

// 이렇게 하면 프로토타입 객체를 동적으로 추가함
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.getInfo = function () {
	return `${this.name}, ${this.age}`;
};
const p3 = new Person("kim", 20); // 이 인스턴스 객체에는 속성값이 name, age밖에 없음. getInfo 메서드는 프로토타입 객체 안에만 있음
console.dir(p3);
console.dir(p3.__proto__.getInfo()); // __proto__ -> [[Prototype]]
console.dir(p3.getInfo()); // 자바스크립트는 __ 이걸 생략하더라도 내부 슬롯을 참조할 수 있음. 생략해서 이렇게 표현하는 걸 prototype 체이닝이라고 함
// 프로토타입 체이닝은 객체에만 연결해줌? 머리가 핑핑 돈다

console.dir(p3.hasOwnProperty); // 없는 속성을 참조하면 undefineded가 나옴

function Developer(name, age, skill) {
  // call()? function에 포함된 메서드. this는?
  Person.call(this, name, age) // 이게 밑에 두줄이랑 똑같은 말 ㄷㄷ....
	// this.name = name;
	// this.age = age;
	this.skill = skill;
}
Developer.prototype.getInfo = function () {
	// Person에 있는거 가져와쓰면 더 간략한 코드 가넝. 그걸 위해 상속이라는 개념을 쓸것임
	return `${this.name}, ${this.age}`;
};
const dev1 = new Developer("kim", 20, "javascript");
// 상속?

// const newObject = Object.create(null); // 빈 객체를 만들수 있음. {} 내부슬롯도 없는 ㄹㅇ 청정자원
// const newObject = {} // 내부슬롯 있음. [[Prototype]]
const newObject = Object.create(Person.prototype); // 이;렇게 해서 Person의 프로토타입 객체를 참조해서 새로운 객체를 만ㄷ름. 그런데 constructor가 없음
Developer.prototype = newObject; // 디벨로퍼 프로토타입에 만든 프로토타입 객체로 재할당함
Developer.prototype.constructor = Developer; // 그리고 직접 constructor를 직접 할당함
console.dir(newObject);


/* 

고전적 의미의 클래스 기반 상속 (Classical inheritance)
C++, Java 같은 언어는 클래스를 정의하고 그 클래스를 extends 해서 서브 클래스를 만드는 방식
이런 걸 보통 클래스 상속이라고 하고, 일반적으로 상속하면 떠오르는 대표적인 상속 문법입니다

자바스크립트는 이런 고전적인 클래스 기반 상속이 없음. 원래는!!
2000 ~ 2010 프로그래밍 언어 = 클래스 기반 언어


프로토타입 기반의 상속 모델을 만든 것임
자바스크립트는 모든 인스턴스 객체는 [[Prototype]]을 통해 다른 프로토타입 객체를 참조가 가능합니다
이 연결고리를 따라가면, 프로퍼티/메서드를 찾는 구조가 됩니다 -> 프로토타입 체인, 프로토타입 체이닝으로
결국 자바스크립트에서 상속이란?
어떤 객체가 자신의 프로퍼티에 없으면 프로토타입을 통해 부모 객체의 속성을 참조할 수 잇는 것을 말한다.
즉, 자바스크립트는 클래스가 아니라 객체가 다른 객체로부터 상속하는 언어이다.

2015년까지 이랬따~

*/

/* 

실무에서는 이런 프로토타입을 이용한 상속을 사용하는가? NO
ES6에서 클래스기반이 생기긴함. 그런데 프로토타입 객체를 기반한 상속임.
클래스 문법 -> Sugar Syntax (설탕문법)

*/