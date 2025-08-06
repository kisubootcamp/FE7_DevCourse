//01 폴더 복습

//01. 변수
//var (ES5), let, const (ES6)

//02. 자료형
//2-1. 원시 자료형 [7] :: 숫자형, 문자열형, 논리형(불리언), undefined, null, BigInt
//2-2. 참조 자료형 [3] :: 배열, 객체, 함수

//2-2-1. 배열 []

//수학, 영어, 국어, 과학
const score = [90, 40, 20, 100];

//대괄호 연산자
console.log(score[0]); //수학
console.log(score[4]); //undefined

//2-2-2. 객체 {}

const score0bj = {
  mathScore: 90,
  engScore: 40,
  korScore: 20,
  sienceScore: 100,
};

//대괄호 연산자
console.log(score0bj["mathScore"]);

//마침표 연산자
console.log(score0bj.sienceScore);

//참고) 식별자 작성법
//파스칼 케이스 - 연결된 단어의 첫글자가 대문자, UserName (user + name)
//스네이크 케이스 - 단어를 연결할 때 _ 사용, user_name
//케밥 케이스 - 단어를 연결할 때 - 사용, user-name
//카멜 케이스 - 연결된 단어의 첫글자가 대문자, userName
//JS :: 카멜 케이스 (기본) >> 파스칼 케이스 (특수) > 케밥 케이스 등
//HTML, CSS :: 스네이크 케이스, 케밥 케이스

//2-2-3. 함수
