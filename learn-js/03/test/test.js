// 1

const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

// 2
const x = 3, y = 4, z = 5;

console.log(x > 10 && y < 5)
console.log(x > 10 || z > 3)
console.log(y !== 0);

// 3
const isLoggined = true, isAdmin = false;

isLoggined ? console.log("Welcome") : console.log("Please log in");
isAdmin ? console.log("access granted") : console.log("access denie");
isLoggined && isAdmin ? console.log("full access granted") : console.log("restricted access");

// 4
const value1 = "A";
const value2 = null;

console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
console.log(!value1 && !value2 ? "값이 존재하지 않음" : "값이 하나라도 존재함");
​

// 5
const num = 10;
console.log(num < 100);
console.log(num < 0 || num > 100)