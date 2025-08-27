// Date
// 시간을 밀리초 정밀도(unix epoch: 1970-01-01T00:00:00 기준)로 표현하는 객체다.
// asia/seoul UTC+9

const now = new Date(); // 0 -> 1월 8 -> 9월
console.log(now.getFullYear()); //연
// console.log(now.getMonth()); 0->1월
console.log(now.getMonth()); // 0->1 월
console.log(now.getDate()); // 일(1 - 31)
console.log(now.getHours()); //시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getDay()); // 0=일 ~ 6=토

// 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(7));
console.log(now.setDate(32));
console.log(now);

// 날짜를 형식화 (포맷팅)
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

console.log(now.toLocaleString('ko-KR', { month: 'long' })); // "월"
console.log(now.toLocaleString('en-US', { month: 'long' })); // "Wednesday, Octob"

const startDate = new Date(2025, 7, 25);
const endDate = new Date(2025, 11, 25);

const datediff = endDate - startDate;
const diffDays = datediff / (1000 * 60 * 60 * 24);
console.log(diffDays);

console.log(now.getTime());
