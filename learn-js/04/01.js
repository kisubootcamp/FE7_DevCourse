// 함수 선언식
function greet() {
  console.log("greet");
}

greet();

// 함수 표현식
// 내부 함수의 식별자는 중요하지 않음 변수명으로 실행
// named function (네이밍 함수)
// unname function (익명 함수)
const hello = function () {
  console.log("hello");
};

hello();

// 화살표 함수
const arrFunc = () => {
  console.log("arrow function");
};

// 화살표 함수는 함수의 내용이 return밖에 없다면 축약해서 표현할 수 있음

// 두 함수는 동일
const sum = (a, b) => a + b;

const sum2 = (a, b) => {
  return a + b;
};

// 객체를 return 할 땐 () 써주기
const value = () => ({ a: "b" });
