// +, -, *, /, %, **
// 덧셈 연산을 제외한 모든 연산은 형변환이 일어남

console.log(5 / "2"); // -> 암묵적(암시적) 형변환

// 덧셈 연산자 + , 숫자를 더하는 연산을 수행함
// 덧셈 연산자 + , 문자를 연결하는 연산을 수행함 (문자열 연결 연산자)

console.log("A" + "B"); // NaN, Not a Number, 수학적 계산을 시도했는데, 피연산자가 숫자가 아닐 때

console.log(5 + "2"); // "5" + "2", 암묵적(암시적) 형변환

// 문자열 -> 크따옴표나, 작은따옴표로 둘러쌓여진 값을 문자열
// 템플릿 문자열 -> 백틱 기호로 둘러 쌓여진 값

const uname = "철수";
const greet = "안녕~" + uname;
const greet2 = `안녕~ ${uname}`;
console.log(greet);
console.log(greet2);
