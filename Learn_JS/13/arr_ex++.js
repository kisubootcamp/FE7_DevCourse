// ## 문제 8: 배열 섞기 (Fisher-Yates 셔플)

// **문제 설명**

// 배열의 요소를 무작위로 섞는 함수를 작성하세요. 모든 순열이 동일한 확률로 나타나야 합니다.

// **기본 제공 코드**

function shuffle(arr) {
  // 여기에 코드를 작성하세요
}

const deck = [1, 2, 3, 4, 5];
console.log(shuffle([...deck])); // [3, 1, 5, 2, 4] (무작위)
console.log(shuffle([...deck])); // [2, 5, 1, 4, 3] (무작위)
console.log(shuffle([...deck])); // [4, 3, 5, 1, 2] (무작위)


// ## 문제 9: 배열 동등성 비교

// **문제 설명**

// 두 배열이 같은 요소를 가지고 있는지 비교하는 함수를 작성하세요. 요소의 순서는 중요하지 않습니다.

// **기본 제공 코드**

function areArraysEqual(arr1, arr2) {
  // 여기에 코드를 작성하세요
}

console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));     // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 4]));  // false
console.log(areArraysEqual([1, 2, 2], [1, 2, 3]));     // false
console.log(areArraysEqual([], []));                    // true
console.log(areArraysEqual([1, 1, 1], [1, 1, 1]));     // true
console.log(areArraysEqual(['a', 'b'], ['b', 'a']));   // true


// ## 문제 10: 배열 교차점 찾기

// **문제 설명**

// 여러 배열의 교차점(공통 요소)을 찾는 함수를 작성하세요.

// **기본 제공 코드**


function findIntersection(...arrays) {
  // 여기에 코드를 작성하세요
}

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const arr3 = [3, 4, 5, 6];
console.log(findIntersection(arr1, arr2, arr3));        // [3, 4]

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
console.log(findIntersection(arr4, arr5));              // []

const arr6 = [1, 2, 2, 3];
const arr7 = [2, 2, 3, 4];
console.log(findIntersection(arr6, arr7));              // [2, 2, 3]

const arr8 = ['a', 'b', 'c'];
const arr9 = ['b', 'c', 'd'];
const arr10 = ['c', 'd', 'e'];
console.log(findIntersection(arr8, arr9, arr10));       // ['c']


// ## 문제 11: 연속된 숫자 찾기

// **문제 설명**

// 정수 배열에서 연속된 숫자들의 범위를 찾아 문자열 배열로 반환하는 함수를 작성하세요.

// **기본 제공 코드**


function findRanges(arr) {
  // 여기에 코드를 작성하세요
}

const numbers1 = [1, 3, 4, 5, 6, 8, 9, 10];
console.log(findConsecutiveRanges(numbers1));           // ["1", "3-6", "8-10"]

const numbers2 = [1, 2, 3, 5, 7, 8, 9];
console.log(findConsecutiveRanges(numbers2));           // ["1-3", "5", "7-9"]

const numbers3 = [1, 2, 3, 4, 5];
console.log(findConsecutiveRanges(numbers3));           // ["1-5"]

const numbers4 = [1, 3, 5, 7, 9];
console.log(findConsecutiveRanges(numbers4));           // ["1", "3", "5", "7", "9"]

const numbers5 = [1];
console.log(findConsecutiveRanges(numbers5));           // ["1"]


// ## 문제 12: 배열 중첩 레벨 계산

// **문제 설명**

// 중첩된 배열의 최대 깊이를 계산하는 함수를 작성하세요.

// **기본 제공 코드**


function getArrayDepth(arr) {
  // 여기에 코드를 작성하세요
}

// 문제 12: 배열 중첩 레벨 계산
console.log(getArrayDepth([1, [2, 3], [4, [5, 6]]])); // 3
console.log(getArrayDepth([1, 2, 3])); // 1
console.log(getArrayDepth([[[[]]]])); // 4
console.log(getArrayDepth([])); // 1
console.log(getArrayDepth([1, [2], [[3]], [[[4]]]])); // 4
console.log(getArrayDepth([[[[1]]], [2], [3, [4]]])); // 4


