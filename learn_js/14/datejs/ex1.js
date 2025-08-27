// // 1 현재 날짜와 시간을 YYYY-MM-DD HH:mm:ss 형식으로 출력하세요.
// const now = new Date();
// console.log(now); // 현재 날짜와 시간

// // 2.2025년 12월 25일이 무슨 요일인지 출력하세요.
// const cms = new Date(2025, 11, 25);
// console.log(cms.toLocaleString('ko-KR', { weekday: 'narrow' })); //

// // 3. 2025년 10월의 마지막 날짜를 구하세요.
// const ten = new Date(2025, 10, 0);
// console.log(ten.getDate());

// // 4. 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
// const prev = new Date(2025, 0, 1);
// const next = new Date(2025, 11, 31);
// const datediff = next - prev;
// const result = datediff / (1000 * 60 * 60 * 24);
// console.log(result);

// // 5.  1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
// const birth = new Date(1990, 4, 15);
// const now1 = new Date();
// const datediff1 = now1 - birth;
// const result1 = Math.floor(datediff1 / (1000 * 60 * 60 * 24) / 365);
// console.log(result1);

// // 6. 현재 날짜에 10일을 추가한 날짜를 출력하세요.
// const today = new Date(2025, 10, 31);
// today.setDate(today.getDate() + 9);
// console.log(`${today.getFullYear()}. ${today.getMonth()}. ${today.getDate()}`);

// // 7. 2025년 10월 30일의 월과 연도를 출력하세요.
// const today1 = new Date(2025, 10, 30);
// console.log(`${today1.getFullYear()}, ${today1.getMonth()}`);

// // 8. 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 Date 객체를 출력하세요.
// const today2 = new Date(2025, 9, 31);
// const startToZeroTime = new Date(
//   today2.getFullYear(),
//   today2.getMonth(),
//   today2.getDate()
// );
// console.log(startToZeroTime);

// // 9. 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.
// const lastDate = new Date(2025, 10, 0).getDate(); //
// const day = [
//   '일요일',
//   '월요일',
//   '화요일',
//   '수요일',
//   '목요일',
//   '금요일',
//   '토요일',
// ];

// const pad = (n) => String(n).padStart(2, '0');
// for (let d = 1; d <= lastDate; d++) {
//   const date = new Date(2025, 9, d); // 시간 인스턴스 객체
//   const weekday = day[date.getDay()]; // 요일
//   console.log(
//     `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
//       date.getDate()
//     )} ${weekday}`
//   );
// }

// 10. 주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
const years = new Date(2024, 3, 12);

function check(year) {
  if (
    (year.getFullYear() % 4 === 0 && year.getFullYear() % 100 !== 0) ||
    year.getFullYear() % 400 === 0
  ) {
    console.log(`${year.getFullYear()}: 윤년`);
  } else {
    console.log(`${year.getFullYear()}: 평년`);
  }
}

check(years);
