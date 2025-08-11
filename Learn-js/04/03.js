// 재귀 함수
// 1. 종료 조건이 있을 것
// 2. 스스로가 스스로를 호줄할 것

function fac(n) {
  if (n === 0 || n === 1) return 1;
  return n * fac(n - 1);
}
console.log(fac(5));
