// RegExp
// 자바스크립트에서 정규 표현식을 다루기 위한 내장 객체

//생성방법
//리터럴
const literal1 = /abc/;
const literal2 = /abc/i;

//생성자 함수
const instance1 = new RegExp("abc", "");
const instance2 = new RegExp("abc", "i");

//.test()
//패턴이 문자열과 매칭되는지의 여부를 반환
console.log(/abc/.test("123abcd1234"));

//.match()
console.log("123abd12ab34".match(/ab/g));
//g(글로벌 탐색)이 아니면 가장 먼저 일치하는 것을 보여줌.

//문자 클래스
// ., \d, \w, \s

// ^, $, \b, \B

//수량자
// *, +, ?, {n}, {n, m}

//그룹 선택
// ()
