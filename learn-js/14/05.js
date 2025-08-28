// Date 객체
// 시간을 밀리초 정밀도 (unix epoch : 1970-01-01T00:00:00Z 기준)로 표현하는 객체
// T는 구분용으로 의미 x, Z는 UTC 시간대 나타냄 (asia/seoul UTC+9)
// ㄴ 실무에서는 라이브러리를 사용한다

// (1)
/*
const now = new Date();
// 한국 표준시로 초기화
console.log(now);
*/

/*
const now = new Date(2025, 8, 2); // 0 -> 1월, 8 -> 9월
// 00 말고 0으로 써야 됨
console.log(now);
// node.js 와 브라우저 환경이 값이 다름 -> 같은 코드여도 실행 환경에 따라 다름 -> 다루기 까다로움
*/

// 방법이 다양 
// ㄴ (), (2025,8,2), ("2025-08-02") ...
/*
const now = new Date("2025-08-02 14:00:00");
console.log(now);
*/

// (2)
// get_ : 날짜와 시간을 가져오는 메서드
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth()); // 0 -> 1월
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getDay()); // 0 -> 일요일, ..., 6 -> 토요일

// set_ : 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(3));
console.log(now.setDate(-1)); 
// 0으로 하면 달의 가장 마지막 날 출력
// -1은 마지막 날의 전날
// 달의 date를 오버하면 다음 달로 넘어감 (예, 8월 (32) -> 9/1 됨)
console.log(now.setHours(12)); 
console.log(now.setMinutes(13)); 
console.log(now.setSeconds(14)); 
//console.log(now.setDay()); // 없음 

console.log(now); 

// 날짜를 형식화 (포맷팅)
console.log(now.toDateString); //Sat Aug 01 2025 형식
console.log(now.toLocaleDateString); // 지역에 맞춰서, 옵션 사용 가능 (강의노트 참고, 암기 ㄴ)

// 날짜와 날짜 사이의 간격
const startDate = new Date();
const endDate = new Date(2025, 12, 25);
// 오늘 날짜 기준, 크리스마스까지 얼마나 남았는지
const datediff = endDate - startDate;
//console.log(datediff); // 1970-01-01T00:00:00Z 시간으로부터 얼마나 흘렀는지
const diffDays = datediff / (1000 * 60 * 60 * 24); // 밀리세컨드를 일수로 환산
console.log(datediff); // 121일 
// 시작날에 날짜를 입력하면 시분초 고려 x -> 122일이 됨

console.log(now.getTime());