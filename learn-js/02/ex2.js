// 1. 숫자 비교
const num = -3;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

// 2. 최댓값 찾기
const a = 3;
const b = 5;
const c = -2
console.log(a > b ? (a > c ? a : c) : (b > c ? b : c));

// 3. 짝수 홀수 확인
const number = 9;
console.log(number % 2 === 0 ? "Even" : "Odd");

// 4. 로그인 확인
const isLoggedIn = false;
console.log(isLoggedIn === true ? "Welcome" : "Please Log in");

// 5. 성인 확인
const age = 18;
console.log(age >= 18 ? "Adult" : "Minor");