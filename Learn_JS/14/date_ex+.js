// ### 문제 1: 주말 확인

// **설명**: 주어진 날짜가 주말(토요일 또는 일요일)인지 확인하는 함수를 작성하세요.

// **예상 결과**:
function isWeekend(dateString) {
  const date = new Date(dateString);
  const day = date.getDay();
  if (day === 0 || day === 6) {
    return '주말';
  } else {
    return '평일';
  }
}
console.log(`2024-10-26: ${isWeekend('2024-10-26')}`);
console.log(`2024-10-30: ${isWeekend('2024-10-30')}`);
console.log(isWeekend('2024-10-26'));
console.log(isWeekend('2024-10-29'));
console.log(isWeekend('2024-10-27'));
// ```
// 2024-10-26: 주말
// 2024-10-30: 평일
// ```

// ```jsx
// console.log(isWeekend('2024-10-26')); // 주말
// console.log(isWeekend('2024-10-29')); // 평일
// console.log(isWeekend('2024-10-27')); // 주말
// ```

// ---

// ### 문제 2: 두 날짜의 주차 수 계산

// **설명**: 두 날짜 사이의 주차 수를 계산하는 함수를 작성하세요.

// **예상 결과**:
function weeksBetween(date1, date2) {
  const startDate = new Date(date1);
  const endDate = new Date(date2);
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${Math.floor(diffDays / 7)}주`;
}
console.log(`2024-01-01 ~ 2024-02-01: ${weeksBetween('2024-01-01', '2024-02-01')}`);
console.log(weeksBetween('2024-01-01', '2024-02-01'));
console.log(weeksBetween('2024-01-01', '2024-04-01'));
console.log(weeksBetween('2024-06-01', '2024-08-01'));
// ```
// 2024-01-01 ~ 2024-02-01: 4주
// ```

// ```jsx
// console.log(weeksBetween('2024-01-01', '2024-02-01')); // 4주
// console.log(weeksBetween('2024-01-01', '2024-04-01')); // 13주
// console.log(weeksBetween('2024-06-01', '2024-08-01')); // 8주
// ```

// ---

// ### 문제 3: 다음 생일 계산

// **설명**: 주어진 생일을 기준으로 다음 생일까지의 일수를 계산하세요.

// **예상 결과**:
function daysUntilNextBirthday(birthday) {
  const today = new Date();
  const birthDate = new Date(birthday);
  let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = nextBirthday.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays}일 남음`;
}
console.log(`1990-05-15: ${daysUntilNextBirthday('1990-05-15')}`);
console.log(`1990-05-15: ${daysUntilNextBirthday('1990-05-15')}`);
console.log(`2000-12-31: ${daysUntilNextBirthday('2000-12-31')}`);
console.log(`1985-08-25: ${daysUntilNextBirthday('1985-08-25')}`);
// ```
// 1990-05-15: 200일 남음
// ```

// ```jsx
// console.log(daysUntilNextBirthday('1990-05-15')); // 166일 (2024년 기준)
// console.log(daysUntilNextBirthday('2000-12-31')); // 62일 (2025년 기준)
// console.log(daysUntilNextBirthday('1985-08-25')); // 270일 (2024년 기준)
// ```

// ---

// ### 문제 4: 특정 월의 주 수

// **설명**: 주어진 연도와 월의 주 수를 계산하세요.

// **예상 결과**:
function weeksInMonth(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const dayOfWeek = firstDay.getDay();
  const numDays = lastDay.getDate();

  let weeks = Math.floor((numDays + dayOfWeek) / 7);
  if ((numDays + dayOfWeek) % 7 !== 0) {
    weeks++;
  }
  return `${weeks}주`;
}
console.log(`2024년 10월: ${weeksInMonth(2024, 9)}`);
console.log(weeksInMonth(2024, 0));
console.log(weeksInMonth(2024, 1));
console.log(weeksInMonth(2024, 6));
// ```
// 2024년 10월: 5주
// ```

// ```jsx
// console.log(weeksInMonth(2024, 0)); // 5주
// console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
// console.log(weeksInMonth(2024, 6)); // 5주
// ```

// ---

// ### 문제 5: 특정 날짜에서의 일요일 찾기

// **설명**: 주어진 날짜에서 가장 가까운 이전 일요일의 날짜를 출력하세요.

// **예상 결과**:
function previousSunday(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() - date.getDay());
  return date.toISOString().split('T')[0];
}
console.log(`2024-10-30의 이전 일요일: ${previousSunday('2024-10-30')}`);
console.log(previousSunday('2024-10-30'));
console.log(previousSunday('2024-10-26'));
console.log(previousSunday('2024-10-29'));
// ```
// 2024-10-30의 이전 일요일: 2024-10-27
// ```

