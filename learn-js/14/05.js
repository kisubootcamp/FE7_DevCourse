//Date
// // 시간을 밀리초 정밀도로 표현하는 객체
//asia/seoul ITC +9
// 실행하는 환경에 따라 다른 값이 출력

// const now = new Date(2025, 8 ,2 , 10, 30, 0);
// console.log(now);

//날자와 시간을 정해주는 메소드
const now = new Date();
console.log(now.getFullYear()); //연
console.log(now.getMonth()); //월
console.log(now.getDate()); //일
console.log(now.getHours()); //시
console.log(now.getMinutes()); //분
console.log(now.getSeconds()); //초
console.log(now.getDay()); //요일 (0=일, 1=월 ... 6=토)
console.log(now.getTime());

//날자와 시간을 설정하는 메소드
console.log(now.setFullYear(2026));
console.log(now.setMonth(7));
console.log(now.setDate(0));
console.log(now.setDate(31)); //현재 허용가능한 Date를 넘어버리면 자연스럽게 월도 바뀐다.
console.log(now.setHours(12));
console.log(now.setMinutes(12));
console.log(now.setSeconds(12));

//날짜를 형식화(포멧팅)
//const now = new Date();

console.log(now.toLocaleString("ko-KR")); // 기본 형식 (한국어)
console.log(now.toLocaleString("en-US")); // 미국 영어 형식

// 옵션을 사용한 예제 (암기 X, 참고)
//const now = new Date();
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

console.log(now.toLocaleString("ko-KR", options)); // "수요일, 2024년 10월 30일 12:34:56 KST"
console.log(now.toLocaleString("en-US", options)); // "Wednesday, October 30, 2024, 12:34:56 PM GMT+9"

console.log(now.toLocaleString("ko-KR", { month: "narrow" }));
console.log(now);

//날짜와 날짜사이의 간격
const startDate = new Date();
const endDate = new Date(2025, 11, 25);

const datediff = endDate - startDate;
const diffDays = datediff / (1000 * 60 * 60 * 24); //남은 일
console.log(datediff);
console.log(diffDays);
