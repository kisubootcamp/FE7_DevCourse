// Date 객체 연습문제

//1
// const date = new Date("2025, 04,19,11:36:34");
// console.log(date);
// 강사님 풀이
// console.log(datediff.toISOString().slice(0,19).replace("T", " "))

//2
// const date = new Date("2025,12,25,09:0:0");
// console.log(date.getDay());
// 강사님 풀이
// console.log(date.toLocaleDateString("ko-KR", { weekday: "long" }));

//3
// const date = new Date(2024, 10, 0);
// console.log(date.getDate());

//4
// const endDate = new Date(2026, 0, 0); // 2025년 12월 31일 됨
// const startDate = new Date(2025, 0, 1);
// const date = endDate - startDate;
// console.log(date / (1000 * 60 * 60 * 24));

//5
// const birth = new Date(1990, 4, 15);
// const date = new Date();
// const old = date - birth;
// let result = Math.floor(old / (1000 * 60 * 60 * 24 * 364));
// if (result < new Date(date.getFullYear(), birth.getMonth(), birth.getDate()))
//   result--;
// console.log(result);

//6
// const date = new Date();
// date.setDate(date.getDate() + 10);
// console.log(date);

//7
// const date = new Date(2025, 9, 30);
// console.log(date.getFullYear(), date.getMonth() + 1);

//8
// const today = new Date();
// const startToZeroTime = new Date(
//   today.getFullYear(),
//   today.getMonth(),
//   today.getDate(),
//   9,
//   0,
//   0
// );
// console.log(startToZeroTime);

//9
// const day = [
//   "일요일",
//   "월요일",
//   "화요일",
//   "수요일",
//   "목요일",
//   "금요일",
//   "토요일",
// ];

// const pad = (n) => String(n).padStart(2, "0");
// const lastDate = new Date(2025, 10, 0).getDate();
// for (let d = 1; d <= lastDate; d++) {
//   const date = new Date(2025, 9, d); // 시간 인스턴스 객체
//   const weekday = day[date.getDay()]; // 요일
//   console.log(
//     `${date.getFullYear()}-${date.getMonth() + 1}-${pad(
//       date.getDate()
//     )} ${weekday}`
//   );
// }

//10
// const date = new Date();
// const lastYear = date.getFullYear() - 1;
// const yearsAgo = date.getFullYear() - 2;

// if ((lastYear % 4 === 0 && lastYear % 100 !== 0) || lastYear % 400 === 0)
//   console.log("윤년");
// else console.log("평년");
