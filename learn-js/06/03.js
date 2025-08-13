// 함수를 매개변수로 받아서 사용하는 함수
// 콜백함수(callback, cb)라고 부른다.
function greet(cb) {
  console.log(cb("Sang Yoon"));
}

greet(function (name) {
  return `Hello, ${name}!`;
});

// 화살표 함수
// 함수의 매개변수를 전달할 때 좀 더 가독성 높게 작성하기 위해 등장
greet((name) => `Hello, ${name}!`);

// 예시 1
function sayHello(callback) {
  callback("안녕하세요");
}

sayHello(console.log); // 안녕하세요

// 예시 2
function calculator(callback) {
  return callback(10, 20);
}

console.log(calculator((a, b) => a + b)); // 30
console.log(calculator((a, b) => a - b)); // -10
console.log(calculator((a, b) => a * b)); // 200

// 예시 3
setTimeout(() => {}, 1000); // 1초 후에 실행되는 함수
// setTimeout은 콜백 함수를 매개변수로 받는 함수
// setTimeout은 비동기 함수로, 지정한 시간 후에 콜백 함수를 실행한다.

setTimeout(() => {
  console.log("1초 후에 실행됩니다.");
}, 1000); // 1초 후에 "1초 후에 실행됩니다." 출력

function setTimeout(handler, timeout) {
  // timeout...
  handler();
}
// setTimeout 함수는 자바스크립트 내장 함수가 아니다.
// 웹 API로 제공되는 함수이다.
// WEB API: 웹 브라우저 기반으로 프로그래밍 할 때 사용할 수 있는 수단

// 예시 4
function makeGreeter(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}
const makeGreeter = (name) => () => `Hello, ${name}!`;

// 예시 5
function getOperation(op) {
  if (op === "add") {
    return (a, b) => a + b;
  }
  if (op === "subtract") {
    return (a, b) => a - b;
  }
  if (op === "multiply") {
    return (a, b) => a * b;
  }
  if (op === "divide") {
    return (a, b) => a / b;
  }
}

const add = getOperation("add");
console.log(add(5, 3)); // 8
const subtract = getOperation("subtract");
console.log(subtract(5, 3)); // 2
const multiply = getOperation("multiply");
console.log(multiply(5, 3)); // 15
const divide = getOperation("divide");
console.log(divide(5, 3)); // 1.6666666666666667
