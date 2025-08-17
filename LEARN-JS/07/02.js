// 클로저
// 함수가 선언 될 때의 렉시컬 스코프를 기억하고,
// 그 스코프에 있는 변수에 접근할 수 있는 함수

// 1. 데이터 은닉 - 외부에서 데이터에 직접 접근할 수 없다.
// 2. 상태 유지 - 함수 호출 간 변수를 계속 기억

function levelup() {
  let level = 0;
  // 클로저 함수
  function inner() {
    level++;
    return level;
  }
  return inner;
}
// () 붙이면 → 즉시 실행 → 결과만 반환 → 클로저 깨짐
// () 안 붙이면 → 함수 참조 반환 → 나중에 호출 가능 + 변수 환경 유지

const warriorUp = levelup();
const archerUp = levelup(); // 궁수

let warrior = warriorUp();
warrior = warriorUp();
warrior = warriorUp();
warrior = warriorUp();

let archer = archerUp();
archer = archerUp();

console.log(`warrior: ${warrior}`);
// 메모리 누수 방지
warrior = null;
console.log(`archer: ${archer}`);
archer = null;
