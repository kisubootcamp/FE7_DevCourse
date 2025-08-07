// 연습문제 1
const a = true;
const b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

// 연습문제 2
const x = 10;
const y = 20;
const z = 30;

console.log(x > 10 && y < 5); // false
console.log(x > 10 || z > 3); // true
console.log(y !== 0); // true

// 연습문제 3
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn ? "Welcome" : "Please log in"); // Welcome
console.log(isAdmin ? "Admin Access granted" : "Admin Access denied"); // Admin Access denied

// 연습문제 4
const value1 = null;
const value2 = undefined;

console.log(value1 || value2); // undefined
console.log(!value1 && !value2); // true

// 연습문제 5
const num = 5;

console.log(num >= 10 && num <= 100 ? "Yes" : "No"); // No
console.log(num < 0 || num > 100 ? "Yes" : "No"); // No
