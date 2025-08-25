function deepEqual(a, b) {
  // // 같은 값
  if (a === b) return true;

  // null
  if (a === null || b === null) return false;

  // 둘다 객체가 아니면 false
  if (typeof a !== "object" || typeof b !== "object") return false;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  // 키의 갯수가 다르면 다른 객체
  if (aKeys.length !== bKeys.length) return false;
  for (const key of aKeys) {
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// console.log(deepEqual({ a: 1 }, { a: 1 })); // true
// console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
// console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false
