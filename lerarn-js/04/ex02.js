// 1.
function removeChar(string, alphabet) {
  let result = "";
  for (const char of string) {
    if (char !== alphabet) result += char;
  }
  console.log(result);
}

// removeChar("hello world", "o"); // "hell wrld"

// 2.
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  console.log(result);
}
// reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

// 3.
function containsNumber(arr, target) {
  for (const num of arr) {
    if (target === num) return console.log(true);
  }
  console.log(false);
}
// containsNumber([1, 2, 3, 4, 5], 5); // true
// containsNumber([1, 2, 3, 4, 5], 7); // false

// 4. 좀 이따 다시 풀어보기
function isAnagrams(string1, string2) {
  if (string1.length !== string2.length) return console.log(false);
}

isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false

// 5.
function twiceSum(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) result.push([arr[i], arr[j]]);
    }
  }
  console.log(result);
}

// twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
// twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
// twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
