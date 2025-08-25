// RegExp
// 자바스크립트에서 정규 표현식을 다루기 위한 내장 객체

// 생성방법
// 리터럴
const literal1 = /abc/;
const literal2 = /abc/i; // 플래그 => g, i
// i: 대소문자를 구분하지 않고 패턴을 검사, g: 문자열 전체에서 모든 매치를 찾음

// 생성자 함수
const instance1 = new RegExp("abc", "");
const instance2 = new RegExp("abc", "i");

// .test()
console.log(/abc/.test("123abd1234"));

// .match()
console.log("123abd12ab34".match(/ab/g).length);
