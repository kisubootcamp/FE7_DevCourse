// 연습문제
const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 14, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 1명 찾기
const student185 = students.find((s) => s.height === 185);
console.log("1:", student185);

// 2. 나이가 20살 이상인 학생들 찾기
const age20 = students.filter((s) => s.age >= 20);
console.log("2:", age20);

// 3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
const height165 = students.some((s) => s.height <= 165);
console.log("3:", height165);

// 4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
const allAge10 = students.every((s) => s.age >= 10);
console.log("4:", allAge10);

// 5. 학생들의 평균 연령 구하기
const avgAge = students.reduce((sum, s) => sum + s.age, 0) / students.length;
console.log("5:", avgAge);

// 6. 남학생들의 평균 연령 구하기
const maleStudents = students.filter((s) => s.gender === "male");
const avgMaleAge =
  maleStudents.reduce((sum, s) => sum + s.age, 0) / maleStudents.length;
console.log("6:", avgMaleAge);

// 7. 남학생들의 이름만 따로 추출해서 새로운 배열 만들기
const maleNames = maleStudents.map((s) => s.name);
console.log("7:", maleNames);

// 8. 여학생들 중 나이가 가장 어린 학생 찾기
const femaleStudents = students.filter((s) => s.gender === "female");
// reduce
const youngestFemale1 = femaleStudents.reduce((youngest, s) =>
  s.age < youngest.age ? s : youngest
);
// sort
const youngestFemale2 = femaleStudents.sort((a, b) => a.age - b.age)[0];

console.log("8:", youngestFemale1); // reduce
console.log("8:", youngestFemale2); // sort

