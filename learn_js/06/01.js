//호이스팅 :선언과 할당 중에서 선언을 최상위로 끌어올리는 행위

// 1. var : 호이스팅 됨.+ 할당도 됨.
var num = 10;
console.log(num);

// 1-1 동작메커니즘.
var num;
console.log(num);
num = 10;
console.log(num);

// 2. let, const : 호이스팅됨. but 할당 되기 전까지 사용할 수 없음.(초기화가 늦음.)
console.log(num);
let num = 10;
console.log(num);

// 3. 함수 선언식 : 호이스팅 됨.+ 할당도 됨.
printName();
function printName() {
  console.log('greet');
}
// 3-1 동작메커니즘.
function printName() {
  console.log('greet');
}
printName();

// 4. 함수 표현식 : 호이스팅 됨. but 할당 되기 전까지 사용할 수 없음.(초기화가 늦음.)
printName();
function printName() {
  console.log('greet');
}
