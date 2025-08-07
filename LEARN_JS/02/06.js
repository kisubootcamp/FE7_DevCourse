// 비교 연산자
// 피연산자들간의 비교를 수행하기 위한 연산자
// 동등(==)
// 일치(===)
// 부등(!=)
// 불일치(!==)
// ~보다 큰(>)
// ~보다 크거나 같은(>=)
// ~보다 작은(<)
// ~보다 작거나 같은(<=)

const a = 10 < 20;
const b = 10 > 20;

console.log(a, b);

const c = 10;
const d = "10";

console.log(c == d); // 동등 비교: 값만 비교
console.log(c === d); // 일치 비교: 값과 타입 모두 비교

const age1 = 25;
const age2 = 30;

console.log(age1 > age2); // false
console.log(age1 < age2); // true
console.log(age1 >= age2); // false
console.log(age1 <= age2); // true
console.log(age1 != age2); // true
console.log(age1 !== age2); // true
