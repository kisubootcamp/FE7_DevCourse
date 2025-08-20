// 1.8 객체의 속성 설명자
// 1.8.1 Object.defineProperty();

const person = {
  name: "kim",
};

// value
// writable -> false 수정 불가능 true 가능
// emurable -> false 열거 가능 속성에 안보임, true 보임
// configurable -> 속성의 삭제 불가

Object.defineProperty(person, "age", {
  //하나 정의할 때는 defineProperty
  value: 20,
  emurable: true,
  writable: true,
  configurable: true,
});
person.age = 50;
console.log(person);
console.log(person.age);

Object.defineProperties(person, {
  // 여러개 정의할 때는 definePropertier
  job: {
    value: "developer",
    enumerable: true,
  },
  salary: {
    value: "develop",
    enumerable: true,
  },
});

console.log(person);
