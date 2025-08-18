// 함수를 매개변수로 받아서 사용하는 함수
// 콜백함수(callback)

//관례적으로 함수 형태의 매개변수는 callback, cb로 네이밍 함
function greet(callback) {
  console.log(fn("Kisu"));
}

greet(function (name) {
  return `Hello ${name}`;
});

//화살표 함수 사용 시 함수를 매개변수로 사용한 경우. 가독성이 좋음.
greet((name) => `Hello ${name}`);

//콜백함수에 대한 예시...
function sayHello(callback) {
  callback("안녕하세요.");
}
sayHello(console.log);

function calculator(callback) {
  return callback(10, 20);
  //return () => callback(10,20); 이 경우 함수가 반환된다.
}

const cb1 = calculator((num1, num2) => num1 + num2);
console.log(cb1);
const cb2 = calculator((num1, num2) => num1 * num2);
console.log(cb2);
const cb3 = calculator((num1, num2) => num1 / num2);
console.log(cb3);

//setTimeout은 자바스크립트 내장 함수가 아니다.
//WEB API, 웹 브라우저 기반으로 프로그래밍 힐 떼 사용할 수 있는 수단. 예) DOM
//node.js 내부적으로 구현한 함수이기 때문에 현재 실행이 가능하는 것.
//setTimeout 함수 내부에서 매개변수로 받은 함수를 호출하고 있겠구나~ 를 알 수 있다.
setTimeout(() => {
  console.log("1초 뒤에 실행됨");
}, 5000); // 1000ms -> 1초

function makeGreeter(name) {
  return function () {
    return `Hello ${name}`;
  };
}
//위 코드를 간단하게 바꿀 수 있음.
const makeGreeter = (name) => () => `Hello ${name}`; //함수 내부에서 함수를 반환하는 코드다.
const greetJohn = makeGreeter("John");
console.log(greetJohn);

function getOperation(op) {
  if (op === "add") return (a, b) => a + b;
  else return (a, b) => a - b;
}

const add = getOperation("add"); //최종적으로 (a, b) => a + b; 함수 할당이 된다.
console.log(add(3, 5));
const minus = getOperation("minus");
console.log(minus(5, 3));
