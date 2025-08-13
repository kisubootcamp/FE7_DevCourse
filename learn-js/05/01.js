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
const remove = removeChar("hello world", "l");
// console.log(remove);

// 2
function reverseArray(numArr) {
  const reversedNumArr = [];
  for (let i = numArr.length - 1; i >= 0; i--) {
    reversedNumArr.push(numArr[i]);
  }
  return reversedNumArr;
}
const reverseArrays = (numArr) => numArr.reverse();
const reversedNumArr = reverseArrays([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
// console.log(reversedNumArr);

// 3.
function containsNumber(numArr, target) {
  for (const num of numArr) {
    if (num === target) return true;
  }
  return false;
}
const res1 = containsNumber([1, 2, 3, 4, 5], 5); // true
const res2 = containsNumber([1, 2, 3, 4, 5], 7); // false
// console.log(res1, res2);

// 4.
// 반복문 O(n), O(n2), O(n3), O(n4), O(N X M) // 5,  5*5 = 25, 5*5*5 =125, 5 * 5 * 5 * 5 =625
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

// console.log(isAnagrams("listen", "sslent"));
// console.log(isAnagrams("fluster", "restful"));
// console.log(isAnagrams("rat", "car"));
// console.log(isAnagrams("aaa", "aaaa"));

// 5.
function twiceSum(numArr, target) {
  const result = [];
  // 모든 배열의 쌍을 확인
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === target) result.push([numArr[i], numArr[j]]);
    }
  }
  return result;
}

// On
function twiceSums(numArr, target) {
  const pairs = [];
  const seen = new Set(); // 아직 안배움

  for (const num of numArr) {
    const completed = target - num;
    if (seen.has(completed)) {
      pairs.push([completed, num]);
    }
    seen.add(num);
  }

  return pairs;
}

const a = twiceSums([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
const b = twiceSums([1, 2, 3, 4, 5], 9); // [[4, 5]]
const c = twiceSums([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]

console.log(a);
console.log(b);
console.log(c);
