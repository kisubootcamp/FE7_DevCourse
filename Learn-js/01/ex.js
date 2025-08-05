// var x => let, const o
// const를 무지성으로 쓰고 let은 재할당할 변수만 사용
// const -> 상수

// 1. 변수
// 1번
const x = 10,
  y = 20,
  sum = x + y;
console.log(sum);

// 2번
let uname1 = "Alice";
uname1 = "Bob";
console.log(uname1);

// 3번
const PI = 3.14;
console.log(PI);

// 4번
let a = 5,
  b = 10,
  tmp = 0;
tmp = b;
b = a;
a = tmp;
console.log(a, b);

// 2. 자료형
// 1번
let num = 42; // number
let uname2 = "John"; // string
let isTrue = true; // boolean
let person = { name: "Alice", age: 30 }; // object
let fruits = ["apple", "banana", "orange"]; // object

console.log(typeof num);
console.log(typeof uname2);
console.log(typeof isTrue);
console.log(typeof person);
console.log(typeof fruits);

// 2번
let length = 16; // number
let lastName = "Brown"; // string
let score = [10, 20];
let x2 = {
  firstName: "Nick",
  lastName: "Doe",
}; // object

console.log(typeof length);
console.log(typeof lastName);
console.log(typeof x2);
