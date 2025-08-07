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

// 1
const n = 10;
const fibonacci = [0, 1];

for (let i = 2; i < n; i++) {
  if (n < 3) return;

  fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
}

console.log("fibonacci", fibonacci);

// 2
const start = 1;
const end = 100;
const prime = [];

for (let i = start; i <= end; i++) {
  if (i < 2) continue;

  let num = 0;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      num++;
      break;
    }
  }

  if (num === 0) {
    prime.push(i);
  }
}

console.log(prime);

// 3
const numbers = [5, 10, 15, 20, 25];
let sum3 = 0;

for (const x of numbers) {
  sum3 += x;
}

console.log("sum3", sum3);

// 4
const str = "Hello, World!";
let str2 = "";

for (let i = str.length - 1; i >= 0; i--) {
  str2 += str[i];
}

console.log("str2", str2);

// 5
const n2 = 5;
let f = 1;

for (let i = 1; i <= n2; i++) {
  f *= i;
}

console.log("f", f);

// 6
for (let i = 100; i <= 999; i++) {
  const str = `${i}`;
  let sum = 0;

  for (let j = 0; j < str.length; j++) {
    sum += str[j] ** 3;
  }

  if (i === sum) console.log(i);
}
