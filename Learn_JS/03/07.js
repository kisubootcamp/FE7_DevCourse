// ### 연습문제

// 1. [연습문제 - 학점 계산기]

// ```jsx
// /*
// [연습문제 - 학점 계산기]

// 학생의 점수를 저장하는 score 변수의 값에 따라  
// 학점을 출력하는 코드를 작성해주세요.back

// 1. score의 점수가 90점 이상이면 A
// 2. score의 점수가 80점 이상이면 B
// 3. score의 점수가 70점 이상이면 C
// 4. score의 점수가 60점 이상이면 D
// 5. score의 점수가 60점 미만이면 F
// */
// ```

const score = 95;
if(score >= 90){
    console.log("A");
}else if(score >= 80){
    console.log("B");
}else if(score >= 70){
    console.log("C");
}else if(score >= 60){
    console.log("D");
}else{
    console.log("F");
}

// 1. 짝수와 홀수 판별
// - 변수 `num`에 임의의 숫자를 할당하세요.
// - `num`이 짝수인지 홀수인지 확인하고, 짝수면 "Even", 홀수면 "Odd"를 출력하세요.

const num = 99;
if(num % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}

// 3. 로그인 확인 및 권한 부여 

// - 변수 `isLoggedIn`과 `isAdmin`에 각각 `true` 또는 `false`를 할당하세요.
// - 사용자가 로그인했는지 확인하고, 로그인하지 않았다면 "Please log in"을 출력하세요.
// - 사용자가 로그인했지만 관리자가 아닌 경우 "Access denied"를 출력하세요.
// - 사용자가 로그인하고 관리자일 경우 "Welcome, admin!"을 출력하세요.

const isLoggedIn = true;
const isAdmin = true;
if(isLoggedIn){
    if(isAdmin){
        console.log("Welcome, admin!");
    }else{
        console.log("Access denied");
    }
}else{
    console.log("Please log in");
}

// 4. 숫자 크기 비교 

// - 변수 `a`와 `b`에 임의의 숫자를 할당하세요.
// - `a`와 `b`의 크기를 비교하고, `a`가 크면 "a is greater", `b`가 크면 "b is greater", 두 값이 같으면 "a and b are equal"을 출력하세요.

const a = 4;
const b = 8;
if(a > b){
    console.log("a is greater");
}else if(a < b){
    console.log("b is greater");
}else{
    console.log("a anf b are equal");
}

// 1.  월별 계절 판별
//     1. 변수 `month`에 1에서 12 사이의 숫자를 할당하세요.
//     2. `month`에 따라 해당하는 계절을 출력하세요:
//         - 12, 1, 2: "Winter"
//         - 3, 4, 5: "Spring"
//         - 6, 7, 8: "Summer"
//         - 9, 10, 11: "Fall"

const month = 8;
switch(month){
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
        console.log("Input Error");
}

// 6 할인율 계산

// 1. 구매 금액에 따라 할인율을 적용하여 최종 금액을 계산하는 코드를 작성하시오
// 2. 100000원 이상 : 20% 할인
// 3. 50000원 이상 : 10% 할인
// 4. 그외 할인 없음 

const price = 100000;
let discountedPrice = 0;

if(price >= 100000){
    discountedPrice = price * 0.8;
}else if(price >= 50000){
    discountedPrice = price * 0.9;
}else{
    discountedPrice = price; 
}

console.log(discountedPrice);
// 7

// 1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력하는 코드를 작성하시오.

// ```jsx
// const day = 7;
// console.log(dayName); // 일요
// ```

const day = 7;

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

// **문제**: 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.

// ```jsx
// const num2 = 10;
// ```

const num2 = 10;
if(num2 === 0){
    console.log("Zero");
}else if(num2 > 0){
    console.log("Positive");
}else{
    console.log("Negative");
}