// 1
function removeDuplicateValues(obj) {
    const values = Object.values(obj);
    const freq = values.reduce((m, v) => {
        m[v] = (m[v] || 0) + 1;
        return m;
    }, {});
    const entries = Object.entries(obj);
    const out = entries.filter(([_, v]) => {
        return freq[v]  === 1;
    });
    const result = Object.fromEntries(out);
    return result;


    // const freq2 = Object.values(obj).reduce((m, v) => {
    //     m[v] = (m[v] || 0) + 1;
    //     return m;
    // }, {});
    // const entries2 = Object.entries(obj);
    // return Object.fromEntries(
    //     Object.entries(obj).filter(([_, v]) => {
    //         return freq[v]  === 1;
    //     })
    // );
}

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }