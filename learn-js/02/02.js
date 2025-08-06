/*
산술 연산자
수학적인 계산

+ - * / % **

연산자 우선 순위
1. 소괄호 

console.log(0.1 + 0.2) // 부동 소수점 (2진수) 형식을 사용하기 때문에 안 됨

    해결책
    1. Decimal.js
    2. 정수로 만들고 나누기


증감연산자
++, --

전치, 후치 주의하기.
a++, a-- : 후치. 이 줄 실행한 후에
++a, --a : 전치. 이 줄 실행하기 전에


복합 대입 연산자 : 산술 + 대입
+=, -=, *=, /=, %=
*/

//연습문제

let x = 20;
x += 10;
console.log(x);
x -= 5;
console.log(x);
x /= 2;
console.log(x);
x *= 3;
console.log(x);

/* 
비교 연산자
동등 == ,일치 === , !=, !==, >, <, <=, >=
동등 -> 피연산자들의 데이터 비교
일치 -> 피연산자들의 데이터 + 타입 값 비교

*** 실무에서는 동등 사용 안하고 일치, 불일치만 사용!!!


삼항연산자
표현식 ? 참 : 거짓
    -> 중첩가능. 근데 가독성 떨어짐
*/
//연습문제

let num = -1;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

let a = 5;
let b = 6;
let c = 3;

console.log(a > b ? (a > c ? a : c) : b > c ? b : c);

let number = 1;
console.log(number % 2 === 0 ? "Even" : "Odd");

let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please log in");

let age = 26;
console.log(age >= 18 ? "Adult" : "Minor");

/*
& : 앤드기호, 앰퍼센드
| : 짝대기, 파이프
앤드 연산자, &&
오알 연산자, ||
부정 연산자, !
*/

// ** 변수가 True 인지, False인지 바로 출력하는 법
const x1 = 10;
console.log(!!x1);
