// 연습 문제 (초급)

// 1.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergeObjects1 = Object.assign({},obj1, obj2);
console.log(mergeObjects1); // { a: 1, b: 3, c: 4 }

const obj3 = { x: 10 };
const obj4 = { y: 20 };
const mergeObjects2 = Object.assign({},obj3, obj4);
console.log(mergeObjects2); // { x: 10, y: 20 }

const obj5 = { a: 1, b: 2 };
const obj6 = { a: 3, b: 4 };
const mergeObjects3 = Object.assign({},obj5, obj6);
console.log(mergeObjects3); // { a: 3, b: 4 }

const obj7 = {};
const obj8 = { z: 5 };
const mergeObjects4 = Object.assign({},obj7, obj8);
console.log(mergeObjects4); // { z: 5 }

// 2.

// Object.entries
const obj9 = { a: 1, b: 2, c: 3 };
const objectToArray = Object.entries(obj9);
console.log(objectToArray); // [['a', 1], ['b', 2], ['c', 3]]

const obj10 = { x: 5, y: 10 };
const objectToArray2 = Object.entries(obj10);
console.log(objectToArray2); // [['x', 5], ['y', 10]]

const obj11 = { p: 3 };
const objectToArray3 = Object.entries(obj11);
console.log(objectToArray3); // [['p', 3]]

const obj12 = {};
const objectToArray4 = Object.entries(obj12);
console.log(objectToArray4); // []

// 3. ?

// delete user.age;
const obj13 = { a: 1, b: 2, c: 3 };
//const keyToDelete = 'b';
//deleteKey(obj13,keyToDelete) = delete obj13.keyToDelete;
//console.log(deleteKey(obj13, keyToDelete)); // { a: 1, c: 3 }
delete obj13.b;
console.log(obj13);

const obj14 = { x: 10, y: 20, z: 30 };
//const keyToDelete2 = 'y';
//console.log(deleteKey(obj14, keyToDelete2)); // { x: 10, z: 30 }
delete obj14.y;
console.log(obj14);

const obj15 = { a: 5 };
//const keyToDelete3 = 'a';
//console.log(deleteKey(obj15, keyToDelete3)); // {}
delete obj15.a;
console.log(obj15);

const obj16 = { m: 1, n: 2, o: 3 };
//const keyToDelete4 = 'p';
//console.log(deleteKey(obj16, keyToDelete4)); // { m: 1, n: 2, o: 3 }
delete obj16.p;
console.log(obj16);

////////////////////////////////////////////////////

// 4.

const obj17 = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj17, 2)); // 'b'
console.log(findKeyByValue(obj17, 4)); // null
console.log(findKeyByValue(obj17, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null

// 5.
const obj18 = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj)); // 6

const obj19 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj2)); // 24

const obj20 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj3)); // 0

const obj21 = {};
console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)