// 문자열뒤집기
// for 반복문
const str = "Hello, World!";

let answerFor = "";
for (let i = str.length - 1; i >= 0; i--) answerFor += str[i];
console.log(answerFor);

// while 반복문
let j = str.length - 1;
let answerWhile = "";
while (j >= 0) {
	answerWhile += str[j];
	j--;
}
console.log(answerWhile);

// do while 반복문
let k = str.length - 1;
let answerDoWhile = "";
do {
	answerDoWhile += str[j];
	k--;
} while (k >= 0);
console.log(answerWhile);

// 강사님 답
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
	reversed += str[i];
}
console.log(reversed);

/* 

뭔가 아닌 것 같아서 다시
이전 제출 답

// 문자열뒤집기
const str = "Hello, World!";

const strArr = str.split("");
const answer = [];

for (let i = strArr.length - 1; i >= 0; i--) answer.push(strArr[i]);
console.log(answer.join(""));


>> 왜 이렇게했는가?... 문자열에 대괄호찍으면 문자 추출되는 줄 몰랐음
이제 알았으니까 됐다

*/