// ------------------------------------------------------------------------------------
// 연습문제+
// 1. 중첩 배열 평탄화
// n차원 배열을 1차원 배열로 평탄화하는 함수를 작성하세요.
// 배열의 모든 요소를 순회하면서 배열인 요소를 만나면 재귀적으로 평탄화해야 합니다.
// => 순회를 하지 않고 배열 평탄화를 진행했다면 flat 사용 / 순회를 해야하므로 reduce, 배열끼리 합치기 위해 concat
function flattenArray(arr) {
  return arr.reduce((r, v) => {
    return r.concat(Array.isArray(v) ? flattenArray(v) : [v]);
  }, []);
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
// 출력: [1, 2, 3, 4, 5, 6, 7]

console.log(flattenArray([1, [], [2, 3, []], [4, [5, [6]]]]));
// 출력: [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[[]]]));
// 출력: []

console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
// 출력: [1, 2, 3, 4, 5]

console.log(flattenArray([1, 2, 3]));
// 출력: [1, 2, 3]

// 2. 배열 내 객체 그룹화 => reduce 사용
// 객체 배열이 주어졌을 때, 특정 속성을 기준으로 객체들을 그룹화하는 함수를 작성하세요.
function groupBy(arr, key) {
  return arr.reduce((r, v) => {
    if (!r[v[key]]) r[v[key]] = [];
    r[v[key]].push(v);
    return r;
  }, {});
}

const people = [
  { name: "John", age: 20, city: "New York" },
  { name: "Jane", age: 20, city: "Boston" },
  { name: "Mark", age: 25, city: "New York" },
  { name: "Mary", age: 25, city: "Boston" },
  { name: "James", age: 30, city: "New York" },
];

console.log(groupBy(people, "age"));
// 출력: {
//   '20': [
//     { name: 'John', age: 20, city: 'New York' },
//     { name: 'Jane', age: 20, city: 'Boston' }
//   ],
//   '25': [
//     { name: 'Mark', age: 25, city: 'New York' },
//     { name: 'Mary', age: 25, city: 'Boston' }
//   ],
//   '30': [
//     { name: 'James', age: 30, city: 'New York' }
//   ]
// }

console.log(groupBy(people, "city"));
// 출력: {
//   'New York': [
//     { name: 'John', age: 20, city: 'New York' },
//     { name: 'Mark', age: 25, city: 'New York' },
//     { name: 'James', age: 30, city: 'New York' }
//   ],
//   'Boston': [
//     { name: 'Jane', age: 20, city: 'Boston' },
//     { name: 'Mary', age: 25, city: 'Boston' }
//   ]
// }

// 빈 배열 테스트
console.log(groupBy([], "age"));
// 출력: {}

// 존재하지 않는 키로 그룹화
console.log(groupBy(people, "country"));
// 출력: { 'undefined': [...] }

// 3. 중복 요소 제거와 빈도수 계산
// 배열에서 중복된 요소를 제거하고, 각 요소의 등장 빈도수를 계산하는 함수를 작성하세요.
function getFrequency(arr) {
  const frequency = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const unique = arr.filter((v, i) => arr.indexOf(v) === i);
  return { unique, frequency };
}

console.log(getFrequency([1, 2, 3, 1, 2, 1, 4, 5, 4]));
// 출력: {
//   unique: [1, 2, 3, 4, 5],
//   frequency: { '1': 3, '2': 2, '3': 1, '4': 2, '5': 1 }
// }

console.log(getFrequency(["a", "b", "a", "c", "b", "a"]));
// 출력: {
//   unique: ['a', 'b', 'c'],
//   frequency: { 'a': 3, 'b': 2, 'c': 1 }
// }

console.log(getFrequency([true, false, true, true]));
// 출력: {
//   unique: [true, false],
//   frequency: { 'true': 3, 'false': 1 }
// }

console.log(getFrequency([]));
// 출력: { unique: [], frequency: {} }

console.log(getFrequency([1]));
// 출력: { unique: [1], frequency: { '1': 1 } }

// 4. 배열 회전
// 배열을 주어진 스텝만큼 오른쪽으로 회전시키는 함수를 작성하세요.
// 음수 스텝은 왼쪽 회전을 의미합니다.
function rotateArray(arr, steps) {
  const n = arr.length;
  if (n === 0) return arr;

  const k = ((steps % n) + n) % n; // 정규화 패턴 코드
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

const input = [1, 2, 3, 4, 5];
console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]

// 5. 배열 차집합
// 두 배열이 주어졌을 때, 첫 번째 배열에는 있지만 두 번째 배열에는 없는 요소들을 반환하는 함수를 작성하세요.
function arrayDifference(arr1, arr2) {
  return arr1.filter((e) => !arr2.includes(e));
}

console.log(arrayDifference([1, 2, 3, 4, 5], [2, 4, 6]));
// 출력: [1, 3, 5]

console.log(arrayDifference([1, 1, 2, 2], [1, 2]));
// 출력: []

console.log(arrayDifference([1, 2, 3], []));
// 출력: [1, 2, 3]

console.log(arrayDifference([], [1, 2, 3]));
// 출력: []

console.log(arrayDifference([1, 2, 3], [4, 5, 6]));
// 출력: [1, 2, 3]

console.log(arrayDifference(["a", "b", "c"], ["a"]));
// 출력: ['b', 'c']

// 6. 연속된 부분 배열의 최대 합
// 정수 배열이 주어졌을 때, 연속된 부분 배열의 합이 최대가 되는 값을 찾는 함수를 작성하세요.
function maxSubArraySum(arr) {
  const state = arr.slice(1).reduce(
    (s, v) => {
      s.cur = s.cur + v > v ? s.cur + v : v;
      s.max = s.cur > s.max ? s.cur : s.max;
      return s;
    },
    { cur: arr[0], max: arr[0] }
  );
  return state.max;
}

const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(input1)); // 6 ([4, -1, 2, 1])

const input2 = [-1, -2, -3, -4];
console.log(maxSubArraySum(input2)); // -1 ([-1])

