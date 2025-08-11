//함수 연습문제+

//1
function removeChar(str, certainStr) {
  result = "";
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

//간단 풀이
const reverseArrays = (numArr) => numArr.reverse();
const reversedNumArr = reverseArrays([1, 2, 3, 4, 5]);

//3
function containsNumber(arr, num) {
  for (const n of arr) {
    if (n === num) {
      return console.log(true);
    }
  }
  return console.log(false);
}

containsNumber([1, 2, 3, 4, 5], 5); // true
containsNumber([1, 2, 3, 4, 5], 7); // false

//4
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return console.log(false);
  const count = {};
  for (const str of str1) {
    count[str] = (count[str] || 0) + 1;
  }
  for (const str of str2) {
    if (!count[str]) return console.log(false);
    count[str]--;
  }

  return console.log(true);
}

//선생님 풀이

function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const charCount = {};
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1; //이런 식으로 (charCount[char] || 0) 이거는 있으면 왼쪽 쓰고 없으면 0 쓴다는 뜻
  }
  for (const char of str2) {
    if (!charCount[char]) return false; //대괄호를 이용해서 접근해야 함, charCount.char 하면 속성으로 접근이라 X
    // !charCount[char] 이건 0이 나오면 false로 판단하기 때문에 반대를 줘서 true로 만들어 걸리도록 한 것
    charCount[char]--;
  }
  return true;
}

isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false

//5
function twiceSum(arr, num) {
  let doubleArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
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

//간단 풀이
function twiceSums(numArr, target) {
  const paris = [];
  const seen = new Set(); //Set은 중복되는 정수를 제외하는 것

  for (const num of arr) {
    const completed = target - num;
    if (seen.has(completed)) {
      paris.push([completed, num]);
    }
    seen.add(num);
  }
  return paris;
}
