// Q1

for (let i = 1; i < 10; i++) {
  console.log(i);
}

// Q2

let q2 = 0;
for (let i = 1; i < 10; i++) {
  q2 += i;
}
console.log(q2);

// Q3
for (let i = 1; i < 101; i++) {
  if (i % 2 == 0) console.log(i);
}

// Q4
let numArr = [10, -10, 20, -30, 40];
let q4 = 0;
for (let i of numArr) {
  if (i > 0) q4 += i;
}
console.log(q4);

// Q5
for (let i = 0; i < 16; i++) {
  console.log(i, i % 2 ? "홀수" : "짝수");
}

// Q6
const numArr2 = [7, 2, 9, 4, 5];
let max = numArr[0];
for (let i of numArr2) {
  if (i > max) max = i;
}
console.log(max);

// Q7
const newArr = [];
const arr = ["a", "b", "c", "d", "e"];

for (let i in arr) {
  if (i % 2 == 0) newArr.push(arr[i]);
}
console.log(newArr);

// Q8
for (let i = 1; i < 10; i++) {
  console.log("3 *", i, "=", i * 3);
}
