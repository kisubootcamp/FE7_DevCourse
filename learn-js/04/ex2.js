// 1
const removeChar = (str, c) => {
  let result = "";

  for (const ch of str) {
    if (c === ch) continue;
    result += ch;
  }

  return result;
};

// 2
const reverseArray = (array) => {
  const newArr = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }

  return newArr;
};

// 3
const containsNumber = (array, num) => {
  for (const x of array) {
    if (x === num) return true;
  }

  return false;
};

// 4
const isAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const map = {};

  for (let i = 0; i < str1.length; i++) {
    map[str1[i]] = (map[str1[i]] || 0) + 1;
    map[str2[i]] = (map[str2[i]] || 0) + 1;
  }

  for (const key in map) {
    if (map[key] !== 2) return false;
  }

  return true;
};

// 5
const twiceSum = (array, num) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) result.push([array[i], array[j]]);
    }
  }

  return result;
};
