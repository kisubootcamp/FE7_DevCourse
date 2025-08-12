// 콜스택 + 실행컨텍스트
// 전역 실행컨텍스트
// 실행컨텍스트 - 자바스크립트 코드가 실행되는 환경
// 전역 실행컨텍스트 (필수) - 자바스크립트 코드가 함수가 아닌 곳에서 실행되는 환경
// 함수 실행컨텍스트 - 자바스크립트 코드가 함수 내부에서 실행되는 환경

// Record Environment
// - 생성 단계 (var num;), 모든 변수와 함수 선언 같은 것들이 기록.
// -> a = function, b = function
// - 실행 단계, 생성 단계에서 기록된 정보를 바탕으로 코드를 실행
// -> a()
// function a() {
//   console.log("a");
//   function b() {
//     console.log("b");
//   }
//   b();
// }
// a();

// Outer Environment
// Lexical Environment = Record Environment + Outer Environment

// 스코프: 변수에 접근할 수 있는 유효한 범위
// 함수 스코프 : 함수 안에서만 변수에 접근할 수 있는 유효한 범위
// 전역 스코프 : 어디서든 함수 안이든 밖이든 변수에 접근할 수 있는 유효한 범위

// 함수 내부에서는 외부의 변수를 참조할 수 있고
// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.

// TDZ (Temporal Dead Zone), 일시적 사각 지대
// 변수 쉐도잉(variable Shadowing)
const num = 10;
function printNum() {
  const num = 20;
  function inner() {
    const num = 30;
    console.log(num);
  }
  inner();
}
printNum();

// const num = 10;
// function printNum() {
//   const uname = "jinhwan";
//   console.log(num);
// }
// printNum();
// console.log(uname); // 가비지 컬렉션이 실행됐기 때문에 uname에 접근할 수 없음.
