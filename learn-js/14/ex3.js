// Date 객체 연습문제+

//1
// function isWeekend(newDate) {
//   const date = new Date(newDate);
//   if (date.getDay() === 6 || date.getDay() === 0) return "주말";
//   else return "평일";
// }
// console.log(isWeekend("2024-10-26")); // 주말
// console.log(isWeekend("2024-10-29")); // 평일
// console.log(isWeekend("2024-10-27")); // 주말

//2
// function weeksBetween(firstWeek, lastWeek) {
//   const startDate = new Date(firstWeek);
//   const endDate = new Date(lastWeek);
//   let date = endDate - startDate;
//   return `${Math.floor(date / (1000 * 60 * 60 * 24 * 7))}주`;
// }

// console.log(weeksBetween("2024-01-01", "2024-02-01")); // 4주
// console.log(weeksBetween("2024-01-01", "2024-04-01")); // 13주
// console.log(weeksBetween("2024-06-01", "2024-08-01")); // 8주

//3
// function daysUntilNextBirthday(date) {
//   const birth = new Date(date);
//   const now = new Date("2025-8-25");

//   if (birth.getMonth() > now.getMonth()) {
//     birth.setFullYear(now.getFullYear());
//     return Math.floor((birth - now) / (1000 * 60 * 60 * 24));
//   } else if (birth.getMonth() === now.getMonth()) return 0;
//   else {
//     birth.setFullYear(now.getFullYear() + 1);
//     return Math.ceil((birth - now) / (1000 * 60 * 60 * 24) - 1);
//   }
// }

// console.log(daysUntilNextBirthday("1990-05-15")); // 263
// console.log(daysUntilNextBirthday("2000-12-31")); // 128
// console.log(daysUntilNextBirthday("1985-08-25")); // 0

//4
// function weeksInMonth(year, month) {
//   const targetDate = new Date(year, month);
//   if(targetDate.setDate(0) === 31) return
// }

// console.log(weeksInMonth(2024, 0)); // 5주
// console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
// console.log(weeksInMonth(2024, 6)); // 5주

//5
// function previousSunday(date) {
//   const sunday = new Date(date);
//   for (let i = 0; i <= 6; i++) {
//     if (sunday.getDay() - i === 0)
//       return `${sunday.getFullYear()}-${sunday.getMonth() + 1}-${
//         sunday.getDate() - i
//       }`;
//   }
// }

// console.log(previousSunday("2024-10-30")); // 2024-10-27
// console.log(previousSunday("2024-10-26")); // 2024-10-20
// console.log(previousSunday("2024-10-29")); // 2024-10-27

//6
function lastDayOfYear(year) {
  const date = new Date(year, 11, 31);
  return;
}

const result = lastDayOfYear(2024);
console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일

//7
function isSameBirthday(birth1, birth2) {
  const date1 = new Date(birth1);
  const date2 = new Date(birth2);
  if (
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
    return "같은 날입니다.";
  else return "다른 날입니다.";
}
console.log(isSameBirthday("2024-05-15", "2020-05-15")); // 같은 날입니다.
console.log(isSameBirthday("2024-05-15", "2020-05-25")); // 다른 날입니다.

//8
function averageDaysInYear(year) {
  const date = new Date(year, 0, 1);
  let hap = 0;
  for (let i = 1; i <= 11; i++) {}
}

console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);
