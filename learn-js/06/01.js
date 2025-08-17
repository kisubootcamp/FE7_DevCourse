// 호이스팅
// 선언과 할당중 선언을 최상위로 끌어올리는 행위

console.log(num);
var num = 10;

var num;
console.log(num);
num = 10;

// var 대신에 let과 const 를 사용하면 에러가 출력이됨
// let 은 변수의 값이 적용이 안되면 접근불가  (호이스팅 자체는 됨)

function printName() {
  console.log("greet"); // 함수 선언문
}
var printName = function printName() {
  console.log("greet"); // 함수 표현식
};
