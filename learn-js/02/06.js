/* 

비교 연산자
피연산자들간의 비교를 수행하기 위한 연산자
1. 동등(==)
2. 일치(===)
3. 부등(!=)
4. 불일치(!==)
5. ~보다 큰 (>)
6. ~보다 작은 (<)
7. ~보다 크거나 같은 (>=)
8. ~보다 작거나 같은 (<=)

=> 연산의 결과로 논리형 값이 나옵니다. true, false
표현식? -> 값으로 도출 가능한 식

*/

const a = 10 < 20; // true
const b = 10 > 20; // false

console.log(a, b); // true false 출력

const c = 10;
const d = 10;
const e = "10";

// 데이터 타입과 값이 같을 때 동등, 일치 둘다 같다고 처리됨
console.log(c == d);  // true
console.log(c === d); // true
// 데이터 타입이 다르지만 값이 같을 때는 동등이 참, 일치가 거짓 나옴
console.log(c == e);  // true     -> 암묵적, 암시적 형변환(Type Change)
console.log(c === e); // false
console.log(c != e);  // false    -> c와 e는 값이 부등한가(같지않은가)?    A: 일치한다
console.log(c !== e); // true    -> c와 e는 데이터 타입과 값이 불일치한가? A: 일치하지않는다.

const age1 = 25;
const age2 = 30;

console.log(age1 > age2);
console.log(age1 === age2);