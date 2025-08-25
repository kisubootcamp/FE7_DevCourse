// 연습문제 +
// 1.
// const str = 'A man a plan a canal Panama';

// const newStr = str.toLowerCase().split(' ').join('');
// const str2 = newStr;
// const reverseStr = str2.split('').reverse().join('');

// console.log(newStr);
// console.log(reverseStr);

// if (newStr === reverseStr) {
//   console.log('같음');
// } else console.log('다름');

// 2. a, e, i, o, u
// function countFn(str) {
//   const countObj = {
//     a: 0,
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0,
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (Object.hasOwn(countObj, str[i])) countObj[str[i]]++;
//   }

//   console.log(countObj);
// }
// const str = 'JavaScript is awesome!';
// countFn(str);

// 3.
// function sortStr(str) {
//   let newStr = str.toLowerCase().trim().split('').sort().join('');
//   return newStr;
// }

// const str1 = 'listen'.toLowerCase().trim();
// const str2 = 'silent'.toLowerCase().trim();

// console.log(sortStr(str1) === sortStr(str2));

// 4.
// const str = 'hello world hello';
// const splitStr = str.split(' ');
// const result = {};

// for (value of splitStr) {
//   if (!result[value]) {
//     result[value] = 1;
//   } else result[value]++;
// }
// console.log(result);

// 5.
// const str = 'hello world';
// const split = str
//   .split(' ')
//   .map((item) => {
//     return item
//       .split('')
//       .map((char, i) => (i === 0 ? char.toUpperCase() : char))
//       .join('');
//   })
//   .join(' ');
// console.log(split);

// 6.
// const str = 'banana';
// let newStr = '';
// for (let i = 0; i < str.length; i++) {
//   if (!newStr.includes(str[i])) newStr += str[i];
// }
// console.log(newStr);

// 7.
// const str = 'The quickkk brownn fox';
// const splitStr = str.split(' ');
// const result = splitStr.reduce((prev, item) => {
//   if (item.length > max.length) max = item;
//   return max;
// }, (max = ''));

// console.log(result);

// 8.
// const str = 'aaabbcaaa';
// const result = {};
// for (let i = 0; i < str.length; i++) {
//   if (!result[str[i]]) {
//     result[str[i]] = 1;
//   } else result[str[i]]++;
// }
// console.log(Object.entries(result).flat(1).join(''));

// 9.
// const str = 'hello world';
// const splitStr = str.split(' ');
// const result = splitStr.map((item) => item.split('').reverse().join(''));
// console.log(result.join(' '));

// 10.
// const str = 'hello world';
// const newStr = str
//   .split('')
//   .map((item) => {
//     return item === ' ' ? item : '#';
//   })
//   .join('');
// console.log(newStr);

// 11.
// const str = 'hello world';
// const count = str.split('').filter((it) => it !== ' ').length;
// console.log(count);

// 12.
// const str = 'banana';
// console.log(str.match(/an/g).length);

// 13.
// const str = 'Hello,,,@World!';
// const upperStr = str.toUpperCase();
// let result = '';
// for (let i = 0; i < upperStr.length; i++) {
//   if ('A' > upperStr[i] || 'Z' < upperStr[i]) result += upperStr[i];
// }
// console.log(result);

// 14.
// const str1 = 'abc';
// const str2 = 'cab';

// const include = str1 + str1;

// console.log(include.includes(str2));

// 15.
// const str1 = 'aboc';
// const str2 = 'abdasc';
// let isCross = true;

// str1.split('').forEach((item) => {
//   if (!str2.includes(item)) isCross = false;
// });
// console.log(isCross);

// 16.
// const str = 'babad';
// let max = 0;
// let result = '';
// for (let i = 0; i < str.length; i++) {
//   let temp = '';
//   for (let j = i; j < str.length; j++) {
//     temp += str[j];
//     if (temp === temp.split('').reverse().join('')) {
//       if (temp.length > max) {
//         max = temp.length;
//         result = temp;
//       }
//     }
//   }
// }
// console.log(result);

// 17.
// const str = 'Hello, World!';
// let newStr = '';
// for (let i = 0; i < str.length; i++) {
//   if ('A' < str[i] && 'Z' > str[i]) {
//     newStr += str[i].toLowerCase();
//   } else {
//     newStr += str[i].toUpperCase();
//   }
// }
// console.log(newStr);

// 18.
// const str = 'Hello. How are you?';
// const reverseStr = str
//   .split(' ')
//   .reverse()
//   .map((item) => {
//     return item.split('').reverse().join('');
//   });
// console.log(reverseStr.join(' '));

// 19.
// const str = 'tHIS Is a tItLE';
// const title = str.split(' ').map((item) => {
//   const a = item
//     .split('')
//     .map((it, index) => (index === 0 ? it.toUpperCase() : it.toLowerCase()));
//   return a.join('');
// });
// console.log(title);

// 20.
// const str = 'For your information';
// const acronym = str
//   .split(' ')
//   .map((item) => {
//     return item.split('').filter((_, index) => index === 0);
//   })
//   .join('');
// console.log(acronym);

// 21.
// const email = 'example@tes.tcom';
// const [check1, check2] = email.split('@');
// if (
//   !!!check1.length ||
//   check2.startsWith('.') ||
//   check2.endsWith('.') ||
//   !check2.includes('.')
// ) {
//   console.log('이메일 아님');
// } else console.log('이메일 맞음');

// 22.
// const str = 'abcdegh';
// const alphabet = 'abcdefghijklmnopqrstuvwyxz';
// for (c of alphabet) {
//   if (!str.includes(c)) {
//     console.log(c);
//   }
// }

// 23.
// const str = 'banana';
// const sortStr = str.split('').sort().join('');
// console.log(sortStr);
