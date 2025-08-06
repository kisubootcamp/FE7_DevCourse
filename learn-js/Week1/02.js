// 01 변수 타입 확인 문제
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];

console.log(typeof (num));
console.log(typeof (name));
console.log(typeof (isTrue));
console.log(typeof (person));
console.log(typeof (fruits));

// 02 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.

let length = 16;  //   number
let lastName = "Brown";  // string
let score = [10, 20]; // array (object)
let xObject = {
    firstName: "Nick",
    lastName: "Doe"
}; // object 

// 03 1. 복합대입연산자 연습
// 변수 `x`에 숫자 20을 할당하세요.
// 복합 대입 연산자를 사용하여 `x`에 10을 더하고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`에서 5를 빼고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`를 2로 나누고, 그 결과를 출력하세요.
// 복합 대입 연산자를 사용하여 `x`를 3으로 곱하고, 그 결과를 출력하세요.

let x = 20;
console.log( x += 10);
console.log( x -= 5);
console.log( x /= 2);
console.log( x *= 3);
console.log( x %= 2);