// 실행 컨텍스트: “자바스크립트 코드가 실행되는 환경”을 한 박스에 모아둔 것
// 실행 컨텍스트의 종류: 1.전역 실행 컨텍스트(GEC)   2.함수 실행 컨텍스트(FEC)
// 전역 실행컨텍스트(필수) - 자바스크립트 코드가 함수가 아닌 곳에서 실행되는 환경
// 함수 실행컨텍스트 - 자바스크립트 코드가 함수 내부에서 실행되는 환경

// Record Environment
// - 생성 단계 (var num), 모든 변수와 함수 선언 같은 것들이 기록됨.
// - 실행 단계, 생성 단계에서 기록된 정보를 바탕으로 코드를 실행.

// Record Enviroment
// 전역 실행 컨텍스트
// 생성 -> a = function
// 실행 -> a(); //함수 실행 컨텍스트 생성.
// a 함수 실행 컨텍스트
// 생성 -> b ; // TDZ (일시적 사각지대)
// 실행 -> b = function
// -> b(); // b함수 실행 컨텍스트 하나 더 생성.
// b 함수 실행 컨텍스트

// function a() {
//   console.log('a');
//   function b() {
//     console.log('b');
//   }
//   b();
// }
// a();
// console.log('c');

// const num = 10;

// function printNum() {
//   const uname = "kisu";
//   console.log(num); // 10
// }

// printNum();
// console.log(num);   // 10
// console.log(uname); // ❌ ReferenceError: uname is not defined

// 스코프: 변수에 접근할 수 있는 유효한 범위
// 함수 스코프: 함수 안에서만 변수에 접근할 수 있는 유효한 범위
// 전역 스코프: 어디서든 함수 안이든 밖이든 변수에 접근할 수 있는 유효한 범위
// 스코프 체인

// TDZ(Temporal Dead Zone), 일시적 사각 지대
// 변수 쉐도잉 (variable shadowing)
// 식별자 결정
// const num = 10;

// function printNum() {
//   const num = 20;
//   function inner() {
//     console.log(num); // 20
//   }
//   inner();
// }

// printNum();

var num = 10;

function outer(x) {
  function inner(x) {
    console.log(x + 10); // 20
  }
  inner(x);
}

outer(10);
