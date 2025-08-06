//2
const a = 10;
const b = 20;
const c = 15;

const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

//3
const number = 9;
const evenOrodd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrodd);

//4
// 0, false , null, undefined 가 아니면 모두 참이에요 . (자바스크립트는 )
const isLoggedIn = true;
// const sss = isLoggedIn === true ? "welcome" : "Please Logged In"
const sss = isLoggedIn ? "welcome" : "Please Logged In";
console.log(sss);

//5
const age = 18;
const aaa = age >= 18 ? "Adult" : "Minor";
console.log(aaa);
