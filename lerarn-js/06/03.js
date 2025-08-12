// // 함수를 매개변수로 받아서 사용하는 함수
// // 콜백함수(Callback)

// function greet(callback) {
//   console.log(callback("Kisu"));
// }

// // greet(function (name) {
// //   return `Hello, ${name}`;
// // });

// greet((name) => `Hello, ${name}`);

function sayHello(callback) {
  callback("안녕하세요");
}
sayHello(console.log);

function calculator(callback) {
  return callback(10, 20);
}
const cb = calculator((num1, num2) => num1 + num2);
console.log(cb);
calculator((num1, num2) => num1 + num2);
calculator((num1, num2) => num1 + num2);

// 3.
// setTimeout은 자바스크립트 내장 함수가 아니라 WEB API
// 웹 브라우저 기반으로 프로그래밍 할 때 사용할 수 있는 수단
setTimeout(() => {
  console.log("Ye is God");
}, 5000);

// 4.
// function makeGreeter(name) {
//   return function () {
//     return `안녕! ${name}`;
//   };
// }

const makeGreeter = (name) => () => `안녕! ${name}`;
const greetJohn = makeGreeter("John");
console.log(greetJohn());

// 5.
function getOperation(op) {
  if (op === "add") return (a, b) => a + b;
  else return (a, b) => a - b;
}
const add = getOperation("add");
console.log(add(5, 3));
const minus = getOperation("minus");
console.log(minus(5, 3));
