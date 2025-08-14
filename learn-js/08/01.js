function fib(k) {
  if (k <= 1) return k; // <= 공백 제거
  return (fib(k - 1) + fib(k - 2)) % 1234567; // 괄호로 합 전체에 % 적용
}

function solution(n) {
  // function 오타 수정
  return fib(n);
}

function solution(n) {
  let a = 0,
    b = 1,
    temp = 0;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b % 1234567; // 합 전체에 % 적용
}
