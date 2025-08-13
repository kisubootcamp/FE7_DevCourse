// 호이스팅
// 선언과 할당중에서 선언을 최상위로 끌어올리는

console.log(num); //undefined ( 정상적으로 실행됨 호이스팅 때문)
var num = 10;

printName();

// 함수 선언식
// function printName() {
//   console.log('greet');
// }

// 함수 표현식
const printName = function printName() {
  console.log('greet');
};
