// 1
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }

const obj3 = { x: 10 };
const obj4 = { y: 20 };
console.log(mergeObjects(obj3, obj4)); // { x: 10, y: 20 }

const obj5 = { a: 1, b: 2 };
const obj6 = { a: 3, b: 4 };
console.log(mergeObjects(obj5, obj6)); // { a: 3, b: 4 }

const obj7 = {};
const obj8 = { z: 5 };
console.log(mergeObjects(obj7, obj8)); // { z: 5 }

// 2
const objectToArray = (obj) => Object.entries(obj);

const obj = { a: 1, b: 2, c: 3 };
console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]

const obj2_2 = { x: 5, y: 10 };
console.log(objectToArray(obj2_2)); // [['x', 5], ['y', 10]]

const obj3_2 = { p: 3 };
console.log(objectToArray(obj3_2)); // [['p', 3]]

const obj4_2 = {};
console.log(objectToArray(obj4_2)); // []

// 3
function deleteKey(obj, key) {
    const copy = JSON.parse(JSON.stringify(obj));
    // const copy = structuredClone(obj);
    delete copy[key];
    return copy;
}

const obj_3 = { a: 1, b: 2, c: 3 };
const keyToDelete = 'b';
console.log(deleteKey(obj_3, keyToDelete)); // { a: 1, c: 3 }

const obj2_3 = { x: 10, y: 20, z: 30 };
const keyToDelete2 = 'y';
console.log(deleteKey(obj2_3, keyToDelete2)); // { x: 10, z: 30 }

const obj3_3 = { a: 5 };
const keyToDelete3 = 'a';
console.log(deleteKey(obj3_3, keyToDelete3)); // {}

const obj4_3 = { m: 1, n: 2, o: 3 };
const keyToDelete4 = 'p';
console.log(deleteKey(obj4_3, keyToDelete4)); // { m: 1, n: 2, o: 3 }

// 4
function findKeyByValue(obj, value) {
    for(const k in obj) {
        if (obj[k] === value) return k;
    }
    return null;
}
// Object.prototype.extra = 10;
// const obj = {a: 1, b: 2, c: 3};

const obj_4 = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj_4, 2)); // 'b'
console.log(findKeyByValue(obj_4, 4)); // null
console.log(findKeyByValue(obj_4, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null