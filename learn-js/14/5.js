// Date
// 시간을 밀리초 정밀도(unix epoch: 1970-01-01T00:00:00Z 기준)로 표현하는 객체다
// asia/seoul UTC + 9
// const now = new Date(2025, 8, 2, 10, 30, 0); // 0 -> 1월 8 -> 9월
// const now = new Date("2025-09-02 14:00:00"); // 0 -> 1월 8 -> 9월
const now = new Date();

// 날짜와 시간을 가져오는 메서드
console.log(now.getFullYear()); // 연
console.log(now.getMonth()); // 월 0 -> 1월
console.log(now.getDate()); // 일 (1 - 31)
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getDay()); // 0=일, 1=월, ... 6=토

// 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(7));
console.log(now.setDate(1));
console.log(now.setHours(12));
console.log(now.setMinutes(12));
console.log(now.setSeconds(12));

// 날짜를 형식화(포맷팅)
// 옵션을 사용한 예제
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};

console.log(now.toLocaleString("ko-KR", { month: "narrow" })); // "수요일, 2024년 10월 30일 12:34:56 KST"
console.log(now.toLocaleString("en-US", { month: "narrow" })); // "Wednesday, October 30,

// 날짜와 날짜사이의 간격
const startDate = new Date(2025, 7, 25);
const endDate = new Date(2025, 11, 25);

const datediff = endDate - startDate;
const diffDays = datediff / (1000 * 60 * 60 * 24);
console.log(diffDays); // 121일

console.log(now.getTime());
