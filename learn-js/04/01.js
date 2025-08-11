// 함수
// 함수를 정의한다
// 함수를 실행(호출) 한다

// 함수 선언식(함수 선언문)
function greet() {
  console.log("greet");
}

greet();

// 함수 표현식(변수에 담으면 함수 표현식, 안 담고 그냥 하면 함수 선언식)
// 함수 표현식은 직접적으로 함수에 접근은 불가능하고 변수를 통해서 접근해야 한다

// named function (네이밍 함수)
const hello = function hello() {
  console.log("hello");
};

// unname function (익명 함수)
const wow = function () {
  console.log("wow");
};

//화살표 함수
//이렇게 함수 괄호로 감싸고 선언처럼 하면 선언이 됨
//변수에 담아서 하는 것도 가능
(() => {
  console.log("arrow function");
})();
