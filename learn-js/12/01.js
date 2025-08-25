// 래퍼 객체 (wrapper object)
// 자바스크립트의 기본 값을 사용할 때, 일시적으로 해당 타입에 해당하는 객체로 감싸주는 객체.

const num2 = 10.12; // 이게 왜ㅑ 인스턴스 객체???? 이거갖고 조작하는 순간 new Number(10.12) 라고 한거랑 똑같음
console.log(num2.toFixed(5));
console.log(new Number(10).toFixed(1));
// 기본자료형의 값을 객체처럼 다루고자할 때 자바스크립트 엔진이 암묵적으로 수행해주는 동작

// 기본자료형 -> 표준내장객체
// string  -> String
// number  -> Number
// boolean -> Boolean
// symbol  -> Symbol   (ES6)
// bigint  -> BigInt   (ES11)

// 이르케 가능함
const abc = "a.b.c"; // 이건 문자열인데 왜 split을 사용할 수 있는가?? 일시적인 래퍼객체로 감싸서 그 객체의 인스턴스처럼 사용할 수 있기 때문
console.log(abc.split("."));

// 기본자료형에  null undefined도 있지않나욧? 얘는 객체처럼 사용할 수 엄슴. 대응되는 표준내장객체 X

// 위에 선언한 num 예시로 들자
console.log(num2.ddd); // 이거 선언도 왜 안했는데 undefined가 나옴?
// 왜 그러냐면 .ddd로 접근하면 num이 객체여야함. 그래서 num을 인스턴스 객체로 만들고 고 속성을 탐색함
// 근데 선언이 안되어있짜나? 그래서 undefined로 나옴

const num = 10;
const numFromObj = new Number(10);
console.log(num, numFromObj); // 10 [Number: 10] 이렇게 출력되는데 numFromObj에 연산하면 잘 됨
// 그런데? 이게 같냐? 그건아님
console.log(num == numFromObj) // 암묵적인 형변환을 통해 인스턴스 객체 값을 기본형으로 바꾸고 비교
console.log(num === numFromObj) // 어쨌든 numFromObj는 인스턴스 객체니까 num이랑 다름

const str = "A";
const strFromObj = new String("A");

const bool = true;
const boolFromObj = new Boolean(true);

const bigInt = BigInt(123);


// 표준 내장 객체
// 얼핏 보면 생성자 함수 같은데?????????
// Number, String, Boolean -> 생성자 함수처럼 사용가능. 생성자 함수 객체
// Math, Date -> 생성자 함수처럼 사용 불가. 유틸리티 객체
// 요 두가지를 표준 내장 객체라고 합니다