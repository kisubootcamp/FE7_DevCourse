// 1. 특정 문자 제거
//주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오.
function removeChar(str, charToRemove) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== charToRemove) {
            result += str[i];
        }
    }
    return result;
}
const remove = removeChar("hello world", "o"); "hell wrld"
console.log(remove);

// 2. 배열 요소를 반전
// 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
function reverseArray(numArr) {
    const reversedNumArr = [];
    for (let i = numArr.length - 1; i >= 0; i--) { 
        reversedNumArr.push(numArr[i]);
    }
    return reversedNumArr
}
const reverseArrays = (numArr) => numArr.reverse();
const reversedNumArr = reverseArray([1, 2, 3, 4, 5]);
console.log(reverseArray);

// 3. 특정 숫자 찾기
// 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
function containsNumber(numArr, target) {
    for (const num of numArr) {
        if (num === target) return true;
    }
    return false;
}
const res1 = containsNumber([1, 2, 3, 4, 5,], 5);
const res2 = containsNumber([1, 2, 3, 4, 5,], 7);
console.log(res1, res2);

// 4. 애너그램인지 확인
// 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃)
function isAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    const charCount = {};
    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // console.log(charCount);
    for (const char of str2) {
        if (!charCount[char]) return false;
        //charCount[char]--;
    }
    return true;
}
console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("fluster", "restful")); // true
console.log(isAnagrams("rat", "car")); // false
console.log(isAnagrams("aaa", "aaaa")); // false


// 5. 배열에서 두 수의 합
// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.
function twiceSum(numArr, target) {
    const result = [];
    for (let i = 0; i < numArr.length; i++) {
        for (let j = i + 1; j < numArr.length; j++) {
            if (numArr[i] + numArr[j] === target) {
                result.push([numArr[i], numArr[j]]);
            }
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

const a = twiceSums([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
const b = twiceSums([1, 2, 3, 4, 5], 9); // [[4, 5]]
const c = twiceSums([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]

console.log(a);
console.log(b);
console.log(c);