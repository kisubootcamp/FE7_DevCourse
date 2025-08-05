// 인터프리터언어 -> 코드가 한줄씩 실행 (javascript, html)
// 컴파일 언어 -> 코드가 한번에 해석됭서 실행 (java, c, c++)




// 자료형 (Data Type) : 값의 종류를 의미.

// ------------[기본자료형]------------
// 숫자형
// 말 그대로 숫자를 의미
// 10, 20, -110, ...
const dataTypeNum = 10;

// 문자열형 (문자열)
// 값이 큰따옴표(")나 작은따옴표('), 백틱(`)으로 둘러싸인 값을 의미
// "10", '10', `-0.1`
const dataTypeChar = "철수";

// 논리형
// true, 참 / false, 거짓 값 의미
const dataTypeBool = true;
const exBool = 10 > 20; // false

// 심볼형 (ES6)
// 유니크한 값, 어떤 의미를 가지고 있는 유니크한 값인지
const dataTypeSymb = Symbol("userId"); // 함수

// undefined (특수자료형)
let dataTypeUndi; // 정의가 되어있지않다? 변수 선언하고 어떠한 값도 할당하지 않았을 때
console.log(dataTypeUndi);

// null (특수자료형)
let dataTypeNull = null; // 의도적으로 비워두기? 추가적인 작업에 의해 데이터가 결정이 되면 그때 할당. 일시적으로 비워두겠다는 의미

// bigint
// BigInt(10)
const exBigInt1 = BigInt(9007199254740991n); // 일반적으로 적지못하는 아주 큰.. 어쩌고... 자바스크립트에서 안전하게 처리할 수 있는 숫자 한계가 있음
const exBigInt2 = BigInt(10n);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9007199254740991 + 10); // 더하기 잘 되는뎅.. 머지...
console.log(exBigInt1 + exBigInt2);
// console.log(exBigInt2 + 10); // 계산이 안댐



// ------------[참조자료형]------------
// 배열, 함수, 객체

// 배열: 대괄호([])로 둘러싸여진 값
// 값을 묶어줌
const dataTypeArr = [10, "A", null, Symbol(), undefined, BigInt(10n)];

// 객체: 중괄호({})로 둘러싸여진 값. 키와 값으로 구분
const dataTypeObj = {
    key: "value",
}

// 함수: function 키워드로 선언된 값
function dataTypeFunc() {}
// const dataTypeFunc = () => {}




// 연습문제쓰
// 변수 타입 확인
// 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];
console.log("num:숫자형")
console.log("name:문자열형")
console.log("isTrue:논리형")
console.log("person:객체형")
console.log("fruits:배열형")
​
// 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
let length = 16;  // 기본자료형
let lastName = "Brown";  // 기본자료형
let score = [10, 20]; // 참조자료형
let x = {
  firstName: "Nick",
  lastName: "Doe"
}; // 참조자료형