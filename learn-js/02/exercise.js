/*
//자료형
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];

console.log(
  typeof num,
  typeof name,
  typeof isTrue,
  typeof person,
  typeof fruits
);

let length = 16; //number
let lastName = "Brown"; //string
let score = [10, 20]; //object
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; // object
*/
/*
//복합 대입 연산자
let x = 20;
x += 10;
console.log(x);
x -= 5;
console.log(x);
x /= 2;
console.log(x);
x *= 3;
console.log(x);
*/

/*
//비교 연산자
const age1 = 25;
const age2 = 30;

console.log(age1 > age2);
console.log(age1 === age2);
*/

//삼항 연산자
//1
let num = 10;
console.log(num < 0 ? "Negative" : num > 0 ? "Positive" : "Zero");

//2
let a = 10;
let b = 3;
let c = 5;

console.log(
  a > b
    ? b > c
      ? "a가 제일 크고 c가 제일 작다"
      : a > c
      ? "a가 제일 크고 b가 제일 작다"
      : "c가 제일 크고b가 제일 작다"
    : b > c
    ? "b가 제일 크고 a가 제일 작다"
    : "c가 제일 크고 a가 제일 작다"
);

//3
let number = 3;
console.log(number % 2 === 0 ? "Even" : "Odd");

//4
let isLoggedIn = false;
console.log(isLoggedIn === true ? "Welcome" : "Please log in");

//5
let age = 28;
console.log(age >= 18 ? "Adult" : "Minor");
