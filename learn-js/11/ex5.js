function multiplyValues(obj) {
  let result = 1;
  for (const k in obj) {
    if (Object.hasOwn(obj, k)) {
      result *= obj[k];
    }
  }
  return result;
}

Object.prototype.extra = 10;
const obj = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj)); // 6

const obj2 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj2)); // 24

const obj3 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj3)); // 0

const obj4 = {};
console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)
