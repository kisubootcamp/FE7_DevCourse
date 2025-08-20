// // 1.
// function filterByThreshold(obj, threshold) {
//   for (const key in obj) {
//     if (obj[key] < threshold) delete obj[key];
//   }
//   return obj;
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

// // 2.
// function squareValues(obj) {
//   const newObj = {};
//   for (const key in obj) {
//     newObj[key] = obj[key] ** 2;
//   }
//   return newObj;
// }
// const obj = { a: 1, b: 2, c: 3 };
// console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

// const obj2 = { x: 2, y: 3 };
// console.log(squareValues(obj2)); // { x: 4, y: 9 }

// const obj3 = { p: 0, q: -2 };
// console.log(squareValues(obj3)); // { p: 0, q: 4 }

// const obj4 = {};
// console.log(squareValues(obj4)); // {}

// // 3. 나중에 다시
// function renameKey(obj, ...keys) {
//   [origin, change] = keys;

//   for (const key in obj) {
//     if (key === origin) {
//       obj[change] = obj[key];
//       delete obj[key];
//     }
//   }

//   return obj;
// }
// console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
// console.log(renameKey({ a: 1 }, "c", "d")); // { a: 1 }
// console.log(renameKey({}, "a", "b")); // {}
// console.log(renameKey({ a: 1 }, "a", "a")); // { a: 1 }

// 4.
function sortKeys(obj) {
  console.log(Object.entries(obj));
}
console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
console.log(sortKeys({})); // {}
console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }
