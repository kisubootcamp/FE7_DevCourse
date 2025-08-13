// 함수를 매개변수로 받아서 사용하는 함수
// 콜백함수(callback)
function greet(fn) {
  console.log(fn('world'));
}

greet(function (name) {
  return `Hello, ${name}`;
});

// 함수의 매개변수로 전달하고자 화살표 함수가 만들어졌다
greet((name) => `Hello, ${name}`);

// 콜백 예제
// 1.
function sayHello(callback) {
  callback('안녕하세요!');
}

sayHello(console.log);

// 2.
function calculator(callback) {
  return () => callback(10, 20);
}

const cb = calculator((num1, num2) => num1 + num2);
console.log(cb());

// 3.
// 자바스크립트 내장 함수 x
// WEB API, 웹 브라우저 기반으로 프로그래밍 할 때 사용할 수 있는 수단
function setTimeout(handler, timeout) {
  // timeout...
  handler();
}

setTimeout(() => {
  console.log('5초 뒤에 실행됨');
}, 5000); //1000ms => 1s

// 4.
// function makeGreeter(name) {
//   return function () {
//     return `안녕! ${name}`;
//   };
// }
const makeGreeter = (name) => () => `안녕! ${name}`;
const greetJohn = makeGreeter('john');
console.log(greetJohn());

// 5.
function getOperation(op) {
  // op 매개변수가 'add'이면
  // a + b 매개변수를 가지고 그걸 더 하는 화살표 함수를 반환한다.
  if (op === 'add') return (a, b) => a + b;
}

// const 키워드를 갖고 있는 add 변수는 저 위 화살표함수를 리턴받는다
const add = getOperation('add');
// 출력
console.log(add(5, 3));
