//기본 자료형 7개, 참조 자료형 3개. 총 10개의 자료형이 있다.

//숫자형
const i = 10;

//문자열 형
const uname = "철수";

//논리형 참 거짓
const boolean = true;
const bool = 10 > 20; //false

//심볼형(ES6) 유니크한 값을 만들 수 있음.
const symbol = Symbol("user id");

//undefined 자바스크립트 엔진이 다루는 값
let undi;
console.log(undi);

//NULL
let nul = null;

//bigint js에서 표현할 수 없는 값 이상의 값을 안전하게 표현 가능
const big = BigInt(10n);

//참조 자료형: 배열, 함수. 객체. 값을 묶어준다.

//배열
const arr = [18, "a", undefined];
const testScore = [20, 30, 100];
console.log(testScore[2]);

//객체
//키(key)와 값(value)으로 구성된 객체들의 집합
//객체의 키 값은 문자열 형태.
//대괄호 연산자, 마침표 연산자.

//파스칼 케이스 - 모든 단어의 첫글자가 대문자: UserName ex) 생성자 함수, 클래스 정의 시 사용.
//스네이크 케이스 - 단어를 연결할 때 '_': user_name
//케밥 케이스 - 단어를 연결할 때 '-': user-name
//카멜 케이스 - 연결된 단어의 첫글자를 대문자: userName

const obj = {
  key1: 1,
  key2: 2,
};

console.log(obj["key1"]); //대괄호 연산자
console.log(obj.key1); // 마침표 연산자

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
