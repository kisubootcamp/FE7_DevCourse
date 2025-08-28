// Date 객체 *
// 연습 문제
// ㄴ 풀이 방법이 여러 개 

// 1. 현재 날짜 출력 *
//YYYY-MM-DD HH:mm:ss 형식으로 출력
const now = new Date();
console.log(now); 
// 브라우저에서 Mon Aug 25 2025 15:04:30 GMT+0900 이렇게 뜸
// node.js 라서 2025-08-25T06:05:10.643Z 이렇게 뜬 것

/// 
console.log(now.toISOString().slice(0, 19).replace("T", " ")); 
//2025-08-25 06:06:53


// 2. 특정 날짜의 요일 *
const day = ["일", "월", "화", "수", "목", "금", "토"];
//const christmas = new Date(2025,12,25); // 틀림 -> 12월은 11로 작성해야 함
const christmas = new Date("2025-12-25"); //목요일(4)
//console.log(christmas.getDay()); 
console.log(day[christmas.getDay()]);


// 3. 월별 마지막 날짜 **
// 2025년 10월의 마지막 날짜
const date = new Date();
date.setFullYear(2025);
date.setMonth(9); // 10월
//console.log(date.setDate(0)); // 1759203974848 ..? -> 타임 스탬프?
date.setDate(0);
console.log(date.getDate()); //30 ???

///
const lastDate = new Date(2025, 10, 0).getDate(); // 2025-11-0 
// -> date를 0으로 맞추면 이전 달의 마지막 날이 됨
console.log(lastDate);


// 4. 날짜 차이 계산 * 
// 2025년 1월 1일과 2025년 12월 31일 사이의 일수
const startDate = new Date(2025,0,1);
const endDate = new Date(2025,11,31);
//const endDate = new Date(2026,0,0); 
const datediff = endDate - startDate;
const diffDays = datediff / (1000 * 60 * 60 * 24); 
console.log(diffDays); 


// 5. 생일 계산 ***
// 1990년 5월 15일 생일을 기준으로 현재 나이를 계산
const startDate1 = new Date(1990, 4, 15);
const endDate1 = new Date();
const datediff1 = endDate1 - startDate1;
const diffDays1 = datediff1 / (1000 * 60 * 60 * 24);
console.log(diffDays1); // ???????

/// (re)
const birthday = new Date(1990, 4, 15);
const today2 = new Date();
let age = today2.getFullYear() - birthday.getFullYear();
if( today < new Date(today2.getFullYear(), birthday.getMonth(), birthday.getDate())){
{
  age--;
}
console.log(age);
}


// 6. 날짜 추가 ***
// 현재 날짜에 10일을 추가한 날짜를 출력
// 오늘이 2025-10-31이라면 출력 결과는 
// 2025. 11. 10.
const nowPlus = new Date();
//nowPlus.setDate(-10); // 8/1로부터 -10
//nowPlus.setDate(+10); // 8/1로부터 +10
// 현재로부터는?
//nowPlus.getDate() + 10; 
nowPlus.setDate(nowPlus.getDate()+10);
console.log(nowPlus);
/// 출력 포맷팅 필요 (re)
console.log(
  `${nowPlus.getFullYear()}. ${String(nowPlus.getMonth()+1).padStart(2,"0")}.
    ${String(nowPlus.getDate().padStart(2,"0"))}.`
)

//////////////////////////////////////////////////////

// 7. 특정 날짜의 월과 연도
// 2025년 10월 30일의 월과 연도를 출력
// 예상 결과 : 2025, 10
const date2 = new Date("2025-10-30");
console.log(date2.getFullYear()); 
console.log(date2.getMonth()); // 0 -> 1, 9 -> 10
// 예상 결과 형식 맞춰야 함


// 8. 오늘의 시작 시간 ***
// 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 Date 객체를 출력
const today = new Date();
const startToZeroTime = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);
console.log(startToZeroTime);


// 9. 월별 요일 출력 ***
// 2024년 10월의 모든 날짜와 해당 요일을 출력
const Oct = new Date();
Oct.setMonth(9); // 10월
// for of ? :; 이터러블 객체는 array, set, map / date X
for (const day in Oct){
console.log(Oct);
}
 

// 10. 윤년 확인 ***
// 주어진 연도가 윤년인지 확인하는 함수를 작성
// (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
