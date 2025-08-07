// 어려움

// 1. 나중에 다시
let n = 10;
const pibonacci = [];

for (let i = 0; i <= 10; i++) {
  if (pibonacci.length < 2) pibonacci.push(i);
  else {
    pibonacci.push(pibonacci[i - 1] + pibonacci[i - 2]);
  }
}

console.log(pibonacci);

console.log("===================");

// 2.
const result = [];

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result.push(i);
  }
}

console.log(result);

console.log("===================");

// 3.
const numbers = [5, 10, 15, 20, 25];
let results = 0;

for (let i = 0; i < numbers.length; i++) {
  results += numbers[i];
}

console.log(results);

console.log("===================");

// 4.
const str = "Hello, World!";
const reversed = [];

for (let i = 0; i < str.length; i++) {
  reversed.unshift(str[i]);
}

console.log(reversed.join(""));

console.log("===================");

// 5.
const n2 = 5;
let temp2 = 1;

for (let i = 1; i <= n2; i++) {
  temp2 = temp2 * i;
}

console.log(temp2);

console.log("===================");

// 6.

const lastResult = [];

for (let i = 100; i < 1000; i++) {
  const arr = i.toString().split("");

  let result = 0;

  for (let j = 0; j < arr.length; j++) {
    result += +arr[j] * +arr[j] * +arr[j];
  }
  if (i === result) lastResult.push(i);
}

console.log(lastResult);
