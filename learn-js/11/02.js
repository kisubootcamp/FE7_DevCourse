// 객체 메서드에서의 this
const objects = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
  greet() {
    console.log(`Hello, ${this.name}!`);
  }, // 이 방법(단축 속성)을 더 많이 사용함
};

// 객체 메서드 정의 방법
const calculator = {
  subtract: function (a, b) {
    return a - b;
  },
  add: (a, b) => a + b, // 화살표 함수는 this를 가지지 않음
  multiply(a, b) {
    return a * b;
  },
  divide: (a, b) => a / b, // 화살표 함수는 this를 가지지 않음
};

// 객체 순회 방법
const person = {
  name: "Bob",
  age: 30,
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

console.log(Object.entries(person));

// for-in
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// for-of
const keys = Object.keys(person);
for (const key of keys) {
  console.log(`${key}: ${person[key]}`);
}
// forEach
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Object.keys()
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
// Object.entries()
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
