// 객체 -> 키(key)와 값(value)으로 ㄱ구성된 속성(property)의 집합

// 1. 객체를 정의하는 방법

// 1.1 리터럴 방법, 객체 리터럴
const obj1 = {
  name: "kim", // property
};

// 1.2 Object 생성자 함수
const obj2 = new Object();

// 1.3 생성자 함수 class
function Person(name) {
  this.name = name;
}
const obj3 = new Person("kim");

// 1.4 Object.create()
/* const obj4 = Object.create(); */

// 2. 프로퍼티 접근과 조작
const user = {
  name: "kim",
  age: 20,
  address: {
    zipCode: 1111,
    details: {
      addr1: "서울시 강남구",
      addr2: "서초동",
    },
  },
  likes: ["apple", "banana"],
};

// 2.1 마침표 연산자
user.name;

// 2.2 대괄호 연산자
user["name"];

// 2.3 조작
// 2.3.1 수정
user.age = 50;

// 2.3.2 추가(동적 추가)
user.gender = "male";

// 2.3.3 삭제(동적 삭제)
delete user.age;
console.log(user);

// 3. 객체 메서드에서의 this
let uname = "park";
const main = function main() {
  console.log("11");
};
const objects = {
  uname,
  main,
  greet: function () {
    console.log(`Hello, ${objects.uname}`);
    console.log(`Hello, ${this.uname}`);
  },
  greet() {
    console.log(`Hello, ${objects.uname}`);
    console.log(`Hello, ${this.uname}`);
  },
};

objects.greet();
objects.main();

const calculator = {
  // 권장
  subtract: function (a, b) {
    return a - b;
  },
  //비권장
  multiply: (a, b) => a - b,
  // 권장
  add(a, b) {
    return a + b;
  },
};

// 4. 객체의 순회 접근
const person = {
  name: "kim",
  age: 20,
  job: "dev",
};

// for in
for (const key in person) {
  console.log(person[key]);
}

// [].forEach();
["a", "b", "c"].forEach((v) => console.log(v));

// Object.keys()
Object.keys(person).forEach((key) => {
  console.log(person[key]);
});

// Object.entries()
const arr = ["apple", "banana"];
const [a, b] = arr;

Object.entries(person).forEach((key, value) => {
  console.log(key, value);
});

// Object.values()
Object.values(person).forEach((v) => {
  console.log(v);
});

// 5. 객체 복사
const original = { name: "kim", age: 20 };
const original2 = { age: 40, gender: "male", addr: { zipCode: 111 } };

// 5.1 얕은 복사
const shallowCopy = original;
const shallowCopy2 = Object.assign({}, original, original2);
const shallowCopy3 = { ...original, ...original2 };

// 기존 original2은 변경 안됨 => 값 자체를 복사하기 때문에 독립적인 구조
shallowCopy2.age = 50;

// 기존 original2도 변경됨 => 값이 아닌 주소를 복사했기 때문에 연결된 구조
shallowCopy2.addr.zipCode = 50;
console.log(original);
console.log(original2);
console.log(shallowCopy2);
console.log(shallowCopy3);

// 5.2 깊은 복사

// 1. 고전적 방법
// const deepCopy = JSON.parse(JSON.stringify(original2));

// 2. 최신 방법
const deepCopy = structuredClone(original2);
deepCopy.addr.zipCode = 10;
console.log(original2);
console.log(deepCopy);
