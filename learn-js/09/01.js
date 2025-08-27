// 1. 생성자 함수
// 1.1 함수로 객체를 정의하는 방법
// 1.2 new 키워드 + 함수
// 1.3 [[Prototype]] -> 인스턴스 객체
// 1.3.1 자신을 생성한 생성자 함수의 프로토타입 객체를 참조

// 1.2 일반 함수의 this
// 1.2.1 자신을 호출한 객체. 함수를 어떻게, 누가 호출하냐에 따라서 this
// 1.3 화살표 함수의 this
// 1.3.1 자신의 상위 스코프의 this를 참조함
// 1.3.1.1 Person 함수 실행 컨텍스트 내부에 정의가 된 것
// 2. B C A
// 2.1 상속 ?

// 3. 고전적 의미의 클래스 기반 상속(classical inheritance)
// 3.1 C++, Java 같은 언어는 클래스를 정의하고, 그 클래스를 extends해서 서브 클래스를 만드는 방식
// 3.2 이런 걸 보통은 클래스 상속이라고 하고, 일반적으로 상속하면 떠오르는 대표적인 상속 문법
// 3.3 자바스크립트는 이런 고전적인 클래스 기반 상속이 없던 언어. 즉, js는 원래 상속이 없었음.
// 3.3.1 2000 ~ 2010, 프로그래밍 언어 = 클래스 기반 언어

// 3.2 프로토타입 기반의 상속 모델을 만든 것.
// 3.2.1 자바스크립트의 모든 인스턴스 객체는 [[Prototype]]을 통해 다른 프로토타입 객체를 참조 가능
// 3.2.2 이 연결고리를 따라가면, 프로퍼티/메서드를 찾는 구조 -> 프로토타입 체인, 프로토타입 체이닝
// 3.2.3 결국 자바스크립트에서 상속이란, 어떤 객체가, 자신의 프로퍼티에 없으면 프로토타입을 통해 부모 객체의 속성을 참조할 수 있는 것을 말함
// 즉, 자바스크립트는 클래스가 아니라 객체가 다른 객체로부터 상속하는 언어다.
// 프로토타입 기반 클래스 상속은 현재 실무에서 사용하지 않음

// Class -> Sugar Syntax (설탕 문법, 마치 설탕을 뿌린 것처럼 달콤하다 (쉽다))

// C.prototype
// C 클래스의 인스턴스들에 설정될 프로토타입 객체. 내려가는 방향
// obj = new C();
// obj.__proto__
// 객체 obj의 프로토타입 객체. 올라가는 방향
// 항등식 : C.prototype === obj.__proto__

// 생성자 함수: 객체를 초기화하는 함수. 객체를 생성하지 않는다.
// Object.create() : 객체 생성만 함
// new : 객체 생성 & 초기화(생성자 함수 호출) 모두 함.
function Person(name, age) {
    // console.log(this)
    this.name = name;
    this.age = age;
    // this.getInfo = function () {
    //     return `${this.name}, ${this.age}`;
    // }
}
Person.prototype.getInfo = function () {
    return `${this.name}, ${this.age}`;
}

Person.prototype.num = 3;


// Person 함수 객체 내부
console.log(Person); // [Function: Person]
console.log(Person.constructor.name); // Function
console.log(Reflect.ownKeys(Person)); // [ 'length', 'name', 'arguments', 'caller', 'prototype' ]

console.log(Person.name); // Person
console.log(Person.caller); // null
console.log(Person.length); // 2
console.log(Person.arguments); // null

// Person.prototype 객체(Person 타입 객체의 프로토타입 객체) 내부
console.log(Person.prototype); // { getInfo: [Function (anonymous)] }
console.log(Reflect.ownKeys(Person.prototype)); // [ 'constructor', 'getInfo' ]
console.log(Person.prototype.constructor.name); // Person

console.log(Person.prototype.__proto__); // [Object: null prototype] {}
console.log(Reflect.ownKeys(Person.prototype.__proto__));
// [
//     'constructor',
//     '__defineGetter__',
//     '__defineSetter__',
//     'hasOwnProperty',
//     '__lookupGetter__',
//     '__lookupSetter__',
//     'isPrototypeOf',
//     'propertyIsEnumerable',
//     'toString',
//     'valueOf',
//     '__proto__',
//     'toLocaleString'
// ]
console.log(Person.prototype.__proto__.constructor.name); // Object

// Person 함수 객체의 프로토타입 객체 내부
console.log(Person.__proto__);
console.log(Person.__proto__.constructor.name);
console.log(Reflect.ownKeys(Person.__proto__));

console.log(Reflect.ownKeys(Person.__proto__.constructor));

// Person 객체의 프로토타입 객체의 프로토타입 객체 내부
console.log(Person.__proto__.__proto__);
console.log(Person.__proto__.__proto__.constructor.name);
console.log(Reflect.ownKeys(Person.__proto__.__proto__));

