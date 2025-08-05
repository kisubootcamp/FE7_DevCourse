// 자료형(Data Type)
// 값의 종류를 의미함.

// [기본 자료형]
// 숫자형
// 말 그대로 숫자를 의미함,
// 10, 20, 0, -10, -20, 0.1, -0.1, 10e
const num = 10;

// 문자열형(문자열)
// 값이 큰따옴표나, 작은따옴표, 백틱으로 둘러 쌓여진 값을 의미함.
// "10", '0', `-0.1`
const uname = "철수";

// 논리형
// true(참), false(거짓) 값을 의미합니다.
const boolean = true;
const bool = 10 > 20; // false

// 심볼형(ES6)
// 유니크한 갑, 어떤의미를 가지고 있는 유니크한 값인지를
const symbol = Symbol("user id"); // 함수

// undefined (특수 자료형)
// const undi = undefined;
let undi;
console.log(undi);

// null (특수 자료형)
let nul = null;
// 추가적인 작업에 의해서 데이터가 결정이 되면 그 때 할 당할 거야.

// bigint
// BigInt(10)
const aBig = BigInt(9007199254740991n);
const bBig = BigInt(10n);

console.log(aBig + bBig);
console.log(9007199254740991 + 10);
// console.log(Number.MAX_SAFE_INTEGER);

// [참조 자료형]
// 배열, 함수, 객체
// [] -> 대괄호
// () -> 소괄호
// {} -> 중괄호

// 배열, 대괄호로 둘러쌓여진 값
// 값을 묶어줌
const arr = [10, "A", null, Symbol(), undefined, BigInt(10n)];

// 객체, 중괄호로 둘러 쌓여진 값, 키와 값으로
const obj = {
  key: "value",
};

// 함수, function 키워드로 선언된 값
function sum() {}
