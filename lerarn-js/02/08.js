const num = -10;
num > 0
  ? console.log("Positive")
  : num === 0
  ? console.log("Zero")
  : console.log("Negative");

const a = 12;
const b = 4;
const c = 27;
a > b && a > c
  ? console.log("a")
  : b > c && b > a
  ? console.log("b")
  : console.log("c");

const max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(max);

const number = 33;
number % 2 === 0 ? console.log("Even") : console.log("Odd");

const isLoggedIn = true;
isLoggedIn ? console.log("Welcome") : console.log("Please log in");

const age = 25;
age >= 18 ? console.log("Adult") : console.log("Minor");
