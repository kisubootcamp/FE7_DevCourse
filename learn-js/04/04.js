// 5-3. return

// (0)
function sum(num1, num2) {
  const result = num1 + num2;
  console.log(result);
}

sum(2, 3);

console.log(result); //error

// JS 는 함수 스코프, 블록 스코프(ES6)를 구분하여 갖음
// 스코프 : 변수가 유효한 범위
// 함수 스코프 : 변수 범위가 함수 안에서만 유효
// 블록 스코프 : 변수 범위가 블록 {} 안에서만 유효

// (1)
// return 문을 통해서 함수(블록 : {}) 밖으로 값을 내보냄
function sum_1(num1, num2) {
  return num1 + num2;
}

const a = 2;
const b = 3;

const result = sum_1(a, b); // return 값을 받아야 활용 가능 (안 받아도 문법 오류는 아님)

console.log(result);
//console.log(sum_1(a, b)); // 같음

// (2) return 을 만나면 함수는 그 즉시 종료 됨

// (3)
function sum_2(num1, num2) {
  return; // ** return undefined 의미
  // 중지 시키기 위한 목적
}

// (+) 함수 표현식(변수 선언)으로 전환
const change = function sum_3(num1, num2) {
  return num1 + num2;
};

// const change = function (num1, num2){
//     return num1 + num2;
// }

// (+) 화살표 함수로 변환

const arrFunc = (num1, num2) => {
  return num1 + num2;
};

// (+) 화살표 함수 축약 **
const arrFunc_1 = (num1, num2) => num1 + num2;
// 객체는 () 이용 :: 함수 블록 {}인지 객체 {}인지 헷갈리지 않기 위해서

// 축약 연습
// 1. 익명 함수 표현식
const findA = function (x, y) {
  var cal = x + y;
  return cal;
};
// 2. 화살표 함수
// function 을 지우고, 매개변수 뒤에 => 추가
// => 이 function을 대체하는 느낌
const findB = (x, y) => {
  var cal = x + y;
  return cal;
};
// 3. 축약
// {}, return 지움
// ** {}을 지움으로써 표현식을 자동으로 리턴함 -> 표현식은 자동 반환
// 즉, (x, y) = { reurn x + y }; 와 같은 의미 -> {}는 리턴을 써야 밖으로 반환
const findC = (x, y) => x + y;

console.log(findC(1, 3));
