// // Q1

// function removeChar(str, target) {
//   result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != target) result += str[i];
//   }
//   return result;
// }
// console.log(removeChar("hello world", "o")); // "hell wrld"

// // Q2

// function reverseArray(arr) {
//   result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// // Q3
// function containsNumber(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return true;
//   }
//   return false;
// }

// console.log(containsNumber([1, 2, 3, 4, 5], 5)); // true
// console.log(containsNumber([1, 2, 3, 4, 5], 7)); // false

// Q4
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    let hasI = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        hasI = true;
        str2[j] == "";
        break;
      }
    }
    if (!hasI) return false;
  }
  return true;
}

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("fluster", "restful")); // true
console.log(isAnagrams("rat", "car")); // false
console.log(isAnagrams("aaa", "aaaa")); // false

// Q5
function twiceSum(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) result.push([arr[i], arr[j]]);
    }
  }
  return result;
}

console.log(twiceSum([1, 2, 3, 4, 5], 5));
console.log(twiceSum([1, 2, 3, 4, 5], 9));
console.log(twiceSum([1, 2, 3, 4, 5], 6));
