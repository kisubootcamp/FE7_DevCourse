// 래퍼 객체(wrapper object)
// string -> String
// number -> Number
// boolean -> Boolean
// symbol -> Symbol (ES6)
// bigint -> BigInt (ES11)

// null -> x
// undefined -> x

// 자바스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 객체
const num = 10.12;
console.log(num.toFixed(5));
console.log(new Number(10).toFixed(1));

const abc = "a.b.c";
console.log(abc.split("."));

// 1. 표준 내장 메서드
// 1.1 파괴적 메서드
// 1.1.1 메서드의 실행 결과가 원본 데이터를 변경시킬 때

// 1.2 비파괴적 메소드
// 1.2.1 메서드의 실행 결과가 원본 데이터를 변경시킬
