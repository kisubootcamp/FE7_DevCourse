// 함수는 일급 객체다.
// 일급 객체라는 것은 객체의 한 종류
// 모든 일급 객체는 객체일 수 있지만, 모든 객체가 일급 객체가 될 수는 없다.

// 일급 객체의 기준
// 1. 변수나 데이터 구조(배열, 객체)에 담을 수 있다.
// 2. 함수의 인자로 전달할 수 있어야 한다.
// 3. 함수의 반환값으로 사용할 수 있어야 한다.
// 4. 런타임에 생성할 수 있어야 한다.
// 5. 프로퍼티(속성)을 가질 수 있어야 한다.

// 함수는 일급 객체이기 때문에 변수에 할당할 수 있다.
const sayHello = function sayHello() {
  console.log("Hello");
};

// 함수는 일급 객체이기 때문에 다른 함수의 인자로 전달할 수 있다.
function greet(fn) {
  console.log(fn);
}
greet(sayHello);

// 함수는 일급 객체이기 때문에 다른 함수의 반환값으로 사용할 수 있다.
function createGreeting() {
  return function () {
    console.log("Hello from the returned function!");
  };
}
const greetingFunction = createGreeting();
greetingFunction(); // Hello from the returned function!

// 함수는 일급 객체이기 때문에 런타임(runtime)에 생성할 수 있다.
// 런타임: 프로그램이 실행되는 환경, 코드가 실제로 실행되는 환경
const dynamicFn = new Function("a", "b", "return a + b;");
console.log(dynamicFn(3, 4)); // 7

// 함수는 일급 객체이기 때문에 프로퍼티(속성)를 가질 수 있다.
sayHello.leng = "korea";
console.log(sayHello.leng); // korea