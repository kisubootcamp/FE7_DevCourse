function setByPath(obj, path, value) {
  const keys = path.split(".");
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[i] || typeof current[key] !== "object") {
        current[key] = {};
      }
      current = current[key];
    }
  }
}

const obj1 = {};
setByPath(obj1, "a.b.c", 100);
console.log(obj1); // { a: { b: { c: 100 } } }

const obj2 = { a: { b: 1 } };
setByPath(obj2, "a.c", 2);
console.log(obj2); // { a: { b: 1, c: 2 } }

const obj3 = {};
setByPath(obj3, "x", 5);
console.log(obj3); // { x: 5 }

const obj4 = { a: null };
setByPath(obj4, "a.b", 10);
console.log(obj4); // { a: { b: 10 } }
