// 1
const num = -10;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

// 2
const a = 10;
const b = 20;
const c = 15;
const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

// 3
const number = 9;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

// 4
// 0, false, null, undefined가 아니면 모두 참이에요.
const isLoggedIn = true;
// const message = isLoggedIn === true ? "Welcome" : "Please Logged In";
const message = isLoggedIn ? "Welcome" : "Please Logged In";
console.log(message);

// 5
const age = 19;
const adultOrMinor = age >= 18 ? "Adult" : "Minor";
console.log(adultOrMinor);
