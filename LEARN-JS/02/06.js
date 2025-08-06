// 비교 연산자
// 피연산자들간의 비교를 수행하기 위한 연산자
// 동등(==)
// 일치(===)
// 부등(!=)
// 불일치(!==)
// ~보다 큰 (>)
// ~보다 크거나 같음 (>=)
// -> 연산의 결과로 논리형으로 계산 되어진다.
// 표현식 -> 값으로 도출 가능한 식

const a = 10 < 20; // true
const b = 10 > 20; // false

const c = 10;
const d = '10';

console.log(c == d); // true ( 암묵적 형변환 )
// 실무에서는 동등과 부등은 사용하지 않는다.

// 연습문제
const age1 = 25;
const age2 = 30;

console.log(age1 > age2);
console.log(age1 === age2);
