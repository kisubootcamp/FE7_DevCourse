// 자료형(Data Type)
// 값의 종류를 의미함.

// [기본 자료형]
// 숫자형(말 그대로 숫자를 의미.): 10, 20, 0, -20, 0.1, 10e
const num = 10;

// 문자열형(문자열)
// 값이 큰따옴표나, 작은따옴표, 백틱으로 둘러 쌍혀진 값을 의미함.
// "10", '0', `-0.1`
const uname = '철수';

// 논리형
// true, false 값을 의미함.
const bollean = true;
const bool = 10 > 20; // false

// 심볼형(ES6)
// 유니크한 값.
const symbol = Symbol(''); // 함수

// undefined (특수 자료형)
let undi;
console.log(undi); // undefined

// null (특수 자료형)
let nul = null;
// 추가적인 작업에 의해서 데이터가 결정이 되면 그 때 할당할 예정일 때.

// bigint (아주 큰 숫자는 js가 안전하게 처리할 수 없기에 큰 정수를 bigint로 관리.)
// bigint 리터럴 방식 ( 뒤에 n 붙히면 됨. )
const big1 = 123456789012345678901234567890n;

// bigint 생성자 방식 ( BigInt("")사용하면 됨. )
const big2 = BigInt('123456789012345678901234567890');

// [참조 자료형]
// 배열, 함수, 객체

// 배열 (대괄호에 둘러싸여진 값.)
// 값을 묶어줌.
const arr = [10, 'A', null, Symbol(), undefined, BigInt(10n)];

// 객체 (중괄호로 둘러 쌓여진 값, 키와 값으로)
const obj = {
  key: 'value',
};

// 함수 (function 키워드로 선언된 값)
function sum() {}
