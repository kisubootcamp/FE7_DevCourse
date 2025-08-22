// 1
const compress = (str) => {
  const map = {};
  let result = "";
  let prev = str[0];

  for (const c of str) {
    if (prev !== c) {
      result += `${prev}${map[prev]}`;
      map[prev] = 0;
      prev = c;
    }
    map[c] = (map[c] || 0) + 1;
  }

  result += `${prev}${map[prev]}`;

  return result;
};

console.log(compress("aaabbbccc")); // a3b3c3
console.log(compress("aabbaa")); // a2b2a2
console.log(compress("abbbffd")); // a1b3f2d1
console.log(compress("aabaa")); // a2b1a2

// 2
const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

// 3
function isPalindromeSentence(input) {
  const cleaned = input.toLowerCase().replace(/[^a-z]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

/*

최대 공약수 (Greatest Common Divisor, GCD)

약수 -> 어떤 수 n을 나눴을 때 나머지가 0이 되는 수
12의 약수 = 1, 2, 3, 4, 6, 12
18의 약수 = 1, 2, 3, 6, 9, 18
공약수 -> 공통된 약수 (1, 2, 3, 6)
최대 공약수 = 6

유클리드 호제법
두 자연수 a와 b(a > b)의 최대 공약수는
a와 b를 나눈 나머지 r과 b의 최대 공약수와 같다
이때, 나머지가 0이 되면 그때의 나누는 수가 최대 공약수

GCD(a, b) = GCD(b, a % b);

*/

// 4
function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}

console.log(gcd(56, 98)); // 14
console.log(gcd(101, 10)); // 1
console.log(gcd(15, 5)); // 5
console.log(gcd(100, 75)); // 25
console.log(gcd(18, 24)); // 6

// 5
function bubbleSort(numberArr) {
  for (let i = 0; i < numberArr.length; i++) {
    for (let j = 0; j < numberArr.length - 1 - i; j++) {
      if (numberArr[j] > numberArr[j + 1]) {
        const temp = numberArr[j];
        numberArr[j] = numberArr[j + 1];
        numberArr[j + 1] = temp;
      }
    }
  }

  return numberArr;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
