//래퍼 객체(wrapper object)
//자바 스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 객체
//객체가 아닌 것을 객체처럼 사용할 수 있도록!
//자바스크립트 엔진이 알아서 생성 및 삭제.
//string -> String
//number -> Number
//boolean -> Boolean
//symbol -> Symbol (ES6)
//bigint -> Bigint (ES11)

const num = 10.12; //인스턴스 객체?
console.log(num.toFixed(5));
console.log(new Number(10).toFixed(1));
console.log(null.ddd); // null과 undefined는 대응되는 객체가 없어서 불가능

const abc = "a.b.c";
console.log(abc.split("."));

const num1 = 10;
const numFromObj = new Number(10);

console.log(typeof numFromObj);
console.log(str === strFromObj); //데이터 타입까지 비교

const str = "A";
const strFromObj = new String("A");

console.log(str == strFromObj);
console.log(str === strFromObj); //데이터 타입까지 비교

const bool = true;
const boolFromBoolean = new Boolean(true);

//표준 내장 객체
//얼핏 보면 생성자 함수
//Number, String, Boolean -> 생성자 함수 처럼 사용할 수 있어 (생성자 함수 객체)
//Math, Data -> 생성자 함수 처럼 사용할 수 없음 (유틸리티 객체)
