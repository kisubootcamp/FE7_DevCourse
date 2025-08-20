// 객체
// 객체는 키와 값으로 구성된 속성의 집합이다.

// 1. 객체를 정의하는 방법
// 1.1 리터럴(literal) 방법, 객체 리터럴
const obj = {
  name: 'lee', // property
};

// 1.2 Object 생성자 함수
const obj2 = new Object();

// 1.3 생성자 함수(class)
function Person(name) {
  this.name = name;
}
const obj3 = new Person('lee');

// 1.4 Object.create()
const obj4 = Object.create(null);

// 2. 프로퍼티 접근과 조작
const user = {
  name: 'kim',
  age: 20,
  address: {
    zipCode: 13111,
    details: {
      addr1: '인천시 미추홀구',
      addr2: '주안동',
    },
  },
  likes: ['apple', 'orange'],
};

// 2.1 마침표 연산자
user.name;
user.address.zipCode;

// 2.2 대괄호 연산자
user['name'];
user['address']['zipCode'];

// 2.3 조작
// 2.3.1 수정
user.age = 40;

// 2.3.2 추가(동적 추가)
user.gender = 'male';

// 2.3.3 삭제(동적 삭제)
delete user.age;

// console.log(user);

// 3. 객체 메서드에서의 this
// 3.1 단축 속성
let uname = 'qqqqq';
function main() {
  console.log(this);
}
const objects = {
  uname,
  main,
  greet: function () {
    console.log(`hello, ${objects.uname}`);
    console.log(`hello, ${this.uname}`);
  },
  greet() {
    console.log(`hello, ${objects.username}`);
    console.log(`hello, ${this.uname}`);
  },
};

// console.log(objects);
// objects.greet();

const calculator = {
  subtract: function (a, b) {
    return a - b;
  },
  multiply: (a, b) => a - b,
  add(a, b) {
    return a + b;
  },
  main,
};

// 4. 객체의 순회
const person = {
  name: 'kim',
  age: 20,
  job: 'developer',
};

// for-in
for (const key in person) {
  console.log(key);
}

// [].forEach();
['a', 'b', 'c'].forEach((v) => console.log(v));

// Object.keys()
console.log(Object.keys(person));
Object.keys(person).forEach((key) => {
  console.log(person[key]);
});

// Object.entries()
const arr = ['apple', 'banana'];
const [a, b] = arr;
console.log(a, b);
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

// Object.values()
console.log(Object.values(person));

// 5. 객체를 복사
const original = { name: 'lee', age: 20 };
const original2 = { age: 40, gender: 'male', addr: { zipCode: 111 } };

// 5.1 얕은 복사
const shallowCopy = original;
const shallowCopy2 = Object.assign({}, original, original2);
const shallowCopy3 = { ...original, ...original2 };

// shallowCopy2.addr.zipCode = 50;
// console.log(original);
// console.log(original2);
// console.log(shallowCopy2);

// 5.2 깊은 복사

// 고전적방법
// const deepCopy = JSON.parse(JSON.stringify(original2));
// 최신 방법
const deepCopy = structuredClone(original2);
deepCopy.addr.zipCode = 10;
console.log(original2);
console.log(deepCopy);
