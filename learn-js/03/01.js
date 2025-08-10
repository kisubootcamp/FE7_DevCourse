const a = true;
const b = false;
const rere = a && b;
const rera = a || b;
const rerb = !a;
console.log(rere);
console.log(rera);
console.log(rerb);

const x = 3;
const y = 5;
const z = 7;
const condition1 = x > 10 && y < 5;
console.log(condition1);
const condition2 = x > 10 || z > 3;
const condition3 = y !== 0;
console.log(condition2);
console.log(condition3);

const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn ? "welcome" : "Please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

const value1 = "a";
const value2 = "null";

console.log(value1 || value2 ? "값존재" : "값 존재x");
console.log(!value && !value2 ? "값이 존재x" : "값 존재");
