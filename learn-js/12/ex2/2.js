function squareValues(obj) {
  const out = {};
  const entries = Object.entries(obj);
  for (const [k, v] of entries) {
    out[k] = v * v;
  }
  return out;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

const obj2 = { x: 2, y: 3 };
console.log(squareValues(obj2)); // { x: 4, y: 9 }

const obj3 = { p: 0, q: -2 };
console.log(squareValues(obj3)); // { p: 0, q: 4 }

const obj4 = {};
console.log(squareValues(obj4)); // {}
