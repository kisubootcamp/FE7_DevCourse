// ### 1. Palindrome Checker

// **문제 설명**: 주어진 문자열이 회문인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 확인해야 합니다.

// **기본 제공 코드**:

// ```jsx
const str = "A man a plan a canal Panama";
// 여기에 코드를 작성하세요
console.log(str === str.split("").reverse().join(""));

// ```

// ---

// ### 2. Vowel Counter

// **문제 설명**: 주어진 문자열에서 모음(a, e, i, o, u)의 개수를 세세요.

// **기본 제공 코드**:

// ```jsx
const str = "JavaScript is awesome!";
// 여기에 코드를 작성하세요
console.log((str.match(/[aeiou]/g) || []).length);
// ```

// ---

// ### 3. Anagram Checker

// **문제 설명**: 두 문자열이 애너그램인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 비교해야 합니다.

// **기본 제공 코드**:

// ```jsx
const str1 = "listen";
const str2 = "silent";
// 여기에 코드를 작성하세요
console.log(str1.split("").sort().join("") === str2.split("").sort().join(""));
// ```

// ---

// ### 4. Word Frequency Counter

// **문제 설명**: 주어진 문자열에서 각 단어의 빈도를 세어 객체로 반환하세요.

// **기본 제공 코드**:

// ```jsx
const str = "hello world hello";
// 여기에 코드를 작성하세요
console.log(str.toLowerCase().split(" ").reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc; 
}, {}))

// ```

// ---

// ### 5. Capitalize Each Word

// **문제 설명**: 문자열의 각 단어의 첫 글자를 대문자로 변환하세요.

// **기본 제공 코드**:

// ```jsx
const str = "hello world";
// 여기에 코드를 작성하세요
console.log(str.charAt(0).toUpperCase() + str.slice(1));
// ```

// ---

// ### 6. Remove Duplicates

// **문제 설명**: 문자열에서 중복된 문자를 제거한 새로운 문자열을 만드세요.

// **기본 제공 코드**:

// ```jsx
const str = "banana";
// 여기에 코드를 작성하세요
console.log([...new Set(str)].join(""));

// ```

// ---

// ### 7. Longest Word Finder

// **문제 설명**: 주어진 문자열에서 가장 긴 단어를 찾으세요.

// **기본 제공 코드**:

// ```jsx
const str = "The quick brown fox";
// 여기에 코드를 작성하세요
console.log(str.split(" ").reduce((longest, current) => current.length > longest.length ? current : longest, ""));

// ```

// ---

// ### 8. String Compression

// **문제 설명**: 문자열을 압축하세요. 같은 문자가 연속으로 나타날 경우 문자의 개수와 함께 나타내세요. 예) "aaabb" → "a3b2".

// **기본 제공 코드**:

// ```jsx
const str = "aaabbcaaa";
// 여기에 코드를 작성하세요

// ```

// ---

// ### 9. Reverse Words

// **문제 설명**: 문자열의 각 단어를 반대로 뒤집으세요. 예) "hello world" → "olleh dlrow".

// **기본 제공 코드**:

// ```jsx
// const str = "hello world";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 10. Replace Vowels

// **문제 설명**: 문자열의 모든 모음을 '#'으로 교체하세요.

// **기본 제공 코드**:

// ```jsx
// const str = "hello world";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 11. Count Consonants

// **문제 설명**: 주어진 문자열에서 자음의 개수를 세세요.

// **기본 제공 코드**:

// ```jsx
// const str = "hello world";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 12. Substring Occurrences

// **문제 설명**: 주어진 문자열에서 특정 부분 문자열(an)이 몇 번 나타나는지 세세요.

// **찾을 문자** : an

// **기본 제공 코드**:

// ```jsx
// const str = "banana";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 13. Remove Special Characters

// **문제 설명**: 문자열에서 특수 문자를 제거하세요.

// **기본 제공 코드**:

// ```jsx
// const str = "Hello@World!";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 14. String Rotation

// **문제 설명**: 두 문자열이 회전 문자열인지 확인하세요. 예) "abc"와 "cab".

// **기본 제공 코드**:

// ```jsx
// const str1 = "abc";
// const str2 = "cab";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 15. String Interleaving

// **문제 설명**: 두 문자열이 교차하여 결합된 형태인지 확인하세요. 예) "abc"와 "abdc" → true.

// **기본 제공 코드**:

// ```jsx
// const str1 = "abc";
// const str2 = "abdc";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 16. Longest Palindromic Substring

// **문제 설명**: 주어진 문자열에서 가장 긴 회문 부분 문자열을 찾으세요.

// **기본 제공 코드**:

// ```jsx
// const str = "babad";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 17. Swap Case

// **문제 설명**: 문자열의 각 문자의 대소문자를 반전시킨 새로운 문자열을 만드세요.

// **기본 제공 코드**:

// ```jsx
// const str = "Hello World!";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 18. Sentence Reverse

// **문제 설명**: 문자열의 각 문장을 반대로 뒤집고, 문장의 순서도 반대로 하세요.

// **기본 제공 코드**:

// ```jsx
// const str = "Hello. How are you?";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 19. Convert to Title Case

// **문제 설명**: 주어진 문자열을 제목 형식으로 변환하세요. 각 단어의 첫 글자는 대문자로, 나머지는 소문자로 해야 합니다.

// **기본 제공 코드**:

// ```jsx
// const str = "tHIS Is a tItLE";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 20. Create Acronym

// **문제 설명**: 주어진 문자열에서 각 단어의 첫 글자를 따서 약어를 만드세요.

// **기본 제공 코드**:

// ```jsx
// const str = "For your information";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 21. Validate Email Format

// **문제 설명**: 주어진 문자열이 유효한 이메일 주소 형식인지 확인하세요.

// **기본 제공 코드**:

// ```jsx
// const email = "example@test.com";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 22. Find Missing Letters

// **문제 설명**: 주어진 문자열에서 누락된 알파벳 문자를 찾아 배열로 반환하세요.

// **기본 제공 코드**:

// ```jsx
// const str = "abcdegh";
// // 여기에 코드를 작성하세요

// ```

// ---

// ### 23. Sort Characters

// **문제 설명**: 주어진 문자열의 문자를 알파벳 순서로 정렬하여 새로운 문자열을 만드세요.

// **기본 제공 코드**:

// ```jsx
// const str = "banana";
// // 여기에 코드를 작성하세요

// ```