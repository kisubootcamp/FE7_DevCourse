// 비교 연산자
// 피연산자들 간의 비교를 수행하기 위한 연산자
// 연산의 결과가 논리형으로 계산됨
// 표현식 -> 값으로 도출 가능한 식
// 동등 (==), 피연산자들의 데이터가 같으면 참, 아니면 거짓
// 일치 (===) 피연산자들의 데이터와 데이터 타입이 같으면 참, 아니면 거짓
// 부등 (!=)
// 불일치 (!==)
// ~보다 큰 (>)
// ~ 보다 작은 (<)
// ~보다 크거나 같음 (>=)
// ~보다 작거나 같음 (<=)

const a = 10 < 20; // true
const b = 10 > 20; // false

console.log(a, b);

const c = 10;
const d = "10";

console.log(c == d); // true // javascript 엔진이 암묵적 형변환(Type Change)을 수행함.
// 암묵적(암시적) 형변환: 개발자가 의도하지 않은 형변환
console.log(c === d); // false

console.log(c != d); // false (일치한다)
console.log (c !== d); // true (일치하지 않는다)

const age1 = 25;
const age2 = 30;

console.log(age1 > age2);
console.log(age1 === age2);