const input3 = [1, 2, 3, 4, 5];
console.log(maxSubArraySum(input3)); // 15 ([1, 2, 3, 4, 5])

const input4 = [1, -1, 1, -1, 1, -1, 1];
console.log(maxSubArraySum(input4)); // 1 ([1])

const input5 = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySum(input5)); // 7 ([4, -1, -2, 1, 5])

// 7. 배열 이진 검색
// 정렬된 배열에서 특정 값의 위치를 이진 검색으로 찾는 함수를 작성하세요. 값이 없으면 -1을 반환합니다.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const gap = right - left;
    const half = (gap - (gap % 2)) / 2;
    const mid = left + half;

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArr, 7)); // 3
console.log(binarySearch(sortedArr, 10)); // -1
console.log(binarySearch(sortedArr, 1)); // 0
console.log(binarySearch(sortedArr, 15)); // 7
console.log(binarySearch(sortedArr, 0)); // -1

// ------------------------------------------------------------------------------------
// 연습문제++
// 8. 배열 섞기 (Fisher-Yates 셔플)
// 배열의 요소를 무작위로 섞는 함수를 작성하세요. 모든 순열이 동일한 확률로 나타나야 합니다.
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
const deck = [1, 2, 3, 4, 5];
console.log(shuffle([...deck])); // [3, 1, 5, 2, 4] (무작위)
console.log(shuffle([...deck])); // [2, 5, 1, 4, 3] (무작위)
console.log(shuffle([...deck])); // [4, 3, 5, 1, 2] (무작위)

// 9. 배열 동등성 비교
// 두 배열이 같은 요소를 가지고 있는지 비교하는 함수를 작성하세요. 요소의 순서는 중요하지 않습니다.
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const sorted1 = arr1.sort();
  const sorted2 = arr2.sort();

  return sorted1.every((val, idx) => val === sorted2[idx]);
}

console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 4])); // false
console.log(areArraysEqual([1, 2, 2], [1, 2, 3])); // false
console.log(areArraysEqual([], [])); // true
console.log(areArraysEqual([1, 1, 1], [1, 1, 1])); // true
console.log(areArraysEqual(["a", "b"], ["b", "a"])); // true

// 10. 배열 교차점 찾기
// 여러 배열의 교차점(공통 요소)을 찾는 함수를 작성하세요.
function findIntersection(...arrays) {
  if (arrays.length === 0) return [];
  return arrays.reduce((r, v) => {
    return r.filter((i) => v.includes(i));
  });
}

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const arr3 = [3, 4, 5, 6];
console.log(findIntersection(arr1, arr2, arr3)); // [3, 4]

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
console.log(findIntersection(arr4, arr5)); // []

const arr6 = [1, 2, 2, 3];
const arr7 = [2, 2, 3, 4];
console.log(findIntersection(arr6, arr7)); // [2, 2, 3]

const arr8 = ["a", "b", "c"];
const arr9 = ["b", "c", "d"];
const arr10 = ["c", "d", "e"];
console.log(findIntersection(arr8, arr9, arr10)); // ['c']

// 11. 연속된 숫자 찾기
// 정수 배열에서 연속된 숫자들의 범위를 찾아 문자열 배열로 반환하는 함수를 작성하세요.
function findRanges(arr) {
  // 여기에 코드를 작성하세요
}

const numbers1 = [1, 3, 4, 5, 6, 8, 9, 10];
console.log(findConsecutiveRanges(numbers1)); // ["1", "3-6", "8-10"]

const numbers2 = [1, 2, 3, 5, 7, 8, 9];
console.log(findConsecutiveRanges(numbers2)); // ["1-3", "5", "7-9"]

const numbers3 = [1, 2, 3, 4, 5];
console.log(findConsecutiveRanges(numbers3)); // ["1-5"]

const numbers4 = [1, 3, 5, 7, 9];
console.log(findConsecutiveRanges(numbers4)); // ["1", "3", "5", "7", "9"]

