// // 1.
// console.log(new Date());

// // 2.
// const days = [
//   "일요일",
//   "월요일",
//   "화요일",
//   "수요일",
//   "목요일",
//   "금요일",
//   "토요일",
// ];
// const date = new Date(2025, 11, 25);

// console.log(days[date.getDay()]);

// // 3.
// const date = new Date(2025, 10, 0);
// console.log(date.getDate());

// // 4.
// const startDate = new Date(2025, 0, 1);
// const endDate = new Date(2025, 11, 31);
// const dateDiff = endDate - startDate;
// const diffDays = dateDiff / (1000 * 60 * 60 * 24);
// console.log(diffDays);

// // 5.
// const now = new Date();
// const birthday = new Date(1990, 4, 15);
// const dateDiff = now - birthday;
// const diffDays = dateDiff / (1000 * 60 * 60 * 24 * 365);
// console.log(Math.floor(diffDays));

// // 6.
// const now = new Date();
// console.log(now);
// now.setDate(now.getDate + 10);
// console.log(now);

// // 7.
// const date = new Date(2025, 9, 30);
// console.log(date.getFullYear(), date.getMonth() + 1);

// // 8.
// const today = new Date();
// const startToZeroTime = new Date(
//   today.getFullYear(),
//   today.getMonth(),
//   today.getDate()
// );
// console.log(startToZeroTime);

// // 9.
// const days = [
//   "일요일",
//   "월요일",
//   "화요일",
//   "수요일",
//   "목요일",
//   "금요일",
//   "토요일",
// ];
// const date = new Date(2024, 10, 0).getDate();
// for (let i = 1; i <= date; i++) {
//   const newDate = new Date(2024, 9, i);
//   const year = newDate.getFullYear();
//   const month = String(newDate.getMonth() + 1).padStart(2, "0");
//   const date = String(newDate.getDate()).padStart(2, "0");
//   const day = newDate.getDay();

//   console.log(`${year}-${month}-${date}: ${days[day]}`);
// }

// 10.
// function yearCheck(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year}: 윤년`);
//   } else console.log(`${year}: 평년`);
// }

// yearCheck(2023);
