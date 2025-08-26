// ## 1. 객체 병합

// ### 문제

// 두 개의 객체를 병합하여 반환하는 함수를 작성하세요.

// 중복된 키가 있을 경우, 두 번째 객체의 값이 우선합니다.

// **입력:**

function mergeObjects(obj1, obj2) {
  return Object.assign(obj1, obj2);
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

// ## 2. 키-값 배열화

// ### 문제

// 주어진 객체의 키-값 쌍을 배열로 반환하는 함수를 작성하시오.

// **입력:**

function objectToArray(obj) {
  return Object.entries(obj);
}

const obj9 = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj9)); // [['a', 1], ['b', 2], ['c', 3]]

const obj10 = { x: 5, y: 10 };
console.log(objectToArray(obj10)); // [['x', 5], ['y', 10]]

const obj11 = { p: 3 };
console.log(objectToArray(obj11)); // [['p', 3]]

const obj12 = {};
console.log(objectToArray(obj12)); // []

// ## 3. 객체에서 특정 키 삭제

// ### 문제

// 주어진 객체에서 특정 키를 삭제하는 함수를 작성하세요

function deleteKey(obj, str) {
  //깊은 복사를 해야 원본 데이터에 영향을 덜 끼침
  const copy = structuredClone(obj);
  delete copy[str];
  return copy;
}

const obj13 = { a: 1, b: 2, c: 3 };
const keyToDelete = "b";
console.log(deleteKey(obj13, keyToDelete)); // { a: 1, c: 3 }

const obj14 = { x: 10, y: 20, z: 30 };
const keyToDelete2 = "y";
console.log(deleteKey(obj14, keyToDelete2)); // { x: 10, z: 30 }

const obj15 = { a: 5 };
const keyToDelete3 = "a";
console.log(deleteKey(obj15, keyToDelete3)); // {}

const obj16 = { m: 1, n: 2, o: 3 };
const keyToDelete4 = "p";
console.log(deleteKey(obj16, keyToDelete4)); // { m: 1, n: 2, o: 3 }

// ## 4. 객체의 값으로 키 찾기

// ### 문제

// 주어진 객체에서 특정 값에 해당하는 키를 반환하는 함수를 작성하세요. 값이 여러 개일 경우, 첫 번째 키만 반환한다. 값이 없으면 null을 반환하세요

function findKeyByValue(obj, value) {
  for (const k in obj) {
    if (Object.hasOwn(obj, k) && obj[k] === value) return k;
  }
  return null;
}
Object.prototype.extra = 10;
const obj17 = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj17, 10)); // 'extra'
//for in은 열거 가능한 속성(enumerable이 true)만 접근하며, 프로토타입 객체에 있는 것도 접근한다. 그러나 class는 아니니까 순회 가능성이 적음.
console.log(findKeyByValue(obj17, 2)); // 'b'
console.log(findKeyByValue(obj17, 4)); // null
console.log(findKeyByValue(obj17, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null

// ## 5. 객체의 모든 값 곱하기

// ### 문제

// 주어진 객체의 모든 값들을 곱하여 반환하는 함수를 작성하세요.

// 입출력

function multiplyValues(obj) {
  let result = 1;
  const obj2 = Object.values(obj);
  for (const v of obj2) {
    //if(Object.hasOwn(obj, v))
    result *= v;
  }
  return result;
}

Object.prototype.extra = 10;
const obj18 = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj18)); // 6

const obj19 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj19)); // 24

const obj20 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj20)); // 0

const obj21 = {};
console.log(multiplyValues(obj21)); // 1 (곱셈의 항등원)

// ## 6. 키 존재 여부 확인

// ### 문제

// 주어진 객체에 특정 키가 **직접 소유 프로퍼티**로 존재하는지 확인하는 함수를 작성하세요. (프로토타입 체인은 검사하지 않음)

// **입출력**

const obj = Object.create({ inherited: 1 });
obj.own = 2;

const hasOwnKey = (obj, str) => Object.hasOwn(obj, str);

console.log(hasOwnKey(obj, "own")); // true
console.log(hasOwnKey(obj, "inherited")); // false
console.log(hasOwnKey({}, "a")); // false
console.log(hasOwnKey({ a: undefined }, "a")); // true

// ## 7. 특정 키만 선택 (pick)

// ### 문제

// 주어진 객체에서 지정된 키들만 골라 **새 객체**로 반환하는 함수를 작성하세요.

// **입출력**

function pick(obj, arr) {
  const obj2 = {};
  for (const key of arr) {
    if (Object.hasOwn(obj, key)) {
      obj2[key] = obj[key];
    }
  }
  return obj2;
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"])); // {}
console.log(pick({}, ["a"])); // {}
console.log(pick({ a: 1 }, [])); // {}

// ## 8. 특정 키 제외 (omit)

// ### 문제

// 주어진 객체에서 지정된 키들을 제외하고 **새 객체**로 반환하는 함수를 작성하세요.
function omit(obj, arr) {
  const obj2 = {};
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      let should = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
          should = true;
          break;
        }
      }
      if (!should) {
        obj2[key] = obj[key];
      }
    }
  }
  return obj2;
}

// **입출력**

console.log(omit({ a: 1, b: 2, c: 3 }, ["b"])); // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"])); // {}
console.log(omit({}, ["a"])); // {}
console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }
