// 👻 연습문제
// 변수 타입 확인
// 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
let num = 42; // number
let name = "John"; // string
let isTrue = true; // boolean
let person = { name: "Alice", age: 30 }; // object
let fruits = ["apple", "banana", "orange"]; // object

console.log(typeof num);
console.log(typeof name);
console.log(typeof isTrue);
console.log (typeof person);
console.log(typeof fruits);
console.log(typeof null); // object 설계상 실수 

// typeof는 js에서 연산자로 취급됨
console.log(typeof ("A" + "B"));
// 연산 우선순위

// 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
let length = 16;  //  number
let lastName = "Brown";  // string
let score = [10, 20]; // object
let x = {
  firstName: "Nick",
  lastName: "Doe"
}; // object