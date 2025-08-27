// RegExp
// 자바스크립트에서 정규 표현식을 다루기 위한 내장 객체

// 생성방법
// 리터럴
const literal1 = /abc/;
const literal2 = /abc/i; // 플래그, g, i

// 생성자 함수
const instance1 = new RegExp("abc", "");
const instance2 = new RegExp("abc", "i");

// .test(): 문자열이 정규 표현식과 일치하는지 확인
// .match(): 문자열에서 정규 표현식과 일치하는 부분을 배열로 반환

/abc/.test("123abcd1234"); // true
console.log(/abc/.test("123abcd1234")); // true

console.log("123abd12ab34".match(/ab/)); // ['ab', index: 3, input: '123abd12ab34', groups: undefined]
console.log("123abd12ab34".match(/ab/g)); // ['ab', 'ab']
console.log("123abd12ab34".match(/ab/g).length);

// 문자 클래스
// . \d \w \s

// 앵커, 수량자, 그룹선택
