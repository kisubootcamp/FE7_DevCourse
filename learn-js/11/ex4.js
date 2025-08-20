function findKeyByValue(obj, value) {
  for (const k in obj) {
    if (Object.hasOwn(obj, k) && obj[k] === value) return k;
  }
  return null;
}
Object.prototype.extra = 10;
const obj = { a: 1, b: 2, c: 3 };

console.log(findKeyByValue(obj, 10)); // null

console.log(findKeyByValue(obj, 2)); // 'b'
console.log(findKeyByValue(obj, 4)); // null
console.log(findKeyByValue(obj, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null
