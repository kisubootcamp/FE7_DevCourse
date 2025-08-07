// 연습문제
// 1.
const score = 50;

if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}

// 2.
const num = 13;
if (num % 2 === 0) {
  console.log('Even');
} else {
  console.log('Odd');
}

// 3.
const isLoggedIn = true;
const isAdmin = true;

if (!isLoggedIn) {
  console.log('Please log in');
} else {
  if (!isAdmin) {
    console.log('Access denied');
  } else {
    console.log('Welcome, admin!');
  }
}

// 4.
const a = 5;
const b = 5;
if (a > b) {
  console.log('a is greater');
} else if (a < b) {
  console.log('b is greater');
} else {
  console.log('a and b are equal');
}

// 5.
const month = 12;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('Winter');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Spring');
    break;
  case 8:
  case 6:
  case 7:
    console.log('Summer');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Fall');
    break;

  default:
    break;
}

// 6.
const buy = 40000;
if (buy >= 100000) {
  console.log(buy - buy * 0.2);
} else if (buy >= 50000) {
  console.log(buy - buy * 0.1);
} else {
  console.log(buy);
}

// 7.
const day = 7;
let dayName;
switch (day) {
  case 1:
    dayName = '월요일';
    break;
  case 2:
    dayName = '화요일';
    break;
  case 3:
    dayName = '수요일';
    break;
  case 4:
    dayName = '목요일';
    break;
  case 5:
    dayName = '금요일';
    break;
  case 6:
    dayName = '토요일';
    break;
  case 7:
    dayName = '일요일';
    break;

  default:
    break;
}
console.log(dayName);

// 8.
const num2 = 0;
if (num2 < 0) {
  console.log('음수');
} else if (num2 > 0) {
  console.log('양수');
} else {
  console.log('0');
}
