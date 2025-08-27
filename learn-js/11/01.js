//객체
//객체는 키(key)와 값(value)으로 구성된 속성(property)의 집합이다.

//객체를 정의하는 법
//1. 리터럴(literal) 방법, 객체 리터럴. 가장 많이 사용.
const obj = {
  name: "kim", //property
};

//2. Object 생성자 함수
const obj2 = new Object();

//3. 생성자 함수
function Person(name) {
  this.name = name;
}
const obj3 = new Person("Kim");

//4. Object.create
const obj4 = Object.create();

//프로퍼티 접근과 조작
//자유롭다. 객체 안의 객체도 가능
const user = {
  name: "Kim",
  age: 20,
  address: {
    zipCode: 1231,
  },
};

//1. 마침표 연산자: 주로 사용
user.name;
user.address.zipCode;

//2. 대괄호 연산자: 속성에 공백이 있을 경우. 어쩔 수 없을 때만 사용한다.
user["name"];
user["address"]["zipCode"];

//조작
//1. 수정: 이미 존재하고 있는 속성의 값을 변경
user.age = 50;

//2. 추가(동적 추가): 객체는 존재하지 않는 속성이라고 하더라도 메모리에 할당되도록 준비.
user.gender = "male";

//3. 삭제(동적 삭제)
delete user.ddd; //해당 속성이 없어도 오류 X
console.log(user);

//객체 메서드에서의 this
//단축 속성: 많이 사용!
let uname = "park";
function main() {
  console.log(this);
}

const objects = {
  uname, //바깥 속성과 같은 이름을 가지고 있으면 끌어옴
  main,
  //name: "minkyeong",
  main: () => {
    console.log(this);
  },
  greet: function () {
    console.log(`Hello, ${objects.name}`);
    console.log(`Hello, ${this.name}`); //더 많이 사용된다
  },
  //단축 속성 방식
  greet2() {
    console.log(`Hello, ${objects.name}`);
    console.log(`Hello, ${this.name}`);
  },
};

console.log(objects);
objects.greet2();

//코드 컨벤션을 준수한다: 일관된 방법으로 코드를 작성

//객체의 순회
const person = {
  name: "Kim",
  age: 20,
  job: "developer",
};

//for -in
for (const key in person) {
  console.log(person[key]);
}


//복습 필요!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//[].forEach();
["a", "b", "c"].forEach((v) => console.log(v));

//Object.keys()
Object.key(person).forEach((key) => {
  console.log(person[key]);
});

//Object.entries(): 배열반환 / 구조 분해 할당 문법
const arr = ["apple", "banana"];
const [a, b] = arr;
console.log(a, b);
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

//Object.values()
Object.values(person).forEach((v) => console.log(v));
