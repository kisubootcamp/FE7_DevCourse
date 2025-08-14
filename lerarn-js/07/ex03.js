// function solution(n) {
//   const MOD = 1234567;
//   let a = 0,
//     b = 1;

//   for (let i = 2; i <= n; i++) {
//     const next = (a + b) % MOD;
//     a = b;
//     b = next;
//   }

//   return b;
// }

//
function solution(n) {
  const memo = {};

  function fib(k) {
    if (k <= 1) return k;
    if (memo[k]) return memo[k];
    memo[k] = (fib(k - 1) + fib(k - 2)) % 1234567;
    return memo[k];
  }
  return fib(n);
}
