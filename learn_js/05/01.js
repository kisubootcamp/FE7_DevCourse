// 1.
function removeChar(str, charToRemove) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== charToRemove) {
      result += str[i];
    }
  }
  return result;
}
const remove = removeChar('hello world', 'o'); // "hell wrld"
console.log(remove);

// 2. 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
function reverseArray(numArr) {
  let reverseNumArr = [];
  for (let i = numArr.length - 1; i >= 0; i--) {
    reverseNumArr.push(numArr[i]);
  }
  return reverseNumArr;
}
const reverseNum = reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
console.log(reverseNum);

// 3. 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
function containsNumber(numArr, target) {
  for (const num of numArr) {
    if (num === target) return true;
  }
  return false;
}
const res1 = containsNumber([1, 2, 3, 4, 5], 5); // true
console.log(res1);
const res2 = containsNumber([1, 2, 3, 4, 5], 7); // false
console.log(res2);

// // 4. 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃 소문자만 온다고 가정)
function isAnagrams(str1, str2) {
  // 1. 문자열 갯수 비교
  if (str1.length === str2.length) return false;
  // 2. 문자열 비교할 객체 생성
  const obj = {};
  // 3. 첫번째 문자열로 비교객체 만들기
  for (const v of str1) obj[v] = (obj[v] || 0) + 1;
  // 4. 비교객체로 두번째 문자열 비교하기
  for (const v of str2) {
    if (!obj[v]) return false;
    obj[v]--;
  }
  return true;
}
console.log(isAnagrams('listen', 'silent'));
console.log(isAnagrams('fluster', 'restful'));
console.log(isAnagrams('rat', 'car'));
console.log(isAnagrams('aaa', 'aaaa'));

// 5. 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.
function twiceSum(numArr, target) {
  let result = [];
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === target) {
        result.push([numArr[i], numArr[j]]);
      }
    }
  }
  return result;
}
const a = twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
const b = twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
const c = twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]

// 시간 복잡도
// 반복문 O(n)

function twiceSums(numArr, target) {
  const pairs = [];
  const seen = new Set(); // 아직 안한 애들

  for (const num of numArr) {
    const completed = target - num;
    if (seen.has(completed)) {
      pairs.push([completed, num]);
    }
    seen.add(num);
  }

  return pairs;
}

const aa = twiceSums([1, 2, 3, 4, 5], 5); // [[1, 4], [2, 3]]
const bb = twiceSums([1, 2, 3, 4, 5], 9); // [[4, 5]]
const cc = twiceSums([1, 2, 3, 4, 5], 6); // [[1, 5], [2, 4]]

console.log(aa);
console.log(bb);
console.log(cc);
