// ## 1. 객체 값 필터링

// ### 문제

// 주어진 객체에서 값이 특정 기준 이상인 키-값 쌍만 필터링하여 반환하는 함수를 작성하세요
function filterByThreshold(obj, threshold){
    const result = {};
    // Object.keys(obj).forEach(key => {
    //     if (obj[key] >= threshold) {
    //         result[key] = obj[key];
    //     }
    // });
    const entries = Object.entries(obj);
    for(const[k, v] of entries){
        if(v >= threshold) result[k] = v;
    }
    return result;
}

// **입력**

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

// ## 2. 객체의 값 변화

// ### 문제

// 주어진 객체의 모든 값을 제곱하는 함수를 작성하세요
function squareValues(obj){
    const result = {};
    // Object.keys(obj).forEach(key => {
    //     result[key] = obj[key] * obj[key];
    // });
    const entries = Object.entries(obj);
    for(const[k, v] of entries){
        result[k] = v * v;
    }
    return result;
}

// **입출력**

const obj = { a: 1, b: 2, c: 3 };
console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }

const obj2 = { x: 2, y: 3 };
console.log(squareValues(obj2)); // { x: 4, y: 9 }

const obj3 = { p: 0, q: -2 };
console.log(squareValues(obj3)); // { p: 0, q: 4 }

const obj4 = {};
console.log(squareValues(obj4)); // {}

// ## 3. 키 이름 변경

// ### 문제

// 객체에서 특정 키의 이름을 다른 이름으로 변경하는 함수를 작성하세요.

// 원래 키가 없으면 그대로 반환하세요. (얕은 레벨만)
function renameKey(obj, oldKey, newKey){
    const result = { ...obj };
    if (Object.hasOwn(result, oldKey) && oldKey !== newKey) {
        result[newKey] = result[oldKey];
        delete result[oldKey];
    }
    return result;
}


// **입출력**

console.log(renameKey({ a: 1, b: 2 }, "a", "x")); // { x: 1, b: 2 }
console.log(renameKey({ a: 1 }, "c", "d"));       // { a: 1 }
console.log(renameKey({}, "a", "b"));             // {}
console.log(renameKey({ a: 1 }, "a", "a"));       // { a: 1 }

// ## 4. 키 정렬된 새 객체 반환

// ### 문제

// 객체의 키를 **알파벳 오름차순**으로 정렬해 **새 객체**로 반환하는 함수를 작성하세요.
function sortKeys(obj){
    // const result = {};
    // Object.keys(obj).sort().forEach(key => {
    //     result[key] = obj[key];
    // });
    // return result;
    const keys = Object.keys(obj);
    const out = {};
    for(let i = 0; i < keys.length; i++){
        let minKey = null;
        let minIndex = -1;
        // 남아 있는 키 중 가장 작은 것 찾기
        for(let j = 0; j < keys.length; j++){
            if(keys[j] !== null){
                if(minKey === null || keys[j] < minKey){
                    minKey = keys[j];
                    minIndex = j;
                }
            }
        }

        // 결과 객체 추가
        out[minKey] = obj[minKey];
        // 사용할 키는 null로 표시
        keys[minIndex] = null;
    }
    return out;
}


// **입출력**

console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 }));       // { y: 1, z: 0 }
console.log(sortKeys({}));                   // {}
console.log(sortKeys({ bb: 1, b: 2 }));      // { b: 2, bb: 1 }

// ## 5. 값 변환 (mapValues)

// ### 문제

// 주어진 객체의 **값**에 변환 함수를 적용해 **새 객체**로 반환하는 함수를 작성하세요.
function mapValues(obj, fn){
    // const result = {};
    // Object.keys(obj).forEach(key => {
    //     result[key] = fn(obj[key]);
    // });
    // return result;
    const out = {};
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        out[key] = fn(obj[keys]);
    }
    return out;
}

// **입출력**

const double = (n) => n * 2;

console.log(mapValues({ a: 1, b: 2 }, double)); // { a: 2, b: 4 }
console.log(mapValues({ x: -1, y: 0 }, Math.abs)); // { x: 1, y: 0 }
console.log(mapValues({}, double));             // {}
console.log(mapValues({ a: 1 }, (n) => n ** 3)); // { a: 1 }

// ## 6. 키/값 뒤집기 (invert)

// ### 문제

// 객체의 **키와 값**을 뒤집어 새 객체로 반환하는 함수를 작성하세요.

// 값은 문자열/숫자라고 가정합니다. (중복 값이 있으면 **마지막 키**가 우선)
function invert(obj){
    // const result = {};
    // Object.keys(obj).forEach(key => {
    //     result[obj[key]] = key; // 마지막 키가 우선
    // });
    // return result;
    const out = {};
    const entries = Object.entries(obj);
    for(const [k, v] of entries){
        out[v] = k;
    }
    return out;
}

// **입출력**

console.log(invert({ a: 1, b: 2 }));        // { "1": "a", "2": "b" }
console.log(invert({ x: "y", y: "y" }));    // { "y": "y" }  (마지막 키 y가 우선)
console.log(invert({}));                    // {}
console.log(invert({ a: "1", b: 1 }));      // { "1": "b" }

// ## 7. 중첩 경로 값 얻기 (getByPath)

// ### 문제

// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 안전하게 가져오는 함수를 작성하세요.

// 경로가 없으면 `undefined`를 반환합니다.
function getByPath(obj, path){
    const keys = path.split(".");
    let current = obj;
    for (let i = 0; i < keys.length; i++){
        // if (current === null || !Object.hasOwn(current, keys[i])) {
        //     return undefined;
        // }
        if(!current){
            return;
        }
        current = current[keys[i]];
    }
    return current;
}


// **입출력**

const data = { a: { b: { c: 42 } } };

console.log(getByPath(data, "a.b.c"));     // 42
console.log(getByPath(data, "a.b.x"));     // undefined
console.log(getByPath({}, "a.b"));         // undefined
console.log(getByPath({ a: null }, "a.b"));// undefined

// ## 8. 중첩 경로 값 설정 (setByPath)

// ### 문제

// 문자열 경로(예: `"a.b.c"`)로 중첩 객체의 값을 설정하는 함수를 작성하세요.

// 중간 경로가 없으면 **객체를 생성**하여 할당합니다. (원본 객체를 **변경**해도 좋음)
function setByPath(obj, path, value){
    const keys = path.split(".");
    let current = obj;
    for (let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (i === keys.length - 1){
            current[key] = value; 
        } else {
            if (!current[i] || typeof current[key] !== "object"){
                current[key] = {}; 
            }
            current = current[key];
        }
    }
}

// **입출력**

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
