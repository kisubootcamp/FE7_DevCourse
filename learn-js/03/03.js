// if -> 표현식으로 조건을 처리할 때 사용합니다.
// switch -> 값으로 조건을 처리 할 때 사용합니다.
// switch, case, break, default
// 문법적으로 fall through 라고 합니다
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("사과입니다");
    break;
  case "banana":
    console.log("바나나입니다");
    break;
  case "orange":
    console.log("오렌지입니다");
    break;
  default:
    console.log("사과도 바나나도 오렌지도 아닙니다");
} // 잊지말고 break; 사용하기

let score = 88;
let grade = "";

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}
console.log("학점은 " + grade + " 입니다");

let num = 3;

if (num % 2 === 0) {
  console.log("Even"); // 짝수일 때
} else {
  console.log("Odd"); // 홀수일 때
}

let isLoggedIn = "true";
let isAddmin = "false";

if (!isLoggedIn) {
  console.log("Please log in"); // 로그인 안했을 때
} else if (isAdmin) {
  console.log("Welcome, admin!"); // 로그인 했고 관리자일 때
} else {
  console.log("Access denied"); // 로그인 했지만 관리자 아님
}

let a = 3;
let b = 5;
if (a > b) {
  console.log("a is greater");
} else if (b > a) {
  console.log("b is greater");
} else {
  console.log("a and b is equal");
}

let month = 3;

if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month === 3 || month === 4 || month === 5) {
  console.log("Spring");
} else if (month === 6 || month === 7 || month === 8) {
  console.log("Summer");
} else if (month === 9 || month === 10 || month === 11) {
  console.log("Fall");
} else {
  console.log("Invalid month");
}
