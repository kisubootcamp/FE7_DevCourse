// ### 1. 문자열 길이 구하기

// **문제 설명**: 주어진 문자열의 길이를 구하세요.

// **기본 제공 코드**:

const str = "Hello, World!";
console.log(str.length);

// ### 2. 특정 문자 추출

// **문제 설명**: 주어진 문자열의 첫 번째 문자를 반환하세요.

// **기본 제공 코드**:

const str2 = "JavaScript";
console.log(str2.charAt(0));

// ### 3. 문자열에서 특정 인덱스 찾기

// **문제 설명**: 문자열에서 "o"의 첫 번째 인덱스를 구하세요.

// **기본 제공 코드**:

const str3 = "Hello, World!";
console.log(str3.indexOf("o"));

// ### 4. 문자열 잘라내기

// **문제 설명**: 문자열에서 "World" 부분만 잘라내세요.

// **기본 제공 코드**:

const str4 = "Hello, World!";
console.log(str4.slice(7, -1));

// ### 5. 대문자로 변환

// **문제 설명**: 주어진 문자열을 모두 대문자로 변환하세요.

// **기본 제공 코드**:

const str5 = "Hello, World!";
console.log(str5.toUpperCase());

// ### 6. 문자열의 공백 제거

// **문제 설명**: 주어진 문자열의 양쪽 공백을 제거하세요.

// **기본 제공 코드**:

const str6 = "   Hello, World!   ";
console.log(str6.trim());

// ### 7. 문자열 분할

// **문제 설명**: 문자열을 쉼표(,)로 분할하여 배열로 만드세요.

// **기본 제공 코드**:

const str7 = "apple,banana,cherry";
console.log(str7.split(","));

// ### 8. 문자열 치환

// **문제 설명**: 문자열에서 "World"를 "JavaScript"로 교체하세요.

// **기본 제공 코드**:

const str8 = "Hello, World!";
console.log(str8.replace("World", "JavaScript"));

// ### 9. 포함 여부 확인

// **문제 설명**: 문자열에 "Java"가 포함되어 있는지 확인하세요.

// **기본 제공 코드**:

const str9 = "I love JavaScript";
console.log(str9.includes("Java"));

// ### 10. 문자열 시작 확인

// **문제 설명**: 문자열이 "Hello"로 시작하는지 확인하세요.

// **기본 제공 코드**:

const str10 = "Hello, World!";
console.log(str10.startsWith("Hello"));

// ### 11. 문자열 끝 확인

// **문제 설명**: 문자열이 "!"로 끝나는지 확인하세요.

// **기본 제공 코드**:

const str11 = "Hello, World!";
console.log(str11.endsWith("!"));

// ### 12. 문자열 반복

// **문제 설명**: 문자열을 3번 반복하여 새로운 문자열을 만드세요.

// **기본 제공 코드**:

const str12 = "Hello";
console.log(str12.repeat(3));

// ### 13. 정규 표현식으로 매치

// **문제 설명**: 문자열에서 "ain"이 포함된 부분을 찾아 배열로 반환하세요.

// **기본 제공 코드**:

const str13 = "The rain in Spain stays mainly in the plain.";
console.log(str13.match(/ain/g));

// ### 14. 정규 표현식 검색

// **문제 설명**: 문자열에서 "fox"의 위치를 찾으세요.

// **기본 제공 코드**:

const str14 = "The quick brown fox jumps over the lazy dog.";
console.log(str14.search(/fox/));

// ### 15. 문자열 왼쪽 채우기

// **문제 설명**: 문자열 "5"를 길이 2로 만들어서 앞에 0을 채우세요.

// **기본 제공 코드**:

const str15 = "5";
console.log(str15.padStart(2, "0"));

// ### 16. 문자열 오른쪽 채우기

// **문제 설명**: 문자열 "5"를 길이 2로 만들어서 뒤에 0을 채우세요.

// **기본 제공 코드**:

const str16 = "5";
console.log(str16.padEnd(2, "0"));

// ### 17. 지역에 따른 대문자 변환

// **문제 설명**: 문자열 "istanbul"을 터키어 규칙에 맞춰 대문자로 변환하세요.

// **기본 제공 코드**:

const str17 = "istanbul";
console.log(str17.toLocaleUpperCase("tr-TR"));

// ### 18. 원시 값 반환

// **문제 설명**: 문자열 객체의 원시 값을 반환하세요.

// **기본 제공 코드**:

const str18 = new String("Hello, World!");
console.log(str18.valueOf());

// ### 19. 중복된 문자 제거

// **문제 설명**: 문자열에서 중복된 문자를 제거하여 새로운 문자열을 만드세요.

// **기본 제공 코드**:

const str19 = "banana";
let result = "";
for (let i = 0; i < str19.length; i++) {
  if (!result.includes(str19[i])) {
    result += str19[i];
  }
}
console.log(result);
// 출력결과 : ban

// ### 20. 문자열 대소문자 변환

// **문제 설명**: 문자열의 각 문자의 대소문자를 반전시킨 새로운 문자열을 만드세요.

// **기본 제공 코드**:

const str20 = "Hello, World!";
let result2 = "";
for (let i = 0; i < str20.length; i++) {
  const char = str20[i];
  if (char == char.toUpperCase()) {
    result2 += char.toLowerCase();
  } else {
    result2 += char.toUpperCase();
  }
}
console.log(result2);

// ### 21. 특정 문자 개수 세기

// **문제 설명**: 주어진 문자열에서 "a"의 개수를 세세요.

// **기본 제공 코드**:

const str21 = "banana";
console.log((str21.match(/a/g) || []).length);

// ### 22. 공백으로 구분된 문자열 결합

// **문제 설명**: 주어진 배열의 요소를 공백으로 구분하여 하나의 문자열로 결합하세요.

// **기본 제공 코드**:

const words = ["Hello", "world!"];
console.log(words.join(" "));

// ### 23. 대소문자 무시하고 문자열 비교

// **문제 설명**: 두 문자열이 대소문자를 무시하고 동일한지 확인하세요.

// **기본 제공 코드**:

const str23 = "Hello";
const str24 = "hello";

const str23_Up = str23.toUpperCase();
const str24_Up = str24.toUpperCase();
console.log(str23_Up === str24_Up);
