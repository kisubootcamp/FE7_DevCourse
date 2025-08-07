// 문자열뒤집기
const str = "Hello, World!";

const strArr = str.split("");
const answer = [];

for (let i = strArr.length - 1; i >= 0; i--) answer.push(strArr[i]);
console.log(answer.join(""));
