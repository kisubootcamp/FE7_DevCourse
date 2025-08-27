// Date
// 시간을 밀로초 정밀도로 표현
const now = new Date(2025, 0, 1, 12, 0, 0, 0);
console.log(now); // 2025-01-01T03:00:00.000Z
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 0 (1월)
console.log(now.getDate()); // 1
console.log(now.getHours()); // 12
console.log(now.getMinutes()); // 0
console.log(now.getSeconds()); // 0

console.log(now.setFullYear(2024)); // 1704067200000 (밀리초)
console.log(now.setMonth(7)); // 8월
console.log(now.setDate(15)); // 25일

console.log(now.getDay()); // 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
console.log(now.toDateString()); // 날짜 문자열

// 날짜의 형식화(포맷팅)
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};

console.log(now.toLocaleDateString("ko-KR", options)); // 2024년 8월 15일 목요일
console.log(now.toLocaleDateString("en-US", options)); // Thursday, August 15, 2024

// 날짜와 날짜사이의 간격
const startDate = new Date("2024-01-01");
const endDate = new Date("2024-12-31");

const datediff = endDate - startDate; // 밀리초 단위
const daydiff = datediff / (1000 * 60 * 60 * 24); // 일 단위
console.log(diffDays); // 364
