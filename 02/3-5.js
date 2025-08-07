/* 3-5 삼항 연산자 연습문제 */

// 1. 숫자비교
console.log("----------- 1. 숫자비교 -----------");
const num = 5;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";

console.log(result);

// 2. 최댓값 찾기
console.log("----------- 2. 최댓값 찾기 -----------");
const a = 1;
const b = 5;
const c = 10;
const max = a > b ? (a > c ? a : c) : b > c ? b : c;

console.log(max);

// 3. 짝수 홀수 확인
console.log("----------- 3. 짝수 홀수 확인 -----------");
const number = 5;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

console.log(number);

// 4. 로그인 확인
console.log("----------- 4. 로그인 확인 -----------");
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome" : "Please log in";

console.log(isLoggedIn);

// 5. 성인 확인
console.log("----------- 5. 성인 확인 -----------");
const age = 18;
const isAdult = age >= 18 ? "Adult" : "Minor";

console.log(age);
