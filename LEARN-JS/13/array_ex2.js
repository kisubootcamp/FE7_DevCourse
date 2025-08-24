// 1.
// function flattenArray(arr) {
//   const newArr = arr.flat(1);
//   let isFlat = false;

//   for (let i = 0; i < newArr.length; i++) {
//     if (Array.isArray(newArr[i])) isFlat = true;
//   }

//   if (isFlat) return flattenArray(newArr);

//   return newArr;
// }

// console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
// // 출력: [1, 2, 3, 4, 5, 6, 7]

// console.log(flattenArray([1, [], [2, 3, []], [4, [5, [6]]]]));
// // // // 출력: [1, 2, 3, 4, 5, 6]

// console.log(flattenArray([[[]]]));
// // // // 출력: []

// console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
// // // // 출력: [1, 2, 3, 4, 5]

// console.log(flattenArray([1, 2, 3]));
// // // // 출력: [1, 2, 3]

// 2.
// function groupBy(arr, key) {
//   const a = arr.map((item) => item[key]);
//   const result = {};

//   if (!a[0]) return `'undefined': [...]`;

//   for (value of a) {
//     if (!result[value]) {
//       result[value] = arr.filter((item) => item[key] === value);
//     }
//   }

//   return result;
// }

// const people = [
//   { name: 'John', age: 20, city: 'New York' },
//   { name: 'Jane', age: 20, city: 'Boston' },
//   { name: 'Mark', age: 25, city: 'New York' },
//   { name: 'Mary', age: 25, city: 'Boston' },
//   { name: 'James', age: 30, city: 'New York' },
// ];

// console.log(groupBy(people, 'age'));
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

// console.log(groupBy(people, 'city'));
// // 출력: {
// //   'New York': [
// //     { name: 'John', age: 20, city: 'New York' },
// //     { name: 'Mark', age: 25, city: 'New York' },
// //     { name: 'James', age: 30, city: 'New York' }
// //   ],
// //   'Boston': [
// //     { name: 'Jane', age: 20, city: 'Boston' },
// //     { name: 'Mary', age: 25, city: 'Boston' }
// //   ]
// // }

// // 빈 배열 테스트
// console.log(groupBy([], 'age'));
// // 출력: {}

// // 존재하지 않는 키로 그룹화
// console.log(groupBy(people, 'country'));
// // 출력: { 'undefined': [...] }

// 3.
// function getFrequency(arr) {
//   const frequency = {};
//   for (num of arr) {
//     if (!frequency[num]) {
//       frequency[num] = 1;
//     } else {
//       frequency[num]++;
//     }
//   }

//   const unique = Object.keys(frequency);
//   return {
//     출력: {
//       unique,
//       frequency,
//     },
//   };
// }

// console.log(getFrequency([1, 2, 3, 1, 2, 1, 4, 5, 4]));
// 출력: {
//   unique: [1, 2, 3, 4, 5],
//   frequency: { '1': 3, '2': 2, '3': 1, '4': 2, '5': 1 }
// }

// console.log(getFrequency(['a', 'b', 'a', 'c', 'b', 'a']));
// // // 출력: {
// // //   unique: ['a', 'b', 'c'],
// // //   frequency: { 'a': 3, 'b': 2, 'c': 1 }
// // // }

// console.log(getFrequency([true, false, true, true]));
// // // 출력: {
// // //   unique: [true, false],
// // //   frequency: { 'true': 3, 'false': 1 }
// // // }

// console.log(getFrequency([]));
// // // 출력: { unique: [], frequency: {} }

// console.log(getFrequency([1]));
// // // 출력: { unique: [1], frequency: { '1': 1 } }

// 4.
// function rotateArray(arr, steps) {
//   let a;
//   let b;
//   if (steps >= 0) {
//     a = arr.slice(steps + 1, arr.length);
//     b = arr.slice(0, steps + 1);
//     return a.concat(b);
//   } else {
//     a = arr.slice(Math.abs(steps), arr.length);
//     b = arr.slice(arr.length * -1, Math.abs(steps));
//     return a.concat(b);
//   }
// }

// const input = [1, 2, 3, 4, 5];
// console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
// console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]

// 5.
// function arrayDifference(arr1, arr2) {
//   const result = {};

//   arr1.forEach((i) => (result[i] = 1));

//   for (value of arr2) {
//     if (result[value]) result[value]++;
//   }

//   const result2 = [];
//   Object.keys(result).forEach((item) => {
//     if (result[item] === 1) result2.push(item);
//   });

//   return result2;
// }

// console.log(arrayDifference([1, 2, 3, 4, 5], [2, 4, 6]));
// 출력: [1, 3, 5]

// console.log(arrayDifference([1, 1, 2, 2], [1, 2]));
// // // 출력: []

// console.log(arrayDifference([1, 2, 3], []));
// // // 출력: [1, 2, 3]

// console.log(arrayDifference([], [1, 2, 3]));
// // // 출력: []

// console.log(arrayDifference([1, 2, 3], [4, 5, 6]));
// // // 출력: [1, 2, 3]

// console.log(arrayDifference(['a', 'b', 'c'], ['a']));
// // // 출력: ['b', 'c']

// 6.
// function maxSubArraySum(arr) {
//   const total = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       total.push(sum);
//     }
//   }

//   let max = -1;
//   for (let i = 0; i < total.length; i++) {
//     if (max < total[i]) max = total[i];
//   }

//   return max;
// }

// const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArraySum(input1)); // 6 ([4, -1, 2, 1])

// const input2 = [-1, -2, -3, -4];
// console.log(maxSubArraySum(input2)); // -1 ([-1])

// const input3 = [1, 2, 3, 4, 5];
// console.log(maxSubArraySum(input3)); // 15 ([1, 2, 3, 4, 5])

// const input4 = [1, -1, 1, -1, 1, -1, 1];
// console.log(maxSubArraySum(input4)); // 1 ([1])

// const input5 = [-2, -3, 4, -1, -2, 1, 5, -3];
// console.log(maxSubArraySum(input5)); // 7 ([4, -1, -2, 1, 5])

// 7.
// function binarySearch(arr, target) {
//   let result = -1;
//   arr.forEach((value, i) => {
//     if (value === target) result = i;
//   });
//   return result;
// }

// 이진 검색
// 정렬된 데이터에서 원하는 값을 찾기 위해
// 검색 범위를 반씩 줄여 가면서 탐색하는 방법
// 0 1 2 3 4 5

// const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15];
// console.log(binarySearch(sortedArr, 7)); // 3
// console.log(binarySearch(sortedArr, 10)); // -1
// console.log(binarySearch(sortedArr, 1)); // 0
// console.log(binarySearch(sortedArr, 15)); // 7
// console.log(binarySearch(sortedArr, 0)); // -1
