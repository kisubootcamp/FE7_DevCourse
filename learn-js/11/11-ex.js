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


// 5
function multiplyValues(obj) {
    let result = 1;
    for (const k in obj) {
        result *= obj[k];    
    }
    return result;
}

const obj_5 = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj)); // 6

const obj2_5 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj2)); // 24

const obj3_5 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj3)); // 0

const obj4_5 = {};
console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)


// 6

const hasOwnKey = (obj, key) => objectToArray.hasOwn(obj, key);

const obj_6 = Object.create({ inherited: 1 });
obj.own = 2;

console.log(hasOwnKey(obj_6, "own"));        // true
console.log(hasOwnKey(obj_6, "inherited"));  // false
console.log(hasOwnKey({}, "a"));           // false
console.log(hasOwnKey({ a: undefined }, "a")); // true


// 7
function pick(obj, keys) {
    const out = {};
    for(const key of keys) {
        if (Object.hasOwn(obj, key)) {
            result[key] = obj[key];
        }
    }
    return out;
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"]));          // {}
console.log(pick({}, ["a"]));                        // {}
console.log(pick({ a: 1 }, []));                     // {}


// 8
function omit(obj, keys) {
    const result = {};
    for(const key in obj) {
        if (Object.hasOwn(obj, key)) {
            let should = false; // 현재 key를 제외해야 하는지 표시하는 플래그
            for(let i = 0; i < keys.length; i++) {
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
console.log(omit({ a: 1, b: 2, c: 3 }, ["b"]));    // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"]));   // {}
console.log(omit({}, ["a"]));                      // {}
console.log(omit({ a: 1, b: 2 }, []));             // { a: 1, b: 2 }