// +, -, *, /, %, **
// 덧셈 연산을 제외한 모든 연산은 형 변환이 일어남

console.log(5 - "2"); // 암묵적 형변환

const uname = "철수";
const greet = "안녕~" + uname;
const greet2 = `안녕~ ${uname}`; // 템플릿 리터럴
console.log(greet);
console.log(greet2);
