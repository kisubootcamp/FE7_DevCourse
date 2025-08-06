// 1. 자료형(Data Type, 값의 종류, 값의 타입, 데이터의 종류)
// 1.1 기본자료형
// 1.1.1 숫자형
// 1.1.2 문자열형
// 1.1.3 논리형
// 1.1.4 심볼형(ES6)
// 1.1.5 undefined
// 1.1.6 null
// 1.1.7 BigInt(ES11)

// 1.2 참조자료형
// 1.2.1 배열
const mathScore =  90;
const engScore =  40;
const korScore = 20;
const scienceScore = 100;
// 수학, 영어, 국어, 과학
const scores = [90, 40, 20, 100];
console.log(scores[0]);
console.log(scores[3]);
console.log(scores[10]); // 오류
// 1.2.2 객체

// ※파스칼케이스 - 모든 단어의 첫글자가 대문자, UserName(user, name) 
// 스네이크케이스 - 단어를 연결할 때는 _, user_name
// 케밥케이스 - 단어를 연결할 때 -, user-name
// ※카멜케이스 - 연결된 단어의 첫글자는 대문자, userName / defauult

const scoreObj = {
    mathScore: 90,
    engScore: 40,
    korScore: 20,
    scienceScore: 100,
};
console.log(scoreObj["mathScore"]); 
console.log(scoreObj.scienceScore); // 일반적으로 . 연산자 접근

// 1.2.3 함수
// function
function sum() {}


// 1. 변수 타입 확인
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];
console.log(typeof num);     // number
console.log(typeof name);    // string
console.log(typeof isTrue);  // boolean
console.log(typeof person);  // object
console.log(typeof fruits);  // object 설계상 오류
console.log(typeof null); // object 설계상 오류

// 2. 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요
let length = 16; // number
let lastName = "Brown"; // string
let score = [10, 20]; // object
let x = {
  firstName: "Nick",
  lastName: "Doe"
}; // object