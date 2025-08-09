// 함수
// 함수를 정의한다
// 함수를 실행(호출)한다

// 함수 선언식(함수 선언문)
function greet() {
  console.log("greet");
}

greet();

// 함수 표현식
// named function (네이밍 함수)
const hello = function hello() {
  console.log("hello");
};

hello();

// unname function (익명 함수)
const aternoon = function () {
  console.log("aternoon");
};

aternoon();

// 화살표 함수
// 즉시 실행 함수
const arrFunc = () => {
  console.log("arrow function");
};
arrFunc();
