// 연습 문제 (고급)
// 꼭 풀어보기

//주니어에게 메서드 만히 사용하는건 독 
// ==> 알고리즘 문제를 많이 풀어가며 프로그래밍 사고를 게을리 하지 말자 
// (메서드 갖다 쓰고 기계적 로직을 짜는 ai 대체 가능 개발자가 되지 않기 위해사)

// 1.

function removeDuplicateValues(obj){
  const freq = Object.values(obj).reduce((m,v)=>{
    m[v] = (m[v] || 0) + 1;
    return m;
  }, {});
}

return Object.fromEntries(
  Object.entries(obj).filter(([_,v])=>{
    return freq[v]===1;
  })
);

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }

// 2.

function deepEqual(a,b){

  // 방어를 위한 조건
  // 같은 값
  if (a === b) return true;
  // null
  if (a === null || b === null) return false;
  // 둘 다 객체가 아니면 false
  if (typeof a !== "object" || typeof b !== "object") return false;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  // 키의 갯수가 다르면 다른 객체
  if (aKeys.length !== bKeys.length) return false;
  for (const key of aKeys) {
    if (!deepEqual(a[key],b[key])) return false;
  }
  return true;
}


console.log(deepEqual({ a: 1 }, { a: 1 }));                 // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));     // true
console.log(deepEqual({ a: { b: [1,2] } }, { a: { b: [1,2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 }));                 // false

// 3.

function deepFreeze(obj5) {
  Object.freeze(obj5);

  for (const key in obj5) {
    const value = obj5[key];
    if ( value !== null && typeof value === "object" ) {
      if (!Object.isFrozen(value)) {
        deepFreeze(value);
      }
    }
  }
  return obj5;
}

const obj5 = { a: { b: 1 } };
deepFreeze(obj5);

obj5.a.b = 2; // 실패 
console.log(obj5.a.b);                     // 1
console.log(Object.isFrozen(obj5));        // true
console.log(Object.isFrozen(obj5.a));      // true

// 4.

function defineReadOnly(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: false,
    configurable: false,
    enumerable: true,
  });
  return obj;
}

const person = { name: "Alice" };
defineReadOnly(person, "id", 1001);

console.log(person);           // { name: "Alice", id: 1001 }
person.id = 999;               // 무시(엄격 모드면 에러)
delete person.id;              // 실패
console.log(person.id);        // 1001