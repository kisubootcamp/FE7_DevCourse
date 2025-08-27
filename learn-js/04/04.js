// 1
const removeChar = (str, c) => {
  let result = "";

  for (const ch of str) {
    if (c === ch) continue;
    result += ch;
  }

  return result;
};

console.log(removeChar("hello world", "o")); // "hell wrld"

// 2
const reverseArray = (array) => {
  const newArr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }

  return newArr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

// 3
const containsNumber = (array, num) => {
  for (const x of array) {
    if (x === num) return true;
  }

  return false;
};

console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

// 4
const isAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const map = {};

  for (const char of str1) {
    map[char] = (map[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!map[char]) return false;
    map[char]--;
  }

  return true;
};

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("fluster", "restful")); // true
console.log(isAnagrams("rat", "car")); // false
console.log(isAnagrams("aaa", "aaaa")); // false

// 5 O(n^2)
const twiceSum = (array, num) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) result.push([array[i], array[j]]);
    }
  }

  return result;
};

console.log(twiceSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2,3]]
console.log(twiceSum([1, 2, 3, 4, 5], 9)); // [[4, 5]]
console.log(twiceSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2,4]]
