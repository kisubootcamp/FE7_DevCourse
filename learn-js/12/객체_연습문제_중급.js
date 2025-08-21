// Q1

function filterByThreshold(obj, threshold) {
  const result = Object.entries(obj).reduce((newObj, [key, value]) => {
    if (value >= threshold) newObj[key] = value;
    return newObj;
  }, {});

  return result;
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

// Q2

function squareValues(obj) {
  const result = Object.entries(obj).reduce((newObj, [key, value]) => {
    newObj[key] = value ** 2;
    return newObj;
  }, {});

  return result;
}

const obj = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

const obj2 = { x: 2, y: 3 };
console.log(squareValues(obj2)); // { x: 4, y: 9 }

const obj3 = { p: 0, q: -2 };
console.log(squareValues(obj3)); // { p: 0, q: 4 }

const obj4 = {};
console.log(squareValues(obj4)); // {}

// Q3
function renameKey(obj, key1, key2) {
  const result = Object.entries(obj).reduce((newObj, [key, value]) => {
    if (key === key1) {
      newObj[key2] = value;
    } else {
      newObj[key] = value;
    }
    return newObj;
  }, {});

  return result;
}
console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
console.log(renameKey({ a: 1 }, "c", "d")); // { a: 1 }
console.log(renameKey({}, "a", "b")); // {}
console.log(renameKey({ a: 1 }, "a", "a")); // { a: 1 }

// Q4
function sortKeys(obj) {
  const arr = Object.keys(obj);
  arr.sort();
  const newObj = {};
  for (key of arr) {
    newObj[key] = obj[key];
  }

  return newObj;
}

console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
console.log(sortKeys({})); // {}
console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }

// Q5
function mapValues(obj, trans) {
  const result = Object.entries(obj).reduce((newObj, [key, value]) => {
    newObj[key] = trans(value);
    return newObj;
  }, {});

  return result;
}

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double)); // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

//Q6
function invert(obj) {
  const result = Object.entries(obj).reduce((newObj, [key, value]) => {
    newObj[value] = key;
    return newObj;
  }, {});

  return result;
}
console.log(invert({ a: 1, b: 2 })); // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" })); // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({})); // {}
console.log(invert({ a: "1", b: 1 })); // { "1": "b" }

// Q7
function getByPath(obj, path) {
  const pathArr = path.split(".");
  let current = obj;
  for (key of pathArr) {
    if (!current) {
      return;
    }
    current = current[key];
  }
  return current;
}

const data = { a: { b: { c: 42 } } };
// const rr = data["a"];
// console.log(rr);

console.log(getByPath(data, "a.b.c")); // 42
console.log(getByPath(data, "a.b.x")); // undefined
console.log(getByPath({}, "a.b")); // undefined
console.log(getByPath({ a: null }, "a.b")); // undefined

//Q8
function setByPath(obj, path, num) {
  const pathArr = path.split(".");
  let current = obj;

  for (let i = 0; i < pathArr.length; i++) {
    // 값이 있으면->통과, 값이 없으면->{}빈 객체 생성
    const key = pathArr[i];

    // 마지막 객체
    if (i === pathArr.length - 1) {
      current[key] = num;
    }
    // 마지막 객체 아니면 빈 객체
    else {
      if (!current[i]) {
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
