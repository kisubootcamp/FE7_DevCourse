// 함수를 매개변수로 받아서 사용하는 함수
// 콜백함수(callback, cb)

// 예제 1.
function greet(callback) {
  console.log(callback('World'));
}
greet(function (name) {
  return `Hello, ${name}`;
});
greet((name) => `Hello ${name}`);

// 예제 2.
function sayHello(callback) {
  callback('안녕하세요.');
}
sayHello(console.log);

// 예제 3.
function calculator(callback) {
  return callback(10, 20);
}
const cb = calculator((num1, num2) => num1 + num2);
console.log(cb);
calculator((num1, num2) => num1 - num2);
calculator((num1, num2) => num1 * num2);

// 예제 4.
setTimeout(() => {
  console.log('1초 뒤에 실행됨');
}, 3000);

// WEB API, 웹 브라우저 기반으로 프로그래밍 할 때 사용할 수 있는 수단.
// DOM document.querySelector()

// 예제 5.
// function makeGreeter(name) {
//   return function () {
//     return `안녕! ${name}`;
//   };
// }
// === 위와 아래 코드가 같은 거임.
const makeGreeter = (name) => () => `안녕! ${name}`;
const greetJohn = makeGreeter('John');
console.log(greetJohn());

// 예제 6.
function getOperation(op) {
  if (op === 'add') return (a, b) => a + b;
  else return (a, b) => a - b;
}
const add = getOperation('add');
console.log(add(5, 3));
const minus = getOperation('minus');
console.log(minus(5, 3));
