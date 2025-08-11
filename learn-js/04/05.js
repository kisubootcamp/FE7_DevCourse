// 재귀함수 :: 나를 스스로 호출하는 함수
// 1. 종료 조건이 있을 것
// 2. 스스로가 스스로를 호출할 것

// 예 1. 1부터 n까지의 합
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}
console.log(sum(5));
// 루프 1회 :: retrn 5 + sum(4)
// 2회 :: return 5 + 4 + sum(3)

// 합 -> 곱 === 팩토리얼 됨
function fac(n) {
  if (n === 0 || n === 1) return 1;
  return n * fac(n - 1);
}
console.log(fac(5));
