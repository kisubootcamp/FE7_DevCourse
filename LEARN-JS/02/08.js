// 연습문제
// 1.
const num = -1;
console.log(num > 0 ? 'Positive' : num === 0 ? 'Zero' : 'Negative');

// 2.
const a = 9;
const b = 7;
const c = 11;

const result = a > b ? (a > c ? 'a' : 'c') : b > c ? 'b' : 'c';
console.log(result);

// 3.
const number = 12;
console.log(number % 2 === 0 ? 'even' : 'odd');

// 4.
const isLoggedIn = false;
console.log(isLoggedIn === true ? 'Welcome' : 'Please log in');

// 5.
const age = 18;
console.log(age >= 18 ? 'Adult' : 'Minor');
