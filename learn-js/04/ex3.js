//Q1

function zipString(str) {
  if (str.length == 0) return "";
  let result = "";
  let count = 1;

  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] === str[i - 1]) {
      count++;
      continue;
    }
    result += str[i - 1] + count;
    count = 1;
  }
  return result;
}

console.log(zipString("aaabbbccc"));
console.log(zipString("aabbaa"));
console.log(zipString("abbbffd"));
console.log(zipString("aabaa"));

//Q2

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }

  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

//Q3

// function isPalindromeSentence(str) {
//   let l = 0;
//   let r = str.length - 1;

//   while (l < r) {}
// }

// console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
// console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
// console.log(isPalindromeSentence("Hello, world!")); // false
// console.log(isPalindromeSentence("No 'x' in Nixon")); // true

//Q4

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

console.log(gcd(56, 98));
console.log(gcd(101, 10));
console.log(gcd(15, 5));
console.log(gcd(100, 75));
console.log(gcd(18, 24));

//Q5
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 1, 2]));
