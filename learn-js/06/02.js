// 함수는 일급 객체
// 일급 객체라는 것은 객체의 한 종류
// 모든 일급 객체는 객체일 수 있지만, 모든 객체가 일급 객체가 될 수 있는 건 아니다.

//일급 객체의 다섯가지 조건
/* 1. 변수나 데이터 구조( 배열, 객체) 에 담을 수 있다. 
   2. 함수의 인자로 전달할 수 있어야 한다. 
   3. 함수의 반환 값으로 사용할 수 있어야 한다. 
   4. 런타임에 생성할 수 있어야 한다. 
   5. 프로퍼티 (속성)을 가질 수 있어야 한다. 
*/

/* 1번예시 변수에 담김  const sayHello = function sayHello() {
   console.log('Hello');
 };          */

// 2번예시 함수의 인자로 전달
function greet(callback) {
  callback();
}

//3번예시 함수의 반환 값으로 사용
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
//4 번예시 런타임에 생성 ( 코드가 실행되고 있는 환경 )
const dynamicFunction = new Function("a", "b", "return a + b;");
console.log(dynamicFunction(5, 10)); // 15

// 5번예시 프로퍼티를 가질 수 있음
function person(name) {
  this.name = name;
}
sayHello.lang = "JavaScript";
console.log(sayHello.lang); // JavaScript0

function calculator(callback) {
  return () => callback(5, 10);
}
calculator((num1, num2) => num1 + num2)(); // 15

setTimeout(() => {
  console.log("Delayed message");
}, 1000); // 1초 후에 실행되는 함수
// WEBAPI, 웹 브라우저 기반으로 프로그래밍 할 때 사용하는 수단
// DOM document.querySelector()

function makeGreeter(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}
const makeGreeter = (name) => () => `Hello, ${name}!`;
const greetJohn = makeGreeter("John");
console.log(greetJohn()); // Hello, John!
