let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];

console.log(typeof num);
console.log(typeof name);
console.log(typeof isTrue);

console.log(typeof person);
console.log(person.name);
console.log(person["age"]);

console.log(typeof fruits); //배열도 object -> 개발자의 실수
// ** undefined -> undefined
console.log(typeof null); // object -> 이것도 실수
console.log(fruits[2]); // "orange"

//2
let lenght = 16; //number
let lastName = "Brown"; //string
let score = [10, 20];
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; //object

console.log(typeof lenght);
console.log(typeof lastName);
console.log(typeof score); //?
console.log(typeof x);
//기본적으로 소괄호 없이 사용 -> typeof (x) :: X