// ## 문제 13: 배열 요소 순환

// **문제 설명**

// 배열의 요소를 주어진 횟수만큼 순환시키는 함수를 작성하세요. 양수는 오른쪽으로, 음수는 왼쪽으로 순환합니다.

// **기본 제공 코드**


function rotate(arr, count) {
  // 여기에 코드를 작성하세요
}

const rotateArr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(rotate(rotateArr1, 2));  // ['d', 'e', 'a', 'b', 'c']
console.log(rotate(rotateArr1, -1)); // ['b', 'c', 'd', 'e', 'a']
console.log(rotate(rotateArr1, 5));  // ['a', 'b', 'c', 'd', 'e']
console.log(rotate(rotateArr1, 6));  // ['e', 'a', 'b', 'c', 'd']
console.log(rotate(rotateArr1, -7)); // ['c', 'd', 'e', 'a', 'b']


// ## 문제 14: 배열 빈도 정렬

// **문제 설명**

// 배열의 요소를 등장 빈도순으로 정렬하는 함수를 작성하세요. 빈도가 같은 경우 원래 순서를 유지합니다.

// **기본 제공 코드**


function sortByFrequency(arr) {
  // 여기에 코드를 작성하세요
}

console.log(sortByFrequency([3, 1, 2, 2, 4, 1, 1, 3])); // [1, 1, 1, 3, 3, 2, 2, 4]
console.log(sortByFrequency([1, 1, 1, 2, 2, 3])); // [1, 1, 1, 2, 2, 3]
console.log(sortByFrequency([2, 3, 1, 3, 2, 1])); // [2, 2, 3, 3, 1, 1]
console.log(sortByFrequency(['a', 'b', 'a', 'c', 'b', 'a'])); // ['a', 'a', 'a', 'b', 'b', 'c']
console.log(sortByFrequency([1])); // [1]
console.log(sortByFrequency([])); // []


// ## 문제 15: 배열 매칭

// **문제 설명**

// 두 배열이 주어졌을 때, 첫 번째 배열의 각 요소에 대해 두 번째 배열에서 가장 가까운 값을 찾는 함수를 작성하세요.

// **기본 제공 코드**

function findClosestElements(arr1, arr2) {
  // 여기에 코드를 작성하세요
}

const match1 = [1, 4, 10, 15];
const match2 = [2, 3, 8, 12, 16];
console.log(findClosestElements(match1, match2)); // [2, 3, 8, 16]

const match3 = [5, 10, 15];
const match4 = [3, 6, 9, 12, 18];
console.log(findClosestElements(match3, match4)); // [6, 9, 12]

const match5 = [1];
const match6 = [2, 3, 4];
console.log(findClosestElements(match5, match6)); // [2]

const match7 = [-5, 0, 5];
const match8 = [-3, 2, 8];
console.log(findClosestElements(match7, match8)); // [-3, 2, 8]

const match9 = [1.5, 3.5];
const match10 = [1, 2, 3, 4];
console.log(findClosestElements(match9, match10)); // [2, 4]


// ## 문제 16: 배열 분할

// **문제 설명**

// 배열을 주어진 조건에 따라 두 그룹으로 분할하는 함수를 작성하세요.

// **기본 제공 코드**

function partition(arr, predicate) {
  // 여기에 코드를 작성하세요
}

const nums1 = [1, 2, 3, 4, 5, 6];
console.log(partition(nums1, n => n % 2 === 0)); // [[2, 4, 6], [1, 3, 5]]

const nums2 = [-3, -2, -1, 0, 1, 2, 3];
console.log(partition(nums2, n => n >= 0)); // [[0, 1, 2, 3], [-3, -2, -1]]

const words = ['apple', 'banana', 'cat', 'dog', 'elephant'];
console.log(partition(words, word => word.length > 3)); // [['apple', 'banana', 'elephant'], ['cat', 'dog']]

console.log(partition([1], n => n > 0)); // [[1], []]
console.log(partition([], n => true)); // [[], []]
