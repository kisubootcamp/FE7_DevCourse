//연습문제+

function getDiffDays(start, end) {
  return (end - start) / (1000 * 60 * 60 * 24);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 0부터 시작
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

//1
function isWeekend(date) {
  const day = new Date(date).getDay();
  if (day == 0 || day == 6) return "주말";
  else return "평일";
}
console.log(isWeekend("2024-10-26")); // 주말
console.log(isWeekend("2024-10-29")); // 평일
console.log(isWeekend("2024-10-27")); // 주말

//2
function weeksBetween(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const weeks = Math.floor(getDiffDays(date1, date2) / 7);
  return weeks;
}

console.log(weeksBetween("2024-01-01", "2024-02-01")); // 4주
console.log(weeksBetween("2024-01-01", "2024-04-01")); // 13주
console.log(weeksBetween("2024-06-01", "2024-08-01")); // 8주

//3
function daysUntilNextBirthday(d) {
  const birth = new Date(d);
  const now = new Date();
  birth.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  birth.setFullYear(now.getFullYear());
  if (birth < now) birth.setFullYear(birth.getFullYear() + 1);
  return getDiffDays(now, birth);
}
console.log(daysUntilNextBirthday("1990-05-15")); // 263
console.log(daysUntilNextBirthday("2000-12-31")); // 128
console.log(daysUntilNextBirthday("1985-08-25")); // 0

//4
function weeksInMonth(year, month) {
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);
  return Math.ceil(getDiffDays(firstDate, lastDate) / 7);
}
console.log(weeksInMonth(2024, 0)); // 5주
console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
console.log(weeksInMonth(2024, 6)); // 5주

//5
function previousSunday(d) {
  const date = new Date(d);
  while (date.getDay() != 0) {
    date.setDate(date.getDate() - 1);
  }
  return formatDate(date);
}
console.log(previousSunday("2024-10-30")); // 2024-10-27
console.log(previousSunday("2024-10-26")); // 2024-10-20
console.log(previousSunday("2024-10-29")); // 2024-10-27

//6
function lastDayOfYear(year) {
  const date = new Date(year + 1, 0, 0);
  const days = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return { date: formatDate(date), weekday: days[date.getDay()] };
}
const result = lastDayOfYear(2024);
console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일

//7
function isSameBirthday(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate())
    return "같은 날입니다.";
  else return "다른 날입니다.";
}
console.log(isSameBirthday("2024-05-15", "2020-05-15")); // 같은 날입니다.
console.log(isSameBirthday("2024-05-15", "2020-05-25")); // 다른 날입니다.

//8
function averageDaysInYear(year) {
  const result = [];
  for (let i = 0; i < 12; i++) {
    const d = new Date(year, i + 1, 0);
    result.push(d.getDate());
  }
  return result;
}
console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);

//9
function firstMondayOfYear(year) {
  const d = new Date(year, 0, 1);
  while (d.getDay() != 1) {
    d.setDate(d.getDate() + 1);
  }
  return formatDate(d);
}
const firstMonday = firstMondayOfYear(2025);
console.log(firstMonday); // 2024년 첫 번째 월요일: 2024. 01. 08.
