// 함수는 일급 객체이기 때문에 prototype 속성도 가지고 있다.
console.log("hello world");

function Person() {}
console.dir(Person);
console.dir(Person.prototype);
