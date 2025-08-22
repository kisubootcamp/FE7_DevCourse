// 배열 내장 객체
// 연습 문제

// 1. 문자열 길이 구하기
const str = "Hello, World!";
console.log(str.length);

// 2. 특정 문자 추출
const str2 = "JavaScript";
console.log(str2.charAt(0)); //J

// 3. 문자열에서 특정 인덱스 찾기
// "o"의 첫 번째 인덱스
const str3 = "Hello, World!";
console.log(str3.indexOf("o")); //4

// 4. 문자열 잘라내기
// "World" 부분
const str4 = "Hello, World!";
//console.log(str4.slice(7, 12)); //World
console.log(str4.substring(7, 12)); //World

// 5. 대문자로 변환
const str5 = "hello";
console.log(str5.toUpperCase());

// 6. 문자열의 공백 제거
const str6 = "   Hello, World!   ";
console.log(str6.trim())

// 7. 문자열 분할
const str7 = "apple,banana,cherry";
console.log(str7.split(","));

// 8. 문자열 치환
const str8 = "Hello, World!";
console.log(str8.replace('World','JavaScript')); //Hello, JavaScript!

// 9. 포함 여부 확인
const str9 = "I love JavaScript";
console.log(str9.includes("Java")); //true

// 10. 문자열 시작 확인
const str10 = "Hello, World!";
console.log(str10.startsWith('Hello')); //true

// 11. 문자열 끝 확인
console.log(str10.endsWith('!')); //true

// 12. 문자열 반복
const str12 = "Hello";
console.log(str12.repeat(3)); // 'HelloHelloHello'

// 13. 정규 표현식으로 매치 *
const str13 = "The rain in Spain stays mainly in the plain.";
const result = str13.match(/ain/g);
// g = global, 전체에서 찾는다 ? 대소문자 구분됨
// gi (플래그?) -> 대소문자 구분 안하고 다 찾아줌
console.log(result); //[ 'ain', 'ain', 'ain', 'ain' ]

// 14. 정규 표현식 검색
// fox 위치 찾기
const str14 = "The quick brown fox jumps over the lazy dog.";
const result2 = str14.search(/fox/);
console.log(result2); //16

// 15. 문자열 왼쪽 채우기 *
// 문자열 "5"를 길이 2로 만들어서 앞에 0을 채우세요 : sp?
const str15 = "5";
console.log(str15.padStart(2, '0')); //05

// 16. 문자열 오른쪽 채우기
const str16 = "5";
console.log(str16.padEnd(2, '0')); //50

// 17. 지역에 따른 대문자 변환 *
// 터키어 규칙에 맞춰 대문자로 변환
const str17 = "istanbul";
console.log(str17.toLocaleUpperCase('tr-Tr')); //İSTANBUL
console.log(str17.toLocaleLowerCase('tr-Tr')); //istanbul

// 18. 원시 값 반환
const str18 = new String("Hello, World!");
console.log(str18.valueOf()); //Hello, World!
// 원시 값(primitive value) : 객체가 아니면서, 메서드나 속성을 가지지 않는 데이터

// 19. 중복된 문자 제거 **
const str19 = "banana"; 
//console.log(str19.replace("na","")); //bana
// ..? 중복된 문자 = na? an? ana?
let uniqueChar = "";
for (let i=0; i<str19.length;i++){
  const char = str19[i]; // b -> a -> n ...
  if (!uniqueChar.includes(char)){
    uniqueChar += char;
  }
}
console.log(uniqueChar); //ban

/////////////////////////////////////////////////////

// 20. 문자열 대소문자 변환 **
// 19번과 같은 원리로 풀 수 있음 (문자열 하나씩 반복)
// 방법은 여러 가지가 있음 
const str20 = "Hello, World!";

/// 방법2
const toggled = str.map((char)=>
chsr === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
.join("");

console.log(toggled);

// 21. 특정 문자 개수 세기
// 'a'
const str21 = "banana";
console.log((str.match(/a/g)|| []).length);

// 22. 공백으로 구분된 문자열 결합
const words = ["Hello", "world!"];

console.log((str.join(" ")));

// 23. 대소문자 무시하고 문자열 비교
const str22 = "Hello";
const str23 = "hello";

console.log(str22.toUpperCase() === str23.toUpperCase());