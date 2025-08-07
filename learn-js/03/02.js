// if -> 표현식으로 조건을 처리할 때 사용합니다.
// switch -> 값으로 조건을 처리할 때 사용합니다.
// switch, case, brack, default
// brack를 안쓰면 일치 case 이후 코드를 전부 실행. fall through

const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("사과입니다.");
    break;
  case "banana":
    console.log("바나나입니다.");
    break;
  case "orange":
    console.log("오렌지입니다.");
    break;
  default: //else랑 비슷하고 마지막으로 오기때문에 break 생략 가능
    console.log("사과, 바나나, 오렌지가 아닙니다.");
}

const day = "일요일";
switch (day) {
  case "토요일":
  case "일요일":
    console.log("주말입니다."); //의도적인 fall through
    break;
  case "월요일":
    console.log("월요일입니다.");
    break;
  default:
    console.log("요일이 아닙니다.");
}

//연습문제
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

const score = 85;
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

// 1. 짝수와 홀수 판별
// - 변수 `num`에 임의의 숫자를 할당하세요.
// - `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.

const num = 2;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 3. 로그인 확인 및 권한 부여

// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// - 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
// - 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
// - 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.

const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin!");
  } else {
    console.log("Access denied");
  }
} else {
  console.log("Please log in");
}

// 4. 숫자 크기 비교

// - 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
// - `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.

const a = 324;
const b = 235;

if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

// 1.  월별 계절 판별
//     1. 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
//     2. `month`에 따라 해당하는 계절을 출력하세요:
//         - 12, 1, 2: "Winter"
//         - 3, 4, 5: "Spring"
//         - 6, 7, 8: "Summer"
//         - 9, 10, 11: "Fall"

const month = 4;
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
}

// 6 할인율 계산

// 1. 구매 금액에 따라 할인율을 적용하여 최종 금액을 계산하는 코드를 작성하시오
// 2. 100000원 이상 : 20% 할인
// 3. 50000원 이상 : 10% 할인
// 4. 그외 할인 없음
let amount = 293999;

if (amount >= 100000) {
  amount *= 0.8;
  console.log("20% 할인: " + amount);
} else if (discount >= 50000) {
  amount *= 0.9;
  console.log("10% 할인: " + amount);
} else {
  console.log("할인 없음");
}

// 7

// 1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력하는 코드를 작성하시오.

// ```jsx
// const day = 7;
// console.log(dayName); // 일요
// ```

const tday = 1;
const dayName = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

switch (tday) {
  case tday:
    console.log(dayName[tday - 1]); //의도적인 fall through
    break;
  default:
    console.log("요일이 아닙니다.");
}

// 8

// **문제**: 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.

// ```jsx
// const num2 = 10;
// ```
const num2 = 10;
if (num2 > 0) {
  console.log("양수");
} else if (num2 < 0) {
  console.log("음수");
} else {
  console.log("0");
}