// 빈 객체 리터럴 내부
const ob = {};
console.log(ob);
console.log(ob.constructor.name);
console.log(Reflect.ownKeys(ob));
console.log(ob.__proto__);
console.log(ob.__proto__.constructor.name);
console.log(Reflect.ownKeys(ob.__proto__));

// null 프로토타입을 갖는 빈 객체 내부
const ob2 = Object.create(null);
console.log(ob2);
console.log(Reflect.ownKeys(ob2));
console.log(ob2.__proto__);

// 소유/상속 프로퍼티 함수 객체의 묵시적 this 값
let o1 = {};
o1.f = Person;
o1.f("Lee", 24);
console.log(o1);

// 함수 객체의 명시적 this 값
let o2 = {};
o2.f = Person;
Person.call(o2, "Lee", 24);
console.log(o2);


const obj2 = {};
console.dir(obj2); // {}

console.dir(Person.prototype); // { getInfo: [Function (anonymous)] }
const p1 = new Person("kim", 20); // {}.Person()
const p2 = new Person("park", 30); // {}.Person()
console.dir(p1);
console.dir(p1.getInfo());
console.dir(p2.getInfo()); // 프로토타입 체이닝


console.log(Object.keys(p1));
let n = Number(3);
console.log(Object.keys(p1)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(p1)); // [ 'name', 'age' ]

console.log(Reflect.ownKeys(p1)); // [ 'name', 'age' ]
console.log(p1.constructor.name); // Person

// new Person("kim", 20)의 내부 동작
// 1. 객체 생성
// 2. 생성자 함수 호출
// 2-1. call 함수 사용법
const p3 = Object.create(Person.prototype);
Person.call(p3, "choi", 23);
console.log(p3);

console.log(p1.__proto__ === Person.prototype);

// 2-2. constructor 함수 사용법
const p4 = Object.create(Person.prototype);
p4.constructor("ze", 29);
console.log(p4);

console.log(p1.__proto__); // { getInfo: [Function (anonymous)] }  
console.log(Person.prototype);
console.log(Reflect.ownKeys(p1.__proto__));
console.log(Reflect.ownKeys(Person.prototype));
console.log(p1.__proto__ === Person.prototype);
console.log(Person.prototype.constructor === Person); // true

console.log(p3.__proto__ === Person.prototype);



new Person();




/*
const obj = {
    person: Person,
}
*/

/*
console.dir(Person);
console.dir(Person.prototype);
*/
// console.dir(): 객체 등을 계층적으로 출력해줌
// 모든 함수는 그 함수와 1:1로 연결된 (참조 관계가 형성된) Prototype이란 공간이 있음 (1개만 존재)
// prototype 객체는 constructor를 가지고, 이 constructor는 함수를 가리킴

const obj = {
    name: "park",
};
obj.name = "kim";
// obj.age = 20;
console.log(obj);





// 디벨로퍼
function Developer(name, age, skill) {
    Person.call(this, name, age);
    // this.name = name;
    // this.age = age;
    this.skill = skill;
}

// Developer 함수 객체 내부
console.log(Developer); // [Function: Developer]
console.log(Developer.constructor.name); // Function
console.log(Reflect.ownKeys(Developer)); // [ 'length', 'name', 'arguments', 'caller', 'prototype' ]

console.log(Developer.name);
console.log(Developer.caller);
console.log(Developer.length);
console.log(Developer.arguments);

// Developer 함수 객체의 프로토타입 객체 내부
console.log(Developer.__proto__);
console.log(Developer.__proto__.constructor.name);
console.log(Reflect.ownKeys(Developer.__proto__));

console.log(Reflect.ownKeys(Developer.__proto__.constructor));


// const dev1 = new Developer("kim", 20, "javascript");
// console.dir(dev1.getInfo());

// 빈 객체 만들기
// Person.prototype 참조해서 새로운 객체를 만들겠다.
// const newObject = Object.create(null);
// console.dir(newObject);




Developer.prototype = Object.create(Person.prototype);
Developer.prototype.num2 = 5;
Developer.prototype.constructor = Developer;
console.log(Developer.prototype.__proto__);


const dev1 = new Developer("kim", 20, "javascript");

console.dir(dev1.getInfo());
console.dir(dev1.hasOwnProperty("name"));

console.log(dev1); // Developer { name: 'kim', age: 20, skill: 'javascript' }
console.log(dev1.constructor.name); // Developer
console.log(Reflect.ownKeys(dev1)); // [ 'name', 'age', 'skill' ]
console.log(Object.keys(dev1)); // [ 'name', 'age', 'skill' ]
console.log(dev1.num, dev1.num2);

for (const key in dev1) {
    console.log(key); // name age skill num2 constructor getInfo num
}

console.log(dev1.__proto__); // Person { num2: 5, constructor: [Function: Developer] }
console.log(dev1.__proto__.constructor.name); // Developer
console.log(Object.keys(dev1.__proto__)); // [ 'num2', 'constructor' ]

console.log(dev1.__proto__ === Developer.prototype); // true