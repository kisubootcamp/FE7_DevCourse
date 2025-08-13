/*
콜스택 + 컨텍스트
실행 컨텍스트 : 자바스크립트가 실행되는 환경


전역 실행 컨텍스트 : 코드가 함수가 아닌 곳에서 실행
    record enviroment, outer enviroment -> 대표 환경
함수 실행 컨텍스트 : 코드가 함수 내부에서 실행


- Record Enviroment
        - 생성 단계 = 변수 선언, 메모릴 할당, 내부적으로 undefined 초기화
        - 실행 단계 = 생성단계에서 기록된 정보를 바탕으로 코드를 실행
- Outer Enviroment
- Lexical Enviroment


스코프: 변수에 접근가능한 유효 범위
함수 스코프 : 함수 안에서만 접근 범위
전역 스코프 : 어디서든 접근 가능한 범위

스코프 체인
    - 함수 내부에서는  외부의 변수를 참조할 수 있고
    외부에서는 함수 내부의 변수를 참조할 수 없다

TDZ(Temporal Dead Zone), 일시적 사각 지대
변수 쉐도잉 (Variable Shadowing)
식별자 결정
*/
// const num = 10;
// function a() {
//   const num = 20;
//   b();
//   console.log(num);
// }
// function b() {
//   console.log(num);
// }
// a();
// 함수가 '정의'될 때 실행 컨텍스트에 의해, a함수 내부에서 b를 호출하면 전역 num이 읽힘

function outer(x) {
  function inner(x) {
    console.log(x + 10);
  }
  inner(x);
}

outer(10);
// 실행결과 = 20
// 1. outer 정의
// 2. outer 실행
// 3. 매개변수로 입력된 10이 함수 outer의 스코프 x에 저장, inner 정의
// 4. inner 실행
// 5. inner의 매개변수로 입력된 10이 inner스코프 x에 저장
// 6. x+10 = 20 출력
