// 연습문제
// 1.
// const sum = (...nums) => {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }
//   return total;
// };
// console.log(sum(10, 20, 30, 40));

// 2.
// const math = (num1, num2) => {
//   console.log(`${num1} + ${num2} = ${num1 + num2}`);
//   console.log(`${num1} - ${num2} = ${num1 - num2}`);
//   console.log(`${num1} / ${num2} = ${num1 / num2}`);
//   console.log(`${num1} * ${num2} = ${num1 * num2}`);
// };
// math(50, 30);

// 3.
// const evenOdd = (num) => {
//   if (num % 2 === 0) {
//     console.log('짝수');
//   } else {
//     console.log('홀수');
//   }
// };
// evenOdd(12);

// 4.
// const sumArray = (arr) => {
//   let sum = 0;
//   for (value of arr) sum += value;
//   return sum;
// };
// console.log(sumArray([1, 2, 3]));

// 5.
// const findMax = (arr) => {
//   let max = 0;
//   for (index in arr) {
//     if (max < arr[index]) max = arr[index];
//   }
//   return max;
// };
// console.log(findMax([1, 5, 3, 9, 2]));

// 6.
// const reverseString = (str) => {
//   let str2 = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     str2 += str[i];
//   }
//   return str2;
// };
// console.log(reverseString('hello'));

// 7.
// const countCharacter = (str, c) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === c) count += 1;
//   }
//   return count;
// };
// console.log(countCharacter('bananaa', 'a'));

// 8.
// const factorialFunc = (num) => {
//   let total = 1;
//   for (let i = 1; i <= num; i++) {
//     total *= i;
//   }
//   return total;
// };
// console.log(factorialFunc(5));

// 9.
// const triangleArea = (width, height) => {
//   return (width * height) / 2;
// };
// console.log(triangleArea(10, 20));

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// 연습문제 (+)
// 1.
// const removeChar = (str, c) => {
//   let str2 = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== c) str2 += str[i];
//   }
//   console.log(str2);
// };
// removeChar('hello world', 'o');

// 2.
// const reverseArray = (arr) => {
//   const arr2 = [];
//   for (let i = arr.length - 1; i >= 0; i--) arr2.push(arr[i]);
//   console.log(arr2);
// };
// reverseArray([1, 2, 3, 4, 5]);

// 3.
// const containsNumber = (arr, num) => {
//   for (number of arr) {
//     if (num === number) return true;
//   }
//   return false;
// };
// console.log(containsNumber([1, 2, 3, 4, 5], 8));

// 4.
// const isAnagrams = (str1, str2) => {
//   if (str1.length !== str2.length) return false;

//   const length = str1.length;

//   let str3 = [];
//   let str4 = [];

//   for (let i = 0; i < length; i++) {
//     str3.push(str1[i]);
//     str4.push(str2[i]);
//   }

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = i + 1; j < length + 1; j++) {
//       if (str3[i] < str3[j]) {
//         let temp = str3[i];
//         str3[i] = str3[j];
//         str3[j] = temp;
//       }
//       if (str4[i] < str4[j]) {
//         let temp = str4[i];
//         str4[i] = str4[j];
//         str4[j] = temp;
//       }
//     }
//   }

//   let a = '';
//   let b = '';
//   for (let i = 0; i < length; i++) {
//     a += str3[i];
//     b += str4[i];
//   }

//   return console.log(a === b);
// };

// isAnagrams('listen', 'silett');

// 5.
// const twiceSum = (arr, num) => {
//   const total = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (i + j === num) total.push([i, j]);
//     }
//   }
//   console.log(total);
// };
// twiceSum([1, 2, 3, 4, 5], 5);

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// 연습문제 (++)
// 1.
// const shortStr = (str) => {
//   let indexJump = 1;
//   let count = 1;
//   const arr = [];
//   let o = '';
//   for (let i = 0; i <= str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       indexJump += 1;
//       count += 1;
//     } else {
//       arr.push(str[i]);
//       arr.push(count);
//       count = 1;
//     }
//   }

//   for (let j = 0; j < arr.length; j++) o += arr[j];

//   return o;
// };

// console.log(shortStr('abbbffd'));

// 2.
// const isPalindrome = (str) => {
//   let str2 = '';
//   for (let i = str.length - 1; i >= 0; i--) str2 += str[i];
//   return str === str2;
// };
// console.log(isPalindrome('world'));

// 3.
// const isPalindromeSentence = (str) => {
//   const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lower = 'abcdefghijklmnopqrstuvwxyz';

//   let upperStr = '';
//   let reverseStr = '';

//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < lower.length; j++) {
//       if (str[i] === lower[j] || str[i] === upper[j]) {
//         upperStr += upper[j];
//       }
//     }
//   }

//   for (let i = upperStr.length - 1; i >= 0; i--) {
//     reverseStr += upperStr[i];
//   }

//   return console.log(upperStr === reverseStr);
// };

// isPalindromeSentence('A man, a plan, a canal, Panama!');
// isPalindromeSentence('Hello, world!');

// 4.
// const gcd = (num1, num2) => {
//   let max = num1 > num2 ? num1 : num2;
//   let yak = 0;
//   for (let i = 0; i < max; i++) {
//     if (num1 % i === 0 && num2 % i === 0) yak = i;
//   }
//   console.log(yak);
// };
// gcd(101, 10);

// 5.
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };
// console.log(bubbleSort([5, 3, 8, 1, 2]));
