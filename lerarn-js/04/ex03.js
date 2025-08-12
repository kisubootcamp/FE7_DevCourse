// 1.
function zip(input) {
  let result = "";
  // let isContinue = false;
  let char = input[0];
  let charCount = 1;

  for (let i = 1; i < input.length; i++) {
    // console.log(input[i]);
    if (char === input[i]) {
      charCount += 1;
    } else {
      result += char + charCount;
      char = input[i];
      charCount = 1;
    }

    if (i === input.length - 1) result += char + charCount;
  }
  return result;
}

// console.log(zip("abbbffd"));

// 2.
function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
}
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("world")); // false

// 3. 강의를 통해 풀이해볼 예정
function isPalindromeSentence(string) {
  const lowertString = string.toLowerCase();

  // for (let i = 0; i < string.length; i++) {
  //   if (typeof string[i] === "string") {
  //     strings.push(string[i]);
  //   }
  // }

  // for (let i = 0; i < string.length / 2; i++) {
  //   if (string[i] !== string[string.length - 1 - i]) return false;
  // }
  // return true;
  // console.log(strings);
}
// console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
// console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
// console.log(isPalindromeSentence("Hello, world!")); // false
// console.log(isPalindromeSentence("No 'x' in Nixon")); // true

// 4.
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return console.log(a);
}

// gcd(56, 98); // 14
// gcd(101, 10); // 1
// gcd(15, 5); // 5
// gcd(100, 75); // 25
// gcd(18, 24); // 6

// 5.
function bubbleSort() {}
