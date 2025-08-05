// 자료형(data type)
// 값의 종류를 의미함 

//숫자형 = 말 그대로 숫자를 의미 
// 10, 20, 0, -10, -20. 0.1, -0.1, 10e  

// 문자열 = 값이 큰따옴표나, 작은따옴표, 백틱으로 둘러 쌓여진 값
// "10",  '10', 

//논리형 
// true(참), false(거짓) 값을 의미합니다. 
const boolean = true;
const bool = 10 > 20;  

// 심볼형(ES6)
// 고유하고 변경 불가능한 값입니다 , 유니크한 값 어떤의미를 가지고 있는
const symbol = Symbol('user id'); // 함수라고 불리는 형태입니다 

// undefined
// 값이 할당되지 않은 상태를 의미합니다.
let undi;
console.log(undi); // 변수를 선언했지만 할당하지 않아서 정의되지 않은상태 

// null (특수 자료형) (비어있는 값)
let null = null;  // 추가적인 작업에 의해서 데이터가 결정이 되면 그 때 할당할거야

// 이렇게 여섯가지를 기본자료형이라고 부릅니다 

// bigint (ES11) 라는 자료형이 하나가 추가가됨 
// Bigint(10) 
const big = BigInt(10n); // 숫자 뒤에 n을 붙이면 bigint로 인식합니다

console.log(Number.MAX_SAFE_INTEGER); // 자바스크립트에서 이거보다 큰숫자는 안전하지않음 

const aBig = BigInt(9007199254740991n);
const bBig = BigInt(10n);

console.log(aBig + bBig); 
console.log(9007199254740991 + 10); // 

//[참조 자료형]
// 배열, 함수, 객체 

// 배열 = 대괄호로 둘러쌓여진 값
// 배열은 여러개의 값을 하나의 변수에 담을 수 있는 자료형입니다.
// [] 대괄호 () 소괄호 {} 중괄호
const arr = [10, "A", true, null, undefined, Symbol('id')]; //대괄호엔 모든값가능

// 객체 = 중괄호로 둘러 쌓여진 값 , 키와 값으로 구성된 자료입니다. 
const obj = {  key :"value",};

// 함수, fubction 키워를 선언된 값 
function sum() {}ㄴ