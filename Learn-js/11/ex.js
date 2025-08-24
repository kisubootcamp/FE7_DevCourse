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
    if (Object.hasOwn(obj, key)) {
      result *= obj[key];
    }
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
  return Object.hasOwn(obj, str);
}

const obj61 = Object.create({ inherited: 1 });
obj61.own = 2;
console.log(hasOwnKey(obj61, "own")); // true
console.log(hasOwnKey(obj61, "inherited")); // false
console.log(hasOwnKey({}, "a")); // false
console.log(hasOwnKey({ a: undefined }, "a")); // true

// 7. 특정 키만 선택 (pick)
// 주어진 객체에서 지정된 키들만 골라 새 객체로 반환하는 함수를 작성하세요.
function pick(obj, arr) {
  const result = {};
  for (const key of arr) {
    if (Object.hasOwn(obj, key)) result[key] = obj[key];
  }
  return result;
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"])); // {}
console.log(pick({}, ["a"])); // {}
console.log(pick({ a: 1 }, [])); // {}

// 8. 특정 키 제외 (omit)
// 주어진 객체에서 지정된 키들을 제외하고 새 객체로 반환하는 함수를 작성하세요.
function omit(obj, arr) {
  const result = {};
  for (const key in obj) {
    if (!arr.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

console.log(omit({ a: 1, b: 2, c: 3 }, ["b"])); // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"])); // {}
console.log(omit({}, ["a"])); // {}
console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }

/* ------------------------------------------------------------------------------------------- */
// 연습문제(중급)
// 1. 객체 값 필터링 - 주어진 객체에서 값이 특정 기준 이상인 키-값 쌍만 필터링하여 반환하는 함수를 작성하세요
function filterByThreshold(obj, value) {
  const result = {};
  for (const key in obj) {
    if (obj[key] >= value) {
      result[key] = obj[key];
    }
  }
  return result;
}

const obj111 = { a: 1, b: 5, c: 3 };
const threshold = 2;
console.log(filterByThreshold(obj111, threshold)); // { b: 5, c: 3 }

const obj112 = { x: 1, y: 2, z: 3 };
const threshold2 = 2;
console.log(filterByThreshold(obj112, threshold2)); // { y: 2, z: 3 }

const obj113 = { a: 10, b: 5, c: 1 };
const threshold3 = 6;
console.log(filterByThreshold(obj113, threshold3)); // { a: 10 }

const obj114 = { m: -1, n: 0, o: 1 };
const threshold4 = 0;
console.log(filterByThreshold(obj114, threshold4)); // { n: 0, o: 1 }

// 2. 객체의 값 변화 - 주어진 객체의 모든 값을 제곱하는 함수를 작성하세요
function squareValues(obj) {
  const result = {};
  for (const key in obj) {
    result[key] = obj[key] ** 2;
  }
  return result;
}
const obj221 = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj221)); // { a: 1, b: 4, c: 9 }

const obj222 = { x: 2, y: 3 };
console.log(squareValues(obj222)); // { x: 4, y: 9 }

const obj223 = { p: 0, q: -2 };
console.log(squareValues(obj223)); // { p: 0, q: 4 }

const obj224 = {};
console.log(squareValues(obj224)); // {}

// 3. 키 이름 변경
// 객체에서 특정 키의 이름을 다른 이름으로 변경하는 함수를 작성하세요.
// 원래 키가 없으면 그대로 반환하세요. (얕은 레벨만)
function renameKey(obj, key1, key2) {
  const result = {};
  for (const key in obj) {
    if (key === key1) {
      result[key2] = obj[key];
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
console.log(renameKey({ a: 1 }, "c", "d")); // { a: 1 }
console.log(renameKey({}, "a", "b")); // {}
console.log(renameKey({ a: 1 }, "a", "a")); // { a: 1 }

// 4. 키 정렬된 새 객체 반환
// 객체의 키를 알파벳 오름차순으로 정렬해 새 객체로 반환하는 함수를 작성하세요.
// sort 메소드 사용o
function sortKeys(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const result = {};
  for (const key of sortedKeys) {
    result[key] = obj[key];
  }
  return result;
}
// sort 메소드 사용x
function sortKeys(obj) {
  const keys = Object.keys(obj);
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    let minKey = null;
    let minIndex = -1;
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] !== null) {
        if (minKey === null || keys[i] < minKey) {
          minKey = keys[j];
          minIndex = j;
        }
      }
    }
    result[minKey] = obj[minKey]; // 결과 객체에 추가
    keys[minIndex] = null; // 사용한 key는 null
  }
  return result;
}

console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
console.log(sortKeys({})); // {}
console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }

// 5. 값 변환
// 주어진 객체의 값에 변환 함수를 적용해 새 객체로 반환하는 함수를 작성하세요.
function mapValues(obj, fn) {
  const result = {};
  for (const key in obj) {
    result[key] = fn(obj[key]);
  }
  return result;
}

