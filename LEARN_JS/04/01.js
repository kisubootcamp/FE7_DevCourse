// 함수
// 함수를 정의한다
// 함수를 실행(호출)한다
function greet() {
  console.log("greet");
}
greet();

// 함수 표현식
// 네이밍 함수
const hello = function afternoon() {
  console.log("greet");
};
hello();

// 익명 함수
const afternoon = function () {
  console.log("afternoon");
};
afternoon();

// 화살표 함수와 즉실 실행 함수
// 화살표 함수
const aftn = () => {
  console.log("aftn");
};
aftn();

// 즉시 실행 함수
(() => {
  console.log("arrow function");
})();
