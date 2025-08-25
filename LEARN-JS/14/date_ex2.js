// 연습문제 +
// 1.
// function isWeekend(str) {
//   const date = new Date(str);
//   if (date.getDay() === 0 || date.getDay() === 6) {
//     return '주말';
//   } else {
//     return '평일';
//   }
// }

// console.log(isWeekend('2024-10-26')); // 주말
// console.log(isWeekend('2024-10-29')); // 평일
// console.log(isWeekend('2024-10-27')); // 주말

// 2.
function weeksBetween(str1, str2) {
  const date1 = new Date(str1);
  const date2 = new Date(str2);

  const diff = (date2 - date1) / (1000 * 60 * 60 * 24);
  return Math.floor(diff / 7);
}

console.log(weeksBetween('2024-01-01', '2024-02-01')); // 4주
console.log(weeksBetween('2024-01-01', '2024-04-01')); // 13주
console.log(weeksBetween('2024-06-01', '2024-08-01')); // 8주

// 3.
function daysUntilNextBirthday(str) {
  const birth = new Date(str);
  const now = new Date();

  const month = String(birth.getMonth() + 1).padStart(2, '0');
  const date = String(birth.getDate()).padStart(2, '0');
}

console.log(daysUntilNextBirthday('1990-05-15')); // 263
console.log(daysUntilNextBirthday('2000-12-31')); // 128
console.log(daysUntilNextBirthday('1985-08-25')); // 0
