// 자료형 (Data Type)
// 값의 종류를 의미함

// 숫자형
// 숫자를 의미함
// 10, 20, 0, -10, -20, 0.1, -0.1, 10e
const num = 10;

문자열형(문자열)

// 값이 큰 따옴표나 작은 따옴표, 백틱으로 둘러싸여진 값을 의미함
//     - “10”, ‘0’, `-0.1`
const uname = "철수";

// 논리형
// true(참), false(거짓) 값을 의미함
const boolean = true;
const bool = 10 > 20; // false

심볼형(ES6)
// 유니크한 값, 어떤 의미를 가지고 있는 유니크한 값인지를 매개변수를 통해 전달해 생성함
const symbol = Symbol('');

// undefined (특수 자료형)
const undi = undefined;

// null (특수 자료형)
let nul = null;
// 추가적인 작업에 의해서 데이터가 결정될 때 할당할 것

// bigint
// BigInt(10)
const big = bigInt(10n);
console.logNumber(MAX_SAFE_INTEGER)
const aBig = BigInt(90071992547400991n);
const bBig = BigInt(10n);
console.log(aBig + bBig);
console.log(9007199254740991 + 10);