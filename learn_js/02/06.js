// 비교 연산자
// 피연사자들간의 비교를 수행하기 위한 연산자
// 동등(==)
// 부등(!=)
// 불일치(!==)
// ~보다 큰 (>)
// ~보다 작은(<)
// ~보다 크거나 같음(>=)
// -> 연산의 결과로 논리형(boolean)으로 계산되어집니다.
// 표현식 -> 값으로 도출 가능한 식

const a = 10 < 20; // true
const b = 10 > 20; //false

console.log(a, b);

const c = 10;
const d = '10';

console.log(c == d); // 암묵적(암시적) 형변환(Type Change)
console.log(c === d);

console.log(c != d); // false(일치함)
console.log(c !== d); // true(일치하지 않음.)

const age1 = 25;
const age2 = 30;

console.log(age1 > age2);
console.log(age1 === age2);
