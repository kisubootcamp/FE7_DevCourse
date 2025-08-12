// 연습문제 +

// 1
function removeChar(str, target) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== target) {
      answer += str[i];
    }
  }
  return answer;
}
console.log(removeChar("hello world", "o")); // "hell wrld"

// 2
function reverseArray(arr, target) {
  let answer = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(arr[i]);
  }
  return answer;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 3
function containsNumber(arr, target) {
  let isContain = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      isContain = true;
    }
  }
  return isContain;
}
console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

// 4
// 두 문자열 정렬
function isAnagrams(str1, str2) {
  let newStr1 = "";
  let newStr2 = "";

  newStr1 = str1.split("").sort().join("");
  newStr2 = str2.split("").sort().join("");

  if (newStr1 === newStr2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false
//4-1
function isAnagrams2(str1, str2) {
  const charCount = {};
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  return true;
}
console.log(isAnagrams2("fluster", "restful")); // true
console.log(isAnagrams2("rat", "car")); // false

// 5
function twiceSum(arr, target) {
  let answer = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        answer.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(answer);
}

twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
