function deleteKey(obj, key) {
  const copy = structuredClone(obj);
  delete copy[key];
  return copy;
}
const obj = { a: 1, b: 2, c: 3 };
const keyToDelete = "b";
console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }
console.log(obj);

const obj2 = { x: 10, y: 20, z: 30 };
const keyToDelete2 = "y";
console.log(deleteKey(obj2, keyToDelete2)); // { x: 10, z: 30 }

const obj3 = { a: 5 };
const keyToDelete3 = "a";
console.log(deleteKey(obj3, keyToDelete3)); // {}

const obj4 = { m: 1, n: 2, o: 3 };
const keyToDelete4 = "p";
console.log(deleteKey(obj4, keyToDelete4)); // { m: 1, n: 2, o: 3 }
