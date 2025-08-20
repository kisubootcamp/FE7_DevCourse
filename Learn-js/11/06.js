const person = {
  name: "kim",
};

// 객체 속성 정의 defineProperty
Object.defineProperty(person, "age", {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: true,
});
// value
// writable -> false 수정 불가능, true 수정 가능
// enumerable -> false 열거 가능 속성에 안보임, true 보임
// configurable -> 속성의 삭제 불가

person.age = 50;
delete person.age;
console.log(person);
console.log(person.age);

// 여러 Property 정의하려면 defineProperties 사용
Object.defineProperties(person, {
  job: {
    value: "dev",
    enumerable: true,
  },
  salary: {
    value: 5000,
    enumerable: true,
  },
});

console.log(person);
