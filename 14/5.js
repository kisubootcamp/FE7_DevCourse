// Date
// 시간을 밀리초 정밀도(unix epoch: 1970-01-01T00:00:00Z 기준)로 표현하는 객체
// asia/seoul UTC+8

// const now = new Date(2025, 8, 2, 10, 30, 0);
// const now = new Date("2025-09-02 14:00:00");
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
console.log(now.setDate(33));
console.log(now.setHours(12));
console.log(now.setMinutes(12));
console.log(now.setSeconds(12));
console.log(now);

// 날짜를 형식화(포맷팅)
console.log(now.toDateString());
console.log(now.toLocaleDateString("ko-KR"));
console.log(now.toLocaleDateString("en-US"));

// 날짜와 날짜 사이의 간격
const startDate = new Date(2025, 7, 25);
const endDate = new Date(2025, 11, 25);

const datediff = endDate - startDate;
const diffDays = datediff / (1000 * 60 * 60 * 24);
console.log(diffDays);
