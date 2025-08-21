// 객체 생성과 프로퍼티

// 1. 객체 리터럴
// 간단하고 빠름
// 매번 새로 작성 필요
const obj1 = {
  property: "value",
};

// 2. Object 생성자 함수
// 동적 생성 가능
// 길고 잘 안 씀
const obj2 = new Object();
obj2.property = "value";

// 생성자 함수
// 대량 객체 생성에 효율적
// prototype 관리 필요
function Person(name) {
  this.name = name;
}
const obj3 = new Person("John");

// Object_create()
// 프로토타입 직접 지정
// 문법이 덜 직관적
const obj4 = Object.create(Object.prototype);
obj4.property = "value";

// ex1) 생성자 함수 방식으로
function User(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}
const user1 = new User("Ailce");
user1.greet();

// -----------------------------------------
// 프로퍼티 접근과 조작
// 객체안의 데이터(프로퍼티)는 읽기, 추가, 수정, 삭제가 가능

// 1. 점 표기법
const user = { name: "John" };
console.log(user.name); // John

// 2. 대괄호 표기법
const user2 = { "full name": "John Doe" };
console.log(user2["full name"]); // John Doe

const key = "name";
console.log(user[key]); // John

// ex2)
// Q1. 객체 product를 생성하고 다음 작업을 하세요.
// - name: "Laptop"
// - price: 1500
// - "product code": "ABC123"  (공백 포함 키)
// - price를 2000으로 수정
// - discount: 10 프로퍼티 추가
// - discount를 삭제

const product = {
  name: "Laptop",
  price: 1500,
  "product code": "ABC123",
};
product.price = 2000;
product.discout = 10;
delete product.discout;

const k = "price";

console.log(product.name);
console.log(product[k]);
console.log(product["product code"]);
