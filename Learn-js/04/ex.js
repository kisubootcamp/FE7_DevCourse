// 함수 연습문제
// 1. 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들기
function sum1(...nums) {
  let result = 0;
  for (let num of nums) {
    result += num;
  }
  return result;
}
console.log(sum1(1, 2, 3, 4, 5, 6));

// 2. 사칙연산을 수행하는 로직을 담은 함수를 구현
function cal(num1, num2, operate) {
  switch (operate) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      if (num1 < num2) return num2 * num1;
      else return num1 * num2;
    case "/":
      if (num1 < num2) return num2 / num1;
      else return num1 / num2;
    default:
      console.log("+, -, *, / 중에서 입력해주세요.");
  }
}
const result2 = cal(1, 2, "+");
console.log(result2);

// 3. 숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성
function evenOrOdd(num) {
  if (num % 2 === 0) return true;
  else return false;
}
console.log(evenOrOdd(7));

// 4. 배열의 모든 요소 더하기
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3]));

// 5. 배열의 최대값 찾기
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([1, 5, 3, 9, 2]));

// 6. 문자열 반전
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));

// 7. 문자열에서 특정 문자 개수 세기
function countCharacter(str, word) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word) result++;
  }
  return result;
}

console.log(countCharacter("banana", "a"));

// 8. 팩토리얼 계산하기
// (1)
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
// (2)
function fac(n) {
  if (n === 0 || n === 1) return 1;
  return n * fac(n - 1);
}
console.log(factorial(5));

// 9. 삼각형 넓이 계산하기
// (1)
function triangleArea(base, height) {
  return (base * height) / 2;
}
// (2)
const triangleArea2 = (base, height) => (base * height) / 2;

console.log(triangleArea2(10, 5));

// 함수 연습문제 +
// 1. 특정 문자 제거
function removeChar(str, word) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word) continue;
    else {
      result = result + str[i];
    }
  }
  return result;
}

console.log(removeChar("hello world", "o"));

// 2. 배열 요소를 반전
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 3. 특정 숫자 찾기
function containsNumber(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
console.log(containsNumber([1, 2, 3, 4, 5], 5));
console.log(containsNumber([1, 2, 3, 4, 5], 7));

// 4. 애너그램인지 확인
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let count1 = {};
  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    if (count1[ch] === undefined) {
      count1[ch] = 1;
    } else count1[ch]++;
  }

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    if (count1[ch] === undefined || count1[ch] === 0) {
      return false;
    } else {
      count1[ch]--;
    }
  }
  return true;
}
console.log(isAnagrams("listen", "silent"));
console.log(isAnagrams("fluster", "restful"));
console.log(isAnagrams("rat", "car"));
console.log(isAnagrams("aaa", "aaaa"));

// 5. 배열에서 두 수의 합
function twiceSum(arr, num) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}
console.log(twiceSum([1, 2, 3, 4, 5], 5));

// 함수 연습문제 ++
// 1. 문자열 압축
function strCom(str) {
  let result = "";
  let countObj = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (countObj[ch] === undefined) {
      countObj[ch] = 1;
    } else {
      countObj[ch]++;
    }
  }

  for (let key in countObj) {
    result += key + countObj[key];
  }

  return result;
}
const i = "aaabbbccc";
const i2 = "aabbaa";
const i3 = "abbbffd";
const i4 = "aabaa";

console.log(strCom(i));
console.log(strCom(i2));
console.log(strCom(i3));
console.log(strCom(i4));

// 2. 팰린드롬 확인하기(쉬운 버전)
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

// 3. 팰린드롬 확인하기(어려운 버전)
function isPalindromeSentence(str) {
  str = str.toLowerCase(); // 소문자로 만들어주는 함수 (검색으로 알아봄)

  let cleaned = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "a" && ch <= "z") {
      cleaned += ch;
    }
  }

  for (let i = 0; i < cleaned.length - 1 - i; i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence("Hello, world!")); // false
console.log(isPalindromeSentence("No 'x' in Nixon")); // true

/* --------------------------------------------------------------------------------- */
function isPalindromeSentence1(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z]/g, ""); // 소문자로 바꾼 뒤, 알파벳 지우기
  const reversed = cleaned.split("").reverse().join(""); // 배열로 쪼개고 역순으로 해서 문자열로 합치기
  return cleaned === reversed;
}
console.log(isPalindromeSentence1("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence1("Was it a car or a cat I saw?")); // true
console.log(isPalindromeSentence1("Hello, world!")); // false
console.log(isPalindromeSentence1("No 'x' in Nixon")); // true

// 4. 최대 공약수(GCD)
// 최소 공배수(LCM)는 => a*b/gcd 두 수를 최대 공약수로 나누기
function gcd(num1, num2) {
  let gcd = 1;
  for (let i = 1; i < (num1 > num2 ? num1 : num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  return gcd;
}

// 간단 버전
function gcd2(a, b) {
  let answer = [];
  if (b === 0) return a;
  return gcd2(b, a % b);
}

console.log(gcd(56, 98));
console.log(gcd(101, 10));
console.log(gcd(15, 5));
console.log(gcd(100, 75));
console.log(gcd(18, 24));

// 5. 배열 정렬(버블 정렬)
function bubbleSort(arr) {
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 1, 2]));
