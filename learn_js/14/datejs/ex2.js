// 1. 주어진 날짜가 주말(토요일 또는 일요일)인지 확인하는 함수를 작성하세요.
function isWeekend(str) {
  const week = new Date(str);
  if (week.getDay() === 0 || week.getDay() === 6) return '주말';
  else return '평일';
}
console.log(isWeekend('2024-10-26')); // 주말
console.log(isWeekend('2024-10-29')); // 평일
console.log(isWeekend('2024-10-27')); // 주말

// 2. 두 날짜 사이의 주차 수를 계산하는 함수를 작성하세요.
function weeksBetween(str1, str2) {
  const week1 = new Date(str1);
  const week2 = new Date(str2);
  const datediff = week2 - week1;
  const diffDays = datediff / (1000 * 60 * 60 * 24);
  return `${Math.floor(diffDays / 7)}주`;
}
console.log(weeksBetween('2024-01-01', '2024-02-01')); // 4주
console.log(weeksBetween('2024-01-01', '2024-04-01')); // 13주
console.log(weeksBetween('2024-06-01', '2024-08-01')); // 8주

// 3. 주어진 생일을 기준으로 다음 생일까지의 일수를 계산하세요.
function daysUntilNextBirthday(str) {
  const now1 = new Date();
  const birth = new Date(str);
  birth.setFullYear(now1.getFullYear());
  let datediff = birth - now1;
  let diffDays = datediff / (1000 * 60 * 60 * 24);
  if (diffDays < 0) {
    birth.setFullYear(now1.getFullYear() + 1);

    datediff = birth - now1;
    diffDays = datediff / (1000 * 60 * 60 * 24);
  }
  return Math.round(diffDays);
}
console.log(daysUntilNextBirthday('1990-05-15')); // 263
console.log(daysUntilNextBirthday('2000-12-31')); // 128
console.log(daysUntilNextBirthday('1985-08-25')); // 0

// 4. 주어진 연도와 월의 주 수를 계산하세요.
function weeksInMonth(year, month) {}
console.log(weeksInMonth(2024, 0)); // 5주
console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
console.log(weeksInMonth(2024, 6)); // 5주
