// 비교 연산자
// 피연산자들 간의 비교를 수행하기 위한 연산자
// 동등(==), 피연산자들의 데이터가 같으면 참, 아니면 거짓
// 일치(===), 피연사자들의 데이터와 데이터 타입을 검사 후 같으면 참, 아니면 거짓
// 부등(!=)
// 불일치(!==)
// ~보다 큰 (>)
// ~보다 작은 (<)

const a = 10 < 20; // true
const b = 10 > 20; // false

console.log(a, b);

const c = 10;
const d = "10";

console.log(c == d); // 암묵적(암시적) 형변환(Type Change)
console.log(c === d);

console.log(c != d); // false (일치한다.)
console.log(c !== d); // true

const age1 = 25;
const age2 = 30;

console.log(age1 > age2);
console.log(age1 === age2);
