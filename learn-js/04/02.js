// dan => 매개변수 (parameter)
function gugudan(dan) {
  // ...
}

gugudan(3); // 3 => 인자 또는 인수 (argument)

// 매개변수는 정의에 대한 의무 X
// 정의됐으나 인자가 안 오면 undefined
function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 20); // 30
sum(10, 20, 30); // 30

// 가변 인자 함수 (ES5)
// 함수 내부에는 arguments가 기본 내장
// console.dir로 함수를 까보면 arguments가 있음
// 크롬 기준 볼드가 없는 건 감춰진 속성
function sum2() {
  console.log(arguments[0]); // 유사 배열 객체 => length 속성도 있음
  // arguments의 length 만큼 반복문을 돌리면 모든 인자 가능
  // arguments => 객체처럼 생겼지만 배열처럼 사용 가능한 객체 : 유사 배열 객체
  // 객체 내 속성으로 정의된 함수 -> 메소드(method)
}

// 나머지 매개변수 (ES6)
// ... -> 스프레드 연산자
// (a, b, ...nums) => a, b, [c, d] => 마지막에만 정의 가능
function sum(...nums) {
  console.log(nums); // [10, 20] 배열 형태로 들어옴
}

sum(10, 20);
