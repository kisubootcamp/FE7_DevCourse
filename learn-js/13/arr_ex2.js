// 배열 내장 객체 연습문제+

// 1
// n차원 배열을 1차원 배열로 평탄화하는 함수를 작성하세요.
// 배열의 모든 요소를 순회하면서 배열인 요소를 만나면 재귀적으로 평탄화해야 합니다.
function flattenArray(arr) {
  const flattenedArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattenedArray.push(...flattenArray(item));
    } else {
      flattenedArray.push(item);
    }
  });
  return flattenedArray;
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

//

// 2
// 객체 배열이 주어졌을 때, 특정 속성을 기준으로 객체들을 그룹화하는 함수를 작성하세요.
function groupBy(arr, key) {
  const groupObj = {};
  arr.forEach((item) => {
    const groupKey = item[key];
    if (groupObj[groupKey] === undefined) {
      groupObj[groupKey] = [];
    }
    groupObj[groupKey].push(item);
  });
  return groupObj;
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

//

// 3
// 배열에서 중복된 요소를 제거하고, 각 요소의 등장 빈도수를 계산하는 함수를 작성하세요.
function getFrequency(arr) {
  const frequency = {};
  arr.forEach((item) => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  const unique = Object.keys(frequency).map((key) =>
    isNaN(key) ? key : Number(key)
  );

  return { frequency, unique };
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

//

// 4
// 배열을 주어진 스텝만큼 오른쪽으로 회전시키는 함수를 작성하세요.
// 음수 스텝은 왼쪽 회전을 의미합니다.
function rotateArray(arr, steps) {
  const newArr = [...arr]; // 얕은 복사지만 원시값 요소들은 깊은 복사처럼 동작

  function rotateRight() {
    newArr.unshift(newArr.pop());
  }

  function rotateLeft() {
    newArr.push(newArr.shift());
  }

  const normalizedSteps = steps % newArr.length;
  if (normalizedSteps === 0) return newArr;
  else if (normalizedSteps > 0) {
    for (let i = 0; i < normalizedSteps; i++) {
      rotateRight();
    }
  } else {
    for (let i = 0; i < Math.abs(normalizedSteps); i++) {
      rotateLeft();
    }
  }

  return newArr;
}

const input = [1, 2, 3, 4, 5];
console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]
