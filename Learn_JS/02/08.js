// ## 연습문제

// 1. 숫자비교
//     1. 변수 `num`에 임의의 숫자를 할당하세요.
//     2. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.

const num = 35;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

// 1. 최댓값 찾기
//     - 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
//     - 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
const a = 2;
const b = 3;
const c = 5;
console.log(a > b ? (a > c ? a : c) : (b > c ? b : c));

// 3. 짝수 홀수 확인 

// - 변수 `number`에 임의의 숫자를 할당하세요.
// - 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
const number = 22;
console.log(number % 2 === 0 ? "Even" : " Odd");

// 4. 로그인 확인 

// - 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
// - 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.
const isLoggedIn = false;
// console.log(isLoggedIn === true ? "Welcome" : "Please log in");
console.log(isLoggedIn ? "Welcome" : "Please log in");
// 0, false, null, undefined가 아니면 true

// 1. 성인 확인
// - 변수 `age`에 임의의 나이를 할당하세요.
// - 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.
const age = 33;
console.log(age >= 18 ? "Adult" : "Minor");