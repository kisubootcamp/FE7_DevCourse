// ## 2. 깊은 비교 (deepEqual)

// ### 문제

// 두 값이 **깊게 동등**한지 비교하는 함수를 작성하세요.

// 원시값, 배열, 객체(순서 무관), 중첩 구조를 비교합니다. (함수/Date/Map/Set은 제외)
function deepEqual(a, b) {
    if (a === b) return true;

    if (a === null || b === null) return false;
    if (typeof a !== "object" || typeof b !== "object") return false;

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    for (const key of aKeys) {
        if (!Object.hasOwn(b, key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
}

// **입출력**

console.log(deepEqual({ a: 1 }, { a: 1 }));                 // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));     // true
console.log(deepEqual({ a: { b: [1,2] } }, { a: { b: [1,2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 }));                 // false
