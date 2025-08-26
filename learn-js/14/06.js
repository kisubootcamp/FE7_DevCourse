// RegExp
// 자바스크립트에서 정규 표현식을 다루기 위한 내장 객체

// 생성 방법
// 1. 리터럴
const literal1 = /abc/; // /패턴/
const literal2 = /abc/i; // i는 플래그, i의 의미는 대소문자 구분x, g(global) 플래그도 있음
// 2. 생성자 함수
const instance1 = new RegExp("abc", "");
const instance2 = new RegExp("abc", "i");

// 생성자 함수 메서드?
// .test() :; 정규식 전용 메서드
// ㄴ 패턴이 문자열과 매칭되는지 여부를 반환
console.log(/abc/.test("123abcd1234")); //true
console.log(/abc/.test("123abd1234")); //false

// .match() :: 배열에서 쓰던
console.log("123abd1234".match(/ab/g)); 
// 문자열 안에서 특정 부분을 찾아 반환 : g을 쓰면 전부 찾고, 없으면 제일 먼저 나온 하나가 출력됨, 그리고 안쓰면 (index,input,gruops 함께 출력됨)
console.log("123abd1234".match(/ab/g).length); //1 -> 몇 개 있는지

// 등이 있음

// 정규표현식 짜기 정도는 ai에 의지해도 된다고 생각 (실무에서 그냥 ai프롬포터가 짜줌)
// ㄴ 최소한의 패턴만 알아도 된다