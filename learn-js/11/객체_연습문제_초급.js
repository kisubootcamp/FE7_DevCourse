//Q1

function mergeObjects(obj1, obj2) {
  //return Object.assign({}, obj1, obj2);
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

const obj3 = { x: 10 };
const obj4 = { y: 20 };
console.log(mergeObjects(obj3, obj4)); // { x: 10, y: 20 }

const obj5 = { a: 1, b: 2 };
const obj6 = { a: 3, b: 4 };
console.log(mergeObjects(obj5, obj6)); // { a: 3, b: 4 }

const obj7 = {};
const obj8 = { z: 5 };
console.log(mergeObjects(obj7, obj8)); // { z: 5 }

// Q2
function objectToArray(obj) {
  return Object.entries(obj);
}

const obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

const obj2 = { x: 5, y: 10 };
console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

const obj3 = { p: 3 };
console.log(objectToArray(obj3)); // [['p', 3]]

const obj4 = {};
console.log(objectToArray(obj4)); // []

// Q3

function deleteKey(obj, keyToDelete) {
  delete obj[keyToDelete]; // 얕은복사로 인한 참조라서 원본도 삭제됨
  return obj;
}

const obj = { a: 1, b: 2, c: 3 };
const keyToDelete = "b";
console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }

const obj2 = { x: 10, y: 20, z: 30 };
const keyToDelete2 = "y";
console.log(deleteKey(obj2, keyToDelete2)); // { x: 10, z: 30 }

const obj3 = { a: 5 };
const keyToDelete3 = "a";
console.log(deleteKey(obj3, keyToDelete3)); // {}

const obj4 = { m: 1, n: 2, o: 3 };
const keyToDelete4 = "p";
console.log(deleteKey(obj4, keyToDelete4)); // { m: 1, n: 2, o: 3 }

// Q4
function findKeyByValue(obj, value) {
  //const findKey = Object.keys(obj).find((key) => obj[key] === num);
  for (const k in obj) {
    // for~in은 객체의 프로토타입 까지 탐색하기에, hasOwn으로 실제 소유중인 속성인지 확인한다.
    if (Object.hasOwn(obj, k) && obj[k] === value) return k;
  }
  return null;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj, 2)); // 'b'
console.log(findKeyByValue(obj, 4)); // null
console.log(findKeyByValue(obj, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null

// Q5
function multiplyValues(obj) {
  let result = 1;
  const values = Object.values(obj);

  for (const value of values) {
    result *= value;
  }
  return result;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj)); // 6

const obj2 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj2)); // 24

const obj3 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj3)); // 0

const obj4 = {};
console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)

// Q6
function hasOwnKey(obj, findKey) {
  return Object.hasOwn(obj, findKey);
}

const obj = Object.create({ inherited: 1 });
obj.own = 2;

console.log(hasOwnKey(obj, "own")); // true
console.log(hasOwnKey(obj, "inherited")); // false
console.log(hasOwnKey({}, "a")); // false
console.log(hasOwnKey({ a: undefined }, "a")); // true

//Q7
function pick(obj, target) {
  const newObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (target.includes(key)) newObj[key] = value;
  });
  return newObj;
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"])); // {}
console.log(pick({}, ["a"])); // {}
console.log(pick({ a: 1 }, [])); // {}

//Q8
function omit(obj, target) {
  const newObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (!target.includes(key)) newObj[key] = value;
  });
  return newObj;
}

console.log(omit({ a: 1, b: 2, c: 3 }, ["b"])); // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"])); // {}
console.log(omit({}, ["a"])); // {}
console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }
