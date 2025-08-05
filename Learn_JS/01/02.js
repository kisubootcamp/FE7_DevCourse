// 자료형(Data Type)
// 값의 종류를 의미함.

// 숫자형
// 밀 그대로 숫자를 의미함.
// 10, 20, 0, -10, -20, 0.1, -0.1, 10e
const num = 10;

// 문자열형(문자열)
// 값이 큰따옴표나, 작은따옴표, 백틱으로 둘러 쌓여진 값을 의미함.
// "10" '0', `-0.1`
const uname = "철수"

// 논리형
// true(참), false(거짓) 값을 의미합니다.
const boolean = true;
const bool = 10 > 20; // false

// 심볼형(ES6)
// 유니크한 값, 어떤의미를 가지고 있는 유니크한 값인지를
const symbol = Symbol("user id"); // 함수

// undefined(특수 자료형)
// const undi = undefined;
let undi;
console.log(undi);

// null (특수 자료형)
let nul = null;
// 추가적인 작업에 의해서 데이터가 결정이 되면 그 때 갓을 할당

// bigint
// BigInt(10)
const big = BigInt(10n);
console.log(Number.MAX_SAFE_INTEGER);
