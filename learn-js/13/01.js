// 문자열 내장 객체

// indexOf() ...
// 배열의 것과 기능은 같지만, 같은 것은 아님.

// substring()
const str = "Hello, World!";
console.log(str.substring(0, 5)); // 'Hello'
// end 제외, 음수 지원 x, array.slice()처럼

// replace(), replaceAll()
const str2 = "Hello, World!, World!";
const newStr = str2.replace("World", "JavaScript");
const newStr2 = str2.replaceAll("World", "JavaScript");
console.log(newStr); // Hello, JavaScript!, World! :: 앞에거 하나만
console.log(newStr2); // Hello, JavaScript!, JavaScript! :: 전부