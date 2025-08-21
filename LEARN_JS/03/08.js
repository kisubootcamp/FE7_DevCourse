// 1번 문제
const score = 85;
switch (score) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

// 2번 문제
const num = 80;
switch (num % 2 === 0) {
  case true:
    console.log("짝수입니다.");
    break;
  case false:
    console.log("홀수입니다.");
    break;
}

// 3번 문제
const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Access denied");
  }
} else {
  console.log("Please log in");
}

// 4번 문제
const a = 10;
const b = 20;
if (a < b) {
  console.log("b is greater");
} else if (a > b) {
  console.log("a is greater");
} else {
  console.log("a and b are equal");
}

// 5번 문제
const month = 5;
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
}

// 6번 문제
let Amount = 300000;
let discount = 0;
if (Amount >= 100000) {
  discount = 0.2;
  Amount = Amount - Amount * discount;
  console.log("결제 될 금액은 " + Amount + "원 입니다.");
} else if (Amount >= 50000) {
  discount = 0.1;
  Amount = Amount - Amount * discount;
  console.log(`결제 될 금액은 ${Amount}원 입니다.`);
}

// 7번 문제
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

const num2 = 10;
if (num2 > 0) {
  console.log("양수");
} else if (num2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}
