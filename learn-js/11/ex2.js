const objectToArray = (obj) => Object.entries(obj);

const obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

const obj2 = { x: 5, y: 10 };
console.log(objectToArray(obj2)); // [['x', 5], ['y', 10]]

const obj3 = { p: 3 };
console.log(objectToArray(obj3)); // [['p', 3]]

const obj4 = {};
console.log(objectToArray(obj4)); // []
