const str = "Hello, World!";
console.log(str.substring(0, 5)); // 'Hello'
console.log(str.slice(1, 3)); 
console.log(str.slice(-1)); 

const str2 = "Hello, World!  World!";
const newStr = str2.replaceAll("World", "JavaScript");
console.log(newStr);

const str3 = "Hello, World!";
console.log(str3.startsWith("H"));
console.log(str3.endsWith("!"));

