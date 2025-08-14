// 여러 콜백 함수 예시

//1
function sayHello(callback) {
  callback("안녕하세요");
}

sayHello(console.log);

//2
function calculator(callback) {
  return () => callback(10, 20); //return () => {}
}

const cb = calculator((num1, num2) => num1 + num2);
console.log(cb);
calculator((num1, num2) => num1 + num2);

//3
// 자바스크립트 내장 함수X
// WEB API, 웹 브라우저 기반으로 프로그래밍 할 때 사용할 수 있는 수단
setTimeout(() => {
  console.log("1초 뒤에 실행됨");
}, 1000); // 1000ms -> 1s

//4
function makeGreeter(name) {
  return () => `안녕! ${name}`;
}

// 이거에 익숙해지기
const makeGreeter = (name) => () => `안녕! ${name}`;
const greetJohn = makeGreeter("John");
console.log(greetJohn());

//5
function getOperation(op) {
  if (op === "add") return (a, b) => a + b;
  else (a, b) => a - b;
}

const add = getOperation("add");
console.log(add(5, 3));
