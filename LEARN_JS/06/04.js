// 콜스택 + 실행컨텍스트
// 전역 실행컨텍스트 - 자바스크립트 코드가 함수가 아닌 곳에서 실행되는 환경
// 함수 실행컨텍스트 - 함수가 호출될 때마다 생성되는 환경
// 실행컨텍스트 - 자바스크립트 코드가 실행되는 환경

// Record Enviroment
// - 생성 단계 (var num), 모든 변수와 함수 선언 같은 것들이 기록 됨
// - 생성 -> a; // TDZ, 일시적 사각 지대
// - 실행 단계, 생성 단계에서 기록된 정보를 바탕으로 코드를 실행
// - 실행 -> a();

var num = 10;
function printNum() {
  const num = 20;
  console.log(num);
}
printNum();
console.log(num);
