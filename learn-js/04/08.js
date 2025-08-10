// 재귀 함수
// 1. 종료 조건이 있을 것
// 2. 스스로가 스스로를 호출할 것
//  1부터 n까지의 합
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

console.log(sum(5));
