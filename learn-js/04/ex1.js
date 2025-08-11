// Q1

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += i;
  }
  return result;
}

const sum2 = (...numbers) => numbers.reduce((sum, cur) => sum + cur, 0);
console.log(sum(1, 2, 3, 4, 5));

// Q2

getQ2Result = (a, b) => [a + b, a - b, a * b, a / b];
console.log(getQ2Result(1, 2));

// Q3

isEven = (n) => n % 2 == 0;
console.log(isEven(7));

// Q4

function sumArray(arr) {
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sumArray([1, 2, 3])); // 6

// Q5

function findMax(arr) {
  result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) result = arr[i];
  }
  return result;
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// Q6
function reverseString(str) {
  result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("hello")); // "olleh"

// Q7

function countCharacter(str, c) {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == c) count++;
  }
  return count;
}
console.log(countCharacter("banana", "a")); // 3

// Q8

function factorial(n) {
  result = 1;
  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

//Q9

triangleArea = (n, d) => (n * d) / 2;
console.log(triangleArea(10, 5));
