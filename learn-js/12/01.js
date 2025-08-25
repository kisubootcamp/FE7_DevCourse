// 표준 내장 객체

//

// Math는 생성자가 아니기에, prototype이 없다.
// 정적 메세드 - static으로 정의되었는 유틸리티 객체

//

// 래퍼 객체 (Wrapper Object) (랩하는 객체 아님)
const num = 10.12;
console.log(num.toFixed());
console.log(new Number(10).toFixed(1));
// 래퍼 객체는 기본 타입을 객체로 감싸는 역할을 한다.
// 이는 자바스크립트 엔진이 알아서 처리

// string -> String
// number -> Number
// boolean -> Boolean
// symbol -> Symbol(ES6)
// bigint -> BigInt(ES11)

// null -> x
// undefined -> x

// 필요할 때 알아서 생성되고, 필요없을 때 알아서 제거한다.
// 개발자가 지정하지 않아도 되고 할 수도 없다.
