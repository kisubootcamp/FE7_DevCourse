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
//   const lastDay = new Date(year, month + 1, 0);
//   const startDay = new Date(year, month, 1);

//   const weeks = (lastDay - startDay) / (1000 * 60 * 60 * 24 * 7);
//   return `${Math.ceil(weeks)}주`;
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

// // 6.
// function lastDayOfYear(year) {
//   const day = [
//     "일요일",
//     "월요일",
//     "화요일",
//     "수요일",
//     "목요일",
//     "금요일",
//     "토요일",
//   ];
//   const newDate = new Date(year + 1, 0, 0);
//   const date = `${newDate.getFullYear()}. ${
//     newDate.getMonth() + 1
//   }. ${newDate.getDate()}`;
//   const weekday = day[newDate.getDay()];
//   return { date, weekday };
// }

// const result = lastDayOfYear(2024);
// console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일

// // 7.
// function isSameBirthday(first, second) {
//   const firstDate = new Date(first);
//   const secondDate = new Date(second);

//   const firstMonth = firstDate.getMonth();
//   const secondMonth = secondDate.getMonth();

//   const firtstDay = firstDate.getDate();
//   const secondDay = secondDate.getDate();

//   return firstMonth === secondMonth && firtstDay === secondDay
//     ? "같은 날입니다."
//     : "다른 날입니다.";
// }
// console.log(isSameBirthday("2024-05-15", "2020-05-15")); // 같은 날입니다.
// console.log(isSameBirthday("2024-05-15", "2020-05-25")); // 다른 날입니다.

// // 8.
// function averageDaysInYear(year) {
//   // const newDate = new Date(year + 1, 0, 0);
//   const arr = [];

//   for (let i = 0; i < 12; i++) {
//     const newDate = new Date(year, i + 1, 0);
//     arr.push(newDate.getDate());
//   }

//   return `[${arr}]`;
// }
// console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);

// // 9.
// function firstMondayOfYear(year) {
//   const newDate = new Date(year, 1, 0);

//   for (let i = 1; i < newDate.getDate(); i++) {
//     const findDate = new Date(year, 0, i);
//     const findDay = findDate.getDay();

//     if (findDay === 1)
//       return `2024년 첫 번째 월요일: ${findDate.getFullYear()}. ${String(
//         findDate.getMonth() + 1
//       ).padStart(2, "0")}. ${String(findDate.getDate()).padStart(2, "0")}`;
//   }
// }

// const firstMonday = firstMondayOfYear(2024);
// console.log(firstMonday); // 2024년 첫 번째 월요일: 2024. 01. 08.
