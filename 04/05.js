// function sum(num1, num2) {
//   return num1 + num2;
//   console.log("dddsds");
// }

// const a = 10;
// const b = 20;

// const result = sum(a, b);

// console.log(`a와 b의 합은 = ${result}`);

// sum = function (num1, num2) {
//   return num1 + num2;
// };

const sum = (num1, num2) => num1 + num2;
console.log(sum(22, 3));

// 객체같은 경우 화살표 함수로 한 줄로 표현하려면 소괄호로 감싸면 됨.
const retrunValue = () => ({
  name: "jeong",
});

console.log(retrunValue());
