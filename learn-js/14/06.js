// RegExp : 자바스크립트에서 정규 표현식을 다루기 위한 내장 객체

// 생성방법?
// 리터럴
const literal1 = /abc/;
const literal2 = /abc/i; // 플래그, g, i

// 생성자함수
const instance1 = new RegExp("abc", "");
const instance2 = new RegExp("abc", "i");

// .test()
// 패턴이 문자열과 매칭되는지 여부 반환
console.log(/abc/.test("123abcd1234"));

// .match()
console.log("123abd1234".match(/ab/));
console.log("123abd1234".match(/ab/g));


/* 

문자 클래스
.
\d
\w
\s

앵커
^


*/