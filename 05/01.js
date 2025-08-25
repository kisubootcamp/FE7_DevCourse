// 1.
function removeChar(str, charToRemove) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== charToRemove) {
      result += str[i];
    }
  }
  return result;
}
const remove = removeChar("hello world", "o");
console.log(remove);

// 2.
function reverseArray(numArr) {
  const reversedNumArr = [];
  for (let i = numArr.length - 1; i >= 0; i--) {
    reversedNumArr.push(numArr[i]);
  }
  return reversedNumArr;
}
const reversedNumArr = reverseArray([1, 2, 3, 4, 5]);
console.log(reversedNumArr);

// 3.
function containsNumber(numArr, target) {
  for (const num of numArr) {
    if (num === target) return true;
  }
  return false;
}
const res1 = containsNumber([1, 2, 3, 4, 5], 5);
const res2 = containsNumber([1, 2, 3, 4, 5], 7);
console.log(res1, res2);

// 4.
function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
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

console.log(isAnagrams("listen", "silent"));
console.log(isAnagrams("fluster", "restful"));
console.log(isAnagrams("rat", "car"));
console.log(isAnagrams("aaa", "aaaa"));

// 5.
function twiceSum(numArr, target) {
  const result = [];

  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === target) result.push([numArr[i], numArr[j]]);
    }
  }
  return result;
}

function twiceSums(numArr, target) {
  const pairs = [];
  const seen = new Set();

  for (const num of numArr) {
    const completed = target - num;
    if (seen.has(completed)) {
      pairs.push([completed, num]);
    }
    seen.add(num);
  }

  return pairs;
}

console.log(twiceSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2,3]]
console.log(twiceSum([1, 2, 3, 4, 5], 9)); // [[4, 5]]
console.log(twiceSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2,4]]
