// Q1
let num = -10;
let result = num > 0 ? 'Positive' : (num = 0 ? 'Zero' : 'Negative');
console.log(result);

// Q2
let a = 10;
let b = 20;
let c = 15;
result = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(result);

// Q3
let number = 5;
result = number % 2 === 0 ? 'even' : 'odd';
console.log(result);

// Q4
// 0, false, undefined, null이 아니면 모두 참.
let isLoggedIn = true;
result = isLoggedIn ? 'Welcome' : 'Please log in'; // 아래 코드와 같음.
// result = isLoggedIn === true ? 'Welcome' : 'Please log in';
console.log(result);

// Q5
let age = 23;
result = age >= 18 ? 'Adelt' : 'Minor';
console.log(result);
