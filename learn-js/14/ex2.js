// Date 객체 연습문제

// 1. 현재 날짜와 시간을 YYYY-MM-DD HH:mm:ss 형식으로 출력하세요.
const date = new Date().toISOString();
const formattedDate = date.slice(0, 10) + " " + date.slice(11, 19);
console.log(formattedDate);

//

// 2. 2025년 12월 25일이 무슨 요일인지 출력하세요.
const christmas = new Date(2025, 11, 25);
const christmasDay = christmas.getDay();
const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
console.log(days[christmasDay]);

//

// 3. 월별 마지막 날짜
// 2025년 10월의 마지막 날짜를 구하세요.
const lastDay = new Date(2025, 10, 0).getDate();
console.log(lastDay); // 31

//

// 4. 날짜 차이 계산
// 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
const secondDate1 = new Date("2025-01-01");
const secondDate2 = new Date("2025-12-31");
const dateDiff = (secondDate2 - secondDate1) / (1000 * 60 * 60 * 24);
// console.log(secondDate1); // 364
// console.log(secondDate2); // 364
console.log(dateDiff); // 364

//

// 5. 생일 계산
// 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
const birthday = new Date(1990, 4, 15);
const today = new Date();
let age = today.getFullYear() - birthday.getFullYear() - 1;
console.log(age); // 33

//

// 6. 날짜 추가
// 현재 날짜에 10일을 추가한 날짜를 출력하세요.
// const currentDate = new Date();
// const futureDate = new Date(currentDate).setDate(currentDate.getDate() + 10);
const futureDate = new Date();
futureDate.setDate(today.getDate() + 10);
console.log(futureDate.toISOString().slice(0, 10).replace(/-/g, ". "));
// 오늘이 2025-10-31이라면 출력 결과는
// 2025. 11. 10.

//

// 7. 특정 날짜의 월과 연도
// 2025년 10월 30일의 월과 연도를 출력하세요.
const specificDate = new Date(2025, 9, 30);
console.log(`${specificDate.getFullYear()}, ${specificDate.getMonth() + 1}`); // 2025

//

// 8. 오늘의 시작 시간
// 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 Date 객체를 출력하세요.
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);
console.log(startOfToday); // 오늘 날짜의 시작 시간

//

// 9. 월별 요일 출력
// 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.
const [year, month] = [2024, 9]; // 10월 (0부터 시작)
const daysInMonth = new Date(year, month + 1, 0).getDate();
for (let day = 1; day <= daysInMonth; day++) {
  const date = new Date(year, month, day);
  const dayOfWeek = days[date.getDay()];
  console.log(`${day}일: ${dayOfWeek}`);
}

//

// 10. 윤년 확인
// 설명: 주어진 연도가 윤년인지 확인하는 함수를 작성하세요.
// (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
const year2 = new Date().getFullYear();
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(year2)); // true or false

//

// Date 객체 연습문제+

// 1. 주말 확인
// 주어진 날짜가 주말(토요일 또는 일요일)인지 확인하는 함수를 작성하세요.
function isWeekend(dateString) {
  const date = new Date(dateString);
  const day = date.getDay();
  return day === 0 || day === 6 ? "주말" : "평일";
}

console.log(isWeekend("2024-10-26")); // 주말
console.log(isWeekend("2024-10-29")); // 평일
console.log(isWeekend("2024-10-27")); // 주말

//

// 2. 두 날짜의 주차 수 계산
// 두 날짜 사이의 주차 수를 계산하는 함수를 작성하세요.
function weeksBetween(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffdays = (end - start) / (1000 * 60 * 60 * 24);
  return `${Math.floor(diffdays / 7)}주`;
}

console.log(weeksBetween("2024-01-01", "2024-02-01")); // 4주
console.log(weeksBetween("2024-01-01", "2024-04-01")); // 13주
console.log(weeksBetween("2024-06-01", "2024-08-01")); // 8주

//

// 3. 다음 생일 계산
// 주어진 생일을 기준으로 다음 생일까지의 일수를 계산하세요.

