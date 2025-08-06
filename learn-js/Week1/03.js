// 숫자비교

let fisrtProblem = 0;

console.log(fisrtProblem > 0 ? "Positive" : fisrtProblem === 0 ? "Zero" : "Negative")

// 최댓값 찾기

let a = 55;
let b = 88;
let c = 42;

// console.log(a > b && a > c ? "a" : a > b && a < c ? "c" : a < b && b > c ? "b" : a < b && b < c ? "c" : null);
console.log(a > b && a > c ? "A" :  a < b && b > c ? "B" : "C");


// a가 b보다 클 경우 c 보다도 클 경우 가장 큰 최대값은 A
// a가 b보다 작고 b가 c 보다 클 경우 가장 큰 최댓값은 B
// a가 b보다 작고 c 보다도 작고 c가 b보다 클 경우 c가 최댓값 
// 즉 나머지는 C로 처리하면 된다


// 짝수 홀수 확인
let number = 22;
console.log(number % 2 === 0 ? "Even" : "Odd");

// 로그인 확인
let isLoggedIn = false;
console.log(isLoggedIn === true ? "Welcome" : "Please Log in")

// 성인 확인
let age = 18;
console.log(age >= 18 ? "Adult" : "Minor")