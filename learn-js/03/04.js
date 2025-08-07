// 연습문제

/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/

const score = 94;

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

/*
- 변수 `num`에 임의의 숫자를 할당하세요.
- `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.
*/

const num = 13;
const eoCheck = num % 2;
if (eoCheck == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/*
- 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
- 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
- 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
- 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.
*/
const isLoggedIn = false;
const isAdmin = true;
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin!");
  } else {
    console.log("Access denied");
  }
} else {
  console.log("Please log in");
}

/*
- 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
- `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater",
 `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.
*/
const a = 4;
const b = 8;
if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

/*
1. 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
2. `month`에 따라 해당하는 계절을 출력하세요:
    - 12, 1, 2: "Winter"
    - 3, 4, 5: "Spring"
    - 6, 7, 8: "Summer"
    - 9, 10, 11: "Fall"
*/
const month = 7;

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
    console.log("몰루");
}

/*
6 할인율 계산

1. 구매 금액에 따라 할인율을 적용하여 최종 금액을 계산하는 코드를 작성하시오
2. 100000원 이상 : 20% 할인
3. 50000원 이상 : 10% 할인
4. 그외 할인 없음
*/

const price = 120000;
let discount = 0.0;

if (price >= 100000) {
  discount = 0.2;
} else if (price >= 50000) {
  discount = 0.1;
}
console.log(price * (1.0 - discount));

/*
1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력하는 코드를 작성하시오.
*/

const day = 6;
if (day === 1) {
  dayName = "월요일";
} else if (day === 2) {
  dayName = "화요일";
} else if (day === 3) {
  dayName = "수요일";
} else if (day === 4) {
  dayName = "목요일";
} else if (day === 5) {
  dayName = "금요일";
} else if (day === 6) {
  dayName = "토요일";
} else if (day === 7) {
  dayName = "일요일";
} else {
  dayName = "몰라몰라";
}
console.log(dayName);
/*
문제: 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.
*/
const num2 = 10;
if (num2 > 0) {
  console.log("양수");
} else if (num2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}
