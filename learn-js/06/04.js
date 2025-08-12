// 실행컨텍스트 - 자바스크립트 코드가 실행되는 환경
// 전역 실행컨텍스트 (필수) - 자바스크립트 코드가 함수가 아닌 곳에서 실행되는 환경
// 함수 실행컨텍스트 - 자바스크립트 코드가 함수 내부에서 실행되는 환경

// Record Enviroment
// 생성 -> a; // TDZ, 일시적 사각 지대
// 실행 -> a();

// Outer Enviroment
// Lexical Enviroment

// 스코프: 변수에 접근할 수 있는 유효한 범위
// 함수 스코프 : 함수 안에서만 변수에 접근할 수 있는 유효한 범위
// 전역 스코프 : 어디서든 함수 안이든 밖이든 변수에 접근할 수 있는 유효한 범위
// 스코프 체인

// 함수 내부에서는 외부의 변수를 참조할 수 있고
// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.

// TDZ(Temporal Dead Zone), 일시적 사각 지대
// 변수 쉐도잉(variable Shadowing)
// 식별자 결정
var num = 10;
function outer(x) {
  function inner(x) {
    console.log(x + 10); // 20
  }
  inner(x);
}
outer(10);
