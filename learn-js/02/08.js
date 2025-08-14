// 1
const num = -10;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

// 2
const a = 10;
const b = 20;
const c = 15;

const max = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(max);

// 3
const number = 9;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

// 4
const isLoggedIn = true;
// const message = isLoggedIn === true ? "Welcome" : "Please Logged in";
const message = isLoggedIn ? "Welcome" : "Please Logged in";

console.log(message);

// 5
const age = 10;
const adultOrMinor = age >=  18 ? "Adulte" : "Minor";
console.log(adultOrMinor);