// ```jsx
// console.log(previousSunday('2024-10-30')); // 2024-10-27
// console.log(previousSunday('2024-10-26')); // 2024-10-20
// console.log(previousSunday('2024-10-29')); // 2024-10-27
// ```

// ---

// ### 문제 6: 해당 연도의 마지막 날

// **설명**: 주어진 연도의 마지막 날의 날짜와 요일을 출력하세요.

// **예상 결과**:
function lastDayOfYear(year) {
  const date = new Date(year, 11, 31);
  const weekdays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\. /g, '.');
  const weekday = weekdays[date.getDay()];
  return { date: formattedDate, weekday: weekday };
}
const result = lastDayOfYear(2024);
console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`);
// ```
// 2024년 마지막 날: 2024. 12. 31. 화요일
// ```

// ```jsx
// const result = lastDayOfYear(2024);
// console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일
// ```

// ---

// ### 문제 7: 생일 중복 확인

// **설명**: 두 사람의 생일이 같은 날인지 확인하는 함수를 작성하세요.

// **예상 결과**:
function isSameBirthday(birthday1, birthday2) {
  const date1 = new Date(birthday1);
  const date2 = new Date(birthday2);
  if (date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()) {
    return '같은 날입니다.';
  } else {
    return '다른 날입니다.';
  }
}
console.log(`2024-05-15와 1990-05-15: ${isSameBirthday('2024-05-15', '1990-05-15')}`);
console.log(isSameBirthday('2024-05-15', '2020-05-15'));
console.log(isSameBirthday('2024-05-15', '2020-05-25'));
// ```
// 2024-05-15와 1990-05-15: 같은 날입니다.
// ```

// ```jsx
// console.log(isSameBirthday('2024-05-15', '2020-05-15')); // 같은 날입니다.
// console.log(isSameBirthday('2024-05-15', '2020-05-25')); // 다른 날입니다.
// ```

// ---

// ### 문제 8: 월별 평균 일수 계산

// **설명**: 주어진 연도에 대한 각 월의 평균 일수를 출력하세요.

// **예상 결과**:
function averageDaysInYear(year) {
  const daysInMonths = [];
  for (let month = 0; month < 12; month++) {
    const lastDay = new Date(year, month + 1, 0).getDate();
    daysInMonths.push(lastDay);
  }
  return daysInMonths;
}
console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);
// ```
// 2024년 각 월의 평균 일수: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// ```

// ```jsx
// console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);
// ```

// ---

// ### 문제 9: 연도의 첫 번째 월요일 찾기

// **설명**: 주어진 연도의 첫 번째 월요일의 날짜를 출력하세요.

// **예상 결과**:
function firstMondayOfYear(year) {
  const date = new Date(year, 0, 1);
  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1);
  }
  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\. /g, '. ');
  return `${year}년 첫 번째 월요일: ${formattedDate}`;
}
const firstMonday = firstMondayOfYear(2024);
console.log(firstMonday);
// ```
// 2024년 첫 번째 월요일: 2024. 01. 08.
// ```

// ```jsx
// const firstMonday = firstMondayOfYear(2024);
// console.log(firstMondayOfYear); // 2024년 첫 번째 월요일: 2024. 01. 08.
// ```

// ---