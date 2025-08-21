// Q1
const removeChar = (string, char) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== char[0]) {
      result += string[i];
    }
  }
  return result;
};
console.log(removeChar("hello world", "o")); // "hell wrld"

// Q2
const reverseArray = (array) => {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
    // result += array[i]; // 스트링으로 나왔음.
  }
  return result;
};
console.log(reverseArray([1, 2, 3, 4, 5]));

// Q3
const containsNumber = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) return true;
  }
  return false;
};
console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

// Q4
console.log("------------------------------------------");
const isAnagrams = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  let str2 = string2.split("");
  for (let i = 0; i < string1.length; i++) {
    let found = false;
    for (let j = 0; j < str2.length; j++) {
      if (string1[i] === str2[j]) {
        found = true;
        str2.splice(j, 1);
        break;
      }
    }
    if (!found) return false;
  }
  return true;
};
console.log(isAnagrams("listen", "silent"));
console.log(isAnagrams("fluster", "restful"));
console.log(isAnagrams("rat", "car"));
console.log(isAnagrams("aaa", "aaaa"));

// Q5
console.log("------------------------------------------");
const twinSum = (array, num) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) arr.push([array[i], array[j]]);
      // arr.push(array[i], array[j]) [] 리스트로 한 번 더 감싸줘야 함!
    }
  }
  return arr;
};
console.log(twinSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2,3]]
