// 1. 자료형
// 1.1 기본자료형
// 1.1.1  숫자형
// 1.1.1. 10, 20, 30

// 1.1.2 문자열형
// 1.1.2.1 "A","B","C"

// 1.1.3 논리형
// 1.1.3.1 true(참), false(거짓)

// 1.1.4 심볼형
// 1.1.4.1 Symbol("description")

// 1.1.5 undefined형
// 1.1.6 null형
// 1.1.7 BigInt형

// 1.2 참조자료형
// 1.2.1 배열
// 1.2.1 [90, 40, 20, 100]
const mathScore = 90;
const engScore = 40;
const korScore = 20;
const sienceScore = 100;

const score = [90, 40, 20, 100];

// 1.2.2 객체
// 1.2.2.1 키(key) + 값(value)  = 속성(property)
// 1.2.2.2 키와 값으로 구성된 속성들의 집합

// 파스칼케이스 = 모든 단어의 첫 글자를 대문자로  //UserName
// 스네이크케이스 = 모든 단어를 소문자로 하고, 단어 사이에 언더바(_)를 넣는 방식  //user_name
// 카멜케이스 = 첫 단어는 소문자로 시작하고, 이후 단어의 첫 글자를 대문자로 하는 방식 //userName
// 케밥케이스 = 모든 단어를 소문자로 하고, 단어 사이에 하이픈(-)을 넣는 방식 //user-name

const scoreObj = {
  mathScore: 90,
  engScore: 40,
  korScore: 20,
  sienceScore: 100,
};

// 1.2.3 함수
function sum() {}
console.log(typeof "A");
