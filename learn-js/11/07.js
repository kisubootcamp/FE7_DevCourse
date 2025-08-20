// 객체의 속성 설명자
// Object.defineProperty()

const person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

Object.defineProperty(person, "name", {});
Object.defineProperty(person, "age", {
  writable: false, // 읽기 전용 속성
  enumerable: true, // 열거 가능한 속성
  writable: true, // 수정 가능 속성
  configurable: false, // 속성 삭제 불가
  // value
  // writable -> 수정 가능 여부
  // enumerable -> 열거 가능 속성에 보이는지
  // configurable -> 속성 삭제 가능 여부
});

person.age = 50; // writable이 false이므로 변경되지 않음
delete person.age;

console.log(person);
console.log(person.age); // 30 (변경되지 않음)

Object.defineProperties(person, {
  job: {
    value: "Engineer",
  },
  salary: {
    value: 50000,
  },
});

console.log(person);
