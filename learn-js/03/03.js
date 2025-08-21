// 1
const score = 50;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// 2
const num = 2;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3
const isLoggedIn = true;
const isAdmin = false;

if (!isLoggedIn) {
  console.log("Please log in");
} else if (isAdmin) {
  console.log("Welcome, admin!");
} else {
  console.log("Access denied");
}

// 4
const a = 2;
const b = 11;

if (a > b) {
  console.log("a is greater");
} else if (b > a) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

// 5
const month = 6;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;
  default:
    break;
}

// 6
let total = 3333;

if (total >= 100000) {
  total *= 0.8;
} else if (total >= 50000) {
  total *= 0.9;
}

// 7
const day = 3;

switch (day) {
  case 1:
    console.log("월");
    break;
  case 2:
    console.log("화");
    break;
  case 3:
    console.log("수");
    break;
  case 4:
    console.log("목");
    break;
  case 5:
    console.log("금");
    break;
  case 6:
    console.log("토");
    break;
  case 7:
    console.log("일");
    break;
}

// 8
const num2 = 10;

if (num2 > 0) {
  console.log("양");
} else if (num2 < 0) {
  console.log("음");
} else {
  console.log("0");
}
