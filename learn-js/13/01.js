// ## 1. 객체의 중복 값 제거

// ### 문제

// 주어진 객체에서 중복된 값을 제거하고, 그에 해당하는 키만 반환하는 함수를 작성하세요

// 입출력

function removeDuplicateValues(obj) {
  const freq = Object.values(obj).reduce((m, v) => {
    m[v] = (m[v] || 0) + 1;
    return m;
  }, {});

  //어쩔 수 없이 사용하지 않는 filter의 key 값. -> _(언더바)로 대체 하면 OK
  return (result = Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => {
      return freq[v] === 1;
    })
  ));
}

//  const values = Object.values(obj);
// console.log(value);
// const freq = values.reduce((m, v) => {
//   m[v] = (m[v]||0) + 1;
//   return m;
// }, {});

// const entries = Object.entries(obj);
// entries.filter(([k, v]) => {
//   return freq[v] === 1;
// });
// const result = Object.fromEntries(out);
// return result;

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }

// ## 2. 깊은 비교 (deepEqual)

// ### 문제

// 두 값이 **깊게 동등**한지 비교하는 함수를 작성하세요.

// 원시값, 배열, 객체(순서 무관), 중첩 구조를 비교합니다. (함수/Date/Map/Set은 제외)

function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || b === null) return false;

  if (typeof a !== "object" || typeof b !== "object") return false;

  const aKey = Object.keys(a);
  const bKey = Object.keys(b);

  if (aKey.length !== bKey.length) return false;
  for (const key of aKey) {
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false

// ## 3. 깊은 동결 (deepFreeze)

// ### 문제

// 객체를 **재귀적으로 동결**하는 함수를 작성하세요.

// 함수 실행 후, 모든 중첩 객체가 `Object.isFrozen`으로 `true`가 되어야 합니다.

function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key in obj) {
    const value = obj[key];
    if (value !== null && typeof value === "object") {
      if (!Object.isFrozen(value)) {
        deepFreeze(value);
      }
    }
  }
  return obj;
}

const obj5 = { a: { b: 1 } };
deepFreeze(obj5);

obj5.a.b = 2; // 실패
console.log(obj5.a.b); // 1
console.log(Object.isFrozen(obj5)); // true
console.log(Object.isFrozen(obj5.a)); // true

// ## 4. 읽기 전용 프로퍼티 추가 (defineReadOnly)

// ### 문제

// 대상 객체에 **읽기 전용 데이터 프로퍼티**를 추가하는 함수를 작성하세요.

// `writable: false`, `configurable: false`, `enumerable: true`로 정의하세요.

function defineReadOnly(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    Writable: false,
    configurable: false,
    enumerable: true,
  });
  return obj;
}

const person = { name: "Alice" };
defineReadOnly(person, "id", 1001);

console.log(person); // { name: "Alice", id: 1001 }
person.id = 999; // 무시(엄격 모드면 에러)
delete person.id; // 실패
console.log(person.id); // 1001
