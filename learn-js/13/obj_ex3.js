function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key in obj) {
    const value = obj[key];
    if (value !== null && typeof value === "object") {
      if (!Object.isFrozen(value)) {
        deepFreeze(value);
      }
    }
  }

  return obj;
}
const obj = { a: { b: 1 } };
deepFreeze(obj);

obj.a.b = 2; // 실패
console.log(obj.a.b); // 1
console.log(Object.isFrozen(obj)); // true
console.log(Object.isFrozen(obj.a)); // true
