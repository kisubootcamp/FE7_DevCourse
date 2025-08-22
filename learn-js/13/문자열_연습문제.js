// Q1
const str = "Hello, World!";
console.log(str.length);

//Q2
const str = "JavaScript";
// console.log(str[0]);
console.log(str.charAt(0));

//Q3
const str = "Hello, World!";
console.log(str.indexOf("o"));

//Q4
const str = "Hello, World!";
console.log(str.substring(7, 14));

//Q5
const str = "hello";
console.log(str.toUpperCase());

//Q6
const str = "   Hello, World!   ";
console.log(str.trim());

//Q7
const str = "apple,banana,cherry";
console.log(str.split(","));

//Q8
const str = "Hello, World!";
console.log(str.replace("World", "JavaScript"));

//Q9
const str = "I love JavaScript";
console.log(str.includes("Java"));

//Q10
const str = "Hello, World!";
console.log(str.startsWith("Hello"));

//11
const str = "Hello, World!";
console.log(str.endsWith("!"));

//12
const str = "Hello";
console.log(str.repeat(3));

//13 ain
const str = "The rain in Spain stays mainly in the plain.";
console.log(str.match(/ain/g));

//14
const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.match(/fox/).index);
console.log(str.search(/fox/));

//15
const str = "5";
console.log(str.padStart(2, 0));

//16
const str = "5";
console.log(str.padEnd(2, 0));

//17
const str = "istanbul";
console.log(str.toLocaleUpperCase("tr-TR"));

//18
const str = new String("Hello, World!");
console.log(str.valueOf());

//19
const str = "banana";
// 출력결과 : ban
const obj = {};
for (const char of str) {
  if (!obj[char]) {
    obj[char] = true;
  }
}
const chars = Object.keys(obj);
const result = chars.join("");

console.log(result);

//20
const str = "Hello, World!";
let newStr = "";
for (const char of str) {
  if (char >= "a" && char <= "z") {
    newStr += char.toUpperCase();
  } else {
    newStr += char.toLowerCase();
  }
}
console.log(newStr);

//21
const str = "banana";
let count = 0;
for (const char of str) {
  if (char === "a") {
    count++;
  }
}
console.log(count);

//22
const words = ["Hello", "world!"];
console.log(words.join(" "));

//23
const str1 = "Hello";
const str2 = "hello";
console.log(str1.toLowerCase === str2.toLowerCase);
