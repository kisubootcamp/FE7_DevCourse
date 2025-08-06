// 연습문제
//1번
let num = -5;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

//2번
let a = 10;
let b = 25;
let c = 15;

const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

// 3번
let number = 10;
console.log(number % 2 === 0 ? "Even" : "Odd");

//4번
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please log in");

//5번
let age = 25;
console.log(age >= 18 ? "Adult" : "Minor");
