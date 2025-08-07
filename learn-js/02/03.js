//산술 연산자: 수학적인 계산을 할 때 사용하는 연산자
//덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%), 제곱(**)
//덧셈 연산을 제외한 모든 연산은 형변환이 자동으로 이루어진다. = 암묵적. 암시적 형변환
//덧셈 연산자는 문자열을 연결하는 연산이 있기 때문에 '문자열 연결자' 라고도 한다.

//피연산자와 연산자의 구성
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);
console.log(10 ** 5);

//연산자 우선순위 - 소괄호 최우선
console.log((2 + 5) * 2);

//부동 소수점 형식을 사용하기 때문. 2진수 변환
console.log(0.1 + 0.2);

//해결책 1: 우회
console.log((0.1 * 100000000 + 0.2 * 100000000) / 100000000);

console.log("A" + "B"); //NaN, Not a Number. 수학적 연산을 시도했는데, 피연산자가 숫자가 아닐 때
console.log(5 + "2"); //"5"+"2". 암묵적 형변환

const uname = "철수";
const greet1 = "안녕" + uname;
const greet2 = `안녕~${uname}`; //?????
console.log(greet1);
console.log(greet2);
