// 문자 내장 객체 연습문제

// 1: 주어진 문자열의 길이를 구하세요.
const str = "Hello, World!";
// 여기에 코드를 작성하세요
console.log(str.length); // 13

//

// 2. 주어진 문자열의 첫 번째 문자를 반환하세요.
const str2 = "JavaScript";
// 여기에 코드를 작성하세요
console.log(str2.slice(0, 1)); // J
console.log(str2.charAt(0)); // J
console.log(str2[0]); // J

//

// 3. 문자열에서 "o"의 첫 번째 인덱스를 구하세요.
const str3 = "Hello, World!";
// 여기에 코드를 작성하세요
console.log(str3.indexOf("o")); // 4

//

// 4. 문자열에서 "World" 부분만 잘라내세요.
const str4 = "Hello, World!";
// 여기에 코드를 작성하세요
console.log(str4.slice(7, 12)); // World

//

// 5. 주어진 문자열을 모두 대문자로 변환하세요.
const str5 = "hello";
// 여기에 코드를 작성하세요
console.log(str5.toUpperCase()); // HELLO

//

// 6. 주어진 문자열의 양쪽 공백을 제거하세요.
const str6 = "   Hello, World!   ";
// 여기에 코드를 작성하세요
console.log(str6.trim());

//

// 7. 문자열을 쉼표(,)로 분할하여 배열로 만드세요.
const str7 = "apple,banana,cherry";
console.log(str7.split(","));

//

// 8. 문자열에서 "World"를 "JavaScript"로 교체하세요.
const str8 = "Hello, World!";
// 여기에 코드를 작성하세요

//

// 9. 문자열에 "Java"가 포함되어 있는지 확인하세요.
const str9 = "I love JavaScript";
// 여기에 코드를 작성하세요
console.log(str9.includes("Java")); // true

//

// 10. 문자열이 "Hello"로 시작하는지 확인하세요.
const st10 = "Hello, World!";
// 여기에 코드를 작성하세요
console.log(st10.startsWith("Hello")); // true

//

// 11. 문자열이 "!"로 끝나는지 확인하세요.
const str11 = "Hello, World!";
// 여기에 코드를 작성하세요
console.log(str11.endsWith("!")); // true

//

// 12. 문자열을 3번 반복하여 새로운 문자열을 만드세요.
const str12 = "Hello";
const newStr12 = str12.repeat(3);
console.log(newStr12); // HelloHelloHello

//

// 13. 문자열에서 "ain"이 포함된 부분을 찾아 배열로 반환하세요.
const str13 = "The rain in Spain stays mainly in the plain.";
// 여기에 코드를 작성하세요
const matches = str13.split(" ").filter((word) => word.includes("ain"));
console.log(matches); // [ 'rain', 'Spain', 'plain.' ]

//

// 14. 문자열에서 "fox"의 위치를 찾으세요.
const str14 = "The quick brown fox jumps over the lazy dog.";
// 여기에 코드를 작성하세요
console.log(str14.indexOf("fox")); // 16

//

// 15. 문자열 "5"를 길이 2로 만들어서 앞에 0을 채우세요.
const str15 = "5";
// 여기에 코드를 작성하세요
console.log(str15.padStart(2, "0")); // 05
// console.log(str15.padStart(3, "0")); // 005

//

// 16. 문자열 "5"를 길이 2로 만들어서 뒤에 0을 채우세요.
const str16 = "5";
// 여기에 코드를 작성하세요
console.log(str16.padEnd(2, "0")); // 50
// console.log(str16.padEnd(3, "0")); // 500

//

// 17. 문자열 "istanbul"을 터키어 규칙에 맞춰 대문자로 변환하세요.
const str17 = "istanbul";
// 여기에 코드를 작성하세요
console.log(str17.toLocaleUpperCase("tr-TR")); // İSTANBUL

//

// 18. 문자열 객체의 원시 값을 반환하세요.
const str18 = new String("Hello, World!");
// 여기에 코드를 작성하세요
console.log(str18.valueOf()); // Hello, World!

//

// 19. 문자열에서 중복된 문자를 제거하여 새로운 문자열을 만드세요.
const str19 = "banana";
// 출력결과 : ban
const uniqueChars = Array.from(new Set(str19)).join("");

//

// 20. 문자열의 각 문자의 대소문자를 반전시킨 새로운 문자열을 만드세요.
const str20 = "Hello, World!";
// 여기에 코드를 작성하세요
const invertedStr20 = Array.from(str20)
  .map((char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  )
  .join("");
console.log(invertedStr20); // hELLO, wORLD!
