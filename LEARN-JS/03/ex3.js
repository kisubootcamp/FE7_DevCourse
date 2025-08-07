// 연습문제 (쉬움)
// 1.
// for (let i = 1; i <= 9; i++) {
//   console.log(i);
// }

// 2.
// let sum = 0;
// for (let i = 1; i <= 9; i++) {
//   sum += i;
// }
// console.log(sum);

// 3.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// 4.
// let numArr = [10, -10, 20, -30, 40];
// for (const num of numArr) {
//   if (num > 0) console.log(num);
// }

// 5.
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i}는 짝수`);
//   } else {
//     console.log(`${i}는 홀수`);
//   }
// }

// 6.
// let max = 0;
// const numArr = [7, 2, 9, 11, 5];
// for (let i = 0; i < numArr.length - 1; i++) {
//   for (let j = i + 1; j < numArr.length; j++) {
//     if (numArr[i] > numArr[j]) max = numArr[i];
//   }
// }
// console.log(max);

// 7.
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = [];
// for (let i = 0; i <= arr.length; i++) {
//   if (i % 2 === 0) arr2.push(arr[i]);
// }
// console.log(arr2);

// 8.
// for (let i = 1; i <= 9; i++) {
//   console.log(i * 3);
// }

// 연습문제 (어려움)
// 1.
// let n = 10;
// let arr = [0, 1];
// for (let i = 0; i < n - 2; i++) {
//   arr.push(arr[i] + arr[i + 1]);
// }
// console.log(`피보나치 수열(${n}항):`, arr);

// 2.
// for (let i = 2; i <= 100; i++) {
//   let count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) count += 1;
//   }

//   if (count === 2) console.log(i);
// }

// 3.
// const numbers = [5, 10, 15, 20, 25];
// let results = 0;
// for (const num of numbers) {
//   results += num;
// }
// console.log(results);

// 4.
// const str = 'Hello, World!';
// let str2 = '';
// for (let i = str.length - 1; i >= 0; i--) {
//   str2 += str[i];
// }
// console.log(str2);

// 5.
// let n = 5;
// let total = 1;
// for (let i = 1; i <= n; i++) {
//   total *= i;
// }
// console.log(total);

// 6.
// for (let i = 100; i <= 999; i++) {
//   let str = '' + i;
//   let sum = 0;
//   for (let j = 0; j < 3; j++) {
//     sum = sum + (str[j] **= 3);
//   }
//   if (sum === i) console.log(i);
// }
