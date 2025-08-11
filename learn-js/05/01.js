// 호이스팅
// 자바스크립트 문법을 선언과 할당으로 구문을 분리하여 선언 부분을 최상위로 끌어올리는 현상
console.log(num);
var num = 10;

// 실제로 동작하는 과정
var num;
console.log(num);
num = 10;
console.log(num);

// 그럼 let은 어떨까?
console.log(num);
let num = 10; // 호이스팅 시도는 하나, let과 const는 초기화가 지연된다.
// 초기화가 늦게 된다고 표현하는 이유?
// 아예 선언이 안되었으면 ReferenceError: num is not defined 라고 뜸
// 그런데 ReferenceError: Cannot access 'num' before initialization 라고 뜸. 초기화 전이라 호이스팅은 되지만, 접근이 불가능하다.

// 함수도? 앞에 호출해도 호이스팅이 되네
greet();
// 함수 선언식, 함수 선언문. "선언"
function greet() {
	console.log("Hello");
}

// 실제로 동작쓰
function greet() {
	console.log("Hello");
}
greet();

// 함수 표현식
var greet = function greet() {
	console.log("Hello");
};
// TypeError: greet is not a function
// 정의는 되어있는데 함수가 아님.
// 호이스팅이 되긴 했다는 증거

// 실제로 동작쓰
var greet; // 할당되기 전까지는 undefined
greet();
greet = function greet() {
	console.log("Hello");
};

// 함수 표현식을 let const로 바꾸면?
greet();
let greet = function greet() {
	console.log("Hello");
};
// ReferenceError: Cannot access 'greet' before initialization

var num = 5;
console.log(num);

function num() {
	return 10;
}

console.log(num);
console.log(num());
// TypeError: num is not a function 에러가 나네요

// 풀어쓰자면 이런것
var num;
function num() {
  return 10;
}
num = 5; // 선언하는 부분이 중첩이 되어서 function이 아니게 됨
console.log(num);

console.log(num);
console.log(num());

// let이 되면은?
let num = 5;
console.log(num);

function num() {
	return 10;
}
// SyntaxError: Identifier 'num' has already been declared
// 이미 let으로 선언해서 num 선언 안됨

console.log(num);
console.log(num());