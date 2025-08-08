//연습문제 쉬움

//1
function sum(...nums) {
  let sum = 0;
  for (const num of nums) sum += num;
  console.log(sum);
}

sum(10, 20, 40, 50);

//2
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
      return "잘못된 연산자를 입력하셨습니다";
  }
}

//3
const isNum = (num) => num % 2 === 0;
console.log(isNum(7));

//4
function sumArray(numbers) {
  let result = 0;
  for (num of numbers) {
    result += num;
  }
  return result;
}
console.log(sumArray([1, 2, 3]));
//5

function findMax(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return max;
}

console.log(findMax([1, 5, 3, 9, 2]));

//6
function reverseString(reverseStr) {
  let reverseString = "";
  for (let i = reverseStr.length - 1; i >= 0; i--) {
    reverseString += reverseStr[i];
  }
  return reverseString;
}

console.log(reverseString("hello")); // "olleh"

//7
function countCharacter(str, countStr) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (countStr === str[i]) sum++;
  }
  return sum;
}
console.log(countCharacter("banana", "a")); // 3

//선생님 간단풀이
const countCharac = (str, char) => str.split(char).length - 1;

//8

function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
// factorial 문제가 나오면 재귀함수를 쓰라고 나온 문제가 많음
function fac(n) {
  if ((n === 1) | (n === 0)) return 1;
  return n * fac(n - 1);
}

console.log(fac(5));

//9
function triangleArea(bottom, height) {
  return (bottom * height) / 2;
}

console.log(triangleArea(10, 5));
