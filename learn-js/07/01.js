/*

클로저
함수가 선언 될 때의 렉시컬 환경을 기억하고, 그 환경에 있는 변수에 접근할 수 있는 함수
1. 데이터 은닉 => 외부에서 데이터에 직접 접근할 수 없다
2. 상태 유지 => 함수 호출 간 변수를 게속 기억

*/

let level = 1;

function levelup() {
  level++;
}
levelup();
levelup();
levelup();
console.log(level);

// 함수가 호출되는 만큼 레벨이 증가
// 레벨이 전역 스코프이기 때문에 변수가 보호(은닉)되지 않음

function levelup2() {
  let level = 0; // 레벨 은닉

  function inner() {
    level++;

    return level;
  }

  return inner;
}

const myLevel = levelup2();
console.log(myLevel());
console.log(myLevel());
console.log(myLevel()); // 호출할 때마다 레벨 증가

function outer() {
  let count = 0;
  return () => ++count;
}

const counter1 = outer();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = outer(); // 1

// 클로저는 참조마다 별도로 존재함 counter1, counter2는 별도의 값으로 존재
// 클로저의 단점 -> 메모리 누수

counter1 = null;

// null을 사용해서 메모리 할당을 없애줘야 함
