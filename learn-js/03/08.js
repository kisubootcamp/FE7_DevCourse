// 연습문제 - 쉬움

// Q1
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// Q2.
let n = 0;
for (let i = 1; i <= 9; i++) {
  n += i;
}
console.log(n);

// Q3.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// Q4.
let numArr = [10, -10, 20, -30, 40];
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] > 0) console.log(numArr[i]);
}

// Q5.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) console.log(i + " 짝수");
  else console.log(i + " 홀수");
}

// Q6.
const numArr2 = [7, 2, 9, 4, 5];
let answer = numArr2[0];
for (let i = 0; i < numArr2.length; i++) {
  if (numArr2[i] > answer) answer = numArr2[i];
}
console.log(answer);

// Q7.
const arr = ["a", "b", "c", "d", "e"];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) newarr.push(arr[i]);
}
console.log(newarr);

// Q8.
for (let i = 1; i <= 9; i++) {
  console.log(3 + " * " + i + " = " + 3 * i);
}
console.log(answer);
