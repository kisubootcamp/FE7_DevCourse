// 함수 선언식 (함수 선언문)
function greet() {
  console.log('greet');
}
greet();

// 함수 표현식
// named function (네이밍 함수)
const hello = function hello() {
  console.log('hello');
};
hello();

// unnamed function (익명 함수)
const afternoon = function () {
  console.log('Hello');
};
afternoon();

// 화살표 함수
// 즉시 실행함수
const arrFunc = (() => {
  console.log('arrow function');
})();

arrFunc();
