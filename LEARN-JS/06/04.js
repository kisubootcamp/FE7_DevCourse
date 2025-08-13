// 콜스택 + 실행컨텍스트
// 콜스택 안에 실행 컨텍스트가 생성
// 실행컨텍스트 - 자바스크립트 코드가 실행되는 환경

// 전역 실행컨텍스트 - 함수가 아닌 곳에서 실행되는 환경
// 함수 실행컨텍스트 - 함수 내부에서 실행되는 환경

// Record Enviroment
// - 생성 단계 (var num), 모든 변수와 함수 선언 같은 것들이 기록 됩니다.
// - 실행 단계, 생성 단계에서 기록된 정보를 바탕으로 코드를 실행

// 실행 컨텍스트 원리
// 레코드 환경(생성단계)에서 선언 구문을 싹 다 저장
// (var num...)
// 키워드가 var 일 경우 undefined를 할당해주고 저장 let, const는 아님
// 레코드 환경(실행단계)에서 나머지 코드들 순차적으로 실행
// num = 10, console.log(num)

console.log(num);
var num = 10;

// 생성 -> a = function 선언
// 실행 -> a();
// a함수 컨텍스트 생성
function a() {
  // 생성 -> b = function 선언
  // 실행 -> console.log('a'), b();
  // b함수 컨텍스트 생성
  console.log('a');
  function b() {
    // 생성 -> 뭐 없음
    // 실행 -> console.log('b');
    console.log('b');
    // b 함수 컨텍스트 삭제
  }
  b();
  // a 함수 컨텍스트 삭제
}

a();
console.log('c');
// 전역 컨텍스트 삭제
// 콜스택 비워짐 코드 종료

// 자바스크립트는 싱글 쓰레드 ( 콜스택 )
// 가비지 콜렉터 자동 탑재 ( 메모리 누수 없음 )
// 콜스택에서 컨텍스트가 삭제 될 때를 기준으로 정리해줌

// 스코프: 변수에 접근할 수 있는 유효한 범위
// 함수 스코프 - 함수 내에서 변수에 접근할 수 있는 유효한 범위
// 전역 스코프 - 함수 안이든 밖이든 전역으로 변수에 접근할 수 있는 유효한 범위

const num = 10;
function printNum() {
  // 컨텍스트 안에 있는 아우터 환경을 통해 상위 컨텍스트에 접근
  // 상위로 단 방향 이동 가능
  console.log(num); // 자신의 상위 컨텍스트 참고
  const uname = 'hyunjun';
}
printNum();
console.log(num);
console.log(uname);

const num = 10;
function printNum() {
  // 상위에서 num이 초기화 되긴 했지만, 현재 함수 컨텍스트에서
  // num이 선언 되었기 때문에 에러가 난다.
  // TDZ: 일시적 사각지대 ( const num은 할당이 되어있지 않다 )
  console.log(`printNum: ${num}`);
  const num = 20;
  function innerFunction() {
    // outer context를 통해 상위 context에 접근해 (스코프체인)
    // num 변수를 참조
    console.log(`innerNum: ${num}`);
  }
  innerFunction();
}
printNum();
