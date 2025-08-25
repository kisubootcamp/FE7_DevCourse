//1
function isWeekend(date) {
  const week = new Date(date).getDay();
  if (week === 0 || week === 6) return "주말";
  else return "평일";
}
console.log(isWeekend("2024-10-26")); // 주말
console.log(isWeekend("2024-10-29")); // 평일
console.log(isWeekend("2024-10-27")); // 주말

//2
function weeksBetween(date1, date2) {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const diffTime = endDate - startDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const diffWeeks = diffDays / 7;

  return Math.floor(diffWeeks);
}

console.log(weeksBetween("2024-01-01", "2024-02-01")); // 4주
console.log(weeksBetween("2024-01-01", "2024-04-01")); // 13주
console.log(weeksBetween("2024-06-01", "2024-08-01")); // 8주

//3

function daysUntilNextBirthday(date) {
  const birthDate = new Date(date);
  const nextBirthDate = new Date(date);
  nextBirthDate.setFullYear(birthDate.getFullYear() + 1);

  const diffTime = nextBirthDate - birthDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);

  return diffDays;
}
console.log(daysUntilNextBirthday("1990-05-15")); // 263
console.log(daysUntilNextBirthday("2000-12-31")); // 128
console.log(daysUntilNextBirthday("1985-08-25")); // 0
