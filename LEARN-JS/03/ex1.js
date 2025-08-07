// 연습문제
// 1.
const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

// 2.
const x = 5;
const y = 15;
const z = 12;

console.log(x > 10 && y < 5);
console.log(x > 10 || z < 3);
console.log(y !== 0);

// 3.
const isLoggedIn = false;
const isAdmin = true;
console.log(isLoggedIn === true ? 'Welcome' : 'Please log in');
console.log(isAdmin === true ? 'Admin access ganted' : 'Admin access denied');
console.log(
  isAdmin === true && isLoggedIn === true
    ? 'Full access granted'
    : 'Restricted access'
);

// 4.
const value1 = null;
const value2 = 11;

console.log(value1 || value2 ? '하나라도 값이 존재함' : '값이 없음');
console.log(value1 && value2 ? '모두 값이 존재함' : '값이 하나거나 없음');

// 5.
const num = 100;
console.log(num <= 100 && num >= 0 ? '0이상 100이하' : '0 미만 100 초과');
