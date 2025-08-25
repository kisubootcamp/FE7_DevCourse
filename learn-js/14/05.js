// Date
// 시간을 밀리초 정밀도(unix epoch : 1970-01-01T00:00:00Z 기준) 로 표현하는 객체
// asia/seoul UTC + 9

// const now = new Date("2025-09-02 14:00:00");
// console.log(now); // 이릏게 하면 입력한 값 // 2025-09-02T05:00:00.000Z 이렇게 나옴

const now = new Date();

// 날짜와 시간을 가져오는 메서드
console.log(now.getFullYear()); // 연
console.log(now.getMonth()); // 월 0 -> 1월
console.log(now.getDate()); // 일 (1 - 31)
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getDay()); // 0 = 일 ...

// 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(7));
console.log(now.setDate(1));
console.log(now.setHours(1));
console.log(now.setMinutes(1));
console.log(now.setSeconds(1));
// setDay는 없음

// 날짜를 형식화 (포맷팅)
console.log(now.toDateString()); // Sat Aug 01 2026

console.log(now.toLocaleString("ko-KR")); // 기본 형식 (한국어) 2026. 8. 1. 오전 1:01:01
console.log(now.toLocaleString("en-US")); // 미국 영어 형식 8/1/2026, 1:01:01 AM

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

console.log(now.toLocaleString("ko-KR", options)); // 2026년 8월 01일 토요일 오전 01시 1분 1초 GMT+9
console.log(now.toLocaleString("en-US", options)); // Saturday, August 01, 2026 at 01:01:01 AM GMT+9
