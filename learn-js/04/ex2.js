//함수 연습문제+

//1
function removeChar(str, certainStr) {
  result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === certainStr) continue;
    result += str[i];
  }
  console.log(result);
}

removeChar("hello world", "o"); // "hell wrld"

//2
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}

reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

//3
function containsNumber(arr, num) {
  let isTrue = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      isTrue = true;
    }
  }
  console.log(isTrue);
}

containsNumber([1, 2, 3, 4, 5], 5); // true
containsNumber([1, 2, 3, 4, 5], 7); // false

//4
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return console.log(false);
  let count = {};
  for (const str of str1) {
    count[str] = (count[str] || 0) + 1;
  }
  for (const char of str2) {
    if (!count[char]) return false; // 없거나 개수가 0이면 false
    count[char]--;
  }

  return true;
}
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         isIn++;
//         break;
//       }
//     }
//   }
//   if (isIn === str1.length) return console.log(true);
//   else return console.log(false);

isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false

//5
function twiceSum(arr, num) {
  let doubleArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        doubleArr.push([arr[i], arr[j]]);
      }
    }
  }
  return console.log(doubleArr);
}

twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
