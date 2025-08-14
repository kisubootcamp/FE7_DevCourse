//  1.
const score = 92;
let grade = '';
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}
console.log(grade);

// 2.
const num = 3;
if (num % 2 === 0) {
  console.log('Even');
} else {
  console.log('odd');
}

// 3.
const isLoggedIn = true;
const isAdmin = false;
if (!isLoggedIn) {
  console.log('Please log in');
} else if (isLoggedIn && !isAdmin) {
  console.log('Access denied');
} else {
  console.log('Welcome, admin!');
}

// 4.
const a = 3;
const b = 2;
if (a > b) {
  console.log('a is greater');
} else if (a < b) {
  console.log('b is greater');
} else {
  console.log('a and b are equal');
}

// 5.
const month = 3;
switch (month) {
  case '12':
  case '1':
  case '2':
    console.log('Winter');
    break;

  case '3':
  case '4':
  case '5':
    console.log('Spring');
    break;

  case '6':
  case '7':
  case '8':
    console.log('Summer');
    break;

  case '9':
  case '10':
  case '11':
    console.log('Fall');
  default:
    break;
}

// 6.
const price = 100000;
if (price >= 100000) {
  price = (price / 5) * 4;
} else if (price >= 50000) {
  price = (price / 10) * 9;
}
console.log(`${price}원`);

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
const num2 = 10;
if (num2 > 0) {
  console.log('양수');
}
if (num2 < 0) {
  console.log('음수');
}

if (num2 === 0) {
  console.log('0');
}
