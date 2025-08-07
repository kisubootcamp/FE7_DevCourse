// 조건문 연습 문제

// 1.
const score = 99;

// 표현식으로 조건을 처리 -> if
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

// 2.
const num = 33;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("odd");
}

// 3. (retry)
const isLoggedIn = true;
const isAdmin = true;

// 나
// 강사님 코드와 비교하여 내 코드의 구멍 있는지 확인하기
// if (isLoggedIn) {
//   // isLoggedIn === true
//   if (isAdmin) {
//     console.log("Welcome, admin!");
//   } else {
//     // isAdmin !== true
//     console.log("Access denied");
//   }
// } else {
//   console.log("Please log in");
// }

// 강사님
if (!isLoggedIn) {
  console.log("Please Log In");
} else if (isLoggedIn && !isAdmin) {
  console.log("Access Denined");
} else {
  console.log("Welcome, Admin!");
}

// 4.
const a = 54;
const b = 78;

// 값이 두 개, 비교하는 표현식 필요
if (a > b) {
  console.log("a is greater");
} else if (a === b) {
  console.log("a and b are equal");
} else {
  console.log("b is greater");
}

// 5.
const month = 5;

// 값으로 조건문 짬 -> switch
// 코드가 쓸데없이 길어짐 -> if문 쓰는게 나을 수도 있음

switch (month) {
  case 12:
  case 1:
  case 2:
    // case 12, 1, 2 -> 불가능
    console.log("winter");
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
    console.log("fall");
    break;
}

// 6. (retry)
const price = 170000;
let discountPrice;

// me
/*
if (price >= 50000) {
  discountPrice = price - price * 0.1;
  console.log(discountPrice);
} else if (price >= 100000) {
  discountPrice = price - price * 0.2;
  console.log(discountPrice);
} else {
  discountPrice = price;
  console.log(discountPrice);
}
  */

// 강사님
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

// 7.
//압력받음
const day = 7;
switch (day) {
  case 1:
    dayName = "mon";
    break;
  case 2:
    dayName = "tue";
    break;
  case 3:
    dayName = "wed";
    break;
  case 4:
    dayName = "thu";
    break;
  case 5:
    dayName = "fri";
    break;
  case 6:
    dayName = "sat";
    break;
  case 7:
    dayName = "sun";
    break;
  default:
    dayName = "잘못 된 입력입니다.";
}
console.log(dayName);

// 8.
const num2 = 10;

if (num2 % 2 === 0) {
  console.log("짝수");
} else if (num2 === 0) {
  console.log("0");
} else {
  console.log("홀수");
}
