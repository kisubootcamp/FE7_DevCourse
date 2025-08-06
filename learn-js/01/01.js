// WEB API ->
// BOM, DOM

// defer와 async는 외부 스크립트만 사용할 수 있다.

// 연습 문제 1.
const x = 10;
const y = 20;

const sum = x + y;
console.log(`x + y = ${sum}`); // x + y = 30

// 연습 문제 2.
let name = "Alice";
name = "Bob";
console.log(name); // Bob

// 연습 문제 3.
const pi = 3.14;
console.log(pi);

// 연습 문제 4.
let [a, b] = [5, 10];
[a, b] = [b, a]; // a와 b의 값을 교환
console.log(`a = ${a}, b = ${b}`); // a = 10, b = 5

// 연습 문제 4. 풀이 2.
let [c, d] = [5, 10];
let temp = c;
c = d;
d = temp; // a와 b의 값을 교환
