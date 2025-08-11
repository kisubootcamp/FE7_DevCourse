///연습문제

const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

const x = 1;
const y = 2;
const z = 3;
console.log(x >> 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y === 0);

const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isAdmin && isLoggedIn ? "Full access granted" : "Restricted access"
);

const value1 = undefined;
const value2 = 3;
console.log(!!value1 || !!value2);
console.log(!!value1 && !!value2);

const num = 1212;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);

/*
부록
1. 배열
2. 

*/
