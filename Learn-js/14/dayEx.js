// 1. 현재 날짜 출력 - 현재 날짜와 시간을 YYYY-MM-DD HH:mm:ss 형식으로 출력하세요.
const now1 = new Date();

const year1 = now1.getFullYear();
const month1 = String(now1.getMonth() + 1).padStart(2, "0");
const day1 = String(now1.getDate()).padStart(2, "0");
const hours1 = String(now1.getHours()).padStart(2, "0");
const minutes1 = String(now1.getMinutes()).padStart(2, "0");
const seconds1 = String(now1.getSeconds()).padStart(2, "0");

console.log(`${year1}. ${month1}. ${day1}. ${hours1}:${minutes1}:${seconds1}`);

// 2. 특정 날짜의 요일 - 2025년 12월 25일이 무슨 요일인지 출력하세요.
console.log(
  new Date("2025-12-25").toLocaleString("ko-KR", { weekday: "long" })
);

// 3. 월별 마지막 날짜 - 2025년 10월의 마지막 날짜를 구하세요.
const day = new Date(2025, 10, 0);
console.log(day.getDate());

// 4. 날짜 차이 계산 - 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
const startDate = new Date("2025-01-01");
const endDate = new Date("2025-12-31");
const diffTime = endDate - startDate;
const diffDays = diffTime / (1000 * 60 * 60 * 24);
console.log(diffDays);

// 5. 생일 계산 - 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
const now5 = new Date();
const birth = new Date("1990-05-15");
const year5 = now5.getFullYear() - birth.getFullYear();
console.log(year5);

// 6. 날짜 추가 - 현재 날짜에 10일 추가한 날짜를 출력
const now6 = new Date("2025-10-31");
now6.setDate(now6.getDate() + 10);
console.log(
  `${now6.getFullYear()}-${String(now6.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now6.getDate()).padStart(2, "0")}`
);

// 7. 특정 날짜의 월과 연도 - 2025년 10월 30일의 월과 연도를 출력하세요.
const day7 = new Date("2025-10-30");
console.log(`${day7.getFullYear()}, ${day7.getMonth() + 1}`);

// 8. 오늘의 시작 시간 - 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 Date 객체를 출력하세요.
const today = new Date();
const startToZeroTime = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);
console.log(startToZeroTime);

// 9. 월별 요일 출력 - 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.
const lastDay = new Date(2024, 10, 0).getDate();

for (let i = 1; i <= lastDay; i++) {
  const date = new Date(2024, 10 - 1, i);
  console.log(
    `2024-10-${String(i).padStart(2, "0")}: ${date.toLocaleDateString("ko-KR", {
      weekday: "long",
    })}`
  );
}

// 10. 윤년 확인 - 주어진 연도가 윤년인지 확인하는 함수를 작성하세요.
// (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
const year = new Date("2024").getFullYear();
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("윤년");
} else console.log("평년");
