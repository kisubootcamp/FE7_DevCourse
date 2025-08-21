// # 연습문제(고급)

// ## 1. 객체의 중복 값 제거
function removeDuplicateValues (obj1){
    const result = {};
    
    const entries = Object.entries(obj1)

    for ( const [k,v] of entries){
        console.log(entries[k,v])
    }

}

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }

// 2. 깊은 비교 (deepEqual)
function deepEqual (obj1, obj2){

}


console.log(deepEqual({ a: 1 }, { a: 1 }));                 // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));     // true
console.log(deepEqual({ a: { b: [1,2] } }, { a: { b: [1,2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 }));                 // false


// 3. 깊은 동결 (deepFreeze)
function deepFreeze (obj){

}

const obj = { a: { b: 1 } };
deepFreeze(obj);

obj.a.b = 2; // 실패 
console.log(obj.a.b);                     // 1
console.log(Object.isFrozen(obj));        // true
console.log(Object.isFrozen(obj.a));      // true

// 4. 읽기 전용 프로퍼티 추가 (defineReadOnly)
function defineReadOnly(obj, str, num){
    Object.defineProperty(obj, str, {
        value: num,
        // writable: false,     // 값 변경 불가
        // configurable: false, // 삭제 불가
        enumerable: true        // 열거 가능
    });
}
const person = { name: "Alice" };
defineReadOnly(person, "id", 1001);

console.log(person);           // { name: "Alice", id: 1001 }
person.id = 999;               // 무시(엄격 모드면 에러)
delete person.id;              // 실패
console.log(person.id);        // 1001