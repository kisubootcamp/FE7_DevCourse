//반복문 어려움
//1
// let n = 10;
// let result = 0;
// let arr = [0, 1];
// for (i = 2; i < n; i++) {
//   arr.push(arr[i - 2] + arr[i - 1]);
// }
// result = arr.pop();
// console.log(`피보나치 수열(${n}항):`, result);

//2
// let start = 1,
//   end = 100;
// let results = [];
// while (start <= end) {
//   let numArr = [];
//   for (let i = 0; i <= start; i++) {
//     if (start % i === 0) numArr.push(i);
//   }
//   if (numArr.length === 2) results.push(start);
//   start++;
// }
// console.log(results);

//3
const numbers = [5, 10, 15, 20, 25];
let results = 0;
for (const elm of numbers) results += elm;
console.log(results);

//4
const str = "Hello, World!";
let reverseStr = [];
for (let end = str.length - 1; end >= 0; end--) {
  reverseStr += str[end];
}
console.log(reverseStr);

//5
let n = 5;
let factorial = 1;
for (let i = n; i > 0; i--) {
  factorial *= i;
}
console.log(`${n}의 팩토리얼:`, factorial);

//6
const end = 999;
for (let start = 100; start <= end; start++) {
  let h = parseInt(start % 10);
  let t = parseInt((start % 100) / 10);
  let n = start % 10;
  let hap = 0;
  h = h * h * h;
  t = t * t * t;
  n = n * n * n;
  hap = h + t + n;
  if (start === hap) console.log(hap);
}
