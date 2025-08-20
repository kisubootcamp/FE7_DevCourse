// 연습 문제
// 혼자서 다시 풀어보기

// 1.
function createCounter() {
  // 여기에 코드를 작성하세요
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 2.
function square() {
  // 여기에 코드를 작성하세요
}
const squared = square();
console.log(squared(4)); // 16
console.log(squared(4)); // 16 (캐시 사용)
console.log(squared(5)); // 25

// 3.

// 4.

// 5.

// 6.

// 7.

// 8.

// 9.

// 10.

// 추가문제 (코테)
// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 풀이법 1 - 재귀함수 이용
// 제출 오류 : 시간초과 실패 발생 (값이 커질 수록 오래걸려 계산 불가)
function fib(k) {
  if (k <= 1) return k;
  return (fib(k - 1) + fib(k - 2)) % 1234567;
}

function solution(n) {
  return fib(n);
}

// 풀이법 2 - memoization
// 완벽한 정답은 아님 : 런타임 에러 발생
// -> 콜스택 : 전역 -> fib5, fib4, fib3... 이런 식으로 자신을 계속 호출해 위로 스택을 쌓는 모양
// 보통 쌓인 스택은 천 개만 넘어도 힘듦, 근데 100,000이하인 자연수라 100,000 이상이 쌓이게 됨 == maximum 콜스택 에러 (런타임에러 중 하나))
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

// 풀이법 3 - 시간 복잡도 고려, 재귀사용x
// 한 번의 반복문으로 피보나치수를 구해야 함
// f(n) => f(n-1) + f(n-2)
// 그냥 실패 = 로직이 틀림
// 피보나치수는 수가 기하급수적으로 증가하는 특징, js는 되게 큰 수는 안정하게 다룰 수 없음 (16자리 정도-number.MAX_SAFE_INTEGER)
function solution(n) {
  let a = 0,
    b = 1,
    temp = 0;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b % 1234567;
}
// 해결
function solution(n) {
  let a = 0,
    b = 1,
    temp = 0;
  for (let i = 2; i <= n; i++) {
    temp = (a + b) % 1234567;
    // 왜? :: 미리 나눠 값을 줄여서 안전하게 다룰 수 있음,
    a = b;
    b = temp;
  }
  return b;
}
