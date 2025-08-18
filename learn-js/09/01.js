/*
함수는 일급 객체
ㄴ 프로퍼티를 가질 수 있다
    ㄴ 따라서 프로토타입이라는 프로퍼티를 가질 수 있다!
*/

function Person() {}
console.dir(Person);

console.dir(10); // 객체가 아닌 것들을 출력할 때는 log와 차이가 없다

/*
함수와 프로토타입 객체는 각각 prototype과 constructor 프로퍼티로 서로를 참조하고 있다.
*/

console.dir(Person.prototype);
/*
Object
ㄴ constructor
ㄴ [[prototype]] // slot이라고 함
*/

const obj = { name: "kim" };
obj.name = "jiho"; // 값을 변경한다.
obj.age = 20; // 동적으로 속성을 추가한다
console.log(obj);

delete obj.name; // 동적으로 속성을 삭제한다.
console.log(obj);

// 인스턴스에서 함수를 못찾아서 상위에서 찾을 때, 프로토타입만 뒤진다.
// 즉, 프로토타입 체이닝으로 인해 프로토타입 객체에서만 찾을 수 있다.

/*
자바스크립트에서 상속이란? 어떤 객체가 자신의 프로퍼티에 없으면
자신의 프로퍼티에 없으면 프로토타입을 통해 부모 객체의 속성을 참조할 수 있는 것을 말함

즉, 자바 스크립트는 클래스가 아니라, 객체가 다른 객체로부터 상속받는 언어
*/

//고전적인 클래스 형식의 상속은 아니지만? 비슷하게 구현함
