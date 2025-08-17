// 클로저, 클로저 함수
// 함수가 선언 될 때의 렉시컬 스코프(=환경)를 기억하고,
// 그 스코프(=환경)에 있는 변수에 접근할 수 있는 함수

// 1. 데이터 은닉 - 외부에서 데이터에 직접 접근할 수 없다
// 2. 상태 유지 - 함수 호출 간 변수를 계속 기억
function outer() {
  let count = 0;
  return () => ++count;
}

const counter1 = outer();
console.log(counter1()); // 1
console.log(counter1()); // 2
counter1 = null;

const counter2 = outer();
console.log(counter2()); // 3 -> 1
console.log(counter2()); // 4 -> 2
console.log(counter2()); // 5 -> 3
counter2 = null;
