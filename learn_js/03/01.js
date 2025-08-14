// Q1
const a = true;
const b = false;

console.log(a && b); // AND
console.log(a || b); // OR
console.log(!a); // NOT

// Q2
const x = 15;
const y = 3;
const z = 4;
console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y !== 0);

// Q3
const isLoggedIn = true;
const isAdmin = true;
console.log(isLoggedIn ? 'welcome' : 'Please log in');
console.log(isAdmin ? 'Adimin access granted' : 'Admin access denied');
console.log(
  isLoggedIn && isAdmin ? 'Full access granted' : 'Restricted access'
);

// Q4
const value1 = 'hi';
const value2 = 'null';
console.log(value1 || value2 ? '값이 존재함' : '값이 존재하지 않음.');
console.log(
  !value1 && !value2 ? '값이 존재하지 않음' : '값이 하나라도 존재함.'
);

// Q5
const num = 3;
console.log(num >= 0 && num <= 100);
console.log(num < 0 || num > 100);
