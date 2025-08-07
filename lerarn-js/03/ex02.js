// 표현식을 사용할 때는 if문을 사용

// 1.
const score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else console.log("F");

// 2.
const num = 22;
if (num % 2 === 0) {
  console.log("Even");
} else console.log("Odd");

//3.
const isLoggedIn = true;
const isAdmin = false;

if (!isLoggedIn) {
  console.log("Please log in");
}

if (isLoggedIn && !isAdmin) {
  console.log("Access denied");
}

if (isLoggedIn && isAdmin) {
  console.log("Welcome, admin!");
}

//4.
const a = 44;
const b = 4;

if (a > b) {
  console.log("a is greater");
} else if (b > a) {
  console.log("b is greater");
} else console.log("a and b are equal");

//5.
const month = 5;

// if (month === 12 || month === 1 || month === 2) {
//   console.log("Winter");
// } else if (month === 3 || month === 4 || month === 5) {
//   console.log("Spring");
// } else if (month === 6 || month === 7 || month === 8) {
//   console.log("Summer");
// } else if (month === 9 || month === 10 || month === 11) {
//   console.log("Fall");
// }

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
}

// 6.
const price = 70000;
let discount;
if (price >= 100000) {
  discount = 0.2;
} else if (price >= 50000) {
  discount = 0.1;
} else {
  discount = 0;
}

const finalAmount = price - price * discount;
console.log(finalAmount);

// 7.
const day = 3;

switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 7:
    console.log("일요일");
    break;

  default:
    console.log("잘못된 입력");
}

// 8.
const num2 = -4;

if (num2 > 0) {
  console.log("양수");
} else if (num2 === 0) {
  console.log(0);
} else {
  console.log("음수");
}
