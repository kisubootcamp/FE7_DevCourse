// 1. 자료형 (Data Type, 값의 종류, 값의 타입, 데이터의 종류)
// 1.1 기본자료형
// 1.1.1 숫자형
// 1.1.1.1 10, 20, 30
// 1.1.2 문자열형
// 1.1.2.1 "A" "B" "C"
// 1.1.3 논리형
// 1.1.3.1 true false
// 1.1.4 심볼형 (ES6)
// 1.1.4.1 Symbol("남기고 싶은 코멘트")
// 1.1.5 undefined
// 1.1.6 null
// 1.1.7 BigInt(ES11)

// 1.2 참조자료형
// 1.2.1 배열
// 1.2.1.1 [1, 2, "A", [10, 20], false]

// 수학, 영어, 국어, 과학
// index => 배열의 요소의 첫 번째부터 0 부여, 그 뒤로 순차적으로 1씩 증가
// 대괄호 연산자 사용
const score = [50, 40, 30, 70];
console.log(score[0]);
console.log(score[3]);
console.log(score[4]);

// 1.2.3 객체
// 1.2.3.1 키(Key) + 값(value) = 속성(property)
// 1.2.3.2 키와 값으로 구성된 속성들의 집합
// 대괄호, 마침표 연산자 둘 다 사용
// 객체의 키 => 문자열형

// 파스칼케이스 - 모든 단어의 첫글자가 대문자, UserName(user + name)
// 스네이크케이스 - 단어를 연결할 때는 _, user_name
// 케밥케이스 - 단어를 연결할 때는 -, user-name
// 카멜케이스 - 연결된 단어의 첫글자는 대문자, userName
// Default => 카멜케이스, 특수한 상황 => 파스칼케이스

const scoreObj = {
  mathScore: 50,
  engScore: 40,
  korScore: 40,
  scienceScore: 70,
  "avg Score": 50,
};
console.log(scoreObj["engScore"]);
console.log(scoreObj.engScore);
console.log(scoreObj["avg Score"]); //console.log(scoreObj.avg Score) 사용 못함

// 1.2.2 함수
// 1.2.2.1 function A(){}
function SubjectScore() {
  console.log(scoreObj.mathScore);
}
SubjectScore();
