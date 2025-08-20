//value
// writable -> false 수정 불가능 || true 가능
// enumerable -> false 열거 가능 속성에 안보임 || true 보임
// configurable -> 속성의 삭제 불가

const person = { name: "Kim" };

Object.defineProperty(person, "age", {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: false,
});

person.age = 50;
delete person.age; // 시도하지만,. 삭제 불가-> configurable : false
console.log(person.age);

// 여러개는?
Object.defineProperties(person, {
  job: { value: "developer", enumerable: true },
  salary: { value: 5000, enumerable: true },
});

console.log(person);
