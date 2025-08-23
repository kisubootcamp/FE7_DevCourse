// function gugudan3(num) {
//   // 매개변수(parameter)
//   for (let i = 1; i <= 9; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
//   }
// }

// gugudan3(9);

// 덧셈을 하는 함수
// 가변 인자 함수
// function sum(num1, num2, num3) {
//   console.log(arguments); // 유사 배열 객체
//   console.log(num1 + num2 + num3);
// }

// sum(10, 20);
// sum(10, 20, 30);

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  console.log(result);
}

sum(10, 20, 30);
