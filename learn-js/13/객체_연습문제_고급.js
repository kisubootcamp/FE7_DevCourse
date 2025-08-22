// 1
function removeDuplicateValues(obj) {
  const values = Object.values(obj);
  const freq = values.reduce((m, v) => {
    m[v] = (m[v] || 0) + 1;
    return m;
  }, {});

  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => {
      return freq[v] === 1;
    })
  );

  //   const entries = Object.entries(obj);
  //   const out = entries.filter(([k, v]) => {
  //     return freq[v] === 1;
  //   });
  //   const result = Object.fromEntries(out);
  //   return result;
}

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }

// 2
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  //null도 object로 나타나는 버그.. typeof로 조건 확인 시 null 체크 습관화하기
  if (obj1 === null || obj2 === null) return false;

  // 둘 다 객체가 아니면 flase
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const aKeys = Object.keys(obj1);
  const bKeys = Object.keys(obj2);

  // 키의 갯수가 다르면 다른 객체
  if (aKeys.length !== bKeys.length) return false;
  for (const key of aKeys) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}
console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false

// 3
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

const objA = { a: { b: 1 } };
deepFreeze(objA);

objA.a.b = 2; // 실패
console.log(objA.a.b); // 1
console.log(Object.isFrozen(objA)); // true
console.log(Object.isFrozen(objA.a)); // true

// 4
function defineReadOnly(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: false,
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
