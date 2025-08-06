console.log(typeof 10) // 변수타입 출력. typeof는 자바스크립트에서 연산자로 취급됨
console.log(typeof ("A"+"B")) // 소괄호로 적어도 출력됨. 우선연산자? 라서
console.log(typeof "A"+"B") // 이거랑 다름! typeof "A" 라는 값과 "B"를 더해서 문자열이 stringB거ㅏ 됨


// 연습문제
// 1. 변수타입 확인
// 1-a. 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
let num = 42;
let name = "John";
let isTrue = true;
let person = { name: "Alice", age: 30 };
let fruits = ["apple", "banana", "orange"];
console.log("변수 num의 타입 : "+ typeof num);
console.log("변수 name의 타입 : "+ typeof name);
console.log("변수 isTrue의 타입 : "+ typeof isTrue);
console.log("변수 person의 타입 : "+ typeof person);
console.log("변수 fruits의 타입 : "+ typeof fruits);
// 이릏게 출력됨
// 변수 num의 타입 : number
// 변수 name의 타입 : string
// 변수 isTrue의 타입 : boolean
// 변수 person의 타입 : object
// 변수 fruits의 타입 : object
// 배열도 왜 object임?? 의문점을 가져야한다... 개발자의 실수였다고 하네요 (강사님 피셜) null 도 object로 뜸

// 2. 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
let length = 16;  // number
let lastName = "Brown";  // string
let score = [10, 20]; // object
let x = {
  firstName: "Nick",
  lastName: "Doe"
}; // object