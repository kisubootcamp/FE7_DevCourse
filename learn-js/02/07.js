// 삼항 연산자
// 표현식 : 조건 ? 참 : 거짓

// 연습문제 1.
const num = 10;

// if (num > 0) {
//   console.log("Positive");
// } else if (num === 0) {
//   console.log("Zero");
// } else {
//   console.log("Negative");
// }
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";

// 연습문제 2.
const a = 5;
const b = 15;
const c = 10;

const max = a > b && a > c ? a : b > c ? b : c;
console.log(max); // 15

// 연습문제 3.
const number = 45;

const isEven = number % 2 ? "Odd" : "Even";
console.log(isEven); // Odd

// 연습문제 4.
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome" : "Please log in";
console.log(message); // Welcome

// 연습문제 5.
const age = 44;
const category = age >= 18 ? "Adult" : "Minor";
console.log(category); // Adult
