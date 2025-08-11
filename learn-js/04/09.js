// 연습문제 ++

// 1
function strCompression(input) {
  let answer = "";
  let cntStr = input[0];
  let cntNum = 0;
  for (let i = 0; i < input.length; i++) {
    if (cntStr === input[i]) {
      cntNum++;
    } else {
      answer += cntStr + cntNum;
      cntStr = input[i];
      cntNum = 0;
      cntNum++;
    }
  }
  //끝나고 남은거 처리
  answer += cntStr + cntNum;

  console.log(input, answer);
}
const i = "aaabbbccc";
const o = "a3b3c3";
strCompression(i);

const i2 = "aabbaa";
const o2 = "a2b2a2";
strCompression(i2);

const i3 = "abbbffd";
const o3 = "a1b3f2d1";
strCompression(i3);

const i4 = "aabaa";
const o4 = "a2b1a2"; // a4b1
strCompression(i4);

// 2
function isPalindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  if (str === reverseStr) return true;
  else return false;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

// 3
function isPalindromeSentence(str) {
  // 알파벳 소문자만 남김
  smallStr = str.toLowerCase();
  let newStr = "";
  for (let i = 0; i < smallStr.length; i++) {
    if ("a" <= smallStr[i] && "z" >= smallStr[i]) {
      newStr += smallStr[i];
    }
  }

  // 펠린드롬 확인
  let reverseStr = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reverseStr += newStr[i];
  }
  if (newStr === reverseStr) return true;
  else return false;
}
console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

// 4
function gcd(i1, i2) {
  let big = 0;
  let small = 0;
  if (i1 > i2) {
    big = i1;
    small = i2;
  } else {
    big = i2;
    small = i1;
  }
  while (small !== 0) {
    let temp = small;
    small = big % small;
    big = temp;
  }
  console.log(big);
  return big;
}
gcd(56, 98); // 14
gcd(101, 10); // 1
gcd(15, 5); // 5
gcd(100, 75); // 25
gcd(18, 24); // 6

//5
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
