// 1. 자료형(Data Type, 값의 종류, 값의 타입, 데이터의 종류)
// 1.1 기본자료형
// 1.1.1 숫자형(Number)
// 1.1.1.1 10, 20, 30

// 1.1.2 문자열형(String)
// 1.1.2.1 'hello', "world", `template literal`

// 1.1.3 논리형(Boolean)
// 1.1.3.1 true, false

// 1.1.4 심볼형(ES6)
// 1.1.4.1 Symbol('남기고 싶은 코멘트'), Symbol.for('key')

// 1.1.5 undefined
// 1.1.6 null
// 1.1.7 BigInt(ES11, 2020)

// 1.2 참조자료형
// 1.2.1 배열 []
// 1.2.1.1 [1, 2, 3], ['a', 'b', 'c'], [1, 'a', true, null]
const mathScores = [90, 80, 70, 60];
const engScores = [100, 90, 80, 70];
const korScores = [95, 85, 75, 65];
const scienceScores = [85, 95, 90, 80];

// 수학, 영어, 국어, 과학
// Index, 배열의 요소의 첫 번째부터 0이 부여, 그 뒤로 순차적으로 1씩 증가하는 값을 부여함
const scores = [90, 40, 20, 100];
console.log(scores[0]); // 90

// 1.2.2 객체 {}
// 1.2.2.1 키(key) + 값(value) = 속성(property)
// 1.2.2.2 키와 값으로 구성된 속성들의 집합
const scoreObj = {
  mathScore: 90,
  engScore: 40,
  korScore: 20,
  scienceScore: 100,
};
// 대괄호 연산자, 마침표 연산자
console.log(scoreObj["mathScore"]);
console.log(scoreObj.mathScore);

// 숫자를 키로 적었을 때는 이는 내부적으로 문자열로 저장
// 이때는 마침표 연산자로 접근하는 것이 불가능하다.

// 파스칼 케이스 - 연관된 단어의 첫글자가 대문자, UserName(user + name)
// 스네이크 케이스 - 연관된 단어의 구분을 언더바로 표현, user_name(user + name)
// 케밥 케이스 - 연관된 단어의 구분을 하이픈으로 표현, user-name(user + name)
// 카멜 케이스 - 연관된 단어의 구분을 대문자로 표현, userName(user + name)

// 1.2.3 함수
function sum() {}

console.log(typeof 10); // number
console.log(typeof "hello"); // string


