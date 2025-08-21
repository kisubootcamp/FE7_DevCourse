// 객체 파고들기 연습문제(고급)

//1
function removeDuplicateValues(obj) {
  const entries = Object.entries(obj);
  let newObj = {};
  for (const [, value] of entries) {
    newObj[value] = (newObj[value] || 0) + 1;
  }
  const filteredEntries = entries.filter(([key, value]) => {
    return newObj[value] === 1;
  });
  return Object.fromEntries(filteredEntries);
}

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }

//2
function deepEqual(obj1, obj2) {
  return Object.is(obj1, obj2);
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false
