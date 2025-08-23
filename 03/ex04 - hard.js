// 어려움

// 1. 나중에 다시
// const n = 10;
// const pibonacci = [];

// for (let i = 0; i <= 10; i++) {
//   if (pibonacci.length < 2) pibonacci.push(i);
//   else {
//     pibonacci.push(pibonacci[i - 1] + pibonacci[i - 2]);
//   }
// }

// console.log(pibonacci);

const n = 10; // 10항
let a = 0; // 1, 1
let b = 1; // 0 + 1 => 1 / 1 + 1 => 2
let tmp; // 0, 1
const pResult = []; // 0, 1

for (let count = 0; count < n; count++) {
  pResult.push(a);
  tmp = a;
  a = b;
  b = tmp + b;
}

console.log(pResult);

console.log("===================");

// 2.
// const result = [];

// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     result.push(i);
//   }
// }

// console.log(result);

const primes = [];
let start = 1,
  end = 100;

for (let number = start; number <= end; number++) {
  let isPrime = true;
  // 2부터 자기 자신의 숫자까지 나누는 것.
  // 나누어지면 소수가 아닌거다.
  // 나머지가 0이면 나누어진 것.
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime && number !== 1) {
    primes.push(number);
  }
}

console.log(primes);

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
// const str = "Hello, World!";
// const reversed = [];

// for (let i = 0; i < str.length; i++) {
//   reversed.unshift(str[i]);
// }

// console.log(reversed.join(""));

const str = "Hello World!";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);

console.log("===================");

// 5.
const n2 = 5;
let temp2 = 1;

for (let i = 1; i <= n2; i++) {
  temp2 *= i;
}

console.log(temp2);

console.log("===================");

// 6.
// const lastResult = [];

// for (let i = 100; i < 1000; i++) {
//   const arr = i.toString().split("");

//   let result = 0;

//   for (let j = 0; j < arr.length; j++) {
//     result += +arr[j] * +arr[j] * +arr[j];
//   }
//   if (i === result) lastResult.push(i);
// }

// console.log(lastResult);

// for (let i = 1; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     for (let k = 0; k < 10; k++) {
//       const sum = i * i * i + j * j * j + k * k * k;
//       const origin = i * 100 + j * 10 + 1 * k;
//       if (sum === origin) {
//         console.log(origin);
//       }
//     }
//   }
// }

// O(n)
for (let i = 100; i < 1000; i++) {
  const one = i % 10; // 999 -> 9
  const ten = ((i - one) / 10) % 10; // 999 - 9 = 990 -> 99
  const hundred = (i - one - ten * 10) / 100;

  if (one * one * one + ten * ten * ten + hundred * hundred * hundred === i) {
    console.log(i);
  }
}
