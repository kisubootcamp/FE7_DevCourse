//Q1
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

//Q2
function groupBy(arr, keyName) {
  return arr.reduce((r, v) => {
    if (!r[v[keyName]]) {
      r[v[keyName]] = [];
    }
    r[v[keyName]].push(v);
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

// Q3

// 빈 객체 생성해서 카운트
// 해당 객체의 key 가져와서  unique 값으로
// 해당 객체 출력해서 frequency값으로

function getFrequency(arr) {
  const result = {};
  for (const element of arr) {
    result[element] = (result[element] || 0) + 1;
  }

  const uniqueObj = Object.keys(result);
  const frequencyObj = result;
  return { unique: uniqueObj, frequencyObj };
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

//Q4
function rotateArray(arr, steps) {
  // 여기에 코드를 작성하세요
  return arr.slice(-steps).concat(arr.slice(0, -steps)); // 음수를 하면 뒤에서부터 자름
}

const input = [1, 2, 3, 4, 5];
console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]

//Q5
function arrayDifference(arr1, arr2) {}

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

function binarySearch(arr, target) {
  // 여기에 코드를 작성하세요
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const gap = right - left;
    const half = (gap - (gap % 2)) / 2;
    const mid = left + half; // left + Math.floor((right - left) / 2)

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
