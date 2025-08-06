// 1. 자료형 (Data Type, 값의 종류, 값의 타입, 데이터의 종류)
// 1.1 기본자료형
// 1.1.1 숫자형
// 1.1.1.1 10, 20, 30

// 1.1.2 문자열형
// 1.1.2.1 "A", "B", "10"

// 1.1.3 논리형
// 1.1.3.1 true(참), false(거짓)

// 1.1.4 심볼형(ES6)
// 1.1.4.1 Symbol("남기고 싶은 코멘트")

// 1.1.5 undefined
// 1.1.6 nulll
// 1.1.7 BigInt(ES11)

// 1.2 참조자료형
// 1.2.1 배열
// 1.2.1 [90, 40, 20, 100]
const mathScore = 90;
const engScore = 40;
const korScore =20;
const scienceScor = 100;

// 수학, 영어, 국어, 과학
// index, 배열의 요소의 첫 번째부터 0 부여가 되고, 그 뒤로 순차적으로 1씩 증가하는 값
const score = [90, 40, 20, 100];
console.log(score[0]);
console.log(score[3]);
console.log(score[10]);    

// 1.2.2 객체 {}
// 1.2.2.1 키(key) + 값(value) = 속성(property)
// 1.2.2.2 키와 값으로 구성된 속성들의 집합
// 대괄호 연산자, 마침표 연산자
// 숫자로 키 값을 작성하면, 대괄호 연산자로만 접근 가능함함

// 파스칼 케이스 - 모든 단어의 첫글자가 대문자, UserName (user + name)
// 스네이크 케이스 - 단어를 연결할 때는 _, user_name
// 케밥 케이스 - 단어를 연결할 때는 -, user-name
// 카멜 케이스 - 연결된 단어의 첫 글자는 대문자, userName
// html에서는 케밥 케이스 or 카멜 케이스가 일반적

const scoreObj = {
    mathScore: 90,
    engScore: 40,
    korScore: 20,
    scienceScore: 100,
}
console.log(scoreObj["mathScore"]);
console.log(scoreObj.scienceScore);
// 실무에서는 마침표 연산자를 더 많이 사용함
// 키 값에 공백이 있는 경우엔 대괄호 연산자만 사용해야 함

// 1.2.3 함수
// function
function sum() {}
const t = typeof sum;