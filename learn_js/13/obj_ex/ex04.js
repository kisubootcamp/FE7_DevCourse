// 대상 객체에 **읽기 전용 데이터 프로퍼티**를 추가하는 함수를 작성하세요.
// `writable: false`, `configurable: false`, `enumerable: true`로 정의하세요.

function defineReadOnly(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writable: false,
    configurable: false,
    enumerable: true,
  });
  return obj;
}

const person = { name: 'Alice' };
defineReadOnly(person, 'id', 1001);

console.log(person); // { name: "Alice", id: 1001 }
person.id = 999; // 무시(엄격 모드면 에러)
delete person.id; // 실패
console.log(person.id); // 1001
