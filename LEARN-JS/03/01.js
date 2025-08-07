// 덧셈 연산을 제외한 모든 연산은 형변환이 일어남
console.log(5 - '2'); // 3

// NaN, Not a Number, 수학적 계산을 시도했는데, 피연산자가 숫자가 아닐 시
console.log('A' - 'B');

// 문자열 -> 큰따옴표나, 작은따옴표로 둘러쌓여진 값을 문자열
// 템플릿 문자열 -> 백틱 기호로 둘러 쌓여진 값

const uname = '철수';
const greet = '안녕~' + uname;
const greet2 = `안녕~ ${uname}`;
