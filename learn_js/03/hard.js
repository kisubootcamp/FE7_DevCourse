// // 1 - 1
// let n = 10; // 원하는 항의 수
// let result = [0, 1];
// for (let i = result.length; i < n; i++) {
//   result.push(result[i - 1] + result[i - 2]);
// }
// console.log(`피보나치 수열(${n}항):`, result); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// // 1 - 2
// const n = 10;
// let a = 0;
// let b = 1;
// let tmp;
// const result = [];
// for (let count = 0; count < n; count++) {
//   result.push(a);
//   tmp = a;
//   a = b;
//   b = tmp + b;
// }

// // 2 -1
// let results = [];
// let start = 1,
//   end = 100; // 범위
// while (start <= end) {
//   let count = 0;
//   for (let i = start; i > 1; i--) {
//     if (start % i === 0) {
//       count += 1;
//     }
//   }
//   if (count < 2 && start !== 1) results.push(start);
//   start++;
// }
// console.log(results); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// // 2 -2
// const primes = [];
// let start = 1,
//   end = 100; // 범위
// for (let number = start; number < end; number++) {
//   let isPrime = true;
//   for (let divisor = 2; divisor < number; divisor++) {
//     if (number % divisor === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime && number != 1) {
//     primes.push(number);
//   }
// }
// console.log(primes);

// // 3
// results2 = 0;
// const numbers = [5, 10, 15, 20, 25]; // 배열
// for (const v of numbers) {
//   results2 += v;
// }
// console.log(results2); // 75

// // 4
// const str = 'Hello, World!';
// let reversed = '';
// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log('뒤집힌 문자열:', reversed); // "!dlroW ,olleH"

// // 5
// let n = 5; // 예시 숫자
// let factorial = 1;
// for (let i = n; i >= 1; i--) {
//   factorial *= i;
// }
// console.log(`${n}의 팩토리얼:`, factorial); // 출력 120

// // 6-1
// let units,
//   tens,
//   hundreds = 0;

// for (let i = 100; i <= 999; i++) {
//   units = i % 10;
//   tens = ((i % 100) - units) / 10;
//   hundreds = (i - tens * 10 - units) / 100;
//   let sum = units ** 3 + tens ** 3 + hundreds ** 3;
//   if (i === sum) console.log(i);
// }

// 6-2
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      const sum = i ** 3 + j ** 3 + k ** 3;
      const origin = i * 100 + j * 10 + k;
      if (sum === origin) console.log(sum);
    }
  }
}
