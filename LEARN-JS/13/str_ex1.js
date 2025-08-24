// 연습문제
// 1.
// const str = 'Hello, World!';
// console.log(str.length);

// 2.
// const str = 'JavaScript';
// console.log(str.charAt(0));

// 3.
// const str = 'Hello, World!';
// console.log(str.indexOf('o'));

// 4.
// const str = 'Hello, World!';
// console.log(str.slice(str.indexOf('World!')));

// 5.
// const str = 'hello';
// console.log(str.toUpperCase());

// 6.
// const str = '   Hello, World!   ';
// console.log(str.trim());

// 7.
// const str = 'apple,banana,cherry';
// console.log(str.split(','));

// 8.
// const str = 'Hello, World!';
// console.log(str.replace('World', 'JavaScript'));

// 9.
// const str = 'I love JavaScript';
// console.log(str.includes('Java'));

// 10.
// const str = 'Hello, World!';
// console.log(str.startsWith('Hello'));

// 11.
// const str = 'Hello, World!';
// console.log(str.endsWith('!'));

// 12.
// const str = 'Hello';
// console.log(str.repeat(3));

// 13.
// const str = 'The rain in Spain stays mainly in the plain.';
// console.log(str.match(/ain/g));

// 14.
// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.search(/fox/));

// 15.
// const str = '5';
// console.log(str.padStart(2, '0'));

// 16.
// const str = '5';
// console.log(str.padEnd(2, '0'));

// 17.
// const str = 'istanbul';
// console.log(str.toLocaleUpperCase('tr-TR'));

// 18.
// const str = new String('Hello, World!');
// console.log(str.valueOf());

// 19.
// const str = 'banana';
// let newStr = '';
// for (let i = 0; i < str.length; i++) {
//   if (!newStr.includes(str[i])) newStr += str[i];
// }
// console.log(newStr);

// 20.
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

// 21.
// const str = 'banana';
// console.log(str.match(/a/g).length);

// 22.
// const words = ['Hello', 'world!'];
// console.log(words.join(' '));

// 23.
// const str1 = 'Hello';
// const str2 = 'hEllo';
// str1.toUpperCase().localeCompare(str2.toUpperCase()) === 0
//   ? console.log('같음')
//   : console.log('다름');
