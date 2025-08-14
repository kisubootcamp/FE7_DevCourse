function fibonacci(n) {
  function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }
  return fib;
}

// const fibo = fibonacci();
// console.log(fibo(10)); // 55
// console.log(fibo(10)); // 55 (메모이제이션 사용)

// function fibonacci() {                 // ← 바깥 함수(팩토리). 인자는 필요 없어 제거!
//   const memo = { 0: 0, 1: 1 };         // ← 캐시(메모이제이션 저장소)

//   function fib(n) {
//     if (!Number.isInteger(n) || n < 0) {
//       throw new Error("n은 0 이상의 정수여야 해요");
//     }
//     if (memo[n] !== undefined) return memo[n];   // 1) 이미 계산했으면 즉시 반환

//     // 2) 처음 보는 n이면 재귀로 계산하고,
//     const val = fib(n - 1) + fib(n - 2);

//     // 3) 결과를 캐시에 저장한 뒤 반환
//     memo[n] = val;
//     return val;
//   }

//   return fib;                          // ← 캐시를 기억하는 함수(클로저) 반환
// }

const fibo = fibonacci();
console.log(fibo(10)); // 55  (첫 계산)
console.log(fibo(10)); // 55  (캐시에서 즉시 반환 → 매우 빠름)
