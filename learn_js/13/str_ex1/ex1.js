// // 1
// const str = 'Hello, World!';
// console.log(str.length);

// // 2
// const str = 'JavaScript';
// console.log(str.charAt(0));

// // 3
// const str = 'Hello, World!';
// console.log(str.indexOf('o'));

// // 4
// const str = 'Hello, World!';
// console.log(str.substring(7, 12)); // "World"

// // 5
// const str = 'hello';
// console.log(str.toUpperCase());

// // 6
// const str = '   Hello, World!   ';
// console.log(str.trim());

// // 7
// const str = "apple,banana,cherry";
// console.log(str.split(","));

// // 8
// const str = 'Hello, World!';
// console.log(str.replace('World', 'JavaScript'));

// // 9
// const str = 'I love JavaScript';
// console.log(str.includes('Java'));

// // 10
// const str = 'Hello, World!';
// console.log(str.startsWith('Hello'));

// // 11
// const str = 'Hello, World!';
// console.log(str.endsWith('!'));

// // 12
// const str = 'Hello';
// console.log(str.repeat(3));

// // 13
// const str = 'The rain in Spain stays mainly in the plain.';
// console.log(str.match(/ain/g));

// // 14
// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.indexOf('fox'));

// // 15
// const str = '5';
// console.log(str.padStart(2, '0'));

// // 16
// const str = '5';
// console.log(str.padEnd(2, '0'));

// // 17
// const str = 'istanbul';
// console.log(str.toLocaleUpperCase('tr-TR'));

// // 18
// const str = new String('Hello, World!');
// console.log(str.valueOf());

// // 19
// const str = 'banana';
// console.log(
//   str.split('').reduce((c, r) => {
//     if (!c.includes(r)) c += r;
//     return c;
//   }, '')
// );

// // 20
// const str = 'Hello, World!';
// const result = str
//   .split('')
//   .map((ch) => {
//     if (ch === ch.toUpperCase()) return ch.toLowerCase();
//     if (ch === ch.toLowerCase()) return ch.toUpperCase();
//   })
//   .join('');
// console.log(result);

// // 21
// const str = 'banana';
// console.log(
//   str.split('').reduce((c, r) => {
//     if (r === 'a') c += 1;
//     return c;
//   }, 0)
// );

// // 22 주어진 배열의 요소를 공백으로 구분하여 하나의 문자열로 결합하세요.
// const words = ['Hello', 'world!'];
// console.log(words.join(' '));

// // 23 두 문자열이 대소문자를 무시하고 동일한지 확인하세요.
// const str1 = 'Hello';
// const str2 = 'hello';
// console.log(str1.toLowerCase() === str2.toLowerCase());
