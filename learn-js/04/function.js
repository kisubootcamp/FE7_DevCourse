// 함수 선언식
function greet() {
  console.log("greet");
}

greet();

// 함수 표현식
// 내부 함수의 식별자는 중요하지 않음 변수명으로 실행
const hello = function () {
  console.log("hello");
};

hello();

/*

named function (네이밍 함수)
unname function (익명 함수)

*/

// 화살표 함수
const arrFunc = () => {
  console.log("arrow function");
};
