function pick(obj, keys) {
  const out = {};
  for (const key of keys) {
    if (Object.hasOwn(obj, key)) {
      out[key] = obj[key];
    }
  }
  return out;
}
console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"])); // {}
console.log(pick({}, ["a"])); // {}
console.log(pick({ a: 1 }, [])); // {}
