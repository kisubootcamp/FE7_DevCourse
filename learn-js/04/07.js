// 연습문제

// Q1
function f1(...numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
}
console.log(f1(1, 2));

// Q2
function f2(n1, n2) {
  console.log(n1 + n2);
  console.log(n1 - n2);
  console.log(n1 * n2);
  console.log(n1 / n2);
}
f2(1, 2);

// Q3
function isEven(num) {
  if (num % 2 === 0) return true;
  else return false;
}
console.log(isEven(7));
// const isNum = (num) => num % 2 === 0;
// console.log(isNum(7));

// Q4
function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3])); // 6

// Q5
function findMax(arr) {
  let maxNum = arr[0];
  for (const num of arr) {
    if (maxNum < num) maxNum = num;
  }

  return maxNum;
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// Q6
function reverseString(str) {
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}
console.log(reverseString("hello")); // "olleh"

// Q7
function countCharacter(str, target) {
  let cnt = 0;
  for (char of str) {
    if (char === target) {
      cnt++;
    }
  }

  return cnt;
}
console.log(countCharacter("banana", "a")); // 3

// Q8
function factorial(num) {
  let answer = 1;
  for (i = num; i > 0; i--) {
    answer *= i;
  }
  return answer;
}
console.log(factorial(5));
// 재귀함수를 이용한 풀이
// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   }

//   return num * factorial(num - 1);
// }

// Q9
function triangleArea(bottom, height) {
  answer = (bottom * height) / 2;
  return answer;
}
console.log(triangleArea(10, 5));
