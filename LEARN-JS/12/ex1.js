// 연습문제 (객체) 중급
// 1.
// function filterByThreshold(obj, num) {
//   const result = {};
//   for (value in obj) if (obj[value] >= num) result[value] = obj[value];
//   return result;
// }

// const obj = { a: 1, b: 5, c: 3 };
// const threshold = 2;
// console.log(filterByThreshold(obj, threshold)); // { b: 5, c: 3 }

// const obj2 = { x: 1, y: 2, z: 3 };
// const threshold2 = 2;
// console.log(filterByThreshold(obj2, threshold2)); // { y: 2, z: 3 }

// const obj3 = { a: 10, b: 5, c: 1 };
// const threshold3 = 6;
// console.log(filterByThreshold(obj3, threshold3)); // { a: 10 }

// const obj4 = { m: -1, n: 0, o: 1 };
// const threshold4 = 0;
// console.log(filterByThreshold(obj4, threshold4)); // { n: 0, o: 1 }

// 2.
// function squareValues(obj) {
//   const result = {};
//   for (value in obj) {
//     result[value] = obj[value] * obj[value];
//   }
//   return result;
// }

// const obj = { a: 1, b: 2, c: 3 };
// console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

// const obj2 = { x: 2, y: 3 };
// console.log(squareValues(obj2)); // { x: 4, y: 9 }

// const obj3 = { p: 0, q: -2 };
// console.log(squareValues(obj3)); // { p: 0, q: 4 }

// const obj4 = {};
// console.log(squareValues(obj4)); // {}

// 3.
// function renameKey(obj, name, newName) {
//   const result = {};
//   for (value in obj) {
//     if (name === value) {
//       result[newName] = obj[value];
//     } else {
//       result[value] = obj[value];
//     }
//   }
//   return result;
// }

// console.log(renameKey({ a: 1, b: 2 }, 'a', 'x')); // { x: 1, b: 2 }
// console.log(renameKey({ a: 1 }, 'c', 'd')); // { a: 1 }
// console.log(renameKey({}, 'a', 'b')); // {}
// console.log(renameKey({ a: 1 }, 'a', 'a')); // { a: 1 }

// 4.
// function sortKeys(obj) {
//   const arr = Object.entries(obj);
//   for (let i = 0; i < arr.length - 1; i++) {
//     let temp = [];
//     if (arr[i][0] > arr[i + 1][0]) {
//       temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   return Object.fromEntries(arr);
// }

// console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
// console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
// console.log(sortKeys({})); // {}
// console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }

// 5.

// function mapValues(obj, fn) {
//   const result = {};
//   for (key in obj) {
//     result[key] = fn(obj[key]);
//   }
//   return result;
// }
const double = (n) => n * 2;

// 강사님풀이)
function mapValues(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]));
}

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double)); // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// 6.
// function invert(obj) {
//   const result = {};
//   for (key in obj) {
//     result[obj[key]] = key;
//   }
//   return result;
// }

// 강사님 풀이)
// 구조분해할당
// function invert(obj) {
//   const result = {};
//   const arr = Object.entries(obj);
//   for (const [k, v] of arr) {
//     result[v] = k;
//   }
//   return result;
// }

// console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
// console.log(invert({ x: 'y', y: 'y' })); // { "y": "y" }  (마지막 키 y가 우선)
// console.log(invert({})); // {}
// console.log(invert({ a: '1', b: 1 })); // { "1": "b" }

// 7.
// const data = { a: { b: { c: 42 } } };
// function getByPath(obj, str) {
//   const arr = str.split('.');

//   if (Object.hasOwn(obj, arr[0])) {
//     if (obj[arr[0]] !== null && Object.hasOwn(obj[arr[0]], arr[1])) {
//       if (Object.hasOwn(obj[arr[0]][arr[1]], arr[2])) {
//         return obj[arr[0]][arr[1]][arr[2]];
//       }
//     }
//   }
// }

// 강사님 풀이 )
// 객체안에 객체를 계속 current에 넣어 값이 있는지 확인
// let current = obj;
// for (let i = 0; i < arr.length; i++) {
//   if (!current) {
//     return undefined;
//   }
//   current = current[arr[i]];
// }
// return current;

// console.log(getByPath(data, 'a.b.c')); // 42
// console.log(getByPath(data, 'a.b.x')); // undefined
// console.log(getByPath({}, 'a.b')); // undefined
// console.log(getByPath({ a: null }, 'a.b')); // undefined

// 8.
// function setByPath(obj, str, num) {
//   const arr = str.split('.');
//   const result = {};
//   result[0] = num;
//   if (obj[arr[0]] === null || !Object.hasOwn(obj, arr[0])) {
//     if (!arr[1]) return (obj[arr[0]] = num);
//     obj[arr[0]] = {};
//   }

//   if ((!Object.hasOwn(obj[arr[0]]), arr[1])) {
//     if (!arr[2]) return (obj[arr[0]][arr[1]] = num);
//     obj[arr[0]][arr[1]] = {};
//   }

//   if (!Object.hasOwn(obj[arr[0]][arr[1]], arr[2])) {
//     if (!arr[3]) return (obj[arr[0]][arr[1]][arr[2]] = num);
//     obj[arr[0]][arr[1]][arr[2]] = {};
//   }

//   return obj;
// }

// const obj1 = {};
// setByPath(obj1, 'a.b.c', 100);
// console.log(obj1); // { a: { b: { c: 100 } } }

// const obj2 = { a: { b: 1 } };
// setByPath(obj2, 'a.c', 2);
// console.log(obj2); // { a: { b: 1, c: 2 } }

// const obj3 = {};
// setByPath(obj3, 'x', 5);
// console.log(obj3); // { x: 5 }

// const obj4 = { a: null };
// setByPath(obj4, 'a.b', 10);
// console.log(obj4); // { a: { b: 10 } }
