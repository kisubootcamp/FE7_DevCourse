// Date
// 시간을 밀리초 정밀도로 표현하는 객체
// 1970-01-01T00:00:00Z 기준
// T: 날짜와 시간을 구분하는 구분자 역할(의미 X)
// Z: UTC+0을 의미 (asia/seoul UTC+8)

const now2 = new Date(2025, 8, 2, 10, 30, 0); // 8, 2 => 9월 2일
const now3 = new Date("2025-08-02 14:00:00");
console.log(now2); // 2025-09-02T01:30:00.000Z
console.log(now3); // 2025-08-02T05:00:00.000Z

const now1 = new Date();
console.log(now1);

// 날짜와 시간을 가져오는 메서드
console.log(now1.getFullYear()); // 연
console.log(now1.getMonth()); // 월 0 -> 1월이기 때문에, 나오는 숫자에 +1
console.log(now1.getDate()); // 일 (1일~31일)
console.log(now1.getHours()); // 시
console.log(now1.getMinutes()); // 분
console.log(now1.getSeconds()); // 초

const now = new Date();
console.log(now);

// 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(11));
console.log(now.setDate(0));
console.log(now.setHours(12));
console.log(now.setMinutes(12));
console.log(now.setSeconds(12));
console.log(now);

// 날짜를 형식화(포멧팅)
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

console.log(now.toDateString());
console.log(now.toLocaleString("ko-KR", options)); // "수요일, 2024년 10월 30일 12:34:56 KST"
console.log(now.toLocaleString("en-US", options)); // "Wednesday, October 30, 2024, 12:34:56 PM GMT+9"

// 날짜와 날짜 사이의 간격
const startDate = new Date("2025-08-25");
const endDate = new Date("2025-12-25");

const diffTime = endDate - startDate; // 밀리초 단위
const diffDays = diffTime / (1000 * 60 * 60 * 24); // 일 수로 변환
console.log(diffDays); // 두 날짜 사이의 일 수
