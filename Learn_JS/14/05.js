// Date
// 시간을 밀리초 정밀도(unix epoch: 1970-01-01T00:00:00Z 기준)로 표현하는 객체다
// asia/seoul UTC+9
// const now = new Date(2025, 8, 2, 10, 30, 0); // 0- > 1월 8 -> 9월
const now = new Date("2025-08-25T03:24:00");

// 날짜와 시간을 가져오는 메서드
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getDay()); // 0~6 일~토

// 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(7));
console.log(now.setDate(8));
console.log(now.setHours(23));
console.log(now.setMinutes(59));
console.log(now.setSeconds(59));


// 날짜를 형식화(포맷팅)
console.log(now.toDateString());
console.log(now.toLocaleString("ko-KR", {month: "narrow"}));
console.log(now.toLocaleString("en-US", {month: "narrow"}));

// 옵션을 사용한 예제
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};

// 날짜 계산
const startDate = new Date('2024-10-30');
const endDate = new Date('2024-11-30');
const diffTime = endDate - startDate; // 밀리초 단위
const diffDays = diffTime / (1000 * 60 * 60 * 24); // 일 수로 변환
console.log(diffDays); // 두 날짜 사이의 일 수

// 타임 스탬프
const timestamp = Date.now(); // 밀리초 단위

// 특정 날짜를 밀리초로 변환
const timestampSpecific = new Date('2024-10-30').getTime();