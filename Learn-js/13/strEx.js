// 1. 문자열 길이 구하기 - 주어진 문자열의 길이를 구하세요.
const str1 = "Hello, World!";
console.log(str1.length);

// 2. 특정 문자 추출 - 주어진 문자열의 첫 번째 문자를 반환하세요.
const str2 = "JavaScript";
console.log(str2.charAt(0));

// 3. 문자열에서 특정 인덱스 찾기 - 문자열에서 "o"의 첫 번째 인덱스를 구하세요.
const str3 = "Hello, World!";
console.log(str3.indexOf("o"));

// 4. 문자열 잘라내기 - 문자열에서 "World" 부분만 잘라내세요.
const str4 = "Hello, World!";
console.log(str4.slice("World"));

// 5. 대문자로 변환 - 주어진 문자열을 모두 대문자로 변환하세요.
const str5 = "hello";
console.log(str5.toUpperCase());

// 6. 문자열의 공백 제거 - 주어진 문자열의 양쪽 공백을 제거하세요.
const str6 = "   Hello, World!   ";
console.log(str6.trim());

// 7. 문자열 분할 - 문자열을 쉼표(,)로 분할하여 배열로 만드세요.
const str7 = "apple,banana,cherry";
console.log(str7.split(","));

// 8. 문자열 치환 - 문자열에서 "World"를 "JavaScript"로 교체하세요.
const str8 = "Hello, World!";
console.log(str8.replace("World", "JavaScript"));

// 9. 포함 여부 확인 - 문자열에 "Java"가 포함되어 있는지 확인하세요.
const str9 = "I love JavaScript";
console.log(str9.includes("Java"));

// 10. 문자열 시작 확인 - 문자열이 "Hello"로 시작하는지 확인하세요.
const str10 = "Hello, World!";
console.log(str10.startsWith("Hello"));

// 11. 문자열 끝 확인 - 문자열이 "!"로 끝나는지 확인하세요.
const str11 = "Hello, World!";
console.log(str11.endsWith("!"));

// 12. 문자열 반복 - 문자열을 3번 반복하여 새로운 문자열을 만드세요.
const str12 = "Hello";
console.log(str12.repeat(3));

// 13. 정규 표현식으로 매치 - 문자열에서 "ain"이 포함된 부분을 찾아 배열로 반환하세요.
const str13 = "The rain in Spain stays mainly in the plain.";
console.log(str13.match(/ain/g));

// 14. 정규 표현식 검색 - 문자열에서 "fox"의 위치를 찾으세요.
const str14 = "The quick brown fox jumps over the lazy dog.";
console.log(str14.indexOf("fox"));
console.log(str14.search(/fox/));

// 15. 문자열 왼쪽 채우기 - 문자열 "5"를 길이 2로 만들어서 앞에 0을 채우세요.
const str15 = "5";
console.log(str15.padStart(2, "0"));

// 16. 문자열 오른쪽 채우기 - 문자열 "5"를 길이 2로 만들어서 뒤에 0을 채우세요.
const str16 = "5";
console.log(str16.padEnd(2, "0"));

// 17. 지역에 따른 대문자 변환 - 문자열 "istanbul"을 터키어 규칙에 맞춰 대문자로 변환하세요.
const str17 = "istanbul";
console.log(str17.toLocaleUpperCase("tr-TR"));

// 18. 원시 값 반환 - 문자열 객체의 원시 값을 반환하세요.
const str18 = new String("Hello, World!");
console.log(str18.valueOf());

// 19. 중복된 문자 제거 - 문자열에서 중복된 문자를 제거하여 새로운 문자열을 만드세요.
const str19 = "banana";
let result19 = "";
for (const key of str19) {
  if (!result19.includes(key)) result19 += key;
}
console.log(result19);
// 출력결과 : ban

// 20. 문자열 대소문자 변환 - 문자열의 각 문자의 대소문자를 반전시킨 새로운 문자열을 만드세요.
const str20 = "Hello, World!";
// 방법1
let result = "";
for (const key of str20) {
  if (key >= "a" && key <= "z") {
    result += key.toUpperCase();
  } else if (key >= "A" && key <= "Z") {
    result += key.toLowerCase();
  } else {
    result += key;
  }
}
// 방법2
const toggled = str20
  .split("")
  .map((ch) => (ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()))
  .join("");
console.log(toggled);

// 21. 특정 문자 개수 세기 - 주어진 문자열에서 "a"의 개수를 세세요.
const str21 = "banana";
let count = 0;
for (const key of str21) {
  if (key === "a") {
    count++;
  }
}
console.log(count);

// 22. 공백으로 구분된 문자열 결합 - 주어진 배열의 요소를 공백으로 구분하여 하나의 문자열로 결합하세요.
const words = ["Hello", "world!"];
console.log(words.join(" "));

// 23. 대소문자 무시하고 문자열 비교 - 두 문자열이 대소문자를 무시하고 동일한지 확인하세요.
const str231 = "Hello";
const str232 = "hello";
console.log(str231.toLowerCase() === str232.toLowerCase());
