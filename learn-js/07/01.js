console.log(num);
var num = 10; // undefined

// 위 코드는 아래와 동일하게 실행

var num;
console.log(num); // undefined
num = 10;

//

let num;
console.log(num); // ReferenceError: Cannot access 'num' before initialization
num = 10;

// 호이스팅 개념도 실행 컨텍스트를 통해 설명할 수 있다.
// console.log도 실행 컨텍스트가 만들어진다.
// 실행 컨텍스트 = Record Environment + Outer Environment + this

// Record Environment: 변수와 함수 선언을 저장하는 공간, 생성과 실행 과정으로 코드 실행 (호이스팅 설명 가능)
// Outer Environment: 외부 실행 컨텍스트의 환경 레코드 (스코프 체인)

// TDZ(Temporal Dead Zone: 일시적 사각 지대
// let과 const는 선언 전에 접근할 수 없기 때문에 ReferenceError가 발생한다.
// 이는 TDZ로 불리며, 변수 선언이 이루어지기 전까지 해당 변수를 사용할 수 없는 상태를 의미한다.

//

let num = 10;

function a() {
  console.log("a");
}

a();

// 스코프
// 전역 스코프: 전체 코드에서 유효한 범위
// 함수 스코프: 함수 안에서만 유효한 범위
// 스코프 체인: 함수 내부에서 외부 변수에 접근할 수 있는 구조

// 변수 쉐도잉: 같은 이름의 변수가 중첩된 스코프에서 선언되어 외부 변수에 접근할 수 없는 현상
function outer() {
  let num = 20; // 외부 변수 num
  function inner() {
    let num = 30; // 내부 변수 num
    console.log(num); // 30, 내부 변수 num에 접근
  }
  inner();
}
outer(); // 30, 내부 변수 num에 접근
