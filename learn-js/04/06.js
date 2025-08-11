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
// ​
// 2. 배열 요소를 반전
// 문제
// 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
// 입력 / 출력

const reverseArray = (arr, a) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  console.log(result);
};

reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

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

containsNumber([1, 2, 3, 4, 5], 5); // true
containsNumber([1, 2, 3, 4, 5], 7); // false

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

isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false

// ## 5. 배열에서 두 수의 합

// ### 문제

// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.

// **입력/출력**

const twiceSum = (arr, n) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(result);
};

twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
