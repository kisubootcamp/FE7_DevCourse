/*

삼항 연산자
표현식 ? 참 : 거짓

*/

// 1
const num = -3;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

// 2
const a = 1;
const b = 2;
const c = 3;
console.log(a < b ? (b < c ? c : b) : a < c ? c : a);

// 3
const number = 2;
console.log(number % 2 === 0 ? "Even" : "Odd");

// 4
const isLoggedIn = false;
console.log(isLoggedIn ? "Welcome" : "Please log in");

// 5
const age = 22;
console.log(age >= 18 ? "Adult" : "Minor");
