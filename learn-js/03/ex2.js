// 연습 문제 1
const score = 85; // 예시 점수
let grade;

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

console.log(`학점: ${grade}`); // 학점: B

// 연습 문제 2
const num = 7; // 예시 숫자
if (num % 2 === 0) {
  console.log("Even"); // 짝수
} else {
  console.log("Odd"); // 홀수
}

// 연습 문제 3
const isLoggedIn = true; // 로그인 상태
const isAdmin = false; // 관리자 상태
if (!isLoggedIn) {
  console.log("Please log in"); // 로그인하지 않은 경우
} else if (!isAdmin) {
  console.log("Access denied"); // 로그인했지만 관리자가 아닌 경우
} else {
  console.log("Welcome, Admin!");
} // 로그인하고 관리자일 경우

// 연습 문제 4
const isLoggedIn2 = false;
const isAdmin2 = true;

if (!isLoggedIn2) {
  console.log("Please Log In");
} else if (isLoggedIn2 && !isAdmin2) {
  console.log("Access Denined");
} else {
  console.log("Welcome, Admin!");
}

// 연습 문제 5
const month = 4; // 예시 월

let season;
switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Fall";
    break;
  default:
    season = "Invalid month"; // 잘못된 월 입력 처리
}

console.log(`Season: ${season}`); // Season: Spring

// 연습 문제 6
const purchaseAmount = 120000; // 예시 구매 금액
let discountRate;
if (purchaseAmount >= 100000) {
  discountRate = 0.2; // 20% 할인
} else if (purchaseAmount >= 50000) {
  discountRate = 0.1; // 10% 할인
} else {
  discountRate = 0; // 할인 없음
}
const finalAmount = purchaseAmount * (1 - discountRate);
console.log(`최종 금액: ${finalAmount}원`); // 최종 금액: 96000원

// 연습 문제 7
const day = 7; // 예시 요일 (1: 월요일, 2: 화요일, ..., 7: 일요일)
let dayName = ""; // 요일 이름을 저장할 변수

switch (day) {
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
    break;
  case 3:
    dayName = "수요일";
    break;
  case 4:
    dayName = "목요일";
    break;
  case 5:
    dayName = "금요일";
    break;
  case 6:
    dayName = "토요일";
    break;
  case 7:
    dayName = "일요일";
    break;
  default:
    dayName = "잘못된 입력"; // 잘못된 입력 처리
}
console.log(`요일: ${dayName}`); // 요일: 일요일

// 연습 문제 8
// 문제: 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.
const num2 = 10;
if (num2 > 0) {
  console.log("양수입니다."); // 양수인 경우
} else if (num2 < 0) {
  console.log("음수입니다."); // 음수인 경우
} else {
  console.log("0입니다."); // 0인 경우
}
