function omit(obj, keys) {
  const result = {};

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      let should = false; // 현재 key를 제외해야 하는지 표시하는 플래그
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
          should = true;
          break;
        }
      }

      if (!should) {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

console.log(omit({ a: 1, b: 2, c: 3 }, ["b"])); // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"])); // {}
console.log(omit({}, ["a"])); // {}
console.log(omit({ a: 1, b: 2 }, [])); // { a: 1, b: 2 }
