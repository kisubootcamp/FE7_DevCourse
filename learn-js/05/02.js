// 함수의 호이스팅

greet();

function greet() {
  console.log("Hello");
}

/*
함수의 본문 전체가 호이스팅 됨
*/

//////

greet2();

var greet2 = function greet2() {
  console.log("Hello2");
};
//TypeError: greet2 is not a function
/*
변수 greet2의 선언부만 호이스팅된다. 함수는 할당부
*/

///

var num;
function num() {
  return 10;
}
console.log(num); // function: num 함수로 인식

num = 5;
console.log(num); // 5 정수로 인식
console.log(num()); // 에러
/*
num = 5에 의해서 num은 함수가 아니라 변수가 되었음.
따라서 num is not a function 에러가 발생
*/
