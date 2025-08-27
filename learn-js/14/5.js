// Date 객체
// 시간을 밀리초 정밀도(unix epoch: 1970-01-01T00:00:00Z 기준)로 표현하는 객체
// asia/seoul UTC+9

const now1 = new Date("2025-08-25T03:24:00");
const now2 = new Date(2025, 8, 2, 10, 30, 0); // 0 -> 1월, 8 -> 9월
const now3 = new Date("2025-09-02 14:00:00");

console.log(now1);
console.log(now2);
console.log(now3);

const now = new Date(); // 코드가 실행된 시점

// 날짜와 시간을 가져오는 메서드
console.log(now);
console.log(now.getFullYear()); // 연
console.log(now.getMonth()); // 월 0 -> 1월 주의
console.log(now.getDate()); // 일 (1 ~ 31)
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getDay()); // 요일 0=일, 1=월, ... 6=토

// 날짜와 시간을 설정하는 메서드
console.log(now.setFullYear(2026));
console.log(now.setMonth(7));
console.log(now.setDate(1)); // setDate(0) -> 이전 달의 마지막 날짜로 설정됨. (달력 구현에 용이함)
                             // 현재 달의 날짜를 넘으면 다음 달로 바뀜. ex) 8월 32일 -> 9 월 1일

console.log(now.setHours(12));
console.log(now.setMinutes(12));
console.log(now.setSeconds(12));
// now.setDay(4) 없음 -> 요일을 변경해서 날짜가 변경되는 것은 논리에 맞지 않으므로.

console.log(now);

// Node.js와 console 창에서 값이 서로 다르게 나옴


// 날짜를 형식화 (포맷팅)
console.log(now.toDateString());
console.log(now.toLocaleDateString()); // 거주지역의 날짜 포맷팅에 맞게 변경해줌


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

console.log(now.toLocaleString('ko-KR', options)); // "수요일, 2024년 10월 30일 12:34:56 KST"
console.log(now.toLocaleString('en-US', options)); // "Wednesday, October 30, 2024, 12:34:56 PM GMT+9"

console.log(now.toLocaleString('ko-KR', { month: "long" })); // 옵션은 객체로써 따로 설정 가능
console.log(now.toLocaleString('en-US', { month: "narrow" }));

// 날짜와 날짜 사이의 간격
// const startDate = new Date();
const startDate = new Date(2025, 7, 25);
const endDate = new Date(2025, 11, 25);

const datediff = endDate - startDate;
const diffDays = datediff / (1000 * 60 * 60 * 24);

console.log(diffDays); // 122일

console.log(now.getTime());