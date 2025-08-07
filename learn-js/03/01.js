/*

덧셈연산을 제외한 모든 연산은 형변환이 일어남
왜용?
덧셈 연산자 +    숫자를 더하는 연산을 수행
덧셈 연산자 +    문자를 연결하는 연산을 수행
두가지 기능을 하기때문에

*/

console.log(5 + "5"); // 55
console.log(5 - "5"); // 0

console.log("A" + "B"); // Nan, not number . 수학적인 계산을 시도했는데 피연산자가 숫자가 아니라서 문자를 연결하는 연산을 수행하였음
console.log(5 + "2"); // "5" + "2", 피연산자가 둘다 숫자라 수학적인 계산이 됨

/* 

문자열
큰 따옴표나 작은 따옴표로 둘러싸인 값을 문자열이라고 칭함

템플릿 문자열은 백틱 기호로 둘러싸인 값. 변수를 문자열로 치환할 수 있음

*/

const uname = "철수";
const greet = "안녕~" + uname;
const greet2 = `안녕~${uname}`;
console.log(greet);
console.log(greet2);
