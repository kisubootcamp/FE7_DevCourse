// 연습 문제 +
// 연습 문제 4
function isAnagrams(word1, word2) {
  const alpabetArray = Array(26).fill(0);

  [...word1].forEach((char) => {
    const index = char.charCodeAt(0) - 97;
    alpabetArray[index]++;
  });

  [...word2].forEach((char) => {
    const index = char.charCodeAt(0) - 97;
    alpabetArray[index]--;
  });

  let flag = true;
  alpabetArray.forEach((count) => {
    if (count !== 0) {
      flag = false;
    }
  });
  console.log(flag);
}

isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false

//

// 연습 문제 5

function twiceSum(arr, target) {
  const result = [];
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      result.push([complement, arr[i]]);
    }

    seen.add(arr[i]);
  }

  return result;
}

twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]

//

// 연습 문제 ++
// 연습 문제 1
const i = "aaabbbccc";
const o = "a3b3c3";

const i2 = "aabbaa";
const o2 = "a2b2a2";

const i3 = "abbbffd";
const o3 = "a1b3f2d1";

const i4 = "aabaa";
const o4 = "a2b1a2"; // a4b1

function compressString(input) {
  let compressed = "";
  let count = 1;

  // 문자열을 순회하면서 연속된 문자의 개수를 세기
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      // undefined도 false로 평가
      compressed += input[i] + count; // 문자와 개수를 추가
      count = 1; // 개수 초기화
    }
  }

  return compressed;
}

console.log(compressString(i)); // a3b3c3
console.log(compressString(i2)); // a2b2a2
console.log(compressString(i3)); // a1b3f2d1
console.log(compressString(i4)); // a2b1a2 (a4b1)

//

// 연습 문제 2
function isPalindrome(input) {
  let reversedInput = "";

  // 문자열 뒤집기
  for (let i = 0; input.length - 1 - i >= 0; i++) {
    reversedInput += input[input.length - 1 - i];
  }

  // 원래 문자열과 뒤집은 문자열 비교
  return input === reversedInput;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

//

// 연습 문제 3
function isPalindromeSentence(input) {
  // 특수 문자 제거 및 소문자 변환
  const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // 문자열 뒤집기
  let reversedInput = "";

  for (let i = 0; cleanedInput.length - 1 - i >= 0; i++) {
    reversedInput += cleanedInput[cleanedInput.length - 1 - i];
  }

  // 원래 문자열과 뒤집은 문자열 비교
  return cleanedInput === reversedInput;
}

console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

//

// 연습 문제 4
function gcd(a, b) {
  // 유클리드 호제법을 사용하여 최대 공약수 계산
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }

  console.log(a);
}

gcd(56, 98); // 14
gcd(101, 10); // 1
gcd(15, 5); // 5
gcd(100, 75); // 25
gcd(18, 24); // 6

//

// 연습 문제 5
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) [([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]])];
    }
  }

  return arr;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

// TMI
// 유사 배열은 배열 메서드를 사용할 수 없다.
// 배열 메서드를 사용하려면 Array.from() 배열로 변환해야 한다.
