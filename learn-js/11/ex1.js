// 연습문제 초급

// 1
// 두 개의 객체를 병합하여 반환하는 함수를 작성하세요.
// 중복된 키가 있을 경우, 두 번째 객체의 값이 우선합니다.
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 }; // 앝은 복사
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

//

// 2
// 주어진 객체의 키-값 쌍을 배열로 반환하는 함수를 작성하시오.
function objectToArray(obj) {
  return Object.entries(obj);
}

const obj20 = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj20)); // [['a', 1], ['b', 2], ['c', 3]]

const obj21 = { x: 5, y: 10 };
console.log(objectToArray(obj21)); // [['x', 5], ['y', 10]]

const obj22 = { p: 3 };
console.log(objectToArray(obj22)); // [['p', 3]]

const obj23 = {};
console.log(objectToArray(obj23)); // []

//

// 3
// 주어진 객체에서 특정 키를 삭제하는 함수를 작성하세요
function deleteKey(obj, key) {
  const newObj = { ...obj }; // 얕은 복사
  delete newObj[key]; // 특정 키 삭제
  return newObj; // 수정된 객체 반환
}

const obj30 = { a: 1, b: 2, c: 3 };
const keyToDelete = "b";
console.log(deleteKey(obj30, keyToDelete)); // { a: 1, c: 3 }

const obj31 = { x: 10, y: 20, z: 30 };
const keyToDelete2 = "y";
console.log(deleteKey(obj31, keyToDelete2)); // { x: 10, z: 30 }

const obj32 = { a: 5 };
const keyToDelete3 = "a";
console.log(deleteKey(obj32, keyToDelete3)); // {}

const obj33 = { m: 1, n: 2, o: 3 };
const keyToDelete4 = "p";
console.log(deleteKey(obj33, keyToDelete4)); // { m: 1, n: 2, o: 3 }

//

// 4
function findKeyByValue(obj, value) {
  for (const key in ob4j) {
    if (!obj.hasOwnProperty(key)) continue; // 객체의 고유 속성만 처리
    if (ob4j[key] === value) {
      return key; // 값이 일치하는 키 반환
    }
  }
  return null; // 값이 일치하는 키가 없으면 null 반환
}

const obj = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj, 2)); // 'b'
console.log(findKeyByValue(obj, 4)); // null
console.log(findKeyByValue(obj, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null

//

// 5
// 주어진 객체의 모든 값들을 곱하여 반환하는 함수를 작성하세요.
function multiplyValues(obj) {
  let product = 1; // 곱셈의 항등원은 1
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // 객체의 고유 속성만 처리
    product *= obj[key]; // 각 값들을 곱함
  }
  return product; // 최종 곱 반환
}

const obj50 = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj50)); // 6

const obj51 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj51)); // 24

const obj52 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj52)); // 0

const obj53 = {};
console.log(multiplyValues(obj53)); // 1 (곱셈의 항등원)

//

// 6
// 주어진 객체에 특정 키가 직접 소유 프로퍼티로 존재하는지 확인하는 함수를 작성하세요.
// (프로토타입 체인은 검사하지 않음)
function hasOwnKey(obj, key) {
  return obj.hasOwnProperty(key);
}

const obj60 = Object.create({ inherited: 1 });
obj60.own = 2;

console.log(hasOwnKey(obj60, "own")); // true
console.log(hasOwnKey(obj60, "inherited")); // false
console.log(hasOwnKey({}, "a")); // false
console.log(hasOwnKey({ a: undefined }, "a")); // true

//

// 7
// 문제: 주어진 객체에서 지정된 키들만 골라 새 객체로 반환하는 함수를 작성하세요.
function pick(obj, keys) {
  const newObj = {};
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // 객체의 고유 속성만 처리
    if (keys.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj; // 새 객체 반환
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"])); // {}
console.log(pick({}, ["a"])); // {}
console.log(pick({ a: 1 }, [])); // {}

//

// 8
// 주어진 객체에서 지정된 키들을 제외하고 새 객체로 반환하는 함수를 작성하세요.
function omit(obj, keys) {
  const newObj = {};
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // 객체의 고유 속성만 처리
    if (!keys.includes(key)) {
      newObj[key] = obj[key]; // 지정된 키가 아닌 경우 새 객체에 추가
    }
  }
  return newObj; // 새 객체 반환
}

console.log(omit({ a: 1, b: 2, c: 3 }, ["b"])); // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"])); // {}
console.log(omit({}, ["a"])); // {}
console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }
