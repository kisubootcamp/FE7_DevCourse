// 원하는 만큼 함수안에 로직을 넣을 수 있음
// 중괄호 안에 해당
// 함수를 정의한다
// 함수를 호출한다

function greet() {
  console.log(greet); //<--   함수 선언식 (함수 선언문)
}
greet();

const hello = function hello() {
  console.log("hello"); // 함수 표현식
}; // 네이밍 함수    , 네이밍으로 할거면 변수명과 함수명을 일치

hello();

const afternoon = function () {
  console.log("afternoon");
}; // 익명 함수

afternoon();
// 함수는 코드 주머니

function gugudan(dan) {
  // 여기서 dan이 매개변수
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

gugudan(4); // 4 가 인자  매개변수와  인자 또는 인수 의 정의

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 20); //30
sum(10, 200); //210

// 매개 변수는 정의에 대한 의무가 없다.

function sum() {
  console.log(arguments); // 함수는 내부적으로 arguments 갖고 있음
  console.log(arguments[0]);
  console.log(arguments[1]); // arguments 는 유사 배열 객체
}
// 가변인자함수가 존재

//함수(function) / 메서드(method)

//나머지 매개변수
// ... 스프레드 연산자라고 함
function sum(...nums) {
  console.log(nums);
}

sum(10, 20, 30, 40);
