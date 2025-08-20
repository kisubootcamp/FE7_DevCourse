// 객체
// 객체는 키(key)와 값(value)으로 구성된 속성(property)의 집합이다.

// 1. 객체를 정의하는 방법
// 1.1 리터럴(literal) 방법, 객체 리터럴
const obj = {
  name: "Jeong", // property
};

// 1.2 Object 생성자 함수
const obj2 = new Object();

// 1.3 생성자 함수 (class)
function Person(name) {
  this.name = name;
}
const obj3 = new Person("kim");

// 1.4 Object.create()
const obj4 = Object.create({});

// 2. 프로퍼티 접근과 조작
const user = {
  name: "kim",
  age: 20,
  address: {
    zipcode: 13111,
    details: {
      addr1: "서울시 중랑구",
      addr2: "면목동",
    },
  },
  likes: ["apple", "orange"],
};

// 객체에 접근하는 방법 ...
// 2.1 마침표 연산자
user.name;
user.address.zipcode;

// 2.2 대괄호 연산자 (피치 못할 사정이 있지 않는 경우 사용하지 않음)
user["name"];
user["address"]["zipcode"];

// 2.3 조작
// 2.3.1 수정
user.age = 50;

// 2.3.2 추가
user.gender = "male";

// 2.3.3 삭제
delete user.age;

// 3. 객체 메서드에서의 this
// 3.1 단축 속성
let uname = "park";
function main() {
  console.log(this);
}
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

const calculator = {
  main, // 가장 new
  add(a, b) {
    return a + b;
  },
  multiply: (a, b) => a - b,
  substract: function (a, b) {
    // 가장 old
    return a - b;
  },
};

// 4. 객체의 순회
const person = {
  name: "kim",
  age: 20,
  job: "developer",
};

// for-in
for (const key in person) {
  console.log(person[key]);
}

// [].forEach();
["a", "b", "c"].forEach((v) => console.log(v));

// Object.keys()
Object.keys(person).forEach((key) => console.log(person[key]));

// Object.entries()
const arr = ["apple", "banana"];
const [a, b] = arr;

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

// Object.values()
Object.values(person).forEach((v) => console.log(v));

// 5. 객체를 복사(병합)
// const original = { name: "kim", age: 2 };
// const original2 = { age: 40, gender: "male", addr: { zipcode: 111 } };

// // 5.1 얕은 복사

// // 5.1.1 기본적으로 할당하는 방법
// const shallowCopy = original;
// // 5.1.2 Object.assign(target, ...값을 넣을 객체들)
// const shallowCopy2 = Object.assign({}, original, original2);
// // 5.1.3 스프레드 연산자 (위의 Object.assign과 똑같음)
// const shallowCopy3 = { ...original, ...original2 };

// // shallowCopy2.addr.zipcode = 50; // 내부 객체의 값을 변경하면 원본 값이 변경되기 때문에 얕은 복사라 할 수 있음
// // console.log(original);
// // console.log(original2);
// // console.log(shallowCopy2);

// 5.2 깊은 복사라
const original = { name: "kim", age: 20 };
const original2 = { name: 40, gender: "male", addr: { zipcode: 111 } };

// 고전적 방법
// 5.2.1 JSON.parse(JSON.stringify(객체)): JSON으로 변경 => 다시 객체로 변경
const deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.addr.zipcode = 19;
console.log(original2);
console.log(deepCopy);
