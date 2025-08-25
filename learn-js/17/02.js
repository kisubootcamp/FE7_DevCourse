// //Date 객체 연습문제

// ### 문제 1: 현재 날짜 출력
// 현재 날짜와 시간을 `YYYY-MM-DD HH:mm:ss` 형식으로 출력하세요.
const now = new Date();
console.log(
  `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
);

// ### 문제 2: 특정 날짜의 요일
// 2025년 12월 25일이 무슨 요일인지 출력하세요.
const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

const d2 = new Date(2025, 11, 25);
console.log(days[d2.getDay()]);

// ### 문제 3: 월별 마지막 날짜
// 2025년 10월의 마지막 날짜를 구하세요.
const d3 = new Date(2025, 10, 0);
console.log(d3.getDate());

// ### 문제 4: 날짜 차이 계산
// 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
const st = new Date("2025-1-1");
const end = new Date("2025-12-31");
const diff = (end - st) / (1000 * 60 * 60 * 24);
console.log(diff);

// ### 문제 5: 생일 계산

// **설명**: 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.

function getAge(birth) {
  const age = now.getFullYear() - birth.getFullYear();
  if (birth.getMonth() > now.getMonth()) return age - 1;
  if (birth.getMonth() < now.getMonth()) return age;
  if (birth.getDate() >= now.getDate()) return age - 1;
  else return age;
}
console.log(getAge(new Date("1990-5-15")));

// ### 문제 6: 날짜 추가
//현재 날짜에 10일을 추가한 날짜를 출력하세요.
const d6 = new Date();
d6.setDate(d6.getDate() + 10);
console.log(d6);

// ### 문제 7: 특정 날짜의 월과 연도
// 2025년 10월 30일의 월과 연도를 출력하세요.

const d7 = new Date("2025-10-30");
console.log(d7.getFullYear(), d7.getMonth() + 1);

// ### 문제 8: 오늘의 시작 시간
// 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 `Date` 객체를 출력하세요.
const d8 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
console.log(d8);

// ### 문제 9: 월별 요일 출력
// 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.

function printDD(year, month) {
  const d9 = new Date(year, month - 1, 1);
  while (d9.getMonth() == month - 1) {
    console.log(
      `${d9.getFullYear()}-${d9.getMonth() + 1}-${d9.getDate()} : ${
        days[d9.getDay()]
      }`
    );
    d9.setDate(d9.getDate() + 1);
  }
}

printDD(2024, 10);

// ### 문제 10: 윤년 확인
// 주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)

function isLeap(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) return "윤년";
  else return "평년";
}

console.log(isLeap(2024));
console.log(isLeap(2100));
