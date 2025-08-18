// 생성자 함수
// 1.1 함수로 객체를 정의하는 방법
// 1.2 new 키워드 + 함수
// 1.3 [[Prototype]] -> 인스턴스 객체
// 1.3.1 자신을 생성한 생성자 함수의 프로토타입 객체를 참조

const { L } = require("vitest/dist/chunks/reporters.d.BFLkQcL6.js");

// 1.2 일반 함수의 this
// 1.2.1 자신을 호출한 객체. 함수를 어떻게, 누가 호출하냐에 따라서 this
// 1.3 화살표 함수의 this
// 1.3.1 자신의 상위 스코프의 this를 참조함
// 1.3.1.1 Person 함수 실행 컨텍스트 내부에 정의가 된 것.

// 2. B C A
// 2.1 상속?

// 3. 고전적 의미의 클래스 기반 상속
// 3.1 C++ Java 같은 언어는 클래스를 정의하고, 그 클래스를 extends 해서 서브 클래스를 만드는 방식
// 3.2 이런한 것들을 보통은 클래스 상속이라 함, 일반적인 상속 방식
// 3.3 js는 클래스 상속 없었음
// 3.3.1 2000년대 초반 클래스 기반 언어가 주류

// 3.2 js는 프로토타입 기반의 상속을 구현
// 3.2.1 js의 모든 객체는 프로토타입을 통해 다른 객체 참조 가능
// 3.2.2 이 구조로 프로퍼티/메서드를 찾는 프로토타입 체이닝
// 3.2.3 js 상속은 자신의 프로퍼티에 없어도 부모 객체의 속성을 참조 가능
// js는 클래스가 아닌 객체가 다른 객체로부터 참조를 통해 상속을 구현하는 언어
 
// Class -> Sugar Syntax(설탕 문법, 문법이 매우 쉽다는 표현) 

function Person(name, age) {
    // console.log(this);
    // this.name = "kim";
    // this.age = 20;
    this.name = name;
    this.age = age;
    // this.getInfo = function() {
    //     return `${this.name}, ${this.age}`;
    // }
    // console.log(this);
}
Person.prototype.getInfo = function () {
    return `${this.name}, ${this.age}`;
};
// console.dir(Person.prototype);

function Developer(name, age, skill){
    // this.name = name;
    // this.age = age;
    // this.skill = skill;
    Person.call(this, name, age); 
    this.skill = skill;
}

Developer.prototype.getInfo = function(){
    return `${this.name}, ${this.age}`;
};

const dev1 = new Developer("kim", 20, "javascript");
console.dir(dev.hasOwnProperty("name"));
// console.dir(dev1.getInfo());

// Person Prototype 참조해서 새로운 객체 생성
// const newObject = Object.create(Person.prototype); // {}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developerl
console.dir(newObject);

const obj = {};
console.dir(obj);

const p1 = new Person("kim", 20); // {}.Person()
const p2 = new Person("park", 30); // {}.Person()
console.dir(p1.getInfo());
console.dir(p2.hasOwnProperty("name"));
console.dir(p2.hasOwnProperty("superman"));
console.dir(p2.hasOwnProperty("getInfo"));
console.dir(p2);
console.dir(p2.ddd);
console.dir(p2.freeze()); // undefined
// console.dir(p1.getInfo());
// console.dir(p1.__proto__.getInfo()); 
// console.dir(p2.getInfo()); // 프로토타입 체이닝
// window.Person();
// const obj = {
//     person : Person,
// };
// console.log(obj.person());

// console.dir("dd");
// console.dir([]);
// console.dir(Person);
// console.dir(Person.prototype); // slot(슬롯)

// const obj = { name : "park", }; // 값을 변경한다
// obj.name = "kim"; // 동적으로 속성을 추가한다
// console.log(obj);
// obj.age = 20;

// delete obj.name; // 동적으로 속성을 삭제한다.
// console.log(obj);

