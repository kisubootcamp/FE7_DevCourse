// 래퍼 객체 (wrapper object)
// new 키워드로 생성 가능
// string -> String
// number -> Number
// boolean -> Boolean

// symbol -> Symbol(Es6)
// bigint -> BigInt(ES11)

const num2 = 10;
const numFromObj = new Number(10);
console.log(num2, numFromObj); // 10 [Number: 10]
console.log(typeof numFromObj); // Object

const str = "A";
const strFromObj = new String("A");

console.log(str == strFromObj); // true
console.log(str === strFromObj); // false

const bool = true;
const boolFromBoolean = new Boolean(true);

// null -> x
// undefined -> x
// 객체처럼 사용 불가

// 자바스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 객체

const num = 10.12; // 숫자형 값으로, 인스턴스 객체 아님
console.log(num.toFixed(1));
console.log(new Number(10).toFixed(1));
console.log(num.ddd);

const abc = "a.b.c"; // 기본 자료형을 래퍼 객체로 감싸서 인스턴스 객체처럼 사용할 수 있게 해줌줌
console.log(abc.split("."));


// 표준 내장 객체
// Numnber, String, Boolean -> 생성자 함수처럼 사용할 수 있음
// Math, Date -> 생성자 함수처럼 사용할 수 있음


