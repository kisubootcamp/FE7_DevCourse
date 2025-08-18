const newObject = Object.create(null); // {}

console.dir(newObject);

// Person.prototype을 참조해서 새로운 객체를 만들겠다
// const newObject = Object.create(Person.prototype);
// Person.prototype을 본뜬걸 만듬! Person.prototype 원형을 참조하지는 않음

///////////
// 자바 스크립트에서 프로토타입 기반 상속 구현이 이루어지는 방식
//////////
// Person의 프로토타입을 참조한 객체를 Developer의 프로토타입 참조 주소로 연결
// 기존 프로토타입 연결 고리는 끊김
// Developer.prototype = Object.create(Person.prototype);
// 새로 만든 프로토 타입의 constructor 프로퍼티의 주소에 Developer 객체 주소를 연결
// Developer.prototype.constructor = Developer

// 결과적으로 Developer는 기존의 프로토타입이 아니라, Person을 기반으로한 프로토타입을 상속받게 되었다.
// 따라서 프로토타입 체이닝으로 Person의 함수를 사용할 수 있게 됐다!
