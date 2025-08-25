// 1. 주말 확인 - 주어진 날짜가 주말(토요일 또는 일요일)인지 확인하는 함수를 작성하세요.
function isWeekend(date) {
  const d = new Date(date);
  const day = d.getDay();
  return day === 0 || day === 6 ? "주말" : "평일";
}

console.log(isWeekend("2024-10-26")); // 주말
console.log(isWeekend("2024-10-29")); // 평일
console.log(isWeekend("2024-10-27")); // 주말

// 2. 두 날짜의 주차 수 계산 - 두 날짜 사이의 주차 수를 계산하는 함수를 작성하세요.
function weeksBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = d2 - d1;
  const diffWeek = Math.floor(diffTime / (1000 * 60 * 60 * 24) / 7);
  return `${date1} ~ ${date2}: ${diffWeek}주`;
}

console.log(weeksBetween("2024-01-01", "2024-02-01")); // 4주
console.log(weeksBetween("2024-01-01", "2024-04-01")); // 13주
console.log(weeksBetween("2024-06-01", "2024-08-01")); // 8주

// 3. 다음 생일 계산 - 주어진 생일을 기준으로 다음 생일까지의 일수를 계산하세요.
function daysUntilNextBirthday(date) {
  const now = new Date();
  const birth = new Date(date);

  let nextBirthday = new Date(
    now.getFullYear(),
    birth.getMonth(),
    birth.getDate()
  );

  if (nextBirthday < now) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
  }
  const diff = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));
  return `${date}: ${diff === 365 ? 0 : diff}일 남음`;
}

console.log(daysUntilNextBirthday("1990-05-15")); // 263
console.log(daysUntilNextBirthday("2000-12-31")); // 128
console.log(daysUntilNextBirthday("1985-08-25")); // 0

// 4. 특정 월의 주 수 - 주어진 연도와 월의 주 수를 계산하세요.
function weeksInMonth(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  return `${year}년 ${month + 1}월: ${Math.ceil((firstDay + lastDate) / 7)}주 ${
    month + 1 === 2 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? "(윤년)"
      : ""
  }`;
}

console.log(weeksInMonth(2024, 0)); // 5주
console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
console.log(weeksInMonth(2024, 6)); // 5주

// 5. 특정 날짜에서의 일요일 찾기 - 주어진 날짜에서 가장 가까운 이전 일요일의 날짜를 출력하세요.
function previousSunday(date) {
  const day = new Date(date);
  const d = day.getDay();

  const prev = new Date(day);
  prev.setDate(day.getDate() - d);

  return `${date}의 이전 일요일: ${prev.getFullYear()}-${
    prev.getMonth() + 1
  }-${prev.getDate()}`;
}

console.log(previousSunday("2024-10-03")); // 2024-10-20
console.log(previousSunday("2024-10-10")); // 2024-10-20
console.log(previousSunday("2024-10-29")); // 2024-10-27
console.log(previousSunday("2024-10-30")); // 2024-10-27

// 6. 해당 연도의 마지막 날 - 주어진 연도의 마지막 날의 날짜와 요일을 출력하세요.
function lastDayOfYear(year) {
  const date = new Date(year, 11, 31);

  return {
    year: year,
    date: date.toLocaleDateString("ko-KR"),
    weekday: date.toLocaleDateString("ko-KR", { weekday: "long" }),
  };
}

const result = lastDayOfYear(2024);
console.log(`${result.year}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일

// 7. 생일 중복 확인 - 두 사람의 생일이 같은 날인지 확인하는 함수를 작성하세요.
function isSameBirthday(date1, date2) {
  const b1 = new Date(date1);
  const b2 = new Date(date2);
  if (b1.getMonth() === b2.getMonth() && b1.getDate() === b2.getDate()) {
    return "같은 날입니다.";
  }
  return "다른 날입니다.";
}

console.log(isSameBirthday("2024-05-15", "2020-05-15")); // 같은 날입니다.
console.log(isSameBirthday("2024-05-15", "2020-05-25")); // 다른 날입니다.

// 8. 월별 평균 일수 계산 - 주어진 연도에 대한 각 월의 평균 일수를 출력하세요.
function averageDaysInYear(year) {
  let result = [];
  const d = new Date(year);

  for (let i = 0; i < 12; i++) {
    d.setMonth(i);
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    result.push(lastDay);
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result[1]++;
  }
  return `${year}년 각 월의 평균 일수: [${result}]`;
}

console.log(averageDaysInYear(2024));
console.log(averageDaysInYear(2023));

// 9. 연도의 첫 번째 월요일 찾기 - 주어진 연도의 첫 번째 월요일의 날짜를 출력하세요.
function firstMondayOfYear(year) {
  let date = new Date(year, 0, 1);
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1);
  }
  return `${year}년 첫 번째 월요일: ${date.getFullYear()}. ${String(
    date.getMonth() + 1
  ).padStart(2, "0")}. ${String(date.getDate()).padStart(2, "0")}`;
}
const firstMonday = firstMondayOfYear(2025);
console.log(firstMonday); // 2025년 첫 번째 월요일: 2024. 01. 06.
