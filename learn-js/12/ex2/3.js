function renameKey(obj, oldKey, newKey) {
  const out = {};
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      if (key === oldKey) {
        out[newKey] = obj[key];
      } else {
        out[key] = obj[key];
      }
    }
  }
  return out;
}
console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
console.log(renameKey({ a: 1 }, "c", "d")); // { a: 1 }
console.log(renameKey({}, "a", "b")); // {}
console.log(renameKey({ a: 1 }, "a", "a")); // { a: 1 }
