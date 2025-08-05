//기본 자료형 7개, 참조 자료형 3개. 총 10개의 데이터 종류가 있다.

//숫자
const i = 10;

//문자열 형
const uname = "철수";

//논리형 참 거짓
const boolean = true;
const bool = 10 > 20; //false

//심볼형
const symbol = Symbol("user id");

//특수 자료형
let undi;
console.log(undi);

let nul = null;

//bigint js에서 표현할 수 없는 값 이상의 값을 표현 가능
const big = BigInt(10n);

//참조 자료형: 배열, 함수. 객체. 값을 묶어준다.
const arr = [18, "a", undefined];

//객체
const obj = {
  key1: 1,
  key2: 2,
};

//함수
function sum() {}

//연습문제 1
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];

console.log(typeof num);
console.log(typeof name);
console.log(typeof isTrue);
console.log(typeof person);
console.log(typeof fruits);

//연습문제 2
let length = 16; //  number
let lastName = "Brown"; //string
let score = [10, 20]; //object
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; // object

console.log(typeof length);
console.log(typeof lastName);
console.log(typeof score);
console.log(typeof x);
