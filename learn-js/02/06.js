//비교 연산자
//피연산자들간의 비교를 수행하기 위한 연산자
//동등(==)
//일치(===)
//부동(!=)
//불일치(!==)
//보다 큰 (>)
//보다 크거나 같음(>=)
//보다 작은 (<)
//보다 작거나 같음(<=)
//-> 연산의 결과로 논리형으로 계산되어집니다.
//표현식 -> 값으로 도출 가능한 식

const a = 10 < 20;
const b = 10 > 20;

console.log(a, b);

//실무에서는 정확한 비교를 위해 동등과 부동을 사용하지 않는다.
const c = 10;
const d = "10";

console.log(c == d); //동등 연산자. 암묵적 형변환 true
console.log(c === d); //일치 연산자 false

console.log(c != d); //부동 연산자. false (일치한다)
console.log(c !== d); //불일치 연산자. true (일치하지 않는다)

const age1 = 25;
const age2 = 30;
console.log(age1 > age2); // false
console.log(age1 === age2); //false