function mapValues(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map((k, v) => [k, fn(v)]));
}

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double)); // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// 6. 키/값 뒤집기
// 객체의 키와 값을 뒤집어 새 객체로 반환하는 함수를 작성하세요.
// 값은 문자열/숫자라고 가정합니다. (중복 값이 있으면 마지막 키가 우선)
function invert(obj) {
  const result = {};
  for (const key in obj) {
    result[obj[key]] = key;
  }
  return result;
}

console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" })); // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({})); // {}
console.log(invert({ a: "1", b: 1 })); // { "1": "b" }

// 7. 중첩 경로 값 얻기
// 문자열 경로(예: "a.b.c")로 중첩 객체의 값을 안전하게 가져오는 함수를 작성하세요.
// 경로가 없으면 undefined를 반환합니다.
function getByPath(obj, str) {
  const keys = str.split(".");
  let result = obj;
  for (const key of keys) {
    if (result === null || !(key in result)) {
      // if(!result) => null, undefined, 0 다 거름
      return undefined;
    }
    result = result[key];
  }
  return result;
}

const data = { a: { b: { c: 42 } } };

console.log(getByPath(data, "a.b.c")); // 42
console.log(getByPath(data, "a.b.x")); // undefined
console.log(getByPath({}, "a.b")); // undefined
console.log(getByPath({ a: null }, "a.b")); // undefined

// 8. 중첩 경로 값 설정
// 문자열 경로(예: "a.b.c")로 중첩 객체의 값을 설정하는 함수를 작성하세요.
// 중간 경로가 없으면 객체를 생성하여 할당합니다. (원본 객체를 변경해도 좋음)
function setByPath(obj, str, value) {
  const keys = str.split(".");
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      if (!(key in current) || typeof current[key] !== "object") {
        // if(!current[i] || typeof current[key] !== "object")
        current[key] = {};
      }
      current = current[key];
    }
  }

  return obj;
}

const obj881 = {};
setByPath(obj881, "a.b.c", 100);
console.log(obj881); // { a: { b: { c: 100 } } }

const obj882 = { a: { b: 1 } };
setByPath(obj882, "a.c", 2);
console.log(obj882); // { a: { b: 1, c: 2 } }

const obj883 = {};
setByPath(obj883, "x", 5);
console.log(obj883); // { x: 5 }

const obj884 = { a: null };
setByPath(obj884, "a.b", 10);
console.log(obj884); // { a: { b: 10 } }

/* ------------------------------------------------------------------------------------------- */
// 연습문제(고급)
// 1. 객체의 중복 값 제거
// 주어진 객체에서 중복된 값을 제거하고, 그에 해당하는 키만 반환하는 함수를 작성하세요
function removeDuplicateValues(obj) {
  const count = {};
  for (const key in obj) {
    const value = obj[key];
    count[value] = (count[value] || 0) + 1;
  }
  const result = {};
  for (const key in obj) {
    if (count[obj[key]] === 1) {
      result[key] = obj[key];
    }
  }
  return result;
}

function removeDuplicateValues(obj) {
  const values = Object.values(obj); // 객체의 값을 배열로 저장
  const freq = values.reduce((m, v) => {
    m[v] = (m[v] || 0) + 1;
    return m;
  }, {});
  const result = {};
  for (const key in obj) {
    if (freq[obj[key]] === 1) {
      result[key] = obj[key];
    }
  }
  return result;
}

const obj1111 = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj1111)); // { b: 2, d: 3 }

const obj1112 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj1112)); // { z: 10 }

const obj1113 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj1113)); // {}

const obj1114 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj1114)); // { n: 4 }

// 2. 깊은 비교
// 두 값이 깊게 동등한지 비교하는 함수를 작성하세요.
// 원시값, 배열, 객체(순서 무관), 중첩 구조를 비교합니다. (함수/Date/Map/Set은 제외)
function deepEqual(obj1, obj2) {
  // 원시값
  if (obj1 === obj2) return true;

  // 배열
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  // 객체(순서 무관)
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
      if (!(key in obj2)) return false;
      if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
  }
  return false;
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false

// 3. 깊은 동결
// 객체를 재귀적으로 동결하는 함수를 작성하세요.
// 함수 실행 후, 모든 중첩 객체가 Object.isFrozen으로 true가 되어야 합니다.
function deepFreeze(obj) {
  Object.freeze(obj);
  for (const key in obj) {
    const value = obj[key];
    if (value !== null && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  }
  return obj;
}

const obj = { a: { b: 1 } };
deepFreeze(obj);

obj.a.b = 2; // 실패 (엄격 모드면 TypeError)
console.log(obj.a.b); // 1
console.log(Object.isFrozen(obj)); // true
console.log(Object.isFrozen(obj.a)); // true

// 4. 읽기 전용 프로퍼티 추가
// 대상 객체에 읽기 전용 데이터 프로퍼티를 추가하는 함수를 작성하세요.
// writable: false, configurable: false, enumerable: true로 정의하세요
function defineReadOnly(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: false,
    configurable: false,
    enumerable: true,
  });
}

const person = { name: "Alice" };
defineReadOnly(person, "id", 1001);

console.log(person); // { name: "Alice", id: 1001 }
person.id = 999; // 무시(엄격 모드면 에러)
console.log(delete person.id); // 실패
console.log(person.id); // 1001
