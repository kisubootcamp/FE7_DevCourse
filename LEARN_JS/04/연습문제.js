// Q1
const add = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
const sum1 = add(10, 20, 15);
console.log(sum1);

// Q1-2
function result() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
result(10, 20, 30, 40);
// arguments는 함수에 전달된 값들을 전부 담고 있는 유사 배열 객체

// Q2
const calc = (num1, num2) => {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
};
calc(10, 20);

// Q3
const isEven = (num1) => {
  if (num1 % 2 == 0) return "true";
  else return "false";
};
console.log(isEven(7));

// Q4
const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3]));

// Q5
const findMax = (array) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      max = array[i];
    }
  }
  return max;
};
console.log(findMax([1, 5, 3, 9, 2])); // 9

// Q6
const reverseString = (string) => {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};
console.log(reverseString("Hello"));

// Q7
const countcharacter = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char[0]) {
      count++;
    }
  }
  return count;
};
console.log(countcharacter("banana", "a"));

// Q8
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(3));

// Q9
const triangleArea = (num1, num2) => {
  return (num1 * num2) / 2;
};
console.log(triangleArea(10, 5));
