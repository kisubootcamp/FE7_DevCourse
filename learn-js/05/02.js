function compressString(input) {
  let compressed = "";
  let count = 1; // 문자의 갯수를 세는 변수
  let currentChar = input[0]; // "a"

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === currentChar) count++;
    else {
      compressed += currentChar + count; // a3
      currentChar = input[i]; // b
      count = 1;
    }
  }

  return compressed;
}
// console.log(compressString("abbbffd"));

// 2
// ["A" , "B"] -> 2
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("world")); // false

// 3.
function isPalindromeSentence(input) {
  const cleaned = input.toLowerCase().replace(/[^a-z]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

// 4. 최대 공약수(Greatest Common Divisor, GCD)
// 약수 -> 어떤 수 n을 나눴을 때, 나머지가 0이 되는 수
// (12의 약수 = 1, 2, 3, 4, 6, 12)
// (18의 약수 = 1, 2, 3, 6, 9, 18)
// 공약수 -> 공통된 약수 (1, 2, 3, 6)
// 최대공약수 -> 6

// 유클리드 호제법
// 두 자연수 a와 b(a > b)의 최대 공약수는
// a를 b로 나눈 나머지 r과 b의 최대 공약수와 같다 .
// 이때, 나머지가 0이되면, 그때의 나누는 수가 최대 공약수다.

// GCD(a, b) =  GCD(b, a mod b)

// GCD(48, 18)
// 48 / 18 = 몫 2, 나머지 12
// GCD(48, 18) = GCD(18, 12)

// 18 / 12 = 몫 1, 나머지 6
// GCD(18, 12) = GCD(12, 6)

// 12 / 6 = 몫2, 나머지 0
// GCD(12, 6) = GCD(6, 0)

// function gcd(a, b) {
//   if (b === 0) return a;
//   return gcd(b, a % b);
// }

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

console.log(gcd(18, 48));

// 5.
// O(n2)
function bubbleSort(numberArr) {
  for (let i = 0; i < numberArr.length; i++) {
    for (let j = 0; j < numberArr.length - 1 - i; j++) {
      if (numberArr[j] > numberArr[j + 1]) {
        // swap
        const temp = numberArr[j];
        numberArr[j] = numberArr[j + 1];
        numberArr[j + 1] = temp;
      }
    }
  }
  return numberArr;
}
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
