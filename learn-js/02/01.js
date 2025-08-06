// 1.1.1 숫자 자료형
// 1.1.2 문자열 자료형

// 1.1.3 논리형 자료형
// 1.1.3 true or False

// 1.1.4 심볼
// 1.1.5 bigInt 자료형

// 1.1.6 undefined
// 1.1.7 null 
const ob = {
    'a' : "WORLD",
    a : "HELLO"
}
console.log(ob["a"])

// 1.2 참조  자료형
// 1.2.1 배열
// 1.2.1 [90, 40, 20, 100]
const mathScore = 90;
const engScore = 40;
const korScore = 20;
const scienceScore = 100;

// 수학, 영어, 국어, 과학
// index, 배열의 요소의 첫 번째부터 0 부여가 되고, 그 뒤로 순차적으로 1씩 증가하는 값
const score = [mathScore, engScore, korScore, scienceScore];

// 1.2.2 객체 {}
// 1.2.2.1 키(key) + 값(value) = 속성(property)
// 1.2.2.2 키와 값으로 구성된 속성들의 집합
// 대괄호 연산자, 마침표 연산자
const scoreObj = {
    mathScore: 90,
    engScore: 40,
    korScore: 20,
    scienceScore: 100
};

console.log(scoreObj["mathScore"]);

// 1.2.3 함수
