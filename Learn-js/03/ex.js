// 조건문
// 1. 학점 계산기
const score = 78;
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

// 2. 짝수와 홀수 판별
const num = 21;
if (num % 2 === 1) {
  console.log("Odd");
} else {
  console.log("Even");
}

// 3. 로그인 확인 및 권한 부여
const isLoggedIn = true;
const isAdmin = true;
// (1)
if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin!");
  } else {
    console.log("Access denied");
  }
} else {
  console.log("Please log in");
}
// (2)
if (!isLoggedIn) {
  console.log("Please Log In");
} else if (isLoggedIn && !isAdmin) {
  console.log("Access denied");
} else {
  console.log("Welcome, Admin!");
}

// 4. 숫자 크기 비교
const a = 5;
const b = 3;
if (a > b) {
  console.log("a is greater");
} else if (a < b) {
  console.log("b is greater");
} else {
  console.log("a and b are equal");
}

// 5. 월별 계절 판별
const month = 5;
// switch문
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
    console.log("Invalid Month");
    break;
}

// if문
if (month === 12 || month === 1 || month === 2) {
  console.log("Winter");
} else if (month === 3 || month === 4 || month === 5) {
  console.log("Spring");
} else if (month === 6 || month === 7 || month === 8) {
  console.log("Summer");
} else if (month === 9 || month === 10 || month === 11) {
  console.log("Fall");
} else {
  console.log("Invalid Month");
}

// 6. 할인율 계산
let price = 150000;
let discount;
if (price >= 100000) {
  console.log("20% 할인");
  discount = 0.2;
} else if (price >= 50000) {
  console.log("10% 할인");
  discount = 0.1;
} else {
  console.log("그외 할인 없음 ");
  discount = 0;
}
price = price * (1 - discount);

console.log("최종 금액: " + price);

// 7. 1부터 7까지의 숫자를 입력받아 해당 요일(1: 월요일, 7: 일요일)을 출력하는 코드를 작성하시오.
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
  default:
    console.log("일요일");
}

// 8. 주어진 숫자가 양수, 음수, 또는 0인지 판별하는 코드를 작성하시오.
const num2 = 10;
if (num2 >= 0) {
  if (num2 === 0) {
    console.log("0");
  } else {
    console.log("양수");
  }
} else {
  console.log("음수");
}

// ----------------------------------------------------------------------------------------
// 반복문 - 쉬움
// 1. [연습문제 - 1부터 9까지 출력하기]
let i1 = 1;

// while문
while (i1 <= 9) {
  console.log(i1);
  i1++;
}

// for문
for (i1; i1 <= 9; i1++) {
  console.log(i1);
}

// 2. [연습문제 - 1부터 9까지의 합 출력하기]
let i2 = 1;
let sum1 = 0;

// while문
while (i2 <= 9) {
  sum1 += i2;
  i2++;
}

// for문
for (i2; i2 <= 9; i2++) {
  sum1 += i2;
}
console.log(sum1);

// 3. [연습문제 - 1부터 100까지 짝수만 출력하기]
let i3 = 1;

// while문
while (i3 <= 100) {
  if (i3 % 2 === 0) {
    console.log(i3);
  }
  i3++;
}

// for문
for (i3; i3 <= 100; i3++) {
  if (i3 % 2 === 0) {
    console.log(i3);
  }
}

// 4. [연습문제 - 음수 걸러내기]
let numArr = [10, -10, 20, -30, 40];
let i4 = 0;
let sum2 = 0;

// while문
while (i4 < numArr.length) {
  if (numArr[i4] > 0) {
    sum2 += numArr[i4];
  }
  i4++;
}

// for문
for (i4; i4 < numArr.length; i4++) {
  if (numArr[i4] > 0) {
    sum2 += numArr[i4];
  }
}

console.log(sum2);

// 5. [연습문제 - 홀짝 구분하기]
let i5 = 0;

// while문
while (i5 <= 15) {
  if (i5 % 2 === 0) {
    console.log(i5 + "짝수");
  } else {
    console.log(i5 + "홀수");
  }
  i5++;
}

// for문
for (let i5 = 0; i5 <= 15; i5++) {
  if (i5 % 2 === 0) {
    console.log(i5 + "짝수");
  } else {
    console.log(i5 + "홀수");
  }
}

// 6. 주어진 숫자 배열의 최댓값 찾기
const numArr2 = [7, 2, 1, 4, 5];
let max = 0;

for (let i6 = 0; i6 < numArr2.length; i6++) {
  if (max < numArr2[i6]) {
    max = numArr2[i6];
  }
}

console.log(max);

// 7. 짝수 인덱스의 요소만 새로운 배열 담기
// 배열의 .push() 메서드를 사용하세요.
const arr = ["a", "b", "c", "d", "e"];
const arrEven = [];

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) arrEven.push(arr[i]);
}

for (const index of arrEven) {
  console.log(index);
}

// 8. 구구단 3단 출력하기
for (let i = 1; i <= 9; i++) {
  console.log("3 x " + i + " = " + 3 * i);
}

// 반복문 - 어려움
// 1. 피보나치 수열 계산
let n = 15;
let result1 = [0, 1];

for (i = 2; i < n; i++) {
  result1[i] = result1[i - 2] + result1[i - 1];
}

console.log(`피보나치 수열(${n}항):`, result1);

// 2. 소수 찾기
let result2 = [];

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let start = 2; start < i; start++) {
    if (i % start === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result2.push(i);
  }
}

console.log(result2);

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25];
let result3 = 0;

for (let value of numbers) {
  result3 += value;
}

console.log(result3); // 75

// 4. 문자열 뒤집기
let str = "Hello, World!";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}

console.log(reversed);

// 5.특정 숫자까지의 곱 계산
let n2 = 5;
let factorial = 1;

for (let i = 1; i <= n2; i++) {
  factorial *= i;
}

console.log(`${n2}의 팩토리얼:`, factorial);

// 6. 암스트롱수
for (let i = 100; i <= 999; i++) {
  let first = (i - (i % 100)) / 100;
  let second = ((i % 100) - (i % 10)) / 10;
  let third = i % 10;
  let sum = first ** 3 + second ** 3 + third ** 3;

  if (sum === i) {
    console.log(i);
  }
}
