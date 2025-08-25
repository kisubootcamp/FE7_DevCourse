// 연습문제(고급)

// 1
// 주어진 객체에서 중복된 값을 제거하고, 그에 해당하는 키만 반환하는 함수를 작성하세요
function removeDuplicateValues(obj) {
  const valueCount = {};
  const newObj = {};

  // 값의 개수를 세기
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // 객체의 고유 속성만 처리
    const value = obj[key];
    valueCount[value] = (valueCount[value] || 0) + 1;
  }

  // 중복되지 않은 값만 새 객체에 추가
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) continue; // 객체의 고유 속성만 처리
    const value = obj[key];
    if (valueCount[value] === 1) {
      newObj[key] = value;
    }
  }

  return newObj; // 새 객체 반환
}

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }

//

// 2
function deepEqual(obj1, obj2) {
    
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false

//

// 4
// 대상 객체에 **읽기 전용 데이터 프로퍼티**를 추가하는 함수를 작성하세요.
// `writable: false`, `configurable: false`, `enumerable: true`로 정의하세요.
function defineReadOnly(obj, key, value) {
  Object.defineProperty(obj, key, {
    value: value,
    writable: false, // 쓰기 불가능
    configurable: false, // 삭제 불가능
    enumerable: true, // 열거 가능
  });
}

const person = { name: "Alice" };
defineReadOnly(person, "id", 1001);

console.log(person); // { name: "Alice", id: 1001 }
person.id = 999; // 무시(엄격 모드면 에러)
delete person.id; // 실패
console.log(person.id); // 1001
