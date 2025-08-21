// Array
/* 
function mapValues(obj, fn) {
  const out = {};
  const keys = Object.keys(obj); // [키]
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    out[key] = fn(obj[key]);
  }
  return out;
}
 */

function mapValues(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]));
}

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double)); // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }
