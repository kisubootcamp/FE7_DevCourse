// 1. 변수 타입 확인
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];
console.log(typeof num);     // number
console.log(typeof name);    // string
console.log(typeof isTrue);  // boolean
console.log(typeof person);  // object
console.log(typeof fruits);  // object 설계상 오류
console.log(typeof null); // object 설계상 오류

// 2. 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요
let length = 16; // number
let lastName = "Brown"; // string
let score = [10, 20]; // object
let x = {
  firstName: "Nick",
  lastName: "Doe"
}; // object