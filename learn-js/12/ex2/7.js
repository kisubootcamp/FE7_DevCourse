function getByPath(obj, path) {
  const keys = path.split("."); // ['a', 'b', 'c']
  let current = obj; // {}

  // a -> b -> c
  for (let i = 0; i < keys.length; i++) {
    if (!current) {
      // null, undefeind, 0,
      return; // return undefined
    }

    // current = {}['a'] (undefined)
    current = current[keys[i]];
  }
  return current;
}
const data = { a: { b: { c: 42 } } };

console.log(getByPath(data, "a.b.c")); // 42
console.log(getByPath(data, "a.b.x")); // undefined
console.log(getByPath({}, "a.b")); // undefined
console.log(getByPath({ a: null }, "a.b")); // undefined
