// RegExp
// 자바스크립트에서 정규 표현식을 다루기 위한 내장 객체

// 생성방법
// 리터럴(보통 쓰는 방법)
const literal1 = /abc/;
const literal2 = /abc/i; // 플래그, g, i

// 생성자 함수
const instance1 = new RegExp("abc", "i");

// .test()
// 패턴이 문자열과 매친되는지 여부를 반환

console.log(/abc/.test("123abcd1234"));

// .match()
// 매칭되는 걸 배열로 반환
console.log("123ab1234".match(/ab/g));
