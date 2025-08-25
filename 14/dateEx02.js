// // 1.
// function isWeekend(date) {
//   const newDate = new Date(date);
//   const day = newDate.getDay();

//   return day > 0 && day < 6 ? "평일" : "주말";
// }

// console.log(isWeekend("2024-10-26")); // 주말
// console.log(isWeekend("2024-10-29")); // 평일
// console.log(isWeekend("2024-10-27")); // 주말

// // 2.
// function weeksBetween(startDate, endDate) {
//   const sDate = new Date(startDate);
//   const eDate = new Date(endDate);
//   const diffDate = eDate - sDate;
//   return `${Math.floor(diffDate / (1000 * 60 * 60 * 24 * 7))}주`;
// }

// console.log(weeksBetween("2024-01-01", "2024-02-01")); // 4주
// console.log(weeksBetween("2024-01-01", "2024-04-01")); // 13주
// console.log(weeksBetween("2024-06-01", "2024-08-01")); // 8주

// // 3.
// function daysUntilNextBirthday(date) {
//   const now = new Date();
//   const birthday = new Date(date);
//   birthday.setFullYear(now.getFullYear());
//   const nextBirthday = new Date(
//     birthday.getFullYear() + 1,
//     birthday.getMonth(),
//     birthday.getDate() + 1
//   );
//   const diffDate = nextBirthday - now;
//   if (diffDate / (1000 * 60 * 60 * 24) >= 365) {
//     return Math.floor(diffDate / (1000 * 60 * 60 * 24) - 365);
//   }
//   return Math.floor(diffDate / (1000 * 60 * 60 * 24));
// }

// console.log(daysUntilNextBirthday("1990-05-15")); // 263
// console.log(daysUntilNextBirthday("2000-12-31")); // 128
// console.log(daysUntilNextBirthday("1985-08-25")); // 0

// // 4. 나중에 다시
// function weeksInMonth(year, month) {
//   const date = new Date(year, month + 1, 1);
//   return date;

//   // console.log(date.getDate());

//   // console.log(date.getDate() / 7);
// }

// console.log(weeksInMonth(2024, 0)); // 5주
// console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
// console.log(weeksInMonth(2024, 6)); // 5주

// 5.
// function previousSunday(date) {
//   const newDate = new Date(date);
//   newDate.setDate(newDate.getDate() - newDate.getDay());
//   return `${newDate.getFullYear()}-${
//     newDate.getMonth() + 1
//   }-${newDate.getDate()}`;
// }

// console.log(previousSunday("2024-10-30")); // 2024-10-27
// console.log(previousSunday("2024-10-26")); // 2024-10-20
// console.log(previousSunday("2024-10-29")); // 2024-10-27

// 6.
function lastDayOfYear(year) {}

const result = lastDayOfYear(2024);
console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일
