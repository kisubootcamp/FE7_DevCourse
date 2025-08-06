// 4. 비교 연산자
// 피연산자들간의 비교를 수행하기 위한 연산자
// 동등(==), 일치(===), 부등(!=), 불일치(!==), >, <, >=, <=
// 연산의 결과로 논리형 반환 (논리형으로 계산됨)

// (1) 대소 비교
const a = 10 < 20; //true
const b = 10 > 20; //false
// 표현식 : 값으로 도출 가능한 식
// 10 < 20 -> 표현식
console.log(a, b);

// (2) 동등(부장)과 일치(불일치)
// 동등 : 피연산자들의 데이터가 같으면 참, 아니면 거짓
// 일치 : 피연산자들의 데이터 & 데이터 타입이 같으면 참, 아니면 거짓
const c = 10;
const d = "10";
console.log(c == d); //true
console.log(c === d); //false
// 동등과 일치는 데이터 타입이 다를 때 차이를 보임
// 동등은 암묵적(암시적) 형변환(Type Change) 진행 -> 개발자 의도X 형변환
console.log(c != d); //false = c와 d는 일치함
console.log(c !== d); //true
// * 실무에서는 동등(부등) 사용 금지 -> 일치(불일치) 사용 : 정확한 비교 위함

// 연습 문제
const age1 = 25;
const age2 = 30;
console.log(age1 > age2); //false
console.log(age1 === age2); //false