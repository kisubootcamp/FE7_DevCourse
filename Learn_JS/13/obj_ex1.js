// ## 1. 객체의 중복 값 제거

// ### 문제

// 주어진 객체에서 중복된 값을 제거하고, 그에 해당하는 키만 반환하는 함수를 작성하세요
function removeDuplicateValues(obj){
    // const values = Object.values(obj);
    const freq = Object.values(obj).reduce((m, v) => {
        m[v] = (m[v] || 0) + 1;
        return m;
    }, {});
    // const entries = Object.entries(obj);
    // const out = Object.entries(obj).filter(([k, v]) => {
    //     return freq[v] === 1;
    // });
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => {
        return freq[v] === 1;
    }));
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