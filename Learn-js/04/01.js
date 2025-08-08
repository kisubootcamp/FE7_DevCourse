// 함수
// 함수를 정의한다 => 함수를 호출한다

function greet() {
  console.log("greet");
}
greet();

// 함수 표현식
// named function 네이밍 함수
const hello = function hello() {
  console.log("hello");
};
hello();

// unnamed function 익명 함수
const afternoon = function () {
  console.log("hello");
};
afternoon();

// 화살표 함수 => 즉시 실행 함수
(() => {
  console.log("arrow");
})();

const arrFunc = () => {
  console.log("arrow Function");
};
arrFunc();

// 함수 매개 변수 => 매개 변수는 정의에 대한 의무가 없다.
// (2개를 전달해도 2개 받고 3개를 전달해도 2개만 받음)
function sum1(num1, num2) {
  console.log(num1 + num2);
}
sum1(10, 20);

// 가변 인자 함수
function sum2() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log(result);
  //   console.log(arguments); // 유사 배열 객체
  //   console.log(arguments[0]);
  //   console.log(arguments[1]);
  //   console.log(arguments.length);
}
sum2(10, 20, 30);

// 함수(function) / 메서드(method)
const obj = {
  name: "hello",
  greet: function () {
    // => 메서드
    console.log("greet");
  },
};
obj.greet();

// 나머지 매개변수 (ES6)
// ... 스프레드 연산자
function sum3(num1, num2, ...nums) {
  console.log(num1);
  console.log(num2);
  console.log(...nums);
}
sum3(10, 20, 30, 40, 50);

//스코프(Scope), 변수가 유효한 범위
// 함수 스코프, 블록 스코프() => ES6 let const (var x)
// { }
function sum4(num1, num2) {
  const result = num1 + num2;
  console.log(result);
  {
    let x = 10;
    console.log(x);
  }
}
sum4(10, 20);
