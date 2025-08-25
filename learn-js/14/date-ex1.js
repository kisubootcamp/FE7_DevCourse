// 문제 1: 현재 날짜 출력
const now = new Date();
console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

// 문제 2: 특정 날짜의 요일
const specday = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const christmas = new Date(2025, 11, 25);
console.log(specday[christmas.getDay()]);

// 문제 3: 월별 마지막 날짜
const oct = new Date(2025, 10, 0);
console.log(oct.getDate());

// 문제 4: 날짜 차이 계산

const startDate = new Date(2025, 0, 1);
const endDate = new Date(2025, 11, 31);

const diffDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
console.log(diffDays);

// 문제 5: 생일 계산
const birthDate = new Date(1990, 5, 15);
const now2 = new Date(2025, 7, 25);

const age = Math.floor((now2 - birthDate) / (1000 * 60 * 60 * 24 * 365));
console.log(age);

// 문제 6: 날짜 추가
const todate = new Date();
todate.setDate(todate.getDate() + 10);
console.log(`${todate.getFullYear()}. ${todate.getMonth()+1}. ${todate.getDate()}.`);

// 문제 7: 특정 날짜의 월과 연도
const spec = new Date(2025, 9, 30);
console.log(spec.getFullYear(), spec.getMonth()+1);

// 문제 8: 오늘의 시작 시간
const today = new Date();
const startToZeroTime = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);
startToZeroTime.setHours(0);
startToZeroTime.setMinutes(0);
startToZeroTime.setSeconds(0);

console.log(startToZeroTime);

// 문제 9: 월별 요일 출력
const day = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const lastDate = new Date(2025, 10, 0).getDate();
for (let i = 1; i <= lastDate; i++) {
    let every = new Date(2025, 10, i);
    console.log(`${every.getFullYear()}-${every.getMonth()}-${every.getDate()}: ${day[every.getDay()]}`);
}

// 문제 10: 윤년 확인
let yoon = 2024;
if (yoon % 400 === 0) {
    console.log(`${yoon}: 윤년`);
} else if (yoon % 100 === 0) {
    console.log(`${yoon}: 평년`);
} else if (yoon % 4 === 0) {
    console.log(`${yoon}: 윤년`);
} else {
    console.log(`${yoon}: 평년`);
}