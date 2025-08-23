// 1.

// 방법 1. (내가 푼 것)
// const sum = (...nums) => {
//   let total = 0;
//   for (const num of nums) {
//     total += num;
//   }
//   console.log(total);
// };

// 방법 2.
const sum = (...numbers) => numbers.reduce((sum, cur) => sum + cur, 0);
const result = sum(10, 20, 30, 40);
console.log(result);

// 2.

// 방법 1. (내가 푼 것)
// function 수학(num1, num2) {
//   console.log(`num1 + num2 = ${num1 + num2}`);
//   console.log(`num1 - num2 = ${num1 - num2}`);
//   console.log(`num1 * num2 = ${num1 * num2}`);
//   console.log(`num1 / num2 = ${num1 / num2}`);
// }

// 방법 2.

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "잘못된 연산자를 입력하셨습니다.";
  }
}

// 3.
function isEven(num) {
  console.log(num % 2 === 0 ? true : false);
}

// 4.
function sumArray(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}

// 5.
function findMax(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) max = num;
  }
  return max;
}

// 6.
function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// 7.
function countCharacter(string, alphabet) {
  let num = 0;
  for (const char of string) {
    if (char === alphabet) num++;
  }
  return num;
}

// 8.
function factorial(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

// 재귀 함수 - 나를 스스로 호출하는 함수
// 1. 종료 조건이 있을 것
// 2. 스스로가 스스로를 호출할 것

// 1부터 n까지의 합
function fac(n) {
  if (n === 0 || n === 1) return 1;
  return n * fac(n - 1);
}

console.log(fac(5));

// 9.
function triangleArea(밑변, 높이) {
  return 밑변 * 높이 * 0.5;
}