const numbers5 = [1];
console.log(findConsecutiveRanges(numbers5)); // ["1"]

// 12. 배열 중첩 레벨 계산
// 중첩된 배열의 최대 깊이를 계산하는 함수를 작성하세요.
function getArrayDepth(arr) {
  // 여기에 코드를 작성하세요
}

// 문제 12: 배열 중첩 레벨 계산
console.log(getArrayDepth([1, [2, 3], [4, [5, 6]]])); // 3
console.log(getArrayDepth([1, 2, 3])); // 1
console.log(getArrayDepth([[[]]])); // 4
console.log(getArrayDepth([])); // 1
console.log(getArrayDepth([1, [2], [[3]], [[[4]]]])); // 4
console.log(getArrayDepth([[[[1]]], [2], [3, [4]]])); // 4

// 13. 배열 요소 순환
// 배열의 요소를 주어진 횟수만큼 순환시키는 함수를 작성하세요. 양수는 오른쪽으로, 음수는 왼쪽으로 순환합니다.
function rotate(arr, count) {
  const n = arr.length;
  if (n === 0) return [];

  let k = ((count % n) + n) % n;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

const rotateArr1 = ["a", "b", "c", "d", "e"];
console.log(rotate(rotateArr1, 2)); // ['d', 'e', 'a', 'b', 'c']
console.log(rotate(rotateArr1, -1)); // ['b', 'c', 'd', 'e', 'a']
console.log(rotate(rotateArr1, 5)); // ['a', 'b', 'c', 'd', 'e']
console.log(rotate(rotateArr1, 6)); // ['e', 'a', 'b', 'c', 'd']
console.log(rotate(rotateArr1, -7)); // ['c', 'd', 'e', 'a', 'b']

// 14. 배열 빈도 정렬
// 배열의 요소를 등장 빈도순으로 정렬하는 함수를 작성하세요. 빈도가 같은 경우 원래 순서를 유지합니다.
function sortByFrequency(arr) {
  // 여기에 코드를 작성하세요
}

console.log(sortByFrequency([3, 1, 2, 2, 4, 1, 1, 3])); // [1, 1, 1, 3, 3, 2, 2, 4]
console.log(sortByFrequency([1, 1, 1, 2, 2, 3])); // [1, 1, 1, 2, 2, 3]
console.log(sortByFrequency([2, 3, 1, 3, 2, 1])); // [2, 2, 3, 3, 1, 1]
console.log(sortByFrequency(["a", "b", "a", "c", "b", "a"])); // ['a', 'a', 'a', 'b', 'b', 'c']
console.log(sortByFrequency([1])); // [1]
console.log(sortByFrequency([])); // []

// 15. 배열 매칭
// 두 배열이 주어졌을 때, 첫 번째 배열의 각 요소에 대해 두 번째 배열에서 가장 가까운 값을 찾는 함수를 작성하세요.
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

// 16. 배열 분할
// 배열을 주어진 조건에 따라 두 그룹으로 분할하는 함수를 작성하세요.
function partition(arr, predicate) {
  const truthy = arr.filter(predicate);
  const falsy = arr.filter((el) => !predicate(el));
  return [truthy, falsy];
}

const nums1 = [1, 2, 3, 4, 5, 6];
console.log(partition(nums1, (n) => n % 2 === 0)); // [[2, 4, 6], [1, 3, 5]]

const nums2 = [-3, -2, -1, 0, 1, 2, 3];
console.log(partition(nums2, (n) => n >= 0)); // [[0, 1, 2, 3], [-3, -2, -1]]

const words = ["apple", "banana", "cat", "dog", "elephant"];
console.log(partition(words, (word) => word.length > 3)); // [['apple', 'banana', 'elephant'], ['cat', 'dog']]

console.log(partition([1], (n) => n > 0)); // [[1], []]
console.log(partition([], (n) => true)); // [[], []]
