// 연습문제(중급)
// 1. 객체 값 필터링
// 주어진 객체에서 값이 특정 기준 이상인 키-값 쌍만 필터링하여 반환하는 함수를 작성하세요

function filterByThreshold(obj, threshold) {
    let result = {};
    for (const key in obj) {
        if (obj[key] >= threshold) {
            result[key] = obj[key];
        }
    }
    return result;
}

const obj = { a: 1, b: 5, c: 3 };
const threshold = 2;
console.log(filterByThreshold(obj, threshold)); // { b: 5, c: 3 }

const obj2 = { x: 1, y: 2, z: 3 };
const threshold2 = 2;
console.log(filterByThreshold(obj2, threshold2)); // { y: 2, z: 3 }

const obj3 = { a: 10, b: 5, c: 1 };
const threshold3 = 6;
console.log(filterByThreshold(obj3, threshold3)); // { a: 10 }

const obj4 = { m: -1, n: 0, o: 1 };
const threshold4 = 0;
console.log(filterByThreshold(obj4, threshold4)); // { n: 0, o: 1 }

// 2. 객체의 값 변화
// 주어진 객체의 모든 값을 제곱하는 함수를 작성하세요

function squareValues(obj) {
    let result = {};
    for(const key in obj) {
        result[key] = obj[key] ** 2;
    }
    return result;
}

const obj_2 = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj_2)); // { a: 1, b: 4, c: 9 }

const obj2_2 = { x: 2, y: 3 };
console.log(squareValues(obj2_2)); // { x: 4, y: 9 }

const obj3_2 = { p: 0, q: -2 };
console.log(squareValues(obj3_2)); // { p: 0, q: 4 }

const obj4_2 = {};
console.log(squareValues(obj4_2)); // {}

// 3. 키 이름 변경
// 객체에서 특정 키의 이름을 다른 이름으로 변경하는 함수를 작성하세요.
// 원래 키가 없으면 그대로 반환하세요. (얕은 레벨만)

function renameKey(obj, key1, key2) {
    let result = {};
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
console.log(renameKey({ a: 1 }, "c", "d"));       // { a: 1 }
console.log(renameKey({}, "a", "b"));             // {}
console.log(renameKey({ a: 1 }, "a", "a"));       // { a: 1 }

// 4. 키 정렬된 새 객체 반환
function sortKeys(obj) {
    const sortedKeys = Object.keys(obj).sort();
    const result = {};
    for (const key of sortedKeys) {
        result[key] = obj[key];
    }
    return result;
}

// 객체의 키를 알파벳 오름차순으로 정렬해 새 객체로 반환하는 함수를 작성하세요.
console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 }));       // { y: 1, z: 0 }
console.log(sortKeys({}));                   // {}
console.log(sortKeys({ bb: 1, b: 2 }));      // { b: 2, bb: 1 }

// 5. 값 변환 (mapValues)
// 주어진 객체의 값에 변환 함수를 적용해 새 객체로 반환하는 함수를 작성하세요.

function mapValues(obj, func) {
    let result = {};
    for (const key in obj) {
        result[key] = func(obj[key]);
    }
    return result;
}

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double));             // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// 6. 키/값 뒤집기 (invert)
// 객체의 **키와 값**을 뒤집어 새 객체로 반환하는 함수를 작성하세요.
// 값은 문자열/숫자라고 가정합니다. (중복 값이 있으면 **마지막 키**가 우선)

function invert(obj) {
    let result = {};
    for (const key in obj) {
        result[String(obj[key])] = key;
    }
    return result;
}

console.log(invert({ a: 1, b: 2 }));        // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" }));    // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({}));                    // {}
console.log(invert({ a: "1", b: 1 }));      // { "1": "b" }

// 7. 중첩 경로 값 얻기 (getByPath)
// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 안전하게 가져오는 함수를 작성하세요.
// 경로가 없으면 `undefined`를 반환합니다.

function getByPath(obj, path) {
    if (!path) return obj;
    const keys = path.split(".");
    let current = obj;

    for (const key of keys) {
        if (current === null || typeof current !== "object") {
            return undefined;
        }
        current = current[key];
    }
    return current;
}

const data = { a: { b: { c: 42 } } };

console.log(getByPath(data, "a.b.c"));     // 42
console.log(getByPath(data, "a.b.x"));     // undefined
console.log(getByPath({}, "a.b"));         // undefined
console.log(getByPath({ a: null }, "a.b"));// undefined

// 8. 중첩 경로 값 설정 (setByPath)
// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 설정하는 함수를 작성하세요.
// 중간 경로가 없으면 **객체를 생성**하여 할당합니다. (원본 객체를 **변경**해도 좋음)

function setByPath(obj, path, value) {
    if (!path) return;
  
    const keys = path.split(".");
    let current = obj;
  
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
  
      if (i === keys.length - 1) {

        current[key] = value;
      } else {
        if (current[key] == null || typeof current[key] !== "object") {
          current[key] = {};
        }
        current = current[key];
      }
    }
}
const obj1_8 = {};
setByPath(obj1_8, "a.b.c", 100);
console.log(obj1_8); // { a: { b: { c: 100 } } }

const obj2_8 = { a: { b: 1 } };
setByPath(obj2_8, "a.c", 2);
console.log(obj2_8); // { a: { b: 1, c: 2 } }

const obj3_8 = {};
setByPath(obj3_8, "x", 5);
console.log(obj3_8); // { x: 5 }

const obj4_8 = { a: null };
setByPath(obj4_8, "a.b", 10);
console.log(obj4_8); // { a: { b: 10 } }