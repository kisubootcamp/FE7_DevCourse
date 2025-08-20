// // 1. 두 개의 객체를 병합하여 반환하는 함수를 작성하세요. 중복된 키가 있을 경우, 두 번째 객체의 값이 우선합니다.
// const mergeObjects = function (obj1, obj2) {
//   return { ...obj1, ...obj2 };
// };

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

// // 2. 키-값 배열화: 주어진 객체의 키-값 쌍을 배열로 반환하는 함수를 작성하시오.
// const objectToArray = function (obj) {
//   return Object.entries(obj);
// };

// const obj = { a: 1, b: 2, c: 3 };
// console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// const obj2 = { x: 5, y: 10 };
// console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

// const obj3 = { p: 3 };
// console.log(objectToArray(obj3)); // [['p', 3]]

// const obj4 = {};
// console.log(objectToArray(obj4)); // []

// // 3. 객체에서 특정 키 삭제 : 주어진 객체에서 특정 키를 삭제하는 함수를 작성하세요
// const deleteKey = function (obj, key) {
//   const copy = JSON.parse(JSON.stringify(obj));
//   delete copy[key];
//   return copy;
// };
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

// // 4. 객체의 값으로 키 찾기 : 주어진 객체에서 특정 값에 해당하는 키를 반환하는 함수를 작성하세요. 값이 여러 개일 경우, 첫 번째 키만 반환한다. 값이 없으면 null을 반환하세요
// const findKeyByValue = function (obj, value) {
//   for (const k in obj) {
//     if (Object.hasOwn(obj, k) && obj[k] === value) return k;
//   }
//   return null;
// };
// const obj = { a: 1, b: 2, c: 3 };
// console.log(findKeyByValue(obj, 2)); // 'b'
// console.log(findKeyByValue(obj, 4)); // null
// console.log(findKeyByValue(obj, 1)); // 'a'
// console.log(findKeyByValue({}, 1)); // null

// // 5. 객체의 모든 값 곱하기 : 주어진 객체의 모든 값들을 곱하여 반환하는 함수를 작성하세요.
// const multiplyValues = function (obj) {
//   let result = 1;
//   for (const k in obj) result *= obj[k];
//   return result;
// };

// const obj = { a: 1, b: 2, c: 3 };
// console.log(multiplyValues(obj)); // 6

// const obj2 = { x: 2, y: 3, z: 4 };
// console.log(multiplyValues(obj2)); // 24

// const obj3 = { a: 1, b: 0, c: 3 };
// console.log(multiplyValues(obj3)); // 0

// const obj4 = {};
// console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)

// // 6. 키 존재 여부 확인: 주어진 객체에 특정 키가 직접 소유 프로퍼티로 존재하는지 확인하는 함수를 작성하세요. (프로토타입 체인은 검사하지 않음)

// const hasOwnKey = function (obj, key) {
//   return Object.hasOwn(obj, key);
// };
// const obj = Object.create({ inherited: 1 });
// obj.own = 2;

// console.log(hasOwnKey(obj, 'own')); // true
// console.log(hasOwnKey(obj, 'inherited')); // false
// console.log(hasOwnKey({}, 'a')); // false
// console.log(hasOwnKey({ a: undefined }, 'a')); // true

// // 7. 특정 키만 선택 : 주어진 객체에서 지정된 키들만 골라 새 객체로 반환하는 함수를 작성하세요.

// const pick = function (obj, arr) {
//   const result = {};
//   for (const k in arr) {
//     if (Object.hasOwn(obj, arr[k])) result[arr[k]] = obj[arr[k]];
//   }
//   return result;
// };

// console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // { a: 1, c: 3 }
// console.log(pick({ x: 10, y: 20 }, ['z'])); // {}
// console.log(pick({}, ['a'])); // {}
// console.log(pick({ a: 1 }, [])); // {}

// // 8. 특정 키 제외 (omit) : 주어진 객체에서 지정된 키들을 제외하고 새 객체로 반환하는 함수를 작성하세요.

// const omit = function (obj, arr) {
//   const result = JSON.parse(JSON.stringify(obj));
//   for (k in arr) {
//     if (Object.hasOwn(result, arr[k])) delete result[arr[k]];
//   }
//   return result;
// };

// console.log(omit({ a: 1, b: 2, c: 3 }, ['b'])); // { a: 1, c: 3 }
// console.log(omit({ x: 10, y: 20 }, ['x', 'y'])); // {}
// console.log(omit({}, ['a'])); // {}
// console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }
