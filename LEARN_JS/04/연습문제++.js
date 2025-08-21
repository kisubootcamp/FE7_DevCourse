// Q1
const string = (str) => {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
};
console.log(string("aaabbbccc")); // a3b3c3
console.log(string("aabbaa")); // a2b2a2
console.log(string("abbbffd")); // a1b3f2d1
console.log(string("aabaa")); // a2b1a2

// Q2
const isPalindrome1 = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
};

console.log(isPalindrome1("racecar")); // true
console.log(isPalindrome1("hello")); // false
console.log(isPalindrome1("level")); // true
console.log(isPalindrome1("world")); // false
// Q3 팰린드?

// Q4
const GCD = (num1, num2) => {
  let result1 = [];
  let result2 = [];
  let result = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) result1.push(i);
  }
  for (let j = 1; j <= num2; j++) {
    if (num2 % j === 0) result2.push(j);
  }
  for (let n = 0; n < result1.length; n++) {
    for (let m = 0; m < result2.length; m++) {
      if (result1[n] === result2[m]) {
        result.push(result1[n]);
      }
    }
  }
  return result[result.length - 1];
};
console.log(GCD(56, 98)); // 14
console.log(GCD(101, 10)); // 1
console.log(GCD(15, 5)); // 5
console.log(GCD(100, 75)); // 25
console.log(GCD(18, 24)); // 6

// Q5
const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
console.log(bubbleSort([5, 3, 8, 1, 2]));
