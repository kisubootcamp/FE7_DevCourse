//연습문제++

//1
//문자열 압축... 연속된 문자가 나오면 수를 저장하다가 다른 문자가 나오면 그냥 다시 초기화 하고 그 문자와 숫자를 새로운 배열에 저장?
//그럼 필요한 건 연속이 끝났을 때 문자와 갯수를 저장할 수 있는 문자열, 같은 수가 연속되는지 비교하는 반복문

const summarizeStr = (str) => {
  let result = "";
  let count = 1;
  let start = str[0];
  for (let i = 1; i <= str.length; i++) {
    if (start === str[i]) count++;
    else {
      result += start + count;
      start = str[i];
      count = 1;
    }
  }
  return result;
};

const i = "aaabbbccc";
const i2 = "aabbaa";
const i3 = "abbbffd";
const i4 = "aabaa";
console.log(summarizeStr(i));
console.log(summarizeStr(i2));
console.log(summarizeStr(i3));
console.log(summarizeStr(i4));

//2
//받은 매개변수 문자열을 다른 문자열에 반대로 집어넣고, 그게 기존에 받은 문자열이랑 같은지 비교 후 나오게 하기

const isPalindrome = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) reverse += str[i];
  if (reverse === str) return true;
  else return false;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

//선생님 풀이(끝과 끝을 가면서 점점 비교하는 것)
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

//3
function isPalindromeSentence(input) {
  const cleaned = input.toLowerCase().replace(/[^a-z]/g, ""); //소문자 변환, 그리고 뒤에는 공백이랑 특수문자 지움
  const reversed = cleaned.split("").reverse().join(""); //문자 쪼개기-> 배열로 바뀜, 반대로 뒤집기, 그리고 다시 합치기
  return cleaned === reversed;
}

console.log(isPalindromeSentence("A man, a plan, a canal, Panama!"));

//4
const gcd = (num1, num2) => {
  let numArr1 = [];
  let numArr2 = [];
  let result = 0;
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) numArr1.push(i);
  }
  for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) numArr2.push(i);
  }
  for (let i = numArr1.length - 1; i >= 0; i--) {
    for (let j = numArr2.length - 1; j >= 0; j--) {
      if (numArr1[i] === numArr2[j]) {
        result = numArr1[i];
        return result;
      }
    }
  }
};
console.log(gcd(12, 18));

//선생님 풀이(유클리드 호제법, Greatest Common Divisor)
//유클리드 호제법 : 두 자연수 a와 b(a > b)의 최대 공약수는 a를 b로 나눈 나머지 r과 b의 최대 공약수와 같다
// GCD(a, b) = GCD(b, a mod b)
function GCD(num1, num2) {
  if (num2 === 0) return num1;
  return GCD(num2, num1 % num2);
}
console.log(GCD(48, 18));

//5
const bubbleSort = (arr) => {
  let num = 0;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        num = arr[i];
        arr[i] = arr[j];
        arr[j] = num;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

//선생님 풀이
const bubbleSorts = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num;
      }
    }
  }
  return arr;
};
console.log(bubbleSorts([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
