// 연습문제 1
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

console.log("------------------");

// 연습문제 2
let x = 5;
let y = 10;
let z = 15;
console.log(x > 10 && y < 5);
console.log(x > 10 || z > 30);
console.log(y !== 0);

console.log("------------------");

// 연습문제 3
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

console.log("------------------");

// 연습문제 4
let value1 = null;
let value2 = "Hello";
console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
console.log(!value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함");

console.log("------------------");
// 연습문제 5
let num = 23;
console.log(
  num >= 0 && num <= 100
    ? "0 이상이며 100 이하입니다"
    : "0 이상이 아니거나 100 이하가 아닙니다"
);
console.log(
  num < 0 || num > 100
    ? "0 미만이거나 100 초과입니다"
    : "0 미만이 아니거나 100 초과가 아닙니다"
);
