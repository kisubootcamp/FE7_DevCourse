// Date 객체
// 인스턴스 객체에 초기값 넘길 수 있다.
// 초기 매개변수를 안 넘기면 지금 기준, 넘기면 넘기는 기준으로 초기화 가능

// const now = new Date("2025-08-25T03:24:00");
const now = new Date(2025, 8, 2); // 0 -> 1월 , 8 -> 9월
console.log(now);

console.log(now.getFullYear()); // 년도를 가져옴
console.log(now.getMonth()); // 월을 가져옴, 얘는 항상 1을 더해줘야함(0부터 시작이라), 7이 나오면 8월이라고 생각
console.log(now.getDate()); // 일을 가져옴
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getDay()); //0 = 일, 1 = 월, ... 6 = 토

// 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(7)); // 얘도 +1이라고 생각
console.log(now.setDate(31)); // 7월 마지막 날을 세팅하고 싶은데 31,30일인지 모를 때는 0을 넣으면 마지막 날을 세팅해줌
console.log(now.setHours(12)); // 시 설정
console.log(now.setMinutes(12)); // 분 설정
console.log(now.setSeconds(12)); // 초 설정
console.log(now);

// 날짜를 형식화(포맷팅)
console.log(now.toDateString());
console.log(now.toLocaleDateString()); // 거주지역 날짜 포맷팅

const options = {
  // 날짜 지정에 따라서 포맷팅을 다르게 보여줄 수 있음, 암기까지 할 필요 X
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};

console.log(now.toLocaleString("ko-KR", options));
console.log(now.toLocaleString("en-US", options));

// 날짜와 날짜사이의 간격
const startDate = new Date();
const endDate = new Date(2025, 11, 25);

const datediff = endDate - startDate;
console.log(datediff); // 1970-01-01 시간으로부터 얼마나 흘렀는지(밀리세컨드 기준)
const diffDays = datediff / (1000 * 60 * 60 * 24); // 일수를 구하는 것(밀리세컨드에서)
console.log(diffDays); // 크리스마스 까지 120정도 남았다고 볼 수 있음
