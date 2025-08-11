// 연습문제 ++
// 1. 문자열 압축
// 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
// 입/출력 예시

const compression = (str) => {
  let result = [];
  result.push(str[0]);
  let temp1 = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (temp1 === str[i]) {
      count++;
    } else {
      result.push(count);
      result.push(str[i]);
      count = 1;
      temp1 = str[i];
    }
  }
  let r = "";
  result.push(count);
  for (let i of result) {
    r += i;
  }
  return console.log(r);
};

//강사님 풀이
const compression2 = (str) => {
  let compressed = "";
  let count = 1; //문자의 갯수를 세는 변수
  let currentChar = input[0]; //"a"

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === currentChar) count++; //핵심
    else {
      compressed += currentChar + count; //a3
      currentChar = input[i];
      count = 1;
    }
  }
  return compressed;
};

const i = "aaabbbccc";
compression(i);
const o = "a3b3c3";

const i2 = "aabbaa";
compression(i2);
const o2 = "a2b2a2";

const i3 = "abbbffd";
compression(i3);
const o3 = "a1b3f2d1";

const i4 = "aabaa";
compression(i4);
const o4 = "a2b1a2"; // a4b1

// 2. 팰린드롬 확인하기(쉬운 버전)
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 매개변수는 항상 공백 없이 소문자 알파뱃만 넘어온다고 가정합니다.
// 입출력 예시
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
// console.log(isPalindrome("level"));   // true
// console.log(isPalindrome("world"));   // false

const isPalindrome = (str) => {
  let result = [];
  let r = true;
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    if (result[i] !== str[i]) {
      r = false;
      break;
    }
  }
  return r;
};

//강사님 풀이
function isPalindrome2(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
    }
  }
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

// 정규표현식을 사용해야 함. 안배운 내용
// 3. 펠린드롬 확인하기 (어려운 버전)
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 알파벳 이외의 문자는 무시합니다.
// 입출력
const isPalindromeSentence = (str) => {
  const cleaned = input.toLowerCase().replace(/[^a-z]/g, "");
  const reversed = cleaned.split("").reverse().jpin("");
  console.log(reversed);
};

console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

// 4. 최대 공약수(GCD)
// 두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현하세요.
// 최대 공약수는 공통된 약수 중 가장 큰 수를 의미합니다.
// 예) 12 - 1, 2, 3, 4, 6 12
//       18 - 1, 2, 3, 6, 9, 18
// 약수 : 1, 2, 3, 6
// 최대 공약수 6
// // 유클리드 호제법

// 두 자연수 a와 b(a>b)의 최대 공약수는 a를 b로 나눈 나머지 r과 b의 최대 공약수와 같다.
// 이때 나머지가 0이 되면 그때의 나누는 수가 최대 공약수다

//GCD(a,b) = GCD = GCD(b, a mod b)

//GCD(48, 18)
//48/18 = 몫: 2, 나머지: 12 GCD(48, 18) = GCD = GCD(18, 21)
//최소 공배수: 두 수의 곱 / 최대 공약수

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function gcd2(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

console.log(gcd(18, 48));
console.log(gcd2(18, 48));

// 입출력
// gcd(56, 98); // 14
// gcd(101, 10); // 1
// gcd(15, 5); // 5
// gcd(100, 75); // 25
// gcd(18, 24); // 6

// 5. 배열 정렬(버블 정렬)
// 주어진 배열을 오름차순으로 정렬하는 함수를 작성하시오.
// console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

function bubbleSort(numberArr) {
  for (let i = 0; i < numberArr.length; i++) {
    for (let j = 0; j < numberArr.length - 1 - i; j++) {
      if (numberArr[j] > numberArr[j + 1]) {
        //swap
        const temp = numberArr[j];
        numberArr[j] = numberArr[j + 1];
        numberArr[j + 1] = temp;
      }
    }
  }
  return numberArr;
}

console.log(bubbleSort([5, 3, 8, 1, 2]));
