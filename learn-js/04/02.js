// 매개변수(parameter)
function gugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}
gugudan(9); // 3, 인자 또는 인수(argument)

//덧셈을 하는 함수
function sum(num1, num2) {
  console.log(num1, num2);
}
sum(10, 20);
sum(10, 20, 30); // 이렇게 해도 되기는 하는데 3번째 값은 들어가지 않음. 문법적인 버그는 아님

//가변인자 함수
function sum() {
  console.log(arguments); //유사 배열 객체
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments.length);
}

// 함수(function)  / 메서드(method)
const obj = {
  name: "sucoding",
  greet: function () {
    console.log("안녕");
  },
};

obj.greet();
