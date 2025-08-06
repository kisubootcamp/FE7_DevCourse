// 1. 자료형(Data Type, 값의 종류, 값의 타입, 데이터의 종류)
// 1.1 기본 자료형
// 1.1.1 숫자형 ex)10, 20, 30

// 1.1.2 문자열형 ex) "A", 'b', 'c'

// 1.1.3 논리형 ex) true, false

// 1.1.4 심볼형(ES6) ex) symbol("남기고 싶은 코멘트")

// 1.1.5 undefined

// 1.1.6 null

// 1.1.7 BinInt(ES11) ex) 101111111114040433 과 같이 숫자형으로 처리하기 힘든 아주 큰 숫자.

// 1.2 참조자료형
// 1.2.1 배열
const mathScore = 90;
const engScore = 40;
const korScore = 20;
const scienceScore = 100;

// 수학, 영어, 국어, 과학
const score = [90, 40, 20, 100]; //꼭 위에 주석을 달아서 어떤 값인지 달아줘야 함.
console.log(score[0]);

// 1.2.2 객체: 키(key)와 값(value)로 구성된 속성들의 집합.

// 파스칼케이스 - 모든 단어의 첫 글자가 대문자. ex) UserName
// 스네이크케이스 - 단어를 연결할 때는 _를 사용 ex) user_name
// 케밥케이스 - 단어를 연결할 때는 - 사용 ex) user-name
// 카멜케이스 - 연결된 단어의 첫글자는 대문자 ex) userName

// JS실무에서는 대부분 defalt로 카멜케이스 사용. 특별한 순간에 파스칼케이스 사용.
// HTML실무에서는 대부분 스네이크케이스, 케밥케이스 많이 사용.

const scoreOBJ = {
  mathScore: 90,
  engScore: 40,
  korScore: 20,
  'sience Score': 100,
}; //직관적으로 코드만 보고도 무슨 내용인지 알 수 있음.
console.log(scoreOBJ['sience Score']); // 대괄호 연산자 (숫자로 키 값을 쓰거나 공백이 있는 키 값을 쓸때는 마침표 연사자로 접근할 수 없기 때문에 이것을 써야 함.)
console.log(scoreOBJ.mathScore); // 마침표 연산자 (실무에서 많이 씀.)

// 1.2.3 함수 : 기능 단위로 묶은 속성
//function
function sum() {}
console.log(typeof scoreOBJ);
