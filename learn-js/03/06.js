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

  for (const num of str) {
    sum += num ** 3;
  }

  if (i === sum) console.log(i);
}
