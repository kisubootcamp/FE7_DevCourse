// 함수
// 네이밍 함수
const func = function greet() {
  console.log("hello");
};

greet();

// 익명 함수
const func2 = function () {
  console.log("hello");
};

func2();

// 화살표 함수
// 즉시 실행 함수
const func3 = () => {
  console.log("arrow function");
};

// 코드를 짤 때는 일관적인 방식으로
// 함수를 사용하면 코드의 재사용성 증가

// 함수는 매개변수를 사용할 수 있다.

function greetUser(name) {
  console.log(`안녕 ${name}`);
}
greetUser("철수");
greetUser("영희");

// arguments - 유사 배열 객체
// 함수에 전달된 인자들을 배열처럼 다룰 수 있는 객체
function greetUsers() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(`안녕 ${arguments[i]}`);
  }
}

// 나머지 매개변수
// ... 스프레드 연산자(rest parameter)
// 함수의 매개변수로 전달된 인자들을 배열로 받을 수 있다.
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// 스코프: 변수가 유요한 범위
// 함수 스코프, 블록 스코프

//

const sum = (num1, num2) => {
  return num1 + num2;
};

const sum2 = (num1, num2) => num1 + num2;
