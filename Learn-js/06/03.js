// 콜스택 + 실행컨텍스트
// 실행 컨텍스트 - 자바스크립트 코드가 실행되는 환경
// 전역 실행 컨텍스트 (필수) - 자바스크립트 코드가 함수가 아닌 곳에서 실행되는 환경
// 함수 실행 컨텍스트 - 자바스크립트 코드가 함수 내부에서 실행되느 환경

// Record Environment
// - 생성 단계 (var num) => 모든 변수와 함수 선언 같은 것들 기록
// - 실행 단계 => 생성 단계에서 기록된 정보를 바탕으로 코드를 실행

// Record Environment
// 생성 -> a = function, b = function
// 실행 -> a();
function a() {
  console.log("a");
  function b() {
    console.log("b");
  }
  b();
}

a();
console.log("c");

// 스코프 => 변수 접근 가능한 유효 범위
// 전역 스코프
// 함수 스코프

// 함수 내부에서는 외부의 변수를 참조할 수 있고
// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.

// 함수 내부에서 변수가 없어서 외부로 찾으러 나가는 행위 => 스코프 체인

// TDZ(Temporal Dead Zone), 일시적 사각 지대
// 변수 쉐도잉(variable Shadowing)
// 식별자 결정

const num = 10;
function printNum() {
  const uname = "yg";
  console.log(num);
}
printNum();
console.log(num);
console.log(uname);

// 내 입맛대로 정리
// 콜스택 안에서 처음에 전역 실행 컨텍스트 생성하고 함수 실행 컨텍스트 생성
// 함수 실행 컨텍스트 안에서 num이 없는데 출력해야한다면 Outer를 통해서
// 전역 실행 컨텍스트로 가서 num 선언과 할당을 찾아서 그 값을 출력

// Record Environment + Outer Environment = Lexical 스코프(컨텍스트)

// 연습
var num2 = 10;
function outer(x) {
  function inner(x) {
    console.log(x + 10);
  }
  inner(x);
}
outer(10);

// 1. 전역 실행 컨텍스트 record => num=10, outer=function, outer(10)
// 2. outer 함수 실행 컨텍스트 record => x=10, inner=function, inner(10)
// 3. inner 함수 실행 컨텍스트 record => x=10, console.log(x+10)
// 4. inner 함수 실행 컨텍스트 outer => outer 함수 실행 컨텍스트 outer => 전역 실행 컨텍스트 outer
