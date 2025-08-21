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

// // 4.
// function sortKeys(obj) {
//   const objToArr = Object.entries(obj);
//   objToArr.sort((a, b) => a[0].localeCompare(b[0]));

//   const arrToObj = Object.fromEntries(objToArr);
//   return arrToObj;
// }
// console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
// console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
// console.log(sortKeys({})); // {}
// console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }

// // 5.
// function mapValues(obj, func) {
//   for (const key in obj) {
//     obj[key] = func(obj[key]);
//   }
//   return obj;
// }
// const double = (n) => n * 2;

// console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
// console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
// console.log(mapValues({}, double)); // {}
// console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// // 6.
// function invert(obj) {
//   const result = [];

//   const objToArr = Object.entries(obj);
//   for (const arr of objToArr) {
//     const newArr = [arr[1], arr[0]];
//     result.push(newArr);
//   }
//   return Object.fromEntries(result);
// }
// console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
// console.log(invert({ x: "y", y: "y" })); // { "y": "y" }  (마지막 키 y가 우선)
// console.log(invert({})); // {}
// console.log(invert({ a: "1", b: 1 })); // { "1": "b" }

// // 7.
// function getByPath(obj, target) {
//   const keys = target.split(".");

//   let cur = obj;
//   for (const k of keys) {
//     if (cur == null) return undefined;
//     cur = cur[k];
//   }
//   return cur;
// }
// const data = { a: { b: { c: 42 } } };

// console.log(getByPath(data, "a.b.c")); // 42
// console.log(getByPath(data, "a.b.x")); // undefined
// console.log(getByPath({}, "a.b")); // undefined
// console.log(getByPath({ a: null }, "a.b")); // undefined

// 8.
function setByPath(obj, keys, target) {
  const keyArr = keys.split(".");

  let cur = obj;
  for (let i = 0; i < keyArr.length; i++) {
    const key = keyArr[i];

    if (i === keyArr.length - 1) {
      cur[key] = target;
    } else {
      if (cur[key] == null || typeof cur[key] !== "object") {
        cur[key] = {};
      }
      cur = cur[key];
    }
  }
  return obj;
}

const obj1 = {};
setByPath(obj1, "a.b.c", 100);
console.log(obj1); // { a: { b: { c: 100 } } }

const obj2 = { a: { b: 1 } };
setByPath(obj2, "a.c", 2);
console.log(obj2); // { a: { b: 1, c: 2 } }

const obj3 = {};
setByPath(obj3, "x", 5);
console.log(obj3); // { x: 5 }

const obj4 = { a: null };
setByPath(obj4, "a.b", 10);
console.log(obj4); // { a: { b: 10 } }
