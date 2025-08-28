// 03-6. 논리 연산자 연습 문제

// 1.
const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

// 2.
const x = 5;
const y = 10;
const z = 15;
//const numCheck_1 = x > 10 && y < 5;
//const numCheck_2 = x > 10 || z > 3;
//const zeroCheck = y !== 0;
//console.log(numCheck_1 ? "조건만족" : "조건불만족");
//console.log(numCheck_2 ? "조건만족" : "조건불만족");
//console.log(zeroCheck ? "0이아님" : "0임");
console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y !== 0); // 동등을 사용하지 않도록 주의

// 3.
const isLoggedIn = true;
const isAdmin = true;
// 굳이 추가 변수를 만들지 않아도 됨 :: console.log() 안에 바로 넣어 짧게
const LoggedInCheck = isLoggedIn ? "Welcome" : "Please log in";
const AdminCheck = isAdmin ? "Admin access granted" : "Admin access denied";
console.log(LoggedInCheck);
console.log(AdminCheck);
const check =
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access";
console.log(check);

// 4. (retry)
// false, 0, "", null, undefined, NaN
const value1 = 0;
const value2 = null;
console.log(value1 || value2 ? "값이 존재함" : "값이 존재하지 않음");
console.log(
  value1 === false && value2 === false
    ? "값이 존재하지 않음"
    : "값이 하나라도 존재함"
);

// 5.
const num = 56;
const numCheck_3 = num >= 0 && num <= 100;
console.log(numCheck_3);
const numCheck_4 = num < 0 || num > 100;
console.log(numCheck_4);
// JS에서 0 <= num <= 100 은 존재하지 않음

// 산술 연산자 보충 설명
// ** 덧셈 연산을 제외한 모든 연산은 암시적 형변환
console.log(10 / "2");
// 덧셈 제외의 이유 : 덧셈 (1) 숫자 더함, (2) 문자열 연결 연산자 -> 암시적 형변환 아닌 문자열 연결 실행

// NaN, Not a Number : 수학적 계산 시도, 피연산자가 숫자가 아닐 때

// 문자열 : "" 혹은 ''로 둘러쌓인 값
// 템플릿 문자열 : 백틱 기호로 둘러쌓인 값
// 차이점 : 템플릿 문자열은 변수를 안에서 치환 가능 -> 문자열 조합 시 용이
// 문자열 조합 아니면 문
const uname = "철수";
const greet = "안녕~" + uname; //안녕~철수
const greet2 = `안녕~$%(uname)`; //안녕~철수
