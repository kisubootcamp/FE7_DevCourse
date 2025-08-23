// // 1.
// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }

// console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
// // 출력: [1, 2, 3, 4, 5, 6, 7]

// console.log(flattenArray([1, [], [2, 3, []], [4, [5, [6]]]]));
// // 출력: [1, 2, 3, 4, 5, 6]

// console.log(flattenArray([[[]]]));
// // 출력: []

// console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
// // 출력: [1, 2, 3, 4, 5]

// console.log(flattenArray([1, 2, 3]));
// // 출력: [1, 2, 3]

// // 2.
// function groupBy(arr, key) {
//   const result = {};

//   arr.map(function (value) {
//     if (!result[value[key]]) {
//       result[value[key]] = [value];
//     } else {
//       result[value[key]].push(value);
//     }
//   });

//   return result;
// }

// const people = [
//   { name: "John", age: 20, city: "New York" },
//   { name: "Jane", age: 20, city: "Boston" },
//   { name: "Mark", age: 25, city: "New York" },
//   { name: "Mary", age: 25, city: "Boston" },
//   { name: "James", age: 30, city: "New York" },
// ];

// console.log(groupBy(people, "age"));
// // 출력: {
// //   '20': [
// //     { name: 'John', age: 20, city: 'New York' },
// //     { name: 'Jane', age: 20, city: 'Boston' }
// //   ],
// //   '25': [
// //     { name: 'Mark', age: 25, city: 'New York' },
// //     { name: 'Mary', age: 25, city: 'Boston' }
// //   ],
// //   '30': [
// //     { name: 'James', age: 30, city: 'New York' }
// //   ]
// // }

// console.log(groupBy(people, "city"));
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
// console.log(groupBy([], "age"));
// // 출력: {}

// // 존재하지 않는 키로 그룹화
// console.log(groupBy(people, "country"));
// // 출력: { 'undefined': [...] }

// //3.
// function getFrequency(arr) {
//   const frequency = {};

//   for (const arrElement of arr) {
//     frequency[arrElement] = (frequency[arrElement] || 0) + 1;
//   }

//   const unique = Object.keys(frequency);
//   return { unique, frequency };
// }

// console.log(getFrequency([1, 2, 3, 1, 2, 1, 4, 5, 4]));
// // 출력: {
// //   unique: [1, 2, 3, 4, 5],
// //   frequency: { '1': 3, '2': 2, '3': 1, '4': 2, '5': 1 }
// // }

// console.log(getFrequency(["a", "b", "a", "c", "b", "a"]));
// // 출력: {
// //   unique: ['a', 'b', 'c'],
// //   frequency: { 'a': 3, 'b': 2, 'c': 1 }
// // }

// console.log(getFrequency([true, false, true, true]));
// // 출력: {
// //   unique: [true, false],
// //   frequency: { 'true': 3, 'false': 1 }
// // }

// console.log(getFrequency([]));
// // 출력: { unique: [], frequency: {} }

// console.log(getFrequency([1]));
// // 출력: { unique: [1], frequency: { '1': 1 } }

// // 4. 일단 패스
// function rotateArray(arr, steps) {
//     const out = [];

//     for (let i = 0; i < arr.length; i++) {
//         if ((i + steps) < )
//     }
// }

// const input = [1, 2, 3, 4, 5];
// console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
// console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]
