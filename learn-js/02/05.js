// 5. 삼항 연산자
// ( * 실무에서 엄청 자주 사용 )
// 표현식 ? 참 : 거짓

/* 용어 정리
 : 콜론
 ; 세미콜론
 */

// 간단한 조건식에서 효율적인 사용이 가능
const myMoney = 5000;
const price = 3000;

const byeAble = myMoney >= price ? "살 수 있다" : "살 수 없다";
console.log(byeAble);

// 얼마든지 중첩 사용 가능
// but, 가독성 수직 하락
// * 실무 :: 2개 '이상' 중첩 금지 = 1개만 사용 = 중첩 금지
const score = 88;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);

// 연습 문제
// 1.
const num = 15;
const intJutge = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(intJutge);

// 2
const a = 5;
const b = 29;
const c = 23;
const mostBig = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log(mostBig);

// 3
const number = 33;
const oddJutge = number % 2 === 0 ? "Even" : "Odd";
console.log(oddJutge);
// 0과 음수는 여기서 고려하지 않음

// 4
const isLoggedIn = true;
//const boolJutge = isLoggedIn === true ? "Welcome" : "Please log in";
const boolJutge = isLoggedIn ? "Welcome" : "Please log in";
// 이것도 가능하다 :: 삼항연산자의 ? 좌항을 무조건 참/거짓으로 도출함
// true 대신 1을 넣어도 기능함
// ** 암시적 형변환 처럼 내부에서 암시적으로 실행되는 것 중 하나임
console.log(boolJutge);
// ** 0, false, null, undefined가 아니면 모두 참이다.

// 5
const age = 25;
const ageJutge = age >= 18 ? "Adult" : "Minor";
console.log(ageJutge);