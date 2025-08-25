// 연습문제
// 1.
// const now = new Date();
// const month = String(now.getMonth() + 1).padStart(2, '0');
// const str = `${now.getFullYear()}. ${month}. ${now.getDate()}. ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
// // console.log(str);

// function getDay(day) {
//   switch (day) {
//     case 0:
//       console.log('일요일');
//       break;
//     case 1:
//       console.log('월요일');
//       break;
//     case 2:
//       console.log('화요일');
//       break;
//     case 3:
//       console.log('수요일');
//       break;
//     case 4:
//       console.log('목요일');
//       break;
//     case 5:
//       console.log('금요일');
//       break;
//     case 6:
//       console.log('토요일');
//       break;

//     default:
//       break;
//   }
// }

// // 2.
// const cristmas = new Date(2025, 11, 25);
// const day = cristmas.getDay();
// console.log(getDay(day));

// // 3.
// const date = new Date(2025, 10);
// date.setDate(0);
// // console.log(date.getDate());

// 4.
// const date1 = new Date(2025, 0, 1);
// const date2 = new Date(2025, 11, 31);
// const diff = (date2 - date1) / (1000 * 60 * 60 * 24);
// console.log(diff);

// 5.
// const birth = new Date(1990, 4, 15);
// const now = new Date();

// const diff = now - birth;
// const age = diff / (1000 * 60 * 60 * 24);
// // console.log(Math.floor(age / 365));

// 6.
// const now = new Date();
// const nowDate = now.getDate();
// now.setDate(nowDate + 10);
// console.log(now.getDate());

// 7.
// const date = new Date(2025, 9, 30);
// console.log(`${date.getFullYear()}, ${date.getMonth() + 1}`);

// 8.
// const today = new Date();
// const startToZeroTime = new Date(
//   today.getFullYear(),
//   today.getMonth(),
//   today.getDate()
// );
// console.log(startToZeroTime);

// 9.
// const october = new Date(2025, 10);
// october.setDate(0);
// const lastDate = october.getDate();

// const day = [
//   '일요일',
//   '월요일',
//   '화요일',
//   '수요일',
//   '목요일',
//   '금요일',
//   '토요일',
// ];

// for (let i = 1; i <= lastDate; i++) {
//   october.setDate(i);
//   console.log(`${i}일: ${day[october.getDay()]}`);
// }

// // 10.
// function yoonFn(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return console.log('윤년');
//   } else {
//     return console.log('평년');
//   }
// }

// yoonFn(2024);
