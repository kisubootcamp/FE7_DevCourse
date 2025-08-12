//함수 관련 호이스팅
greet();

// 함수 선언식(선언문)

function greet() {
  console.log("Hello");
}
//-> 선언 부분을 끌어올리는 게 호이스팅이니까 결과적으로 밑에와 같음

function greet1() {
  console.log("Hello");
}
greet();

//함수 표현식
//선언과 할당이 같이 있음
var greet = function greet() {
  console.log("Hello");
};
// -> 실제로 어떻게 실행되냐

var greet; //undefined
greet();
greet = function greet() {
  console.log("Hello");
};

// 함수는 var, let, const 똑같음
