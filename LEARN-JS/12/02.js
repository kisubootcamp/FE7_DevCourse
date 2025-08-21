// 1. 표준 내장 메서드
// 1.1 파괴적 메서드
// 1.1.1 메서드의 실행 결과가 원본 데이터를 변경시킬 때

// 1.2 비파괴적 메서드
// 1.2.1 메서드의 실행 결과가 원본 데이터를 변경 시키지 않을 때

const numbers = [4, 2, 1, 15, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

const arr = [
  ['철수', 10],
  ['영희', 25],
];

const result = arr.map(([name, age]) => name);
console.log(result);
