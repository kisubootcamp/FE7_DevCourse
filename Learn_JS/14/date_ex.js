// ### 문제 1: 현재 날짜 출력

// **설명**: 현재 날짜와 시간을 `YYYY-MM-DD HH:mm:ss` 형식으로 출력하세요.

// **예상 결과**:

// ```
// 2025. 04. 19. 02:36:34
const now1 = new Date();
// console.log(now.toISOString().slice(0, 19).replace("T", " "));
const year1 = now.getFullYear();
const month1 = String(now.getMonth() + 1).padStart(2, "0");
const day1 = String(now.getDate()).padStart(2, "0");
const hours1 = String(now.getHours()).padStart(2, "0");
const minutes1 = String(now.getMinutes()).padStart(2, "0");
const seconds1 = String(now.getSeconds()).padStart(2, "0");
console.log(`${year1}-${month1}-${day1} ${hours1}:${minutes1}:${seconds1}`);
// ```

// ---

// ### 문제 2: 특정 날짜의 요일

// **설명**: 2025년 12월 25일이 무슨 요일인지 출력하세요.
const date2 = new Date("2025-12-25");
const weekdays2 = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
console.log(weekdays2[date.getDay()]);
// **예상 결과**:

// ```
// 목요일
// ```

// ---

// ### 문제 3: 월별 마지막 날짜

// **설명**: 2025년 10월의 마지막 날짜를 구하세요.
const date3 = new Date(2025, 10, 0); // 2025년 11월 0일, 즉 2025년 10월의 마지막 날
console.log(date3.getDate());
// **예상 결과**:

// ```
// 31
// ```

// ---

// ### 문제 4: 날짜 차이 계산

// **설명**: 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
const date4_1 = new Date("2025-01-01");
const date4_2 = new Date("2025-12-31");

const diffTime = Math.abs(date4_2.getTime() - date4_1.getTime());
console.log(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));  
// **예상 결과**:

// ```
// 364
// ```

// ---

// ### 문제 5: 생일 계산

// **설명**: 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
const birthDate5 = new Date("1990-05-15");
const today5 = new Date();
let age5 = today5.getFullYear() - birthDate5.getFullYear();

if (today5.getMonth() < birthDate5.getMonth() || 
   (today5.getMonth() === birthDate5.getMonth() && today5.getDate() < birthDate5.getDate())) {
  age5--;
}

console.log(age5);
// **예상 결과**:

// ```
// 34
// ```

// ---

// ### 문제 6: 날짜 추가

// **설명**: 현재 날짜에 10일을 추가한 날짜를 출력하세요.

// **예상 결과**: 현재 날짜 + 10일 
const today6 = new Date();
today.setDate6(today6.getDate() + 10);
const futureDate6 = today6.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});
console.log(futureDate6);
// ```jsx
// // 오늘이 2025-10-31이라면 출력 결과는 
// // 2025. 11. 10.
// ```

// ---

// ### 문제 7: 특정 날짜의 월과 연도

// **설명**: 2025년 10월 30일의 월과 연도를 출력하세요.

// **예상 결과**:
const date7 = new Date("2025-10-30");
const year7 = date7.getFullYear();
const month7 = date7.getMonth() + 1;
console.log(`${year7}, ${month7}`);
// ```
// 2025, 10
// ```

// ---

// ### 문제 8: 오늘의 시작 시간

// **설명**: 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 `Date` 객체를 출력하세요.

// **예상 결과**:
// ```
// 2025-10-30 00:00:00
// ```

// ```jsx
const today8 = new Date();
const startToZeroTime8 = new Date(
  today8.getFullYear(),
  today8.getMonth(),
  today8.getDate()
);
console.log(startToZeroTime8);

// ```

// ---

// ### 문제 9: 월별 요일 출력

// **설명**: 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.
const weekdays9 = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
const year9 = 2024;
const month9 = 10;
const lastDay9 = new Date(year9, month9, 0).getDate();

for (let day = 1; day <= lastDay9; day++) {
  const date9 = new Date(year, month - 1, day);
  const dayOfWeek9 = weekdays[date9.getDay()];
  const formattedDate9 = `${year9}-${String(month9).padStart(2, "0")}-${String(day9).padStart(2, "0")}`;
  console.log(`${formattedDate9}: ${dayOfWeek9}`);
}
// **예상 결과**:

// ```
// 2024-10-01: 화요일
// 2024-10-02: 수요일
// ...
// 2024-10-31: 목요일
// ```

// ---

// ### 문제 10: 윤년 확인

// **설명**: 주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)

// **예상 결과**:
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
const year10_1 = 2024;
const year10_2 = 2023;

console.log(`${year10_1}: ${isLeapYear(year10_1) ? "윤년" : "평년"}`);
console.log(`${year10_2}: ${isLeapYear(year10_2) ? "윤년" : "평년"}`);
// ```
// 2024: 윤년
// 2023: 평년
// ```