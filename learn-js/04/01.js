//함수
//함수 선언식 (함수 선언문)
function greet() {
  console.log("greet");
}
greet();

//함수 표현식
//네이밍 함수 디버깅에 유리
const hello = function aternoon() {
  console.log("hello");
};
hello();

//익명 함수
const aternoon = function () {
  console.log("aternoon");
};
aternoon();

//화살표 함수 ES6 추가
//즉시 실행 삼수
//화살표 함수는 함수 표현식과 구분된다. (엄밀히 따지면)
//화살표 함수가 변수에 담겨있다고 해서 함수 표현식이라고 할 수는 없다.
const arrFunc = () => {
  console.log("arrow function");
};

arrFunc();

//함수 코드의 재사용성
