// 1
const a = true;
const b = false;

console.log(a&&b); // AND (~고)
console.log(a||b); // OR (~거나, 또는)
console.log(!a); // NOT

// 2
const x = 15;
const y = 3;
const z = 4;

console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y !== 0);

// 3
const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Plaese log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(isLoggedIn && isAdmin ? "Full access granted" : "Restricted access");

// 4
const value1 = "A";
const value2 = null;
console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
console.log(!value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함");

// 5
const num = 50;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);