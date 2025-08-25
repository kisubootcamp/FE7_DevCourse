/*
두 개의 객체를 병합하여 반환하는 함수를 작성하세요. 

중복된 키가 있을 경우, 두 번째 객체의 값이 우선합니다.

*/
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

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

/*
주어진 객체의 키-값 쌍을 배열로 반환하는 함수를 작성하시오.

*/
function objectToArray(obj) {
  return Object.entries(obj);
}

// const obj = { a: 1, b: 2, c: 3 };
// console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// const obj2 = { x: 5, y: 10 };
// console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

// const obj3 = { p: 3 };
// console.log(objectToArray(obj3)); // [['p', 3]]

// const obj4 = {};
// console.log(objectToArray(obj4)); // []

// /*
// 주어진 객체에서 특정 키를 삭제하는 함수를 작성하세요
// */
function deleteKey(obj, key) {
  const { [key]: _, ...newObj } = obj;
  return newObj;
}
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

// /*
// 주어진 객체에서 특정 값에 해당하는 키를 반환하는 함수를 작성하세요. 값이 여러 개일 경우, 첫 번째 키만 반환한다. 값이 없으면 null을 반환하세요
// */
function findKeyByValue(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return null;
}
// const obj = { a: 1, b: 2, c: 3 };
// console.log(findKeyByValue(obj, 2)); // 'b'
// console.log(findKeyByValue(obj, 4)); // null
// console.log(findKeyByValue(obj, 1)); // 'a'
// console.log(findKeyByValue({}, 1)); // null

// /*
// 주어진 객체의 모든 값들을 곱하여 반환하는 함수를 작성하세요.
// */

function multiplyValues(obj) {
  return Object.values(obj).reduce((product, value) => product * value, 1);
}

// const obj = { a: 1, b: 2, c: 3 };
// console.log(multiplyValues(obj)); // 6

// const obj2 = { x: 2, y: 3, z: 4 };
// console.log(multiplyValues(obj2)); // 24

// const obj3 = { a: 1, b: 0, c: 3 };
// console.log(multiplyValues(obj3)); // 0

// const obj4 = {};
// console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)

// /*
// 주어진 객체에 특정 키가 직접 소유 프로퍼티로 존재하는지 확인하는 함수를 작성하세요. (프로토타입 체인은 검사하지 않음)
// */
function hasOwnKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// const obj = Object.create({ inherited: 1 });
// obj.own = 2;

// console.log(hasOwnKey(obj, "own"));        // true
// console.log(hasOwnKey(obj, "inherited"));  // false
// console.log(hasOwnKey({}, "a"));           // false
// console.log(hasOwnKey({ a: undefined }, "a")); // true

// /*
// 주어진 객체에서 지정된 키들만 골라 새 객체로 반환하는 함수를 작성하세요.
// */
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    if (key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
// console.log(pick({ x: 10, y: 20 }, ["z"]));          // {}
// console.log(pick({}, ["a"]));                        // {}
// console.log(pick({ a: 1 }, []));                     // {}

// /*
// 주어진 객체에서 지정된 키들을 제외하고 새 객체로 반환하는 함수를 작성하세요.
// */
function omit(obj, keys) {
  const newObj = {};
  for (const key in obj) {
    if (!keys.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// console.log(omit({ a: 1, b: 2, c: 3 }, ["b"]));    // { a: 1, c: 3 }
// console.log(omit({ x: 10, y: 20 }, ["x", "y"]));   // {}
// console.log(omit({}, ["a"]));                      // {}
// console.log(omit({ a: 1, b: 2 }, []));             // { a: 1, b: 2 }

// /*
// 주어진 객체에서 값이 특정 기준 이상인 키-값 쌍만 필터링하여 반환하는 함수를 작성하세요
// */
function filterByThreshold(obj, threshold) {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] >= threshold) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

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

// /*
// 주어진 객체의 모든 값을 제곱하는 함수를 작성하세요
// */
function squareValues(obj) {
  const newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key] ** 2;
    }
  }
  return newObj;
}

// const obj = { a: 1, b: 2, c: 3 };
// console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

// const obj2 = { x: 2, y: 3 };
// console.log(squareValues(obj2)); // { x: 4, y: 9 }

// const obj3 = { p: 0, q: -2 };
// console.log(squareValues(obj3)); // { p: 0, q: 4 }

// const obj4 = {};
// console.log(squareValues(obj4)); // {}

// /*
// 객체에서 특정 키의 이름을 다른 이름으로 변경하는 함수를 작성하세요.

// 원래 키가 없으면 그대로 반환하세요. (얕은 레벨만)
// */
function renameKey(obj, oldKey, newKey) {
  if (!(oldKey in obj)) {
    return obj;
  }
  const { [oldKey]: value, ...newObj } = obj;
  newObj[newKey] = value;
  return newObj;
}
// console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
// console.log(renameKey({ a: 1 }, "c", "d")); // { a: 1 }
// console.log(renameKey({}, "a", "b")); // {}
// console.log(renameKey({ a: 1 }, "a", "a")); // { a: 1 }

