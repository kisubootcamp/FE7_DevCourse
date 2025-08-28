// 14. 표준 내장 객체
// javascript built in objects (mdn)
// 강의노트 참고

/*
표준 내장 객체는 자바스크립트 엔진에 기본으로 내장되어있는 객체를 말합니다. 
표준 내장 객체는 자바스크립트 엔진에 상시적으로 존재하기 때문에 
항상 언제 어디서든 활용할 수 있습니다.
*/

// 주의 : 메서드를 너무 많이 쓰면 프로그래밍적 사고를 할 기회가 적어진다
// ㄴ 안 쓰라는 말은 아님, 적절히 써서 손해안보면서, 공부 하기 위해 덜 쓰면서 

// 다음 9가지는 최소한 꼭 알고 있을 것 (다른건 필요할 때마다 문서 참고)
/*
1.Object / 2.Function / 3.Array
4.String / 5.Boolean / 6.Number
7.Math / 8.Date / 9.RegEXP
*/

// 1. 래퍼 객체(wrapper object)
// 자바스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 객체
// 일시적으로 생성 후, 조작이 끝나면 사라짐, JS가 알아서 객체화 시켜서 사용해주는 것, 개발자 다룰 수 x

const num = 10.12; // ??? 이게 인스턴스 객체인가?
console.log(num.toFixed(5)); // toFixed는 number의 프로토타입이 가진 

console.log(new Number(10).toFixed(1));
// 래퍼객체가 생성됨 -> 인스턴스 객체처럼 접근 가능해짐

// 좌측 값이 일시적으로 우측 객체처럼 동작
/*
// string -> String
// number -> Number
// boolean -> Boolean
// symbol -> Symbol(ES6)
// bigint -> BigInt(ES11)
*/
// null, undefined -> x

const abc = "a.b.c";
console.log(abc.split("."));
console.log(abc.split("'")); // hum..?

// 객체는 없는 속성에 접근하면 undefined
console.log(num.ddd); //undefined
// 래퍼 객체에 의해 Number의 인스턴스 객체처럼 num을 만들어줌, 그리고 Number 안에 ddd가 있는지 확인
// 그래서 ddd 속성이 없으니까 undefined를 출력?

console.log(null.ddd); //error
console.log(undefined.ddd); //error

// 실무에서는 리터럴 표기법으로.

// 표준 내장 객체
// 얼핏 보면 생성자 함수 같다?
// Number, String, Boolean -> 생성자 함수 처럼 사용 가능 (생성자 함수 객체)
// Math, Date -> 생성자 함수 처럼 사용할 수 없음 (유틸리티 객체)
// :: 표준 내장 객체 = 생성자 함수 객체 + 유틸리티 객체