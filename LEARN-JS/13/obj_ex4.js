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

const person = { name: 'Alice' };
defineReadOnly(person, 'id', 1001);

console.log(person); // { name: "Alice", id: 1001 }
person.id = 999; // 무시(엄격 모드면 에러)
delete person.id; // 실패
console.log(person.id); // 1001
