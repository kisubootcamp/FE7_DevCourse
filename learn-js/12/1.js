// 래퍼 객체(wrapper object)
// string -> String
// number -> Number
// boolean -> Boolean
// symbol -> Symbol(ES6)
// bigint -> BigInt(ES11)

// function Number(){
//   this.** = ...;
// }
// Number.prototype.toFixed = function(){}

const num = 10;
const numFromObj = new Number(10); // 생성자 함수
console.log(typeof numFromObj);
console.log(numFromObj + numFromObj);

const str = "A";
const strFromObj = new String("A");

console.log(str == strFromObj);
console.log(str === strFromObj);

console.log(typeof strFromObj);

const bool = true;
const boolFromObj = new Boolean(true);

new Array(10, "A"); // [10, "A"]

// null -> x
// undefined? -> x

// 자바스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 객체
// const num = 10.12; // ??? 이게 인스턴스 객체인가???
// console.log(num.toFixed(5));
// console.log(new Number(10).toFixed(1));
// console.log(undefined.ddd); // undefined

// const abc = "a.b.c"; // ???
// console.log(abc.split("."));

// 표준 내장 객체
// 얼핏 보면 생성자 함수(?)
// Number, String, Boolean -> 생성자 함수 처럼 사용할 수 있어 (생성자 함수 객체)
// Math, Date -> 생성자 함수처럼 사용할 수 없음(유틸리티 객체)
