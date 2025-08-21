// ## 1. 객체의 중복 값 제거

// ### 문제

// 주어진 객체에서 중복된 값을 제거하고, 그에 해당하는 키만 반환하는 함수를 작성하세요
function removeDuplicateValues(obj){
    const valueCount = {};
    const result = {};
    Object.keys(obj).forEach(key => {
        const val = obj[key];
        valueCount[val] = (valueCount[val] || 0) + 1;
    });
    Object.keys(obj).forEach(key => {
        if (valueCount[obj[key]] === 1){
            result[key] = obj[key];
        }
    });
    return result;
}   

// 입출력

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }

// ## 2. 깊은 비교 (deepEqual)

// ### 문제

// 두 값이 **깊게 동등**한지 비교하는 함수를 작성하세요.

// 원시값, 배열, 객체(순서 무관), 중첩 구조를 비교합니다. (함수/Date/Map/Set은 제외)
function deepEqual(a, b){
    if (a === b) return true;

    if (typeof a !== 'object' || a === null ||
        typeof b !== 'object' || b === null) {
        return false;
    }

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;

    for (let key of aKeys){
        if (!Object.hasOwn(b, key) || !deepEqual(a[key], b[key])){
            return false;
        }
    }
    return true;
}

// **입출력**

console.log(deepEqual({ a: 1 }, { a: 1 }));                 // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));     // true
console.log(deepEqual({ a: { b: [1,2] } }, { a: { b: [1,2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 }));                 // false

// ## 3. 깊은 동결 (deepFreeze)

// ### 문제

// 객체를 **재귀적으로 동결**하는 함수를 작성하세요.

// 함수 실행 후, 모든 중첩 객체가 `Object.isFrozen`으로 `true`가 되어야 합니다.
function deepFreeze(obj){
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === "object" && obj[key] !== null && !Object.isFrozen(obj[key])){
            deepFreeze(obj[key]);
        }
    });
}

// **입출력**

const obj = { a: { b: 1 } };
deepFreeze(obj);

obj.a.b = 2; // 실패 (엄격 모드면 TypeError)
console.log(obj.a.b);                     // 1
console.log(Object.isFrozen(obj));        // true
console.log(Object.isFrozen(obj.a));      // true

// ## 4. 읽기 전용 프로퍼티 추가 (defineReadOnly)

// ### 문제

// 대상 객체에 **읽기 전용 데이터 프로퍼티**를 추가하는 함수를 작성하세요.

`writable: false`, `configurable: false`, `enumerable: true`로 정의하세요.
function defineReadOnly(obj, key, value){
    Object.defineProperty(obj, key, {
        value: value,
        writable: false,
        configurable: false,
        enumerable: true
    });
}


// **입출력**

const person = { name: "Alice" };
defineReadOnly(person, "id", 1001);

console.log(person);           // { name: "Alice", id: 1001 }
person.id = 999;               // 무시(엄격 모드면 에러)
delete person.id;              // 실패
console.log(person.id);        // 1001