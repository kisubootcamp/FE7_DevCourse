// 객체
// 객체는 키(key)와 값(value)으로 구성된 속성(property)의 집합이다.

// 1. 객체를 정의하는 방법
// 1.1 리터럴(literal) 방법, 객체 리터럴
const obj = {
  name: "kim", //property
};

// 1.2 Object 생성자 함수
const obj2 = new Object();

// 1.3 생성자 함수
function Person(name) {
  this.name = name;
}

const obj3 = new Person("Kim");

// 1.4 Object.create()
const obj4 = Object.create();

// 2. 프로퍼티 접근과 조작
const user = {
  name: "kim",
  age: 20,
  address: {
    zipCode: 13111,
    details: {
      addr1: "서울시",
      addr2: "면목동",
    },
  },
  likes: ["apple", "orange"],
};

// 2.1 마침표 연산자
user.name;
user.address.zipCode;

// 2.2 대괄호 연산자
user["name"];
user["address"]["zipCode"];

// 2.3 조작
// 2.3.1 수정
user.age = 50;

// 2.3.2 추가(동적 추가)
user.gender = "male";

// 3.3.3 삭제
// 있는 걸 삭제해도, 없는 걸 삭제해도 오류가 나지는 않음
delete user.age;

// 3. 객체 메서드에서의 this
let name = "park";
const objects = {
  name,
  greet: function () {
    console.log(`Hello, ${objects.name}`);
    console.log(`Hello, ${this.name}`); // 이걸 더 많이 활용
  },
  // 3.1 단축 속성
  greet() {
    console.log(`Hello, ${objects.name}`);
    console.log(`Hello, ${this.name}`); // 이걸 더 많이 활용
  },
};

objects.greet();

const calculator = {
  main,
  add(a, b) {
    return a + b;
  },
  multiply: (a, b) => a - b,
  subtract: function (a, b) {
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
["a", "b", "c"].forEach((v) => {
  console.log(v);
});

// Object.keys()
// 배열 형태로 줌
Object.keys(person).forEach((key) => {
  console.log(person[key]);
});

// Object.entries()
// 키와 밸류가 2차원 배열 형태로 생기는 것
const arr = ["apple", "banana"];
const [a, b] = arr; // 구조분해 할당
console.log(Object.entries(person));
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

// Object.values
// 값을 배열로 뽑아줌
Object.values(person).forEach((v) => console.log(v));

// 5.객체를 복사 및 병합
const original = { name: "kim", age: 20 };
const original2 = { age: 40, gender: "male" };

// 5.1 얕은 복사
const copy = original;
const copy2 = Object.assign({}, original); // 2번쨰 매개변수가 첫 번째 매개변수에 저장되는 것
const copy3 = Object.assign({}, original, original2); // 이렇게 2개의 객체를 병합할 수도 있음
// 만약 같은 속성(키) 값이 있으면, 나중에(original2) 나오는 객체의 값이 살아남
const copy4 = { ...original, ...original2 };

// 5.2 깊은 복사

// 고전적 방법
// stringfy : 문자열로 변환
// parse 객체로 다시 변환
const deepCopy = JSON.parse(JSON.stringify(original2));
//최신의 방법
const deepCopy2 = structuredClone(original2);
