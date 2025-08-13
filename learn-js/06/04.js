// 자바스크립트는 인터프리터 언어로, 코드를 한 줄씩 읽고 실행한다.
// 콜 스택, 실행 컨텍스트

// 실행 컨텍스트: 자바스크립트 코드가 실행될 때 생성되는 환경
// 콜 스택: 실행 컨텍스트를 관리하는 스택 구조

// Record Environment: 실행 컨텍스트의 환경 레코드, 변수와 함수 선언 등을 저장
// - 생성 단계: 모든 변수와 함수 선언을 환경 레코드에 추가 (호이스팅)
// - 실행 단계: 생성 단계에서 기록된 정보를 바탕으로 코드를 한 줄씩 실행

//

// 자바스크립트는 싱글 쓰레드 언어로, 한 번에 하나의 작업만 수행할 수 있다.
// 가비지 컬렉터
// 가비지 컬렉션
// 가비지 컬렉션 대상 기준: 콜스택에서 제거되었는가?

// 메모리 누수: 사용하지 않는 메모리가 해제되지 않아 발생하는 문제

// 스코프: 변수에 접근할 수 있는 유효한 범위
// 함수 스코프: 함수 안에서만 유효한 범위
// 전역 스코프: 전체 코드에서 유효한 범위

const num = 10;
function printNum() {
  const iname = "kisu";
  console.log(num); // 10
}

printNum();

console.log(num); // 10
console.log(iname); // ReferenceError: iname is not defined

// 렉시컬 환경
// 스코프 체인은 Outer Environment Reference(OER)을 통해 외부 실행 컨텍스트의 환경 레코드로 이동하는 행위를 가리키는 용어이다.

// 변수 쉐도잉

// 식별자 결정

function outer(x) {
  function inner(x) {
    console.log(x + 10);
  }
  inner(x);
}

outer(10);
