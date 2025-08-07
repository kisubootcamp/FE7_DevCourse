/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/

const score = 70;
let grade = "";
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(grade);

// 2
const num = 10;
if (num % 2 === 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}

// 3
const isLoggedIn = false;
const isAdmin = true;

if (!isLoggedIn) {
  console.log("Please Log In");
} else if (isLoggedIn && !isAdmin) {
  console.log("Access Denined");
} else {
  console.log("Welcome, Admin!");
}

//4
const a = 10;
const b = 5;
if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

// 5
const month = 12;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("fall");
    break;
  default:
    console.log("Invalid Month");
    break;
}

// 6
const amount = 120000;
let discount;
if (amount >= 100000) {
  discount = 0.2;
} else if (amount >= 50000) {
  discount = 0.1;
} else {
  discount = 0;
}

const finalAmount = amount - amount * discount;
console.log(finalAmount);

// 7
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

// 8
const num2 = 10;
if (num2 > 0) {
  console.log("양수");
} else if (num2 < 0) {
  console.log("음수");
} else {
  console.log(0);
}
