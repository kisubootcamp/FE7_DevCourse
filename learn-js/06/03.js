// 1
function sayHello(callback) {
  callback("안녕하세요!");
}
sayHello(console.log);

// 2
function calculator(callback) {
  return () => callback(10, 20); // return () => {}
}
calculator((num1, num2) => num1 + num2);
calculator((num1, num2) => num1 - num2);
calculator((num1, num2) => num1 * num2);

// 3
// WEB API, 웹 브라우저 기반으로 프로그래밍 할 때 사용할 수 있는 수단
// DOM document.querySelector()
setTimeout(() => {
  console.log("5초 뒤에 실행됨");
}, 5000); // 1000ms -> 1s

// 4
// function makeGreeter(name) {
//   return function () {
//     return `안녕! ${name}`;
//   };
// }
const makeGreeter = (name) => () => `Hello! ${name}`;
const greetJohn = makeGreeter("John");
console.log(greetJohn());

// 5.
function getOperation(op) {
  if (op === "add") return (a, b) => a + b;
  else return (a, b) => a - b;
}
const add = getOperation("add");
console.log(add(5, 3));
const minus = getOperation("sucoding");
console.log(minus(5, 3));
