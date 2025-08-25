//------------------------------------------------------------------------------------------------------------------
// 연습문제+
// 1. Palindrome Checker - 주어진 문자열이 회문인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 확인해야 합니다.
const str1 = "A man a plan a canal Panama";
const result = str1.trim().toLowerCase().split(" ").join("");
let bool = true;

for (let i = 0; i < result.length; i++) {
  if (result[i] !== result[result.length - 1 - i]) {
    bool = false;
    break;
  }
}
console.log(bool); // true

// 2. Vowel Counter - 주어진 문자열에서 모음(a, e, i, o, u)의 개수를 세세요.
const str2 = "JavaScript is awesome!";
