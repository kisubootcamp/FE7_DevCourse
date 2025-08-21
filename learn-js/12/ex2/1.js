// 1
function filterByThreshold(obj, threshold) {
  const out = {};
  const entries = Object.entries(obj);
  for (const [k, v] of entries) {
    if (v >= threshold) out[k] = v;
  }
  return out;
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
