// 1. 변수 선언과 할당
const x = 10;
const y = 20;
const sum = x + y;
console.log(sum);

// 2. 변수 재할당
let name = "Alice";
name = "Bob";
console.log(name);

// 3. 상수
const PI = 3.14;
console.log(PI);

// 4. 변수 스왑
let a = 5;
let b = 10;
// const temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];
console.log(a, b);