// 1
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
function sum(...numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
}
const sums = (...numbers) => numbers.reduce((sum, cur) => sum + cur, 0);
const result = sum(10, 20, 30, 40);

// 2
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.
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
console.log(calculate(0.1, 0.2, "+"));

// 3
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
const isNum = (num) => num % 2 === 0;
console.log(isNum(7));

// 4
function sumArray(numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
}
console.log(sumArray([1, 2, 3])); // 6

// 5
function findMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// 6
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // "olleh"

// 7.
function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
const countCharac = (str, char) => str.split(char).length - 1;
console.log(countCharac("banana", "a")); // 3

// 8
// - 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// - 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
function factorial(c) {
  let factorial = 1;
  for (let i = 1; i <= c; i++) {
    factorial *= i; // 1 * 2 * 3 * 4 * 5
  }
  return factorial;
}
console.log(factorial(5));

// 재귀 함수
// 1. 종료 조건이 있을 것
// 2. 스스로가 스스로를 호출할 것

// 1부터 n까지의 곱
// return 5 + 4 + 3 + 2 + 1
function sum(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}
console.log(sum(5));

function fac(n) {
  if (n === 0 || n === 1) return 1;
  return n * fac(n - 1);
}
console.log(fac(5));

//
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
function triangleArea(base, height) {
  return 0.5 * base * height;
}
console.log(triangleArea(10, 5));
