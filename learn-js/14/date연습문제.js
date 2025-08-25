//1
const now = new Date();
console.log(now.toLocaleString("ko-KR")); // 기본 형식 (한국어)

//2
const date = new Date("2025-12-25");

console.log(date.toLocaleString("ko-KR", { weekday: "long" }));

//3
console.log(new Date(2025, 10, 0).getDate());

//4
const startDate = new Date(2025, 0, 1); // 25년 1월(인덱스0) 1일
const endDate = new Date(2026, 0, 0); // 26년 첫 날의 마지막날 = 25년 마지막날
const diffTime = endDate - startDate;
const diffDays = diffTime / (1000 * 60 * 60 * 24); // 밀리초->초->분->시
console.log(diffDays);

//5
const startDate2 = new Date("1990-05-15");
const endDate2 = new Date();
const age = endDate2.getFullYear() - startDate2.getFullYear();
console.log(age);

//6
const date3 = new Date();
date3.setDate(date3.getDate() + 10);
console.log(date3.getDate());

//7
const date4 = new Date("2025-10-30");
console.log(date4.getFullYear(), date4.getMonth() + 1);

//8
const date5 = new Date();
let year = date5.getFullYear();
let month = date5.getMonth();
let day = date5.getDay();
console.log(`${year}. ${month}. ${day} 00:00:00`);

//9
for (let day = 1; day <= 31; day++) {
  const date = new Date(2024, 10, day);
  console.log(
    date.toLocaleString("ko-KR") +
      ": " +
      date.toLocaleString("ko-KR", { weekday: "narrow" })
  );
}

//10
function checkYear(date) {
  let year = new Date(date).getFullYear();
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return "윤년";
  } else return "평년";
}

console.log("2024: " + checkYear("2024-01-01"));
console.log("2025: " + checkYear("2025-01-01"));
