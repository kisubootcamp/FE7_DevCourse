/* ------------------------------------------------------------------------------------------- */
// 연습문제(초급)
// 1. 객체 병합
/* 두 개의 객체를 병합하여 반환하는 함수를 작성하세요. 
중복된 키가 있을 경우, 두 번째 객체의 값이 우선합니다. */
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj11 = { a: 1, b: 2 };
const obj12 = { b: 3, c: 4 };
console.log(mergeObjects(obj11, obj12)); // { a: 1, b: 3, c: 4 }

const obj13 = { x: 10 };
const obj14 = { y: 20 };
console.log(mergeObjects(obj13, obj14)); // { x: 10, y: 20 }

const obj15 = { a: 1, b: 2 };
const obj16 = { a: 3, b: 4 };
console.log(mergeObjects(obj15, obj16)); // { a: 3, b: 4 }

const obj17 = {};
const obj18 = { z: 5 };
console.log(mergeObjects(obj17, obj18)); // { z: 5 }

// 2. 키-값 배열화
// 주어진 객체의 키-값 쌍을 배열로 반환하는 함수를 작성하시오.
/* function objectToArray(obj) {
  return Object.entries(obj);
} */
const objectToArray = (obj) => Object.entries(obj);

const obj21 = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj21)); // [['a', 1], ['b', 2], ['c', 3]]

const obj22 = { x: 5, y: 10 };
console.log(objectToArray(obj22)); // [['x', 5], ['y', 10]]

const obj23 = { p: 3 };
console.log(objectToArray(obj23)); // [['p', 3]]

const obj24 = {};
console.log(objectToArray(obj24)); // []

// 3. 객체에서 특정 키 삭제
// 주어진 객체에서 특정 키를 삭제하는 함수를 작성하세요
function deleteKey(obj, value) {
  const copy = JSON.parse(JSON.stringify(obj));
  // const copy = structuredClone(obj);
  delete copy[value];
  return copy;
}

const obj31 = { a: 1, b: 2, c: 3 };
const keyToDelete = "b";
console.log(deleteKey(obj31, keyToDelete)); // { a: 1, c: 3 }

const obj32 = { x: 10, y: 20, z: 30 };
const keyToDelete2 = "y";
console.log(deleteKey(obj32, keyToDelete2)); // { x: 10, z: 30 }

const obj33 = { a: 5 };
const keyToDelete3 = "a";
console.log(deleteKey(obj33, keyToDelete3)); // {}

const obj34 = { m: 1, n: 2, o: 3 };
const keyToDelete4 = "p";
console.log(deleteKey(obj34, keyToDelete4)); // { m: 1, n: 2, o: 3 }

// 4. 객체의 값으로 키 찾기
// 주어진 객체에서 특정 값에 해당하는 키를 반환하는 함수를 작성하세요.
// 값이 여러 개일 경우, 첫 번째 키만 반환한다. 값이 없으면 null을 반환하세요
function findKeyByValue(obj, value) {
  for (const key in obj) {
    if (Object.hasOwn(obj, key) && obj[key] === value) return key;
  }
  return null;
}

const obj41 = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj41, 2)); // 'b'
console.log(findKeyByValue(obj41, 4)); // null
console.log(findKeyByValue(obj41, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null

// 5. 객체의 모든 값 곱하기
// 주어진 객체의 모든 값들을 곱하여 반환하는 함수를 작성하세요.
function multiplyValues(obj) {
  let result = 1;
  for (const key in obj) {
    result *= obj[key];
  }
  return result;
}

const obj51 = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj51)); // 6

const obj52 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj52)); // 24

const obj53 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj53)); // 0

const obj54 = {};
console.log(multiplyValues(obj54)); // 1 (곱셈의 항등원)

// 6. 키 존재 여부 확인
// 주어진 객체에 특정 키가 직접 소유 프로퍼티로 존재하는지 확인하는 함수를 작성하세요. (프로토타입 체인은 검사하지 않음)
function hasOwnKey(obj, str) {
  return Object.prototype.hasOwnProperty.call(obj, str);
}

const obj61 = Object.create({ inherited: 1 });
obj61.own = 2;
console.log(obj61);
console.log(hasOwnKey(obj61, "own")); // true
console.log(hasOwnKey(obj61, "inherited")); // false
console.log(hasOwnKey({}, "a")); // false
console.log(hasOwnKey({ a: undefined }, "a")); // true

// 7. 특정 키만 선택 (pick)
// 주어진 객체에서 지정된 키들만 골라 새 객체로 반환하는 함수를 작성하세요.
function pick(obj, arr) {
  const result = {};
  for (const key of arr) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) result[key] = obj[key];
  }
  return result;
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"])); // {}
console.log(pick({}, ["a"])); // {}
console.log(pick({ a: 1 }, [])); // {}

// 8. 8. 특정 키 제외 (omit)
// 주어진 객체에서 지정된 키들을 제외하고 새 객체로 반환하는 함수를 작성하세요.
function omit(obj, arr) {
  for (const key of arr) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      delete obj[key];
    }
  }
  return obj;
}
console.log(omit({ a: 1, b: 2, c: 3 }, ["b"])); // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"])); // {}
console.log(omit({}, ["a"])); // {}
console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }

/* ------------------------------------------------------------------------------------------- */
// 연습문제(중급)
//
