// // 1. 주어진 객체에서 값이 특정 기준 이상인 키-값 쌍만 필터링하여 반환하는 함수를 작성하세요
// const filterByThreshold = function (obj, ts) {
//   const result = {};
//   for (k in obj) {
//     if (Object.hasOwn(obj, k) && obj[k] >= ts) {
//       result[k] = obj[k];
//     }
//   }
//   return result;
// };

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

// // 2. 주어진 객체의 모든 값을 제곱하는 함수를 작성하세요
// const squareValues = function (obj) {
//   const result = {};
//   for (k in obj) {
//     result[k] = obj[k] ** 2;
//   }
//   return result;
// };

// const obj = { a: 1, b: 2, c: 3 };
// console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

// const obj2 = { x: 2, y: 3 };
// console.log(squareValues(obj2)); // { x: 4, y: 9 }

// const obj3 = { p: 0, q: -2 };
// console.log(squareValues(obj3)); // { p: 0, q: 4 }

// const obj4 = {};
// console.log(squareValues(obj4)); // {}

// // 3. 객체에서 특정 키의 이름을 다른 이름으로 변경하는 함수를 작성하세요. 원래 키가 없으면 그대로 반환하세요. (얕은 레벨만)

// const renameKey = function (obj, find, chage) {
//   if (!Object.hasOwn(obj, find)) return obj;
//   const result = {};

//   for (k in obj) {
//     if (k == find) result[chage] = obj[find];
//     else result[k] = obj[k];
//   }
//   return result;
// };

// console.log(renameKey({ a: 1, b: 2 }, 'a', 'x')); // { x: 1, b: 2 }
// console.log(renameKey({ a: 1 }, 'c', 'd')); // { a: 1 }
// console.log(renameKey({}, 'a', 'b')); // {}
// console.log(renameKey({ a: 1 }, 'a', 'a')); // { a: 1 }

// // 4. 객체의 키를 알파벳 오름차순으로 정렬해 새 객체로 반환하는 함수를 작성하세요.
// const sortKeys = function (obj) {
//   const result = {};
//   const arr = Object.keys(obj);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         const temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   for (let i = 0; i < arr.length; i++) result[arr[i]] = obj[arr[i]];
//   return result;
// };

// console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
// console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
// console.log(sortKeys({})); // {}
// console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }

// // 5. 주어진 객체의 값에 변환 함수를 적용해 새 객체로 반환하는 함수를 작성하세요.
// const mapValues = function (obj, fn) {
//   for (k in obj) obj[k] = fn(obj[k]);
//   return obj;
// };
// const double = (n) => n * 2;

// console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
// console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
// console.log(mapValues({}, double)); // {}
// console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// // 6.객체의 **키와 값**을 뒤집어 새 객체로 반환하는 함수를 작성하세요. 값은 문자열/숫자라고 가정합니다. (중복 값이 있으면 **마지막 키**가 우선)

// const invert = function (obj) {
//   const arr = Object.entries(obj);
//   for (k in arr) {
//     const temp = arr[k][0];
//     arr[k][0] = arr[k][1];
//     arr[k][1] = temp;
//   }
//   return Object.fromEntries(arr);
// };

// console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
// console.log(invert({ x: 'y', y: 'y' })); // { "y": "y" }  (마지막 키 y가 우선)
// console.log(invert({})); // {}
// console.log(invert({ a: '1', b: 1 })); // { "1": "b" }

// 7. 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 안전하게 가져오는 함수를 작성하세요. 경로가 없으면 `undefined`를 반환합니다.
// const getByPath = function (data, way) {
//   const result = JSON.parse(JSON.stringify(data));
//   const arr = way.split('.');
//   for (k in arr) {
//     if (!Object.hasOwn(result, arr[k])) return undefined;
//     result = result[arr[k]];
//   }
//   return result;
// };

// const data = { a: { b: { c: 42 } } };

// console.log(getByPath(data, 'a.b.c')); // 42
// console.log(getByPath(data, 'a.b.x')); // undefined
// console.log(getByPath({}, 'a.b')); // undefined
// console.log(getByPath({ a: null }, 'a.b')); // undefined
