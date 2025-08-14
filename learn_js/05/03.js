// 호이스팅
// 자바스크립트 문법을 선언과 할당으로 구분을 분리해서, 선언 부분을 최상위로 끌어올리는 현상

// console.log(num);
// let num = 10; // (let, const) -> 호이스팅 되지 않는다.(x) 호이스팅이 되지만, 초기화가 늦게 되는 것

// greet();

// // 함수 표현식
// var greet = function greet() {
//   console.log('Hello');
// }

var num = 5;
console.log(num);
function num() {
  return 10;
}
console.log(num);
console.log(num());
