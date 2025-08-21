// 1
function filterByThreshold(obj, threshold) {
    let out = {};
    const entries = Object.entreis(obj);
    for (const [k, v] of entries) {
        if (v >= threshold) {
            out[k] = v;
        }
    }
    return out;
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


// 2
function squareValues(obj) {
    let out = {};
    const entries = Object.entries(obj);
    for (const [k, v] of entries) {
        out[k] = v * v;
    }
    return out;
}

const obj_2 = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj_2)); // { a: 1, b: 4, c: 9 }

const obj2_2 = { x: 2, y: 3 };
console.log(squareValues(obj2_2)); // { x: 4, y: 9 }

const obj3_2 = { p: 0, q: -2 };
console.log(squareValues(obj3_2)); // { p: 0, q: 4 }

const obj4_2 = {};
console.log(squareValues(obj4_2)); // {}


// 3
function renameKey(obj, oldKey, newKey) {
    let out = {};
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            if (key === oldKey) {
                out[newKey] = obj[key];
            } else {
                out[key] = obj[key];
            }
        }
    }
    return out;
}


// 4
// bubble sort
// selection sort
// .sort() // 시간복잡도가 큰 함수
function sortKeys(obj) {
    const keys = Object.keys(obj);
    const out = {};
    for (let i = 0; i < keys.length; i++) {
        let minKey = null;
        let minIndex = -1;
        // 남아있는 키 중 가장 작은 것 찾기
        for (let j = 0; j < keys.length; j++) {
            if (keys[j] !== null) {
                if (minKey === null || keys[j] < minKey) {
                    minKey = keys[j];
                    minIndex = j;
                }
            }
        }
        // 결과 객체에 추가
        out[minKey] = obj[minKey];

        // 사용한 키는 null로 표시
        keys[minIndex] = null;
    }
    return out;
}

console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 }));       // { y: 1, z: 0 }
console.log(sortKeys({}));                   // {}
console.log(sortKeys({ bb: 1, b: 2 }));      // { b: 2, bb: 1 }


// 5
function mapValues(obj, fn) {
    const out = {};
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        out[key] = fn(obj[key]);
    }
    return out;
}

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double));             // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }


// 6
function invert(obj) {
    const out = {};
    for (const [k, v] of entries) {
        out[v] = k;
    }
    return out;
}

console.log(invert({ a: 1, b: 2 }));        // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" }));    // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({}));                    // {}
console.log(invert({ a: "1", b: 1 }));      // { "1": "b" }


// 7
function getByPath(obj, path) {
    const keys = path.split(".");
    let current = obj;
    // a -> b -> c
    for (let i = 0; i < keys.length; i++) {
        if (!current) { // null, undefined, 0
            return; // return undefined
        }

        // current = {}['a'] (undefined)
        current = current[keys[i]];
    }
    return current;
}
const data = { a: { b: { c: 42 } } };
console.log(getByPath(data, "a.b.c"));     // 42
console.log(getByPath(data, "a.b.x"));     // undefined
console.log(getByPath({}, "a.b"));         // undefined
console.log(getByPath({ a: null }, "a.b"));// undefined


// 8
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

// 값이 있으면 -> 통과
// 값이 없으면 -> {}


const obj1_8 = {};
setByPath(obj1_8, "a.b.c", 100);
console.log(obj1_8); // { a: { b: { c: 100 } } }

const obj2_8 = { a: { b: 1 } };
setByPath(obj2_8, "a.c", 2);
console.log(obj2_8); // { a: { b: 1, c: 2 } }

const obj3_8 = {};
setByPath(obj3_8, "x", 5);
console.log(obj3_8); // { x: 5 }

const obj4_8 = { a: null };
setByPath(obj4_8, "a.b", 10);
console.log(obj4_8); // { a: { b: 10 } }