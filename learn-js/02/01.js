/*
    -기본 자료형
        - number
        - string
        - boolean
        - symbol(ES6)
        - undefined
        - null
        - bigInt(ES11)

    -참조 자료형
        - 배열
        - 객체
        ㄴ key[`value`]
        ㄴ key.value
        - 함수

*/

// 연습문제 1번
// 다음 변수들의 타입을 확인하여 콘솔에 출력하세요.
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
// typeof는 함수가 아님, 소괄호() 안써도됨,
// 소괄호 쓰는 겅우:("A"+"B") = string 같이 특수한 경우
// 소괄호 안 쓰면? => typeof "A"+"B" = stringB

// 연습문제 2번
// 다음 주석 친 부분에 주석 왼쪽에 있는 데이터의 자료형을 적어주세요.
let length = 16; //  number
let lastName = "Brown"; // string
let score = [10, 20]; // object
let x = {
  firstName: "Nick",
  lastName: "Doe",
}; // object

// array는 왜 obeject인가요?
// 브랜든 아이크: 설계 실수임, null도 object로 뜨는데 실수임
