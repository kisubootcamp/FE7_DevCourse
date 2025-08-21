function invert(obj) {
  const out = {};
  const entries = Object.entries(obj); // [[키, 값]]
  for (const [k, v] of entries) {
    out[v] = k;
  }
  return out;
}
console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" })); // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({})); // {}
console.log(invert({ a: "1", b: 1 })); // { "1": "b" }
