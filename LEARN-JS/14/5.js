// Date
// 시간을 밀리초 정밀도(unix epoch: 1970-01-01T00:00:00Z 기준)로 표현하는 객체다
// asia/seoul UTC+8

const now = new Date();
console.log(now.getFullYear()); // 연
console.log(now.getMonth()); // 월 0 -> 1월
console.log(now.getDate()); // 일(1~31)
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getDay()); // 0=일, 1=월,2=화 ... 6=토

// 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(7));
console.log(now.setDate(1)); // 0 -> 달의 마지막 날로 변함
console.log(now.setHours(12));
console.log(now.setMinutes(12));
console.log(now.setSeconds(12));
console.log(now);

// 날짜를 형식화(포맷팅)
// 옵션을 사용한 예제
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short',
};

console.log(now.toLocaleString('ko-KR', options)); // "수요일, 2024년 10월 30일 12:34:56 KST"
console.log(now.toLocaleString('en-US', options)); // "Wednesday, October 30, 2024, 12:34:56 PM GMT+9"

// 날짜와 날짜사이의 간격
const startDate = new Date();
const endDate = new Date(2025, 11, 25);

const datediff = endDate - startDate;
const diffDays = datediff / (1000 * 60 * 60 * 24);
// console.log(datediff); //1970-01-01T00:00:00Z 기준으로 얼마나 흘렀는지
console.log(diffDays); // 121일

const timestamp = Date.now();
