// 1
for (let i = 1; i < 10; i++) {
  console.log("i", i);
}

// 2
let sum = 0;

for (let i = 1; i < 10; i++) {
  sum += i;
}

console.log("sum", sum);

// 3
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

// 4
const numArr = [10, -10, 20, -30, 40];
let sum2 = 0;

for (const x of numArr) {
  if (x > 0) sum2 += x;
}

console.log("sum2", sum2);

// 5
for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) console.log("짝수");
  else console.log("홀수");
}

// 6
const numArr2 = [7, 2, 9, 4, 5];
let answer = 0;

for (const x of numArr2) {
  if (x > answer) answer = x;
}

console.log("answer", answer);

// 7
const arr = ["a", "b", "c", "d", "e"];
const result = [];

for (const i in arr) {
  if (i % 2 === 0) result.push(arr[i]);
}

console.log("result", result);

// 8
for (let i = 1; i <= 9; i++) {
  console.log(3 * i);
}
