//------------------------------------------------------------------------------------------------------------------
// 연습문제+
// 1. Palindrome Checker - 주어진 문자열이 회문인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 확인해야 합니다.
const str11 = "A man a plan a canal Panama";
const result = str11.trim().toLowerCase().split(" ").join("");
let bool = true;

for (let i = 0; i < result.length; i++) {
  if (result[i] !== result[result.length - 1 - i]) {
    bool = false;
    break;
  }
}
console.log(bool); // true

// 2. Vowel Counter - 주어진 문자열에서 모음(a, e, i, o, u)의 개수를 세세요.
const str21 = "JavaScript is awesome!";
const vowels = ["a", "e", "i", "o", "u"];
let n = 0;
for (let i = 0; i < str21.length; i++) {
  const ch = str21[i].toLowerCase();
  if (vowels.includes(ch)) {
    n++;
  }
}

console.log(n);

// 3. Anagram Checker - 두 문자열이 애너그램인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 비교해야 합니다.
const str31 = "listen";
const str32 = "silent";

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const str1 = s1.trim().toLowerCase();
  const str2 = s2.trim().toLowerCase();
  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(isAnagram(str31, str32));

// 4. Word Frequency Counter - 주어진 문자열에서 각 단어의 빈도를 세어 객체로 반환하세요.
const str41 = "hello world hello";

function freqCounter(str) {
  return str
    .split(" ")
    .join("")
    .split("")
    .reduce((r, s) => {
      r[s] = (r[s] || 0) + 1;
      return r;
    }, {});
}

console.log(freqCounter(str41));

// 5. Capitalize Each Word - 문자열의 각 단어의 첫 글자를 대문자로 변환하세요.
const str51 = "hello world";

function capitalizeEachWord(str) {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1)) // 첫 글자 대문자
    .join(" ");
}

console.log(capitalizeEachWord(str51));

// 6. Remove Duplicates - 문자열에서 중복된 문자를 제거한 새로운 문자열을 만드세요.
const str61 = "banana";

function removeDuplicates(str) {
  let result = "";
  for (let key of str) {
    if (!result.includes(key)) {
      result += key;
    }
  }
  return result;
}
console.log(removeDuplicates(str61));

// 7. Longest Word Finder - 주어진 문자열에서 가장 긴 단어를 찾으세요.
const str71 = "The quick brown fox";

function longestWordFinder(str) {
  const arr = str.split(" ");
  let maxLength = 0;
  let result = [];

  for (const key of arr) {
    if (key.length > maxLength) {
      maxLength = key.length;
      result = [key];
    } else if (key.length === maxLength) {
      result.push(key);
    }
  }

  return result;
}

console.log(longestWordFinder(str71));

// 8. String Compression - 문자열을 압축하세요.
// 같은 문자가 연속으로 나타날 경우 문자의 개수와 함께 나타내세요. // 예) "aaabb" → "a3b2".
const str81 = "aaabbcaaa";

function strCompression(str) {
  let strObj = str.split("").reduce((r, v) => {
    r[v] = (r[v] || 0) + 1;
    return r;
  }, {});
  let result = "";
  for (const key in strObj) {
    result += key + strObj[key];
  }
  return result;
}

console.log(strCompression(str81));

// 9. Reverse Words - 문자열의 각 단어를 반대로 뒤집으세요. 예) "hello world" → "olleh dlrow".
const str91 = "hello world";

function reverseWords(str) {
  return str
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords(str91));

// 10. Replace Vowels - 문자열의 모든 모음을 '#'으로 교체하세요.
const str101 = "hello world";

function replaceVowels(str) {
  return str.replace(/[aeiou]/gi, "#");
}

console.log(replaceVowels(str101));

// 11. Count Consonants - 주어진 문자열에서 자음의 개수를 세세요.
const str111 = "hello world";

function countConsonants(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of str.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countConsonants(str111));

// 12. Substring Occurrences - 주어진 문자열에서 특정 부분 문자열(an)이 몇 번 나타나는지 세세요.
const str121 = "banana";

function subOcc(str) {
  const matches = str.match(/an/g);
  return matches ? matches.length : 0;
}

console.log(subOcc(str121));

// 13. Remove Special Characters - 문자열에서 특수 문자를 제거하세요.
const str131 = "Hello@World!";

function removeSpecialChar(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

console.log(removeSpecialChar(str131));

// 14. String Rotation - 두 문자열이 회전 문자열인지 확인하세요. 예) "abc"와 "cab".
const str141 = "abc";
const str142 = "cab";

function strRotation(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}

console.log(strRotation(str141, str142));

// 15. String Interleaving - 두 문자열이 교차하여 결합된 형태인지 확인하세요. 예) "abc"와 "abdc" → true.
const str151 = "abc";
const str152 = "abdc";

function strInter(str1, str2) {
  // ???
}

console.log(strInter(str151, str152));

// 16. Longest Palindromic Substring - 주어진 문자열에서 가장 긴 회문 부분 문자열을 찾으세요.
const str161 = "babad";

function longestPS(str) {
  // ???
}

console.log(str161);

// 17. Swap Case - 문자열의 각 문자의 대소문자를 반전시킨 새로운 문자열을 만드세요.
const str171 = "Hello World!";

function swapCase(str) {
  return str.split("").reduce((r, v) => {
    if (v >= "A" && v <= "Z") r += v.toLowerCase();
    else if (v >= "a" && v <= "z") r += v.toUpperCase();
    else r += v;
    return r;
  }, "");
}

console.log(swapCase(str171));

// 18. Sentence Reverse - 문자열의 각 문장을 반대로 뒤집고, 문장의 순서도 반대로 하세요.
const str181 = "Hello. How are you?";

function sentenceReverse(str) {
  const arr = str.split(" ").reverse();
  let result = [];
  for (const key of arr) {
    result.push(key.split("").reverse().join(""));
  }
  return result.join(" ");
}

console.log(sentenceReverse(str181));

// 19. Convert to Title Case - 주어진 문자열을 제목 형식으로 변환하세요.
// 각 단어의 첫 글자는 대문자로, 나머지는 소문자로 해야 합니다.
const str191 = "tHIS Is a tItLE";

function convertToTitle(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

console.log(convertToTitle(str191));

// 20. Create Acronym - 주어진 문자열에서 각 단어의 첫 글자를 따서 약어를 만드세요.
const str201 = "For your information";

function createAcronym(str) {
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase())
    .join("");
}

console.log(createAcronym(str201));

// 21. Validate Email Format - 주어진 문자열이 유효한 이메일 주소 형식인지 확인하세요.
const email = "example@test.com";

function validateEmail(str) {
  // ???
}

console.log(validateEmail(email));

// 22. Find Missing Letters - 주어진 문자열에서 누락된 알파벳 문자를 찾아 배열로 반환하세요.
const str221 = "abcdegh";

function findMissLetters(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (const key of alphabet) {
    if (!str.toLowerCase().includes(key)) {
      result.push(key);
    }
  }

  return result;
}

console.log(findMissLetters(str221));

// 23. Sort Characters - 주어진 문자열의 문자를 알파벳 순서로 정렬하여 새로운 문자열을 만드세요.
const str231 = "banana";

function sortChar(str) {
  return str.split("").sort().join("");
}

console.log(sortChar(str231));
