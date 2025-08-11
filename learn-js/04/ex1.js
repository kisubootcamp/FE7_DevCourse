// 1
const sum = (...nums) => {
  let sum = 0;

  for (const x of nums) {
    sum += x;
  }

  return sum;
};

// 2
const cal = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};

// 3
const isEven = (x) => x % 2 === 0;

// 4
const sumArray = (arr) => {
  let sum = 0;

  for (const x of arr) {
    sum += x;
  }

  return sum;
};

// 5
const findMax = (arr) => {
  let result = arr[0];

  for (const x of arr) {
    if (result < x) result = x;
  }

  return result;
};

// 6
const reverseString = (str) => {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
};

// 7
const countCharacter = (str, c) => {
  let count = 0;

  for (const ch of str) {
    if (ch === c) count++;
  }

  return count;
};

// 8
const factorial = (num) => {
  if (num < 2) return num;

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

// factorial => Recursion 문제
// 1. 종료 조건이 있을 것
// 2. 스스로를 호출할 것

function recursion(n) {
  if (n === 1) return 1;
  return n + sum(n - 1);
}

// 9
const triangleArea = (base, height) => (base * height) / 2;
