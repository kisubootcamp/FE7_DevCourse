//for (초기문; 조건문 ; 증감문 ) // 초기문은 처음한번만 실행후 조건문갔다가 증감문으로
// 조건문이 거짓이 될때까지 계속 하는것이 for 문

for (let i = 1; i <= 9; i++) {
  console.log(i);
} // 초기문은 let 으로

//1
let i = 1; // 시작 값

while (i <= 9) {
  console.log(i);
  i++;
}

// let sum = 0;
//2
while (i <= 9) {
  sum += i; //
  i++;
}

console.log("1부터 9까지의 합:", sum);

//3
let j = 1;

while (j <= 100) {
  if (j % 2 === 1) {
    j++;
    continue;
  }
  console.log(j);
  j++;
}

//4
let numArrr = [10, -10, 20, -30, 40];
let sum = 0;

for (let num of numArr) {
  if (num < 0) continue;
  sum += num;
}
console.log(sum);

//5
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " 짝수"); //`${1}
  } else {
    console.log(i + " 홀수");
  }
}
// 6
const numArr = [7, 2, 9, 4, 5];
let max = numArr[0]; // 초기값은 배열의 첫 번째 요소

for (let i = 1; i < numArr.length; i++) {
  if (numArr[i] > max) {
    max = numArr[i];
  }
}

console.log("최댓값은 " + max);

//let max = numArr2[0]
//for (const num of numArr2) {
//if (num> max)}
//7

const arr = ["a", "b", "c", "d", "e"];

const result = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    result.push(arr[i]);
  }
}

console.log(result);

//8

for (let i = 1; i <= 9; i++) {
  console.log("3 x " + i + " = " + 3 * i);
}
