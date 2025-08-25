// 문자 내장 객체 연습문제+

//1

// const str = "A man a plan a canal Panama";
// const result = str.toUpperCase().split(" ");
// const reverse = result.reverse();
// if (result.join("") === reverse.join("")) return console.log(true);
// else return console.log(false);

//2
// const str = "JavaScript is awesome!";
// let count = 0;
// count += (str.match(/a/g) || []).length;
// count += (str.match(/e/g) || []).length;
// count += (str.match(/i/g) || []).length;
// count += (str.match(/o/g) || []).length;
// count += (str.match(/u/g) || []).length;
// console.log(count);

//3
// const str1 = "listen";
// const str2 = "silent";
// const splitStr1 = str1.split("");
// const bool = true;

// for (const elm of splitStr1) {
//   if (str2.includes(elm)) continue;
//   else {
//     bool = false;
//     break;
//   }
// }
// console.log(bool);

//4
// const str = "hello world hello";
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") continue;
//   obj[str[i]] = (obj[str[i]] || 0) + 1;
// }
// console.log(obj);

//5
// const str = "hello world";
// const arr = str.split("");
// arr[0] = arr[0].toUpperCase();
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i - 1] === " ") arr[i] = arr[i].toUpperCase();
// }

// console.log(arr.join(""));

//6
// const str = "banana";
// result = "";
// for (let i = 0; i < str.length; i++) {
//   if (result.includes(str[i])) continue;
//   result += str[i];
// }
// console.log(result);

//7
// let max = 0;
// let word;
// const str = "The quick brown fox";
// const splitStr = str.split(" ").forEach((elm) => {
//   if (elm.length > max) {
//     max = elm.length;
//     word = elm;
//   }
//   return word, max;
// });
// console.log(word);

//8
// const str = "aaabbcaaa";
// let count = 0;
// let current = str[0];
// let result = [];
// for (let i = 0; i <= str.length; i++) {
//   if (current === str[i]) {
//     count++;
//   } else {
//     result.push(current, count);
//     current = str[i];
//     count = 1;
//   }
// }
// console.log(result.join(""));

//9
// const str = "hello world";
// const splitStr = str
//   .split(" ")
//   .reverse()
//   .join(" ")
//   .split("")
//   .reverse()
//   .join("");
// console.log(splitStr);

//10
// let str = "hello world";
// const arr = ["a", "e", "i", "o", "u"];
// for (const elm of arr) {
//   str = str.replaceAll(elm, "#");
// }
// console.log(str);

//11
// const str = "hello world";
// let count = 0;
// count += (str.match(/a/g) || []).length;
// count += (str.match(/e/g) || []).length;
// count += (str.match(/i/g) || []).length;
// count += (str.match(/o/g) || []).length;
// count += (str.match(/u/g) || []).length;
// console.log(str.length - count);

//12
// const str = "banana";
// let count = 0;
// for (let i = 0; i < str.length - 1; i++) {
//   if (str[i] === "a" && str[i + 1] === "n") count++;
// }
// console.log(count);

//13
// const str = "Hello@World!";
// let result = "";
// for (const char of str) {
//   if (char.toLowerCase() !== char.toUpperCase(char)) result += char;
// }
// console.log(result);

//14
// const str1 = "abc";
// const str2 = "cab";

// const start = str1[0];
// for (let i = 0; i < str2.length; i++) {
//   if (start === str2[i]) {
//     let idx = i;
//   } else console.log(false);
// }
// for (let i = idx; i < str1.length; i++) {
//   if (str2[i] !== str1[Math.floor((i + start) / 2)]) {
//     console.log(false);
//     break;
//   }
//   if (i === 2) i = i % 2;
// }
// console.log(true);

//15
// const str1 = "abc";
// const str2 = "abdc";
// let isRotate = true;
// for (const elm of str1) if (!str2.includes(elm)) isRotate = false;
// console.log(isRotate);

//16
// const str = "babad";

//17
// const str = "Hello World!";
// let result = "";
// for (const elm of str) {
//   if (elm.toLowerCase() === elm) result += elm.toUpperCase();
//   else if (elm.toUpperCase() === elm) result += elm.toLowerCase();
//   else result += elm;
// }
// console.log(result);

//18
// const str = "Hello. How are you?";
// console.log(str.split("").reverse().join(""));

//19
// let arr1 = [];
// [for(let i = 0;i<str.split(" ").length;i++){
//   [arr]
// }] = str.split(" ");
// console.log(arr1);

// const str = "tHIS Is a tItLE";
// let answer = str[0].toUpperCase();
// for (let i = 1; i < str.length; i++) {
//   if (str[i] === " ") {
//     answer = answer + str[i] + str[i + 1].toUpperCase();
//     i++;
//   } else {
//     answer += str[i].toLowerCase();
//   }
// }
// console.log(answer);

//20
// const str = "For your information";
// let answer = "";
// for (const elm of str.split(" ")) {
//   answer += elm[0];
// }
// console.log(answer);

//21
// const email = "example@test.com";

//22
// const str = "abcdegh";

//23
// const str = "banana";
// let arr = [];
// for (const char of str) {
//   arr.push(char.charCodeAt());
// }

// let arr2 = arr.sort((a, b) => a - b);
// let answer = "";
// for (const elm of arr2) {
//   answer += String.fromCharCode(elm);
// }
// console.log(answer);
