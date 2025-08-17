// Q1
function sum(...nums) {
  let result = 0;
  for (const v of nums) result += v;
  return result;
}
console.log(sum(1, 2, 3));

// Q2
function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

function min(num1, num2) {
  let result = num1 - num2;
  return result;
}

function mul(num1, num2) {
  let result = num1 * num2;
  return result;
}

function div(num1, num2) {
  let result = num1 / num2;
  return result;
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return '없는 기호입니다.';
  }
}

// Q3
const isEven = (num) => num % 2 === 0;
console.log(isEven(7));

// Q4
function sumArray(arr) {
  let result = 0;
  for (v of arr) result += v;
  return result;
}

const sumArray = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

console.log(sumArray([1, 2, 3])); // 6

// Q5
function findMax(arr) {
  let max = arr[0];
  for (v of arr) {
    if (v > max) max = v;
  }
  return max;
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// Q6
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString('hello')); // "olleh"

// Q7
function countCharacter(str, k) {
  let count = 0;
  for (v of str) {
    if (v === k) count++;
  }
  return count;
}
console.log(countCharacter('banana', 'a')); // 3

// Q8
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

const fac = function (num) {
  if (num === 1) return 1;
  return num * fac(num - 1);
};
console.log(fac(5));

// Q9
function triangle(wd, hg) {
  return wd * hg * 0.5;
}
console.log(triangle(10, 5));
