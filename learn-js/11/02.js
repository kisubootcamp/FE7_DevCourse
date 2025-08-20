// 객체
// 객체는 키(key)와 값(value)으로 구성된 속성(property)의 집합이다.

// 1. 객체를 정의하는 방법
// 1.1 리터럴(literal) 방법, 객체 리터럴
const obj = {
    name: "kim", // property
}

// 1.2 Object 생성자 함수
const obj2 = new Object();

// 1.3 생성자 함수(class)
function Person(name) {
    this.name = name;
}
const obj3 = new Person("kim");

// 1.4 Object.create()
const obj4 = Object.create();

// 2. 프로퍼티 접근과 조작
const user = {
    name: "kim",
    age: 20,
    address: {
        zipCode: 13111,
        details: {
            addr1: "서울시 중랑구",
            addr2: "면목동",
        }
    },
    likes: ["apple", "orange"],
}

// 2.1 마침표 연산자
user.name;
user.address.zipCode;

// 2.2 대괄호 연산자
user["name"];
user["address"]["zipCode"];

// 2.3 조작
// 2.3.1 수정
user.age = 50;

// 2.3.2 추가
user.gender = "male";
console.log(user.dddd) // undefined

// 2.3.3 삭제 (동적 삭제)
delete user.age;
console.log(user);

// 3. 객체 메서드에서의 this
// 3.1 단축 속성
// 3.2 외부 값을 속성으로 정의 가능
let name = "park";
function main() {
    console.log(this);
}
const objects = {
    name,
    main,
    greet: function () {
        console.log(`Hello, ${objects.name}`);
        console.log(`Hello, ${this.name}`);
    },
    // 단축 속성 방식
    greet () {
        console.log(`Hello, ${objects.name}`);
        console.log(`Hello, ${this.name}`);
    }
}
objects.main();
console.log(objects);
objects.greet();

const calculator = {
    subtract: function (a, b) {
        return a - b;
    },
    multiply: (a, b) => a - b,
    add(a, b) {
        return a + b;
    },
    main,
}

// 4. 객체의 순회
const person = {
    name: "kim",
    age: 20,
    job: "developer",
}

// for-in
for(const key in person) {
    console.log(key);
    console.log(person[key]);
}

// [].forEach();
["a", "b", "c"].forEach((v) => console.log(v));
// Object.keys()
console.log(Object.keys(person));
Object.keys(person).forEach((key) => {
    console.log(person[key]);
})

// Object.entries()
console.log(Object.entries(person));
const arr = ["apple", "banana"];
const [a, b] = arr;
Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
})

// Object.values()
Object.values(person).forEach((v) => console.log(v));
console.log(Object.values(person));
