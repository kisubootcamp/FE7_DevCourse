//[연습문제 - 1부터 9까지 출력하기]
let ex1 = 1;
while (ex1 < 10) {
  console.log(ex1);
  ex1++;
}

//[연습문제 - 1부터 9까지의 합 출력하기]
let ex2 = 0;
for (let i = 1; i < 10; i++) {
  ex2 += i;
}
console.log(ex2);

//[연습문제 - 1부터 100까지 짝수만 출력하기]
let ex3 = 0;
while (ex3 <= 100) {
  ex3++;
  if (ex3 % 2 === 1) continue;
  console.log(ex3);
}

/*
[연습문제 - 음수 걸러내기]

배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.
*/

let exArr4 = [10, -10, 20, -30, 40];
let ex4 = 0;
for (const ele of exArr4) {
  if (ele > 0) ex4 += ele;
}
console.log(ex4);

/*
[연습문제 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/
let ex5 = 0;
do {
  if (ex5 % 2 === 0) console.log(`${ex5} 짝수`);
  else console.log(`${ex5} 홀수`);
  ex5++;
} while (ex5 < 16);

// 주어진 숫자 배열의 최댓값 찾기
const exArr6 = [7, 2, 9, 4, 5];
let ex6 = exArr6[0];
for (const ele of exArr6) {
  if (ele > ex6) ex6 = ele;
}
console.log(ex6);

// 짝수 인덱스의 요소만 새로운 배열 담기
// 배열의 .push() 메서드를 사용하세요.
const exArr7 = ["a", "b", "c", "d", "e"];
const ex7 = [];
for (const index in exArr7) {
  if (index % 2 === 0) ex7.push(exArr7[index]);
}
console.log(ex7);

// 구구단 3단 출력하기
for (let i = 1; i <= 9; i++) {
  console.log(`3 x ${i} = ${3 * i}`);
}
// 아님 이건가
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
