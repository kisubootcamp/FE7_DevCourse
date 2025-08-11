<<<<<<< HEAD
// WEB API ->
// BOM, DOM

// defer와 async는 외부 스크립트만 사용할 수 있다.

// 연습 문제 1.
const x = 10;
const y = 20;

const sum = x + y;
console.log(`x + y = ${sum}`); // x + y = 30

// 연습 문제 2.
let name = "Alice";
name = "Bob";
console.log(name); // Bob

// 연습 문제 3.
const pi = 3.14;
console.log(pi);

// 연습 문제 4.
let [a, b] = [5, 10];
[a, b] = [b, a]; // a와 b의 값을 교환
console.log(`a = ${a}, b = ${b}`); // a = 10, b = 5

// 연습 문제 4. 풀이 2.
let [c, d] = [5, 10];
let temp = c;
c = d;
d = temp; // a와 b의 값을 교환
=======
// 상수 변하지 않는 수
// 키워드 : const
// 식별자 : num
// 연산자 : =, +
// 피연산자: 연산자의 연산 대상이 되는 것(ex, num or 10 + 20)
// 표현식 : 10 + 20
// 값 : 30
const num = 10 + 20; // 30

// var, let 키워드만 가능
// const 선언과 할당이 동시에 이루어 져야 합니다.
// 선언
let num2;

// 할당
num2 = 10;
const MAX = 99;
>>>>>>> FE7_kisu
