// RegExp
// 자바스크립트에서 정규 표현식을 다루기 위한 내장 객체

// 생성 방법
// 리터럴 (실무에서 주로 사용)
const literal1 = /abc/; // 슬래시와 슬래시 사이로 패턴 적어주기
const literal2 = /abc/i; // 플래그: 슬래시 다음에 오는 문자.
                         // g 플래그는 문자열 전체에서 검사, i 플래그는 대소문자 무시하고 문자열만 검사
// 생성자 함수
const instance1 = new RegExp("abc", ""); // 문자열 패턴과 플래그 적어주기
const instance2 = new RegExp("abc", "i");

// .test()
// 패턴이 문자열과 매칭되는지 여부를 반환
console.log(/abc/.test("123abcd1234")); // true
console.log(/abc/.test("123abd1234")); // false

// .match()
// 패턴과 매칭되는 문자열들을 배열로 반환
console.log("123abcd1234".match(/ab/g));

// 글로벌 태그(g)가 없으면 가장 먼저 매칭되는 문자열 반환함함
console.log("123abcd1234".match(/ab/));

// 전부 다 숫자인지 확인하는 코드
console.log(/^\d+$/g.test("12345"));

// 문자 클래스
// . \d \w \s
// 앵커 클래스
// ^ $ \b \B
// 수량자
// * + ? {n} {n, m}
// 그룹 선택
// ()


