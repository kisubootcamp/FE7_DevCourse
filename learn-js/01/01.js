// var, let, const

var num = 10;
console.log(num); //값을 출력하기 위한 방법
/**
 *
 */

//연습문제
const x = 10;
const y = 20;
const sum = x + y;
console.log(sum);

let name = "Alice";
name = "Bob";
console.log(name);

const PI = 3.14;
console.log(PI);

let a = 5;
let b = 10;
let c;
c = a; //a = c; 가 아님
a = b;
b = c;
console.log(a, b);