// /*
// 객체의 키를 알파벳 오름차순으로 정렬해 새 객체로 반환하는 함수를 작성하세요.
// */
function sortKeys(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const newObj = {};
  for (const key of sortedKeys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
// console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
// console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
// console.log(sortKeys({})); // {}
// console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }

// /*
// 주어진 객체의 값에 변환 함수를 적용해 새 객체로 반환하는 함수를 작성하세요.
// */
function mapValues(obj, transformFn) {
  const newObj = {};
  for (const key in obj) {
    newObj[key] = transformFn(obj[key]);
  }
  return newObj;
}

const double = (n) => n * 2;

// console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
// console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
// console.log(mapValues({}, double)); // {}
// console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// /*
// 객체의 **키와 값**을 뒤집어 새 객체로 반환하는 함수를 작성하세요.

// 값은 문자열/숫자라고 가정합니다. (중복 값이 있으면 **마지막 키**가 우선)
// */
function invert(obj) {
  const invertedObj = {};
  for (const key in obj) {
    invertedObj[obj[key]] = key;
  }
  return invertedObj;
}
// console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
// console.log(invert({ x: "y", y: "y" })); // { "y": "y" }  (마지막 키 y가 우선)
// console.log(invert({})); // {}
// console.log(invert({ a: "1", b: 1 })); // { "1": "b" }

// /*
// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 안전하게 가져오는 함수를 작성하세요.

// 경로가 없으면 `undefined`를 반환합니다.
// */
function getByPath(obj, path) {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return current;
}

// const data = { a: { b: { c: 42 } } };

// console.log(getByPath(data, "a.b.c")); // 42
// console.log(getByPath(data, "a.b.x")); // undefined
// console.log(getByPath({}, "a.b")); // undefined
// console.log(getByPath({ a: null }, "a.b")); // undefined

// /*
// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 설정하는 함수를 작성하세요.

// 중간 경로가 없으면 **객체를 생성**하여 할당합니다. (원본 객체를 **변경**해도 좋음)
// */
function setByPath(obj, path, value) {
  const keys = path.split(".");
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      if (
        !(key in current) ||
        typeof current[key] !== "object" ||
        current[key] === null
      ) {
        current[key] = {};
      }
      current = current[key];
    }
  }
  return obj;
}

// const obj1 = {};
// setByPath(obj1, "a.b.c", 100);
// console.log(obj1); // { a: { b: { c: 100 } } }

// const obj2 = { a: { b: 1 } };
// setByPath(obj2, "a.c", 2);
// console.log(obj2); // { a: { b: 1, c: 2 } }

// const obj3 = {};
// setByPath(obj3, "x", 5);
// console.log(obj3); // { x: 5 }

// const obj4 = { a: null };
// setByPath(obj4, "a.b", 10);
// console.log(obj4); // { a: { b: 10 } }

// /*
// 주어진 객체에서 중복된 값을 제거하고, 그에 해당하는 키만 반환하는 함수를 작성하세요
// */
function removeDuplicateValues(obj) {
  const valueCount = {};
  for (const key in obj) {
    const value = obj[key];
    valueCount[value] = (valueCount[value] || 0) + 1;
  }
  const newObj = {};
  for (const key in obj) {
    if (valueCount[obj[key]] === 1) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// const obj = { a: 1, b: 2, c: 1, d: 3 };
// console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

// const obj2 = { x: 5, y: 5, z: 10 };
// console.log(removeDuplicateValues(obj2)); // { z: 10 }

// const obj3 = { p: 1, q: 1, r: 1 };
// console.log(removeDuplicateValues(obj3)); // {}

// const obj4 = { m: 3, n: 4, o: 3 };
// console.log(removeDuplicateValues(obj4)); // { n: 4 }

// /*
// 두 값이 **깊게 동등**한지 비교하는 함수를 작성하세요.

// 원시값, 배열, 객체(순서 무관), 중첩 구조를 비교합니다. (함수/Date/Map/Set은 제외)

// */
function deepEqual(value1, value2) {
  if (value1 === value2) return true;
  if (
    typeof value1 !== "object" ||
    value1 === null ||
    typeof value2 !== "object" ||
    value2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}

// console.log(deepEqual({ a: 1 }, { a: 1 }));                 // true
// console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));     // true
// console.log(deepEqual({ a: { b: [1,2] } }, { a: { b: [1,2] } })); // true
// console.log(deepEqual({ a: 1 }, { a: 2 }));                 // false

// /*
// 객체를 **재귀적으로 동결**하는 함수를 작성하세요.

// 함수 실행 후, 모든 중첩 객체가 `Object.isFrozen`으로 `true`가 되어야 합니다.
// */
function deepFreeze(obj) {
  Object.freeze(obj);
  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      typeof obj[key] === "object" &&
      obj[key] !== null
    ) {
      deepFreeze(obj[key]);
    }
  }

  return obj;
}

// const obj = { a: { b: 1 } };
// deepFreeze(obj);

// obj.a.b = 2; // 실패
// console.log(obj.a.b);                     // 1
// console.log(Object.isFrozen(obj));        // true
// console.log(Object.isFrozen(obj.a));      // true

// /*
// 대상 객체에 읽기 전용 데이터 프로퍼티를 추가하는 함수를 작성하세요.

// */
function defineReadOnly(obj, key, value) {
  Object.defineProperty(obj, key, {
    value: value,
    writable: false,
    configurable: false,
    enumerable: true,
  });
  return obj;
}
// const person = { name: "Alice" };
// defineReadOnly(person, "id", 1001);

// console.log(person);           // { name: "Alice", id: 1001 }
// person.id = 999;               // 무시(엄격 모드면 에러)
// delete person.id;              // 실패
// console.log(person.id);        // 1001
