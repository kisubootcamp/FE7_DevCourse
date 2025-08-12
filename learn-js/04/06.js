// 연습문제 +
// 1. 특정 문자 제거
// 문제
// 주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오.
// 입력 / 출력

const removeChar = (str, s) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === s) continue;
    result += str[i];
  }
  console.log(result);
};

removeChar("hello world", "o"); // "hell wrld"
console.log("hello world"[1]); //문자열(데이터 자체)도 인덱스 번호로 접근이 가능. '

// 2. 배열 요소를 반전
// 문제
// 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
// 입력 / 출력

const reverseArray = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  console.log(result);
};

//해당 배열의 length는 5이다.
reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

const reverseArrays = (arr) => arr.reverse(); //reverse 함수 존재
const reverseArr = reverseArrays([1, 2, 3, 4, 5]); //함수를 담아서 사용
console.log(reverseArr);
console.log([1, 2, 3, 4, 5].reverse());

// 3. 특정 숫자 찾기
// 문제
// 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
// 입력/출력

const containsNumber = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return console.log("true");
    }
  }
  return console.log("false");
};

//강사님 풀이
const containsNumber2 = (arr, num) => {
  for (const n of arr) {
    if (n === num) {
      return true;
    }
  }
  return false;
};

containsNumber([1, 2, 3, 4, 5], 5); // true
containsNumber([1, 2, 3, 4, 5], 7); // false

console.log(containsNumber2([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber2([1, 2, 3, 4, 5], 7)); // false

// ​
// 4. 애너그램인지 확인
// 문제
// 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃)
// 입력/출력

const isAnagrams = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        count++;
        break;
      }
    }
  }
  if (str1.length === count && str2.length === count) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

//강사님 풀이
const isAnagrams2 = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const charCount = {}; //키와 값으로 이루어지 객체
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1; //기존 count값이 있으면 거기에 더함. 없으면 0에서 더함
  }
  for (const char of str2) {
    if (!charCount[char]) return false; //문자열이 존재하지 않으면 false
    charCount[char]--; //감소를 해주지 않으면 속성이 있는 것으로 판단되어 if문을 통과하는 오류 발생
  }
  return true;
};

isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false

// ## 5. 배열에서 두 수의 합

// ### 문제
// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.

const twiceSum = (arr, n) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(result);
};

//강사님 풀이
const twiceSum2 = (arr, n) => {
  const result = [];
  //모든 쌍의 배열 확인
  //왼쪽은 제외하고 오른쪽만 비교하도록 두번째 for문은 i+1(첫번째 for문 i 인덱스부터 오른쪽 값만 비교)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(result);
};

//강사님 풀이 2 (시간 복잡도)
const twiceSum3 = (arr, n) => {
  const result = [];
  const seen = new Set(); //아직 안배움

  for (const num of arr) {
    const completed = n - num;
    if (seen.has(completed)) {
      result.push([completed, num]);
    }
    seen.add(num);
  }
  return result;
};

//중복 제외.
twiceSum2([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSum2([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSum2([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
