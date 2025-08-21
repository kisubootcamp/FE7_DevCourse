// 객체 병합과 복사
// 얕은 복사와 깊은 복사 개념이 있음

// 1. 얕은 복사
// 한 단계 깊이의 값만 복사
// 객체 안에 도 다른 객체(중첩 객체)가 있으면, 그 내부 참조는 그대로 연결됨
// 복사본을 수정하면 원본도 영향을 받을 수 있음
// Objects.assign() 사용
const obj1 = { a: 1, b: { c: 2 } };
const copy1 = Object.assign({}, obj1);
copy1.a = 100; // 원본 영향 없음
copy1.b.c = 200; // 원본 영향 있음
console.log(obj1); // { a: 1, b: { c: 200 } }

// 2. 깊은 복사
// 중첩 객체까지 완전히 새로운 값으로 복사
// 복사본과 원본이 완전히 독립됨
// structuredClone()
const obj3 = { a: 1, b: { c: 2 } };
const copy3 = structuredClone(obj3);
copy3.b.c = 999;
console.log(obj3); // { a: 1, b: { c: 2 } }

// 3. 객체 병합
// Object.assign() 사용
const objA = { name: "Alice", age: 25 };
const objB = { city: "Seoul", age: 30 };
const merged = Object.assign({}, objA, objB);
console.log(merged);
// { name: 'Alice', age: 30, city: 'Seoul' }
// 뒤쪽에 오는 객체가 앞쪽 속성을 덮어씀

// ex1)
const objt1 = { name: "Alice", age: 25 };
const objt2 = { age: 30, city: "Seoul" };
const result = Object.assign({}, objt1, objt2);
console.log(result);
