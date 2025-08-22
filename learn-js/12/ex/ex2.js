// 연습문제 (중급)

// 1
// 주어진 객체에서 값이 특정 기준 이상인 키-값 쌍만 필터링하여 반환하는 함수를 작성하세요

function filterByThreshold(obj, threshold) {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] >= threshold) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
  // const entries = Object.entries(obj);
  // fot (const [k, v] of entries) { ... }
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

//

// 2
// 주어진 객체의 모든 값을 제곱하는 함수를 작성하세요
function squareValues(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] * obj[key]; // 각 값을 제곱
    }
  }

  return obj; // 수정된 객체 반환
}

const obj20 = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj20)); // { a: 1, b: 4, c: 9 }

const obj21 = { x: 2, y: 3 };
console.log(squareValues(obj21)); // { x: 4, y: 9 }

const obj22 = { p: 0, q: -2 };
console.log(squareValues(obj22)); // { p: 0, q: 4 }

const obj23 = {};
console.log(squareValues(obj23)); // {}

//

// 3
// 객체에서 특정 키의 이름을 다른 이름으로 변경하는 함수를 작성하세요.
// 원래 키가 없으면 그대로 반환하세요. (얕은 레벨만)
// function renameKey(obj, oldKey, newKey) {
//   const newObj = { ...obj }; // 얕은 복사
//   if (oldKey in newObj) {
//     newObj[newKey] = newObj[oldKey]; // 새 키에 값 할당
//     delete newObj[oldKey]; // 원래 키 삭제
//   }
// }
function renameKey(obj, oldKey, newKey) {
  const newObj = {};
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // 객체의 고유 속성만 처리
    if (key !== oldKey) {
      newObj[key] = obj[key];
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj; // 수정된 객체 반환
}

console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
console.log(renameKey({ a: 1 }, "c", "d")); // { a: 1 }
console.log(renameKey({}, "a", "b")); // {}
console.log(renameKey({ a: 1 }, "a", "a")); // { a: 1 }

//

// 4
function sortKeys(obj) {
  const sortedKeys = Object.keys(obj).sort(); // 키를 정렬
  const newObj = {};
  for (const key of sortedKeys) {
    newObj[key] = obj[key]; // 정렬된 키 순서대로 새 객체에 할당
  }
  return newObj; // 수정된 객체 반환
}

console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
console.log(sortKeys({})); // {}
console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }

//

// 5
// 주어진 객체의 값에 변환 함수를 적용해 새 객체로 반환하는 함수를 작성하세요.
function mapValues(obj, transformFn) {
  const newObj = {};
  for (const key in obj) {
    if (!obj.hasOwnProperty) continue; // 객체의 고유 속성만 처리
    newObj[key] = transformFn(obj[key]); // 변환 함수 적용
  }

  return newObj; // 수정된 객체 반환
}

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double)); // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }
console.log(mapValues({ a: 1 }, (n) => n * 3)); // { a: 3 }

//

// 6
// 객체의 **키와 값**을 뒤집어 새 객체로 반환하는 함수를 작성하세요.
// 값은 문자열/숫자라고 가정합니다. (중복 값이 있으면 **마지막 키**가 우선)
function invert(obj) {
  const newObj = {};
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // 객체의 고유 속성만 처리
    newObj[obj[key]] = key; // 값이 키가 되고, 키가 값이 됨
  }
  return newObj; // 수정된 객체 반환
}

console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" })); // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({})); // {}
console.log(invert({ a: "1", b: 1 })); // { "1": "b" }

//

// 7
// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 안전하게 가져오는 함수를 작성하세요.
// 경로가 없으면 `undefined`를 반환합니다.
function getByPath(obj, path) {
  const keys = path.split("."); // 경로를 점(.)으로 분리하여 배열로 변환
  let current = obj; // 현재 객체를 시작점으로 설정

  // 풀이 1
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key]; // 현재 객체에서 키에 해당하는 값을 가져옴
    } else {
      return undefined; // 키가 없으면 undefined 반환
    }
  }

  // 풀이 2
  //   for (const key of keys) {
  //     if (current == null) {
  //       return undefined; // 현재 객체가 null이면 undefined 반환
  //     }
  //     current = current[key]; // 다음 단계로 이동
  //   }

  // 풀이 3
  //   for (let i = 0; i < keys.length; i++) {
  //     if (!current) {
  //       return;
  //     }
  //     current = current[keys[i]]; // 현재 객체에서 키에 해당하는 값을 가져옴
  //   }

  return current; // 최종적으로 찾은 값을 반환
}

const data = { a: { b: { c: 42 } } };

console.log(getByPath(data, "a.b.c")); // 42
console.log(getByPath(data, "a.b.x")); // undefined
console.log(getByPath({}, "a.b")); // undefined
console.log(getByPath({ a: null }, "a.b")); // undefined

//

// 8
// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 설정하는 함수를 작성하세요.
// 중간 경로가 없으면 **객체를 생성**하여 할당합니다. (원본 객체를 **변경**해도 좋음)
function setByPath(obj, path, value) {
  const keys = path.split(".");
  let newObj = obj; // 원본 객체를 수정할 수 있도록 참조

  for (const key of keys) {
    if (!newObj[key] || typeof newObj[key] !== "object") {
      newObj[key] = {}; // 중간 경로가 없으면 객체 생성
    }
    newObj = newObj[key]; // 다음 단계로 이동
  }
  newObj[keys[keys.length - 1]] = value; // 마지막 키에 값을 설정

  return obj; // 수정된 원본 객체 반환
}

const obj80 = {};
setByPath(obj80, "a.b.c", 100);
console.log(obj80); // { a: { b: { c: 100 } } }

const obj81 = { a: { b: 1 } };
setByPath(obj81, "a.c", 2);
console.log(obj81); // { a: { b: 1, c: 2 } }

const obj82 = {};
setByPath(obj82, "x", 5);
console.log(obj82); // { x: 5 }

const obj83 = { a: null };
setByPath(obj83, "a.b", 10);
console.log(obj83); // { a: { b: 10 } }
