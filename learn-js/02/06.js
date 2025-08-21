/*

비교 연산자

동등 ==
일치 ===

부등 !=
불일치 !==

~보다 큰 >
~보다 크거나 같음 >=
~보다 작은 <
~보다 작거나 같음 <=

연산의 결과는 논리형으로 계산
표현식 -> 값으로 도출 가능한 식

*/

const c = 10;
const d = "10";

console.log(c == d); // true: 타입이 다른 값을 암묵적(암시적) 형변환(Type Change) 시킴
console.log(c === d); // false

console.log(c != d); // false (일치함)
console.log(c !== d); // true (일치하지 않음)
