// 문제 1: 주말 확인

function isWeekend(str) {
    const date = new Date(str);
    if (date.getDay() === 0 || date.getDay() === 6) {
        return "주말";
    }
    return "평일";
}

console.log(isWeekend('2024-10-26')); // 주말
console.log(isWeekend('2024-10-29')); // 평일
console.log(isWeekend('2024-10-27')); // 주말

// 문제 2: 두 날짜의 주차 수 계산
function weeksBetween(str1, str2) {
    const date1 = new Date(str1);
    const date2 = new Date(str2);
    const diff = Math.round((date2 - date1) / (1000 * 60 * 60 * 24 * 7));
    return diff + "주";
}

console.log(weeksBetween('2024-01-01', '2024-02-01')); // 4주
console.log(weeksBetween('2024-01-01', '2024-04-01')); // 13주
console.log(weeksBetween('2024-06-01', '2024-08-01')); // 8주

// 문제 3: 다음 생일 계산
function daysUntilNextBirthday(birth) {
    const birthDate = new Date(birth);
    const now = new Date();
    const nextBirthDate = new Date(now.getFullYear()+1, birthDate.getMonth(), birthDate.getDate());
    const diff = Math.ceil((nextBirthDate - now) / (1000 * 60 * 60 * 24)) % 365;
    return diff;
}

console.log(daysUntilNextBirthday('1990-05-15')); // 263
console.log(daysUntilNextBirthday('2000-12-31')); // 128
console.log(daysUntilNextBirthday('1985-08-25')); // 0

// 문제 4: 특정 월의 주 수
function weeksInMonth(year, month) {
    const dayStart = new Date(year, month, 1);
    console.log(dayStart.getFullYear(), dayStart.getMonth() + 1, dayStart.getDate());
    const dayEnd = new Date(year, month+1, 1);
    console.log(dayEnd.getFullYear(), dayEnd.getMonth() + 1, dayEnd.getDate());
    const diff = Math.floor((dayEnd - dayStart) / (7 * 24 * 60 * 60 * 1000)); 
    return diff + "주";
}

console.log(weeksInMonth(2024, 0)); // 5주
console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
console.log(weeksInMonth(2024, 6)); // 5주

// 문제 5: 특정 날짜에서의 일요일 찾기

function previousSunday(date) {
    const day = new Date(date);
    for (let i = 1; ; i++) {
        let day2 = new Date(day - i * 24 * 60 * 60 * 1000);
        if (day2.getDay() === 0) {
            return `${day2.getFullYear()}-${day2.getMonth()+1}-${day2.getDate()}`;
        }
    }
}

console.log(previousSunday('2024-10-30')); // 2024-10-27
console.log(previousSunday('2024-10-26')); // 2024-10-20
console.log(previousSunday('2024-10-29')); // 2024-10-27

// 문제 6: 해당 연도의 마지막 날
const day = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
function lastDayOfYear(year) {
    const last = new Date(year, 11, 31);
    last.date = `${year}. ${last.getMonth()+1}. ${last.getDate()}.`;
    last.weekday = day[last.getDay()];
    return last;
}

const result = lastDayOfYear(2024);
console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일

// 문제 7: 생일 중복 확인
function isSameBirthday(date1, date2) {
    const day1 = new Date(date1);
    const day2 = new Date(date2);
    if (day1.getMonth() === day2.getMonth() && day1.getDate() === day2.getDate()) return "같은 날입니다.";
    return "다른 날입니다.";
}

console.log(isSameBirthday('2024-05-15', '2020-05-15')); // 같은 날입니다.
console.log(isSameBirthday('2024-05-15', '2020-05-25')); // 다른 날입니다.

// 문제 8: 월별 평균 일수 계산
function averageDaysInYear(year) {
    let avr = [];
    for (let i = 1; i <= 12; i++) {
        const date = new Date(year, i, 0);
        avr.push(date.getDate());
    }
    return avr;
}

console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);

// 문제 9: 연도의 첫 번째 월요일 찾기
function firstMondayOfYear(year) {
    const date = new Date(year, 0, 1);
    for (let i = 0; i < 7; i++) {
        date.setDate(date.getDate() + i);
        if (date.getDay() === 1) return `${year}년 첫 번째 월요일: ${year}. ${date.getMonth()+1}. ${date.getDate()}.`;
    }
}

const firstMonday = firstMondayOfYear(2024);
console.log(firstMonday); // 2024년 첫 번째 월요일: 2024. 01. 01.