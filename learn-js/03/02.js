// 문자열 => 큰따옴표, 작은따옴표로 둘러쌓여진 값을 문자열
// 템플릿 문자열 -> 백틱 기호로 둘러 쌓여진 값

const uname = "철수";
const greet = "안녕~ " + uname;
const greet2 = `안녕~ ${uname}`;
console.log(greet);
console.log(greet2);