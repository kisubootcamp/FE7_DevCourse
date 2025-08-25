//문자열 내장 객체 연습문제

//1
// const str = "Hello, World!";
// console.log(str.length);

//2
// const str = "JavaScript";
// console.log(str.charAt(0));

//3
// const str = "Hello, World!";
// console.log(str.indexOf("o"));

//4
// const str = "Hello, World!";
// console.log(str.substring(7, 12));

//5
// const str = "hello";
// console.log(str.toUpperCase());

//6
// const str = "   Hello, World!   ";
// console.log(str.trim());

//7
// const str = "apple,banana,cherry";
// console.log(str.split(","));

//8
// const str = "Hello, World!";
// console.log(str.replace("World", "JavaScript"));

//9
// const str = "I love JavaScript";
// console.log(str.includes("Java"));

//10
// const str = "Hello, World!";
// console.log(str.startsWith("Hello"));

//11
// const str = "Hello, World!";
// console.log(str.endsWith("!"));

//12
// const str = "Hello";
// console.log(str.repeat(3));

//13
// const str = "The rain in Spain stays mainly in the plain.";
// console.log(str.match(/ain/g)); //g는 글로벌의 약자이다, gi로 하면 대소문자 비교하지 않고 다 찾아줌

//14
// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.search(/fox/));

//15
// const str = "5";
// console.log(str.padStart(2, 0));

//16
// const str = "5";
// console.log(str.padEnd(2, 0));

//17
// const str = "istanbul";
// console.log(str.toLocaleUpperCase("tr-TR"));
// console.log(Intl.DateTimeFormat().resolvedOptions().locale); // 이건 내 컴퓨터 언어가 어떻게 되어있는지 구하는 것

//18
// const str = new String("Hello, World!");
// console.log(str.valueOf()); // 'Hello, World!'

//19
// const str = "banana";
// let uniqueChar = "";
// for (let i = 0; i < str.length; i++) {
//   const char = str[i];
//   if (!uniqueChar.includes(char)) {
//     uniqueChar += char;
//   }
// }
// console.log(uniqueChar);

//20
// const str = "Hello, World!";
// let uniqueChar = "";
// for (let i = 0; i < str.length; i++) {
//   const char = str[i];
//   if (char == char.toUpperCase()) {
//     uniqueChar += char.toLowerCase();
//   } else {
//     uniqueChar += char.toUpperCase();
//   }
// }
// console.log(uniqueChar);

//21
// const str = "banana";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str.charAt(i) === "a") count++;
// }
// console.log(count);

// 다른 풀이
// console.log((str.match(/x/g) || []).length);

//22
// const words = ["Hello", "world!"];
// console.log(words.join(" "));

//23
// const str1 = "Hello";
// const str2 = "hello";
// console.log(str1.toUpperCase() === str2.toUpperCase() ? true : false);
