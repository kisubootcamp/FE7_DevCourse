// 래퍼 객체(wrapper object)
// string -> String
// number -> Number
// boolean -> Boolean
// symbol -> Symbol(ES6)
// bigint ->BigInt(ES11)

const num = 10;
const numFromObj = new Number(10);

const str = 'A';
const strFromObj = new String('A');

console.log(str == strFromObj);
console.log(str === strFromObj);

console.log(typeof strFromObj);

const bool = true;
const boolFromBoolean = new Boolean(true);

// null -> x
// undefined -> x

// 자바스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 개겣
// const num = 10.12;
// console.log(num.toFixed(0));
// console.log(new Number(10).toFixed(1));
// console.log(true.ddd);

// 표준 내장 객체
// 얼핏 보면 생성자 함수 (?)
// Number, String, Boolean -> 생성자 함수 처럼 사용할 수 있음(생성자 함수 객체)
// Math, Date -> 생성자 함수처럼 사용할 수 없음(유틸리티 객체)
