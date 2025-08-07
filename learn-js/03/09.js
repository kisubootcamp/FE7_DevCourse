// 연습문제 - 어려움

//1번
let n = 10;
let fibo = [0, 1];
for (let i = 2; i < n; i++) {
  const firstNum = fibo[i - 2];
  const secondNum = fibo[i - 1];
  fibo.push(firstNum + secondNum);
}
console.log(fibo);

//2번
let results = [];
let start = 1,
  end = 100; // 범위
for (let i = start; i < end; i++) {
  let isAnswer = true;
  if (i === 1) continue; // 1제외

  for (let j = 1; j < i; j++) {
    if (j === 1) continue;
    if (i % j === 0) {
      isAnswer = false;
      break;
    }
  }
  if (isAnswer) results.push(i);
}

console.log(results); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

//3번
let results2 = 0;
const numbers = [5, 10, 15, 20, 25]; // 배열
for (let i = 0; i < numbers.length; i++) {
  results2 += numbers[i];
}
console.log(results2); // 75

//4번
const str = "Hello, World!";
let reversed = "";
// 문자열 뒤집기 로직
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log("뒤집힌 문자열:", reversed); // "!dlroW ,olleH"

//5번
let n2 = 5; // 예시 숫자
let factorial = 1;
// 팩토리얼 로직
for (i = n2; i > 0; i--) {
  factorial *= i;
}

console.log(`${n}의 팩토리얼:`, factorial); // 출력 120

//6번
/*
[연습문제 - 암스트롱 수 구하기]
난이도 ★★★★★

100부터 999까지 암스트롱 수를 구하세요

&암스트롱 수란?

암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다. 
예를 들어 153 = 1 + 125 + 27 입니다. 
이와 같은 수를 암스트롱의 수라고 말합니다.
*/
for (i = 100; i <= 999; i++) {
  const one = i % 10;
  const ten = ((i % 100) - one) / 10;
  const hund = (i - ten * 10 - one) / 100;

  // 각 자리수 세 제곱
  const sum = hund ** 3 + ten ** 3 + one ** 3;
  if (i === sum) {
    console.log(i); // 153, 370, 371, 407
  }
}
