// 연습문제
// 1.
// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

// const obj3 = { x: 10 };
// const obj4 = { y: 20 };
// console.log(mergeObjects(obj3, obj4)); // { x: 10, y: 20 }

// const obj5 = { a: 1, b: 2 };
// const obj6 = { a: 3, b: 4 };
// console.log(mergeObjects(obj5, obj6)); // { a: 3, b: 4 }

// const obj7 = {};
// const obj8 = { z: 5 };
// console.log(mergeObjects(obj7, obj8)); // { z: 5 }

// 2.
// function objectToArray(obj) {
//   return Object.entries(obj);
// }
// const obj = { a: 1, b: 2, c: 3 };
// console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// const obj2 = { x: 5, y: 10 };
// console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

// const obj3 = { p: 3 };
// console.log(objectToArray(obj3)); // [['p', 3]]

// const obj4 = {};
// console.log(objectToArray(obj4)); // []

// 3.
// function deleteKey(obj, key) {
//   const copy = structuredClone(obj);
//   delete copy[key];
//   return copy;
// }
// const obj = { a: 1, b: 2, c: 3 };
// const keyToDelete = 'b';
// console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }

// const obj2 = { x: 10, y: 20, z: 30 };
// const keyToDelete2 = 'y';
// console.log(deleteKey(obj2, keyToDelete2)); // { x: 10, z: 30 }

// const obj3 = { a: 5 };
// const keyToDelete3 = 'a';
// console.log(deleteKey(obj3, keyToDelete3)); // {}

// const obj4 = { m: 1, n: 2, o: 3 };
// const keyToDelete4 = 'p';
// console.log(deleteKey(obj4, keyToDelete4)); // { m: 1, n: 2, o: 3 }

// 4.

// Object.hasOwn(obj, num)
// 객체에 실제로 존재 하는지 확인
// 열거 가능한 속성도 읽으면 안되니까 for..in

// function findKeyByValue(obj, num) {
//   let find;
//   Object.keys(obj).forEach((key, index) => {
//     if (num - 1 === index) find = key;
//   });
//   return find || null;
// }
// const obj = { a: 1, b: 2, c: 3 };
// console.log(findKeyByValue(obj, 2)); // 'b'
// console.log(findKeyByValue(obj, 4)); // null
// console.log(findKeyByValue(obj, 1)); // 'a'
// console.log(findKeyByValue({}, 1)); // null

// 5.
// function multiplyValues(obj) {
//   let result = 1;
//   Object.keys(obj).forEach((key) => (result *= obj[key]));
//   return result;
// }

// const obj = { a: 1, b: 2, c: 3 };
// console.log(multiplyValues(obj)); // 6

// const obj2 = { x: 2, y: 3, z: 4 };
// console.log(multiplyValues(obj2)); // 24

// const obj3 = { a: 1, b: 0, c: 3 };
// console.log(multiplyValues(obj3)); // 0

// const obj4 = {};
// console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)

// 6.
// function hasOwnKey(obj, pr) {
//   return Object.hasOwn(obj, pr);
// }
// const obj = Object.create({ inherited: 1 });
// obj.own = 2;

// console.log(hasOwnKey(obj, 'own')); // true
// console.log(hasOwnKey(obj, 'inherited')); // false
// console.log(hasOwnKey({}, 'a')); // false
// console.log(hasOwnKey({ a: undefined }, 'a')); // true

// 7.
// function pick(obj, arr) {
//   const result = {};

// 2중반복문 안쓰고 if hasOwn 함수 쓰면됨

//   Object.keys(obj).forEach((key) => {
//     for (value of arr) {
//       if (value === key) {
//         result[key] = obj[key];
//         break;
//       }
//     }
//   });
//   return result;
// }
// console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // { a: 1, c: 3 }
// console.log(pick({ x: 10, y: 20 }, ['z'])); // {}
// console.log(pick({}, ['a'])); // {}
// console.log(pick({ a: 1 }, [])); // {}

// 8.
function omit(obj, arr) {
  const newObj = structuredClone(obj);
  for (const value of arr) {
    // Object.keys(obj).forEach((key) => {
    //   if (key === value) delete obj[key];
    // });
    if (Object.hasOwn(obj, value)) delete newObj[value];
  }

  return newObj;
}
console.log(omit({ a: 1, b: 2, c: 3 }, ['b'])); // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ['x', 'y'])); // {}
console.log(omit({}, ['a'])); // {}
console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }
