//Date 객체 연습문제
// ### 문제 1: 현재 날짜 출력
// **설명**: 현재 날짜와 시간을 `YYYY-MM-DD HH:mm:ss` 형식으로 출력하세요.

// **예상 결과**:
const now = new Date();
console.log(now.toISOString().slice(0,19).replace("T"," ")); //국제 표준



// ### 문제 2: 특정 날짜의 요일
// **설명**: 2025년 12월 25일이 무슨 요일인지 출력하세요.
// **예상 결과**:

const now = new Date(2025, 11, 25);
console.log(now.toLocaleString('ko-KR', {weekday:'long'}));


// ### 문제 3: 월별 마지막 날짜

// **설명**: 2025년 10월의 마지막 날짜를 구하세요.

// **예상 결과**:

const lastDate = new Date(2025, 10, 0).getDate(); //date를 0으로 맞추면 전 달의 마지막 날이 된다.
console.log(lastDate);

// ### 문제 4: 날짜 차이 계산

// **설명**: 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.

// **예상 결과**:

const Date1 = new Date(2025, 0, 1);
const Date2 = new Date(2026, 0, 0);
const datediff = Date2 - Date1;
const diffDays = datediff / (1000 * 60 * 60 * 24); //남은 일
console.log(diffDays); //364




// ### 문제 5: 생일 계산

// **설명**: 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.

// **예상 결과**:
const birth = new Date(1990, 5, 15);
const now = new Date();
const datediff = now - birth;
const diffYears = datediff / (1000* 60*60*24*365);
console.log(Math.round(diffYears)); 


// ### 문제 6: 날짜 추가

// **설명**: 현재 날짜에 10일을 추가한 날짜를 출력하세요.

// **예상 결과**: 현재 날짜 + 10일 


// 오늘이 2025-10-31이라면 출력 결과는 
const now = new Date(2025, 10, 0);
//const newNow = now + (1000* 60*60*24*10);
now.setDate(now.getDate()+10)
console.log(`${now.getFullYear()}. ${now.getMonth()}. ${now.getDay()}`);



// ### 문제 7: 특정 날짜의 월과 연도

// **설명**: 2025년 10월 30일의 월과 연도를 출력하세요.

// **예상 결과**:
const now = new Date(2025, 10, 30);
console.log(`${now.getFullYear()} ${now.getMonth()}`);


// ### 문제 8: 오늘의 시작 시간

// **설명**: 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 `Date` 객체를 출력하세요.

// **예상 결과**:

const now = new Date();
now.getFullYear(0);
now.setSeconds(0);
console.log(now.toISOString().slice(0,19).replace("T"," ")); //국제 표준




// const today = new Date();
// const startToZeroTime = new Date(
//   today.getFullYear(),
//   today.getMonth(),
//   today.getDate()
// );
// console.log(startToZeroTime);



// ### 문제 9: 월별 요일 출력

// **설명**: 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.

// **예상 결과**:

const lastDate = new Date(2024, 10, 0).getDate;

for(let i =1; i<lastDate; i++){
  const date = new Date(2025, 9 ,i);
  const weekday = now.toLocaleString('ko-KR', {weekday:'long'});
  console.log( `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}: ${weekday}`);
}




// ### 문제 10: 윤년 확인

// **설명**: 주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)

// **예상 결과*

const isLeapYear = (year) => 
  (year % 4 === 0 && year % 100 !== 0 || year % 400 ===0;

    [2024, 2025].forEach((year) => 
      console.log(`${year}: ${isLeapYear(year) ? "윤년" : "평년"}`)
    );

  );


2024: 윤년
2023: 평년
