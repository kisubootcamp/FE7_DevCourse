// 표준 내장 메서드

// 1. 파괴적 메서드
// 1.1 메서드의 실행 결과가 원본 데이터를 변경시킬 때

// 2. 비파괴적 메서드
// 2.1 메서드의 실행 결과가 원본 데이터를 변경시키지 않을 때

//누산
const num = [1, 2, 3];
console.log(
  num.reduce((acc, number) => acc + number),
  0
);

const number = [6, 2, 10, 3, 5];
number.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(number);
