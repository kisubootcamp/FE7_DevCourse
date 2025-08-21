// 1
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];

console.log(typeof num); // number
console.log(typeof name); // string
console.log(typeof isTrue); // boolean
console.log(typeof person); // object
console.log(typeof fruits); // object

// 2
let length = 16; // number
let lastName = "Brown"; // string
let score = [10, 20]; // object (array)
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; // object

// typeof는 연산자
console.log(typeof ("A" + "B")); // string
console.log(typeof "A" + "B"); // stringB -> A의 타입이 나온 뒤, B가 더해짐
