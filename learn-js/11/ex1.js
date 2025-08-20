// 객체 파고들기 연습문제 초급

//1
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

//2
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

//3
// function deleteKey(obj, key) {
//   const copy = JSON.structuredClone(obj); 이렇게 하는 건 원본은 안 건들이고 풀려고 하는 것
//   delete copy[key];
//   return copy;
// }

// const obj = { a: 1, b: 2, c: 3 };
// const keyToDelete = "b";
// console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }

// const obj2 = { x: 10, y: 20, z: 30 };
// const keyToDelete2 = "y";
// console.log(deleteKey(obj2, keyToDelete2)); // { x: 10, z: 30 }

// const obj3 = { a: 5 };
// const keyToDelete3 = "a";
// console.log(deleteKey(obj3, keyToDelete3)); // {}

// const obj4 = { m: 1, n: 2, o: 3 };
// const keyToDelete4 = "p";
// console.log(deleteKey(obj4, keyToDelete4)); // { m: 1, n: 2, o: 3 }

//4
function findKeyByValue(obj, value) {
  for (const k in obj) {
    // for in은 prototype 객체에 있는 것도 반복 접근을 한다
    if (obj[k] === value) return k;
  }
  return null;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj, 2)); // 'b'
console.log(findKeyByValue(obj, 4)); // null
console.log(findKeyByValue(obj, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null

//5
